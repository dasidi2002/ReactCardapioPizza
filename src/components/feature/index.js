import React from 'react'
import {FeatureContainer,FeatureButtom} from './FeatureElements'
import Fade from 'react-reveal/Fade';

const Feature = () => {
   return(
  <FeatureContainer>
      <h1>Pizza do dia QUATRO QUEIJOS</h1>
      <p>Mussarela, provolone, parmesão, requeijão, molho ao sugo e oregano</p>
      <Fade>
      <FeatureButtom>R$ 37.50</FeatureButtom>
      </Fade>
  </FeatureContainer>
  )
}

export default Feature