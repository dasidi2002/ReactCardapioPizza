import React, {useState} from 'react'
import Navbar from '../navbar'
import Sidebar from '../Sidebar'
import { HeroContainer,HeroContent,HeroItems,HeroH1, HeroP,HeroBtn} from './HeroElements'
import Fade from 'react-reveal/Fade';

const Hero = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

  return (
  <HeroContainer>
      <Navbar toggle={toggle}/>
      <Sidebar toggle={toggle} isOpen={isOpen}/>
   <HeroContent>
     <Fade top>
       <HeroItems>
           <HeroH1>A melhor pizza de São Paulo</HeroH1>
           <HeroP>Entrega em até 30 minutos</HeroP>
           <HeroBtn>Ligue Agora</HeroBtn>
       </HeroItems>
     </Fade>
   </HeroContent>
    </HeroContainer>
  )
}

export default Hero