# Testes E2E - EBAC Shop

## Sobre o projeto
Projeto de testes automatizados E2E da aplicação EBAC Shop, utilizando Cypress e JavaScript.

## Tecnologias ultilizadas

- Cypress
- JavaScript
- Faker
- Node.js

## Estrutura do projeto
- cypress/
- e2e/
- factories/
- pages/

## Como rodar o projeto
1. Clonar o repositório
2. Instalar dependências 
   npm install
3. Executar os testes
   npx cupress open
   ou
   npc cypress rum

## O que é testado
- Cadastro de usuário
- Login (Positivo e negativo)
- Pré-cadastro
- Endereço de faturamento
- Endereço de entrega
- logout

## Observações
- Dados gerados dinamicamente com Faker
- Page Object Pattern aplicado
- Testes independentes



