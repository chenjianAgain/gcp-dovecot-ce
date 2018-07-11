#!/bin/bash
          
for i in {1..3}
do
    echo "Sent $i email from SES"
    current=`date "+%Y-%m-%d %H:%M:%S"` 
    # echo "hello-$i at $current" | mail -s "test$i-$current" demo@localhost.
    ./sendSES.sh "$current"
done
