import connectDB from "./config/database.js";
import { PORT } from "./config/constants.js";
import app from "./app.js";

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
