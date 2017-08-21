var electron = require('electron')
var {app, BrowserWindow} = electron;
var system = require('@paulcbetts/system-idle-time/addon');
var checkIdleTime;
var mainWindow;

app.on('ready', function() {
  setTimer();
});

function setTimer() {
  var waitingTime = 10000;
  checkIdleTime = setInterval(function () {
    if(system.getIdleTime() > waitingTime) {
      createWindow()
    }
  }, 1000);
}

function createWindow() {
  if(mainWindow == null) {
    mainWindow = new BrowserWindow()
    mainWindow.setFullScreen(true)
    mainWindow.loadURL('file://' + __dirname + '/promotion.html')
  } else {
    app.show();
    app.focus();
  }
  clearInterval(checkIdleTime);
}

function hideScreen() {
  app.hide();
  setTimer();
}

exports.hideScreen = hideScreen;

var ipc = electron.ipcMain;

ipc.on('errorInWindow', function(event, data){
    console.log(data)
});
