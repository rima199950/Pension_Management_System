import './App.css';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Home from './components/Home';
import DisburseInput from './components/DisburseInput';
import SpringPensionerDetails from './components/SpringPensionerDetails';
import AbstractLogin from './components/AbstractLogin';
import SpringDisburse from './components/SpringDisburse';
import ProcessPension from './components/ProcessPension';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/disburse" element={<SpringDisburse />} />
        <Route exact path="/springpensioner" element={<SpringPensionerDetails/>} />
        <Route exact path="/loginabs" element={<AbstractLogin/>} />
        <Route exact path="/disburseinput" element={<DisburseInput/>} />
        <Route exact path="/processPension" element={<ProcessPension/>} />
      </Routes>
    </>
    
  );
}

export default App;
