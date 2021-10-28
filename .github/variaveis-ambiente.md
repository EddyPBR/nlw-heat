<h1 align="center" >
  <img src="https://github.githubassets.com/images/modules/logos_page/Octocat.png" src="DoWhile2021 configurar nlw-heat"  width="320" />
  <br />
  <br />
  Configurar variaveis ambiente e gerar chaves de autenticação
</h1>

Para rodar o projeto nlw-heat é necessário preencher as variaveis ambiente de acordo com o arquivo `.env.example` que é encontrado no projeto da API, WEB e MOBILE,
porém dentre alguns dos valores das variáveis ambiente se encontram as chaves de autenticação do github, e por elas que vamos começar.

<br />

# Requisitos

- Ter uma conta github
- Ter uma conta no expo (autenticação do app mobile)

<br />

# Gerando Chave de autenticação do github

<br />

Para gerar as chaves de autenticação acesse o link [gerar-chave](https://github.com/settings/developers), e clique no botão `New OAuth App` para gerar uma chave, siga os passos do projeto web, depois gere outra chave e siga os passos do projeto mobile:

<br />

- Projeto WEB
  - No campo application name coloque: `nlw-heat web`;
  - No campo Homepage URL coloque: `http://localhost:3000`;
  - No campo description: `NLW-HEAT: precisamos da sua autorização para lhe autenticar via web`;
  - No campo Authorization callback URL: `http://localhost:3000`;

<br />

- Projeto MOBILE
  - No campo application name coloque: `nlw-heat app`;
  - No campo Homepage URL coloque: `https://auth.expo.io/@SEU_USUARIO_EXPO/nlw-heat-app`;
  - No campo description: `NLW-HEAT: precisamos da sua autorização para lhe autenticar via app-mobile`;
  - No campo Authorization callback URL: `https://auth.expo.io/@SEU_USUARIO_EXPO/nlw-heat-app`;

<br />

# Criando as váriaveis ambiente

<br />

Agora é necessário criarmos as variaveis ambientes para o nosso projeto, siga o que se pede logo abaixo:

<br />

- API:
  - Na raiz do projeto crie um arquivo `.env`, copie as variaveis do arquivo `.env.example` para dentro do arquivo criado;
 
  - No campo <b>PORT</b>, será a port do seu servidor Ex.: `3333`;
 
  - No campo <b>MYSQL_ROOT_PASSWORD</b>, será a senha do seu banco de dados, Ex.: `senha123`;
 
  - No campo <b>MYSQL_DATABASE</b>, será o schema do seu banco de dados, Ex.: `nlw-heat`;
 
  - No campo <b>DATABASE_URL</b>, será a URL de conexão do banco de dados, preencha com cuidado os campos em caixa-alta: `mysql://root:MYSQL_ROOT_PASSWORD@localhost:3306/mydb?schema=MYSQL_DATABASE`;
 
  - No campo <b>JWT_SECRET</b>, você pode [gerar-chave](https://www.md5hashgenerator.com/) (basta colocar qualquer palavra e gerar a chave) e então preencha o campo com a chave gerada, Ex.: `4059c1079a17278fdb71f381ba31e79a`;
 
  - Nos campos <b>GITHUB_CLIENT_WEB_SECRET</b> & <b>GITHUB_CLIENT_MOBILE_SECRET</b>, é necessário acessar as chaves que foram criadas no tópico anterior, ir na sessão <b>Client secrets</b> e clicar no botão <b>Generate a new client secret</b>, copie a chave gerada e preencha os campos.
 
  - Nos campos <b>GITHUB_CLIENT_WEB_ID</b> & <b>GITHUB_CLIENT_MOBILE_ID</b>, é necessário acessar as chaves que foram criadas no tópico anterior, ir na sessão <b>Client ID</b> e copiar a hash que esta informada.

  - Agora crie um arquivo `.env.production`, e copie todos os valores do arquivo `.env` para ele.

  - O arquivo `.env.production` tem uma diferença, na variavel ambiente `DATABASE_URL` altere o valor <b>localhost</b> por <b>nlw-heat-database</b>. O motivo é que o host no docker será o nome do serviço do banco-de-dados criado no docker-compose.

<br />

- WEB:
  - Na raiz do projeto crie um arquivo `.env` e copie as variaveis do arquivo `.env.example`;
  
  - No campo <b>NEXT_PUBLIC_API_URL</b>, será `http://localhost:PORT` onde a <b>PORT</b> é o valor preenchido no tópico da API logo acima;
 
  - <b>NEXT_PUBLIC_GITHUB_CLIENT_ID</b>, é a hash da variavel ambiente <b>GITHUB_CLIENT_WEB_ID</b> copiada no tópico da API logo acima.


<br />

- MOBILE:
  - Na raiz do projeto crie um arquivo `.env` e copie as variaveis do arquivo `.env.example`;
 
  - No campo <b>API_URL</b>, deve estar no formato `http://IP_LOCAL_DA_MAQUINA:PORT_DA_API`. Onde IP LOCAL da sua máquina você pode obter em [como-saber-meu-ip-local](https://canaltech.com.br/internet/como-descobrir-o-numero-de-ip-externo-e-local/) e a <b>PORT</b> que foi informada na API, ex.: `http://192.168.0.2:3333`;
 
  - <b>GITHUB_CLIENT_ID</b>, é a hash da variavel ambiente <b>GITHUB_CLIENT_MOBILE_ID</b> copiada no tópico da API logo acima.

<br />

# Finalizando

<br />

Com tudo preenchido basta seguir o que falta em [nlw-heat](https://github.com/EddyPBR/nlw-heat/), espero que goste! 

<br />
