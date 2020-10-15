const wintools = require('wintools');

exports.foundProcess = (processDescprition, processName) => {
    return processDescprition.toLocaleLowerCase().includes(processName);
}

exports.killProcessByPID = (pid) => {
    console.log('** Encerrando processo... **\n');
    wintools.kill.pid(pid, function (err) {
        const logMessage = err ? err : '** Processo encerrado com sucesso **';
        console.log(logMessage);
    });
}

