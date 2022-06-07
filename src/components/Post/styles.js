import styled from "styled-components";

export const Container = styled.article`
   background-color: var(--gray-800);
   border-radius: 8px;
   padding: 2.5rem;

   & + {
      margin-top: 2rem;
   }


`;

export const Header = styled.header`
   display: flex;
   align-items: center;
   justify-content: space-between;

   time {
      font-size: 0.875rem;
      color: var(--gray-400);
   }
`;

export const Author = styled.div`
   display: flex;
   align-items: center;
   gap: 1rem;

   img {
      width: calc(3rem + 12px);
      height: calc(3rem + 12px);
      border-radius: 8px;
      border: 4px solid var(--gray-800);
      outline: 2px solid var(--green-500);
   }
`;

export const AuthorInfo = styled.div`
   strong {
      display: block;
      color: var(--gray-100);
      line-height: 1.6;
   }

   span {
      display: block;
      font-size: 0.875rem;
      color: var(--gray-400);
      line-height: 1.6;
   }

`;

export const Content = styled.div`
   color: var(--gray-300);
   line-height: 1.6;
   margin-top: 1.5rem;

   p {
      margin-top: 1rem;
   }

   a {
      font-weight: bold;
      color: var(--green-500);
      text-decoration: none;
      margin-right: 0.5rem;

      &:hover {
         color: var(--green-300);
      }
   }
`;