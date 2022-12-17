# Задача:

Сделать верстку части страницы проекта. Каждый месяц представлен неделями, 4-6 палочек.</br>
Каждая палочка недели условно делиться на 7 сегментов, по дням (В макете 16 пикселей, на 7 не делится, можно округлить чтоб смотрелось хорошо).</br>
Если в неделе 3 дня - выводим только 3/7 размера. В начале месяца неполная палочка сдвинута вниз, в конце месяца - вверх.</br>
Палочка недели может быть закрашена как полностью, так и частично. Т.е. может быть закрашено только 3 из 7 сегментов. Закрасить можно и в середине палочки. Например, если человек отсутствует ср, чт, пт то закрашено будет только 3 сегмента в середине.</br>
При наведении на закрашенную палочку показывается окошко с данными об отпуске (в макете на окошке крестик, его делать не надо).

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
