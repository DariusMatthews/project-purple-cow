# Project Purple Cow

Created By: Darius Matthews

## Description

"Project Purple Cow" is a counting application the serves as a proof of concept that supports the customers public health and social justice initiatives.

## Prerequisites

To run this application you will need to have Git, Node, and Docker installed on your local computer.

[Download Git](https://git-scm.com/downloads)

[Download Node](https://nodejs.org/en/download/)

[Download Docker](https://docs.docker.com/get-docker/)

## Configuration

In order to change the port that this application is served on, you must go into the docker-compose.yml file and change both port values:

```
    ports:
      - "<PORT>:<PORT>"
```

After changing those values, you then have to set the same port in the package.json develop script:

```
    "develop": "gatsby develop -p <PORT> -H 0.0.0.0"
```

## Build & Run

To run the application, open a terminal and navigate to the project's root directory. Once in the root directory, run:
`docker-compose up --build`

## Future updates & changes
First future change I would make is to refactor the default gatsby starter code to use css modules instead of regular css and css-in-js. this would require moving css-in-js code over to a css file and importing those css files as modules. I would also put each gatsby starter component into its own folder inside components directory. This would require changing the paths where ever they are being use in the app. I would also change the card border to have slightly rounded edges.