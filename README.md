# Game: guess the bird


[Deploy link](https://song-bird-game.netlify.app/).

[Link to Github repository](https://github.com/SergeyCodeJs/song-bird).

## What it is:
This is an interactive web game in which you have to listen to the voices of birds and guess the name of the bird by its voice. For every correct answer, you get points, for every wrong answer, points are deducted. The game is divided into 6 levels, in each of which you can score a maximum of 5 points and a minimum of 0 points.
You can first listen to all the birds, read their descriptions and see how they look. After the start of the game, access to this functionality is closed. The game starts after launching the bird's voice on the game screen.

## Installation:
1. An application is already built, located in the ```'/build'``` folder.
1. The source files are in the ```'./src``` folder.
1. To build, download the files from the repository and install the dependencies use npm: ```npm install. ```
1. Use the ```npm run start.``` script to run the project.

Technology:
```HTML5```, ```CSS3```, ```JavaScript ES6```, ```React```, ```React hooks```, ```Redux```, ```react-transition-group```, ```Redux thunk```.
```Create React App``` is used for building.
The ```SASS``` preprocessor is used. ```CSS``` modules are also applied.

## Technical features:
1. Adaptive layout, application works equally well on desktops, tablets and mobile devices, fully responsive.
1. The provided layout is designed cross-browser. Browser requirements met: ```Internet Explorer 11```, ```edge``` and ```Chrome```, ```Opera```, ```Yandex Browser```, ```Firefox``` latest versions.
1. Used ```Create React App``` builder, the officially supported builder for building single-line apps with ```React```.
1. ```React``` is used, visual components are separated from logic, data stored in Redux store.
1. ```HTML5/CSS3/JSX``` code divided into modules;
1. Validity checked using [https://validator.w3.org/](https://validator.w3.org/), Document checking completed. No errors or warnings.

## Implementation nuances

1. The component approach is applied, the code is divided into modules, which are contained in the ```/components``` folder.
1. First we fetch data. The data is passed to the required components using ```Redux```. If an error occurs, a special page appears that shows that something went wrong. If the data is loading, the loading screen appears (in this case, since the application is not communicating with the server, the loading is simulated using ```SetTimeout```, which resolves the ```Promise``` with a delay of 2 seconds).
1. All components are wrapped in ```Error Boundary```, which keeps track of errors. If there is an error in the application, a special component will be shown to indicate that something went wrong.
1. Redux Store is divided into logical parts using Combine Reducers.
1. ```Redux Thunk``` is used.
1. Responsiveness implemented with ```@media queries``` and ```responsive web design```.

Have a good game, and may you be lucky!