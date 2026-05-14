export type Service = {
  id: string
  title: string
  description: string
  tools: string[]
  outcome: string
}

export const services: Service[] = [
  {
    id: "cicd-automation",
    title: "CI/CD & Automation",
    description:
      "Slow, brittle pipelines are a tax on every engineer on your team. I design build systems that fail fast, cache aggressively, and ship reliably — from trunk-based development to full GitOps rollout pipelines with automated rollback. Whether you are running a monorepo or dozens of microservices, I will make your pipeline something engineers trust instead of fear.",
    tools: [
      "GitHub Actions",
      "GitLab CI",
      "ArgoCD",
      "Terraform",
      "Buildkit",
      "Kaniko",
      "Nexus",
      "SonarQube",
    ],
    outcome:
      "Teams go from 40-minute, flaky pipelines to sub-5-minute builds with zero manual intervention on deployment day.",
  },
  {
    id: "kubernetes-containers",
    title: "Kubernetes & Container Orchestration",
    description:
      "Running containers on a single machine is easy — running them reliably at scale with zero downtime is not. I set up production-grade Kubernetes clusters from scratch, harden them for multi-tenant workloads, and design Helm chart libraries that make deploying a new service a 10-minute job for any engineer. I also untangle existing clusters that have grown organically into operational nightmares.",
    tools: [
      "Kubernetes",
      "Helm",
      "ArgoCD",
      "Kustomize",
      "Istio",
      "cert-manager",
      "Keda",
      "Velero",
    ],
    outcome:
      "Zero-downtime deployments become the default, with resource costs cut by 30–50% through right-sizing and autoscaling.",
  },
  {
    id: "cloud-infrastructure",
    title: "Cloud Infrastructure",
    description:
      "Infrastructure that was provisioned by hand accumulates invisible risk — nobody knows what exists, what it costs, or whether it is secure. I replace that with fully codified IaC across AWS, GCP, or Azure: versioned, reviewed, and deployed the same way as application code. I also run cost optimization reviews that routinely surface five-figure annual savings without sacrificing reliability.",
    tools: [
      "Terraform",
      "Pulumi",
      "AWS",
      "Google Cloud",
      "Azure",
      "Terragrunt",
      "AWS Control Tower",
      "Open Policy Agent",
    ],
    outcome:
      "Cloud costs drop 20–40% within the first quarter, and every resource is auditable, reproducible, and compliant.",
  },
  {
    id: "platform-engineering",
    title: "Platform Engineering",
    description:
      "When infrastructure knowledge is siloed in one person, scaling the team means scaling the bottleneck. I build internal developer platforms that give engineers self-service access to infrastructure — production-like environments on demand, standardized service templates, and integrated observability from day one. The result is a platform where the right way is also the easy way.",
    tools: [
      "Backstage",
      "Crossplane",
      "Prometheus",
      "Grafana",
      "OpenTelemetry",
      "Loki",
      "Terraform",
      "GitHub Actions",
    ],
    outcome:
      "Onboarding a new service drops from a week of back-and-forth tickets to a self-service workflow completed in under an hour.",
  },
]
