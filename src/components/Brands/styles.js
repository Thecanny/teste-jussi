import styled from 'styled-components'

export const Brands = styled.section`
  background-color: var(--color-grey) ;
`

export const Wrapper = styled.div`
  max-width: 1440px;
  max-height: 560px;


  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;

  padding: 20px 60px;
  margin: 0 auto;

  @media (max-width: 768px){
    padding: 10px 20px;
  }

`
export const Left = styled.div`
  width:25%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; 

  @media (max-width: 768px){
    width: 100%;
    justify-content: center;
    span{
      display: none;
    }

  }
`
export const Right = styled.div`
  width: 60%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; 

  @media (max-width: 768px){
    width: 100%;
  }
`
export const BrandLogo = styled.div`
  
  &:nth-child(2),
  &:nth-child(1){
    padding-top: 10px;
  }

  img{
    width: 100%;

  }

  @media (max-width: 768px){
    margin: 10px 0;
    width: 45%;
  }

`