import { Router } from "express";
import ProductManager from "../class/ProductManager.js";

const productosRouter = Router();

const pManager = new ProductManager();

productosRouter.get("/", async (req, res) => {
  const { price, stock, limit } = req.query;

  const allProducts = await pManager.getProducts();

  let filtroVariosProductos = allProducts;

  if (price) {
    filtroVariosProductos = filtroVariosProductos.filter(
      (prod) => parseFloat(prod.price) === parseFloat(price)
    );
  }

  if (stock) {
    filtroVariosProductos = filtroVariosProductos.filter(
      (prod) => parseFloat(prod.stock) === parseInt(stock)
    );
  }

  if (limit && !isNaN(limit) && parseInt(limit) > 0) {
    const limiteProductos = filtroVariosProductos.slice(0, parseInt(limit));
    res.send(limiteProductos);
  } else {
    res.send(filtroVariosProductos);
  }
});

productosRouter.get("/:id", async (req, res) => {
  console.log(req.params.id);

  const allProducts = await pManager.getProducts();
  const filtroProducts = allProducts.find(
    (prod) => prod.id === parseInt(req.params.id)
  );

  if (filtroProducts) {
    res.status(200).send(filtroProducts);
  } else {
    res.status(400).send("Producto no existe en Stock");
  }
});

productosRouter.post("/", async (req, res) => {
  const producto = await pManager.addProduct(req.body);

  if (producto) {
    res.status(200).send("Producto agregado");
  } else {
    res.status(400).send("El codigo del producto ya existe");
  }
});

productosRouter.put("/:id", async (req, res) => {
  const productoId = parseInt(req.params.id);
  const actualizarCampos = req.body;

  const actualizarProducto = await pManager.updateProduct(
    productoId,
    actualizarCampos
  );

  if (actualizarProducto) {
    res.status(200).send(actualizarProducto);
  } else {
    res.status(400).send("Producto no encontrado");
  }
});

productosRouter.delete("/:id", async (req, res) => {
  const productoId = parseInt(req.params.id);

  const borrarProducto = await pManager.deleteProduct(productoId);

  if (borrarProducto) {
    res.status(200).send("Producto eliminado");
  } else {
    res.status(400).send("Producto no encontrado");
  }
});

export default productosRouter;

/* {
    "title": "Amazing Fantasy #6",
    "description": "It's the end of the origin of Anya Corazon - and a new beginning.  But, first, the question on everyone's mind: what's the public identity of Marvel's newest media darling? Well, we won't tell you here, but we will tell you folks are clamoring for the inside scoop and a glimpse of this amazing spider-like teen, who's now been seen everywhere from Telemundo to Fox News to the NY Daily News - not bad for a Latina from Brooklyn!",
    "price": 8.99,
    "thumbnail": "/ruta-imagen2.jpg",
    "code": "AF045",
    "stock": 3,
    "id": 20
  } */
