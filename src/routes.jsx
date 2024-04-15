import App from './App.jsx'
import Products from './Products.jsx'

const routes =[
    {
      path: "/",
      element: <App />,
    },
    {
      path: "products",
      element: <Products />,
    },
  ];

export default routes;