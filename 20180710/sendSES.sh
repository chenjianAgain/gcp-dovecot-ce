#!/bin/bash
current=`date "+%Y-%m-%d %H:%M:%S"` 
aws ses send-email \
--from "chenjian.aws@gmail.com" \
--destination "ToAddresses=demo@josephaws.one" \  
--message "Subject={Data=$current,Charset=utf8},Body={Text={Data=ses says hi,Charset=utf8},Html={Data=,Charset=utf8}}"
