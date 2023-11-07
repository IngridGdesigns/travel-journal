import './App.css';
import Header from './components/Header'
import Cards from './components/Cards'
import { data } from './data.js'
import Footer from './components/Footer'

function App() {
  const mappedData = data.map((item) => {
    return (
      <Cards key={item.id} item={item} />
    )
  })
  return (
    <div className="App">
      <Header />
      {mappedData}
      <Footer />
    </div>
  );
}

export default App;
