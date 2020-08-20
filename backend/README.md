### To create new migration

`sequelize migration:create --name name_of_your_migration`

### To get ERD from container

`docker cp <container_id>:/opt/app/erd.svg .`

### To initialize db

This step must be done before working with any calls that rely on the database (i.e., GET shipments, POST shipment, DELETE shipment).

1. Enter the backend docker container:
`docker exec -it <container_id> bash`
2. Enter the root of the application:
`cd /opt/app`
3. Run migrations:
`yarn db:migrate`
4. You can now exit the container and run `docker-compose up` to start the application.

### To re-initialize db

You can reinitialize the db in case anything goes wrong. Simply connect to the docker container as shown above and run the following command: `yarn db:init`