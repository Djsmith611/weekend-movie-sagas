# React Movie List Application

This project is a web-based movie list application. Movie data is stored in a database that communicates with a server. Users can edit movie details. The user interface is designed using Material UI. Movies are displayed in a list that is easy to navigate.

![App Screenshot](/public/images/preview.png)

## Navigation
- [Features](#features)
- [Technologies used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)

## Features 

- Adding movies to the list(Future update)
- Updating movie details
- Clicking to navigate to a details page (with generated color palette)

[Back to Top](#top)
## Technologies Used

- `HTML`: Structure of the movie list and its components
- `CSS`: Styling of the HTML page and components
- `JavaScript`: Form submission, communication with server, communication with database.
- `React`: JSX extension of JavaScript, component creation, useEffect, useState
- `Express.js`: Server-side logic to store, modify, and retrieve movie items
- `Axios`: Promise-based HTTP client for making requests to the server
- `Material UI`: React UI component library

[Back to Top](#top)
## Getting Started

### Prerequisites

- `Node.js` installed on your machine
- A modern web browser
- Access to a database management system like Postgres

### Installation

1. Clone this repository to your local machine using Terminal:

    - Click the green code button on this repository to get the SSH address and paste it into your terminal after typing:
        ```shell
        git clone
        ```
    - Make sure to set up your SSH key with GitHub prior.
2. Navigate to the project directory:

    ```shell
    cd weekend-movie-sagas
    ```

3. Install the required dependencies:

    ```shell
    npm install
    ```
4. Set up your database based off of the `database.sql` file.

5. Start the server:

    ```shell
    npm run server
    ```
6. Start the client in a separate terminal:

    ```shell
    npm run client
    ```
7. Open your web browser and navigate to http://localhost:5173/ to access the app.

### Usage

- Use the provided form to add a new movie to the list.(future update)
- Click on a movie to view it's details.
- Click on the edit button to alter a movie's details.

[Back to Top](#top)
