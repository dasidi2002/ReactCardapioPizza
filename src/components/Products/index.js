import React from 'react'
import {
  ProductsContainer,
  ProductsHeading,
  ProductWrapper,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductTitle,
  ProductDesc,
  ProductButtom
} from './ProductsElements'
import Fade from 'react-reveal/Fade';

const Products = ({heading,data}) => {
  return (
      <ProductsContainer>
        <ProductsHeading>{heading}</ProductsHeading>
         <ProductWrapper>
           {data.map((product, index) => {
             return(
               <ProductCard key={index}>
                  <ProductImg src={product.img} alt={product.alt} />
                  <ProductInfo>
                  <Fade left>
                    <ProductTitle>{product.name}</ProductTitle>
                    <ProductDesc>{product.desc}</ProductDesc>
                    <ProductButtom>{product.price}</ProductButtom>
                    </Fade>
                  </ProductInfo>
               </ProductCard>
             )
           })}
         </ProductWrapper>
      </ProductsContainer> 
  )
}

export default Products
