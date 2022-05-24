Rancid Tomatillos

## Table of Contents
- [About the Project](#about-the-project)
- [Technologies Used](#technologies-used)
- [Contributors](#contributors)
- [Learning Goals](#learning-goals)
- [Project Evolution](#project-evolution)
- [Project Reflections](#project-reflections)
- [Organizational Resources](#organizational-resources)
- [Set Up](#set-up)
- [Operating Instructions](#operating-instructions)
- [Application in Action](#application-in-action)
- [Future Goals](#future-goals)
- [Testing](#testing)
- [Extensions Completed](#extensions-completed)

## About the Project

Rancid Tomatillos is a web application that allows the user to browse a selection of movies. The user can click on any one of the movies to view more details about that particular movie. The user also has the option of searching for a particular movie by title or genre. Once the user selects a movie, and goes to the movies details page, a trailer automatically loads so they can get a good feel for that movie. 

The details of this project are outlined in the [project spec](https://frontend.turing.edu/projects/module-3/rancid-tomatillos-v3.html)


## Application in Action

### View Movie Details
![movie-details](./assets/movie-details.gif)

### Search by Genre
![movie-details](./assets/genre-search.gif)

## Technologies Used

1. JavaScript
1. React.js
1. Router
1. Cypress
1. Figma
1. Git & Github
1. Postman
1. HTML
1. CSS
1. NPM
## Contributors

* [Eli Davidson](https://github.com/elleshadow)
* [Nathan Hodnett](https://github.com/nhodnett)

### Project Manger
* [Kayla Gordon](https://github.com/)
## Learning Goals

* Eli Davidson:
    1. React components.
    1. Cypress.
    1. Acync functions.
    1. Conditonal rendering.

* Nathan Hodnett:
    1. React component structure.
    1. Class components vs functional components.
    1. Cypress testing.
    1. Router.

## Project Evolution
Origionally, we wanted to create genre carousels on the main page, but ran out of time; so, we removed that idea from the MVP, and plan to add it in a future iteration. 

Also, we changed our component structure as the iterations progressed, from class to function and then back again, as the functionality needs of those components became clear.

## Project Reflections
>what didn't work, what did we learn?

* Eli Davidson:
1. React is all about timing. We learned a lot about watching what informaiton/data was in state during rendering, and how to ensure all data ended up in state by the time the component needed to access it. 

* Nathan Hodnett:
1. Cypress tests were also heavily timing dependent this envolved us adjusting timing / adding wait in order to run the tests successfully.
## Extensions
For this project we chose to complete the "More React Functionality" CYOA. In particular we added search/filtering functionality to the movies.

### Future Goals
1. Genre based carousels.
1. Error handle "Youtube video not available" 
1. Favorites functionality.
1. Deploy using Heroku.
1. Responsive CSS for Movie cards.
## Organizational Resources

* [Project board](https://github.com/nhodnett/rancid-tomatillos/projects/1)
* [Figma](https://www.figma.com/file/B5YF2KSCHALrpK1mAkaCVu/Component-architecture?node-id=0%3A1)

## Set Up
1. Forking the repo.
1. Clone down a local copy.
2. CD into the directory and run npm install. 
    * This will install the dependencies you need for the project. 
5. To open the webpage run npm start.


