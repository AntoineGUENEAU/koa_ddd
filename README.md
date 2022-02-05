## Try the clean architecture with Typescript + Koa + Inversify + Jest

## Installation
```bash
npm install
```

## Tests
```bash
npm run test
```

## Start the application
Copie the .env.example
```bash
cp .env.example .env
```
Défine the DB_CONNECTION key.
```bash
DB_CONNECTION='mongodb://mongoDB:27017/kao_test'
```

Build and up the containers
```bash
docker-composer up -d --build
```
