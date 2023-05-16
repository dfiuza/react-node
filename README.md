# React + Node Express

## Introdução

Esse repositório visa demonstrar uma forma fácil de 'integrar' uma aplicação frontend usando React.js com um back end (bem simples, sem banco de dados) usando node.js (com Express, Nodemon e Concurrently).

## Tecnologias

| Tecnologia   | Uso      | Download                                              | Documentação                                                            |
| ------------ | -------- | ----------------------------------------------------- | ----------------------------------------------------------------------- |
| React.js     | Frontend | [npm](https://www.npmjs.com/package/)                 | [reactjs.org](https://pt-br.reactjs.org/)                               |
| axios        |          | [npm](https://www.npmjs.com/package/)                 | [reactjs.org](https://axios-http.com/ptbr/)                               |
| node.js      | Backend  | [nodejs](https://nodejs.org/en/download/)             | [nodejs.org](https://nodejs.org/)                                       |
| Express.js   | Backend  | [npm](https://www.npmjs.com/package/express)          | [expressjs.com](https://expressjs.com/)                                 |
| Nodemon      | Terminal | [npm](https://www.npmjs.com/package/nodemon)          | [nodemon.io](https://nodemon.io/)                                       |
| Nodemon      | Terminal | [npm](https://www.npmjs.com/package/nodemon)          | [nodemon.io](https://nodemon.io/)                                       |
| Concurrently | Terminal | [npm](https://www.npmjs.com/package/concurrently)     | [concurrently @ github](https://github.com/kimmobrunfeldt/concurrently) |

## Passo a Passo

Aqui vamos, de ínicio tentei com as APIs fakes, https://randomuser.me/ & https://thecatapi.com/ porém ambas estavam instaveis e estavam caindo toda hora, deixei o código do randomuser dentro da pasta Usuario, prém não é ele que estou chamando, criei um json na mão no Node, para agilizar meu tempo,
o propósito é a mesma no caso, porém vindo os dados do json.
E outro detalhe, não foquei no layout, por que meu forte mesmo é o back end, por favor desconsiderem, se for o caso refaço um layout melhor.

### Passo 1 | Criando o Projeto

Após criarmos o diretório (pasta) do nosso projeto, executaremos o código `npm init` para criarmos um arquivo _package.json_, no qual salvaremos nossos _scripts_, dependências e outras informações acerca do projeto. 

**Iniciando nosso projeto**

```
npm init
```
Nesse caso basta preencher as informações solicitadas ou apertar 'Enter' para acatar as sugestões exibidas. No tópico entry point, podemos definir o nome server.js .

**Definindo parâmetros iniciais do nosso _package.json_**

Nesse caso basta preencher as informações solicitadas ou apertar 'Enter' para acatar as sugestões exibidas. 
O nome `server.js` . 

### Passo 2 | Instalando as Dependências

Vou deixar nossas dependências instaladas, no caso o Express e o Concurrently (e o Nodemon como uma dependência de desenvolvimento).

**Instalando dependências**

Vamos instalar tanto o Express quanto o Concurrently com um só comando:

```
npm i express concurrently
```

_Não se preocupe se perceber que seu repositório/projeto tem uma pasta a mais em relação ao repositório. Isso é por que a pasta `node_modules` está sendo ignorada, através do arquivo `.gitignore` (e assim deve ser, pois nela estão de fato as dependências do projeto - mas já deixamos o registro das mesmas no `package.json` , logo não precisamos incluí-las no repositório).

**Instalando dependências de desenvolvimento**

Agora instalaremos o _nodemon_, que nos poupa de derrubarmos e levantarmos o servidor a todo momento (pois ele fica 'olhando', 'observando' as atualizações do código e já dá um _refresh_ automaticamente no _server_). Para isso, basta rodar o seguinte código no terminal:

``` sh
npm i nodemon --save-dev
```

O trecho `--save-dev` é quem instrui que essa dependência seja salva em `devDependencies` no nosso _package.json_.

### Passo 3 | Definindo Scripts

``` json
"start": "node server.js",
"server": "nodemon server.js"
```


```
"client-install": "cd client && npm install"
```
