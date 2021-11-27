import { ProductList } from "./app/productList";
import { ProductDetails } from "./app/productDetails";
import { MyCart } from "./app/myCart";

export const ROUTES = [
    { path: '/', exact: true, component: ProductList },
    { path: '/cart', component: MyCart },
    { path: '/products/:productId', component: ProductDetails }
];