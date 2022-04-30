import styled from "styled-components";

export const ProductsContainer = styled.div `

    width: 100vw;
    padding: 5rem calc((100vw-1300px)/2);
    background: rgba(7, 8, 2, 0.83);
    color: #fff;

`

export const ProductWrapper = styled.div`

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
`

export const ProductCard = styled.div`

    margin: 0 2rem;
    line-height: 2;
    width: 300px;
`

export const ProductImg = styled.img`

    height: 250px;
    min-width: 300px;
    max-width: 100%;
    box-shadow: 8px 8px #fdc500;
`

export const ProductsHeading = styled.h1`

    font-size: clamp(2.5vw, 3rem);
    text-align: center;
    margin-bottom: 5rem;
    border: none;
    background: #ffc500;
    color: rgba(0, 0, 0, 0.83);
    
`

export const ProductTitle= styled.h2`

font-weight: 700;
    font-size: 1.3rem;
    color: #fff;
`

export const ProductInfo= styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    text-align: center;
`

export const ProductDesc = styled.p`

    margin-bottom: 1rem;
`


export const ProductButtom = styled.button`

    font-size: 1rem;
    padding: 1rem 4rem;
    border: none;
    background: #e31837;
    color: #fff;
    transition: 0.2s ease-out;
    font-weight:  700;
    &:hover {
        background: #ffc500;
        transition: 0.2s ease-out;
        cursor: pointer;
        color: #000;
    }

`

    