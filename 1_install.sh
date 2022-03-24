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
sudo service nginx start

switch to database \c optee;
 \dt
but the server or client packages    
 │ are still installed. Please install the latest packages (postgresql-12      
 │ and postgresql-client-12) and upgrade the existing  clusters with           
 │ pg_upgradecluster (see manpage).       

 sudo yum install postgresql12 postgresql12-server