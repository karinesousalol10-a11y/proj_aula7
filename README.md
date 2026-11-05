# Projeto Aula 7 — API de Controle Financeiro

1. Instale Node.js.
2. Abra a pasta no VS Code e execute `npm install`.
3. Copie `.env.example` para `.env` e substitua MONGODB_URI pela URI real do MongoDB Atlas. Não publique sua senha.
4. Execute `npm run start`.
5. Teste `http://localhost:3000` no navegador. Deve aparecer `Hello World!`.

## Postman
POST `http://localhost:3000/transacoes` (Body > raw > JSON):
```json
{"descricao":"Salário","valor":2500,"tipo":"receita","categoria":"Renda","consumoConsciente":true}
```
Exemplo de despesa:
```json
{"descricao":"Compra por impulso","valor":120,"tipo":"despesa","categoria":"Lazer","consumoConsciente":false}
```
GET `http://localhost:3000/transacoes` retorna `historico` e `metricas` (`saldoTotal`, `totalDespesas`, `totalGastoImpulso`).

O professor exige repositório público no GitHub. Atualize `github.txt` com a URL real antes da entrega. O ZIP deve conter `src`, `test`, `package.json`, `tsconfig.json`, `nest-cli.json`, `github.txt` e configurações adicionais utilizadas.
