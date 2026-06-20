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
	experience: {
		title: 'Experiencia Integral',
		items: [
			{
				title: 'Almuerzo Incluido',
				description: 'Disfruta de un almuerzo de networking diseñado para conectar con otros profesionales y ponentes en un ambiente relajado.',
				icon: 'lunch',
			},
			{
				title: 'Coffee Break',
				description: 'Mantén la energía alta durante todo el día con nuestras estaciones de café y snacks premium, perfectas para pausas creativas.',
				icon: 'coffee',
			},
		],
	},
	mainTopics: {
		title: 'Temas principales',
		items: [
			{
				title: 'Inteligencia Artificial y Machine Learning',
				icon: 'ai',
			},
			{
				title: 'Ingeniería de Datos',
				icon: 'database',
			},
			{
				title: 'Analítica Avanzada',
				icon: 'analytics',
			},
			{
				title: 'Big Data & Cloud',
				icon: 'cloud',
			},
		],
	},
	featuredSpeakers: {
		eyebrow: 'Líderes de la industria',
		title: 'Nuestro speakers',
		viewAllLabel: 'Ver todos los ponentes',
		viewAllHref: '/ponentes',
		speakers: [
			{
				name: 'Renato Amapanqui',
				company: '',
				tag: 'Data Science',
				imageUrl: '/logos/SPEAKER.png',
				imageAlt: 'Renato Amapanqui',
				imageWidth: 268,
				imageHeight: 268,
			},
			{
				name: 'Gustavo Crehanna',
				company: '',
				tag: 'AI & ML',
				imageUrl: '/logos/SPEAKER.png',
				imageAlt: 'Gustavo Crehanna',
				imageWidth: 268,
				imageHeight: 268,
			},
			{
				name: 'Yury',
				company: 'Google',
				tag: 'Cloud Arch',
				imageUrl: '/logos/SPEAKER.png',
				imageAlt: 'Yury',
				imageWidth: 268,
				imageHeight: 268,
			},
			{
				name: 'Luis Coronel',
				company: '',
				tag: 'Data Eng',
				imageUrl: '/logos/SPEAKER.png',
				imageAlt: 'Luis Coronel',
				imageWidth: 268,
				imageHeight: 268,
			},
		],
	},
} as const;
