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


----
## Работа с переводами

В проекте используется библиотека i18next для работы с переводами. Файлы с переводами хранятся в public/locales

Для комфортной работы рекомендуется установить плагин для webstorm/vscode

Документация i18next-[i18next](https://www.i18next.com/)

----
## Тесты

В проекте используются 4 вида тестов:
1) Обычные unit тесты на jest - `npm run test:unit` 
2) Тесты на компоненты с React testing library - `npm run test:unit` 
3) Скриншотные тесты с loki - `npm run test:ui`
4) e2e тестирование с Cypress - `npm run test:e2e`

Подробнее о тестах - [документация тестирование](/docs//tests.md)

----
## Линтинг

В проекте используется eslint для проверки typescript кода и stylelint для проверки файлов со стилями.

Также для строго контроля главных архитектурных принципов используется собственный eslint plugin *eslint-plugin-irina-perezh-plugin*, который содержит 3 правила:
1) path-checker - запрещает использовать абсолютные импорты в рамках одного модуля
2) layer-imports - проверяет корректность использования слоев с точки зрения FSD(например, widgets нельзя использовать в features и entities)
3) public-api-imports - разрешает импорт из дпугих модулей только из public api. Имеет auto fix

#### Запуск линтеров
 - `npm run lint:ts`  - Проверка ts файлов линтером
 - `npm run lint:ts:fix`  - Исправление ts файлов линтером
 - `npm run lint:scss`  - Проверка scss файлов  style линтером
 - `npm run lint:scss:fix`  - Исправление scss файлов  style линтером

----
## Storybook

В проекте для каждого компонента описаваются стори-кейсы. 
Запросы на сервер мокаются с помощью storybook-addon-mock.

Файл со сторикейсами создается рядом с компонентом с расширением .stories.tsx

Запустить сторибук можно командой 
- `npm run storybook`  - Запуск Storybook

Подробнее о [Storybook](/docs/storybook.md)

Пример:

```typescript jsx
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button, ButtonSize, ButtonTheme } from './Button';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR,
};

export const ClearInverted = Template.bind({});
ClearInverted.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR_INVERTED,
};

export const Outline = Template.bind({});
Outline.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
};

export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L,
};

export const OutlineSizeXl = Template.bind({});
OutlineSizeXl.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BackgroundTheme = Template.bind({});
BackgroundTheme.args = {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND,
};

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND_INVERTED,
};

export const Square = Template.bind({});
Square.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
};

export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L,
};

export const SquareSizeXl = Template.bind({});
SquareSizeXl.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.XL,
};

export const Disabled = Template.bind({});
Disabled.args = {
    children: '>',
    theme: ButtonTheme.OUTLINE,
    disabled: true,
};
```


----

## Конфигурация проекта

Для разработки проект содержит 2 конфигаЖ
1. Webpack - ./config/build
2. Vite - vite.config.ts

Оба сборщика адаптированы под основные фичи приложения.

Вся конфигурация хранится в /config
- /config/babel - babel
- /config/build -конфигурация webpack
- /config/jest -конфигурация тестовой среды
- /config/storybook -конфигурация сторибука

В папке scripts находятся различные скрипты для рефакторинга/упрощения написания коды/генерации отчетов и т.д.

----

## CI pipeline и pre commit хуки

Конфигурация github находится ./github/workflows. В ci прогоняются все виды тестов, сборка проекта и сторибука, линтинг.

## Работа с данными

Взаимодействие с данными осуществляется с помощью redux toolkit. По возможности переиспользуемые сущности необходимо реализовать с помощью EntityAdapter

Запросы на сервер отправляются с помощью [RTK query](/src/shared/api/rtkApi.ts)

Для асинхронного подключения редюсеров (чтобы не тянуть их в общий бандл) используется [DynamicModuleLoader](/src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx)


----
## Фичи(features)

-