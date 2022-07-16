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
  "count": 1154,
  "next": "https://pokeapi.co/api/v2/pokemon?offset=1000&limit=154",
  "previous": null,
  "results": [
    {
      "name": "bulbasaur",
      "url": "https://pokeapi.co/api/v2/pokemon/1/"
    },
    {
      "name": "ivysaur",
      "url": "https://pokeapi.co/api/v2/pokemon/2/"
    },
    {
      "name": "venusaur",
      "url": "https://pokeapi.co/api/v2/pokemon/3/"
    },
    {
      "name": "charmander",
      "url": "https://pokeapi.co/api/v2/pokemon/4/"
    },
    {
      "name": "charmeleon",
      "url": "https://pokeapi.co/api/v2/pokemon/5/"
    },
    {
      "name": "charizard",
      "url": "https://pokeapi.co/api/v2/pokemon/6/"
    },
```
