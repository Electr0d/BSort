const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');



app.on('ready', () => {
  const window = new BrowserWindow({
    title: 'bsort',
    height: 800,
    width: 600,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true
    },
  });

  window.loadURL(
    url.format({
      slashes: true,
      protocole: 'file:',
      pathname: path.join(__dirname, 'mainWindow/mainWindow.html')
    })
  )
})