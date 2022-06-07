import styled from "styled-components";

export const Container = styled.div`
   width: 100%;
   padding: 1.25rem 0;
   background-color: var(--gray-800);
   
   display: flex;
   justify-content: center;
   gap: 1rem;

   img {
      height: 4rem;
   }
`;

export const Title = styled.strong`
   color: #E1E1E6;
   font-size: 26px;
   line-height: 41px;
`;