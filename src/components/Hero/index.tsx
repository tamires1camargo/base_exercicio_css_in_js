import { Container } from '../../containers/styles'
import { HeroForm, HeroTitle } from './styles'

export type Props = {
  children: string
  fontSize?: number
  h2: string
}

//import styles from './Hero.module.css'

const Hero = () => (
  <HeroForm>
    <Container>
      <HeroTitle h2="48px">
        As melhores vagas para tecnologia, design e artes visuais.
      </HeroTitle>
    </Container>
  </HeroForm>
)
export default Hero
