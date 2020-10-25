import React from "react";
import * as S from "./styles";

const Search = () => {
  return (
    <S.SearchWrapper>
      <form>
        <input type="search" name="search" id="search" placeholder="Buscar"/>
        <button type="submit">
          <S.IconSearch />
        </button>
      </form>
    </S.SearchWrapper>
  );
};

export default Search;
