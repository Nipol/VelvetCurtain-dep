import { ActionTree } from 'vuex';
import { IPFSState } from './types';
import { RootState } from '../types';

export const actions: ActionTree<IPFSState, RootState> = {
	IPFSInject({ commit }): any {
		commit('IPFSInject');
	},
	getId({ commit }): any {
		commit('getId');
	}
};
