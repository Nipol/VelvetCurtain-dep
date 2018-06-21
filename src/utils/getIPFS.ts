import ipfsAPI from 'ipfs-api';

declare let window: any;

window.ipfs = ipfsAPI('localhost', '5001');

export const Instance = new Promise<any>((resolve, reject) => {
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

export const Id = new Promise<Object>((resolve, reject) => {
	try {
		if (window.ipfs !== undefined) {
			window.ipfs.id((err: any, payload: Object) => {
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
