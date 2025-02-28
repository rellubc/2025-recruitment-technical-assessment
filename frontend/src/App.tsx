import './App.css'
import BodyHead from './main/BodyHead';
import BodyMain from './main/BodyMain';
import Navbar from './navbar/Navbar';

function App() {
  return (
    <div className='m-0'>
      <Navbar />
      <div className='m-4 flex flex-col gap-4'>
        <BodyHead />
        <BodyMain />
      </div>
    </div>
  )
}

export default App;
