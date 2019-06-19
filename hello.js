#! /usr/bin/env node

const command = require('./lib/commandList')
const arg = process.argv[2]
if (arg === 'help' || arg === '-h') {
  command.fullName.forEach((name,i)=>{
    console.log(`${name}  ${command.shortName[i]}`)
  })
}else{
  console.log('success')
}
