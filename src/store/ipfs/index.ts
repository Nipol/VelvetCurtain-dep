import { Module } from 'vuex';
import { actions } from './actions';
import { getters } from './getters';
import { mutations } from './mutations';
import { IPFSState } from './types';
import { RootState } from '../types';

export const state: IPFSState = {
	insatance: {},
	id: {}
};

const namespaced: boolean = true;

export const ipfs: Module<IPFSState, RootState> = {
	namespaced,
	state,
	actions,
	getters,
	mutations
};
