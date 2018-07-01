import { MutationTree } from 'vuex';
import { AlbumState } from './types';
import { getFileList, PinAdd } from '../../utils/getIPFS';

export const mutations: MutationTree<AlbumState> = {
	async loadAlbum(state) {
		state.photos = await getFileList();
		return state;
	},
	async pinPhoto(state, payload) {
		await PinAdd(payload);
		return state;
	}
};
