[![Build Status](https://github.com/DSpace/dspace-angular/workflows/Build/badge.svg?branch=main)](https://github.com/DSpace/dspace-angular/actions?query=workflow%3ABuild) [![Coverage Status](https://codecov.io/gh/DSpace/dspace-angular/branch/main/graph/badge.svg)](https://codecov.io/gh/DSpace/dspace-angular) [![Universal Angular](https://img.shields.io/badge/universal-angular2-brightgreen.svg?style=flat)](https://github.com/angular/universal)

dspace-angular
==============

Overview
--------
O software de código aberto DSpace é um aplicativo de repositório pronto para uso usado por mais de
2.000 organizações e instituições em todo o mundo para fornecer acesso durável a recursos digitais.
Para mais informações, visite http://www.dspace.org/

DSpace utilizae Java para backend e  Angular para frontend.

* Backend (https://github.com/DSpace/DSpace/) fornece uma API REST, junto com outras interfaces baseadas em máquina, consul te a documentação para saber mais.
* Frontend (this codebase) é a interface do usuário construída na API REST

Downloads
---------

* Backend (REST API): https://github.com/DSpace/DSpace/releases
* Frontend (User Interface): https://github.com/DSpace/dspace-angular/releases


## Documentation / Installation


Iniciando a instalação 
-----------

**Certifique-se de ter o [Node](https://nodejs.org) `v18.x` or `v20.x`, [npm](https://www.npmjs.com/) >= `v10.x`**
OBS: Antes de começar a instalação do dspace_front, certifiquese de ter instalado dspace_backend  

```bash
# Clone o repositório
git clone https://github.com/DSpace/dspace-angular.git

# Acesse a pasta raiz
cd dspace-angular

# Intale o gereciador de pagoto yarn
npm install --global yarn

# Instale as dependecias do projeto
yarn install

# Inicialize a aplicação
yarn start:dev - Para inicializar a aplicação  no mode dev
```
Acesse: [http://localhost:4000](http://localhost:4000) no navegador de sua preferencia.


## Documentação / Customização
