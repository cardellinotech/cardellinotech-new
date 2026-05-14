export type EngagementModel = {
  id: string
  title: string
  description: string
  ideal: string
  duration: string
  commitment: string
}

export const engagementModels: EngagementModel[] = [
  {
    id: "project",
    title: "Project",
    description:
      "A scoped engagement with a defined start, finish, and deliverable. We agree on the outcome up front — whether that is a production-ready Kubernetes platform, a rebuilt CI/CD pipeline, or a cloud infrastructure migration — and I work full-time until it ships. You get focused execution without the distraction of competing priorities, and a handover that includes documentation and knowledge transfer so your team can own it afterwards.",
    ideal:
      "Migration projects, platform builds, CI/CD overhauls, or any initiative with a clear before-and-after state.",
    duration: "4–12 weeks",
    commitment: "Full-time",
  },
  {
    id: "retainer",
    title: "Retainer",
    description:
      "Ongoing senior infrastructure capacity on a part-time basis. I embed with your team 2–3 days per week — attending planning, reviewing PRs, responding to incidents, and working through the infrastructure backlog alongside your engineers. This model works well when you need someone who knows your systems deeply over time, not a consultant who needs to re-learn your stack every quarter.",
    ideal:
      "Teams that need senior infra capacity on a sustained basis but are not ready to hire a full-time senior engineer.",
    duration: "3–12 months",
    commitment: "2–3 days per week",
  },
  {
    id: "advisory",
    title: "Advisory",
    description:
      "A lightweight engagement focused on architecture review, incident retrospectives, and technical direction. I review your infrastructure, read your incident reports, and join a weekly or bi-weekly call to give a senior perspective on what your team is building and where the risks are. This model is async-first — most of my input comes through written reviews and comments rather than synchronous meetings.",
    ideal:
      "Teams with junior or mid-level infra engineers who need a senior lens on architecture decisions, incident reviews, or engineering hiring.",
    duration: "Ongoing",
    commitment: "1 day per week or less",
  },
]
