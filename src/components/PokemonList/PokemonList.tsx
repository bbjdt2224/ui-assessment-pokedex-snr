import React, { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { Pokemon, useGetPokemons } from '../../hooks/useGetPokemons';
import { PokemonListItem } from './PokemonListItem';
import { Outlet } from 'react-router-dom';

export const PokemonList = () => {
  const classes = useStyles();
  const { pokemons, loading } = useGetPokemons();

  const [filteredPokemons, setFilteredPokemons] = useState<Pokemon[]>(pokemons)

  useEffect(() => {
    setFilteredPokemons(pokemons)
  }, [pokemons])

  const searchPokemons = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSet = pokemons.filter(p => {
      return p.name.toLowerCase().includes(event.target.value.toLowerCase())
    })
    setFilteredPokemons(newSet)
  }

  return (
    <div className={classes.root}>
      <div className={classes.search}>
        <div>Search: </div>
        <input className={classes.searchBar} onInput={searchPokemons} />
      </div>
      <div className={classes.list}>
        {loading && <div>Loading...</div>}
        {filteredPokemons.map((pkmn) => (
          <PokemonListItem key={pkmn.id} pokemon={pkmn}/>
        ))}
      </div>
      <Outlet/>
    </div>
  );
};

const useStyles = createUseStyles(
  {
    root: {
      
    },
    search: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '32px',
      gap: '10px',
      fontWeight: 'bold'
    },
    searchBar: {
      color: 'black',
      fontSize: '18px',
      padding: '4px'
    },
    list: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-evenly',
      flexWrap: 'wrap',
      gap: '20px'
    }
  },
  { name: 'PokemonList' }
);
