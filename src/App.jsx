import { Navbar } from "./components/navbar/Navbar";
import ItemListContainer from "./pages/ItemListContainer/ItemListContainer";

function App () {
  return (
    <div>
     <Navbar />
     <ItemListContainer greeting={"Bienvenido a su tienda de cueros"} />
    </div>
  );
}

export default App;