# Get Started

## 1. Install dependencies
```
yarn install
```

## 2. configure environment variable .env
```
PORT=3000
```

## 3. Start the Rest API server
```
yarn start
```
The server is now running on 
```
http://localhost:3000
```

# API Endpoints
You can access the following endpoint:

-Pokemons

`GET /pokemon?limit=1000 - Response Example`

```json
{
  "pokemons": [
    "bulbasaur",
    "ivysaur",
    "venusaur",
    "charmander",
    "charmeleon",
    "charizard",
    "squirtle",
    "wartortle",
    "blastoise",
    "caterpie"
  ]
}
```
