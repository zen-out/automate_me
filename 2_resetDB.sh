#!/bin/bash 
echo 'hello'
cd
ssh ubuntu@3.228.44.104
sudo su postgres
psql postgresql
DROP DATABASE optee; 
CREATE DATABASE optee;
\q
exit
sudo service postgresql start