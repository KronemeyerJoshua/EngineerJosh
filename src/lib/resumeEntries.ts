import type { ResumeEntry } from './types/resume'

export const microsoftFullstack: ResumeEntry = {
  title: 'Azure Fullstack Engineer',
  company: 'Microsoft',
  description: `
  <ul>
    <li>Designed solutions for an open-source Microsoft Accelerator project to rapidly adopt Azure OpenAI in the public sector that now powers the country of Albania.</li>
    <li>Researched and delivered a real time SharePoint integration, leveraging key azure components to be used with LLM (GPT) that enables customers to ask questions of their SharePoint data.</li>
    <li>Restructured the application to support chat streaming from OpenAI reducing load times by up to 40%.</li>
    <li>Partnered with the project lead to establishing an upgrade path from version 1.0 to 1.1 for over 200 existing deployments.</li>
    <li>Facilitated the onboarding of five contractors through curated documentation and continuous mentorship which expedited tangible contributions.</li>
  </ul>`,
  startDate: new Date(2024, 1),
  location: 'Remote'
}

export const slalom: ResumeEntry = {
  title: 'Fullstack Engineer',
  company: 'Slalom',
  description: `
  <ul>
    <li>Led discovery of modernization of the backend portion of a government state-wide disease tracking system. This discovery was vital in securing the contract against other consulting firms. Utilized .Net Core 8, React, Azure Pipelines, and SQL Server.</li>
    <li>Consulted the migration of spring batch jobs to AWS Canada and SQL Server from DB2 for a major financial institution under a tight timeline from the Canadian government that resulted in on-time and under budget delivery for the customer.</li>
    <li>Collaborated with internal and external teams to drive efficiency of a hospital user portal by creating the insurance record integration and processing from a third-party FTP Server. Originally an estimated 48-hour process was reduced to 24-minutes. Utilized Dell Boomi, Apache POI, Azure Functions, Terraform, Angular, and Groovy Scripts.</li>
    <li>Implemented highly reusable testing tools, fixed 100+ tests, created an Azure Testing CI Pipeline with automated reporting. Automation testing reduced from 72 hours to 2 hours for full end-to-end testing. Homeowners Association Bank test suite utilized protractor, selenium, and restassured.</li>
  </ul>`,
  startDate: new Date(2022, 1),
  endDate: new Date(2024, 1),
  location: 'Remote'
}

export const wellsfargo: ResumeEntry = {
  title: 'Software Engineer',
  company: 'Wells Fargo',
  description: `
  <ul>
    <li>Developed reusable tools for automation testing that utilized Java, Selenium, and RestAssured. These tools would be utilized in both Angular and .Net Core API testing to provide test reports via a CI pipeline within Azure Devops.</li>
    <li>Contributed to the Identity Access Management tools used by the entire company by fixing bugs that had been present in legacy code for years.</li>
    <li>Created a prototype for modernization of their Identity Access Management tools utilizing VueJS and .Net Core after it was requested by senior engineers and management.</li>
  </ul>
  `,
  startDate: new Date(2021, 3),
  endDate: new Date(2022, 1),
  location: 'Chandler, AZ'
}

export const ibiley: ResumeEntry = {
  title: 'ASU Captstone Software Engineer',
  company: 'Ibiley',
  description: `
  <ul>
    <li>Mentored a team of Software Engineers through technological challenges and assisted in finding new solutions for a brand-new administration portal using .NET Core, Entity Framework, Identity, ReactJS, and SQL Server.</li>
    <li>Collaborated directly with the company's marketing manager to develop in-demand features for their clients and staff.</li>
  </ul>
  `,
  startDate: new Date(2020, 8),
  endDate: new Date(2021, 6),
  location: 'Mesa, AZ'
}

export const epicup: ResumeEntry = {
  title: 'Software Engineer',
  company: 'EpicUp',
  description: `
  <ul>
    <li>Designed and created a log backup tool and parser which implemented Apache Parquet, Google Brotli, and Amazon S3 C++ libraries.</li>
    <li>Built automation solutions with Python and Bash for Ubuntu virtual private servers to use squid proxy, anyip, and custom cronjobs which reduced overall setup time by 90%</li>
  </ul>`,
  startDate: new Date(2019, 7),
  endDate: new Date(2021, 3),
  location: 'Mesa, AZ'
}

export const frozenThrone: ResumeEntry = {
  title: 'Software Developer',
  company: 'Frozen Throne (Private World of Warcraft Server)',
  description: `
  <ul>
    <li>Contributed with server owners to fixing multiple boss encounters and highly scripted quest events in the C++ Trinity Core World of Warcraft Emulator. </li>
    <li>Made significant game updates on a live MySQL database with over 500 concurrent connections, fixing over 300 in-game quests, items, and spells improving the quality of life for the players. </li>
    <li>Resolved hundreds of customer support tickets with a 4.6/5 overall satisfaction rating.</li>
  </ul>`,
  startDate: new Date(2014, 5),
  endDate: new Date(2014, 7),
  location: 'Remote'
}

export const allResumeEntries: Array<ResumeEntry> = [
  microsoftFullstack,
  slalom,
  wellsfargo,
  ibiley,
  epicup,
  frozenThrone
]
