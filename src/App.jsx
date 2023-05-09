
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';

import './App.css'

function App() {
  
    return(
      <div className="App">
      <h1>Iteration 1</h1>
        <IdCard
          lastName='Doe'
          firstName='John'
          gender='male'
          height={178}
          birth={new Date("1992-07-14")}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />

      <h1>Iteration 2</h1>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>

      <h1>Iteration 3</h1>
        <Random min={1} max={6}/>
        <Random min={1} max={100}/>

      <h1>Iteration 4</h1>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
        <BoxColor r={255} g={100} b={0} />

      <h1>Iteration 5</h1>
     
       

      </div>
  )
}

export default App;


