
# <p align="center">[T4Tp](https://t4tp.vercel.app/) ~40hrs</p>
<p align='center' >👆<b>Click the heading to visit the deploy link</b>👆</p>

<p align="center">A single-user application aimed at providing compatible and safe(er) local bathrooms to transgender individuals.</p>

### <p align="center">Contributors</p>
<div align="center">
  
  [Asher Spurr](https://github.com/AsherSpurr)

</div>

## Preview:
<div align="center">
  

https://github.com/AsherSpurr/t4t-p/assets/144856487/ec65412f-242c-46bf-8749-f2baaf02b620



</div>
<p align="center">Technologies Used</p>
<div align="center">
  <img src="https://img.shields.io/badge/JavaScript-EAD54C?logo=javascript&logoColor=white"&style=flat-square" />
  <img src="https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=000&style=for-the-badge" alt="react badge">
  <img src="https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=fff&style=for-the-badge" alt="html badge">
  <img src="https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=fff&style=for-the-badge" alt="css badge">
  <img src="https://img.shields.io/badge/React%20Router-CA4245?logo=reactrouter&logoColor=fff&style=for-the-badge" alt="router badge">
  <img src="https://img.shields.io/badge/Cypress-69D3A7?logo=cypress&logoColor=fff&style=for-the-badge" alt="cypress badge">
  <img src="https://img.shields.io/badge/Vercel-000?logo=vercel&logoColor=fff&style=for-the-badge" alt="vercel badge">
</div>

## Installation Instructions:
- Visit the deployed [link](https://t4tp.vercel.app/)
- OR run the following on the command line to clone the repo and run the app locally:
    ```
    git clone git@github.com:corysanders3/spilled.git
    cd spilled
    npm install
    npm start
    ```
### Environment variables
After cloning and installing packages
- Create a `.env` file in the root directory
- Copy and paste `REACT_APP_GOOGLE=myKey`
- `Substitute myKey` with `your Google API` key or `message me on GitHub` so I can provide mine.
### Run Tests
- Ensure you're running the app locally (see Installation Instructions above)
- Run the following on the command line to open Cypress: `npm run cypress` or `npx cypress open`
- Click `E2E Testing`, then `Start E2E Testing` in the desired browser
- Select `a test suite` to run all tests related to that suite
## Future Features/Improvements
  1. Refactor media queries to include view options, toggling from list and map view.
  2. Incorporate Google's Places API to provide further service and convenience for users
  3. Re-try using query parameters to filter in real time. This was almost achieved but in the interest of time for submission had to pivot away.
  4. Refactor to use Google's lat & lng data for a given location based on the address, the Refugee Restroom coordinates are slightly off.
  5. Replace CSS with MUI and add a dynamic loading state
  6. Add a toggle view for list and map view for mobile
## Context:
<!-- wins, challenges, time spent, goals, approaches etc -->
### Wins
- Creating reusable components throughout the application
- Incorporating Googles Map SDK
- Successfully appending and deleting query params from the URL (This is no longer included in production)

### Challenges
- The filter function I originally had would override my query parameters. I am eager to revert back to this version so I can continue problem-solving how it was able to achieve this.
- Getting the Filter checkboxes to filter in real-time. They always were one step behind the filter state because of their async behavior. Tried a few versions to keep the filter function and Filter state in sync, but none worked in the time frame given. I look forward to revisiting this.




