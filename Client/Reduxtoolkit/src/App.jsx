import './App.css'


import store from './Redux/Store'
import {Provider} from 'react-redux'


import Counter from './Component/Counter'
function App() {


  return (
    <Provider store={store}>
    <Counter />
    </Provider>
  )
}

export default App
