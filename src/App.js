import './App.css';
import ImageBox from './components/ImageProcess/ImageBox';
import NavigationBar from './components/navbarComponent/NavigationBar';

function App() {
  return (
    <div className="relative w-screen h-screen bg-slate-100 flex flex-col overflow-hidden space-y-8">
      <NavigationBar />

      <div className='absolute w-screen h-screen flex flex-row items-center justify-center scale-90 md:scale-100a'>
      <ImageBox />
      </div>
      
    </div>
  );
}

export default App;
