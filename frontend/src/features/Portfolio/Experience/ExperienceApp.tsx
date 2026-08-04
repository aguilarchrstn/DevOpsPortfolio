import React from 'react';
import { Window } from '@/components/molecules/Window/Window';
import { useTranslation } from 'react-i18next';

const experienceData = [
  {
    stage: 'STAGE 02',
    title: 'APPLICATION SYSTEM ADMINISTRATOR',
    company: 'ADEC INNOVATIONS CORPORATION',
    location: 'Alabang, Muntinlupa',
    period: 'APR 2024 – NOV 2025',
    logs: [
      'Orchestrated enterprise CI/CD pipelines and deployment workflows across AWS and OutSystems environments for seamless sprint releases and change requests.',
      'Managed AWS cloud infrastructure components including EC2 instances, RDS databases, S3 buckets, IAM roles, and AWS Lambda functions.',
      'Configured enterprise monitoring and incident reporting dashboards using Site24x7 and AWS CloudWatch to ensure high system availability.',
      'Automated database operations, instance upgrades, test environment provisioning, and SQL executions using PowerShell and automated scripts.',
      'Maintained and optimized Oracle Database environments, including user access management and database dumps.'
    ],
    color: 'var(--nokia-dark)'
  },
  {
    stage: 'STAGE 01',
    title: 'JUNIOR IT LINUX SYSTEM ADMINISTRATOR',
    company: 'Z GETCARE SYSTEMS INC',
    location: 'Clark Freeport Zone, Pampanga',
    period: 'AUG 2021 – APR 2024',
    logs: [
      'Managed full lifecycle operations for Ubuntu Server environments, including OS installation, security hardening, patch management, and performance tuning.',
      'Engineered automated Bash scripts and scheduled Cron jobs for routine maintenance and database backup/recovery.',
      'Containerized application environments using Docker to support multi-component Java, Spring Boot, and Vue.js codebases.',
      'Implemented real-time infrastructure monitoring and alerting systems using Nagios and AWS CloudWatch.',
      'Strengthened system security posture by running OWASP ZAP vulnerability scans and enforcing VPN, MFA, and strict firewall policies.'
    ],
    color: 'var(--nokia-accent)'
  }
];

export const ExperienceApp: React.FC = () => {
  const { t } = useTranslation('portfolio');

  return (
    <Window
      title={t('experience.title')}
      defaultSize={{ width: 600, height: 550 }}
      resizable={true}
      minimizable={true}
      maximizable={true}
      closable={true}
      icon="experience"
    >
      <div className="experience-app p-4" style={{ fontFamily: 'var(--font-tiny)' }}>
        <div className="nes-container is-dark with-title mb-4" style={{ backgroundColor: 'var(--nokia-dark)', borderColor: 'var(--nokia-border)' }}>
          <p className="title" style={{ color: 'var(--nokia-highlight)', fontSize: 'var(--text-xs)' }}>STAGE LOG / WORK EXPERIENCE</p>
          <p style={{ fontSize: 'var(--text-xs)', color: 'var(--nokia-bg)' }}>QUEST TIMELINE STYLE - MISSION STAGES COMPLETED</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
          {experienceData.map((exp, index) => (
            <div 
              key={exp.stage}
              className="nes-container with-title"
              style={{ 
                backgroundColor: 'var(--nokia-bg)', 
                borderColor: 'var(--nokia-border)',
                borderLeft: `6px solid ${exp.color}`,
                position: 'relative'
              }}
            >
              {/* Stage Header */}
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'flex-start',
                marginBottom: 'var(--space-3)',
                paddingBottom: 'var(--space-2)',
                borderBottom: `2px dashed ${exp.color}`
              }}>
                <div>
                  <p style={{ 
                    fontSize: 'var(--text-xs)', 
                    color: exp.color,
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    marginBottom: 'var(--space-1)'
                  }}>
                    {exp.stage}: {exp.title}
                  </p>
                  <p style={{ 
                    fontSize: 'var(--text-xs)', 
                    color: 'var(--nokia-dark)',
                    fontWeight: 'bold',
                    marginBottom: 'var(--space-1)'
                  }}>
                    {exp.company}
                  </p>
                  <p style={{ 
                    fontSize: 'var(--text-xs)', 
                    color: 'var(--nokia-text)'
                  }}>
                    {exp.location} | {exp.period}
                  </p>
                </div>
                <div style={{ 
                  textAlign: 'right',
                  fontSize: 'var(--text-xs)',
                  color: exp.color
                }}>
                  <span className="nes-badge" style={{ backgroundColor: exp.color, color: 'var(--nokia-bg)' }}>
                    COMPLETED
                  </span>
                </div>
              </div>

              {/* Mission Logs */}
              <div style={{ fontSize: 'var(--text-xs)', color: 'var(--nokia-text)', lineHeight: 1.8 }}>
                {exp.logs.map((log, i) => (
                  <div key={i} style={{ 
                    marginBottom: 'var(--space-2)',
                    paddingLeft: 'var(--space-3)',
                    borderLeft: `2px solid ${exp.color}`,
                    position: 'relative'
                  }}>
                    <span style={{ 
                      position: 'absolute', 
                      left: '-6px', 
                      top: '0',
                      color: exp.color,
                      fontSize: 'var(--text-xs)'
                    }}>►</span>
                    {log}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="nes-container is-dark with-title mt-4" style={{ backgroundColor: 'var(--nokia-dark)', borderColor: 'var(--nokia-border)' }}>
          <p className="title" style={{ color: 'var(--nokia-highlight)', fontSize: 'var(--text-xs)' }}>CAREER STATS</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--space-2)', fontSize: 'var(--text-xs)', color: 'var(--nokia-bg)', textAlign: 'center' }}>
            <div><strong>4+</strong><br />YEARS XP</div>
            <div><strong>2</strong><br />STAGES</div>
            <div><strong>10+</strong><br />TECH STACK</div>
            <div><strong>100%</strong><br />UPTIME TARGET</div>
          </div>
        </div>
      </div>
    </Window>
  );
};