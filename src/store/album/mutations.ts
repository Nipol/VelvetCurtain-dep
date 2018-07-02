import { MutationTree } from 'vuex';
import { AlbumState } from './types';
import { getFileList, PinAdd } from '../../utils/getIPFS';

export const mutations: MutationTree<AlbumState> = {
	async loadPhotos(state) {
		state.photos = await getFileList();
	},
	async loadStared(state) {
		state.stared = await getFileList('Stared');
	},
	async pinPhoto(state, payload) {
		await PinAdd(payload);
	}
};
