# VITE-TEMPLATE

_This Repo id the template for the setting up the Reat prject using Vite_

# Template Components

- Test cases with `jest`, `testing-library`
- localisation with `i18n` ,`react-i18next`,
- Redux with `Redux Persist`, middelware: `Thunk` 
- Http Request handeler `axios` 
- Prettier as formating tool 
- eslint as linting tool
- Css as main styling guide
- Pre Commit checks with husky 
- 

# Getting Started

## Requirements

- [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
  - You'll know you did it right if you can run `git --version` and you see a response like `git version x.x.x`
- [Nodejs](https://nodejs.org/en/)
  - You'll know you've installed nodejs right if you can run:
    - `node --version` and get an ouput like: `vx.x.x`
- [Yarn](https://yarnpkg.com/getting-started/install) instead of `npm`
  - You'll know you've installed yarn right if you can run:
    - `yarn --version` and get an output like: `x.x.x`
    - You might need to [install it with `npm`](https://classic.yarnpkg.com/lang/en/docs/install/) or `corepack`
- [Vite]()
  - `npm i -g vite`
  - This will install vite globally on your system

# Usage

1. Creat the project

```
npx degit BoTreeConsultingTeam/vite-react-app-template <your project name>
```

2. Access the project directory

```
cd <your project directory>
```

3. Insatlling Packages

```
yarn
```

## Start the project

1. Start with out envirnmnent variables

```
yarn run dev-local
```

2. Sart with envirnment variables

```
yarn run dev
```

## Server the Project

```
yarn run serve
```

## Building the Project

```
yarn run build
```

## Test Commands

1. Run unit tests

```
yarn run test
```

2. Run unit tests with Converage

```
yarn run test:coverage
```

### Using Docker

You need docker installed on you machine

```
sudo docker-compose -f "docker-compose.dev.yml" up
```

## Deployment

- The Deployemnt is the done with the a jenkins job
- Whenever you merge branch into `develop` a jenkins job is triggered which performs the following task
  - Pulls the latest code form the origin
  - removes all the existing containers
    `sudo docker system prune -f`
  - Stops the front end app conatiner `sudo docker stop "shairu-website-dev-frontend"`
  - Start the continer in demone mode with the latest changes pull in the erlier steps
    `sudo docker-compose -f "docker-compose.dev.yml" up --build -d`

# Deployment

1. Setup environment variables

You'll want to set your `ESLINT_NO_DEV_ERRORS`,`FAST_REFRESH`, `REACT_APP_ENV`and `REACT_APP_BASE_URL` as environment variables. You can add them to a `.env` file and in `docker-compose.dev.yml`

- `REACT_APP_ENV`: The private key for defining what is the envirnment that you will be using for the starting and the deploying the code.
- `REACT_APP_BASE_URL`: This is url for the api that will be exposed for the all the http or https request that will made by Front End

* This environment variable is very important as this will define which BackEnd we will be using for Http or Https request\*

# Linting

`eslint` installation: This will be added when you run `yarn `

To check linting / code formatting:

```
yarn lint
```

# Formatting

```
yarn format
```

# Things to Chnage

1. index.html

```
Add you project name in the Title
```

```
    public > index.html

  <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <title></title>
    <!-- add you project name here -->
  </head>

```

2. docker-compose.dev.yml

- Add your evirnment variables in `envirnment` key
- These are the vriables that you have used in `.env`
- chnage the container name and image name as per you project

```
 app:
    container_name: template
      #change the container name as per your porject
    image: template-v1
      # change the image name as per your poject
    environment:
      #add project level env variables
```

3. Manifest.json

```
 "short_name": "",
  // add you project name and shot name
  "name": "",

```

4. store.js

```
export default (initialState = {}) => {
  const persistConfig = {
    key: 'template', // add project name
    storage,
  };
}
```

# Thank you!

If you appreciated this, feel free to leave review at farhan.mithani@tntra.io
