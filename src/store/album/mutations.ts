import { MutationTree } from 'vuex';
import { AlbumState } from './types';
import { PinList, PinAdd } from '../../utils/getIPFS';

export const mutations: MutationTree<AlbumState> = {
	async loadAlbum(state) {
		state.photos = await PinList();
		return state;
	},
	async pinPhoto(state, payload) {
		await PinAdd(payload);
		return state;
	}
};
