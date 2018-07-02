import { ActionTree } from 'vuex';
import { AlbumState } from './types';
import { RootState } from '../types';

export const actions: ActionTree<AlbumState, RootState> = {
	loadPhotos({ commit }): any {
		commit('loadPhotos');
	},
	loadStared({ commit }): any {
		commit('loadStared');
	},
	pinPhoto({ commit }, payload): any {
		commit('pinPhoto', payload);
	},
	getPhotoHash({ commit }): any {
		commit('getPhotoHash');
	}
};
