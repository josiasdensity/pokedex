import React from 'react';
import PropTypes from 'prop-types';
import { PokemonImageStyles} from './PokemonImage.styles';
import { FlattenSimpleInterpolation } from 'styled-components';

interface PokemonImageInterface {
  size: 'sm' | 'md' | 'lg'
  sx?: FlattenSimpleInterpolation
  imgUrl: string
};

export const PokemonImage = ({ size, sx, imgUrl, ...props }: PokemonImageInterface) => {

  return (
    <PokemonImageStyles
      sx={sx}
      sizeInput={size}
      src={imgUrl}
      {...props}
    >
    </PokemonImageStyles>
  );
};

PokemonImage.propTypes = {
  sx: PropTypes.array,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  imgUrl: PropTypes.string
};

PokemonImage.defaultProps = {
  size: 'md',
};
