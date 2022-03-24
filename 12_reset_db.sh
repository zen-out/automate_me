cd 
cd desktop
psql postgres
DROP DATABASE optee_test; 
CREATE DATABASE optee_test; 
\q
cd desktop
cd sample
knex migrate:latest
knex seed:run 
