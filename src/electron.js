const { app, BrowserWindow, Menu } = require('electron');
const isDev = require('electron-is-dev');
const path = require('path');

let mainWindow;

const createWindow = () => {
	mainWindow = new BrowserWindow({
		width: 1224,
		height: 768,
		titleBarStyle: 'hidden',
		frame: false,
		useContentSize: true,
		resizable: false,
		webPreferences: {
			webSecurity: true,
			preload: path.join(__dirname, 'preload.js'),
		},
	});
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

Menu.setApplicationMenu(false);
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
