const usePokemon = ()=> {

    /**
     * URL local para os requests, caso queira trocar a porta, lembrar de alterar também no arquivo server.ts
     */
    const localUrl = 'http://localhost:3000';


    /**
     * Função para buscar um Pokémon pelo nome
     * @param {string} pokemonName Nome do Pokémon a ser buscado
     * @returns  {Promise<any>} Retorna os dados do Pokémon buscado
     *  
     */
    const searchPokemon = async (pokemonName: string): Promise<any> => {
        const response = await fetch(`${localUrl}/pokemon/getPokemonByName/${pokemonName}`);
        const data = await response.json();
        return data;
    }

    /**
     * Função para buscar um Pokémon pelo ID
     * @param {number} pokemonId ID do Pokémon a ser buscado
     * @returns  {Promise<any>} Retorna os dados do Pokémon buscado
     */
    const pokemonById = async (pokemonId: number): Promise<any> => {
        const response = await fetch(`${localUrl}/pokemon/getPokemonById/${pokemonId}`);
        const data = await response.json();
        return data;
    }

    /**
     * Função para buscar as espécies de um Pokémon
     * @param {string} pokemonName Nome do Pokémon a ser buscado
     * @returns  {Promise<any>} Retorna os dados da espécie do Pokémon
     */
    const searchPokemonSpecies = async (pokemonName: string): Promise<any> => {
        const response = await fetch(`${localUrl}/pokemon/getPokemonSpecies/${pokemonName}`);
        const data = await response.json();
        return data;
    }

    /**
     * Função para buscar a geração de um Pokémon
     * @param {number} generation Número da geração a ser buscada
     * @returns  {Promise<any>} Retorna os dados da geração buscada
     */
    const getGeneration = async (generation: number): Promise<any> => {
        const response = await fetch(`${localUrl}/pokemon/getGeneration/${generation}`);
        const data = await response.json();
        console.log(data);
        return data;
    }

    /**
     * Função para buscar a evolução de um Pokémon
     * @param {number} pokemonId ID do Pokémon a ser buscado
     * @returns  {Promise<any>} Retorna os dados da evolução do Pokémon
     */
    const searchPokemonEvolution = async (pokemonId: number): Promise<any> => {
        const response = await fetch(`${localUrl}/pokemon/getPokemonEvolution/${pokemonId}`);
        const data = await response.json();
        return data;
    }

    /**
     * Função para buscar os Pokémon de um determinado tipo
     * @param {string} pokemonType Tipo do Pokémon a ser buscado
     * @returns  {Promise<any>} Retorna os dados dos Pokémon do tipo buscado
     */
    const searchPokemonType = async (pokemonType: string): Promise<any> => {
        const response = await fetch(`${localUrl}/pokemon/getPokemonType/${pokemonType}`);
        const data = await response.json();
        return data;
    }

    /**
     * Função para buscar os Pokémon de uma determinada habilidade
     * @param {string} pokemonAbility Habilidade do Pokémon a ser buscado
     * @returns  {Promise<any>} Retorna os dados dos Pokémon da habilidade buscada
     */
    const searchPokemonAbility = async (pokemonAbility: string): Promise<any> => {
        const response = await fetch(`${localUrl}/pokemon/getPokemonAbility/${pokemonAbility}`);
        const data = await response.json();
        return data;
    }

    /**
     * Função para buscar os Pokémon de um determinado habitat
     * @param {string} habitat Habitat do Pokémon a ser buscado
     * @returns  {Promise<any>} Retorna os dados dos Pokémon do habitat buscado
     */
    const searchPokemonHabitat = async (habitat: string): Promise<any> => {
        const response = await fetch(`${localUrl}/pokemon/getPokemonHabitat/${habitat}`);
        const data = await response.json();
        return data;
    }

    /**
     * Função para buscar os Pokémon de uma determinada forma
     * @param {string} shape Forma do Pokémon a ser buscado
     * @returns  {Promise<any>} Retorna os dados dos Pokémon da forma buscada
     */
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