import app from './src/app.js';

const PORT = process.env.PORT || 3000;

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});

process.on('SIGINT', () => {
  console.log('🔥 Server is shutting down...');
  process.exit(0);
});
