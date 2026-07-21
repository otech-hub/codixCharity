import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import emailHandler from "./api/email.js";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    mode === "development" && {
      name: "email-api-dev-handler",
      configureServer(server) {
        server.middlewares.use("/api/email", async (req, res, next) => {
          if (req.method !== "POST") {
            res.statusCode = 405;
            res.setHeader("Content-Type", "application/json");
            res.end(
              JSON.stringify({ success: false, message: "Wrong HTTP method" }),
            );
            return;
          }

          let body = "";
          req.on("data", (chunk) => {
            body += chunk;
          });

          req.on("end", async () => {
            try {
              const parsedBody = body ? JSON.parse(body) : {};
              const mockReq = {
                method: req.method,
                body: parsedBody,
                headers: req.headers,
              };
              const mockRes = {
                statusCode: 200,
                status(code) {
                  this.statusCode = code;
                  return this;
                },
                setHeader(name, value) {
                  res.setHeader(name, value);
                },
                json(payload) {
                  res.statusCode = this.statusCode;
                  res.setHeader("Content-Type", "application/json");
                  res.end(JSON.stringify(payload));
                },
                end(payload) {
                  res.statusCode = this.statusCode;
                  res.end(payload);
                },
              };

              await emailHandler(mockReq, mockRes);
            } catch (error) {
              res.statusCode = 500;
              res.setHeader("Content-Type", "application/json");
              res.end(
                JSON.stringify({ success: false, message: error.message }),
              );
            }
          });
        });
      },
    },
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: [
      "react",
      "react-dom",
      "react/jsx-runtime",
      "react/jsx-dev-runtime",
      "@tanstack/react-query",
      "@tanstack/query-core",
    ],
  },
}));
