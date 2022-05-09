# Web Chat
![WebChat](https://i.ibb.co/t2cx8kG/webchat.png)
<br><br><br>
Aplicação de chat criada com Vue + Golang + Docker, utilizando conexão Websocket.

## Clonar Repositório
Inicialmente é necessário clonar o repositório principal do projeto
`git clone git@github.com:chrissgon/webchat.git`
A aplicação deve possuir a seguinte estrutura de arquivos
```
  webchat
  ├── app
  └── server
```

## Execução dos Ambientes
Para executar a aplicação use o comando `docker-compose up -d --build`
Em seguida acesse http://localhost:8080/ em duas janelas diferentes e converse entre ambas.
