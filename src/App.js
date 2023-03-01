import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TodoApp from './components/TodoContainer';
import About from './components/About';
// import NoMatch from './pages/NoMatch';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/to-do-app-react-tutorial" element={<TodoApp />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<div>If page not found it goes here</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
