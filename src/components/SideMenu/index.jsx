import {
  CheckCircle,
  House,
  Folder,
  PlusSquare,
  Note,
  SignOut,
  X,
} from "@phosphor-icons/react"

import { Container, Footer, Nav, Title, Header, Button } from "./styles"

export function SideMenu({ menuIsOpen, onCloseMenu }) {
  return (
    <Container data-menu-is-open={menuIsOpen}>
      <Header>
        <Title>
          <CheckCircle /> e-Tasks
        </Title>

        {menuIsOpen && (
          <Button onClick={onCloseMenu}>
            <X />
          </Button>
        )}
      </Header>

      <Nav>
        <a href="#">
          <House /> Home
        </a>
        <a href="#">
          <PlusSquare /> Nova tarefa
        </a>
        <a href="#">
          <Folder /> Projetos
        </a>
        <a href="#">
          <Note /> Relatórios
        </a>
      </Nav>

      <Footer>
        <img src="https://github.com/jp-xaxa.png" alt="Foto do usuário" />
        <div>
          <strong>João Pedr</strong>
          <small>joaopedro@email.com</small>
        </div>

        <Button type="button">
          <SignOut />
        </Button>
      </Footer>
    </Container>
  )
}
