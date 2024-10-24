import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function CharacterCard({ character }) {
  return (
    <Card>
      <CardMedia
        component="img"
        height="300"
        image={character.image}
        alt={character.name}
      />
      <CardContent>
        <Typography variant="h5">{character.name}</Typography>
        <Button
          variant="contained"
          sx={{ backgroundColor: '#beff33', color: '#000', '&:hover': { backgroundColor: '#76d62a' } }} // Estilos para el botón
          component={Link}
          to={`/characters/${character.id}`}
          style={{ marginTop: '20px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} // Estilo adicional
        >
          DETALLE
        </Button>


      </CardContent>
    </Card>
  );
}

export default CharacterCard;


