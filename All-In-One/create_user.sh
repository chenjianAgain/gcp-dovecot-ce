#!/bin/bash
useradd demo
echo "demo:demo1" | chpasswd
usermod -aG mail demo
