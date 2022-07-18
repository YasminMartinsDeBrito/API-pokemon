import { Router } from "express";
import api from "../config/api";

const pokemonRouter = Router()


pokemonRouter.get("", async (req, res) => {

    api.get("")
    .then((response) => {
        const pokemon = response.data
        return res.status(200).json(pokemon)
    })
    .catch((err) => {
        console.log(err)
    })
})
export default pokemonRouter
