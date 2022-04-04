cd 
cd desktop
psql postgres
DROP DATABASE optee3; 
CREATE DATABASE optee3; 
\q
cd desktop
cd sample
knex migrate:latest
knex seed:run 
