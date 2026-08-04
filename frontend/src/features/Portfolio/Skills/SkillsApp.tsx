import React from 'react';
import { Window } from '@/components/molecules/Window/Window';
import { useTranslation } from 'react-i18next';

const skillCategories = [
  {
    title: 'CLOUD INFRASTRUCTURE',
    icon: 'cloud',
    skills: ['AWS EC2', 'AWS RDS', 'AWS S3', 'AWS IAM', 'AWS VPC', 'AWS CloudWatch', 'AWS Lambda'],
    color: 'var(--nokia-dark)'
  },
  {
    title: 'DEVOPS & CI/CD',
    icon: 'gear',
    skills: ['Docker', 'Jenkins', 'Git/SVN', 'OutSystems', 'Ansible'],
    color: 'var(--nokia-accent)'
  },
  {
    title: 'SCRIPTING & AUTOMATION',
    icon: 'terminal',
    skills: ['Bash', 'PowerShell', 'Python', 'Cron Jobs'],
    color: 'var(--nokia-highlight)'
  },
  {
    title: 'MONITORING & SECURITY',
    icon: 'shield',
    skills: ['Grafana', 'Prometheus', 'Nagios', 'OWASP ZAP'],
    color: '#c0392b'
  },
  {
    title: 'OPERATING SYSTEMS',
    icon: 'computer',
    skills: ['Ubuntu Server', 'Linux/Unix', 'Windows Server'],
    color: 'var(--nokia-border)'
  },
  {
    title: 'DATABASES',
    icon: 'database',
    skills: ['PostgreSQL', 'Oracle Database'],
    color: 'var(--nokia-dark)'
  }
];

export const SkillsApp: React.FC = () => {
  const { t } = useTranslation('portfolio');

  return (
    <Window
      title={t('skills.title')}
      defaultSize={{ width: 550, height: 500 }}
      resizable={true}
      minimizable={true}
      maximizable={true}
      closable={true}
      icon="skills"
    >
      <div className="skills-app p-4" style={{ fontFamily: 'var(--font-tiny)' }}>
        <div className="nes-container is-dark with-title mb-4" style={{ backgroundColor: 'var(--nokia-dark)', borderColor: 'var(--nokia-border)' }}>
          <p className="title" style={{ color: 'var(--nokia-highlight)', fontSize: 'var(--text-xs)' }}>PLAYER STATS / TECHNICAL SKILLS</p>
          <p style={{ fontSize: 'var(--text-xs)', color: 'var(--nokia-bg)' }}>BRICK GAME LAYOUT - SELECT A CATEGORY TO VIEW DETAILS</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 'var(--space-3)' }}>
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="nes-container with-title"
              style={{ 
                backgroundColor: 'var(--nokia-bg)', 
                borderColor: 'var(--nokia-border)',
                borderLeft: `6px solid ${category.color}`,
                transition: 'transform var(--duration-fast) var(--ease-out)',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <p className="title" style={{ 
                color: category.color, 
                fontSize: 'var(--text-xs)',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                <span className={`nes-icon ${category.icon}`} style={{ marginRight: 'var(--space-2)', verticalAlign: 'middle' }} />
                {category.title}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-1)' }}>
                {category.skills.map((skill, i) => (
                  <span 
                    key={skill}
                    className="nes-badge"
                    style={{ 
                      backgroundColor: category.color, 
                      color: 'var(--nokia-bg)',
                      fontSize: 'var(--text-xs)',
                      fontFamily: 'var(--font-tiny)',
                      margin: 'var(--space-1)'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="nes-container is-dark with-title mt-4" style={{ backgroundColor: 'var(--nokia-dark)', borderColor: 'var(--nokia-border)' }}>
          <p className="title" style={{ color: 'var(--nokia-highlight)', fontSize: 'var(--text-xs)' }}>LEGEND</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-3)', fontSize: 'var(--text-xs)', color: 'var(--nokia-bg)' }}>
            <span>▲ CLOUD = AWS ECOSYSTEM</span>
            <span>⚙ DEVOPS = PIPELINE TOOLS</span>
            <span>▼ SCRIPTING = AUTOMATION</span>
            <span>◆ SECURITY = MONITORING</span>
            <span>■ OS = LINUX/WINDOWS</span>
            <span>● DB = POSTGRES/ORACLE</span>
          </div>
        </div>
      </div>
    </Window>
  );
};