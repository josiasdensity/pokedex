import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

interface cardInterface {
  sx?: FlattenSimpleInterpolation
  sizeInput: 'sm' | 'md' | 'lg'
  backgroundColor: string
  color: string
}

const small = css`
  font-size: 14px;
  padding: 12px 16px;
  width: 150px;
  p {
    margin: 0 0 12px 0;
  }
`;

const medium = css`
  font-size: 16px;
  padding: 14px 18px;
  width: 215px;
  p {
    margin: 0 0 14px 0;
  }
`;

const large = css`
  font-size: 18px;
  padding: 16px 20px;
  width: 250px;
  p {
    margin: 0 0 16px 0;
  }
`;

export const CardStyles = styled.div<cardInterface>`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border-radius: 5px;
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

export const BodyCard = styled.div`
  display: flex;
  justify-content: space-between;
`;