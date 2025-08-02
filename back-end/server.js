// server.js

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");

const app = express();
const PORT = 5000;
const SECRET_KEY = "your-secret-key-for-jwt"; // مفتاح سري لتشفير التوكن

app.use(cors());
app.use(bodyParser.json());

// بيانات المستخدمين الوهمية
const mockUsers = [
  { id: 1, email: "test@example.com", password: "password123", name: "Ahmed Ali" },
  { id: 2, email: "user@example.com", password: "password", name: "Fatima Zahra" },
];

// نقطة النهاية (Endpoint) لتسجيل الدخول
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  // البحث عن المستخدم في قاعدة البيانات الوهمية
  const user = mockUsers.find((u) => u.email === email && u.password === password);

  if (!user) {
    // إذا لم يتم العثور على المستخدم
    return res.status(401).json({ message: "Invalid email or password." });
  }

  // إنشاء الرمز المميز (Token)
  const token = jwt.sign({ userId: user.id, email: user.email }, SECRET_KEY, { expiresIn: "1h" });

  // إرسال الرد بنجاح مع الرمز المميز وبيانات المستخدم
  res.status(200).json({
    token: token,
    user: {
      id: user.id,
      email: user.email,
      name: user.name,
    },
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
