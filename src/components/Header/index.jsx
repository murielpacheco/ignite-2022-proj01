import { Container, Title } from "./styles";

import logo from "../../assets/logo.svg"

export function Header() {
   return (
      <Container>
         <img src={logo} alt="Ignite Logo" />
         <Title>Ignite Feed </Title>
      </Container>
   )
}