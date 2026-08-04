const ITEMS = [
  {
    name: 'PostgreSQL Automated Maintenance',
    effect:
      'Scheduled vacuum / analyze routines that clear dead tuples and keep query plans fast.',
    icon: 'nes-icon coin is-small',
    stack: 'Bash · Cron · PostgreSQL',
  },
  {
    name: 'System Utilization Alerting',
    effect:
      'CPU and memory threshold triggers that fire notifications before saturation hits.',
    icon: 'nes-icon heart is-small',
    stack: 'Bash · Cron · Mail',
  },
  {
    name: 'Infrastructure Monitoring Stack',
    effect:
      'Grafana + Prometheus deployment with exporters and dashboards for every node.',
    icon: 'nes-icon trophy is-small',
    stack: 'Grafana · Prometheus · Docker',
  },
  {
    name: 'Automated Backup & Recovery',
    effect:
      'Replica pipelines with verified restore drills and retention-managed snapshots.',
    icon: 'nes-icon star is-small',
    stack: 'AWS RDS · S3 · Bash',
  },
]

export function KeyItems() {
  return (
    <section aria-labelledby="items-heading" className="flex flex-col gap-6">
      <h2
        id="items-heading"
        className="text-sm leading-relaxed sm:text-lg"
        style={{ color: 'var(--primary)' }}
      >
        {'\u25B6'} BAG / KEY PROJECTS
      </h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {ITEMS.map((item) => (
          <article
            key={item.name}
            className="nes-container is-rounded flex flex-col gap-4"
          >
            <i className={item.icon} aria-hidden="true" />
            <h3 className="text-pretty text-[10px] leading-relaxed">
              {item.name}
            </h3>
            <p
              className="text-pretty text-[9px] leading-relaxed"
              style={{ color: 'var(--muted-foreground)' }}
            >
              {item.effect}
            </p>
            <p
              className="mt-auto text-[8px] leading-relaxed"
              style={{ color: 'var(--accent)' }}
            >
              {item.stack}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
