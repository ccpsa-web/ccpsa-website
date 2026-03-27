import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const provider = request.nextUrl.searchParams.get('provider');

  if (provider !== 'github') {
    return NextResponse.json({ error: 'Unsupported provider' }, { status: 400 });
  }

  const clientId = process.env.OAUTH_GITHUB_CLIENT_ID;
  if (!clientId) {
    return NextResponse.json({ error: 'OAuth not configured' }, { status: 500 });
  }

  const scope = 'repo,user';
  const redirectUri = `${request.nextUrl.origin}/api/callback`;

  const authUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${scope}`;

  return NextResponse.redirect(authUrl);
}
