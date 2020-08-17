# Backend Simples de cadastro simplificado de carros
Baixe o Insomnia: 
<a href="https://insomnia.rest/" target="_blank">Insomnia</a> 

Para instalar :

1. Faça um clone do repositorio na sua maquina
2. Utilizando gerenciador de pacotes `npm install` ou `yarn`
3. Crie um container postgres
4. Edite a configuraçao do banco de dados em  `ormconfig.json` 
5. Depois `yarn dev:server` ou `npm run dev:server` 

Lista das Rotas: 

1. Criar Carro
http://localhost:3000/user/create
```json
{
	"name" : "kelvin diego da silva soares",
	"password" : "minhasenha",
	"email" : "kelvin.fabiana@gmail.com"
}
```


2. Login
http://localhost:3000/user/auth
```json
{
    "email" : "kelvin.fabiana@gmail.com",
    "password" : "minhasenha",
}
```
3. Create cadastro de um carro
*** você deve enviar token tipo Bearer 
```json
{
	"ano" : "1994",
	"combustivel" : "gasolina",
	"cor" : "Preto",
	"marca": "Renault",
	"modelo" : "clio",
	"preco" : "23.550"
}
```
