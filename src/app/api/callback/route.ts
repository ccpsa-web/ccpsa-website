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
  <p>Authorized. This window will close automatically.</p>
  <script>
    (function() {
      var token = decodeURIComponent("${encodeURIComponent(token)}");
      var message = JSON.stringify({ token: token, provider: "github" });
      var authMsg = "authorization:github:success:" + message;

      function trySend() {
        if (window.opener) {
          window.opener.postMessage(authMsg, window.opener.origin || "*");
          setTimeout(function() { window.close(); }, 500);
        } else {
          document.body.innerHTML = "<p>Authorization successful. Please close this window and refresh the admin page.</p>";
        }
      }

      if (document.readyState === "complete") {
        trySend();
      } else {
        window.addEventListener("load", trySend);
      }
    })();
  </script>
</body>
</html>`;

  return new NextResponse(html, {
    headers: { 'Content-Type': 'text/html' },
  });
}
