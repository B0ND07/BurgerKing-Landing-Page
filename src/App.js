import "./App.css"
import Header from "./Header";
import Body from "./Body";
import GridBody from "./GridBody";
import Bottom from "./Bottom";
import Footer from "./Footer";


function App() {
  return (
    <div className="App" style={{backgroundColor:"#f5ebdc"}}>
      <Header /> 
      <Body/>
      <GridBody/>
      <Bottom/>
      <Footer/>
    </div>
  );
}

export default App;
