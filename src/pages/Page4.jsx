import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import '../styles/Page4.css'

function Page4() {
  return (
    <div className="page4-container">
      <Navbar />
      <div className="page4-content">
        <h1>Page 4</h1>
        <p>This page will be populated with design from Figma</p>
        <p>Please select Page 4 in Figma Desktop to load the design</p>
      </div>
    </div>
  )
}

export default Page4
