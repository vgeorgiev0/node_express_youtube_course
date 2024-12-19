import app from "./app";
import './mod';
import './events';
const port = process.env.PORT || 5000;

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});