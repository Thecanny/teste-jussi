import styled from 'styled-components'

export const Fullbanner = styled.div`
  width: 100%;
  background-color: var(--color-green);
`
export const Wrapper = styled.div`
  max-width: 1440px;
  max-height: 560px;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 20px;
  margin: 0 auto;
`
export const Text = styled.div`
  width: 40%;
  padding: 20px;

  h1{
    font-weight: 500;
    font-size: 64px;
    line-height: 77px;
    text-transform: uppercase;

    margin: 10px 0;

    position: relative;

    &::before{
      content: '//';
      position: absolute;
      left: -75px;
      color: var(--color-white);
    }
  }
  p{
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    margin: 10px 0;
    padding: 0 108px 0 0;
  }
  a{
    text-decoration: none;
    color: var(--color-black);
    display: block;
    border: 1px solid;
    border-radius: 6px;

    width: 196px;
    height: 48px; 
    margin:30px 0;
    padding: 12px 0px 0px 24px;
  }

  @media (max-width: 768px){
    width: 100%;
    padding: 0;
    h1{
      font-size: 45px;
    }

  }


`
export const Image = styled.div`
  width: 35%;

  @media (max-width: 768px){
    display: none;
  }

  img{
    width: 100%;
  }
`
