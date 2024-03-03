import mongoose from "mongoose"
import { myCache } from "../app.js";
import { InvalidateCacheProps } from "../types/types.js";


export const connectDB = (uri: string) => {
    mongoose.connect(uri, {
        dbName: "Ecommerce_24",
    }).then(c => console.log(`connected to DB to  ${c.connection.host}`)).catch(error => console.log(error));
};


export const invalidateCache = ({
    product,
    order,
    admin,
    userId,
    orderId,
    productId,
}: InvalidateCacheProps) => {
    if (product) {
        const productKeys: string[] = [
            "latest-products",
            "categories",
            "all-products",
        ];
        if (typeof productId === "string") productKeys.push(`product-${productId}`);

        if (typeof productId === "object") {
            productId.forEach((i) => productKeys.push(`product-${i}`));
        }
        myCache.del(productKeys);
    }
    if (order) {
        const ordersKeys: string[] = [
            "all-orders",
            `my-orders-${userId}`,
            `order-${orderId}`,
        ];
        myCache.del(ordersKeys);
    }
    if (admin) {
        myCache.del([
            "admin-stats",
            "admin-pie-charts",
            "admin-bar-charts",
            "admin-line-charts",
        ]);
    }
}