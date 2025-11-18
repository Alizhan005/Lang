# Настройка переменных окружения

Создайте файл `.env` в папке `server/` со следующим содержимым:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# MySQL Configuration
DB_NAME=langbridge
DB_USER=root
DB_PASSWORD=
DB_HOST=localhost
DB_PORT=3306

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_EXPIRE=7d

# CORS Configuration
FRONTEND_URL=http://localhost:5173

# AI API Configuration (optional - for future AI integration)
# OPENAI_API_KEY=your-openai-api-key
```

## Важные замечания:

1. **MySQL Configuration**: Убедитесь, что MySQL запущен и доступен
   - Создайте базу данных: `CREATE DATABASE langbridge;`
   - Укажите правильные учетные данные в `.env`
2. **JWT_SECRET**: В продакшене используйте сложный случайный ключ
3. **FRONTEND_URL**: Укажите URL вашего фронтенд приложения

## Создание базы данных

```sql
CREATE DATABASE langbridge CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```
