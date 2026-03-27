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

  const token = tokenData.access_token;

  const html = `<!DOCTYPE html>
<html>
<head><title>Authorized</title></head>
<body>
  <p>Completing authorization...</p>
  <script>
    (function() {
      var token = decodeURIComponent("${encodeURIComponent(token)}");
      var data = JSON.stringify({ token: token, provider: "github" });
      var authMsg = "authorization:github:success:" + data;
      var sent = false;

      // Method 1: try window.opener.postMessage
      try {
        if (window.opener) {
          window.opener.postMessage(authMsg, "*");
          sent = true;
        }
      } catch(e) {}

      // Method 2: use localStorage as cross-tab relay
      try {
        localStorage.setItem("decap-cms-auth", data);
      } catch(e) {}

      if (sent) {
        setTimeout(function() { window.close(); }, 500);
      } else {
        setTimeout(function() { window.close(); }, 1000);
      }
    })();
  </script>
</body>
</html>`;

  return new NextResponse(html, {
    headers: { 'Content-Type': 'text/html' },
  });
}
