import styled from 'styled-components'

//import styles from './Cabecalho.module.css'

const CabecalhoEdit = styled.header`
  background-color: #f9f5e7;
  color: #a7727d;
  text-align: center;
  padding: 24px 0;
`
function Header() {
  return (
    <>
      <CabecalhoEdit>EBAC Jobs</CabecalhoEdit>
    </>
  )
}

//const Cabecalho = () => (
//<header className={styles.cabecalho}>
//  <h1>EBAC Jobs</h1>
//</header>
//)

export default Header
