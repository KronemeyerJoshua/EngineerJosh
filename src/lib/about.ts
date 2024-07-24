import type { Contact } from './types/contact'

function calcAge(birthYear: number) {
  return new Date().getFullYear() - birthYear
}

export const joshContact: Contact = {
  firstName: 'Joshua',
  lastName: 'Kronemeyer',
  avatar: '@/assets/img/avatar_main.jpg',
  about:
    `Welcome to my portfolio site! My name is Joshua Kronemeyer, I am a ` +
    calcAge(1994) +
    ` year old Fullstack Engineer from Rochester, Minnesota. Most of my enterprise work has revolved around using Vue/React/Angular, .Net/FastAPI, and SQL or Cosmos Databases. 
    I am always trying new technologies and the projects represented here are a small scope of my work. Everything from game development to assembly, I've touched it all at some point! 
    Quick to learn and quick to perform. My goal as a Software Engineer is to better the lives of people through quality software making a substantial impact on their day to day to operations. 
    I'm always open to chat about any of my projects, previous roles, and experiences I've had in this field. Outside of work I am an amateur strongman and enjoy my fair share of RPGs. Let's get better together!`,
  linkedin: 'https://www.linkedin.com/in/kronemeyerj/',
  github: 'https://github.com/KronemeyerJoshua',
  email: 'joshuakronemeyer@gmail.com'
}
