import styled from 'styled-components'

import corPadrao from '../../Cores/coresdapagina'

export const Formulario = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: ${corPadrao.corSecundaria};
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`

export const InputPesquisar = styled.input`
  padding: 0 16px;
  outline-color: ${corPadrao.corPrincipal};
`

export const BotaoPesquisar = styled.button`
  background-color: ${corPadrao.corPrincipal};
  border: 1px solid ${corPadrao.corPrincipal};
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: ${corPadrao.corSecundaria};
  margin-left: 8px;
  cursor: pointer;
`
