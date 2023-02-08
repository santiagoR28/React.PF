import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting="Los mejores postres" />
    </>
  );
}

export default App;
