import myimage from './assets/me.jpeg'
import './App.css'

function App() {  
  return (
    <>
      <div>
        <img className="myimage" src={myimage} alt="My Photo" />
      </div>
      
      <p className="read-the-docs">
        <h2>Site under construction!</h2>
        contact: njorogedaniel088@gmail.com
      </p>
    </>
  )
}

export default App
