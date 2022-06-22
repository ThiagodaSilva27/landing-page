import Formulario from "./Components/Formulario";
import { Helmet, HelmetProvider } from 'react-helmet-async';

const App = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Landing Page que realiza seu sonho</title>
        <meta
          name="description"
          content="Aqui você fica mais perto do seu sonho!"
        />
        <meta
          name="keywords"
          content="se você pode sonhar você pode realizar, sonhos, realizar sonhos"
        />
      </Helmet>
      <Formulario />
    </HelmetProvider>
  );
};

export default App;
