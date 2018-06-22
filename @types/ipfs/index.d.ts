declare namespace ipfs {
	interface Id {
		id: string;
		publicKey: string;
		addresses: string[];
		agentVersion: string;
		protocolVersion: string;
	}
}
