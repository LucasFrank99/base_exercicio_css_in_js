import styled from 'styled-components'

const Header = styled.h1`
  background-color: var(--cor-secundaria);
  color: var(--cor-principal);
  text-align: center;
  padding: 24px 0;
`

type Header = string

function Cabecalho() {
  return (
    <Header>
      <h1>EBAC Jobs</h1>
    </Header>
  )
}

export default Cabecalho
