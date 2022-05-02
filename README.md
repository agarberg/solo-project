# Tech Time Tracker

_Duration: 2 Week Sprint_

When working as a flat rate automotive technician,  you are paid based on the work produced, not the hours worked. Historically, one would manually keep track of hours produced and compare it to the paycheck at the end of the week. Many will not keep track at all, relying solely on management  to properly process production.

TechTimeTracker will make a convenient and quick way for technicians to enter their job information that happens throughout the day, take notes, describe the job and upload a picture of the Repair Order. Productivity will be tracked daily, weekly and monthly. There will be charts to display past productivity.

## See it deployed on Heroku!

https://quiet-ocean-02328.herokuapp.com/

## Prerequisites

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)
- [Postico](https://eggerapps.at/postico/)

## Create database and table

Please reference the databaseseed.sql file for database setup.

## Installation

- Clone repository to local machine.
- Run npm install in terminal to install all necessary dependencies.
- To setup the database locally, please see the databaseseed.sql file for instructions.

## Development Setup Instructions

- Run `npm install`
- Create a `.env` file at the root of the project and paste this line into the file:
  ```
  SERVER_SESSION_SECRET=superDuperSecret
  ```
  While you're in your new `.env` file, take the time to replace `superDuperSecret` with some long random string like `25POUbVtx6RKVNWszd9ERB9Bb6` to keep your application secure. Here's a site that can help you: [https://passwordsgenerator.net/](https://passwordsgenerator.net/). If you don't do this step, create a secret with less than eight characters, or leave it as `superDuperSecret`, you will get a warning.
- Start postgres if not running already by using `brew services start postgresql`
- Run `npm run server`
- Run `npm run client`
- Navigate to `localhost:3000`

## Built With

Node
Express
React
Postgresql
Heroku
ChartJs
