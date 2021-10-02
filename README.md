<p align="center"

<a href="https://blueedtech.com.br/" target="blank"><img src="https://blueedtech.com.br/wp-content/themes/blue/dist/images/logo-blue-croped.gif" width="520" alt="Nest Logo" /></a><br>
Blue Edtech - Fábio Araujo - Projeto NestFlix
</p>
<br><br>
<br><br>

## Descrição

AP RestFull criado com as tecnologias:<br>
[Nest](https://github.com/nestjs/nest) framework TypeScript.<br>
[Prisma](https://www.prisma.io/) ORM TypeScript.<br>
[MySQL](https://www.mysql.com/) Banco de dados.<br>
[Swagger](https://swagger.io/) Documentação Swagger.

Projeto Módulo 4 - Backend Blue Edtech.
Criaçao
<br><br>
API criada entrega de trabalho e firmar conceitos de backend, utilizando citadas logo acima. Nessa Foi desenvolvido um CRUD completo e relacionamento entre Filmes, Gêneros e Participantes.

## Instalação

```bash
$ npm install
```

## Rodar a aplicação

```bash
# development
$ npm run start
```

## URI Servidor Nest JS

```
http://localhost:3000
```

<br>

## URI Documentação Swagger

```
http://localhost:3000/api
```
<br>
<p align="center"

<a href="https://swagger.io/" target="blank"><img src="https://uploaddeimagens.com.br/images/003/461/550/full/Screenshot_from_2021-10-01_21-48-25.png?1633135741" width="520" alt="Nest Logo" /></a><br>
Blue Edtech - Fábio Araujo - Projeto NestFlix
</p>

<br><br>

## URI's base da aplicação

```
# rota de todos os filmes
http://localhost:3000/v1/movies/list


# rota buscar filme por id filmes
http://localhost:3000/v1/movies/list/id


# rota criar filme
http://localhost:3000/v1/movies/create

# rota atualizar um filme por id
http://localhost:3000/v1/movies/update/id

# rota deletar um filme por id
http://localhost:3000/v1/movies/delete/id


OBS: O mesmo padrão segue para as outras rotas.

```
<br><br>
## Estruturas dos dados [Inserção e Atualização]


```
# Filmes:

{
  "movie": "Nome do Filme",
  "image": "URL da imagem",
  "date_published": "Ano",
  "duration": "Minutos ou Horas",
}
```


```
# Genero:

  {
    "name": "Gênero do filme"
  }
  ```



```
# Participantes:

  {
    "name": "Nome do Participante",
    "image": "URL Imagem",
    "birth": "00/00/0000",
    "staff": "Profissão"
  }
  ```






## Sigam-me os bons

- Author - [Fábio Araujo](https://github.com/fharaujo)
- LinkedIn - [@fharaujo](https://www.linkedin.com/in/fharaujo/)
- E-mail - [@fharaujo](mailto:araujofabio2012@gmail.com)

## Licença

Nest is [MIT licensed](LICENSE).
