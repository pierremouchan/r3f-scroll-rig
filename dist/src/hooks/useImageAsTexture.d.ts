import { RefObject } from 'react';
import { Texture } from 'three';
declare function useImageAsTexture(imgRef: RefObject<HTMLImageElement>, { initTexture, premultiplyAlpha: PremultiplyAlpha }?: {
    initTexture?: boolean | undefined;
    premultiplyAlpha?: PremultiplyAlpha | undefined;
}): Texture;
export { useImageAsTexture };
