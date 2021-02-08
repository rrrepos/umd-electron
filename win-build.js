const electronInstaller = require('electron-winstaller');

try {
    electronInstaller.createWindowsInstaller({
      appDirectory: './',
      outputDirectory: './',
      authors: 'RmR',
      exe: 'umd-app.1.0.0.exe',
      iconUrl: './icons/win/icon.ico',
      setupIcon: './favicon.ico'
    }).then(res => {
        console.log('It worked!');
    });
  } catch (e) {
    console.log(`No dice: ${e.message}`);
  }