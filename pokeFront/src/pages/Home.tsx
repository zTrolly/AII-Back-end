import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import usePokemon from '../hooks/usePokemon';
import './Home.css';

export const Home = () => {
    const { searchPokemon, getGeneration } = usePokemon();
    const [generation, setGeneration] = useState<number>(1);
    const [pokemonName, setPokemonName] = useState('');
    const [pokemonData, setPokemonData] = useState<{ name: string; sprites: { front_default: string } } | null>(null);
    const [pokeList, setPokeList] = useState<any[]>([]);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    /**
     * Função para buscar um Pokémon pelo nome
     * @returns  {Promise<void>} Retorna um erro caso o Pokémon não seja encontrado
     *  
     */
    const handleSearch = async () => {
        setError(null);
        if (!pokemonName.trim()) {
            setError('Por favor insira um nome de Pokémon.');
            return;
        }
        try {
            const data = await searchPokemon(pokemonName);
            if (!data) {
                setError('Pokemón não encontrado.');
                return
            }
            setPokemonData(data);

        } catch (err) {
            setError('Um erro ocorreu ao buscar o Pokémon.');
            return
        }
    };

    const handleGeneration = async (gen: number) => {
        setError(null);
        try {
            const data = await getGeneration(gen);
            setPokeList(data.pokemon_species);
        } catch (err) {
            setError('Ocorreu um erro ao buscar a geração.');
        }
    };

    const handleSelectPokemon = async (name: string) => {
        const data = await searchPokemon(name);
        setPokemonData(data);
        if (data) {
            navigate(`/pokemon/${data.name}`, { state: { pokemonData: data } });
        }
    };

    useEffect(() => {
        handleGeneration(generation);
    }, [generation]);

    
    const renderGeneration = () => {
        const title = ['Primeira', 'Segunda', 'Terceira', 'Quarta', 'Quinta', 'Sexta', 'Sétima', 'Oitava'];

        return (
            <div className="generation-container">

                <h2>{title[generation - 1]} Geração</h2>
                <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                    {[...Array(8)].map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setGeneration(index + 1)}
                            className={generation === index + 1 ? 'selected' : ''}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <div className="home-container">
            <h1>Pesquise por um Pokémon</h1>
            <div className="search-container">
            <input
                type="text"
                value={pokemonName}
                onChange={(e) => setPokemonName(e.target.value)}
                placeholder="Escreva o nome de um Pokémon"
                className="search-input"
            />
            <button onClick={handleSearch} className="search-button">Search</button>
            </div>
            {error && <div className="error-message">{error}</div>}
            {pokemonData && (
                <div className="pokemon-card" style={{
                  cursor: 'pointer',
                }} onClick={() => {
                    navigate(`/pokemon/${pokemonData.name}`, { state: { pokemonData } });

                }}>
                    <h1>{pokemonData.name}</h1>
                    <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
                </div>
            )}

            {renderGeneration()}
            <ul className="pokemon-list">
                {pokeList.map((poke, index) => (
                    <li
                        key={index}
                        className="pokemon-list-item"
                        style={{ textTransform: 'capitalize', cursor: 'pointer' }}
                        onClick={() => handleSelectPokemon(poke.name)}
                    >
                        {poke.name}
                    </li>
                ))}
            </ul>

           
        </div>
    );
};
