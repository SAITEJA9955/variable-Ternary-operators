import logo from './logo.svg';
import './App.css';
import MarkSheet from './COMPONENTS/MarkSheet';

function App() {
  return (
   
    <div className="App">

      <MarkSheet studentname='teja'engmarks='98'telmarks='97'hinmarks='96'matmarks='95'scimarks='94'socmarks='93' ></MarkSheet>
      <MarkSheet studentname='raja' engmarks='28'telmarks='87'hinmarks='86'matmarks='85'scimarks='84'socmarks='83' ></MarkSheet>
      <MarkSheet studentname='rahul' engmarks='78'telmarks='77'hinmarks='06'matmarks='75'scimarks='74'socmarks='73'></MarkSheet>
      <MarkSheet studentname='ramu' engmarks='26'telmarks='67'hinmarks='66'matmarks='65'scimarks='64'socmarks='63'></MarkSheet>
      <MarkSheet studentname='ragu' engmarks='58'telmarks='57'hinmarks='56'matmarks='55'scimarks='54'socmarks='53'></MarkSheet>
      <MarkSheet studentname='ravi' engmarks='8'telmarks='34'hinmarks='9'matmarks='45'scimarks='44'socmarks='43' ></MarkSheet>
      
    </div>
  );
}

export default App;
