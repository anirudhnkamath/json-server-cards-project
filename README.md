# json-server-cards-project

## Project Description

This is a React based project which uses a JSON Server as a fake backend to perform Create, Read and Delete operations on cards containing name and age of people.

## Tech Stack

+ React JS
+ HTML
+ CSS
+ JSON Server
+ GSAP

## Features

+ Contains a form which allows you to enter the name and age of a person, which creates a new card, and updates the contents of the JSON Server too.
+ Contains a delete icon which deletes the card from JSON Server and also from the list.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/anirudhnkamath/json-server-cards-project.git

2. Move to the project directory:
   ```bash
   cd json-server-cards-project

3. Install the dependencies:
   ```bash
   npm install

4. Start the JSON Server:
   ```bash
   npx json-server -p 5500 -w data/data.json

  - The server should be running at port 5500

5. Open a __new terminal__ in the __project__ directory and start the react app:
   ```bash
   npm start

## License
This project is licensed under the MIT License

