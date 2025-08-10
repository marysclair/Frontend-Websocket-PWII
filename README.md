# Frontend Websocket

## Frontend do projeto desenvolvido para a disciplina de PWII 2025.2

Grupo:

- [Gabriella](https://github.com/gabs44)
- [Maria Clara](https://github.com/marysclair)
- [Maurício](https://github.com/maueici0)

## Descrição do projeto

Este projeto apresenta um exemplo simples e prático de como utilizar o conceito de WebSocket. Neste repositório, você encontra o frontend da aplicação, que consome a API desenvolvida [nesse repositório](https://github.com/marysclair/Backend-Websocket-PWII.git).

Na aplicação, o usuário comum pode criar pedidos e atualizar o endereço de cada pedido. Já o usuário administrador, que tem acesso à lista completa de pedidos de todos os usuários cadastrados, pode visualizar em tempo real as alterações de endereço, recebidas via WebSocket.

O usuário comum acessa a página inicial ("/"), onde pode visualizar seus pedidos, criar novos e atualizar os endereços. O usuário administrador, por sua vez, acessa a página "/admin", com acesso a todos os pedidos cadastrados.

Para alterar o usuário em uso durante as requisições do contexto, basta modificar o campo username no cabeçalho (headers) da requisição para o usuário desejado. Considerando que o objetivo principal é demonstrar o uso do WebSocket, o fluxo de autenticação não foi implementado de forma robusta.

Apesar da simplicidade da implementação, este projeto demonstra como o WebSocket pode ser aplicado em sistemas reais que exigem atualizações em tempo real.

## Executando o projeto

Para executar o frontend desse projeto (este repositório), execute os seguintes passos:

1. Clone esse repositório em um diretório na sua máquina

```
git clone https://github.com/marysclair/Frontend-Websocket-PWII.git
```

2. Execute os seguintes comandos no terminal para baixar as dependências e executar a API em modo de desenvolvimento

```
npm install
npm run dev
```
