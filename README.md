# BIOX Studio - Teste Técnico

Este projeto é um teste técnico para a empresa **BIOX Studio**. Trata-se de uma API de receitas desenvolvida com NestJS, seguindo princípios de Clean Architecture e boas práticas de desenvolvimento.

## Sumário
- [Requisitos](#requisitos)
- [Instalação](#instalação)
- [Como rodar a API](#como-rodar-a-api)
- [Testes](#testes)
- [Documentação automática (Swagger)](#documentacao-automatica-swagger)
- [Sobre o projeto](#sobre-o-projeto)

---

## Requisitos
- Node.js >= 18
- npm >= 9

## Instalação

> **Atenção:**
> Antes de rodar o projeto, crie um arquivo `.env` na raiz do projeto com base no arquivo `.env.example`.

```bash
npm install
```

## Como rodar a API

```bash
npm run start:dev
```
A API estará disponível em: [http://localhost:3001](http://localhost:3001)

> Você pode alterar a porta no arquivo `.env`.

## Testes

### Testes unitários e de integração
```bash
npm run test
```

### Testes end-to-end (e2e)
```bash
npm run test:e2e
```

## Documentação automática (Swagger)

Após rodar a API, acesse:

[http://localhost:3001/docs](http://localhost:3001/docs)

Lá você encontra a documentação interativa dos endpoints, podendo testar as rotas diretamente pelo navegador.

## Sobre o projeto
- Estrutura baseada em Clean Architecture
- Testes unitários, integração e e2e
- Validação de dados com class-validator
- Documentação automática com Swagger

---

Dúvidas ou sugestões? Entre em contato!
