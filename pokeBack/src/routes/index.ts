import {Router} from 'express';
export {pokemonRoute} from './pokemon.js';

export const router = Router();

router.get('/', (req, res) => {
  res.send('Hello, world!');
});

