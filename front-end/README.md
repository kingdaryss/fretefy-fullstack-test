# FretefyFrontend

Inicialmente não sabia se era mais prático dar um ng update do projeto para uma versão mais recente do Angular,<br/> ou se usava o nvm pra trocar a versão do meu node,<br/> optei por trocar a versão do node e assumir os riscos de perder o suporte do Angular na versão antiga e mostrar que conseguiria trabalhar em um projeto legado,<br/> julgando que eu estivesse trabalhando em um projeto legado cujo a versão fosse menor e dificil de ser atualizada.

## Versões bases de configuração do projeto utilizadas:

Angular 	-->		10.2.0 	
<br/>
Node JS 	-->  		^10.13.0 || ^12.11.0
<br/>
Typescript 	--> 		>=3.9.0 <\4.1.0	
<br/>
RXJS 		-->		^6.5.3

Fonte: https://angular.io/guide/versions#unsupported-angular-versions


## Funcionalidades do Projeto

-> Módulo de Loader genérico.
<br/>
-> Módulo de Navbar interativo.
<br/>
-> Componente de select search com desenvolvimento focado em carregamento pesado de dados.
<br/>
-> Treelist para exibição dos dados na home.
<br/>
-> Shared com as entidades e services genéricos.
<br/>
-> Tooltips
<br/>
-> Demais funcionalidades de requisitos (Validator duplicado, Tooltips, Requireds e utilizado diversos operadores rxJS).
<br/>

<img src="/tela_home.png">

<img src="/tela_cadastro.png">

## Contextualização

Primeiramente realizei estruturação de um projeto para possuir uma ampla escalabilidade.
<br/>
Sofri alguns problemas principalmente do devextreme pela falta de recurso na lib que utilizei por não ter suporte nas versões recentes dele para versão do Angular na 10.
<br/>
Após a estruturação da base, iniciei o desenvolvimento dos requisitos no backlog.
<br/>
Utilizei o json-server para simular o retorno de uma API.
<br/>
Não utilizei nenhum tipo de grid como o flexbox por exemplo, pois não encontrei algo realmente necessário, mas conheço bem a tecnologia.
<br/>
Usei um pouco de cada coisa para demonstrar algumas técnicas que conheço, tem outras funcionalidades também mas achei que se implementasse não daria tempo de entregar na segunda-feira que era meu planejado.
<br/>
Fiz o desenvolvimento na sexta do dia 15/03, 16/03 não fiz nada e finalizei hoje no dia 17/03.
<br/>
Não implementei os testes em Jasmine e Protector pois disseram não ser necessário.
<br/>
Caso encontre algum erro ou impedimento ao rodar o projeto, estou disponível, Agradeço desde já a participação !
