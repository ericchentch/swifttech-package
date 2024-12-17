## Setup environment

Using node 20+

Install packages with:

```bash

yarn install-all

```

    Create .env file with example from .env.example

Create entites interfaces from prisma.schema

```bash

yarn prisma generate

```

## Getting Started

First, run the development server:

```bash

yarn  dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Docs

    [ANTD](https://ant.design/components/overview)

    [Prisma](https://www.prisma.io/docs)

## Structure conventions

    - nextjs-utils: Package for reuse function for nextjs or express

    - prisma
    	- schema for enties in database and migration histories

    -  public
    	- files are public accesability for client

    - server-functions: Backend functions
    	- common-types: Interfaces or types can be reused several times
    	- [module_name]: Logical functions
    		- shared: shareing logical functions in modules

    - src: Client functions
    	- antd: Config for antd design
    	- app: routes tree
    		- api: backend endpoints
    			- [endpoints]
    		- [route]: route for client page
    	- component: Components or logical for FE can be reused several times
    	- hooks: React hooks
    	- modules: Modules of front end
    		- layout: Layout of modules
    		- redux: React redux config
    		- [module_name]: components of module
    		- types.tsx: sharing types or interfaces in modules
    	- utils: Logical functions can be reused

    - swagger: Config of swagger

## Coding conventions

    - Folder name: kebab-case
    - File name:
    	- camelCase for backend functions and logical functions
    	- PascalCase for frond end components
    	- kebab-case for client routes and api endpoints
    	- index.ts or index.tsx is special case
    	- others: kebab-case
    	- React hooks: camelCase start with use
    	- PascalCase for interfaces or types
    - Every child folder must have index.ts (for backend functions or logical functions) or index.tsx (for client compoents) to export everythings from folder
    - Interaface and type: PascalCase
    - Components: PascalCase
    - Backend functions: camelCase
    - Redux Variables: PascalCase
    - Redux actions: camelCase
    - FE Utils: camelCase
    - React hooks: camelCase start with use
