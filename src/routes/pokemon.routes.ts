import { Router } from "express";
import api from "../config/api";

const pokemonRouter = Router()


pokemonRouter.get("", async (req, res) => {

    const pokemonsData = await api.get("?limit=1000")
    const pokemon = pokemonsData.data
    return res.status(200).json(pokemon)
})
export default pokemonRouter
