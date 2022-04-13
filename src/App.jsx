import { useState } from 'react'
import Nav from '../components/Nav'
import Card from '../components/Card'
import Footer from '../components/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div ClassName="App">
      <Nav />
      <div ClassName="container">
        <div ClassName="row">
        {daftar.map((agt, index)=> (
          <div className="col-lg-2 col-md-4 col-sm-6 mb-5">
            <Card gambar={agt.gambar} title={agt.title} content={agt.content}/>
          </div>
        ))}
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default App
