#!/usr/bin/env node

const {program} = require('commander')
const randomstring = require('randomstring')

program
  .command('rdstr')
  .description('random a string')
  .argument('[length]','string length', 24)
  .action((length)=>{
    console.log(randomstring.generate(parseInt(length)))
  })

program
  .command('build')
  .description('Build Android app on different device')
  .option('--vendor <vendor>', 'Vendor name')
  .option('--os <os_version>', 'OS version')
  .action((options) => {
    console.log(`>>> building Android app for ${options.vendor} - Android ${options.os}`)
  })
 
program.parse(process.argv)
