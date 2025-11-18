# LangBridge Backend API

Backend API для платформы изучения казахского языка LangBridge.

## Технологии

- Node.js
- Express.js
- MySQL (Sequelize ORM)
- JWT для аутентификации
- bcryptjs для хеширования паролей

## Установка

1. Установите зависимости:
```bash
npm install
```

2. Создайте файл `.env` на основе `ENV_SETUP.md`:
```bash
# См. server/ENV_SETUP.md для примера
```

3. Настройте переменные окружения в `.env`:
- `DB_NAME` - имя базы данных MySQL
- `DB_USER` - пользователь MySQL
- `DB_PASSWORD` - пароль MySQL
- `DB_HOST` - хост MySQL (по умолчанию localhost)
- `DB_PORT` - порт MySQL (по умолчанию 3306)
- `JWT_SECRET` - секретный ключ для JWT токенов
- `PORT` - порт сервера (по умолчанию 5000)
- `FRONTEND_URL` - URL фронтенд приложения

4. Создайте базу данных MySQL:
```sql
CREATE DATABASE langbridge CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

5. Убедитесь, что MySQL запущен и доступен.

6. Инициализируйте начальные данные (уроки, достижения):
```bash
npm run seed
```

## Запуск

### Режим разработки
```bash
npm run dev
```

### Продакшн режим
```bash
npm start
```

Сервер будет доступен по адресу `http://localhost:5000`

## API Endpoints

### Аутентификация

- `POST /api/auth/register` - Регистрация нового пользователя
- `POST /api/auth/login` - Вход в систему
- `GET /api/auth/me` - Получить текущего пользователя (требует токен)

### Пользователи

- `GET /api/users/profile` - Получить профиль пользователя
- `PUT /api/users/profile` - Обновить профиль
- `PUT /api/users/password` - Изменить пароль
- `PUT /api/users/notifications` - Обновить настройки уведомлений

### Уроки

- `GET /api/lessons` - Получить все уроки с прогрессом пользователя
- `GET /api/lessons/:id` - Получить конкретный урок
- `PUT /api/lessons/:id/progress` - Обновить прогресс урока

### Словарь

- `GET /api/vocabulary` - Получить словарь пользователя (с фильтрами и поиском)
- `POST /api/vocabulary` - Добавить слово в словарь
- `PUT /api/vocabulary/:id` - Обновить слово
- `DELETE /api/vocabulary/:id` - Удалить слово
- `PUT /api/vocabulary/:id/status` - Изменить статус слова (learning/learned)

### AI Tutor

- `POST /api/tutor/chat` - Отправить сообщение AI репетитору
- `GET /api/tutor/history` - Получить историю чата
- `GET /api/tutor/stats` - Получить статистику чата

### Статистика

- `GET /api/stats` - Получить общую статистику пользователя
- `GET /api/stats/achievements` - Получить достижения пользователя

### Health Check

- `GET /api/health` - Проверка работоспособности API

## Аутентификация

Большинство endpoints требуют аутентификации. Для доступа к защищенным маршрутам необходимо:

1. Зарегистрироваться или войти в систему
2. Получить JWT токен из ответа
3. Добавить токен в заголовок запроса:
```
Authorization: Bearer <your-token>
```

## Структура проекта

```
server/
├── config/          # Конфигурация (база данных)
├── controllers/     # Контроллеры (бизнес-логика)
├── middleware/      # Middleware (аутентификация, обработка ошибок)
├── models/          # Модели Sequelize (MySQL)
├── routes/          # Маршруты API
├── scripts/         # Скрипты (инициализация данных)
├── index.js         # Точка входа
└── package.json     # Зависимости
```

## Примеры запросов

### Регистрация
```bash
POST /api/auth/register
Content-Type: application/json

{
  "fullName": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

### Вход
```bash
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

### Добавить слово в словарь
```bash
POST /api/vocabulary
Authorization: Bearer <token>
Content-Type: application/json

{
  "kazakh": "Сәлем",
  "english": "Hello",
  "phonetic": "/salem/",
  "example": "Сәлем, қалың қалай?"
}
```

## Примечания

- AI Tutor в настоящее время использует заглушку. Для интеграции с реальным AI необходимо добавить API ключ в `.env` и обновить `tutorController.js`
- Система достижений автоматически проверяет условия при выполнении действий пользователя
- Система streak автоматически обновляется при входе пользователя
- Sequelize автоматически создаст таблицы при первом запуске (в режиме разработки)
