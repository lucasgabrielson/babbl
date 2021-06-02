(View Raw will give you the markdown that you can copy to your repos!)


![MIT LICENSE](https://img.shields.io/github/license/lucasgabrielson/babbl.svg?style=flat-square)
![REPO SIZE](https://img.shields.io/github/repo-size/lucasgabrielson/babbl.svg?style=flat-square)
![TOP_LANGUAGE](https://img.shields.io/github/languages/top/lucasgabrielson/babbl.svg?style=flat-square)
![FORKS](https://img.shields.io/github/forks/lucasgabrielson/babbl.svg?style=social)

# Babbl (Lucas' Surreal Project)

## Description

_Duration: 3 Week Sprint_

Babbl is here to synthesize financial news and provide users with an easy to digest ‘babbl score’ that lets users understand the future and current sentiments of stocks and cryptocurrencies based on financial news articles. Babbl allows the general public to see the stocks with the most positive and negative forward looking sentiments. In addition they are given access to the stocks that have received the most recent mentions, babbl specific metrics on financial articles and key snippets pertaining to the forward looking sentiments. Babbl members are able to create a watchlist of 10 stocks and see the babbl metrics for each article that references their watchlist. They will also be given articles and snippets regarding their watchlist.

To see the fully functional site, please visit: [DEPLOYED VERSION OF APP](www.heroku.com)

## Screen Shot

Include one or two screen shots of your project here (optional). Remove if unused.

### Prerequisites

Link to software that is required to install the app (e.g. node).

- [Node.js](https://nodejs.org/en/)
- List other prerequisites here

## Installation

How do you get your application up and running? This is a step by step list for how another developer could get this project up and running. The good target audience in terms of knowledge, would be a fellow Primer from another cohort being able to spin up this project. Note that you do not need a paragraph here to intro Installation. It should be step-by-step.

If your application has secret keys (for example --  Twilio), make sure you tell them how to set that up, both in getting the key and then what to call it in the `.env` file.

1. Create a database named `babbl`,
2. The queries in the `tables.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries, 
3. Create .env file and get token from babbl.dev & IEX Cloud
    - BABBL_TOKEN=
    - IEX_CLOUD_API_TOKEN=
4. Open up your editor of choice and run an `npm install`
5. Run `npm run server` in your terminal
6. Run `npm run client` in your terminal
7. The `npm run client` command will open up a new browser tab for you!

## Usage
How does someone use this application? Tell a user story here.

1. xxx
2. xxx
3. xxx
4. xxx
5. xxx
6. 


## Built With

List technologies and frameworks here


_Note, include this only if you have a license file. GitHub will generate one for you if you want!_

## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality.


