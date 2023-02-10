import Header from "./Components/Header";
import {BrowserRouter,Route, Routes} from 'react-router-dom' 
import Home from "./Components/Home";
import Cssgenerator from "./Components/Cssgenerator";
import Bordergenerator from "./Components/Bordergenerator";
import Backgroundgenerator from "./Components/Backgroundgenerator";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/CSS-Generator' element={<Cssgenerator />}>
            <Route path='Border-Generator' element={<Bordergenerator />}/>
            <Route path='Background-Generator' element={<Backgroundgenerator />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
