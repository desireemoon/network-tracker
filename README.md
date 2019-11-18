# network-tracker
network-tracker

# Project Link

https://network-tracker.herokuapp.com/

# Project Overview

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
| 11/7 | Project Design, approval, pseudocode backend, and start backend | Complete
| 11/8 | Finish backend | Complete
| 11/9 & 11/10 | Finish backend if not done and pseudocode frontend  | Complete
| 11/11 | Frontend structure and start on logic | Complete
| 11/12 | Finish logic and design | Complete
| 11/13 | deploy and finish design | Complete
| 11/14 | Finish design | Complete
| 11/15 | Present | Complete

## Project Description

A responsive web application that allows users to create specific social networks and add people to them. Once registered and logged in, the User can create, update, and delete people and networks. The purpose of the app is to give users the ability to keep track of their social circles and the last time they've virtually and physically interacted with the people in their circles.

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
- social media integration
- calendar integration
- Connecting Users to each other (interact with each other)
- AI assistant that does most of the manual updating and eventually AI will setup meetups for User

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
| Pseudocode | M | 4hrs| 2hrs | 4hrs |
| Create DB (models, migration, seed) | H | 5hrs | 6hrs | 6hrs |
| Create rest of backend including routes | H | 5hrs| 6hrs | 6hrs |
| REACT structure | H | 6hrs| 8hrs | 8hrs |
| React routing and links | H | 1hr | 2hrs | 2hrs |
| React logic and API calls | H | 6hrs| 8hrs | 8hrs |
| Plan out designs | M | 4hrs| 4hrs | 4hrs |
| CSS styling | M | 10hrs| 10hrs | 10hrs |
| Total | H | 51hrs| 52hrs | 52hrs |


## Helper Functions

| Function | Description | 
| --- | :---: |  
| Map | Map through lists | 

## Additional Libraries
- react-router
- axios
- react-router-dom


## Code Snippet
```
   handleAddClick = (id) => {
    this.setState(prevState => ({
        networkForm: {
          ...prevState.networkForm,
            people: [
                ...prevState.networkForm.people,
                id
            ]
        }
    })
    )    
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  

#### SAMPLE.....
| Original Plan | Outcome | 
| --- | :---: |  
| Have a main component | Took this out after the logic wouldn't work in a child component | 

## Issues and Resolutions
**ERROR**: ActiveRecord::SubclassNotFound: The single-table inheritance mechanism failed to locate the subclass: 'Friends'. This error is raised because the column 'type' is reserved for storing the class in case of inheritance. Please rename this column if you didn't intend it to be used for storing the inheritance class or overwrite Network.inheritance_column to use another column for that information.                             
**RESOLUTION**: Had to change the column name

**ERROR**: with users: { errors: "Nil JSON web token" }
without: This network-tracker.herokuapp.com page can’t be foundNo webpage was found for the web address: https://network-tracker.herokuapp.com/ HTTP ERROR 404                             
**RESOLUTION**: Could not check routes on postman, had to check in app.
