import express from "express";
import ProductManager from "./class/ProductManager.js";
import Product from "./class/Product.js";

const pManager = new ProductManager();

const PORT = 4005;

const app = express();

app.get("/products/:pid", async (req, res) => {
  console.log(req.params.pid);

  const allProducts = await pManager.getProducts();
  const filtroProducts = allProducts.find(
    (prod) => prod.id === parseInt(req.params.pid)
  );

  if (filtroProducts) {
    res.status(200).send(filtroProducts);
  } else {
    res.status(400).send("Producto no existe en Stock");
  }
});

app.get("/products", async (req, res) => {
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

/* pManager.addProduct(productoNuevo1); */
/*pManager.addProduct(productoNuevo2);*/
/*pManager.addProduct(productoNuevo3);*/
/*  pManager.addProduct(productoNuevo4);   */

/* // obtener todos los productos
const allProducts = pManager.getProducts();
console.log("Todos los productos:", allProducts); */

/* // buscar producto por id
const productIdToFind = 1; // Reemplaza con el ID del producto que quieras buscar
const foundProduct = pManager.getProductById(productIdToFind);
console.log("Producto encontrado:", foundProduct);*/

/* // actualizar prodcuto
const productIdToUpdate = 2; // Reemplaza con el ID del producto que quieras actualizar
const updatedFields = {
    title: "Avengers",
    price: 11.99,
    stock: 10,
};
const updatedProduct = pManager.updateProduct(productIdToUpdate, updatedFields);
console.log("Producto actualizado:", updatedProduct); */

/* // Eliminar producto
const productIdToDelete = 1; // Reemplaza con el ID del producto que quieras eliminar
const remainingProducts = pManager.deleteProduct(productIdToDelete);
console.log("Productos restantes:", remainingProducts); */

/* app.get("/products", async (req, res) => {
    const allProducts = await pManager.getProducts();
    res.send(allProducts);
}); */

/*app.get("/products", async (req, res) => {
    const { code } = req.query;
    
    console.log(req.query);
    
    const allProducts = await pManager.getProducts();
    const filtroProducts = allProducts.filter((prod) => prod.code === code);
    const filtroVariosProductos = allProducts.filter((prod)=> prod.categoria === categoria[0] || prod.categoria === categoria[1])
    res.send(filtroProducts);  //para filtrar por categorias
  res.send(allProducts);
});*/
//query para filtrar datos
//params para consultar por id

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});
