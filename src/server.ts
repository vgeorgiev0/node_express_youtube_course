import app from "./app";
import './mod/mg';
import './mod/async';
const port = process.env.PORT || 5000;

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});