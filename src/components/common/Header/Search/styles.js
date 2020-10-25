import styled from 'styled-components';
import { Search } from 'styled-icons/boxicons-regular';

export const SearchWrapper = styled.div`
  width: 60%;
  form{
    position: relative;
    width: 100%;

    @media(max-width: 768px){
      width: 94%;
    }
  }
  input#search{
    border: 1px solid var(--color-grey);
    border-radius: 24px;
    padding: 10px;
    width: 100%;
    &::placeholder{
      color: var(--color-pink);
    }
  }

  button{
    position: absolute;
    right: 0;
    top: 7px;
    border: none;
    background: none;
    cursor: pointer;
  }

  @media (max-width: 768px){
    width: 100%;
  }
`

export const IconSearch = styled(Search)`
  width: 25px;
  height: 25px;
`