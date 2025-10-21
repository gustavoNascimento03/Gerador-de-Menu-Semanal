import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Importa suas páginas
import Home from '../pages/Home';
import Contact from '../pages/Contact';

// Cria o "mapa"
const router = createBrowserRouter([
  {
    path: "/", // Quando o usuário acessar a raiz do site
    element: <Home />, // Mostre a página Home
  },
  {
    path: "/contato", // Quando acessar /contato
    element: <Contact />, // Mostre a página Contact
  },
]);

// Um componente que exporta o provedor de rotas
export function AppRoutes() {
  return <RouterProvider router={router} />;
}