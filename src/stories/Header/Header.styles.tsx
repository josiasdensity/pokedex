import styled, { css, FlattenSimpleInterpolation, StyledFunction } from 'styled-components';

interface headerInterface {
  sx?: FlattenSimpleInterpolation
};

interface searchBarInterface {
  sizeInput: 'sm' | 'md' | 'lg'
};

const small = css`
  font-size: 12px;
  padding: 10px 16px;
  width: 150px;
`;

const medium = css`
  font-size: 14px;
  padding: 11px 20px;
  width: 250px;
`;

const large = css`
  font-size: 16px;
  padding: 12px 24px;
  width: 500px;
`;

export const HeaderStyles = styled.div<headerInterface>`
  width: 100%;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  ${props => props.sx}
`;

const inputStyle: StyledFunction<searchBarInterface | any> = styled.input;

export const SearchBarStyles = inputStyle`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  border: 1px solid;  
  border-radius: 24px;

  &:focus {
    outline: none
  }

  &:focus-visible{
    outline: none
  }

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
`;

export const TextHeader = styled.h2`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  margin: 0 20px; 
`;