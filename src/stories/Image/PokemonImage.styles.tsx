import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

interface pokemonImageStylesInterface {
  sx?: FlattenSimpleInterpolation
  sizeInput: 'sm' | 'md' | 'lg'
};

const small = css`
  font-size: 12px;
  height: 100px;
  width: 100px;
`;

const medium = css`
  font-size: 14px;
  height: 120px;
  width: 120px;
`;

const large = css`
  font-size: 16px;
  height: 150px;
  width: 150px;
`;

export const PokemonImageStyles = styled.img<pokemonImageStylesInterface>`
  ${props => {
    switch(props.sizeInput){
      case 'sm':
        return small;
      case 'md':
        return medium;
      case 'lg':
        return large;
      default:
        return medium;
    }
  }}
  ${props => props.sx}
`;