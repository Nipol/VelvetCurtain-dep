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
		width           : 1280,
		height          : 800,
		titleBarStyle   : 'hiddenInset',
		backgroundColor : '#ffffff',
		webPreferences  : {
			nodeIntegration : true,
		}
		// icon: `file://${__dirname}/dist/assets/logo.png`
	});

	const startUrl =
		process.env.ELECTRON_START_URL ||
		url.format({
			pathname : path.join(__dirname, './index.html'),
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