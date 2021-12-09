import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import { CardStyles, BodyCard} from './Card.styles';
import { FlattenSimpleInterpolation } from 'styled-components';

interface PokemonCardInterface {
  size: 'sm' | 'md' | 'lg'
  sx?: FlattenSimpleInterpolation
  backgroundColor: string
  color: string
  title: string
  children: ReactNode
};

export const Card = ({ size, sx, backgroundColor, color, title, children, ...props }: PokemonCardInterface) => {

  return (
    <CardStyles
      sx={sx}
      sizeInput={size}
      backgroundColor={backgroundColor}
      color={color}
      {...props}
    >
      <p>{title}</p>
      <BodyCard>
        {children}
      </BodyCard>
    </CardStyles>
  );
};

Card.propTypes = {
  sx: PropTypes.array,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
};

Card.defaultProps = {
  size: 'md',
  title: 'Pokemon'
};
