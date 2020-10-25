import styled, {css} from 'styled-components';
import { Facebook, Instagram, Linkedin } from 'styled-icons/boxicons-logos';

export const Footer = styled.footer`
  background: var(--color-black);
`;

export const Wrapper = styled.div`
  max-width: 1440px;
  margin: auto;
  padding: 20px 60px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const LeftWrapper = styled.div`
  width: 30%;
  @media (max-width: 768px){
    width: 100%;
    text-align: center;
    margin-bottom: 10px;
  }
`
export const RightWrapper = styled.div`
  width: 10%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px){
    width: 100%;
  }
`

const iconsCSS = css`
  width:31px;
  height:31px;
  color: var(--color-white);
`;

export const FacebookIcon = styled(Facebook)`
  ${iconsCSS}
`
export const InstagramIcon = styled(Instagram)`
  ${iconsCSS}  
`
export const LinkdinIcon = styled(Linkedin)`
  ${iconsCSS}
`