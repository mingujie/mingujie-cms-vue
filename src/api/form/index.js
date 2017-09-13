import instance from './instance';
import { convertRESTAPI } from '../util';

/** 素材库 */
function photoLibrary_get(opts) {
  return instance({
    method: 'get',
    url:  '/photoLibrary',
    opts: opts
  });
}

export {
  photoLibrary_get
};
