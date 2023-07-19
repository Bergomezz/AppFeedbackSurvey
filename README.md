# Aplicativo de Retorno de Enquete

🚧 Aplicativo de Estudo em Produção 🚧

<p>Aplicação feita unicamente com o intuito de estudo usando NodeJs, ExpressJs, MongoDB e React. Abaixo Algumas recomendações antes do uso.</p>

- Instalar os pacotes do NodeJs com o seguinte comando

`npm install`

- É necessário instalar na pasta client os pacotes do NodeJs, deixando o frontend e backend bem separados.

`npm install`

Para funcionar corretamente, é necessário criar o arquivo `dev.js` na pasta `.\server\config` conforme o exemplo abaixo:

```Javascript
module.exports = {
  googleClientID:
    'Sua ID Google',
  googleClientSecret: 'Sua chave Google',
  callbackURL: '/auth/google/callback',
  mongoURI:
    'Sua URI no MongoDB',
  cookieKey: 'iohasfd098ynefsadyfn9qerf lkajsd',
  stripePublishableKey:
    'Sua Chave publica do site stripe',
  stripeSecretKey:
    'Sua Chave secreta do site stripe',
  sendGridKey:
    'Sua Chave secreta do site sendgrid',
};

```
