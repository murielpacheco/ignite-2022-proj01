import { Container, Header, Author, AuthorInfo, Content } from "./styles"

export function Post() {
   return (
      <Container>
         <Header>
            <Author>
               <img src="https://avatars.githubusercontent.com/u/84552970?v=4" />
               <AuthorInfo>
                  <strong>Muriel Damazio</strong>
                  <span>Web Developer</span>
               </AuthorInfo>
            </Author>

            <time dateTime="2022-06-07" title="07 de junho de 2022">Publicado há 1h</time>
         </Header>
         <Content>
            <p>Fala galeraa 👋</p>

            <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

            <p><a href="#">👉 jane.design/doctorcare</a></p>

            <p>
               <a href="#">#novoprojeto</a>
               <a href="#">#nlw</a>
               <a href="#">#rocketseat</a>
            </p>
         </Content>
      </Container>
   )
}