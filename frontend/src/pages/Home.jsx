import React from 'react'
import Header from '../components/Header'
import ProjectCard from '../components/ProjectCard'
import CounterSection from '../components/Countersection'
import ExperienceAndSkills from '../components/ExperienceAndSkill'
import Testimonal from '../components/Testimonal'


const Home = () => {
  return (
    <div>
      <Header />
      <CounterSection />
      <ProjectCard />
      <ExperienceAndSkills />
      <Testimonal/>
    </div>
  )
}

export default Home
