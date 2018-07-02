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

/**
 * getFileList
 * 
 */
export const getFileList = async (TargetAlbum = 'Albumtest'): Promise<Array<Object>> => {
	return new Promise<Array<Object>>((resolve, reject) => {
		try {
			if (window.ipfs !== undefined) {
				window.ipfs.files.ls(`/${TargetAlbum}`, (err: any, payload: Array<Object>) => {
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

/**
 * getFileStat
 * 
 */
export const getFileStat = async (filename: string): Promise<Object> => {
	return new Promise<Object>((resolve, reject) => {
		window.ipfs.files.stat(`/Albumtest/${filename}`, (err: any, payload: Object) => {
			if (err) {
				reject(err);
			}
			resolve(payload);
		});
	});
};

/**
 * renameFile
 * 
 */
export const renameFile = async (folderName: string, fileName: string, afterFileName: string): Promise<Object> => {
	return new Promise<Object>((resolve, reject) => {
		try {
			if (window.ipfs !== undefined) {
				window.ipfs.files.mv(`/${folderName}/${fileName}`, `/${folderName}/${afterFileName}`, (err: any) => {
					if (err) {
						reject(err);
					}
					resolve(true);
				});
			} else {
				reject('IPFS is undefined');
			}
		} catch (e) {
			console.error('IPFS Module Not Injected', e);
		}
	});
};

/**
 * existFile
 * 
 */
export const existFile = async (folderName: string, fileName: string): Promise<boolean> => {
	return new Promise<boolean>((resolve, reject) => {
		try {
			if (window.ipfs !== undefined) {
				window.ipfs.files.ls(`/${folderName}/${fileName}`, (err: any, file: object) => {
					if (err) {
						resolve(false);
					}
					resolve(true);
				});
			} else {
				reject('IPFS is undefined');
			}
		} catch (e) {}
	});
};

/**
 * copyFileToDest
 * 
 */
export const copyFileToDest = async (
	sourceFolderName: string,
	destFolderName: string,
	fileName: string
): Promise<Object> => {
	return new Promise<Object>((resolve, reject) => {
		try {
			if (window.ipfs !== undefined) {
				window.ipfs.files.cp(
					`/${sourceFolderName}/${fileName}`,
					`/${destFolderName}/${fileName}`,
					(err: any) => {
						if (err) {
							reject(err);
						}
						resolve(true);
					}
				);
			} else {
				reject('IPFS is undefined');
			}
		} catch (e) {
			console.error('IPFS Module Not Injected', e);
		}
	});
};

/**
 * removeFile
 * 
 */
export const removeFile = async (folderName: string, fileName: string): Promise<Object> => {
	return new Promise<Object>((resolve, reject) => {
		try {
			if (window.ipfs !== undefined) {
				window.ipfs.files.rm(`/${folderName}/${fileName}`, (err: any) => {
					if (err) {
						reject(err);
					}
					resolve(true);
				});
			} else {
				reject('IPFS is undefined');
			}
		} catch (e) {
			console.error('IPFS Module Not Injected', e);
		}
	});
};

export const AddPhotoToAlbum = async (filename: String, file: Buffer, Album = 'Albumtest'): Promise<Object> => {
	return new Promise<Object>((resolve, reject) => {
		window.ipfs.files.write(`/${Album}/${filename}`, file, { create: true }, (err: any) => {
			if (err) {
				reject(err);
			}
			resolve(true);
		});
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
