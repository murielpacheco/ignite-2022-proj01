import { Container, Title } from "./styles";

import igniteLogo from "../../assets/ignite-logo.svg"

export function Header() {
   return (
      <Container>
         <img src={igniteLogo} alt="Ignite Logo" />
         <Title>Ignite Feed </Title>
      </Container>
   )
}