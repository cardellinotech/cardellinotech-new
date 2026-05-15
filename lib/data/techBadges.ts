export interface TechBadge {
  name: string
  logoPath: string
  altText: string
}

export const techBadges: TechBadge[] = [
  { name: "AWS", logoPath: "/logos/aws.svg", altText: "Amazon Web Services" },
  { name: "Google Cloud", logoPath: "/logos/gcp.svg", altText: "Google Cloud Platform" },
  { name: "Azure", logoPath: "/logos/azure.svg", altText: "Microsoft Azure" },
  { name: "Kubernetes", logoPath: "/logos/kubernetes.svg", altText: "Kubernetes" },
  { name: "Terraform", logoPath: "/logos/terraform.svg", altText: "Terraform" },
  { name: "Pulumi", logoPath: "/logos/pulumi.svg", altText: "Pulumi" },
  { name: "GitHub Actions", logoPath: "/logos/githubactions.svg", altText: "GitHub Actions" },
  { name: "GitLab CI", logoPath: "/logos/gitlab.svg", altText: "GitLab CI/CD" },
  { name: "ArgoCD", logoPath: "/logos/argocd.svg", altText: "ArgoCD" },
  { name: "Helm", logoPath: "/logos/helm.svg", altText: "Helm" },
  { name: "Prometheus", logoPath: "/logos/prometheus.svg", altText: "Prometheus" },
  { name: "Grafana", logoPath: "/logos/grafana.svg", altText: "Grafana" },
  { name: "Datadog", logoPath: "/logos/datadog.svg", altText: "Datadog" },
]
