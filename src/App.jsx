import { AppRoutes } from './routes';
import './styles/global.css'; // Importando um estilo global

function App() {
  // O App agora só se preocupa em carregar as rotas
  return (
    <AppRoutes />
  );
}

export default App;