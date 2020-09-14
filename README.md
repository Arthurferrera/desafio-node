# desafio-node

## :bookmark: Sobre
Uma API simples utilizando middleware local e global, desenvolvida para relembrar alguns conceitos do NodeJS

## :rocket: Tecnologia Utilizada

Durante o desenvolvimento desse projeto foi utilizado o NodeJs

## :question: Como usar
- #### Para conseguir rodar a aplicação é necessário alguns **pré-requisitos:**

  - É **necessário** possuir o **Node.js** instalado na máquina
  - Também, é **preciso** ter um gerenciador de pacotes seja o **NPM** ou **Yarn**.

1. Faça um clone :

```sh
  $ git clone https://github.com/Arthurferrera/desafio-node.git
```

2. Para executar a Aplicação execute os seguintes comandos:

```sh
  # Primeiro instale as dependências
  $ yarn add nodemon -D

  # Inicie a API
  $ yarn dev ou npm run dev
```

3. Para testar as requisições será necessário utilizar [Postman](https://www.postman.com/) ou [Insominia](https://insomnia.rest/download/)
```sh
  # Segue exemplos de requisições
  
  # GET - Lista todos os projetos
    http://localhost:3000/projects
  # GET - Retorna o projeto que contém o ID 1
    http://localhost:3000/projects/1
  # DELETE - Deleta o projeto que contém o ID 1
    http://localhost:3000/projects/1
```

<h5 align="center">
    Developed by <a href="https://www.linkedin.com/in/arthurferreira99/" target="_blank">Arthur Ferreira</a>
</h5>
