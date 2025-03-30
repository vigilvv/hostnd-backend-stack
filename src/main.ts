import { Hono } from "hono";
import { serve } from "@hono/node-server";
import { createAndFundWallet } from "./createAndFundWallet.js";

const app = new Hono();

// createAndFundWallet();

app.get("/", (c) => c.text("Hello, Hono with Node.js! 🚀"));

app.get("/json", (c) => c.json({ message: "Hello, JSON!" }));

app.get("/hello/:name", (c) => {
  const name = c.req.param("name");
  return c.text(`Hello, ${name}! 👋`);
});

app.notFound((c) => c.text("404 - Not Found", 404));

app.onError((err, c) => {
  console.error(err);
  return c.text("500 - Server Error", 500);
});

// Start the server
const port = 3000;

serve(app, (info) => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
