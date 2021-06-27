# pacman-ts
[![Build Status](https://travis-ci.com/bward2/pacman-js.svg?branch=master)](https://travis-ci.com/bward2/pacman-js)
[![Coverage Status](https://coveralls.io/repos/github/bward2/pacman-js/badge.svg?branch=master)](https://coveralls.io/github/bward2/pacman-js?branch=master)
[![Code Style](https://img.shields.io/badge/code%20style-airbnb-brightgreen.svg)](https://github.com/airbnb/javascript)

Pacman clone made with Javascript and HTML - *__[Play it!](https://bward2.github.io/pacman-js/)__*

## Development Instructions

This project makes use of *__[NodeJS](https://nodejs.org/en/)__*. Download it, then clone this repo and run the following commands:  
1. `npm i` (Installs necessary packages for development)
1. `npm run serve:dev` (Watches changes to JS and SCSS files for continuous compilation & Run server on Port 9000)
1. visit [localhost:9000](http://localhost:9000) and enjoy the game 😉

## Goals for the repo 
- [X] Move Gulp to Webpack
- [X] Convert JavaScript to TypeScript
- [X] Setup development server (using webpack)
- [X] Refactor file pathing for assets 
- [X] move style processing to webpack
- [X] Refactor TS File Names
- [ ] Setup CI/CD Pipelines 
- [ ] Host Version Online and add link
- [ ] Abstract out some game logic from gameCoordinator and add other class that help manage logic (like AssetLoader,GamePoints etc...)
- [ ] Clean up document Element References
- [ ] Create player control mechanism abstracted so that we can use change it in the future (like for AI version or Multiplayer version)
- [ ] Abstract Ghost class and sub class for each type of ghost
- [ ] Abstract out the ghost behavior and path find logic 
- [ ] Update UnitTests
- [ ] More coming ...


## Original Repo & Game Credit 

### Game Credit : [bward2](https://github.com/bward2) (Github)
### Original Repository: [Link](https://github.com/bward2/pacman-js) 
