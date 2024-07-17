import { type Project } from './types/project'

export const infoAssist: Project = {
  name: 'Information Assistant',
  description: `Retrieval Augmented Generation (RAG) Chatbot where you can chat with your own data leveraging Azure OpenAI's GPT models.`,
  company: 'Microsoft',
  techstack: 'FastAPI, React, Azure, Cosmos'
}

export const medsis: Project = {
  name: 'MEDSIS',
  description: `Statewide disease reporting and tracking system for the state of Arizona.`,
  company: 'Arizona Department of Health Services',
  techstack: '.Net Core, React, AWS'
}

export const banner: Project = {
  name: 'Banner Patient Portal',
  description:
    'Hospital patient portal where patients can link and retrieve records from health insurance providers',
  company: 'Banner Health',
  techstack: '.Net, Angular, Boomi, Azure'
}

export const wab: Project = {
  name: 'Alliance Association Bank Portal',
  description:
    'Homeowners association portal where users can conventiently track and pay Homeowners Association costs and fees',
  company: 'Western Alliance Bank',
  techstack: 'Angular, .Net, RestAssured, Selenium, Protractor, SQL Server'
}

export const wells: Project = {
  name: 'IAM Portal',
  description:
    'Identity and Access Management (IAM) system that tracks, grants, and removes elevated privileges across the organization',
  company: 'Wells Fargo',
  techstack: '.Net, Angular, Vue, RestAssured, ASP.Net, SQL Server'
}

export const ibiley: Project = {
  name: 'Admin Dashboard',
  description: '',
  company: 'Ibiley',
  techstack: 'React, .Net Core, SQL Server'
}

export const sanctus: Project = {
  name: 'Sanctus Inn',
  description: '',
  company: 'Personal Projects',
  techstack: 'Laravel, Vue'
}

export const stopit: Project = {
  name: 'StopIt!',
  description: '',
  company: 'Personal Projects',
  techstack: ''
}

export const bazgrimstoolbar: Project = {
  name: 'Bazgrims Toolbar and Subtitles',
  description: '',
  company: 'Personal Projects',
  techstack: ''
}

export const atpclassic: Project = {
  name: 'ATP Classic Scoreboard',
  description: '',
  company: 'Advanced Training and Powerlifting',
  techstack: ''
}

export const allprojects: Array<Project> = [
  infoAssist,
  medsis,
  banner,
  wab,
  wells,
  ibiley,
  sanctus,
  stopit,
  bazgrimstoolbar,
  atpclassic
]
