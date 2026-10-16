import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import './App.css'
import Header from './Components/Header';
import Banner from './Components/Banner';
import Services from './Components/Services';
import Stats from './Components/Stats';
import Works from './Components/Works';
import Guide from './Components/Guide';
import Expertise from './Components/Expertise';
import Axis360 from './Components/Axis360';
import Plan from './Components/Plan';
import Reviews from './Components/Reviews';
import Footer from './Components/Footer';

function App() {


  return (
    <>
      <div className=''>
        <Header />
        <Banner />
        <Services />
        <Stats />
        <Works />
        <Guide />
        <Expertise />
        <Axis360 />
        <Plan />
        <Reviews />
        <Footer />


      </div>


    </>
  )
}

export default App
