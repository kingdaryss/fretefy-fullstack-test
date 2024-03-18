# FretefyFrontend

Inicialmente não sabia se era mais prático dar um ng update do projeto para uma versão mais recente do Angular, ou se usava o nvm pra trocar a versão do meu node, optei por trocar a versão do node e assumir os riscos de perder o suporte do Angular na versão antiga e mostrar que conseguiria trabalhar em um projeto legado, julgando que eu estivesse trabalhando em um projeto legado cujo a versão fosse menor e dificil de ser atualizada.

## Versões bases de configuração do projeto utilizadas:

Angular 	-->		10.2.0 	
Node JS 	-->  		^10.13.0 || ^12.11.0
Typescript 	--> 		>=3.9.0 <4.1.0	
RXJS 		-->		^6.5.3

Fonte: https://angular.io/guide/versions#unsupported-angular-versions


## Funcionalidades do Projeto

-> Módulo de Loader genérico.
-> Módulo de Navbar interativo.
-> Componente de select search com desenvolvimento focado em carregamento pesado de dados.
-> Treelist para exibição dos dados na home.
-> Shared com as entidades e services genéricos.
-> Tooltips
-> Demais funcionalidades de requisitos (Validator duplicado, Tooltips, Requireds e utilizado diversos operadores rxJS).


## Contextualização

Primeiramente realizei estruturação de um projeto para possuir uma ampla escalabilidade.

Sofri alguns problemas principalmente do devextreme pela falta de recurso na lib que utilizei por não ter suporte nas versões recentes dele para versão do Angular na 10.

Após a estruturação da base, iniciei o desenvolvimento dos requisitos no backlog.

Utilizei o json-server inicialmente para simular o retorno de uma API julgando que nesse tempo não iria conseguir fazer a tempo o backend, justamente pelo impedimento que tive com os recursos da lib que estava utilizando.

Não utilizei nenhum tipo de grid como o flexbox por exemplo, pois não encontrei algo realmente necessário, mas conheço bem a tecnologia.

Tentei usar um pouco de cada coisa para demonstrar algumas técnicas que conheço, tem outras funcionalidades também mas achei que se implementasse não daria tempo de entregar na segunda-feira que era meu planejado.

Fiz o desenvolvimento na sexta do dia 15/03, 16/03 não fiz nada e finalizei hoje no dia 17/03.

Não implementei os testes em Jasmine e Protector pois na entrevista disseram não ser necessário.

Tem algumas coisas que sinto que daria pra ter melhorarado, por exemplo, usar alertas para notificação de cadastro realizado,
não terminei a implementação que queria fazer da notificação com o sino na toolbar e queria ter deixado melhor o módulo de cadastro, entre outros.

Caso encontre algum erro ou impedimento ao rodar o projeto, estou disponível, Agradeço desde já a participação !
