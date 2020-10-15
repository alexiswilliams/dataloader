const uploadFilesFolder = './uploadFiles/';
const util = require('util');
const fs = require('fs');
const readline = require('readline');
var os = require('os');
var path = require("path")
var exec = util.promisify(require('child_process').exec), child;
const { spawn } = require('child_process');

var execCommand = 'java -cp dataloader-49.0.0-uber.jar -Dsalesforce.config.dir=configs ' +
    'com.salesforce.dataloader.process.ProcessRunner process.name="benefitSummaryMasterProcess" ' +
    'dataAccess.name="uploadFiles/{dataAccess}" ' +
    'process.outputSuccess="C\:\\Users\\alexis\\dataloader\\v49.0.0\\status\\{outputSuccess}_success.csv" ' +
    'process.outputError="C\:\\Users\\alexis\\dataloader\\v49.0.0\\status\\{outputError}_failure.csv"';
const CSV_FILE = '.csv';

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}
var i = 1;
fs.readdirSync(uploadFilesFolder).forEach(file => {
    if (file.endsWith(CSV_FILE)) {
        if (i > 499 && i < 550) {
            console.log(i + '\t\t:' + file);
            var execCommandIteration = execCommand.replace('{dataAccess}', file).replace('{outputSuccess}', file).replace('{outputError}', file);
            child = exec(execCommandIteration,
                child = exec(execCommandIteration,
                    function (error, stdout, stderr) {
                        try {
                            console.log('stdout: ' + stdout);
                        } catch (ex) {
                            console.log('stdout err: ' + stdout);
                        }

                        try {
                            console.log('stderr: ' + stderr);
                        } catch (ex) {
                            console.log('stderr err: ' + stderr);
                        }
                        if (error !== null) {
                            console.log('exec error: ' + error);
                        } {
                            try {
                                console.log('executing: ' + execCommandIteration);
                            } catch (ex) {
                                console.log('stderr err: ' + ex);
                            }
                        }
                    }
                ));
            sleep(30000);
        }

        i++;
        // console.log(file);
        // var filePath = uploadFilesFolder + file;
        // var linesCount = 0;
        // var rl = readline.createInterface({
        //     input: fs.createReadStream(filePath),
        //     output: process.stdout,
        //     terminal: false
        // });
        // rl.on('line', function (line) {
        //     linesCount++; // on each linebreak, add +1 to 'linesCount'
        // });
        // rl.on('close', function () {
        //     console.log(file + ': ' + linesCount); // print the result when the 'close' event is called
        // });

        // var execCommandIteration = execCommand.replace('{dataAccess}', file).replace('{outputSuccess}', file).replace('{outputError}', file);
        // 'process.outputSuccess="C\:\\Users\\alexis\\dataloader\\v49.0.0\\status\\{outputSuccess}_success.csv" ' +
        //     '';
        // const mc = spawn('java', ['-cp', 'dataloader-49.0.0-uber.jar', '-Dsalesforce.config.dir=configs',
        //     'com.salesforce.dataloader.process.ProcessRunner', 'process.name=benefitSummaryMasterProcess', 'dataAccess.name="uploadFiles/' + file + '"',
        //     'process.outputSuccess="C\:\\Users\\alexis\\dataloader\\v49.0.0\\status\\' + file + '_success.csv',
        //     'process.outputError="C\:\\Users\\alexis\\dataloader\\v49.0.0\\status\\' + file + '_failure.csv"']);


        // mc.stdout.on("data", data => {
        //     console.log(`stdout: ${data}`);
        // });

        // mc.stderr.on("data", data => {
        //     console.log(`stderr: ${data}`);
        // });

        // mc.on('error', (error) => {
        //     console.log(`error: ${error.message}`);
        // });

        // mc.on("close", code => {
        //     console.log(`child process exited with code ${code}`);
        // });

    }
});