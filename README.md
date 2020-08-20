# LeagueSide API Service
> This service is created to host LeagueSide leagues. It is meant to add leagues and help sponsors find leagues within their budget.

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Directory Structure](#directory)
* [Setup](#setup)
* [Documentation](#documentation)
* [Features](#features)
* [Contact](#contact)

## General info
This is a dummy project developed to show off backend development with a suite of technologies. One goal for this project is to ensure the ease of use with respect to set up. All of these technologies can be found below.

## Technologies
* Node.js
* Express.js
* Sequelize ORM
* OpenAPI 3.0
* MySQL
* Docker

## Directory
    .
    ├── ...
    ├── backend
    │   ├── src                     # source code for backend
    │   |   ├── db                  # DB Models and configuration
    │   |   ├── helpers             # Helper code
    │   |   ├── server  
    │   |   |   ├── auth            # Placeholder auth for JWT.
    │   |   |   ├── controllers     # Controllers for API
    │   |   |   └── routes          # Routes for API
    │   |   └── spec                # OpenAPI spec documentation
    │   ├── tests                   # End-to-end, integration tests (alternatively `e2e`)
    │   ├── sequelize               # Sequelize ORM configuration and migrations
    │   └── coverage                # Code coverage report
    └── ...

## Setup
This project is built using Docker containers, thus you will need Docker installed for it to work. A docker-compose file is placed in the root of the repository. Follow the steps below to get started:

Check out the repository:

```
git clone https://github.com/maraja/league-side
```

Change into the repository directory:

```
cd league-side
```

Run the following Docker command within the root directory:

```
docker-compose up
```

#### To edit code
Before working with the code, you must have Node.js installed (the latest LTS version should work just fine). Change into the backend repository directory:

```
cd league-side/backend
```
Install yarn:

```
npm install -g yarn
```

Install all the necessary modules:
```
yarn
```

Now you can begin editing! Once you start the application following the instructions at the beginning of the setup (i.e., running `docker-compose up`), editing any file will automatically restart the application.


#### To run tests

```
docker-compose run --rm backend yarn test
```

#### To re-initialize db

You can reinitialize the db in case anything goes wrong. Simply connect to the docker container as shown above and run the following command: `yarn init`

## Documentation
API Documentation can be found here: https://documenter.getpostman.com/view/395098/T1LTfQGd?version=latest

## Features
List of features ready and TODOs for future development
* Create and query leagues
* Get shipment quotes
* MySQL database with migrations
* Unit Testing and Code Coverage

To-do list:
* Implement JWT as a form of authentication for authorized requests.
* See leagues by id, update leagues, delete leagues.
* Unit Testing and Code Coverage
* Input validation and sanization needs to be done.

## Extra Notes

* To find leagues, the radius needs to be set to a high enough number as everything is calculated in miles. If you create new leagues with a specific lat/long, ensure that your radius is large enough to accommodate. 

Great resource for learning and setting up the db with sequelize. Although I used MySQL and this article uses PostGreSQL, all the concepts remain the same:
https://www.oriechinedu.com/posts/getting-started-with-sequelize-and-postgres

## Contact
Created by [@maraja](mailto:amit.maraj@gmail.com) - feel free to contact me!