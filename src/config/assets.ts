export const ASSETS_BASE_PATH = '/logos';

/**
 * Returns the full path for an image asset.
 * To switch to Cloudinary or another CDN, update the ASSETS_BASE_PATH.
 * @param filename - The filename of the image (e.g., 'SPEAKER.png')
 * @returns The full path to the image
 */
export const getImagePath = (filename: string): string => {
  // Ensure we don't double slash if filename already starts with one
  const cleanFilename = filename.startsWith('/') ? filename.slice(1) : filename;
  // Ensure base path doesn't end with a slash for clean joining
  const cleanBasePath = ASSETS_BASE_PATH.endsWith('/') 
    ? ASSETS_BASE_PATH.slice(0, -1) 
    : ASSETS_BASE_PATH;
    
  return `${cleanBasePath}/${cleanFilename}`;
};
