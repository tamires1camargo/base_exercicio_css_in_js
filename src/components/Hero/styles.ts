import styled from 'styled-components'

import { Props } from '.'

export const HeroTitle = styled.h2<Props>`
  font-family: Gloock, serif;
  font-size: 48px;
`
export const HeroForm = styled.form<Props>`
  form {
    height: 360px;
    width: 100%;
    background-image: url('https://cdn.pixabay.com/photo/2018/08/10/15/45/woman-3597101_1280.jpg');
    background-size: cover;
    position: relative;
    display: flex;
    align-items: center;
    position: relative;
    color: #eee;
  }

  :before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--cor-principal);
    content: '';
    opacity: 0.7;
  }
`
