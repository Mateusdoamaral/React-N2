# Como Executar a Aplicação React (Lift Hub) Após Clonar do GitHub

Este guia assume que o projeto React foi configurado utilizando Vite e gerencia suas dependências com npm ou Yarn.

## Pré-requisitos

Antes de começar, certifique-se de que você tem o seguinte instalado em seu sistema:

1.  **Node.js:** O Vite e o npm requerem Node.js. Você pode baixá-lo em [nodejs.org](https://nodejs.org/). A instalação do Node.js geralmente inclui o npm.
2.  **Git:** Necessário para clonar o repositório. Você pode baixá-lo em [git-scm.com](https://git-scm.com/).
3.  **(Opcional) Yarn:** Se o projeto utilizar Yarn em vez de npm, você precisará instalá-lo. Siga as instruções em [classic.yarnpkg.com](https://classic.yarnpkg.com/en/docs/install).

## Passos para Executar a Aplicação

1.  **Clone o Repositório:**
    Abra seu terminal ou prompt de comando e use o comando `git clone` seguido da URL do repositório.

    ```bash
    git clone <URL_DO_SEU_REPOSITORIO_NO_GITHUB>
    ```
    Substitua `<URL_DO_SEU_REPOSITORIO_NO_GITHUB>` pela URL real do seu projeto Lift Hub no GitHub.

2.  **Navegue até o Diretório do Projeto:**
    Após a clonagem ser concluída, entre na pasta do projeto.

    ```bash
    cd <NOME_DA_PASTA_DO_REPOSITORIO>
    ```
    O `<NOME_DA_PASTA_DO_REPOSITORIO>` geralmente é o nome do repositório (ex: `lift-hub-app`).

3.  **Instale as Dependências do Projeto:**
    Dentro do diretório do projeto, você precisa instalar todas as bibliotecas e pacotes que a aplicação utiliza. Eles estão listados no arquivo `package.json`.

    * Se você usa **npm**:
        ```bash
        npm install
        ```
    * Se você usa **Yarn**:
        ```bash
        yarn install
        ```
    Este comando lerá o arquivo `package-lock.json` (ou `yarn.lock`) e `package.json` para instalar as versões corretas das dependências.

4.  **Execute o Servidor de Desenvolvimento:**
    Após a instalação das dependências, você pode iniciar o servidor de desenvolvimento do Vite.

    * Se você usa **npm**:
        ```bash
        npm run dev
        ```
    * Se você usa **Yarn**:
        ```bash
        yarn dev
        ```
    Este comando geralmente inicia um servidor local (como `http://localhost:5173` ou similar) e observa as alterações nos arquivos para recarregar automaticamente a aplicação no navegador (Hot Module Replacement - HMR). Fique de olho no terminal, pois ele informará o endereço exato.

5.  **Acesse a Aplicação no Navegador:**
    Abra seu navegador de internet e vá para o endereço fornecido pelo terminal no passo anterior. Geralmente será algo como:

    `http://localhost:5173`

    Você deverá ver a aplicação Lift Hub rodando.

## Observações Adicionais

* **Scripts no `package.json`:** O comando para iniciar o servidor de desenvolvimento (`npm run dev` ou `yarn dev`) é definido na seção `"scripts"` do arquivo `package.json`. Se o projeto usar um comando diferente, ele estará especificado lá.
* **Variáveis de Ambiente:** Se o projeto utilizar variáveis de ambiente (arquivos `.env`), pode ser necessário criar um arquivo `.env.local` ou similar com as configurações específicas para o seu ambiente de desenvolvimento, seguindo as instruções do arquivo `.env.example` (se existir no repositório). Para o nosso projeto Lift Hub atual, não configuramos isso ainda.
* **Erros:** Se encontrar erros durante a instalação de dependências ou ao executar a aplicação, leia atentamente as mensagens no terminal. Elas geralmente fornecem pistas sobre o que pode estar errado (ex: versão incompatível do Node.js, dependências faltando, etc.).

Seguindo estes passos, você deverá conseguir executar o projeto Lift Hub em seu ambiente local após cloná-lo.



# -----------------------------------------------------------------------------------------


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
