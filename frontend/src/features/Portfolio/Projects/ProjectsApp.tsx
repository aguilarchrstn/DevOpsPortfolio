import React from 'react';
import { Window } from '@/components/molecules/Window/Window';
import { useTranslation } from 'react-i18next';

const projectsData = [
  {
    title: 'POSTGRESQL AUTOMATED MAINTENANCE',
    description: 'Implemented automated scripts to identify and clean dead tuples in PostgreSQL, optimizing database performance and reducing bloat.',
    tech: ['PostgreSQL', 'Bash', 'Cron', 'SQL'],
    icon: 'database',
    color: 'var(--nokia-dark)'
  },
  {
    title: 'SYSTEM UTILIZATION ALERTING',
    description: 'Built automated CPU and memory monitoring notification systems using Bash scripting and Cron schedules for proactive incident response.',
    tech: ['Bash', 'Cron', 'Linux', 'Monitoring'],
    icon: 'chart',
    color: 'var(--nokia-accent)'
  },
  {
    title: 'INFRASTRUCTURE MONITORING STACK',
    description: 'Deployed and configured Grafana and Prometheus monitoring stacks for real-time metrics visibility and alerting across environments.',
    tech: ['Grafana', 'Prometheus', 'Docker', 'Alerting'],
    icon: 'signal',
    color: 'var(--nokia-highlight)'
  },
  {
    title: 'AUTOMATED BACKUP & RECOVERY SYSTEM',
    description: 'Designed automated backup and recovery pipelines operating from replica data stores ensuring RPO/RTO compliance.',
    tech: ['Bash', 'AWS S3', 'Docker', 'Cron'],
    icon: 'archive',
    color: '#c0392b'
  },
  {
    title: 'CI/CD PIPELINE INTEGRATIONS',
    description: 'Developed Jenkins CI/CD pipeline integrations for automated testing, building, and deployment across multiple environments.',
    tech: ['Jenkins', 'Docker', 'Git', 'AWS'],
    icon: 'gear',
    color: 'var(--nokia-border)'
  },
  {
    title: 'AI-ASSISTANT & RANDOMCHATMATCH',
    description: 'Personal applications including AI-Assistant and RandomChatmatch demonstrating full-stack development capabilities.',
    tech: ['React', 'Node.js', 'WebSocket', 'AI/ML'],
    icon: 'star',
    color: 'var(--nokia-dark)'
  }
];

export const ProjectsApp: React.FC = () => {
  const { t } = useTranslation('portfolio');

  return (
    <Window
      title={t('projects.title')}
      defaultSize={{ width: 650, height: 550 }}
      resizable={true}
      minimizable={true}
      maximizable={true}
      closable={true}
      icon="projects"
    >
      <div className="projects-app p-4" style={{ fontFamily: 'var(--font-tiny)' }}>
        <div className="nes-container is-dark with-title mb-4" style={{ backgroundColor: 'var(--nokia-dark)', borderColor: 'var(--nokia-border)' }}>
          <p className="title" style={{ color: 'var(--nokia-highlight)', fontSize: 'var(--text-xs)' }}>INVENTORY / KEY PROJECTS</p>
          <p style={{ fontSize: 'var(--text-xs)', color: 'var(--nokia-bg)' }}>SNAKE-INSPIRED GRID - NAVIGATE THROUGH ACHIEVEMENTS</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-3)' }}>
          {projectsData.map((project, index) => (
            <div 
              key={project.title}
              className="nes-container with-title"
              style={{ 
                backgroundColor: 'var(--nokia-bg)', 
                borderColor: 'var(--nokia-border)',
                borderTop: `4px solid ${project.color}`,
                transition: 'all var(--duration-fast) var(--ease-out)',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = `0 4px 0 ${project.color}`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: 'var(--space-2)',
                marginBottom: 'var(--space-2)'
              }}>
                <span className={`nes-icon ${project.icon} is-large`} style={{ color: project.color, fontSize: '1.5rem' }} />
                <p className="title" style={{ 
                  color: project.color, 
                  fontSize: 'var(--text-xs)',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  margin: 0
                }}>
                  {project.title}
                </p>
              </div>

              <p style={{ 
                fontSize: 'var(--text-xs)', 
                color: 'var(--nokia-text)',
                lineHeight: 1.5,
                marginBottom: 'var(--space-3)'
              }}>
                {project.description}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-1)' }}>
                {project.tech.map((tech, i) => (
                  <span 
                    key={tech}
                    className="nes-badge"
                    style={{ 
                      backgroundColor: project.color, 
                      color: 'var(--nokia-bg)',
                      fontSize: 'var(--text-xs)',
                      fontFamily: 'var(--font-tiny)'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Link */}
        <div className="nes-container is-dark with-title mt-4" style={{ backgroundColor: 'var(--nokia-dark)', borderColor: 'var(--nokia-border)', textAlign: 'center' }}>
          <p className="title" style={{ color: 'var(--nokia-highlight)', fontSize: 'var(--text-xs)' }}>SOURCE CODE</p>
          <a 
            href="https://github.com/aguilarchrstn" 
            target="_blank" 
            rel="noopener noreferrer"
            className="nes-btn is-success"
            style={{ fontFamily: 'var(--font-tiny)', fontSize: 'var(--text-xs)' }}
          >
            <span className="nes-icon github" style={{ marginRight: 'var(--space-2)' }} />
            VIEW ON GITHUB
          </a>
        </div>
      </div>
    </Window>
  );
};