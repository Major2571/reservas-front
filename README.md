
# Projeto Angular - Consumo da API REST de Reservas

Este projeto é uma aplicação Angular que consome a API REST de Reservas para gerenciar e exibir informações sobre reservas de hospedagem.

## Tecnologias Utilizadas

-   Angular
-   TypeScript
-   HTML
-   CSS

## Instalação e Execução

1.  Clone o repositório para o seu ambiente local.
```bash
	https://github.com/Major2571/reservas-front/
```
2.  Certifique-se de que você tenha o Node.js e o Angular CLI instalados em sua máquina.
3.  No terminal, navegue até a pasta do projeto e execute o comando `npm install` para instalar as dependências.
4.  Execute o projeto usando o comando `ng serve` e acesse a aplicação no navegador em `http://localhost:4200`.
5. Obs: o servidor da API também deve estar em execução ( você pode encontrar o Backend do projeto [aqui](https://github.com/Major2571/reservas.git))

## Funcionalidades

A aplicação oferece as seguintes funcionalidades:

-   Listagem de todas as reservas cadastradas
-   Exibição de detalhes de uma reserva específica
-   Criação de novas reservas
-   Edição de informações de uma reserva
-   Cancelamento de reservas (atualização do status para "CANCELADO")

## Capturas de tela
### Página Inicial: 
Onde podemos fazer uma nova reserva, visualizar, ou, editar. Note que, Reservas canceladas não podem ser alteradas.
![image](https://github.com/Major2571/reservas-front/assets/99849455/70dcca4e-0bb5-4bf3-a322-5b7f857dfbcf)


### Formulário de edição:
Ao clicar em editar, o formulário de edição estará disponível para você realizar a alteração, ou, cancelar a reserva.
![image](https://github.com/Major2571/reservas-front/assets/99849455/c22a65ed-9340-4e0f-9d34-8525f8fc6cc3)

