const { app, BrowserWindow } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');

let mainWindow;

const createWindow = () => {
	mainWindow = new BrowserWindow({ width: 1224, height: 768 });
	mainWindow.loadURL(
		isDev
			? 'http://localhost:3000'
			: `file://${path.join(__dirname, '../build/index.html')}`
	);
	if (isDev) {
		// Open the DevTools
		mainWindow.webContents.openDevTools();
	}
	mainWindow.on('closed', () => (mainWindow = null));
};

app.allowRendererProcessReuse = true;
app.on('ready', createWindow);

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
	if (mainWindow === null || BrowserWindow.getAllWindows().length === 0) {
		createWindow();
	}
});
