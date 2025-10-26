import React from 'react'
import Header from '../components/Header'
import ProjectCard from '../components/ProjectCard'
import CounterSection from '../components/Countersection'
import ExperienceAndSkills from '../components/ExperienceAndSkill'
import WhyChooseMe from '../components/WhyChooseMe'

const Home = () => {
  return (
    <div>
      <Header />
      <CounterSection />
      <ProjectCard />
      <ExperienceAndSkills />
      <WhyChooseMe />
    </div>
  )
}

export default Home
