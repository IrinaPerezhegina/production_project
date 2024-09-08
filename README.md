## Запуск проекта

---

npm install - устанавливаем зависимости
npm run start:dev или npm run start:dev:vite - запуск сервера + frontend проекта 
---



----
## Скрипты

 - `npm run start` - Запуск frontend проекта на webpack dev server
 - `npm run start:vite`  - Запуск frontend проекта на vite
 - `npm run start:dev`  - Запуск frontend проекта на webpack dev server + backend
 - `npm run start:dev:vite`  - Запуск frontend проекта на vite + backend
 - `npm run start:dev:server`  - Запуск backend сервера
 - `npm run build:prod`  - Сброка в prod режиме
 - `npm run build:dev`  - Сброка в dev режиме(не минимизирован)
 - `npm run lint:ts`  - Проверка ts файлов линтером
 - `npm run lint:ts:fix`  - Исправление ts файлов линтером
 - `npm run lint:scss`  - Проверка scss файлов  style линтером
 - `npm run lint:scss:fix`  - Исправление scss файлов  style линтером
 - `npm run test:unit`  - Запуск unit тестов с jest
 - `npm run test:ui`  - Запуск скриншотных текстов с loki
 - `npm run test:ui:ok`  - Подтверждение новых скриншотов
 - `npm run test:ui:ci`  - Запуск скриншотных тестов в CI
 - `npm run test:ui:report`  - Генерация полного отчета для скриншотных тестов
 - `npm run test:ui:json`  - Генерация json отчета для скриншотных тестов
 - `npm run test:ui:json`  - Генерация HTML отчета для скриншотных тестов
 - `npm run storybook`  - Запуск Storybook
 - `npm run storybook:build`  - Сборка storybook билда
 - `npm run generate:slice`  - Скрипт для генерации  FSD слайсов


 ----
## Архитектура проекта

Проект написан в соответтсвии с методологией Features sliced design

Ссылка на документацию -[features sliced design](https://feature-sliced.design/ru/docs/get-started/overview)