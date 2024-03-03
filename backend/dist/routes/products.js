import express from "express";
import { adminOnly } from "../middlewares/auth.js";
import { singleUpload } from "../middlewares/multer.js";
import { deleteProduct, getAdminProducts, getAllProducts, getSingalProduct, getlatestProducts, newProduct, updateProduct } from "../controllers/product.js";
const app = express.Router();
// to create new product -- /api/v1/product/new
app.post("/new", adminOnly, singleUpload, newProduct);
// to get all products with filters --- /api/v1/product/all
app.get("/all", getAllProducts);
// to get latest 10 Products  --- /api/v1/product/latest
app.get("/latest", getlatestProducts);
// to get all Products  --- /api/v1/product/admin-products
app.get("/admin-products", adminOnly, getAdminProducts);
// to get , update , delete Product
app.route("/:id").get(getSingalProduct).put(adminOnly, singleUpload, updateProduct).delete(adminOnly, deleteProduct);
export default app;
