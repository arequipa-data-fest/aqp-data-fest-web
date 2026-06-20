type SpeakerTag = {
	label: string;
};

type SpeakerBase = {
	name: string;
	role: string;
	imageUrl: string;
	imageAlt: string;
	imageWidth: number;
	imageHeight: number;
	tags: SpeakerTag[];
};

type SpeakerV2 = SpeakerBase & {
	variant: 'v2';
};

type SpeakerV3 = SpeakerBase & {
	variant: 'v3';
	description: string;
	badge?: string;
};

type Speaker = SpeakerV2 | SpeakerV3;

const renato = {
	name: 'Renato Amapanqui',
	role: 'Data Engineer',
	imageUrl: '/logos/SPEAKER.png',
	imageAlt: 'Renato Amapanqui',
	imageWidth: 268,
	imageHeight: 268,
	tags: [
		{ label: 'Data Architecture' },
		{ label: 'Cloud' },
	],
};

const createRenato = (variant: Speaker['variant']): Speaker => {
	if (variant === 'v3') {
		return { ...renato, variant, description: '' };
	}

	return { ...renato, variant };
};

export const speakersPage = {
	header: {
		kicker: 'Líderes de la industria',
		title: 'Nuestros ponentes',
		description: 'Conoce a los líderes que darán forma al futuro de la tecnología en Arequipa.',
	},
	speakers: [
		createRenato('v2'), createRenato('v2'), createRenato('v2'), createRenato('v2'),
		createRenato('v3'), createRenato('v2'), createRenato('v2'),
		createRenato('v2'), createRenato('v2'), createRenato('v2'), createRenato('v2'),
		createRenato('v2'), createRenato('v2'), createRenato('v3'),
		createRenato('v2'), createRenato('v2'), createRenato('v2'), createRenato('v2'),
	],
};
