const cloudName = import.meta.env.PUBLIC_CLOUDINARY_CLOUD_NAME || 'name';

type CloudinaryOptions = {
	width?: number;
	height?: number;
	crop?: string;
	gravity?: string;
	quality?: string;
	format?: string;
};

export function getImagePath(publicId: string, options: CloudinaryOptions = {}) {
	const {
		width,
		height,
		crop = 'fill',
		gravity,
		quality = 'auto',
		format = 'auto',
	} = options;

	const transformations = [
		format ? `f_${format}` : '',
		quality ? `q_${quality}` : '',
		width ? `w_${width}` : '',
		height ? `h_${height}` : '',
		crop ? `c_${crop}` : '',
		gravity ? `g_${gravity}` : '',
	]
		.filter(Boolean)
		.join(',');

	const encodedPublicId = publicId
		.split('/')
		.map((segment) => encodeURIComponent(segment))
		.join('/');

	return `https://res.cloudinary.com/${cloudName}/image/upload/${transformations}/${encodedPublicId}`;
}
