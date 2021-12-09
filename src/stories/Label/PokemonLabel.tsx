import React from 'react';
import PropTypes from 'prop-types';
import { PokemonLabelStyles } from './pokemonlabel.styles';
import { FlattenSimpleInterpolation } from 'styled-components';

interface PokemonLabelInterface {
  backgroundColor: string
  color: string
  size: 'sm' | 'md' | 'lg'
  sx?: FlattenSimpleInterpolation
  text: string
}

export const PokemonLabel = ({ backgroundColor, color, size, text, sx, ...props }: PokemonLabelInterface) => {
  return (
    <PokemonLabelStyles
      backgroundColor={backgroundColor}
      color={color}
      size={size}
      sx={sx}
      {...props}
    >
      {text}
    </PokemonLabelStyles>
  );
};

PokemonLabel.propTypes = {
  sx: PropTypes.array,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  text: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  color: PropTypes.string
};

PokemonLabel.defaultProps = {
  size: 'md',
};
