import { app, BrowserWindow, ipcMain, screen } from "electron";
import { join } from "path";

let win: BrowserWindow | null = null;
let configWin: BrowserWindow | null = null;

app.whenReady().then(() => {
  const primaryDisplay = screen.getPrimaryDisplay();
  const { height } = primaryDisplay.workAreaSize;

  configWin = new BrowserWindow({
    width: 400,
    height: 400,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
    autoHideMenuBar: true
  });

  configWin.loadFile(join(app.getAppPath(), "dist-react/index.html"));

  ipcMain.on("set-user-id", (_event, userId) => {
    if (configWin) {
      configWin.close();
    }

    win = new BrowserWindow({
      transparent: true,
      frame: false,
      alwaysOnTop: true,
      focusable: false,
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
      },
      x: 0,
      y: 0,
      width: 800,
      height,
    });

    win.loadURL(
      `https://streamers-goodies.vercel.app/widgets/chat-box/vertical/${userId}`
    );

    win.on("ready-to-show", () => {
      if (win) {
        win.show();
        win.setContentProtection(true);
        win.setIgnoreMouseEvents(true, { forward: true });
      }
    });
  });
});
