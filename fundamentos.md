# React Fundamentos

## Criando um projeto React

- Vite como opção de ferramenta substituindo os bundlers/compiladores tradicionais.

```
 npm create vite@latest
 or
 yarn create vite
```

- Após executar o comando acima teremos as seguintes perguntas a serem respondidas:

  - Ok to proceed?: Y;
  - Project name: nome do nosso projeto;
  - Select a framework: react;
  - Select a variant: react (vanilla JS) ou react-ts (com TS);

- Fast Refresh do Vite:
  - Rápidas atualizações após mudanças no código. Sem necessidade de atualizar o browser.

## Componentes no React

- Uma função que retorna HTML.
- Sempre com extensão .jsx (HTML dentro do arquivo)
- Partes da interface da nossa aplicação que pode ser repetida com informações diferentes com próposito de reaproveitar o código já escrito.
- Importa-se de forma semelhante a uma tag HTML, porém sempre começamos a chamada do componente com letra maiúscula.
- Quando chamamos mais de um componente, ou até mesmo tags HTML, precisamos ter algo que englobará nossos elementos. Comumente, é usado uma div normal ou <></> (React Fragments).

## Propriedades no React

- Informações que podemos enviar aos componentes.
- "Equivalentes" aos atributos de uma tag HTML
- Dentro de nossos componentes chamamos as propriedades de props. 