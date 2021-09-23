const { app, BrowserWindow, ipcMain  } = require("electron");
const Remote = require("@electron/remote/main");
const path = require('path')

let win;

function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({
    width: 1280,
    height: 720,
    backgroundColor: '#FFF',
    webPreferences: {
      enableRemoteModule: true,
      nodeIntegration: true,
      preload: path.join(__dirname, 'preload.js')
    },
    frame: false,
  });
  Remote.initialize();
  win.webContents.openDevTools()
  win.loadURL("http://localhost:3000");

  ipcMain.on('windowControls:maximize', () => {
    if (win.isMaximized()) {
      win.restore()
    } else {
      win.maximize()
    }
  })
  
  ipcMain.on('windowControls:minimize', () => {
    win.minimize()
  })
  
  ipcMain.on('windowControls:close', () => {
    win.close()
  })
}

app.whenReady().then(createWindow)


app.on("window-all-closed", function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});