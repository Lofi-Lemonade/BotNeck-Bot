const fs = require('fs');
const path = require('path');

const BotNeckLog = require('../api/BotNeckLog');

let _instance = null;
module.exports = class ConfigManager {
    /**
     * Creates the ConfigManager to handle configuration files
     */
    constructor() {
        this.configDirectory = path.resolve(__dirname, '../config');

        if(_instance) {
            BotNeckLog.error('ConfigManager instance already exists!');
            return;
        }
        _instance = this;
    }
    /**
     * Destroys and cleans up the ConfigManager instance
     */
    destroy() {
        BotNeckLog.log('Cleaning up ConfigManager ...');
        _instance = null;
    }

    /**
     * Returns the main instance of ConfigManager
     * @returns {ConfigManager} The instance of config manager
     */
    static get Instance() { return _instance; }

    /**
     * Loads the specified configuration file using it's name
     * @param {String} configName The configuration file name
     * @returns {Promise<any>} The parsed configuration or null
     */
    loadConfiguration(configName) {
        return Promise((resolve, reject) => {
            const configPath = path.resolve(this.configDirectory, configName);

            if(!fs.existsSync(configPath))
                return reject('Configuration file does not exist');

            try {
                fs.readFile(configPath, (err, data) => {
                    if(err) return reject(err);
                    let jsonData = JSON.parse(data.toString());

                    if(!jsonData) return resolve(null);
                    return resolve(jsonData);
                });
            } catch (err) {
                return reject(err);
            }
        })
    }
    /**
     * Changes the configuration object into JSON and saves it into the specified file
     * @param {String} configName The configuration file name
     * @param {any} configObject The object to turn into a JSON string
     * @returns {Promise} Called resolve if successful or reject if file failed to write
     */
    saveConfiguration(configName, configObject) {
        return Promise((resolve, reject) => {
            const configPath = path.resolve(this.configDirectory, configName);

            if(!configObject) return reject('Configuration object cannot be null');
            try {
                fs.writeFile(configPath, JSON.stringify(configObject), err => {
                    if(err) return reject(err);
                    resolve();
                });
            } catch (err) {
                return reject(err);
            }
        });
    }
}