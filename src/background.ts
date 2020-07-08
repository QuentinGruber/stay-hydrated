"use strict";
declare const __static: string;
const AppLogo = path.join(__static, "assets/logo.png");
import {
  app,
  protocol,
  BrowserWindow,
  Menu,
  Tray,
  nativeImage,
} from "electron";
import { createProtocol } from "vue-cli-plugin-electron-builder/lib";
import installExtension, { VUEJS_DEVTOOLS } from "electron-devtools-installer";
import path from "path";
const isDevelopment = process.env.NODE_ENV !== "production";

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win: BrowserWindow | null;

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
  { scheme: "app", privileges: { secure: true, standard: true } },
]);

function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({
    width: 400,
    height: 700,
    title: "Stay Hydrated !",
    fullscreenable: false,
    resizable: false,
    icon: AppLogo,

    webPreferences: {
      // Use pluginOptions.nodeIntegration, leave this alone
      // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
      nodeIntegration: (process.env
        .ELECTRON_NODE_INTEGRATION as unknown) as boolean,
    },
  });

  win.removeMenu();
  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    win.loadURL(process.env.WEBPACK_DEV_SERVER_URL as string);
    //if (!process.env.IS_TEST) win.webContents.openDevTools()
  } else {
    createProtocol("app");
    // Load the index.html when not in development
    win.loadURL("app://./index.html");
  }

  function CreateTray() {
    if (win != null) {
      win.hide();
      const tray = new Tray(nativeImage.createFromPath(AppLogo));
      const contextMenu = Menu.buildFromTemplate([
        {
          label: "Open",
          type: "normal",
          click() {
            if (win != null) {
              win.show();
              tray.destroy();
            }
          },
        },
        {
          label: "Quit",
          type: "normal",
          click() {
            process.exit(1);
          },
        },
      ]);
      tray.setToolTip("STAY HYDRATED !");
      tray.setContextMenu(contextMenu);
      tray.on("click", () => {
        if (win != null) {
          win.show();
          tray.destroy();
        }
      });
    }
  }

  win.on("page-title-updated", (e) => {
    e.preventDefault();
  });
  win.on("minimize", () => {
    CreateTray();
  });
  win.on("closed", () => {
    win = null;
  });
}

// Quit when all windows are closed.
app.on("window-all-closed", () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow();
  }
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    // Install Vue Devtools
    try {
      await installExtension(VUEJS_DEVTOOLS);
    } catch (e) {
      console.error("Vue Devtools failed to install:", e.toString());
    }
  } else {
    const AutoLaunch = require("auto-launch");

    let autoLaunch = new AutoLaunch({
      name: "Stay Hydrated !",
      path: app.getPath("exe"),
    });
    autoLaunch.isEnabled().then((isEnable: boolean) => {
      if (!isEnable) {
        autoLaunch.enable();
      }
    });
  }
  createWindow();
});

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === "win32") {
    process.on("message", (data) => {
      if (data === "graceful-exit") {
        app.quit();
      }
    });
  } else {
    process.on("SIGTERM", () => {
      app.quit();
    });
  }
}
