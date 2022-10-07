// video.js doesn't have sideEffects: false in package.json
import vjs from 'video.js';
import {OnlyFromWithChild} from './OnlyFromWithChild';
export const WithChild = () => OnlyFromWithChild(vjs);