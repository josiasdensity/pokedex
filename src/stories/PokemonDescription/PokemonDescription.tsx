import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import { PokemonDescriptionStyles } from './PokemonDescription.styles';
import { FlattenSimpleInterpolation } from 'styled-components';

interface descriptionPokemon {
  ability?: Array<string>
  weight?: number
  generation?: string
  height?: number
  moves?: Array<string>
};

interface PokemonDescriptionInterface {
  size: 'sm' | 'md' | 'lg'
  sx?: FlattenSimpleInterpolation
  backgroundColor: string
  color: string
  title: string
  children: ReactNode
  description: descriptionPokemon
};

export const PokemonDescription = ({ size, sx, backgroundColor, color, title, children, description, ...props }: PokemonDescriptionInterface) => {

  return (
    <PokemonDescriptionStyles
      sx={sx}
      sizeInput={size}
      backgroundColor={backgroundColor}
      color={color}
      {...props}
    >
      <h2>{title}</h2>
      <p>Ability: {description?.ability?.map((ability) => (`${ability}, `))}</p>
      <p>Weight: {description?.weight}</p>
      <p>Generation: {description?.generation}</p>
      <p>Height: {description?.height}</p>
      <p>Moves: {description?.moves?.map((move) => (`${move}, `))}</p>
    </PokemonDescriptionStyles>
  );
};

PokemonDescription.propTypes = {
  sx: PropTypes.array,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  description: PropTypes.object
};

PokemonDescription.defaultProps = {
  size: 'md',
  title: 'Description'
};
