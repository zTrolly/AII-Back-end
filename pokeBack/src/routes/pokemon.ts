import { Router, Request, Response } from 'express';

export const pokemonRoute = Router();

pokemonRoute.get('/getPokemonByName/:name', async (req: Request, res: Response) => {
    try {
        const {name} = req.params;
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        if(response.status === 404) {
            res.send(null);
            return;
        }

        const data = await response.json();
        res.send(data);
    } catch (error) {
        res.status(500).send({ error: 'Falha ao buscar Pokémon pelo nome' });
    }
});

pokemonRoute.get('/getPokemonById/:id', async (req: Request, res: Response) => {
    try {
        const {id} = req.params;
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        if(response.status === 404) {
            res.send(null);
            return;
        }
        
        const data = await response.json();
        res.send(data);
    } catch (error) {
        res.status(500).send({ error: 'Falha ao buscar Pokémon pelo ID' });
    }
});

pokemonRoute.get('/getGeneration/:generation', async (req: Request, res: Response) => {
    try {
        const {generation} = req.params;
        const response = await fetch(`https://pokeapi.co/api/v2/generation/${generation}`);
        if(response.status === 404) {
            res.send(null);
            return;
        }
        
        const data = await response.json();
        res.send(data);
    } catch (error) {
        res.status(500).send({ error: 'Falha ao buscar geração' });
    }
});

pokemonRoute.get('/getPokemonSpecies/:name', async (req: Request, res: Response) => {
    try {
        const {name} = req.params;
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${name}`);
        if(response.status === 404) {
            res.send(null);
            return;
        }
        
        const data = await response.json();
        res.send(data);
    } catch (error) {
        res.status(500).send({ error: 'Falha ao buscar espécie de Pokémon' });
    }
});

pokemonRoute.get('/getPokemonEvolution/:id', async (req: Request, res: Response) => {
    try {
        const {id} = req.params;
        const response = await fetch(`https://pokeapi.co/api/v2/evolution-chain/${id}`);
        if(response.status === 404) {
            res.send(null);
            return;
        }
        
        const data = await response.json();
        res.send(data);
    } catch (error) {
        res.status(500).send({ error: 'Falha ao buscar evolução de Pokémon' });
    }
});

pokemonRoute.get('/getPokemonType/:type', async (req: Request, res: Response) => {
    try {
        const {type} = req.params;
        const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
        if(response.status === 404) {
            res.send(null);
            return;
        }
        const data = await response.json();
        res.send(data);
    } catch (error) {
        res.status(500).send({ error: 'Falha ao buscar tipo de Pokémon' });
    }
});

pokemonRoute.get('/getPokemonAbility/:ability', async (req: Request, res: Response) => {
    try {
        const {ability} = req.params;
        const response = await fetch(`https://pokeapi.co/api/v2/ability/${ability}`);
        if(response.status === 404) {
            res.send(null);
            return;
        }
        const data = await response.json();
        res.send(data);
    } catch (error) {
        res.status(500).send({ error: 'Falha ao buscar habilidade de Pokémon' });
    }
});

pokemonRoute.get('/getPokemonHabitat/:habitat', async (req: Request, res: Response) => {
    try {
        const {habitat} = req.params;
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon-habitat/${habitat}`);
        const data = await response.json();
        res.send(data);
    } catch (error) {
        res.status(500).send({ error: 'Falha ao buscar habitat de Pokémon' });
    }
});

pokemonRoute.get('/getPokemonShape/:shape', async (req: Request, res: Response) => {
    try {
        const {shape} = req.params;
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon-shape/${shape}`);
        if(response.status === 404) {
            res.send(null);
            return;
        }
        const data = await response.json();
        res.send(data);
    } catch (error) {
        res.status(500).send({ error: 'Falha ao buscar forma de Pokémon' });
    }
});


