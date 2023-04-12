
import { createBrowserRouter } from "react-router-dom";
import Layout from '../Layout/Layout';
import Home from "../Pages/Home"
import NotFund from '../Pages/NotFount';
import ProductoDetalle from "../Pages/ProductoDetalle";
import Productos from "../Pages/Productos";
import ProductosAdd from "../Pages/ProductosAdd";
import ProductoEditar from '../Pages/ProductosEditar' ;

export default createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <NotFund />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path:'product',
                element: <Productos />
            },
            {
                path:'product/agregar',
                element: <ProductosAdd />
            },
            {
                path:'product/:id',
                element: <ProductoDetalle />
            },
            {
                path:'product/:id/editar',
                element: <ProductoEditar />
            },

        ]
    }
]);