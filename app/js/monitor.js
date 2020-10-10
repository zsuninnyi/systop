const path = require('path');
const osUtils = require('node-os-utils');

const cpu = osUtils.cpu;
const mem = osUtils.mem;
const os = osUtils.os;

// Set model
document.getElementById('cpu-model').innerText = cpu.model();

// Computer name
document.getElementById('comp-name').innerText = os.hostname();

// OS
document.getElementById('os').innerText = `${os.type()} ${os.arch()}`;

// total memory
mem.info().then((info) => {
    document.getElementById('mem-total').innerText = `${info.totalMemMb} Mb`;
});
