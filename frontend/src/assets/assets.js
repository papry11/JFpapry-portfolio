// assets/portfolioAssets.js

import logo from './logo.svg'
import profile from './profile.png'

export const portfolioAssets = {
  logo,
  profile
}

export const dummyProjectsData = [
  {
    _id: '1',
    title: 'Portfolio Website',
    description: 'A personal portfolio built with React, Tailwind CSS, and Framer Motion to showcase my projects and skills.',
    image: 'https://i.ibb.co/2M3QmLZ/portfolio.png',
    techStack: ['React', 'Tailwind', 'Framer Motion'],
    liveUrl: 'https://yourportfolio.com',
    githubUrl: 'https://github.com/yourusername/portfolio'
  },
  {
    _id: '2',
    title: 'E-Commerce Store',
    description: 'A full-stack e-commerce platform with product filters, secure checkout, and real-time order tracking.',
    image: 'https://i.ibb.co/QnWbXwL/ecommerce.png',
    techStack: ['Next.js', 'MongoDB', 'Stripe'],
    liveUrl: 'https://yourstore.com',
    githubUrl: 'https://github.com/yourusername/ecommerce-store'
  },
  {
    _id: '3',
    title: 'Movie Ticket Booking App',
    description: 'A web app to browse movies, view trailers, and book tickets — built with MERN stack.',
    image: 'https://i.ibb.co/8z0f7Vp/movieapp.png',
    techStack: ['React', 'Node.js', 'MongoDB', 'Express'],
    liveUrl: 'https://mymovieapp.com',
    githubUrl: 'https://github.com/yourusername/movie-booking'
  },
  {
    _id: '4',
    title: 'AI Chat Assistant',
    description: 'An AI-powered chatbot that integrates OpenAI API for smart conversations and knowledge retrieval.',
    image: 'https://i.ibb.co/FKyswqB/aichat.png',
    techStack: ['React', 'OpenAI API', 'Firebase'],
    liveUrl: 'https://aichatbot.com',
    githubUrl: 'https://github.com/yourusername/ai-chatbot'
  },
]
