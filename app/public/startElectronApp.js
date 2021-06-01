const { app, BrowserWindow } = require('electron');

function getAppUrl() {
  if (!process.env.PORT) {
    throw new Error('Expected environment variable PORT to be defined');
  }

  return `http://localhost:${process.env.PORT}`;
}

function createWindow() {
  const browserWindow = new BrowserWindow({ width: 800, height: 600 });
  browserWindow.loadURL(getAppUrl());
}

app.on('ready', createWindow);
