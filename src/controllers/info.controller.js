import os from 'os';

export const getInfo = (req, res) => {
    res.json({
        argumentos: process.argv.slice(2),
        plataforma: process.platform,
        nodeVersion: process.version,
        rss: process.memoryUsage().rss,
        path: process.execPath,
        IDProcess: process.pid,
        folder: process.cwd(),
        cpuCores: os.cpus().length
    })
}