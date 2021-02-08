const { app, BrowserWindow } = require('electron');
var fs = require('fs');

app.disableHardwareAcceleration()
if (require('electron-squirrel-startup')) return app.quit();

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    backgroundColor: "#1e1e1e",
    icon: "./icons/png/1024x1024.png",
    webPreferences: {
      nodeIntegration: true
    }
  });
  win.setMenu(null);
  const _filepath = process.argv[1];
  let arraybuffer;
  if (_filepath) {
    try {
      arraybuffer = fs.readFileSync(_filepath)
    } catch (err) {
      console.error(err)
    }
  }
  win.loadURL("https://rrrepos.github.io/umd-project-org/electron");
  win.webContents.on('did-finish-load', () => {
    if (arraybuffer) {
      win.webContents.send("fileinfo", { "filepath": _filepath, "buffer": arraybuffer });
    }
  });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
});
