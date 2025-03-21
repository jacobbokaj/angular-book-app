# AngularBookApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.1.

This project primarily focuses on testing, so there isn’t a polished visual layout.


## What I used in this project
- [Angular CLI](https://github.com/angular/angular-cli) version 19.0.1. 
- [Karma runner](https://karma-runner.github.io/latest/index.html) to make test
- [Stephen king api](https://stephen-king-api.onrender.com) to make a api call


## Features
- Search for books by ID
- Add books to your list
- Leave comments on books in your list

## How to use this project

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/jacobbokaj/movies-react-app.git
```

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

 ## Testing
 Will open a firefox web browser where you can see tests visuel.

 ```bash
ng test
```

If you want to change to another browser, then go into the file **karma.conf.js** and change

```bash
reporters: ['progress', 'kjhtml'],
    browsers: ['Firefox'], <----- This one
    restartOnFileChange: true
```
If you want another one than Chrome or firefox it needs the requirement plugin
```bash
plugins: [
      require('karma-jasmine'),
      require('karma-firefox-launcher'), <---- like this
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
```
I used this command to install firefox plugin and you can learn more about it on this website [Karma browser launchers](https://karma-runner.github.io/6.4/config/browsers.html)
```bash
npm install karma-firefox-launcher --save-dev
```
