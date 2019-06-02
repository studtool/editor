# Editor

## Разработка
### Скрипты

Запустить сторибука с генерацией типов для стилей

    npm start 

Дев сборка, собирает все в бандл, нужно для разработки в сторибук

    npm run build:dev
    
Собирает итоговый бандл Редактора (css + js). Используем css модули => есть отдельны бандл для стилей

    npm run build:prod 
    npm run build:prod:watch

Генерируем типы(.css.d.ts) для стилей, чтобы использовать в TS  

    npm run generate:css
    npm run generate:css:watch // watch версия
    
Линтеры
    
    npm run lint
    npm run lint-fix
    
Тесты (пока нет)

    npm run test
    
    
Сторибук

    npm run storybook
    npm run build-storybook
    
    
Релиз собирает проект для выкатки в npm(или куда там еще)

    npm run prepublish

   
###Дебаг 
Пишем в редакторе
    
    npm link
    
В проекте, в котором разрабатываем

    npm link @studtool/editor
    
Потом в редакторе, чтобы смотреть за изменениями собираем c watch

    npm run build:prod:watch
    
    
Чтобы отключить симлинк пишем там, где разрабатываем

    npm unlink @studtool/editor

