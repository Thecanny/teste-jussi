import React from 'react';
import * as S from './styles';

import Brastemp from '../../img/brands/logo-brastemp.png'
import CompraCerta from '../../img/brands/logo-compra-certa.png'
import Consul from '../../img/brands/logo-consul.png'
import Thebar from '../../img/brands/logo-thebar.png'

const Brands = () => {
  return (
    <S.Brands>
      <S.Wrapper>
        <S.Left>
          <h4>Nossas principais lojas VTEX</h4>
          <span>→</span>
        </S.Left>
        <S.Right>
          <S.BrandLogo>
            <img src={Brastemp} alt="Logo Brastemp"/> 
          </S.BrandLogo>
          <S.BrandLogo>
            <img src={CompraCerta} alt="Logo Compra certa"/>
          </S.BrandLogo>
          <S.BrandLogo>
            <img src={Consul} alt="Logo Consul"/>
          </S.BrandLogo>
          <S.BrandLogo>
            <img src={Thebar} alt="Logo Thebar"/> 
          </S.BrandLogo>
        </S.Right>
      </S.Wrapper>
    </S.Brands>
  )
}

export default Brands
