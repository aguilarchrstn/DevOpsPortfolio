const MOVE_SLOTS = [
  {
    type: 'CLOUD INFRASTRUCTURE',
    mastery: 92,
    color: '#3888d8',
    moves: ['AWS EC2', 'RDS', 'S3', 'IAM', 'VPC', 'CloudWatch', 'Lambda'],
  },
  {
    type: 'DEVOPS & CI/CD',
    mastery: 88,
    color: '#cc0000',
    moves: ['Docker', 'Jenkins', 'Git / SVN', 'OutSystems', 'Ansible'],
  },
  {
    type: 'SCRIPTING & AUTOMATION',
    mastery: 95,
    color: '#50b848',
    moves: ['Bash', 'PowerShell', 'Python', 'Cron jobs'],
  },
  {
    type: 'MONITORING & SECURITY',
    mastery: 82,
    color: '#4880c8',
    moves: ['Grafana', 'Prometheus', 'Nagios', 'OWASP ZAP'],
  },
]

export function MoveSet() {
  return (
    <section aria-labelledby="moves-heading" className="flex flex-col gap-6">
      <h2
        id="moves-heading"
        className="text-sm leading-relaxed sm:text-lg"
        style={{ color: 'var(--primary)' }}
      >
        {'\u25B6'} MOVE SET / TECHNICAL SKILLS
      </h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {MOVE_SLOTS.map((slot) => (
          <div key={slot.type} className="nes-container is-rounded with-title">
            <p className="title" style={{ fontSize: '9px' }}>
              {slot.type}
            </p>

            <ul className="flex flex-wrap gap-2">
              {slot.moves.map((move) => (
                <li
                  key={move}
                  className="px-2 py-1 text-[8px] leading-relaxed"
                  style={{
                    backgroundColor: slot.color,
                    color: '#ffffff',
                    boxShadow:
                      'inset -2px -2px 0 rgba(32,32,32,0.35), 0 0 0 2px #202020',
                  }}
                >
                  {move}
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-col gap-2">
              <span className="text-[9px] leading-relaxed">MASTERY</span>
              <progress
                className="nes-progress is-primary"
                value={slot.mastery}
                max={100}
                aria-label={`${slot.type} mastery`}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
