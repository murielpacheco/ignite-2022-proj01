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

export const Form = styled.form`
   width: 100%;
   margin-top: 1.5rem;
   padding-top: 1.5rem;
   border-top: 1px solid var(--gray-600);

   strong {
      color: var(--gray-100);
      line-height: 1.6;
   }

   textarea {
      width: 100%;
      height: 6rem;
      background-color: var(--gray-900);
      border: none;
      resize: none;
      margin-top: 1rem;
      padding: 1rem;
      border-radius: 8px;
      color: var(--gray-100);
      line-height: 1.4;
   }

   footer {
      visibility: hidden;
      max-height: 0;
   }

   &:focus-within footer {
      visibility: visible;
      max-height: none;
   }


   button {
      padding: 1rem 1.5rem;
      margin-top: 1rem;
      border-radius: 8px;
      border: none;
      background-color: var(--green-500);
      color: var(white);
      font-weight: bold;
      cursor: pointer;

      transition: background-color 0.2s;


      &:hover {
         background-color: var(--green-300);
      }
   }
`;