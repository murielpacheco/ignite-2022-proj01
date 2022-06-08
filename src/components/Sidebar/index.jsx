import {PencilLine} from "phosphor-react";
import Avatar from "../Avatar";

import { Container, Profile, Footer } from "./styles"

export function Sidebar() {
   return (
      <Container>
         <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40" />

         <Profile>
            <Avatar src="https://avatars.githubusercontent.com/u/84552970?v=4" />
            <strong>Muriel Damazio</strong>
            <span>Web Developer</span>
         </Profile>

         <Footer>
            <a href="#">
               <PencilLine size={20} />
               Editar seu perfil
            </a>
         </Footer>
      </Container>
   )
}