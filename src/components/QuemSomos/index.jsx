import React from "react";
import * as S from "./styles";

import JussiImage from "../../img/image-jussi.png";

const QuemSomos = () => {
  return (
    <S.QuemSomos id="Quem-somos">
      <S.Wrapper>
        <S.TextWrapper>
          <h2>Olá, somos A Jüssi</h2>
          <p>
            A Jüssi é uma agência integrante do grupo global WPP que vem há 10
            anos consolidando o pensamento voltado para produtos e resolução de
            problemas. Nosso área dedicada exclusivamente para Produtos Digitais
            é organizada em 6 especialidades: Product Managamenet, User
            Experience Design, SEO, Tecnologia, Agile e User Behavior Analytics.
          </p>
          <a href="/"> Conheça a Jüssi </a>
        </S.TextWrapper>
        <S.ImageWrapper>
          <S.Image>
            <img src={JussiImage} alt="" />
          </S.Image>
        </S.ImageWrapper>
      </S.Wrapper>
    </S.QuemSomos>
  );
};

export default QuemSomos;
