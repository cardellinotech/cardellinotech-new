export type CaseStudy = {
  id: string
  title: string
  industry: string
  challenge: string
  solution: string
  outcome: string
  tags: string[]
}

export const caseStudies: CaseStudy[] = [
  {
    id: "ci-pipeline-overhaul",
    title: "CI Pipeline Overhaul: 47 Minutes to Under 4",
    industry: "Series B Fintech · 35 engineers",
    challenge:
      "A Series B fintech startup was running a monorepo with a single GitHub Actions workflow that tested and built every service on every commit. The pipeline took 47 minutes on average, used no caching, and ran all test suites sequentially. Engineers were pushing changes and going for lunch before getting feedback. The slow feedback loop was causing developers to batch unrelated changes into single PRs to avoid multiple long waits, making code review harder and rollbacks more dangerous.",
    solution:
      "I audited the workflow and identified three root causes: no layer caching for Docker builds, no test parallelization, and unnecessary re-runs of tests for services unaffected by a given change. I introduced affected-service detection using git diff against the merge base, so only the services touched by a PR were built and tested. I enabled BuildKit layer caching backed by GitHub Actions cache, cutting Docker build times from 12 minutes to under 90 seconds per service. The test suite was split into parallel matrix jobs. I also separated the lint, unit test, and integration test stages so engineers got lint failures in under 60 seconds rather than waiting 47 minutes.",
    outcome:
      "Pipeline wall time dropped from 47 minutes to 3 minutes 40 seconds for the median PR. Full end-to-end pipeline for a service touching all integration layers runs in under 8 minutes. Engineers pushed 22% more PRs in the month after the change, and average PR size dropped, which the engineering manager attributed directly to the faster feedback loop.",
    tags: [
      "GitHub Actions",
      "Docker",
      "BuildKit",
      "Monorepo",
      "CI Optimization",
      "Test Parallelization",
    ],
  },
  {
    id: "kubernetes-migration",
    title: "EC2 to Kubernetes: 40% Cost Reduction and Zero-Downtime Deploys",
    industry: "Series A SaaS · B2B · 18 engineers",
    challenge:
      "A B2B SaaS company was running 14 microservices on manually provisioned EC2 instances, managed through a mix of Ansible playbooks and hand-edited security groups. Deployments required a maintenance window because the process involved stopping the old instance, replacing it, and restarting. The team had experienced two incidents in the past quarter caused by configuration drift between environments — production had manual changes that staging did not. Monthly AWS costs were EUR 11,400, with most instances overprovisioned at 8–16 vCPUs despite average CPU usage under 10%.",
    solution:
      "I planned and executed a three-month migration to EKS. Phase one was containerization: I wrote production-grade Dockerfiles for each service, introduced multi-stage builds, and ran the containers locally to surface any environment-dependency issues before touching production. Phase two was the Kubernetes layer: I set up an EKS cluster using Terraform, defined a standardized Helm chart library shared across all services, and configured Horizontal Pod Autoscaler for the three latency-sensitive services. Phase three was the cutover: I ran both environments in parallel for two weeks, using weighted routing in Route 53 to shift 10% of traffic to EKS initially, monitoring error rates and p99 latency before shifting the remainder. Deployments moved to a rolling update strategy managed by ArgoCD, with automatic rollback triggered by Prometheus alerts on error rate.",
    outcome:
      "Monthly AWS infrastructure costs dropped from EUR 11,400 to EUR 6,700 — a 41% reduction — through right-sizing pods and using Spot instances for stateless workloads. Zero-downtime deployments became the default; the team has not had a deployment-related incident since the migration. The configuration drift issues were eliminated because all environment configuration is now defined in Helm values files and versioned in Git.",
    tags: [
      "Kubernetes",
      "EKS",
      "Terraform",
      "Helm",
      "ArgoCD",
      "AWS",
      "Cost Optimization",
      "Zero-Downtime Deploys",
    ],
  },
  {
    id: "observability-overhaul",
    title: "From Zero Visibility to Full-Stack Observability in 6 Weeks",
    industry: "Growth-Stage E-Commerce · 25 engineers",
    challenge:
      "A growth-stage e-commerce company had no centralized logging, no distributed tracing, and alerts that consisted of a single CloudWatch CPU alarm that fired too late to be useful. When incidents occurred, engineers SSH-ed into individual containers to read logs. During a Black Friday preparation review, it became clear that the team had no way to identify which service was causing latency spikes in their checkout flow — they only found out something was wrong when customers complained or conversion rates dropped in their analytics dashboard 30 minutes later.",
    solution:
      "I implemented a full observability stack using open-source tooling to avoid vendor lock-in. For metrics, I deployed Prometheus with service discovery configured to automatically scrape all Kubernetes workloads, and built Grafana dashboards covering the four golden signals for each service. For logs, I deployed the Grafana Loki stack with Promtail as the log collector, which replaced the team's previous habit of SSH-ing into pods. For distributed tracing, I instrumented the four core backend services with OpenTelemetry SDKs and shipped traces to Tempo. The final piece was alerting: I defined alert rules in Prometheus for error rate, latency p99, and queue depth, routing them through Alertmanager to a dedicated Slack channel with clear runbook links in each alert.",
    outcome:
      "Mean time to detect (MTTD) dropped from approximately 25 minutes (customer-reported) to under 90 seconds for the alert cases covered by the new rules. During the next peak traffic event, the team identified and resolved a database connection pool exhaustion issue in 12 minutes — an issue they estimate would have caused a 2–3 hour outage under the previous setup. The engineering team now resolves P1 incidents without any SSH access to production containers.",
    tags: [
      "Prometheus",
      "Grafana",
      "Loki",
      "OpenTelemetry",
      "Tempo",
      "Kubernetes",
      "Observability",
      "Alertmanager",
    ],
  },
]
