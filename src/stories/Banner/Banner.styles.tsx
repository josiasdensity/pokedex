import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

interface bannerInterface {
  sx?: FlattenSimpleInterpolation
  sizeInput: 'sm' | 'md' | 'lg'
  backgroundColor: string
  color: string
}

const small = css`
  font-size: 18px;
  padding: 20px 20px;
  p {
    margin: 0 0 10px 0;
  }
`;

const medium = css`
  font-size: 24px;
  padding: 24px 22px;
  p {
    margin: 0 0 12px 0;
  }
`;

const large = css`
  font-size: 30px;
  padding: 28px 24px;
  p {
    margin: 0 0 14px 0;
  }
`;

export const BannerStyles = styled.div<bannerInterface>`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  height: 245px;
  position: relative;
  border-radius: 0px 0px 40px 40px;
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