const { app, BrowserWindow, ipcMain } = require('electron');
const IPFS = require('ipfs');
const path = require('path');
const url = require('url');

if (process.env.ELECTRON_START_URL) {
	require('electron-reload')(__dirname);
}

let win;

function createWindow() {
	win = new BrowserWindow({
		width           : 1024,
		height          : 800,
		titleBarStyle   : 'hiddenInset',
		backgroundColor : '#ffffff',
		webPreferences  : {
			nodeIntegration : false,
			preload         : __dirname + '/preload.js'
		}
		// icon: `file://${__dirname}/dist/assets/logo.png`
	});

	const startUrl =
		process.env.ELECTRON_START_URL ||
		url.format({
			pathname : path.join(__dirname, './build/index.html'),
			protocol : 'file:',
			slashes  : true
		});

	win.loadURL(startUrl);

	win.on('closed', function() {
		win = null;
	});
}

app.on('ready', () => {
	createWindow();

	const ipfsoption = {
		EXPERIMENTAL : {
			pubsub : true,
			dht    : true
		}
	};

	// Spawn your IPFS node \o/
	const node = new IPFS(ipfsoption);

	node.on('ready', () => {
		node.config.get((err, config) => {
			if (err) {
				return console.log(err);
			}
			console.log(config);
		});
	});
});

app.on('window-all-closed', function() {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', function() {
	if (win === null) {
		createWindow();
	}
});
