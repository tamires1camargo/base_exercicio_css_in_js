import { FormContainer, Formulario, HeroTitle } from './styles'

//import styles from './Hero.module.css'

export type Props = {
  children: string
  fontSize?: number
  h2: string
}

const Hero = () => (
  <Formulario>
    <FormContainer>
      <HeroTitle>
        As melhores vagas para tecnologia, design e artes visuais.
      </HeroTitle>
    </FormContainer>
  </Formulario>
)

export default Hero
