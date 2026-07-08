export interface ProcessStep {
  no: string
  title: string
  description: string
}

export const processSteps: ProcessStep[] = [
  {
    no: '01',
    title: 'Discover',
    description:
      'Understand the goal, the users, and the constraints — through a brief, notes, or a conversation — before any design work starts.',
  },
  {
    no: '02',
    title: 'Design',
    description:
      'Wireframe the structure, then design the real interface: typography, color, spacing, and motion working together.',
  },
  {
    no: '03',
    title: 'Build',
    description:
      'Turn the design into clean, typed, component-based code — responsive, accessible, and built to be maintained.',
  },
  {
    no: '04',
    title: 'Launch & Support',
    description:
      'Ship it, watch how it performs, and iterate — fixing, refining, and adding what the project needs next.',
  },
]
