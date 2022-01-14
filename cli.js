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

program.parse(process.argv)
