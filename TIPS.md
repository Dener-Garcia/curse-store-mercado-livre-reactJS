# Indice

- [Iniciando Projeto](#start)
- [Limpando o Projeto](#cleaning)
- [Setup do Projeto](#setup)
- [Estruturando pastas](#folders)
- [Usando lib de icones](#icon)
- [Trabalhando com Hooks](#hooks)
- [Passando propriedas com props](#props)
- [Loops com React](#loops)
- [Regex para substituir parte de uma string](#regex)
- [Formatando numero para moeda](#currecy)
- [Compatilhando estados entre componentes useContext](#shared)


<a id="start"></a>

## Configurando projeto e dependencias

Usaremos o vite como bandle para o projeto

<a id="cleaning"></a>

## Limpando projeto React com Vite

Por padrão vem alguns arquivos e componentes no projeto por isso vamos apagar os seguintes e pastas

- apague o arquivo src > App.css
- limpe o arquivo src > App.tsx
- limpe o arquivo src > index.css
- apague o arquivo logo.svg
- apague o arquivo  public > vite.svg
- apague o arquivo assets > react.svg

<a id="setup"></a>

## Instalando depedencias e criando configuracao VSCode

Instale no seu brownser a extensão React developers Tools, nela é possivel ver a arvore de componentes do React e ver algumas informações do componente, como props, estados

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

<a id="folder"></a>

## Estruturas de pastas

Por padrão estruturamos as pastas do React da seguinte maneira.

- src > components = todos os componentes que vamos criar vao ficar dentro de pastas
- src > components > Header = sera nosso componente Header.tsx e tambem o seu index.css
- src > api = todas funcoes relacionadas a chamadas de api ficaram aqui.
- src > utils = todas funcoes reutilizaveis e genericas colocamos nessa pasta 

### Chamada dos componentes

Normalmente renderizamos nossos componentes dentro do App.jsx, porem existe outras formas de se trabalhar criando rotas ou mesclando HTML com react.

Um componente é criado em forma de função, classe ou arrow function, um detalhe é que devemos por o return e se temos várias tags HTML no mesmo componente como no exemplo abaixo devemos envolve-los sob uma div ou sobre o <> veja um exemplo:

```
import React from 'react'

const SearchBar = () => {
  return(
    <>
      <form action="">
        <input className="search-input" 
          type="search"
          placeholder="Buscar produtos"
          required />
        <button className="btn-search" type="submit">icon</button>
      </form>
    </>
  )
}

export default SearchBar

```

### Css de componentes

Para lincar o css em um componente basta fazer o import dele no arquivo do componente.jsx

> import "./nomeArquivo.css"

<a id="icon"></a>

## Usando uma lib de icones no React

Para usar uma lib geralmente fazemos a instalação dela com o npm primeiro e depois fazemos o import do icone desejado no componente

> npm install react-icons

Quando for utilizar o icone dessa lib basta fazer o import dele com o nome do icone entre chaves e o caminho as primeira letras é relacionado ao framework que o icone pertence no caso 'bs'

> import { BsSearch } from 'react-icons/bs'

Use o icone como se fosse um componente

> <BsSearch />

<a id="hooks"></a>

## Trabalhando com estados e Hooks

Para pegar o valor de uma input por exemplo usamos os estados ou states do React, os Hooks sao como funcoes pre-definidas.

### Hook useState()

Sempre que utilizamos um Hook fazemos primeiro seu import, logo em seguida antes do nosso return criamos a variavel que vai interagir com o hook.

> import { useState } from 'react'

Nas variaveis temos um array onde o primeiro item se trata do valor em si e o segundo é uma função que usamos para atualizar o valor da primeira variável, por convenção utilizamos o os nomes iguais acrescido do set, por fim invocamos o hook e se necessários passamos um valor inicial para ele já atribuir a variável

> const searchInput [searchValue, setSearchValue] = useState('')

Agora para utilizarmos esse hook podemos criar eventos dentro das próprias tags HTML similar quando chamamos uma função direto do HTML, dessa forma agora que esta controlando o valor desse input não é o HTML e sim o React por isso no value atrelamos ao searchValue

```
  <input className="search-input" 
          type="search"
          placeholder="Buscar produtos"
          value={searchValue}
          required 
          onChange={({ target }) => setSearchValue(target.value)}/>
```

Dentro do onChange capturamos o target fazendo a desistruturação do proprio evento que disparou, assim capturamos o target do input

> onChange={(event) => setSearchValue(target.value)}
> onChange={({target}) => setSearchValue(target.value)}

### Hook useEffect()

O useEffect possui 2 parametros, uma funcao de callback e um array de dependencias, geralmente colocamos uma variavel e sempre que ela muda de estado executamos o que esta dentro do useEffect, caso eu deixe meu array de dependencias vazio o que estiver dentro do useEffect sera renderizado somente uma vez ao montar o componente.

<a id="props"></a>

## Usando as props

Podemos passar propriedades para componentes através das props, vamos desistruturar ela para pegar os dados desejados

<a id="loops"></a>

## Loops com React

Uma convenção no React é que os loops tenham uma chave key para que o react se "ache" melhor nos seus loops.
No exemplo abaixo usamos o proprio id para que cada elemento do loop se torne único.

 ```{products.map((product) => 
      <ProductCard key={products.id} 
      thumbnail={product.thumbnail} 
      title={product.title} 
      price={product.price}/>)}
  ```

  <a id="regex"></a>

## Regex

Vamos utlizar o regex para trocar uma letra das nossas imagens que vem da API do mercado livre, para as nossas imagens virem com alta qualidade o final de cada imagem deve conter a letra W seguido do .jpg.
Iniciando um regex com // e definindo algumas variaveis:

> {thumbnail.replace(/\w\.jpg/gi, 'W.Jpg')}

- g = global vai atual na string inteira
- i = não é case sensitive
- \w = qualquer caractere
- , "W.jpg" = o que eu quero que substitua as condições anteriores

<a id="currency"></a>

## Formatando um valor para moeda local

Existe uma funcao chamada toLocaleString() para formatar strings passando um objeto para estilizar a string e transforma-la em uma moeda, porcentagem por exemplo

> variavel.toLocaleString("pt-br", { style: "currency", currency: "BRL" })

Como boa pratica cria-se uma funcao para sempre que precisar usar esse metodo ele ja esteja pronto.

<a id="shared"></a>

## Compatilhando valores, funcoes entre componentes de mesma hierarquia

Vamos utilizar um hook chamado useContext para enviar informacoes do nivel mais baixo para o componente de nivel mais alto ou de mesma hierarquia.
Para isso vamos criar um componente comum do react chamando-o de <Provider> e vamos envolver os componentes que precisam de informacoes que vão ficar dentro do Provider

 1. Crie uma função e de um nome para o seu context

```
import { createContext } from 'react'

const AppContext = createContext ()

export default AppContext
```

Criei o componente que chamei de Provider onde vao ficar as variaveis que desejamos compartilhar atraves das props.

```
import AppContext from './AppContext'

const Provider = (props) => {

const [products, setProducts] = useState([])

const globalStates = {
  products,
  setProducts
}

return(
  <AppContext.Provider value={globalStates}>
   {props.children}
  </AppContext.Provider>
  )}
export default Provider
```

- AppContext.Provider value = recebe um objeto que chamei de globalStates com as funcoes necessarias para atualizar variaveis atraves do useState

Agora basta envolver os componentes que preciso compartilhar informacoes pelo meu componente Provider, no caso fiz isso no App.jsx

```
function App() {

  return (
    <Provider>
      <Header />
      <Products />
    </Provider>
  )
}
```


Agora todos os componentes da arvore de componentes do Header e Products terao acesso a funcoes e variaveis que estao no Provider.
Para os componentes pegarem as informacoes que vem do provider usamos o hook useContext() e passamos o nosso provider no caso AppContext.

No componente que precisamos retirar informacoes com o useContext vamos criar uma variavel desistruturando-a para pegar as informacoes que precisaremos.
No exemplo abaixo no componente SearchBar eu importo o AppContext e pego a funcao de setProducts.

```
import AppContext from '../../context/AppContext'

const { setProducts } = useContext(AppContext)

 const handleSearch = async (e) =>{ 
    e.preventDefault()
    const productsFromSearch = await fetchProducs(searchValue)
    setSearchValue('')
    setProducts(productsFromSearch)
  }
  
  return(
    resto do codigo)
```

- Na função HandleSearch eu estou pegando o valor da input do form que esta somente dentro do SearchBar e atribuindo ao setProducts que bem la do meu Provider.

```
Em Products onde renderizo os produtos vindo da api eu importo meu AppContext, faco a desistruturacao para pegar as variaveis produtcs que vem do provider.

import AppContext from '../../context/AppContext'

Const Products = () =>{

  const { products, setProducts } = useContext(AppContext)

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchProducts('arduino')
      .then((response)=>{
        setProducts(response)
        setLoading(false)
      })

  }, [])}
  
  return( resto do codigo)
```

Dessa forma eu consigo enviar o valor do campo de pesquisa do componente SearchBar para esse componente Products
