import styled from 'styled-components';

export const Container = styled.div`
   margin-top: 1.5rem;
   display: flex;
   gap: 1rem;

   img {
      width: 3rem;
      height: 3rem;
      border-radius: 8px;
   }
`;

export const CommentBox = styled.div`
   flex: 1;
`;

export const Content = styled.div`
   background-color: var(--gray-700);
   border-radius: 8px;
   padding: 1rem;

   p {
      margin-top: 1rem;
      color: var(--gray-300);
   }
`;

export const ContentHeader = styled.header`
   display: flex;
   align-items: flex-start;
   justify-content: space-between;

   button {
      background: transparent;
      border: none;
      color: var(--gray-400);
      cursor: pointer;
      line-height: 0;
      border-radius: 2px;

      &:hover {
         color: var(--red-500);
      }
   }
`;

export const AuthorAndTime = styled.div`
   strong {
      display: block;
      font-size: 0.875rem;
      line-height: 1.6;
   }

   time {
      display: block;
      font-size: 0.75rem;
      line-height: 1.6;
      color: var(--gray-400);
   }
`;


export const Footer = styled.footer`
   margin-top: 1rem;
   position: relative;

   button {
      background: transparent;
      border: none;
      color: var(--gray-400);
      cursor: pointer;
      border-radius: 2px;

      display: flex;
      align-items: center;

      &:hover {
         color: var(--green-300);
      }

      svg {
         margin-right: 0.5rem;
      }

      span {
         margin-left: 0.5rem;
      }
   }
`;