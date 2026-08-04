import React from 'react';
import { Window } from '@/components/molecules/Window/Window';
import { useTranslation } from 'react-i18next';

export const HeroApp: React.FC = () => {
  const { t } = useTranslation('portfolio');

  return (
    <Window
      title={t('hero.title')}
      defaultSize={{ width: 600, height: 500 }}
      resizable={true}
      minimizable={true}
      maximizable={true}
      closable={true}
      icon="hero"
    >
      <div className="hero-app p-4" style={{ fontFamily: 'var(--font-tiny)' }}>
        {/* Status Bar - Space Impact Style */}
        <div className="nes-container is-dark with-title mb-4" style={{ backgroundColor: 'var(--nokia-dark)', borderColor: 'var(--nokia-border)' }}>
          <p className="title" style={{ color: 'var(--nokia-highlight)', fontSize: 'var(--text-xs)' }}>STATUS BAR</p>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 'var(--text-xs)', color: 'var(--nokia-bg)' }}>
            <span>SCORE: <span className="animate-blink">004000</span></span>
            <span>LIVES: <span role="img" aria-label="3 lives">❤️❤️❤️</span></span>
            <span>LEVEL: DEVOPS</span>
          </div>
        </div>

        {/* Main Title */}
        <div className="text-center mb-4" style={{ border: '3px solid var(--nokia-border)', padding: 'var(--space-4)', backgroundColor: 'var(--nokia-bg)' }}>
          <h1 style={{ 
            fontFamily: 'var(--font-tiny)', 
            fontSize: 'var(--text-xl)', 
            color: 'var(--nokia-dark)',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            textShadow: '2px 2px 0 var(--nokia-highlight)',
            marginBottom: 'var(--space-2)'
          }}>
            CHRISTIAN SAMBERE AGUILAR
          </h1>
          <h2 style={{ 
            fontFamily: 'var(--font-tiny)', 
            fontSize: 'var(--text-md)', 
            color: 'var(--nokia-accent)',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            LEVEL: DEVOPS & SYSTEMS ADMINISTRATOR
          </h2>
        </div>

        {/* Floating Icons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-4)', marginBottom: 'var(--space-4)', flexWrap: 'wrap' }}>
          <span className="nes-icon trophy is-large" style={{ fontSize: '2rem', color: 'var(--nokia-dark)' }} title="Achievements" />
          <span className="nes-icon gear is-large" style={{ fontSize: '2rem', color: 'var(--nokia-accent)' }} title="Technical Skills" />
          <span className="nes-icon star is-large" style={{ fontSize: '2rem', color: 'var(--nokia-highlight)' }} title="Featured Projects" />
          <span className="nes-icon heart is-large" style={{ fontSize: '2rem', color: '#c0392b' }} title="Passion for DevOps" />
        </div>

        {/* Quick Stats Box */}
        <div className="nes-container with-title" style={{ backgroundColor: 'var(--nokia-bg)', borderColor: 'var(--nokia-border)' }}>
          <p className="title" style={{ color: 'var(--nokia-dark)', fontSize: 'var(--text-sm)' }}>QUICK STATS</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-2)', fontSize: 'var(--text-xs)', color: 'var(--nokia-text)' }}>
            <div><strong>LOCATION:</strong> Mabalacat City, Pampanga</div>
            <div><strong>EXPERIENCE:</strong> 4+ Years</div>
            <div><strong>EMAIL:</strong> aguilarchan1215@gmail.com</div>
            <div><strong>PHONE:</strong> 09603011461</div>
            <div><strong>LINKEDIN:</strong> linkedin.com/in/chrstn-aguilar</div>
            <div><strong>GITHUB:</strong> github.com/aguilarchrstn</div>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="nes-container is-dark with-title mt-4" style={{ backgroundColor: 'var(--nokia-dark)', borderColor: 'var(--nokia-border)' }}>
          <p className="title" style={{ color: 'var(--nokia-highlight)', fontSize: 'var(--text-xs)' }}>MISSION BRIEFING</p>
          <p style={{ fontSize: 'var(--text-xs)', color: 'var(--nokia-bg)', lineHeight: 1.6 }}>
            Results-driven DevOps and Systems Administrator with over 4 years of experience optimizing cloud infrastructure, 
            automating deployment workflows, and ensuring enterprise-grade system availability. Proven track record in orchestrating 
            CI/CD pipelines, managing AWS environments (EC2, RDS, S3, Lambda), containerizing applications with Docker, and 
            implementing robust monitoring solutions using Prometheus, Grafana, and AWS CloudWatch. Skilled in reducing operational 
            toil through Bash, PowerShell, and Ansible automation.
          </p>
        </div>

        {/* Education */}
        <div className="nes-container with-title mt-4" style={{ backgroundColor: 'var(--nokia-bg)', borderColor: 'var(--nokia-border)' }}>
          <p className="title" style={{ color: 'var(--nokia-dark)', fontSize: 'var(--text-xs)' }}>EDUCATION</p>
          <div style={{ fontSize: 'var(--text-xs)', color: 'var(--nokia-text)' }}>
            <strong>Bachelor of Science in Computer Engineering</strong> | 2020<br />
            St. Nicolas College of Business and Technology — San Fernando City, Pampanga
          </div>
        </div>
      </div>
    </Window>
  );
};