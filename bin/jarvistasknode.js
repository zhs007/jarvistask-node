#!/usr/bin/env node

"use strict";

const { JarvisNode } = require('jarvis-net');
const process = require('process');
const argv = require('yargs')
    .option('s', {
        alias : 'servaddr',
        demand: false,
        describe: 'serv addr',
        type: 'string'
    })
    .usage('Usage: jarvistasknode myaddr -s servaddr')
    .example('jarvistasknode myaddr -s servaddr', 'jarvistasknode myaddr -s servaddr')
    .help('h')
    .alias('h', 'help')
    .epilog('copyright 2018')
    .argv;

const basearr = argv._;
if (basearr == undefined || basearr.length < 1) {
    console.log('Usage: jarvistasknode myaddr -s servaddr');
    
    process.exit(1);
}

const cfg = {
    nodeAddr: basearr[0]
};

if (argv.servaddr) {
    cfg.destNodeAddr = argv.servaddr;
}

const node = new JarvisNode(cfg);
node.start(() => {});
