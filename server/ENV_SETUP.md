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

1. **MySQL Configuration**: 
   - Убедитесь, что MySQL запущен и доступен
   - **База данных уже должна существовать** - приложение только подключается к ней
   - Укажите правильные учетные данные в `.env` (DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT)
   - Убедитесь, что таблицы уже созданы в базе данных
2. **JWT_SECRET**: В продакшене используйте сложный случайный ключ
3. **FRONTEND_URL**: Укажите URL вашего фронтенд приложения
