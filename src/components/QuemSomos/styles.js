import styled from 'styled-components';

export const QuemSomos = styled.section`
   
    background: rgb(242,242,242);
    background: linear-gradient(270deg, rgba(242,242,242,1) 50%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 100%);
`
export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1440px;
  margin: 0 auto;

 
`

export const TextWrapper = styled.div`
  width: 45%;
  padding: 50px 120px;
  background-color: var(--color-white);
  h2{
    font-weight: bold;
    font-size: 32px;
    text-transform: uppercase;
    width: 45%;
    margin: 0 0 20px;
  }

  p{
    max-width: 240px;
    line-height:24px;
  }

  a{
    text-decoration: none;
    color: var(--color-black);
    display: block;
    border: 1px solid;
    border-radius: 6px;
    text-align: center;
      
    width: 162px;
    height: 48px; 
    margin:30px 0;
    padding-top: 15px;
  }

  @media (max-width: 768px){
    width: 100%; 
    padding: 50px 20px;

    h2{
      width: 100%;
      max-width: 100%;
    }

    p{
      width: 100%;
      max-width: 100%;
    }
  }

`
export const ImageWrapper = styled.div`
  width: 55%;

  @media (max-width: 768px){
    width: 100%; 
    background: var(--color-grey);
  }
 
`

export const Image = styled.div`
  width: 100%;
  max-width: 676px;
  height: auto;
  margin: 40px 0;
  margin-left: -70px;
  img{
    width: 100%;
  }

  @media (max-width: 768px){
    margin-left: 0;
  }
`