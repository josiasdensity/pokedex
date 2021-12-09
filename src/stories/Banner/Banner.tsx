import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import { BannerStyles } from './Banner.styles';
import { FlattenSimpleInterpolation } from 'styled-components';

interface PokemonBannerInterface {
  size: 'sm' | 'md' | 'lg'
  sx?: FlattenSimpleInterpolation
  backgroundColor: string
  color: string
  title: string
  children: ReactNode
};

export const Banner = ({ size, sx, backgroundColor, color, title, children, ...props }: PokemonBannerInterface) => {

  return (
    <BannerStyles
      sx={sx}
      sizeInput={size}
      backgroundColor={backgroundColor}
      color={color}
      {...props}
    >
      <p>{title}</p>
        {children}
    </BannerStyles>
  );
};

Banner.propTypes = {
  sx: PropTypes.array,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
};

Banner.defaultProps = {
  size: 'md',
  title: 'Pokemon'
};
