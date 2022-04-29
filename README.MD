## Auth API 🔐

## Description

Rest API for users authentication and authorization.

## Requirements/Dependencies

- docker
- docker-composer

## Application config

### Install

    yarn

### .env

    cp .env.example .env

### Run the app

    yarn docker:up

    # run without docker
    yarn start:dev

### Down the app

    yarn docker:down

## Resources

### Accounts

| Endpoint             | HTTP Method |       Description        |
| -------------------- | :---------: | :----------------------: |
| `/accounts/{:id}`    |    `GET`    |   `List account by ID`   |
| `/accounts`          |   `POST`    |   `Create new account`   |
| `/accounts/sessions` |   `POST`    | `Authentication account` |
| `/accounts/confirm`  |   `PATCH`   |  `Confirm new account`   |

### Features

| Endpoint    | HTTP Method |     Description      |
| ----------- | :---------: | :------------------: |
| `/features` |   `POST`    | `Create new feature` |
