declare module '*.vue' {
	import Vue from 'vue';
	export default Vue;
}

declare namespace Window {
	interface web3 {
		label: string;
		link: string;
	}
}
