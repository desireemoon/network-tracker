# network-tracker
network-tracker

# Project Link

# Project Overview

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
| 11/7 | Project Design, approval, pseudocode backend, and start backend | Incomplete
| 11/8 | Finish backend | Incomplete
| 11/9 & 11/10 | Finish backend if not done and pseudocode frontend  | Incomplete
| 11/11 | Frontend structure and start on logic | Incomplete
| 11/12 | Finish logic and design | Incomplete
| 11/13 | deploy and finish design | Incomplete
| 11/14 | Finish design and PMVP | Incomplete
| 11/15 | Present | Incomplete

## Project Description

A responsive web application that allows users to create specific social networks and add people to them. The user will be able to perform full crud on both their social networks and the people they've added. 

## Wireframes

- Web: https://res.cloudinary.com/dsnhxcw0e/image/upload/v1573139549/Image_from_iOS_3_d8qh8k.jpg
- Mobile: https://res.cloudinary.com/dsnhxcw0e/image/upload/v1573139545/Image_from_iOS_2_ugaxrt.jpg

## Priority Matrix

https://wireframe.cc/0fQuPj

### MVP/PostMVP

# MVP 
- Create DB
- Full CRUD backend
- Connect frontend and backend
- Responsive Frontend
- Full CRUD for user, networks, and people
- Working Auth 

# PostMVP 
- Dynamic header that shows user's name and conditional login/logout/register button
- social media intergration
- calendar integration
- Connecting Users to each other (interact with each other)
- AI assitant that does most of the manual upadating and eventually AI will setup meetups for User

## Architectural Design

https://res.cloudinary.com/dsnhxcw0e/image/upload/v1573139558/Image_from_iOS_4_eswzib.jpg

## ERD

https://res.cloudinary.com/dsnhxcw0e/image/upload/v1573139540/Image_from_iOS_1_njio7l.jpg

## UI Components

| Component | Description | 
| --- | :---: |  
| App | This will hold the Header, Main, and Footer. Router will wrap Header and Main here. - stateless |
| Header | Holds title and nav bar links - stateless | 
| Footer | Holds social and README links - stateless  | 
| Main | This will hold the rest of the components - will hold state |
| Login/Register | Homepage for the site when not logged in, users will login/register here|
| CreateNetwork | Allows user to create a network and add people to network |
| NetworkDashboard| Holds links to each type of network that user can click to see all networks in that type |
| Network List | List of all networks in a particular type, can edit and delete here |
| Edit Network | User can edit specific network lists |
| CreatePerson | User can create a person |
| PersonList | List of all created people |
| PersonProfile | Full info of person created, can delete person or go to edit page |
| EditPerson | User can edit person info  |
| NotFound | Redirect if user goes to a page that doesn't exist - stateless |


## Time Frames

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Project Design | H | 4hrs| 4hrs | 4hrs |
| Pseudocode | M | 4hrs| :---: | :---: |
| Create DB (models, migration, seed) | H | 5hrs | :---: | :---: |
| Create rest of backend including routes | H | 5hrs| :---: | :---: |
| REACT structure | H | 6hrs| :---: | :---: |
| React routing and links | H | 1hrs| :---: | :---: |
| React logic and API calls | H | 6hrs| :---: | :---: |
| Plan out designs | M | 4hrs| :---: | :---: |
| CSS styling | M | 10hrs| :---: | :---: |
| PMVP | M | 6hrs| :---: | :---: |
| Total | H | 51hrs| 4hrs | :---: |


## Helper Functions

| Function | Description | 
| --- | :---: |  
| Map | Map through lists | 

## Additional Libraries
- react-router
- axios
- hamburger
- react-router-dom
- @fortawesome/fontawesome-svg-core
- @fortawesome/free-brands-svg-icons
- @fortawesome/free-solid-svg-icons


## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

#### SAMPLE.....
```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  

#### SAMPLE.....
| Original Plan | Outcome | 
| --- | :---: |  
| Have one Book component | Split that component into BookInfo and BookInteraction as the component grew too complicated | 

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
