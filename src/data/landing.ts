export const landingData = {
	hero: {
		titlePrefix: 'El futuro se construye con',
		titleHighlight: 'datos',
		description: 'El encuentro de datos, tecnología e innovación que impulsa ideas, decisiones y el futuro.',
		date: { label: 'Fecha', value: '10 de julio' },
		location: { label: 'Lugar', value: ['Auditorio UNSA', 'Escuela'] },
		primaryCta: { label: 'Quiero ser parte', href: '#registro' },
		secondaryCta: { label: 'Grupo informativo', href: '#grupo-informativo' },
	},
	countdown: {
		ariaLabel: 'Cuenta regresiva hasta el evento',
		targetDate: '2026-07-10T09:00:00-05:00',
		inscritos: '+4,600',
		inscritosLabel: 'inscritos',
		items: [
			{ key: 'days', label: 'Días' },
			{ key: 'hours', label: 'Horas' },
			{ key: 'minutes', label: 'Minutos' },
			{ key: 'seconds', label: 'Segundos' },
		],
	},
	aboutEvent: {
		title: 'Conoce más del evento',
		description: [
			'Sumérgete en la frontera de la Inteligencia Artificial y la Ciencia de Datos. Un evento diseñado para conectar, aprender e innovar a través de masterclass y paneles con referentes de alto nivel, desafiamos ideas, ampliamos perspectivas y transformamos la formación académica en visión, acción e impacto real.',
		],
		media: {
			imageUrl: '/logos/ACM-FOTO.png',
			alt: 'Integrantes del ACM Comité de IA de la UNSA',
			width: 812,
			height: 437,
		},
		organizersLabel: 'Organizadores',
		collaboratorLabel: 'Colaborador',
		organizers: [
			{
				logoUrl: '/logos/ACM-IA-LOGO.png',
				alt: 'ACM Comité de IA',
			},
			{
				logoUrl: '/logos/UNSA-LOGO.png',
				alt: 'Universidad Nacional de San Agustín de Arequipa',
			},
		],
		collaborators: [
			{
				logoUrl: '/logos/DATA-WIZZARDS-LOGO.png',
				alt: 'Data Wizard',
			},
		],
	},
} as const;
