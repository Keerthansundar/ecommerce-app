# E-commerce Application

A full-stack e-commerce application with React frontend and Spring Boot backend.

## Project Structure

```
Ecommerce-APP/
├── ecom-frontend/     # React frontend application
└── sb-ecom/          # Spring Boot backend application
```

## Frontend Setup

1. Navigate to the frontend directory:
```bash
cd ecom-frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the frontend directory with:
```
VITE_BACK_END_URL=http://localhost:8080
```

4. Start the development server:
```bash
npm run dev
```

## Backend Setup

1. Navigate to the backend directory:
```bash
cd sb-ecom
```

2. Make sure you have Java 17+ and Maven installed

3. Build the project:
```bash
mvn clean install
```

4. Run the application:
```bash
mvn spring-boot:run
```

## Deployment

### Frontend Deployment (Vercel)

1. Create a Vercel account at https://vercel.com
2. Install Vercel CLI:
```bash
npm install -g vercel
```
3. Navigate to frontend directory and deploy:
```bash
cd ecom-frontend
vercel
```

### Backend Deployment (Render)

1. Create a Render account at https://render.com
2. Create a new Web Service
3. Connect your GitHub repository
4. Configure the build command: `mvn clean install`
5. Configure the start command: `java -jar target/*.jar`
6. Add environment variables if needed

## Environment Variables

### Frontend (.env)
```
VITE_BACK_END_URL=your_backend_url
```

### Backend (application.properties)
```
# Add your backend configuration here
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License. 