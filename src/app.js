import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import compression from 'compression';

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(helmet());
app.use(compression());

// Basic route
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Ricky V1 API',
    status: 'success',
    version: '1.0.0',
  });
});

// Health check
app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    status: 'error',
    message: 'Route not found',
  });
});

// Error handler
app.use((err, req, res, _next) => {
  console.error('Error:', err);
  res.status(err.status || 500).json({
    status: 'error',
    message: err.message || 'Internal server error',
  });
});

export default app;
