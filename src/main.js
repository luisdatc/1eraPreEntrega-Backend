import express from "express";
import productosRouter from "./routes/products.routes.js";
import cartsRouter from "./routes/carrito.routes.js";

const PORT = 8080;

const app = express();

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Rutas

app.use("/api/products", productosRouter);
app.use("/api/carts", cartsRouter);


app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});
