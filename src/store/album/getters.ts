import { GetterTree } from 'vuex';
import { AlbumState } from './types';
import { RootState } from '../types';

export const getters: GetterTree<AlbumState, RootState> = {
	getAlbum(state): any {
		return state.photos;
	}
};
