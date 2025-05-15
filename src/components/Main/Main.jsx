import React from 'react'
import Hero from '../Hero/Hero'
import FirstRobot from '../FirstRobot/FirstRobot'
import MedicalManipulator from '../SecondRobot/SecondRobot'
import ThirdRobot from '../ThirdRobot/ThirdRobot'
import ListOfPartner from '../listOfPartner/ListOfPartner'

function Main() {
  return (
    <div>
        <Hero/>
        <FirstRobot/>
        <ThirdRobot/>
        <MedicalManipulator/>
        <hr/>
        <ListOfPartner/>
    </div>
  )
}

export default Main