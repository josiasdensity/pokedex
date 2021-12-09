import React, { ChangeEvent } from 'react';
import PropTypes from 'prop-types';
import { HeaderStyles, SearchBarStyles, TextHeader } from './Header.styles';
import { FlattenSimpleInterpolation } from 'styled-components';

interface PokemonLabelInterface {
  size: 'sm' | 'md' | 'lg'
  sx?: FlattenSimpleInterpolation
  placeholder: string
  title: string
  onChange: Function
}

export const Header = ({ size, sx, placeholder, onChange, title, ...props }: PokemonLabelInterface) => {
  const handleChange = (evt:ChangeEvent<HTMLInputElement>) => {
    onChange(evt.target.value);
  };

  return (
    <HeaderStyles
      sx={sx}
      {...props}
    >
      <TextHeader>
        {title}
      </TextHeader>
      <SearchBarStyles 
        name='searchBar'
        type='text'
        placeholder={placeholder}
        sizeInput={size}
        onChange={handleChange}
      />
    </HeaderStyles>
  );
};

Header.propTypes = {
  sx: PropTypes.array,
  placeholder: PropTypes.string,
  title: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  onChange: PropTypes.func,
};

Header.defaultProps = {
  size: 'md',
  placeholder: 'Busca tu Pokemon',
  title: 'Pokedex'
};
