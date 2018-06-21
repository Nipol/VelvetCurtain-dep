import { GetterTree } from 'vuex';
import { IPFSState } from './types';
import { RootState } from '../types';

export const getters: GetterTree<IPFSState, RootState> = {
	getInstance(state): any {
		return state.insatance;
	},
	getId(state): any {
		return state.id;
	}
};
