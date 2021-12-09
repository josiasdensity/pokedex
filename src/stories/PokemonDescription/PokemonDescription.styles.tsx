import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

interface pokemonDescriptionInterface {
  sx?: FlattenSimpleInterpolation
  sizeInput: 'sm' | 'md' | 'lg'
  backgroundColor: string
  color: string
}

const small = css`
  font-size: 18px;
  padding: 20px 20px;
  h2 {
    font-size: 18px;
  }
  p {
    font-size: 13px;
    margin: 0 0 10px 0;
  }
`;

const medium = css`
  font-size: 24px;
  padding: 24px 22px;
  h2 {
    font-size: 20px;
  }
  p {
    font-size: 14px;
    margin: 0 0 12px 0;
  }
`;

const large = css`
  padding: 28px 24px;
  h2 {
    font-size: 24px;
  }
  p {
    font-size: 16px;
    margin: 0 0 14px 0;
  }
`;

export const PokemonDescriptionStyles = styled.div<pokemonDescriptionInterface>`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  ${props => props.sx}
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
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};
`;