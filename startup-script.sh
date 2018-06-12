#! /bin/bash
sudo su -
yum install -y mailx telnet mutt dovecot
setenforce 0
systemctl stop firewalld
useradd demo
echo "demo:demo1" | chpasswd
usermod -aG mail demo
sed -i '$adisable_plaintext_auth = no' /etc/dovecot/conf.d/10-auth.conf
sed -i '$amail_location = mbox:~/mail:INBOX=/var/mail/%u' /etc/dovecot/conf.d/10-mail.conf
systemctl restart dovecot
echo hello1 | mail -s "test1" demo@localhost.

