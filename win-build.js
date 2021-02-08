const electronInstaller = require('electron-winstaller');

try {
    await electronInstaller.createWindowsInstaller({
      appDirectory: '/tmp/build/my-app-64',
      outputDirectory: '/tmp/build/installer64',
      authors: 'RmR',
      exe: 'umd-app.1.0.0.exe',
      iconUrl: './icons/win/icon.ico',
      setupIcon: './favicon.ico'
    });
    console.log('It worked!');
  } catch (e) {
    console.log(`No dice: ${e.message}`);
  }