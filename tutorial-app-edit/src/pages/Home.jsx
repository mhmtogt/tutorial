import React from "react"
import { useEffect, useState } from "react"
import AddTutorial from "../components/AddTutorial"
import TutorialList from "../components/TutorialList"
import axios from "axios"

const Home = () => {
  const [tutorials, setTutorials] = useState([])

  const getTutorials = async () => {
    try {
      // const URL = "https://tutorial-api.fullstack.clarusway.com/tutorials/"
      const res = await axios(process.env.REACT_APP_URL)
      setTutorials(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  //? Mount asamasinda istek atilmali
  useEffect(() => {
    getTutorials()
  }, [])

  console.log(tutorials)
  return (

    <div >
      <AddTutorial getTutorials={getTutorials} />
      <TutorialList tutorials={tutorials} getTutorials={getTutorials} />
    </div>
  )
}

export default Home
