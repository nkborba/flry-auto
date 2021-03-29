# POC de Automação usando Cypress

## Page Objects

Para esse projeto foi utilizado o padrão PageObjects, dividindo os métodos relaciodados a cada pagina em arquivos especificos das mesmas, os quais se encontram em ```cypress/pages```. 

Também os respectivos elementos identificados como necessários para conclusão da automação, foram mapeados em ```cypress/support/elements```, ainda respeitando o padrão page Objects e divindo os mesmos em arquivos JS respectivos para cada página.

## Utilização de BDD

Para escrita dos casos de teste foi utilizado BDD, e seguindo o padrão do projeto inicial Cypress, se encontram dentro de ```cypress/integration/``` com a extensão ```.feature```.

Por sua vez, o arquivo de execução dos steps definidos se encontram dentro de ```cypress/support/steps```.

## Para utilizar

- Clone este repo
- Dentro da pasta do projeto, para instalar as dependencias, digite em um terminal:
```shell
npm i
```
- Dentro da pasta do projeto, para rodar a automação, digite em um terminal:
```shell
npx cypress open
```

[Ou assista o projeto rodando aqui!](/cypress/videos/flry-auto-working.mp4)