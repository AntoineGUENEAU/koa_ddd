## Try the DDD with Typescript + Koa + Inversify + Jest

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

## TODO
- Améliorer le retour des UseCases (Ils ne doivent pas retourner des object du domaine normalement)
sur les UseCase cart je retourne des ojects du domaine et sur les UseCase product je retourne des Dto, a voir que'elle est la bonne pratique
