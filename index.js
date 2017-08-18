var electron = require('electron')
var system = require('@paulcbetts/system-idle-time/addon');
var app = electron.app
var BrowserWindow = electron.BrowserWindow
var checkIdleTime;
const ipc = require('electron').ipcRenderer

app.on('ready', function(){
  var waitingTime = 10000
  checkIdleTime = setInterval(function () {
    if(system.getIdleTime() > waitingTime) {
      createWindow()
    }
  }, 1000);

})

function createWindow() {
  var mainWindow = new BrowserWindow()
  mainWindow.setFullScreen(true)
  mainWindow.loadURL('file://' + __dirname + '/promotion.html')
  clearInterval(checkIdleTime);
}
