import React from 'react';
import * as S from './styles';
import imageFullbanner from '../../img/imageFullbanner.png';

const Fullbanner = () => {
  return (
   <S.Fullbanner>
     <S.Wrapper>
       <S.Text>
        <h1>Criamos lojas que vendem mais.</h1>
        <p>A Jüssi é especialista na criação de lojas usando a plataforma VTEX. Precisa criar sua loja ou migrar de plataforma?</p>
        <a href="/">Veja nossas soluções</a>
       </S.Text>
       <S.Image>
          <img src={imageFullbanner} alt=""/>
       </S.Image>
     </S.Wrapper>
   </S.Fullbanner>
  )
}

export default Fullbanner
