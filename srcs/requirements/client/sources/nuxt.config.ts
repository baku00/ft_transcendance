// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },

	runtimeConfig: {
		public: {
			BASE_URL: 'https://moneychill.ch',
			API_URL: 'https://moneychill.ch/api',
			LOGIN_PAGE: '/auth/login',
			REGISTER_PAGE: '/auth/register',
			AUTH_ROUTE: '/auth/',
			HOME_PAGE: '/',
			JWT_SECRET: `-----BEGIN PUBLIC KEY-----
MIGbMBAGByqGSM49AgEGBSuBBAAjA4GGAAQAnY6U5BwI1ZLL7VC9Ss2AuSxmBOTA
u7itsw1wns2LcewqyhiKDco2h1xBGg10wcD/IDRhvPRPimGnZWPmiqle3loANXjf
sDHlvGzdIkE7O2sjl5DOpSnNSjItY032D0kC6oM1MbGpEhzqdBYwJyzoPi+Cz7qZ
2nxpxGkKSXm+x+46kyA=
-----END PUBLIC KEY-----`,
			SECRET_KEY_PASSWORD: 'P47hEK:P+8F~tW_NGjku4h3JD*c79@{7DF}fLTRyU96R5,)2$Pk#z24xn54eFA5m7a^/?6dWa5]%4y]tC-b3wUWy3!9.=Sz6f[r4;)E5(',
		}
	},

	modules: ['nuxt-icon', '@vite-pwa/nuxt'],
	pwa: {
		manifest: {
			name: 'MoneyChill',
			short_name: 'MoneyChill',
			description: 'MoneyChill',
			icons: [
				{
					src: 'logo.jpeg',
					sizes:'192x192',
					type: 'image/jpeg'
				}
			]
		}
	},
	app: {
		head: {
			title: 'MoneyChill',
			charset: 'utf-8',
			viewport: 'with=device-width, initial-scale=1, maximum-scale=1',
		}
	},
	devServer: {
		port: 3000,
	}
});
