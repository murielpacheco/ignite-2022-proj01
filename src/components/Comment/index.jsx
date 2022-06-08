import { ThumbsUp, Trash } from "phosphor-react";
import { Container, CommentBox, Content, Footer, ContentHeader, AuthorAndTime } from "./styles";

export default function Comment() {
   return (
      <Container>
         <img src="https://github.com/murielpacheco.png" />
         <CommentBox>
            <Content>
               <ContentHeader>
                  <AuthorAndTime>
                     <strong>João Paulo</strong>
                     <time dateTime="2022-06-07" title="07 de junho de 2022">Há 1h</time>
                  </AuthorAndTime>
                  <button title="Deletar comentário">
                     <Trash size={24} />
                  </button>
               </ContentHeader>
               <p>Muito bom Devon, Parabéns!</p>
            </Content>
            <Footer>
               <button>
                  <ThumbsUp />
                  Aplaudir<span>- 20</span>
               </button>
            </Footer>
         </CommentBox>
     </Container>
  )
}
