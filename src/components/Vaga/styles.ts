import styled from 'styled-components'

import corPadrao from '../../Cores/coresdapagina'

export const Lista = styled.li`
  border: 1px solid ${corPadrao.corPrincipal};
  background-color: ${corPadrao.corSecundaria};
  color: ${corPadrao.corPrincipal};
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 8px;

  :hover {
    background-color: ${corPadrao.corPrincipal};
    color: ${corPadrao.corSecundaria};
  }
`

export const VagaTitulo = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
`

export const VagaLink = styled.a`
  border-color: ${corPadrao.corSecundaria};
  background-color: ${corPadrao.corPrincipal};
  color: ${corPadrao.corSecundaria};
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;

  :hover {
    border-color: ${corPadrao.corPrincipal};
    background-color: ${corPadrao.corSecundaria};
    color: ${corPadrao.corPrincipal};
  }

  @media (max-width: 768px) {
    display: block;
  }
`
