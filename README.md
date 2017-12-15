# GALLOWRR
A simple Hangman app

## Introduction
The app was made using the following rules for Hangman:
* When the game is started, the player is represented with an empty field for each letter in the word.
* When the player guesses a letter correctly, each field that represents that letter is filled with the letter.
* When the player guesses a letter incorrectly, a piece of a gallow with a hanging man is drawn.
* After 10 incorrect guesses, the game is over and the player lost.
* If all fields are filled with their letter before 10 incorrect guesses, the player has won the game.

The technical considerations are as follows:
* Server/client based with the client being the browser
* Business logic executed on the server (so nobody can cheat)
* Allow for keeping simple statistics (games won/lost)
* Game is self-contained

## Technologies
* Ruby on Rails: back-end mainly used for API endpoints
* React.js and React-Router: for quick and responsive user experience
* Capybara: testing Rails components and features
* Jasmine-Enzyme: testing React components and features

## Setup
The assumption is that `ruby 2.3.3+`, `rails 5.1.4+`, `yarn 1.2.1+`, and PhantomJS (for testing) is installed.
In app directory, run:
```
bundle install
rake db:create
rake db:migrate
rake db:seed
rake db:test:prepare
rails s
```
In a separate terminal tab, run:
```
yarn install
yarn start
```
If `yarn start` doesn't work, then try `./bin/webpack-dev-server`
Then navigate to `localhost:3000`.

If you want to demo the app without signing up, you may use the username: "testuser" with password: "123456".

For Capybara tests run `rake`
and for Jasmine-Enzyme tests run `karma start`.

## ToDo
* Refactor with Foundation, Bootstrap, or other framework to improve responsiveness of the app
* Curate word list for difficulty
* Create criteria for points so users can accumulate a score
* Refactor with redux for state management
