
# 🎬 Movies Frontend App

Este é o frontend de uma aplicação de gerenciamento de filmes, construída com **React** e integrada a uma [API backend separada](https://github.com/diegoperpetuo/movies-crud). O sistema permite que usuários se cadastrem, façam login e gerenciem uma lista de filmes protegida por autenticação JWT.

## 🚀 Funcionalidades

- Cadastro de usuário
- Login com autenticação JWT
- Armazenamento seguro do token no `localStorage`
- Dashboard com CRUD de filmes:
  - Adicionar novo filme
  - Listar filmes
  - Remover filmes
- Logout com feedback visual
- Tratamento de erros e carregamento

## 🛠️ Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [React Router DOM](https://reactrouter.com/)
- [react-hot-toast](https://react-hot-toast.com/)
- CSS tradicional

## 📁 Estrutura de Pastas

```
src/
├── pages/
│   ├── Login.jsx
│   ├── Register.jsx
│   └── Dashboard.jsx
├── styles/
│   └── Dashboard.css
├── services/
│   └── api.js
├── App.jsx
└── main.jsx
```

## 🌐 Como rodar o projeto

### 1. Clone este repositório

```bash
git clone https://github.com/diegoperpetuo/movies-frontend.git
cd movies-frontend
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Rode o projeto localmente

```bash
npm run dev
```

### 4. Acesse no navegador

Abra o navegador e vá até:

```
http://localhost:5173
```

## ✅ Pré-requisitos

- Node.js v18+ recomendado
- Backend já rodando, em Codespace ou localmente (https://github.com/diegoperpetuo/movies-crud)
- Backend deve estar com CORS configurado para aceitar o domínio do frontend
- Configure a URL da API verificando os endpoints no código do backend caso necessário

## 🔐 Sobre autenticação

- O token JWT é armazenado no `localStorage`
- O dashboard só é acessível com um token válido
- O token é enviado no header `Authorization: Bearer <token>` em cada requisição protegida


## 📎 Demonstração

[Link para o vídeo de demonstração](https://drive.google.com/file/d/1z9_8h_SD9KfMuyEioLnO-ek9vwMGgDss/view?usp=sharing)
