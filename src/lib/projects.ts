import { type Project } from './types/project'

export const infoAssist: Project = {
  name: 'Information Assistant',
  description: `Retrieval Augmented Generation (RAG) Chatbot where you can chat with your own data leveraging Azure OpenAI's GPT models.`,
  detailedDescription: ``,
  contributions: ``,
  challenges: ``,
  company: 'Microsoft',
  techstack: 'FastAPI, React, Azure, Cosmos'
}

export const medsis: Project = {
  name: 'MEDSIS',
  description: `Statewide disease reporting and tracking system for the state of Arizona.`,
  detailedDescription: ``,
  contributions: ``,
  challenges: ``,
  company: 'Arizona Department of Health Services',
  techstack: '.Net Core, React, AWS'
}

export const banner: Project = {
  name: 'Banner Patient Portal',
  description:
    'Hospital patient portal where patients can link and retrieve records from health insurance providers',
  detailedDescription: ``,
  contributions: ``,
  challenges: ``,
  company: 'Banner Health',
  techstack: '.Net, Angular, Boomi, Azure'
}

export const wab: Project = {
  name: 'Alliance Association Bank Portal',
  description:
    'Homeowners association portal where users can conventiently track and pay Homeowners Association costs and fees',
  detailedDescription: ``,
  contributions: ``,
  challenges: ``,
  company: 'Western Alliance Bank',
  techstack: 'Angular, .Net, RestAssured, Selenium, Protractor, SQL Server'
}

export const wells: Project = {
  name: 'Identity Access and Managment',
  description:
    'Identity and Access Management (IAM) system that tracks, grants, and removes elevated privileges across the organization',
  detailedDescription: ``,
  contributions: ``,
  challenges: ``,
  company: 'Wells Fargo',
  techstack: '.Net, Angular, Vue, RestAssured, ASP.Net, SQL Server'
}

export const ibiley: Project = {
  name: 'Admin Dashboard',
  description:
    'Administration dashboard that features various metrics, package tracking for School Uniforms, and QR Code generation',
  detailedDescription: ``,
  contributions: ``,
  challenges: ``,
  company: 'Ibiley',
  techstack: 'React, .Net Core, SQL Server'
}

export const sanctus: Project = {
  name: 'Sanctus Inn',
  description:
    'A custom built community website POC for Ashes of Creation. Features include completely custom forums, identity management, WYSIWYG, Twitch and Discord integration',
  detailedDescription: ``,
  contributions: ``,
  challenges: ``,
  company: 'Personal Projects',
  techstack: 'Laravel, Vue'
}

export const stopit: Project = {
  name: 'StopIt!',
  description:
    'A simple addon that stops the camera from spinning when you open menus in Elder Scrolls Online',
  detailedDescription: ``,
  contributions: ``,
  challenges: ``,
  company: 'Personal Projects',
  techstack: 'Lua'
}

export const bazgrimstoolbar: Project = {
  name: 'Bazgrims Toolbar and Subtitles',
  description:
    'An addon that keeps tracks of various metrics at the bottom of your screen and allows the use of subtitles in Elder Scrolls Online. Now integerated into Wykkyds Framework',
  detailedDescription: ``,
  contributions: ``,
  challenges: ``,
  company: 'Personal Projects',
  techstack: 'Lua'
}

export const atpclassic: Project = {
  name: 'ATP Classic Scoreboard',
  description:
    'Strongman Scoreboard with an auto-refresh, retrieval from Google Docs, and in-memory cache',
  detailedDescription: ``,
  contributions: ``,
  challenges: ``,
  company: 'Advanced Training and Powerlifting',
  techstack: 'Vue, FastAPI, Google Docs API'
}

export const strongapp: Project = {
  name: 'Strongapp',
  description: 'Barbell plate calculation app that features a simple to use user interface',
  detailedDescription: ``,
  contributions: ``,
  challenges: ``,
  company: 'Personal Projects',
  techstack: 'Ionic, Vue, Android'
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
  atpclassic,
  strongapp
]
