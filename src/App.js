import Header from './Components/Header';
import Footer from './Components/Footer';
import Greeting from './Components/Greeting';
import WelcomeMessage from './Components/WelcomeMessage';
import Counter from './Components/Counter';
import Toggle from './Components/Toggle';
import Input from './Components/Input';
import FruitList from './Components/FruitList';
import AddFruit from './Components/AddFruit';
import Login from './Components/Login';

function App() {
  return (
    <div>
      <Header />
      <WelcomeMessage />
      <Greeting name="User" />
      <Counter />
      <Toggle />
      <Input />
      <FruitList />
      <AddFruit />
      <Login />
      <Footer />
    </div>
  );
}

export default App;
