import logo from './logo.svg';
import './App.css';
import Contactos from './components/container/Contactos';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1b396ecc-c89a-488d-8d11-50432843fcf5/de9jns0-24faf447-89d4-4448-86f9-0f41402e58e9.png/v1/fill/w_1280,h_1524,strp/cheems_abeja_by_rbkwong_de9jns0-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTUyNCIsInBhdGgiOiJcL2ZcLzFiMzk2ZWNjLWM4OWEtNDg4ZC04ZDExLTUwNDMyODQzZmNmNVwvZGU5am5zMC0yNGZhZjQ0Ny04OWQ0LTQ0NDgtODZmOS0wZjQxNDAyZTU4ZTkucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.OIesKRN4pijPsCcbJz6g1GL8wlNgnGQU8MEb3UHxYB8' width={100} height={150}></img>
       <Contactos nombre="John" apellido="SNAT" email="john.snat@manu.edu.pe"></Contactos>
      </header>
    </div>
  );

}


export default App;
