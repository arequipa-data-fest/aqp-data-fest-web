export const siteConfig = {
	name: 'Arequipa Data Fest 2026',
	description:
		'El encuentro de datos, tecnología e innovación que impulsa ideas, decisiones y el futuro en Arequipa.',
	logoPublicId: 'branding/logo-main',
	logo: {
		alt: 'Arequipa Data Fest 2026',
	},
	navigation: {
		skipLinkLabel: 'Saltar al contenido principal',
		mainAriaLabel: 'Navegación principal',
		mobileAriaLabel: 'Navegación móvil',
		mobileMenuLabel: 'Abrir menú de navegación',
		registrationLabel: 'Inscríbete',
	},
	footer: {
		ariaLabel: 'Pie de página',
		title: 'Sé parte del evento pionero de data para la ciudad de Arequipa',
		registrationLabel: 'Quiero ser parte',
		groupLabel: 'Grupo informativo',
		copyright: '© 2026 Arequipa Data Fest. Todos los derechos reservados.',
		networkPublicId: 'branding/logo-footer',
	},
	registrationUrl: 'https://luma.com/7a2wz8cs',
	informativeGroupUrl: 'https://chat.whatsapp.com/D3AlPpGFWdNH6JscEz9iH5',
} as const;

export const navigationLinks = [
	{ label: 'Inicio', href: '/' },
	{ label: 'Ponencias', href: '/speakers' },
	{ label: 'Agenda', href: '/agenda' },
	{ label: 'Certificado', href: '/certificate' },
] as const;
