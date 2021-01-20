## PACOTES INSTALADOS
 - _express_: O express é um framework para aplicações web, cria abstração de rotas, middlewares e outras funções para API´S.

 - _body-parser_: O body-parse permite o node fazer as requisições, recebendo informações em JSON, permitindo também entender a url e os parâmetros enviado da url.

 - _mongoose_: O mongoose é um módulo do nodejs desenvolvido para conectar-se ao MongoDB, baseado em esquemas para modelar os dados.

 -_bcryptjs_: bcrypt é um método de criptografia do tipo hash para senhas baseado no Blowfish.

- _jsonwebtoken_: jwt é um método para realizar autenticação entre duas partes por meio de um token assinado que autentica uma requisição web.


## AUTENTICAÇÃO
-Para o usuário se autenticar com a API ele precisa receber um token de autenticação

* O Token sera criptografado
* O backend vai validar, cada requisição que o usuário enviar
* Cada requisição a aplicação vai validar se o token foi gerado 
* Verifcar se o token é valido
* Verificar se o token não foi expirado

## Rota de autenticação
-Receber Email e password da requisição
-Buscar usuário pelo Email para ver se ele existe no banco de dados
-Se o usuario não existir enviar uma informação de error com o dódigo 400
-Verificar se o password é realmente a senha que o usuário se cadastrou 
-Se o password não paterem retornar error
-Gerar token 
-Gerar um hash único para o token

## Middleware
-`O middlewares basicamente monitora o processamento das transições`
-` No nosso caso de uso ele vai interceptar a requisição entre o controle e a rota`
-Buscar um headders authorization dentro da requisição
-verificar se o token foi informado e retornar um erro 401, ou seja que não foi informado
-Verificar se o token está no formato correto `formato Bearer`
