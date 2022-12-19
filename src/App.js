import './App.css';
import { RouterProvider } from 'react-router-dom';
import routes from './router/Routes/Routes';
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <div className='bg-slate-200'>
      <RouterProvider router={routes}>
      </RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
