# Craigslist Item Tracker 

This application is designed to search craigslist and send the user a text message for any new product listed so that you can be the first to find a product without searching craigslist every hour.

# Installation

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Clone the Codebase.

* `git clone https://github.com/MikeSewell/craigslistNodeSms.git`

### Prerequisites

* [Git](https://git-scm.com/)


### Installing

* `npm i`

Create an .env file

``` 
// .env

DB_USERNAME=xxx
DB_PASSWORD=xxx
TWILIO_SID=xxx
TWILIO_TOKEN=xxxx
TO_SMS=+1xxxxxxx
FROM_SMS=+1xxxxxx

```
### Getting Started

* `npm start`

Navigate to localhost:3000 in your browser.

Enter the city you want to search and the item you are looking for press enter. 

Then you will start to get SMS from the craigslist post that where posted today if you leave the bot running you will get a text every time a new post is uploaded for your search.

## Style Guide

This setup uses ESlint and Prettier together on save to refactor code to [Airbnb Style Guide](https://github.com/airbnb/javascript).

Created with [VScode](https://code.visualstudio.com/)

This code base used the [Airbnb Style Guide](https://github.com/airbnb/javascript)
To follow this guide

* You **MUST** have [ESlint](https://eslint.org/) installed on your local machine

### Setup
Create a .eslintrc file

```javascript
//.eslintrc
{
    "extends": [
        "airbnb-base"
    ],
    "plugins": [
        "prettier"
    ]
}
```
Use dev dependencies

```javascript
// package.json

"devDependencies": {
    "eslint-config-prettier": "^2.9.0",
    "mocha-eslint": "^4.1.0",
    "prettier": "1.11.0",
    "eslint-plugin-prettier": "2.6.0",
    "eslint-config-airbnb-base": "^12.1.0",
    "eslint-plugin-import": "^2.9.0"
  },
```
Add the following code to the vscode user settings

```javascript
    "eslint.autoFixOnSave": true,
    "[javascript]": {
        "editor.formatOnSave": false
    },
    "eslint.alwaysShowStatus": true,
```

`$ npm install --save-dev eslint-config-airbnb-base`

## Versioning

We use [SemVer](http://semver.org/) for versioning.

## Authors

* **Mike Sewell** - *Initial work* - [MikeSewell](https://github.com/MikeSewell)

## License

This project is licensed under the MIT License

