import { createUseStyles } from 'react-jss';
import { useGetPokemonDetails } from '../../hooks/useGetPokemonDetails';
import { Dialog, DialogTitle } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const PokemonDialog = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const id = window.location.href.split('/').pop() || '';
  const { pokemonDetails, loading } = useGetPokemonDetails(id);

    const handleClose = () => {
        navigate('/pokemon')
    }

  return (
    <Dialog className={classes.root} open={true} onClose={handleClose}>
      {loading && <div>Loading...</div>}
      {pokemonDetails && (
        <div className={classes.dialog}>
          <DialogTitle className={classes.title}>{pokemonDetails.name}</DialogTitle>
          <img className={classes.image} src={pokemonDetails.image} />
          <div className={classes.infoTable}>
            <span className={classes.tableHeader}>Number :</span>
            <span>{pokemonDetails.number}</span>
            <span className={classes.tableHeader}>Type :</span>
            <span>{pokemonDetails.types.join(', ')}</span>
            <span className={classes.tableHeader}>Weaknesses :</span>
            <span>{pokemonDetails.weaknesses.join(', ')}</span>
            <span className={classes.tableHeader}>Resistant :</span>
            <span>{pokemonDetails.resistant.join(', ')}</span>
          </div>
        </div>
      )}
      {!loading && pokemonDetails === undefined && (
        <div>Error Loading Details</div>
      )}
    </Dialog>
  );
};

const useStyles = createUseStyles(
  {
    root: {},
    dialog: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: '32px',
    },
    title: {
        fontSize: '32px',
    },
    image: {
      width: '100%',
      margin: '32px',
      borderRadius: '4px'
    },
    infoTable: {
        display: 'grid',
        gridTemplateColumns: '1fr 3fr',
        gap: '5px'
    },
    tableHeader: {
        textAlign: 'right',
        fontWeight: '700'
    }
  },
  { name: 'PokemonDialog' }
);
