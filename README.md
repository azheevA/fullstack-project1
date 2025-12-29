# 🚀 Fullstack Project: NestJS & Next.js

Современное веб-приложение с раздельной архитектурой (Monorepo-style), построенное на мощном стеке технологий для обеспечения высокой производительности и масштабируемости.

---

## 🏗 Технологический Стек

### **💻 Frontend (`/nextjs1`)**
* **Framework:** [Next.js](https://nextjs.org/) (App Router)
* **Styling:** [Tailwind CSS 4.1](https://tailwindcss.com/) — использование последних возможностей JIT.
* **Data Fetching:** [SWR](https://swr.vercel.app/) — легкое кэширование и ревалидация данных.
* **Utilities:** `clsx`, `tailwind-merge` для удобной работы с классами.

### **⚙️ Backend (`/nestjs2`)**
* **Framework:** [NestJS](https://nestjs.com/)
* **Database:** **MongoDB** с использованием [TypeORM](https://typeorm.io/) (`@nestjs/typeorm`).
* **Validation:** `class-validator` и `class-transformer` для строгой типизации DTO.
* **Config:** `@nestjs/config` для безопасной работы с переменными окружения `.env`.
* **API Docs:** [Swagger/OpenAPI](https://swagger.io/) — автогенерация документации эндпоинтов.

---

## 🛠 Запуск проекта

### 1. Требования
* **Docker** и **Docker Compose**
* **Node.js** (рекомендуется v20+)
* **MongoDB** (локально или через Docker)

## 2. Настройка окружения
Перед запуском необходимо настроить переменные окружения. Создайте файл `.env` в папке `nestjs2/` на основе примера:

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/mydb
```
##3. Быстрый старт (Docker) 🐳
Запустите всё приложение целиком (фронтенд, бэкенд и базу данных) одной командой из корневой директории:
```Bash
docker-compose up --build
```

## 4. Локальная разработка
Если вы хотите запустить части проекта по отдельности:

### Бэкенд:

```Bash
cd nestjs2
npm install
npm run start:dev
```
### Фронтенд:

Bash
```
cd nextjs1
npm install
npm run dev
```
## 📑 API Документация
После запуска бэкенда, интерактивная документация Swagger доступна для тестирования эндпоинтов по адресу: 👉 http://localhost:3000/api




## ✅ Статус разработки
[x] Инициализация NestJS и Next.js.

[x] Настройка TypeORM и MongoDB.

[x] Интеграция Tailwind 4.1.

[x] Развертывание и настройка Docker Compose, Dockerfile.

[x] Реализация авторизации для бланка.

[ ] Добавление access и refresh токенов с куками и их реализация(в реализации)

[ ] Покрытие кода тестами, в том числе end-to-end(Jest)(в освоении).
