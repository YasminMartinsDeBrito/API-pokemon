import { Express } from "express";
import pokemonRouter from "./pokemon.routes";

const registerRouters = (app: Express): void => {
    app.use("/pokemon", pokemonRouter)
}
export default registerRouters



