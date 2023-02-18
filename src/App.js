import Header from "./Components/Header";
import {BrowserRouter,Route, Routes} from 'react-router-dom' 
import Home from "./Components/Home";
import Cssgenerator from "./Components/Cssgenerator";
import Bordergenerator from "./Components/Bordergenerator";
import Backgroundgenerator from "./Components/Backgroundgenerator";
import Borderradiusgenerator from "./Components/Borderradiusgenerator";
import Imagefiltergenerator from "./Components/Imagefiltergenerator";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/CSS-Generator' element={<Cssgenerator />}>
            <Route path='Border-Generator' element={<Bordergenerator />}/>
            <Route path='Background-Generator' element={<Backgroundgenerator />}/>
            <Route path='Border-radius-generator' element={<Borderradiusgenerator />}/>
            <Route path='Image-Filter-Generator' element={<Imagefiltergenerator />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
