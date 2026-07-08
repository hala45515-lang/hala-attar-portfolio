// TODO(Hala): These are SAMPLE testimonials written to preview the design —
// not real quotes. Swap them for real client/collaborator feedback before
// sharing the site publicly, so nothing here reads as a fabricated endorsement.
export interface Testimonial {
  quote: string
  name: string
  role: string
  initials: string
  avatarColor: string
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Hala took a messy set of requirements and turned them into a clean, working dashboard faster than I expected. She asked the right questions upfront, so there were almost no surprises later.",
    name: 'Ahmad K.',
    role: 'Small Business Owner',
    initials: 'AK',
    avatarColor: 'linear-gradient(135deg, #A78BFA, #7B5EA7)',
  },
  {
    quote:
      "What stood out was the attention to detail — spacing, loading states, empty states, all the little things most people skip. The final build felt polished, not just functional.",
    name: 'Sara M.',
    role: 'Product Manager',
    initials: 'SM',
    avatarColor: 'linear-gradient(135deg, #C9B6FF, #5B3F9E)',
  },
  {
    quote:
      "Great communicator. She flagged trade-offs early instead of after the fact, and the handoff was smooth because the code was actually readable.",
    name: 'Yousef T.',
    role: 'Startup Founder',
    initials: 'YT',
    avatarColor: 'linear-gradient(135deg, #7B5EA7, #A78BFA)',
  },
]
