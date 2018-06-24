const { app, BrowserWindow } = require('electron');
if (process.env.ELECTRON_START_URL) {
	require('electron-reload')(__dirname);
}
let win;

function createWindow() {
	win = new BrowserWindow({
		width           : 1024,
		height          : 800,
		titleBarStyle   : 'hiddenInset',
		backgroundColor : '#ffffff'
		// icon: `file://${__dirname}/dist/assets/logo.png`
	});

	win.loadURL(`file://${__dirname}/build/index.html`);
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

app.on('ready', createWindow);

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
