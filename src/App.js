import './App.css';
import { Header } from './components/header.jsx'
import { Footer } from './components/footer.jsx';
import AllTodos from './components/todolist';

function App() {
  return (
    <div className="container">
      <Header />
      <div className="container">
        <AllTodos />
      </div>
      <Footer />
    </div>
  );
}

export default App;
