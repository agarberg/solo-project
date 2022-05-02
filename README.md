#Tech Time Tracker
#Adam Garberg
#Mar/22 

Application Overview


When working as a flat rate automotive technician,  you are paid based on the work produced, not the hours worked. Historically, one would manually keep track of hours produced and compare it to the paycheck at the end of the week. Many will not keep track at all, relying solely on management  to properly process production.

TechTimeTracker will make a convenient and quick way for technicians to enter their job information that happens throughout the day, take notes, describe the job and upload a picture of the Repair Order. Productivity will be tracked daily, weekly and monthly. There will be charts to display past productivity.






Functional Requirements

1.1 Log-in (Mobile)


Registered users will be able to log in to the application. The Log-in page will contain a link to the Registration page (no wireframe included). Registration will contain text inputs for username and password. The Registration page will also contain a button that navigates the user back to the Log-in screen and a button that will submit the form. After successful form submission, ( the user will automatically be logged in with the new account.

Forgot password will not be included in this project.


1.2 Display List of Widgets
Description of the feature, including wireframes or mock-ups.

This is the home screen. The top nav bar lets you have access to the calendar(history search).
This page lets you input information about a job and save the info when the check box is clicked.
The hours (today/this week) update automatically based on historical inputs. 

 
This is the history search page, it lets you search previous jobs

This is the history search results page. The button with the pencil on the right sends you to the edit/delete page. ADD BACK BUTTON , LOWER RIGHT?
TO LEFT OF HISTORY?

This Is the edit page. It allows you to delete or update an entry. 
Delete or update buttons will send you back to history search page after delete or update is complete.
WILL ADD A BACK BUTTON TO GO BACK TO SEARCH




This page will show you past performance, sorted by daily, weekly and monthly



Project Milestones and Schedule
(Milestones are completed, working features from the above listing. Think carefully about the order you will need to build things and when you expect to be done with them. The purpose of this section is to consider the overall timeline and how much work really needs to get done. The Due Date is your best guess and may change.)

Milestone (Should match a Feature from Above)
Hours Est.
Due Date
Base or Stretch
Make all components
3
3/14
BASE
Setup Database
3
3/14
BASE
Main page client side, create GET
3
3/14
BASE
Main page client side, Create POST
3
3/15
BASE
History  Search page, setup search, GET
4
3/15
STRETCH
History edit page, setup  
3
3/16
BASE
PUT 
3
3/24
BASE
Setup image upload function
4
3/23
STRETCH
Past Performance page - charting. before search!
6
3/23
STRETCH
Styling - MUI
6
3/24
BASE
DELETE
3
3/24
BASE
SERVER SIDE SETUP
5
3/16
BASE


















Database Documentation (https://dbdiagram.io/d)
				             MANY					     			ONE

CREATE TABLE "user" (
"id" SERIAL PRIMARY KEY,
"password" VARCHAR(50),
"full_name" VARCHAR(50),
"username" VARCHAR(50),
"date_created" DATE,
"email" VARCHAR(30)
);

CREATE TABLE "jobs" (
"id" SERIAL PRIMARY KEY,
"user_id" VARCHAR(50),
"description" VARCHAR(250),
"time_actual" VARCHAR(20),
"time_paid" VARCHAR(20),
"notes" VARCHAR(250),
"photo" VARCHAR(40),
"ref_ro_num" VARCHAR(20),
"date" DATE);
Table user {
  id int [pk, increment]
  username varchar
  password varchar
  full_name varchar
  created_at timestamp
  email varchar
}

  Table jobs {
  id int [pk, increment]
  user_id varchar 
  description varchar
  time_actual varchar
  time_paid varchar
  notes varchar
  photo varchar
  ref_ro_num varchar
  date timestamp 
  }

Ref: user.id < jobs.user_id 




Browsers
(Consider which browsers your target audience(s) will be likely to use and list them here. If you're targeting mobile-only, your list should note the mobile version of the browsers.)

Application will fully support browsers listed below. All browsers or versions not listed below are considered out of scope.

Browser Name
Mobile or Desktop?
Version
Example : Chrome
Desktop
Version 96.x


Technologies
Node
Express
React
Postgresql
Heroku
