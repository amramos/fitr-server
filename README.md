# fitr-server

Express/Mongodb based project.

## DEVELOPMENT
1º - `npm install`

2º - Instalar o [mongo](https://www.mongodb.com/) e:
```
$ mongod & (abre a :27017 sem bloquear o terminal)
$ mongodb (acessa o repl)
$ > use fitr  (cria o db fitr)
```
3º - `npm start`

## Tests
gulp test

# routes

## User
POST /user/login
POST /user/register
