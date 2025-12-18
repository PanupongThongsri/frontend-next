import mongoose from "mongoose";

const uri = "mongodb+srv://panupongtbest88_db_user:<db_password>@cluster0.bisubzf.mongodb.net/";

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected!"))
  .catch((err) => console.log("MongoDB Error:", err));
