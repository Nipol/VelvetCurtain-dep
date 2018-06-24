import { ActionTree } from 'vuex';
import { AlbumState } from './types';
import { RootState } from '../types';

export const actions: ActionTree<AlbumState, RootState> = {
	loadAlbum({ commit }): any {
		commit('loadAlbum');
	},
	pinPhoto({ commit }, payload): any {
		commit('pinPhoto', payload);
	},
	getPhotoHash({ commit }): any {
		commit('getPhotoHash');
	}
};
