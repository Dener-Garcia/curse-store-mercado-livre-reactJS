# Indice

- [Iniciando Projeto](#start)
- [Limpando o Projeto](#cleaning)
- [Setup do Projeto](#setup)


<a id="start"></a>

## Configurando projeto e dependencias

Vamos utilizar o Eslint para forçar um estilo de código, para inicia-lo basta usar comando abaixo e responder alguams perguntas:

> npx eslint --init

<a id="cleaning"></a>

## Limpando projeto React com Vite

Por padrão vem alguns arquivos e componentes no projeto por isso vamos apagar os seguintes e pastas

- apague o arquivo src > App.css
- limpe o arquivo src > App.tsx
- apague o arquivo logo.svg
- apague o arquivo  public > vite.svg

<a id="segup"></a>

## Instalando depedencias e criando configuracao VSCode

Cria uma pasta '.vscode' e um arquivo chamado 'settings.json' para salvar as alterações desse projeto, assim que abrir ele no futuro já vai estar todo padronizado com nossa configuração.

```
{
    "editor.tabSize": 2,

    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true // toda vez que salvar o eslint tenta resolver conflitos e codigos
    }
}

Inicie o Eslint para ter um padrao de codigo

> npx eslint --init

```
Também vamos alterar a configuração do arquivo '.eslintrc.json' vai depender do seu projeto, colocando as seguintes regras em indent troque o tab por 2 que é quantidade de espaçõs que definimos no arquivo anterior.

```
 "rules": {
        "indent": [
            "error",
            2
        ],
```

Também vamos forçar usar aspas duplas na parte do JSX assim diferenciamos o código JSX do JS

```
  "jsx-quotes":[
    2,
  "prefer-double"
	]
```

Outra regra que vamos criar deve sempre haver uma linha vazia antes do 'export default "nomeComponente".

```
"eol-last":[
  "error",
  "always"
  ]
```