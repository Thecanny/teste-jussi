import React, {useState, useEffect} from "react";
import * as S from "./styles";

import data from "../../data/nossasSolucoes";

const NossasSolucoes = () => {

  const [solucoes, setSolucoes] = useState([]);

  useEffect(()=>{
    setSolucoes(data)
  }, [])

  return (
    <S.NossasSolucoes id="Nossas-Solucoes">
      <S.Wrapper>
        <S.Title>
          Nossas soluções
        </S.Title>
        <S.Content>
        {solucoes.map((solucao) => (
          <S.SolucaoWrapper key={solucao.id}>
            <S.ID> {solucao.id} </S.ID>
            <h4>{solucao.title}</h4>
            <p>{solucao.description}</p>
            <ul>
              <li>{solucao.list.li01}</li>
              <li>{solucao.list.li02}</li>
              <li>{solucao.list.li03}</li>
            </ul>
            <a href="/">Ver solução</a>
          </S.SolucaoWrapper>
        ))}
        </S.Content>
      </S.Wrapper>
    </S.NossasSolucoes>
  );
};

export default NossasSolucoes;
