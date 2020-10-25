import styled from "styled-components";

export const Newsletter = styled.section`
  background-color: var(--color-black);
`;
export const Wrapper = styled.div`
  max-width: 1440px;
  margin: auto;
  padding: 120px;
  text-align: center;
  color: var(--color-white);

  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;
export const Text = styled.div`
  width: 65%;
  margin: 0 auto;
  h2 {
    text-transform: uppercase;
    margin: 20px 0 40px;
    font-size: 32px;
    padding: 0 40px;

    &::before {
      content: "//";
      color: var(--color-green);
      margin-right: 15px;
    }
  }

  h3 {
    font-size: 32px;
    font-weight: normal;
  }
  form {
    position: relative;
    width: 55%;
    margin: 0 auto;
  }
  input {
    background: none;
    border: none;
    border-bottom: 1px solid var(--color-green);
    padding: 10px;
    width: 100%;
    color: var(--color-white);
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: var(--color-white);
    }

  }

  button {
    background: none;
    border: none;
    color: var(--color-green);
    position: absolute;
    right: 0;
  }
  @media (max-width: 768px){
      width: 100%;
      h2{
        font-size: 25px;
        padding: 0 18px;
      }
      form{
        width: 100%;
      }
    }
`;
