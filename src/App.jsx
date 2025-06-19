import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Home/>
    </>
  )
}

export default App

// REDUX to creeate a phonestore app
// create a react project name it PhoneStore
// install on your terminal:  npm i react-redux redux font-awesome bootstrap react-router-dom
// Enter src and delete the stuffs inside app.jsx and add the new
//create inside src: Data.js , components Folder[], redux Folder[actions folder:'index.jsx'        reducers Folder: 'addItem.jsx','index.jsx'      store.jsx file too]

