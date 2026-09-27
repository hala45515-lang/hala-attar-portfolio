import omsDashboard from '../assets/images/oms-dashboard.png'
import omsOrders from '../assets/images/oms-orders.png'
import omsAnalytics from '../assets/images/oms-analytics.png'
import streamvibe from '../assets/images/streamvibe.png'
import aleppoKitchen from '../assets/images/aleppo-kitchen.png'
import trendyStore from '../assets/images/trendy-store.png'
import calculator from '../assets/images/calculator.png'
import glowcart from '../assets/images/glowcart.png'
import digitalClock from '../assets/images/digital-clock.png'
import todoApp from '../assets/images/todo-app.png'

export interface OmsTab {
  label: string
  url: string
  image: string
}

export const featuredProject = {
  badge: '★ Featured Project',
  title: 'Order Management System',
  description:
    'A full-scale business management system built with React.js and MongoDB. Features include a real-time analytics dashboard, complete order lifecycle management (create, approve, reject, ship), advanced filtering and search, Excel and PDF export, and support for 1000+ orders. Designed with a clean, professional UI focused on usability and performance.',
  tags: ['React.js', 'JavaScript', 'Tailwind CSS', 'MongoDB'],
  link: 'https://github.com/hala45515-lang',
  linkLabel: 'GitHub',
  linkNote: 'Private Repo',
  tabs: [
    { label: 'Dashboard', url: 'app.oms.dashboard / dashboard', image: omsDashboard },
    { label: 'Orders', url: 'app.oms.dashboard / orders', image: omsOrders },
    { label: 'Analytics', url: 'app.oms.dashboard / analytics', image: omsAnalytics },
  ] satisfies OmsTab[],
}

export interface MoreProject {
  no: string
  title: string
  description: string
  tags: string
  link: string
  image: string
}

export const moreProjects: MoreProject[] = [
  {
    no: '01',
    title: 'Movie World',
    description: 'A Netflix-inspired movie streaming interface with dynamic browsing.',
    tags: 'React.js / Tailwind',
    link: 'https://team-project-ivory-two.vercel.app/',
    image: streamvibe,
  },
  {
    no: '02',
    title: 'Aleppo Kitchen',
    description: 'A warm, appetite-driven restaurant website with menu and ordering.',
    tags: 'React.js / JavaScript',
    link: 'https://aleppo-kitchen-with-react.vercel.app/',
    image: aleppoKitchen,
  },
  {
    no: '03',
    title: 'Trendy Store',
    description: 'A clean e-commerce storefront with cart, filtering, and checkout flow.',
    tags: 'React.js / Tailwind',
    link: 'https://hala-trendy-store.vercel.app/',
    image: trendyStore,
  },
  {
    no: '04',
    title: 'Calculator',
    // TODO(Hala): confirm the tech stack tags below match what you actually built this with.
    description: 'An advanced calculator with scientific mode, keyboard shortcuts, and a clean dark UI.',
    tags: 'JavaScript',
    link: 'https://hala-calculator.vercel.app/',
    image: calculator,
  },
  {
    no: '05',
    title: 'GlowCart',
    description: 'A beauty & makeup e-commerce concept with shade matching, routines, and curated looks.',
    tags: 'React.js / Tailwind',
    link: 'https://glowup-store-iota.vercel.app/',
    image: glowcart,
  },
  {
    no: '06',
    title: 'Digital Clock',
    description: 'A glassmorphic digital clock with a live date, day, and 24H/12H toggle over an animated gradient backdrop.',
    tags: 'JavaScript / CSS',
    link: 'https://digital-clock-one-rosy.vercel.app/',
    image: digitalClock,
  },
  {
    no: '07',
    title: 'My Tasks',
    description: 'A to-do list app with task filtering, progress tracking, and a clean gradient UI.',
    tags: 'JavaScript / CSS',
    link: 'https://to-do-app-list-ten.vercel.app/',
    image: todoApp,
  },
]
