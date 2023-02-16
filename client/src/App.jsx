import { Loader, Navbar,Sell, Products} from './components';
const App = () => {

  return (
    <div className="min-h-screen">
      <div className='gradient-bg-welcome'>
        <Navbar/>
        <Sell/>
        <Products/>
      </div>
    </div>
  )
}

export default App
