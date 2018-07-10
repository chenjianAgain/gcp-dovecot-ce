#!/bin/bash
          
for i in {1..3}
do
    echo "Welcome $i times"
    current=`date "+%Y-%m-%d %H:%M:%S"` 
    # echo "hello-$i at $current" | mail -s "test$i-$current" demo@localhost.
    ./sendSES.sh $current
done
