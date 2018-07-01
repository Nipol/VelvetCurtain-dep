import { MutationTree } from 'vuex';
import { IPFSState } from './types';
import { Instance, Id, AddPhotoToAlbum } from '../../utils/getIPFS';

export const mutations: MutationTree<IPFSState> = {
	async IPFSInject(state) {
		state.insatance = await Instance();
		state.id = await Id();
		return state;
	},
	async getId(state) {
		state.id = await Id();
		return state;
	},
	async AddPhotoToAlbum(state, payload) {
		console.log(await AddPhotoToAlbum(payload.filename, payload.file));
	}
};
