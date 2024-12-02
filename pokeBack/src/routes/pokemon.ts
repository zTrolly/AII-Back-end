import { Router, Request, Response } from 'express';

export const pokemonRoute = Router();

/**
 * Rota para buscar um Pokémon pelo nome
 * @param {string} name Nome do Pokémon a ser buscado
 * @returns  {Promise<any>} Retorna os dados do Pokémon buscado
 */
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

/**
 * Rota para buscar um Pokémon pelo ID
 * @param {number} id ID do Pokémon a ser buscado
 */
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

/**
 * Rota para buscar uma geração de Pokémon
 * @param {number} generation Número da geração a ser buscada
 */
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

/**
 * Rota para buscar a espécie de um Pokémon
 * @param {string} name Nome do Pokémon a ser buscado
 */
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

/**
 * Rota para buscar a evolução de um Pokémon
 * @param {number} id ID do Pokémon a ser buscado
 */
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


/**
 * Rota para buscar um tipo de Pokémon
 * @param {string} type Tipo do Pokémon a ser buscado
 * @returns  {Promise<any>} Retorna os dados do tipo de Pokémon buscado
 */
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


/**
 * Rota para buscar uma habilidade de Pokémon
 * @param {string} ability Habilidade do Pokémon a ser buscada
 * @returns  {Promise<any>} Retorna os dados da habilidade de Pokémon buscada
 */
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


/**
 * Rota para buscar um habitat de Pokémon
 * @param {string} habitat Habitat do Pokémon a ser buscado
 * @returns  {Promise<any>} Retorna os dados do habitat de Pokémon buscado
 */
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


/**
 * Rota para buscar uma forma de Pokémon
 * @param {string} shape Forma do Pokémon a ser buscada
 * @returns  {Promise<any>} Retorna os dados da forma de Pokémon buscada
 */
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


