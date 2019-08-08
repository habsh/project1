const seleniumServer = require("selenium-server");
const chromedriver = require("chromedriver");
const geckodriver = require("geckodriver");
const edgedriver = require("edgedriver");

module.exports = {
  "src_folders": [
    "tests"// Where the tests are located
  ],
  "output_folder": "./output/", // reports from nightwatch
  //"globals_path" : "globals",
  "selenium": { // selenium config settings
    "start_process": true, // tells nightwatch to manage the selenium process
    "server_path": seleniumServer.path, // path to selenium
    "log_path" : "./output/",
    "silent" : true,
    "skip_testcases_on_fail": false,
    "host": "127.0.0.1", // host for selenium
    "port": 4444, // port for selenium
    "cli_args": {
      "webdriver.chrome.driver" : chromedriver.path, // pass chromedriver path
      "webdriver.gecko.driver" : geckodriver.path,
      "webdriver.edge.driver" : edgedriver.path
    }
  },
  "test_settings": {
    "default": { // default settings (you can override with custom settings)
      "screenshots": {
        "enabled": true, // enables screenshots
        "path": "output/" // output folder for screenshots
      },
      "globals": {
        "waitForConditionTimeout": 5000 // sometimes internet is slow so wait.
      },
      //"exclude" : ["./*-test.js"],
      //"filter" : "./*-test.js",
      "skip_testcases_on_fail": false,
      "desiredCapabilities": {
        "browserName": "chrome", // use Chrome as the default browser
        "marionette": true
      }
    },
    "firefox" : {
      "desiredCapabilities": {
        "browserName": "firefox"
      }
    },

    "edge" : {
      "desiredCapabilities": {
        "browserName": "MicrosoftEdge"
      }
    }
  }
}