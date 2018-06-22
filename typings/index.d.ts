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

declare namespace ipfs {
	interface Id {
		id: string;
		publicKey: string;
		addresses: string[];
		agentVersion: string;
		protocolVersion: string;
	}
}

declare module '@fortawesome/*';
