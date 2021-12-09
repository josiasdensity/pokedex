import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

interface propsInterface {
  size: 'sm' | 'md' | 'lg'
  backgroundColor: string
  sx?: FlattenSimpleInterpolation
  color: string
};

const pokemonLabelBase = css`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  line-height: 1;
`;

const small = css`
  font-size: 10px;
  padding: 6px 16px;
`;

const medium = css`
  font-size: 12px;
  padding: 8px 18px;
`;

const large = css`
  font-size: 14px;
  padding: 10px 22px;
`;

export const PokemonLabelStyles = styled.div<propsInterface>`
  ${pokemonLabelBase};
  ${props => {
    switch(props.size){
      case 'sm':
        return small;
      case 'md':
        return medium;
      case 'lg':
        return large;
      default:
        return medium;
    }
  }};
  ${props => props.sx}
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};
`;