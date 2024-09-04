import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import Calender from './components/Calender'
// import Dropdown from './components/Dropdown'
// import Textfield from './components/Textfield.jsx'
// const options = ['The Godfather', 'Pulp Fiction'];
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Textfield label="poo" isRequired={true}/> */}
    {/* <Dropdown options={options} label='Name' /> */}
    {/* <Calender/> */}
  </StrictMode>,
)
