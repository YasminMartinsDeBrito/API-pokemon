import { Express } from "express";
import pokemonRouter from "./pokemon.router";

const registerRouters = (app: Express): void => {
    app.use("/pokemon", pokemonRouter)
}
export default registerRouters



