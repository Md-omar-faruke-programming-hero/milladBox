import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Header";
import Shop from "./Component/Shop/Shop";


function App() {
  return (
    <div>
      {/* header component */}
     <Header></Header>
    
     {/* item and cart parent component */}
     <Shop></Shop>

     {/* footer component */}
     <Footer></Footer>
    </div>
  );
}

export default App;
