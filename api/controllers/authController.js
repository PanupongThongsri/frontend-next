import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const { email, password, firstName, lastName, phone } = req.body;

    // ตรวจว่าซ้ำหรือไม่
    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ message: "Email already exists" });

    // เข้ารหัส
    const hashed = await bcrypt.hash(password, 10);

    // บันทึกลง DB
    await User.create({ email, password: hashed, firstName, lastName, phone });

    res.json({ message: "Register success" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({ message: "Email and password are required" });

    // ต้อง .select("+password") เพื่อดึง password ออกมาด้วย
    const user = await User.findOne({ email }).select("+password");

    if (!user)
      return res.status(400).json({ message: "User not found" });

    // เช็ค password
    const match = await bcrypt.compare(password, user.password);
    if (!match)
      return res.status(400).json({ message: "Password incorrect" });

    // ออก token
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    const { password: pwd, ...userWithoutPassword } = user._doc;
    
    res.json({ token, user: userWithoutPassword });

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
};


