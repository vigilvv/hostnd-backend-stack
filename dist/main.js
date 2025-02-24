"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hono_1 = require("hono");
const app = new hono_1.Hono();
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
app.listen(port, () => {
    console.log(`🚀 Server running at http://localhost:${port}`);
});
