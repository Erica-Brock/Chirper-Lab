# ChirperLab
# IamBham - Angular Lab Chirper Part 1

## Setup

Generate an Angular project using the Angular CLI

`ng new <project-name>`
`ng serve` or `npm start`

Generate three components
1. List
2. Single
3. ChirpForm

*You are welcome to do more components if you think it will make sense to do so.

## Requirements

You must have the three components listed above.

When a user visits the `/` route of your application she should see the Chirp form that will allow her to insert a new chirp (your form does not actually have to work)

You will have a `/list` route that will print all the chirps available in the data folder (you will have to import the interface and the data into your component)

You will also have a `/single/:id` route that will print one chirp

*You must style your application and this does not simply mean put some CSS styles onto your elements, it must have a consistent look and feel.*

*Use this lab to explore Angular, mess around with directives, data binding, and anything else you want to. We will learn about this stuff more in the coming weeks.

FYI: We will (most likely) be building onto this Chirps project for the remainder of the instruction period of the class. In other words we will (most likely) be building the frontend for this in Angular and then integrating a Node API and MySQL database into it.

### Extra Credit

If you are feeling fancy you can look into Angular Material and try to use it in this lab.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
