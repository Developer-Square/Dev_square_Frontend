## Installation
First clone the repo using the following:

git clone https://github.com/Developer-Square/Dev_square_Frontend.git 
cd Dev_square_Frontend
Install the dependencies:

```bash 
yarn install
```
### After Installing the Dependecies run the following command to start the app locally

```bash 
yarn start
```
Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.
In the project directory, you can run:

## Starting a new Feature
When starting a new feature you'll first have to type in `git branch` to see which branch you're on, naturally you should be on the main branch.
You should NOT develop on the main branch, ALWAYS switch to a new branch when you want to develop (Write any code).
Here's how to switch `git checkout -b [your_new_branch_name] e.g. git checkout -b header`.

## Creating a Pull Request
 When you're done with a feature or done with writing code for the day, make sure you commit your changes by first typing in:
 `git add .` to add all your changes then `git commit -m "Your_commit_message"`. Lastly type in `git push origin [your_branch_name] i.e. the branch that your created earlier`.
 This will push all your changes to Github.
 In github you'll be prompted to create a pull request which is really easy if you followed the steps above.
 
## Avoiding Merge Conflicts
To avoid merge conflicts anytime you want to start a new branch apart from the first time you pulled the code, you should first type in `git branch` to make sure you're in the
main branch and if NOT use `git checkout main` to get you to the main branch. After that use `git pull` to make sure you've the latest code.

### `yarn build` is meant for production purposes only.

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
