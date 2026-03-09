# Adega Underground – Frontend

Este projeto é uma aplicação frontend simples para gerenciamento de produtos de uma adega.
Ele permite que um usuário faça login e gerencie um estoque de produtos através de uma interface web.

O sistema consome uma API simulada utilizando **json-server**.

## Funcionalidades

* Login de usuário
* Validação de email e senha
* Listagem de produtos
* Busca de produtos por nome
* Adição de novos produtos
* Edição de produtos
* Exclusão de produtos

## Tecnologias utilizadas

* HTML
* CSS
* JavaScript (ES Modules)
* Fetch API
* LocalStorage
* json-server (API simulada)

## Estrutura do projeto

```
frontend
│
├── login.html
├── login.css
│
├── estoque.html
├── estoque.css
│
├── utils.js
│
└── README.md
```

## Como executar o projeto

### 1. Clonar o repositório

```
git clone <url-do-repositorio>
```

### 2. Instalar o json-server

```
npm install -g json-server
```

### 3. Rodar a API simulada

Na pasta onde está o arquivo **db.json** execute:

```
json-server --watch db.json --port 8080
```

A API ficará disponível em:

```
http://localhost:8080
```

### 4. Abrir o projeto

Abra o arquivo **login.html** no navegador.

## Fluxo do sistema

1. O usuário realiza login.
2. As credenciais são verificadas na API (`/acessos`).
3. Após login bem sucedido, o usuário é redirecionado para a tela de **estoque**.
4. Na tela de estoque é possível:

   * visualizar produtos
   * buscar por nome
   * adicionar produtos
   * editar informações
   * excluir produtos

## Observação

Este projeto está sendo desenvolvido para um cliente e tem conceitos de:

* JavaScript assíncrono
* Consumo de API
* Manipulação do DOM
* Estrutura básica de aplicações web
