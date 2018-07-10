#!/bin/bash
current=$(date -d "+ 8 hour" +'%Y-%m-%d %H:%M:%S')
aws ses send-email \
  --from "chenjian.aws@gmail.com" \
  --destination "ToAddresses=demo@josephaws.one" \
  --message "Subject={Data=$current,Charset=utf8},Body={Text={Data=$current ses $0,Charset=utf8},Html={Data=,Charset=utf8}}"
