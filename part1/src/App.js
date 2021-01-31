
import './App.css';
import Mensaje from './Mensaje';

// azucarillos sintaxtico - jsx

const Description = () => {
  return <p>Esta es la App del curso fullstack bootcamp</p>
}

const  App = () => {
  const mensaje = 'Hola mundo desde var'
  const a = 5
  const b = 7
  return (
    <div className="App">
      <header className="App-header">
        <p>
         {mensaje}
         <br></br>
         {+new Date()}
        </p>
        <div>
          {a + b}
        </div>
        <Description />
        <Mensaje message="Estamos trabajando en el bootcamp" />
      </header>
    </div>
  );
}

export default App;
