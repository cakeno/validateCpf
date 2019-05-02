# Conversor de números v.1.0.5

**Esta biblioteca se destina à validação de números de CPF (Cadastro de Pessoas Físicas)**
Na versão atual é capaz de validar números de CPF com 11 números, incluindo, ou não, pontos(.) e traços(-).

## Como instalar:

```shell

$  npm install validatecpf-cakeno

```

## Como utilizar:

```node

> const cpfValidator = require("validatecpf-cakeno");
> console.log(cpfValidator("123.456.789-09"))
> // returns "true"

```

## roadmap oficial do projeto

#### versão 1.0.0 (released)
- funcionalidades: validação de números de CPF com 11 números, incluindoo, ou não, pontos(.) e traços(-).
- retorna true ou false.
