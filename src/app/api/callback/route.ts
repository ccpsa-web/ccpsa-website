import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get('code');

  if (!code) {
    return new NextResponse('Missing code parameter', { status: 400 });
  }

  const clientId = process.env.OAUTH_GITHUB_CLIENT_ID;
  const clientSecret = process.env.OAUTH_GITHUB_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    return new NextResponse('OAuth not configured', { status: 500 });
  }

  const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      client_id: clientId,
      client_secret: clientSecret,
      code,
    }),
  });

  const tokenData = await tokenResponse.json();

  if (tokenData.error) {
    return new NextResponse(`OAuth error: ${tokenData.error_description}`, { status: 400 });
  }

  const html = `
<!DOCTYPE html>
<html>
<head><title>Authorized</title></head>
<body>
  <p>Authorized. This window will close automatically.</p>
  <script>
    (function() {
      function sendMessage(message) {
        var target = window.opener || window.parent;
        if (target) {
          target.postMessage(
            'authorization:github:success:' + JSON.stringify(message),
            '*'
          );
        }
        window.close();
      }
      sendMessage({ token: "${tokenData.access_token}", provider: "github" });
    })();
  </script>
</body>
</html>`;

  return new NextResponse(html, {
    headers: { 'Content-Type': 'text/html' },
  });
}
```

**File 3:** Update `public/admin/index.html` — edit the existing file and replace the backend block:

Find:
```
      backend: {
        name: "github",
        repo: "ccpsa-web/ccpsa-website",
        branch: "main",
        base_url: "https://sveltia-cms-auth.netlify.app"
      },
```

Replace with:
```
      backend: {
        name: "github",
        repo: "ccpsa-web/ccpsa-website",
        branch: "main",
        base_url: window.location.origin,
        auth_endpoint: "api/auth"
      },
