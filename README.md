# restaurant-js

* [Project Description](https://www.theodinproject.com/lessons/javascript-restaurant-page)
* [Live Demo](https://www.michaelpious.com/restaurant-js/)

## Table of Contents
1. [About](#about)
2. [Features](#features)
3. [Modules](#modules)
4. [Getting Started](#getting-started)
5. [Contributing](#contributing)

## About
The project's goal is to dynamically render a restaurant homepage using JavaScript alone to render entire content web site. 

## Features
* **Modular:** Uses separate modules modules for each page
* **Responsive:** Site is responsive to different screen sizes  

## Modules
1. `index.js`: serves as the center and imports all scripts and handles navbar navigation
2. `menu.js`: contains `createMenuItem` support function and `menu` main function which generates the menu and appends to container
3. `home.js`: contains the `homepage` function that generates the homepage
4. `about.js`: containes the `about` function
5. `menu.json`: contains the menu data

## Getting Started
### Prerequisites
* A modern web browser that supports JavaScript.
* Basic understanding of HTML, CSS, and JavaScript.
* Node.js and npm.

### Installation
1. Clone the repository:
    ```
    git clone https://github.com/MclPio/restaurant-js
    ```
2. Navigate to the project directory:
    ```
    cd restaurant-js
    ```
3. Install dependencies:
    ```
    npm install
    ```
4. Build dist
    ```
    npm run build
    ```
5. (Optional) start the development server:
    ```
    npm start
    ```
## Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch for your feature or bugfix:
    ```
    git checkout -b feature-name
    ```
3. Commit your changes:
    ```
    git commit -m 'Describe your feature or fix'
    ```
4. Push to your branch:
    ```
    git push origin feature-name
    ```
5. Create a pull request explaining your changes.
