# fitr-server
[![CircleCI](https://circleci.com/gh/tiago-pereira/fitr-server/tree/master.svg?style=svg)](https://circleci.com/gh/tiago-pereira/fitr-server/tree/master)

Express/Mongodb based project.

## DEVELOPMENT

## 1 - Install

`npm install`


### 2 - Mongo 

Local

Instalar o [mongo](https://www.mongodb.com/) e:
```
$ mongod & (abre a :27017 sem bloquear o terminal)
$ mongodb (acessa o repl)
$ > use fitr  (acessa o db fitr)
$ > db.users.find()
[{_id:....}]
```

mLab

`mongodb://devel:devel@ds141450.mlab.com:41450/fitr`

### 3 - Run
`npm start`

## Tests
gulp test

# routes

## User
POST /user/login      `{username, password}`

POST /user/register   `{username, password}` 
