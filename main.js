console.log('##tdms410##');

const {
	app,
	BrowserWindow
} = require('electron');
const path = require('path');
const fs = require("fs");
function createWindow() {
	const mainWindow = new BrowserWindow({
		width: 800,
		height: 900,
		webPreferences: {
			preload: path.join(__dirname, 'preload.js'),
			nodeIntegration: false,
			contextIsolation: false,
		}
	});

	mainWindow.loadFile('pages/login.html');
}

app.whenReady().then(() => {
	createWindow()

	app.on('activate', function () {

		if (BrowserWindow.getAllWindows().length === 0) createWindow()
	});
});


app.on('window-all-closed', function () {
	if (process.platform !== 'darwin') app.quit()
});

	