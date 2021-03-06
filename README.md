Project information:

- This is a weather website that show the current weather and the future 7 days forecast.
- Project is created with create-react-app

Command:

- npm install: install the application
- npm run start: start the application
- npm run test: run all unit tests of the application.
- npm run build: build application.
- npm run singletest: run a single test, put in a test file name in here.
- npm run coverage: run a coverage test for the whole app.
- npm run lint: run lint on all files in the app.
- npm run prettier: run prettier on all files in the app (prettier also set up as a prehook for commit).

Technology:

- React (hooks)
- Typescript
- Bootstrap 5
- Axsio
- Jest
- Enzyme

Design:

- All business logic is in useFetchWeather.ts, all the rest are pretty much functional components.
- Handle accessibility by using label for input; alt for image; form control for search submission, etc.
- Decide to use basic css for styling. More complex app would use sass.
- Decide not to use date time library such as moment.js. So the package size can be small.
- Create a loader through pure CSS animation, rather than using a image. So the package size can be small.
  But you will only see the full effect of the spinner if you set the network to be slow.
- Use Grid and Flexbox for responsive layout. But if the app required IE support, it should only use Flexbox
- Use lib such as boostrap 5 for consistently look and feel. Normally all the theming, global style should set up in sass.
