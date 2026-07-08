import type { IconType } from 'react-icons'
import {
  SiJavascript,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiFigma,
  SiRedux,
  SiBootstrap,
} from 'react-icons/si'

export interface Skill {
  name: string
  level: number
  category: 'Core Languages' | 'Frameworks & Styling' | 'Design'
  icon: IconType
  color: string
  blurb: string
}

export const skills: Skill[] = [
  {
    name: 'JavaScript',
    level: 92,
    category: 'Core Languages',
    icon: SiJavascript,
    color: '#F7DF1E',
    blurb: 'ES6+, async patterns, DOM & performance-minded code.',
  },
  {
    name: 'TypeScript',
    level: 82,
    category: 'Core Languages',
    icon: SiTypescript,
    color: '#3178C6',
    blurb: 'Typed components, generics, and safer refactors.',
  },
  {
    name: 'React.js',
    level: 90,
    category: 'Frameworks & Styling',
    icon: SiReact,
    color: '#61DAFB',
    blurb: 'Hooks, state architecture, and reusable component systems.',
  },
  {
    name: 'Next.js',
    level: 80,
    category: 'Frameworks & Styling',
    icon: SiNextdotjs,
    color: '#EDEDED',
    blurb: 'Routing, rendering strategies, and production builds.',
  },
  {
    name: 'Tailwind CSS',
    level: 93,
    category: 'Frameworks & Styling',
    icon: SiTailwindcss,
    color: '#38BDF8',
    blurb: 'Utility-first styling with clean, scalable design systems.',
  },
  {
    // TODO(Hala): tweak the level (0-100) to match your real comfort with it.
    name: 'Redux Toolkit',
    level: 78,
    category: 'Frameworks & Styling',
    icon: SiRedux,
    color: '#764ABC',
    blurb: 'Predictable global state with slices, RTK Query, and clean data flow.',
  },
  {
    // TODO(Hala): tweak the level (0-100) to match your real comfort with it.
    name: 'Bootstrap',
    level: 84,
    category: 'Frameworks & Styling',
    icon: SiBootstrap,
    color: '#7952B3',
    blurb: 'Responsive grid, components, and rapid prototyping.',
  },
  {
    name: 'UI/UX Design',
    level: 85,
    category: 'Design',
    icon: SiFigma,
    color: '#A78BFA',
    blurb: 'Wireframes to pixel-perfect, interaction-focused interfaces.',
  },
]

export const skillCategories = ['Core Languages', 'Frameworks & Styling', 'Design'] as const
