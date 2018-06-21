const { app, BrowserWindow } = require('electron');
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
