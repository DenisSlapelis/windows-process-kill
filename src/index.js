const wintools = require('wintools');
const utils = require('./utils');

const main = (processName) => {
    let pid;
    wintools.ps((error, ps) => {
        for (const key in ps) {
            if (utils.foundProcess(ps[key].desc, processName)) {
                pid = ps[key].pid;
                console.log(`\n== Processo encontrado:\n${ps[key].desc} - PID: ${pid}\n`);
                utils.killProcessByPID(pid);
            }
        }

        if (error) {
            console.log(`\n== Erro ao buscar lista de procesos:\n${error}`);
        } else if (!pid) {
            console.log(`\n** Nenhum processo contendo '${processName}' foi encontrado **`);
        }
    });
};

// Nome do executável(.exe) do processo que deseja encerrar
main('league of legends');