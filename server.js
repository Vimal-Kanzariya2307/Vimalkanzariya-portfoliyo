import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3e3;
  app.use(express.json());
  const contactMessages = [];
  app.post("/api/contact", (req, res) => {
    const { name, email, subject, message, honeypot } = req.body;
    if (honeypot) {
      return res.status(400).json({ error: "Spam submission detected." });
    }
    if (!name || typeof name !== "string" || !name.trim()) {
      return res.status(400).json({ error: "Name is required." });
    }
    if (!email || typeof email !== "string" || !email.trim()) {
      return res.status(400).json({ error: "Email address is required." });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return res.status(400).json({ error: "Please enter a valid email address." });
    }
    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return res.status(400).json({ error: "Message must be at least 10 characters." });
    }
    const newMessage = {
      id: Math.random().toString(36).substring(2, 9),
      name: name.trim(),
      email: email.trim(),
      subject: subject ? String(subject).trim() : "Portfolio Inquiry",
      message: message.trim(),
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    };
    contactMessages.push(newMessage);
    console.log(`[Contact API] Message from ${newMessage.name} <${newMessage.email}>: "${newMessage.subject}"`);
    return res.status(200).json({
      success: true,
      message: `Thank you, ${newMessage.name}! Your message was successfully received. Vimal will reply to ${newMessage.email} shortly.`,
      id: newMessage.id,
      timestamp: newMessage.timestamp
    });
  });
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", service: "vimal-portfolio", timestamp: (/* @__PURE__ */ new Date()).toISOString() });
  });
  if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.resolve(__dirname, "dist")));
    app.get("*", (_req, res) => {
      res.sendFile(path.resolve(__dirname, "dist", "index.html"));
    });
  } else {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Portfolio server running on port ${PORT}`);
  });
}
startServer();
