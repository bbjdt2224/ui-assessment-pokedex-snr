import React from 'react';
import { createUseStyles } from 'react-jss';
import { Pokemon } from '../../hooks/useGetPokemons';
import { NavLink } from 'react-router-dom';

interface ListItemProps {
  pokemon: Pokemon;
}

export const PokemonListItem = ({ pokemon }: ListItemProps) => {
  const classes = useStyles();

  return (
    <NavLink
      to={'/pokemon/' + pokemon.id}
      className={classes.root}
      title={pokemon.name}
    >
      <img className={classes.imgae} src={pokemon.image} />
      <div className={classes.data}>
        <div className={classes.number}>#{pokemon.number}</div>
        <div className={classes.header}>{pokemon.name}</div>
        <div>
          {pokemon.types.map((type) => {
            return <span className={classes.type}>{type}</span>;
          })}
        </div>
      </div>
    </NavLink>
  );
};

const useStyles = createUseStyles(
  {
    root: {
      maxWidth: '300px',
      height: '500px',
      textAlign: 'center',
      padding: '32px',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      border: '1px solid rgba(255, 255, 255, .5)',
      borderRadius: '16px',
      backgroundColor: 'rgba(255, 255, 255, .2)',
      boxShadow: 'inset 0 0 5px 2px rgba(255, 255, 255, .2)',
      textDecoration: 'none',
      '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, .5)',
        border: '1px solid rgba(255, 255, 255, .9)',
        cursor: 'pointer',
        boxShadow: '0 0 5px 5px rgba(255, 255, 255, .2)',
      },
    },
    imgae: {
      width: '100%',
      borderRadius: '4px',
    },
    data: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    number: {
      margin: '5px 0',
    },
    header: {
      fontWeight: 'bold',
      fontSize: '32px',
      margin: '5px 0',
    },
    type: {
      margin: '0 5px',
    },
  },
  { name: 'PokemonListItem' }
);
