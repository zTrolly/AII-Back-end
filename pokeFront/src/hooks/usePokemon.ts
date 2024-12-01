const usePokemon = ()=> {

    const localUrl = 'http://localhost:3000';

    const searchPokemon = async (pokemonName: string): Promise<any> => {
        const response = await fetch(`${localUrl}/pokemon/getPokemonByName/${pokemonName}`);
        const data = await response.json();
        return data;
    }

    const pokemonById = async (pokemonId: number): Promise<any> => {
        const response = await fetch(`${localUrl}/pokemon/getPokemonById/${pokemonId}`);
        const data = await response.json();
        return data;
    }

    const searchPokemonSpecies = async (pokemonName: string): Promise<any> => {
        const response = await fetch(`${localUrl}/pokemon/getPokemonSpecies/${pokemonName}`);
        const data = await response.json();
        return data;
    }

    const getGeneration = async (generation: number): Promise<any> => {
        const response = await fetch(`${localUrl}/pokemon/getGeneration/${generation}`);
        const data = await response.json();
        console.log(data);
        return data;
    }


    const searchPokemonEvolution = async (pokemonId: number): Promise<any> => {
        const response = await fetch(`${localUrl}/pokemon/getPokemonEvolution/${pokemonId}`);
        const data = await response.json();
        return data;
    }

    const searchPokemonType = async (pokemonType: string): Promise<any> => {
        const response = await fetch(`${localUrl}/pokemon/getPokemonType/${pokemonType}`);
        const data = await response.json();
        return data;
    }

    const searchPokemonAbility = async (pokemonAbility: string): Promise<any> => {
        const response = await fetch(`${localUrl}/pokemon/getPokemonAbility/${pokemonAbility}`);
        const data = await response.json();
        return data;
    }

    const searchPokemonHabitat = async (habitat: string): Promise<any> => {
        const response = await fetch(`${localUrl}/pokemon/getPokemonHabitat/${habitat}`);
        const data = await response.json();
        return data;
    }

    const searchPokemonShape = async (shape: string): Promise<any> => {
        const response = await fetch(`${localUrl}/pokemon/getPokemonShape/${shape}`);
        const data = await response.json();
        return data;
    }

    return {
        searchPokemon,
        searchPokemonSpecies,
        searchPokemonEvolution,
        searchPokemonType,
        searchPokemonAbility,
        pokemonById,
        searchPokemonHabitat,
        searchPokemonShape,
        getGeneration
    }


}

export default usePokemon;