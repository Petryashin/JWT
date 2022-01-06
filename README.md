# JWT
Мини проект для изучения JWT    
[Как развернуть проект](#чтобы-развернуть-проект)
## О проекте
Мини проект, созданный для понимания основных принципов работы с JWT авторизацией. Выполнен на базе backend фреймворка Laravel. На фронтенде используются Vue.js 2 версии и vue-router, в совокупности реализующие SPA приложение. Для запросов используется библиотека axios

## Требования
- npm
- composer 
- PHP 
- Docker

## Установка JWT:
[Ресурс с документацией](https://jwt-auth.readthedocs.io/en/develop/laravel-installation/)
## Чтобы развернуть  проект:
- Установка зависимостей backend
```bash
composer install
```
- Установка зависимостей frontend
```bash
npm install
```
- Чтобы развернуть базу данных
```bash
 docker-compose up -d 
 ```
- Добавить миграции в базу данных
```bash
 php artisan migrate
 ```




