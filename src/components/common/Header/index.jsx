import React from 'react';
import * as S from './styles'
import Search from './Search';

import logo from '../../../img/logoJussiVectorGreen.svg';

const Header = () => {


  return (
    <S.Header>
      <S.Wrapper>
        <S.WrapperLeft>
          <S.Logo>
            <img src={logo} alt=""/>
          </S.Logo>
          <S.Menu>
            <ul>
              <li>
                <a href="/" onClick={e => {
                  let NossasSolucoes = document.getElementById("Nossas-Solucoes");
                  e.preventDefault();
                  NossasSolucoes && NossasSolucoes.scrollIntoView({ behavior: "smooth", block: "start" });
                  window.history.pushState("Nossas-Solucoes", "Nossas-Solucoes", "/Nossas-Solucoes");
                }}>Nossas soluções</a>
              </li>
              <li>
                <a href="/" onClick={e => {
                  let QuemSomos = document.getElementById("Quem-somos");
                  e.preventDefault();
                  QuemSomos && QuemSomos.scrollIntoView({ behavior: "smooth", block: "start" });
                  window.history.pushState("Quem-somos", "Quem-somos", "/Quem-somos");
                }}>Conheça a Jussi</a>
              </li>
            </ul>
          </S.Menu>
        </S.WrapperLeft>
        <S.WrapperRight>
          <Search />
          <S.Login>
            <a href="/">Login</a>
          </S.Login>
          <S.Cart>
            <a href="/">
              <S.CartIcon />
            </a>
          </S.Cart>
        </S.WrapperRight>
      </S.Wrapper>
    </S.Header>
  )
}

export default Header
