
import './App.css';
import CakeContainer from './components/CakeContainer';
import store from './redux/store';
import { Provider } from 'react-redux';
import HookCakeContainer from './components/HookCakeContainer';
import IcecreamContainer from './components/icecreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';

function App() {
  return (
   <Provider store={store}>
 <div>
 <ItemContainer icecream/>
  <ItemContainer/>
  
<CakeContainer/>

<HookCakeContainer/>
<IcecreamContainer/>
<NewCakeContainer/>
{/* <UserContainer/> */}

 </div>
 </Provider>
  );
}

export default App;
