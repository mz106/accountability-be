require("dotenv").config();

const express = require("express");
const port = process.env.PORT;

// routers
const userRouter = require("./user/routes");

// swagger
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Accountability App Backend",
      description:
        "An app for recording and tracking goals with added accountability from friends",
      contact: {
        name: "Michael Z",
      },
      servers: ["http://localhost"],
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },

  apis: ["src/user/routes.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

const app = express();

if (process.env.NODE_ENV === "dev") {
  app.use(
    "/docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocs, {
      explorer: true,
    })
  );
}

app.use(express.json());

app.use("/user", userRouter);

app.get("/health", (req, res) =>
  res.status(200).json({ msg: "API is healthy" })
);

app.listen(port, () => console.log("Server is listening"));
