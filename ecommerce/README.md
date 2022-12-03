# Adonis 
## Instalar CLI globalmente
```
>npm i --global @adonisjs/cli
```
## Crear proyecto backend (solo api)
```
>adonis new ecommerce --api-only
```
## Run
```
>cd <nombre_proyecto>
>adonis serve --dev
```
## Configurar DB
https://docs.adonisjs.com/guides/database/introduction#drivers-config

## Crear un modelo y su migración
```
>adonis make:model Productos --migration
```

## Crear nuevas migraciones
```
>adonis make:migration productos
```
## Ejecutar Migraciones
```
>adonis migration:run
```
## Crear un controlador
```
>adonis make:controller ProductosController
```

## Ver todos los comandos
```
>adonis 
```