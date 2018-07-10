#!/bin/bash
aws ses send-email \
--from "chenjian.aws@gmail.com" \
--destination "ToAddresses=demo@josephaws.one" \  
--message "Subject={Data=from ses,Charset=utf8},Body={Text={Data=ses says hi,Charset=utf8},Html={Data=$0,Charset=utf8}}"
