import { useEffect, useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import usePokemon from '../hooks/usePokemon';
import './Pokemon.css';

export const Pokemon = () => {
    const { id } = useParams<{ id: string }>();
    const location = useLocation();
    const navigate = useNavigate();
    const { pokemonById } = usePokemon();
    const [pokemonData, setPokemonData] = useState<{
        name: string;
        sprites: { front_default: string, front_shiny: string, front_female: string, front_shiny_female: string, back_default: string, back_shiny: string, back_female: string, back_shiny_female: string };
        types: { type: { name: string } }[];
        abilities: { ability: { name: string } }[];
        weight: number;
        base_experience: number;
        height: number;
        is_default: boolean;
        order: number;
        forms: { name: string }[];
        game_indices: { version: { name: string }, game_index: number }[];
        held_items: { item: { name: string }, version_details: { version: { name: string }, rarity: number }[] }[];
        location_area_encounters: string;
        moves: { move: { name: string }, version_group_details: { move_learn_method: { name: string }, version_group: { name: string }, level_learned_at: number }[] }[];
        past_types: { generation: { name: string }, types: { type: { name: string } }[] }[];
        cries: { latest: string, legacy: string };
        species: { name: string };
        stats: { stat: { name: string }, effort: number, base_stat: number }[];
    } | null>(location.state?.pokemonData || null);

    useEffect(() => {
        if (!pokemonData && id) {
            pokemonById(parseInt(id)).then((data) => {
                setPokemonData(data);
            });
        }
    }, [id, pokemonData]);

    return (
        <div className="pokemon-container">
            <button className="back-button" onClick={() => navigate('/')} style={{
                marginBottom: '10px',
                padding: '5px 10px',
                cursor: 'pointer',
                backgroundColor: 'white',
                border: '1px solid black',
                borderRadius: '5px',
                fontSize: '16px',
                fontWeight: 'bold'
            }}>Voltar</button>
            {pokemonData ? (
                <>
                    <h1 style={{
                        textTransform: 'capitalize'
                    }}>{pokemonData.name}</h1>
                    <div className="pokemon-sprites">
                        {pokemonData.sprites.front_default && <img src={pokemonData.sprites.front_default} alt={`${pokemonData.name} front`} />}
                        {pokemonData.sprites.front_shiny && <img src={pokemonData.sprites.front_shiny} alt={`${pokemonData.name} front shiny`} />}
                        {pokemonData.sprites.front_female && <img src={pokemonData.sprites.front_female} alt={`${pokemonData.name} front female`} />}
                        {pokemonData.sprites.front_shiny_female && <img src={pokemonData.sprites.front_shiny_female} alt={`${pokemonData.name} front shiny female`} />}
                        {pokemonData.sprites.back_default && <img src={pokemonData.sprites.back_default} alt={`${pokemonData.name} back`} />}
                        {pokemonData.sprites.back_shiny && <img src={pokemonData.sprites.back_shiny} alt={`${pokemonData.name} back shiny`} />}
                        {pokemonData.sprites.back_female && <img src={pokemonData.sprites.back_female} alt={`${pokemonData.name} back female`} />}
                        {pokemonData.sprites.back_shiny_female && <img src={pokemonData.sprites.back_shiny_female} alt={`${pokemonData.name} back shiny female`} />}
                    </div>
                    <div className="pokemon-details">
                        <h2>Types</h2>
                        <ul>
                            {pokemonData.types.map((type, index) => (
                                <li key={index}>{type.type.name}</li>
                            ))}
                        </ul>
                        <h2>Abilities</h2>
                        <ul>
                            {pokemonData.abilities.map((ability, index) => (
                                <li key={index}>{ability.ability.name}</li>
                            ))}
                        </ul>
                        <h2>Weight</h2>
                        <p>{pokemonData.weight} kg</p>
                        <h2>Base Experience</h2>
                        <p>{pokemonData.base_experience}</p>
                        <h2>Height</h2>
                        <p>{pokemonData.height} dm</p>
                        <h2>Is Default</h2>
                        <p>{pokemonData.is_default ? 'Yes' : 'No'}</p>
                        <h2>Order</h2>
                        <p>{pokemonData.order}</p>
                        <h2>Forms</h2>
                        <ul>
                            {pokemonData.forms.map((form, index) => (
                                <li key={index}>{form.name}</li>
                            ))}
                        </ul>
                      
                        <h2>Cries</h2>
                        <p>Latest: {pokemonData.cries.latest}</p>
                        <p>Legacy: {pokemonData.cries.legacy}</p>
                        <h2>Species</h2>
                        <p>{pokemonData.species.name}</p>
                        <h2>Stats</h2>
                        <ul>
                            {pokemonData.stats.map((stat, index) => (
                                <li key={index}>{stat.stat.name}: {stat.base_stat} (effort: {stat.effort})</li>
                            ))}
                        </ul>
                    </div>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};