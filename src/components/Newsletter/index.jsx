import React from 'react';
import * as S from "./styles";

const Newsletter = () => {
  return (
    <S.Newsletter>
    <S.Wrapper>
      <S.Text>
        <h2>
        receba novidades da nossa área de produtos digitais.
        </h2>

        <form action="">
          <input type="email" name="email" id="email" placeholder="Digite seu e-mail"/>
          <button type="submit">CADASTRAR</button>
        </form>
      </S.Text>
    </S.Wrapper>
  </S.Newsletter>
  )
}

export default Newsletter
