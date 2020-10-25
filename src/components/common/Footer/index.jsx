import React from 'react';
import * as S from "./styles";

import wppcompanyLogo from '../../../img/wppcompany.png';

const Footer = () => {
  return (
    <S.Footer>
      <S.Wrapper>
        <S.LeftWrapper>
          <img src={wppcompanyLogo} alt="Logo wppcompany"/>
        </S.LeftWrapper>
        <S.RightWrapper>
          <a href="/">
            <S.FacebookIcon />
          </a>
          <a href="/">
            <S.InstagramIcon />
          </a>
          <a href="/">
            <S.LinkdinIcon />
          </a>
        </S.RightWrapper>
      </S.Wrapper>
    </S.Footer>
  )
}

export default Footer
