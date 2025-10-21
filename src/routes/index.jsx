import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Importa suas páginas
import Home from '../pages/Home';
import Gerador from '../pages/Gerador';

// Cria o "mapa"
const router = createBrowserRouter([
  {
    path: "/", // Quando o usuário acessar a raiz do site
    element: <Home />, // Mostre a página Home
  },
  {
    path: "/gerador-de-menu-semanal", // Quando acessar /contato
    element: <Gerador />, // Mostre a página Contact
  },
]);

// Um componente que exporta o provedor de rotas
export function AppRoutes() {
  return <RouterProvider router={router} />;
}