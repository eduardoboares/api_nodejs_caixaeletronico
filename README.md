# API em NodeJS de Caixa Eletrônico 

Exemplo de entrada válida:<br>

{<br>
	"valor": 101
<br>}<br>

Saída:<br>
{<br>
  "code": 0,<br>
  "sucesso": true,<br>
  "valor": 59,<br>
  "resultado": [<br>
    0,<br>
    1,<br>
    2,<br>
    0,<br>
    1,<br>
    3<br>
  ]<br>
}<br>

Exemplo de entrada inválida:<br>

{<br>
	"valor": 1
<br>}<br>

Saída:<br>
{<br>
  "code": 1,<br>
  "sucesso": false,<br>
  "valor": 1,<br>
  "resultado": "Valor inválido para saque."<br>
}<br>

# A api está disponível online no Heroku <br>

Endereço: https://caixa-eletronico-api-nodejs.herokuapp.com/transacao/saque

