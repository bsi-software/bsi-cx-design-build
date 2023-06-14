import { CX_22_0 } from "../version";
import { LANDINGPAGE } from "../design-type";
import DistFolder from "../dist-folder";
import * as net from 'net';

/** @typedef {import('./build-config-interface').default} BuildConfigInterface */

/**
 * @implements {BuildConfigInterface}
 */
export default class DefaultBuildConfig {
  get additionalFilesToCopy() {
    return [];
  }

  get copyAssetsFolderPath() {
    return "assets";
  }

  get assetResourceRuleFilename() {
    return `${DistFolder.STATIC}/[name]-[contenthash][ext]`;
  }

  get additionalStaticAssetFileExtensions() {
    return [];
  }

  get designType() {
    return LANDINGPAGE;
  }

  get devServerPort() {
    // return 'auto';
    let devPort = 9003; 
    //this._assignPort(devPort).then(port => devPort = port);
    //console.log("Default port is: /d", devPort);
    return devPort;
  }

  get hashZipFiles() {
    return true;
  }

  get modules() {
    return [];
  }

  get modulesRootPath() {
    return "modules";
  }

  get name() {
    return undefined;
  }

  get outputPath() {
    return "dist";
  }

  get propertiesFilePath() {
    return undefined;
  }

  get rootPath() {
    return undefined;
  }

  get sourceMapEnabled() {
    return false;
  }

  get staticFileFolderPath() {
    return "static";
  }

  get targetVersion() {
    return CX_22_0;
  }

  get version() {
    return "1.0.0";
  }

  get webpackPlugins() {
    return [];
  }

  get webpackRules() {
    return [];
  }

  get postcssEnabled() {
    return false;
  }

  async isPortReachable(port, {host, timeout = 1000} = {}) {
    if (typeof host !== 'string') {
      throw new TypeError('Specify a `host`');
    }
  
    const promise = new Promise(((resolve, reject) => {
      const socket = new net.Socket();
  
      const onError = () => {
        socket.destroy();
        reject();
      };
  
      socket.setTimeout(timeout);
      socket.once('error', onError);
      socket.once('timeout', onError);
  
      socket.connect(port, host, () => {
        socket.end();
        resolve();
      });
    }));
  
    try {
      await promise;
      return true;
    } catch {
      return false;
    }
  }

  /**
   * @param {number} port - The port to assign
   * @returns {number}
   * @private
   */
  async _assignPort(defaultPort) {
    let maxPort = 9200;
    if (defaultPort > maxPort) {
      return;
    }
    let port = defaultPort;
    const net = require("net");

    let usePort = false;
    
   // while (port < maxPort) {
   //   await(this.isPortReachable(port, { host: "localhost" }))
   //   .then((isUsable) => {if (isUsable) {
   //    return port; 
   //   }});
   //   console.log("Port:" + port + " , use:" + usePort);
   //   port+=1;
   // }
   // 
   // return port;
    console.log("Start listening on %d", port);

    const server = net.createServer();

    // handle connection error
    server.once("error", (err) => {
      usePort = false;
      console.log("Cannot connect to port %d. Error: " + err, port);
      // port = this._assignPort(port + 1);
    });

    // connection successful
    server.on("listening", function () {
      console.log("Connection to port %d successful", port);
      server.close();
      usePort = true;
    });
    server.on("connection", function () {
      console.log("Connection to port %d successful", port);
      server.close();
      usePort = true;
    });

  //  while (!usePort) {
  //    console.log(await isPortReachable(port, { host: "localhost" }));
  //    port+=1;
  //  }

     await(
       server.listen(port, () => {
       console.log("Actual port: %d", port);
       usePort = true;
       return port;
     })
     );

    console.log(server);
    server.close();
    // TODO: replace usePort with code to wait on listen call.
    // socket stuff is async, watch out for inf loops
    if (usePort) {
      console.log("Final portNr = &d", port);
      return port;
    }
    else {
      console.log("DEBUG: ELSE");
      port = this._assignPort(port + 1);
    }
  }
}
