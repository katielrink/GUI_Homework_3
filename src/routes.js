import { ProductList } from "./app/productList";
import { ProductDetails } from "./app/productDetails";
import { MyCart } from "./app/myCart";

export const ROUTES = [
    { path: '/', exact: true, element: < ProductList / > },
    { path: '/cart', element: < MyCart / > },
    { path: '/products/:productId', element: < ProductDetails / > }
];