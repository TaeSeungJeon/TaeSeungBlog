const DEFAULT_SCOPE = 'read:user,user:email';

// GitHub OAuth 로그인 시작.
// OAuth CSRF 방어: 로그인 시작마다 일회용 state 발급 후 sessionStorage에 보관한다.
// CallbackPage가 이 state 일치를 검증하므로, 모든 로그인 진입점은 이 함수를 거쳐야 한다.
export function startGithubLogin(scope: string = DEFAULT_SCOPE): void {
    const state = crypto.randomUUID();
    sessionStorage.setItem('oauth_state', state);
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${import.meta.env.VITE_GITHUB_CLIENT_ID}&scope=${scope}&state=${state}`;
}
