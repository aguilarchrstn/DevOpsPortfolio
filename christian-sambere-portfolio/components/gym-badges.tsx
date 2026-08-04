const ROUTES = [
  {
    route: 'ROUTE 02',
    role: 'Application System Administrator',
    org: 'ADEC Innovations Corp',
    period: 'Apr 2024 - Nov 2025',
    badge: '#cc0000',
    logs: [
      'Orchestrated AWS infrastructure across EC2, RDS, S3, IAM and VPC for production workloads.',
      'Built and maintained CI/CD pipelines with Jenkins, Docker and OutSystems deployments.',
      'Stood up monitoring dashboards in Grafana / Prometheus with CloudWatch alarm routing.',
      'Hardened access control with IAM policies and scheduled OWASP ZAP security scans.',
    ],
  },
  {
    route: 'ROUTE 01',
    role: 'Junior IT Linux System Administrator',
    org: 'Z GetCare Systems Inc',
    period: 'Aug 2021 - Apr 2024',
    badge: '#3888d8',
    logs: [
      'Hardened Ubuntu servers: patch cycles, firewall rules and SSH key-only access.',
      'Automated routine ops with Bash scripting and cron-driven maintenance jobs.',
      'Containerized internal services with Docker to standardize deployments.',
      'Monitored uptime with Nagios and resolved incidents through log triage.',
    ],
  },
]

export function GymBadges() {
  return (
    <section aria-labelledby="journey-heading" className="flex flex-col gap-6">
      <h2
        id="journey-heading"
        className="text-sm leading-relaxed sm:text-lg"
        style={{ color: 'var(--primary)' }}
      >
        {'\u25B6'} GYM BADGES / WORK EXPERIENCE
      </h2>

      <ol className="flex flex-col gap-6">
        {ROUTES.map((entry) => (
          <li key={entry.route} className="nes-container is-rounded with-title">
            <p className="title" style={{ fontSize: '9px' }}>
              {entry.route}
            </p>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="inline-block h-6 w-6 shrink-0"
                    style={{
                      backgroundColor: entry.badge,
                      boxShadow: '0 0 0 3px #202020',
                    }}
                  />
                  <h3 className="text-[11px] leading-relaxed sm:text-sm">
                    {entry.role}
                  </h3>
                </div>
                <span
                  className="text-[9px] leading-relaxed"
                  style={{ color: 'var(--muted-foreground)' }}
                >
                  {entry.period}
                </span>
              </div>

              <p
                className="text-[10px] leading-relaxed"
                style={{ color: 'var(--accent)' }}
              >
                @ {entry.org}
              </p>

              <ul className="flex flex-col gap-3">
                {entry.logs.map((log) => (
                  <li
                    key={log}
                    className="text-pretty text-[10px] leading-relaxed"
                  >
                    <span style={{ color: 'var(--primary)' }}>
                      {'\u25B6'}
                    </span>{' '}
                    {log}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
