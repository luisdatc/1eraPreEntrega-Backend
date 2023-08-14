import express from "express";
import productosRouter from "./routes/products.routes.js";

const PORT = 8080;

const app = express();

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Rutas

app.use("/api/products", productosRouter);


/*
 */

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
