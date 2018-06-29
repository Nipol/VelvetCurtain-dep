import ipfsAPI from 'ipfs-api';

declare let window: any;

window.ipfs = ipfsAPI('localhost', '5001');

export const Instance = async (): Promise<any> => {
	return new Promise<any>((resolve, reject) => {
		try {
			if (window.ipfs !== undefined) {
				resolve(window.ipfs);
			} else {
				reject('IPFS is undefined');
			}
		} catch (e) {
			console.error('IPFS Module Not Injected', e);
		}
	});
};

export const Id = async (): Promise<object> => {
	return new Promise<object>((resolve, reject) => {
		try {
			if (window.ipfs !== undefined) {
				window.ipfs.id((err: any, payload: object) => {
					if (err) {
						throw err;
					}
					resolve(payload);
				});
			} else {
				reject('IPFS is undefined');
			}
		} catch (e) {
			console.error('IPFS Module Not Injected', e);
		}
	});
};

export const PinList = async (): Promise<Array<object>> => {
	return new Promise<Array<object>>((resolve, reject) => {
		try {
			if (window.ipfs !== undefined) {
				window.ipfs.pin.ls({ type: 'recursive' }, (err: any, payload: Array<object>) => {
					if (err) {
						throw err;
					}
					console.log('Call Pinlist');
					resolve(payload);
				});
			} else {
				reject('IPFS is undefined');
			}
		} catch (e) {
			console.error('IPFS Module Not Injected', e);
		}
	});
};

export const PinAdd = async (hash: string): Promise<Array<object>> => {
	return new Promise<Array<object>>((resolve, reject) => {
		try {
			if (window.ipfs !== undefined) {
				window.ipfs.pin.add(hash, { recursive: false }, (err: any, payload: Array<object>) => {
					if (err) {
						throw err;
					}
					resolve(payload);
				});
			} else {
				reject('IPFS is undefined');
			}
		} catch (e) {
			console.error('IPFS Module Not Injected', e);
		}
	});
};
