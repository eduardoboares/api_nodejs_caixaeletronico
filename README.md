# API em NodeJS de Caixa Eletrônico 

Exemplo de entrada válida:<br>

{<br>
	"valor": 101
<br>}<br>

Saída:{<br>
  "code": 0,<br>
  "sucesso": true,<br>
  "valor": 59,<br>
  "resultado": [ 0, 1, 2, 0, 1, 3 ]<br>
}<br>

Exemplo de entrada inválida:<br>

{<br>
	"valor": 1
<br>}<br>

Saída: {<br>
  "code": 1,<br>
  "sucesso": false,<br>
  "valor": 1,<br>
  "resultado": "Valor inválido para saque."<br>
}<br>

# A api está disponível online no Heroku <br>

Endereço: <br>
https://caixa-eletronico-api-nodejs.herokuapp.com/transacao/saque

