import React from 'react'
import { useState } from 'react'
import './Home.css'
import Header from '../../components/Navbar/Header/Header'
import Exploremenu from '../../components/Navbar/ExploreMenu/Exploremenu'
import Fooddisplay from '../../components/Navbar/FoodDisplay/Fooddisplay'

const Home = () => {

  const [category, setCategory] = useState("ALL");
  return (
    <div>
      <Header/>
      <Exploremenu category={category} setCategory={setCategory}/>
      <Fooddisplay category={category}/>
    </div>
  )
}

export default Home
