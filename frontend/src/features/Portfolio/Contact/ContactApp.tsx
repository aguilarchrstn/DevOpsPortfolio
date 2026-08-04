import React from 'react';
import { Window } from '@/components/molecules/Window/Window';
import { useTranslation } from 'react-i18next';

const contactLinks = [
  {
    label: 'GITHUB',
    url: 'https://github.com/aguilarchrstn',
    icon: 'github',
    color: 'var(--nokia-dark)',
    btnClass: 'is-success'
  },
  {
    label: 'LINKEDIN',
    url: 'https://linkedin.com/in/chrstn-aguilar',
    icon: 'linkedin',
    color: '#0077b5',
    btnClass: 'is-primary'
  },
  {
    label: 'EMAIL',
    url: 'mailto:aguilarchan1215@gmail.com',
    icon: 'mail',
    color: 'var(--nokia-accent)',
    btnClass: 'is-warning'
  }
];

export const ContactApp: React.FC = () => {
  const { t } = useTranslation('portfolio');

  return (
    <Window
      title={t('contact.title')}
      defaultSize={{ width: 450, height: 400 }}
      resizable={true}
      minimizable={true}
      maximizable={true}
      closable={true}
      icon="contact"
    >
      <div className="contact-app p-4" style={{ fontFamily: 'var(--font-tiny)' }}>
        <div className="nes-container is-dark with-title mb-4" style={{ backgroundColor: 'var(--nokia-dark)', borderColor: 'var(--nokia-border)' }}>
          <p className="title" style={{ color: 'var(--nokia-highlight)', fontSize: 'var(--text-xs)' }}>CONTROLLER / CONTACT FOOTER</p>
          <p style={{ fontSize: 'var(--text-xs)', color: 'var(--nokia-bg)' }}>ARCADE MACHINE INTERFACE - SELECT ACTION</p>
        </div>

        {/* Controller Visual */}
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          gap: 'var(--space-3)',
          marginBottom: 'var(--space-4)',
          padding: 'var(--space-4)',
          backgroundColor: 'var(--nokia-bg)',
          border: '3px solid var(--nokia-border)',
          borderRadius: '8px'
        }}>
          <div style={{ 
            width: '120px', 
            height: '120px', 
            border: '4px solid var(--nokia-dark)',
            borderRadius: '50%',
            backgroundColor: 'var(--nokia-highlight)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            boxShadow: 'inset 0 -4px 0 var(--nokia-accent), 0 4px 0 var(--nokia-shadow)'
          }}>
            <div style={{ 
              width: '60px', 
              height: '60px', 
              border: '3px solid var(--nokia-dark)',
              borderRadius: '50%',
              backgroundColor: 'var(--nokia-bg)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: 'inset 0 -2px 0 var(--nokia-accent)'
            }}>
              <span className="nes-icon crosshair" style={{ fontSize: '1.5rem', color: 'var(--nokia-dark)' }} />
            </div>
          </div>
          <p style={{ 
            fontSize: 'var(--text-xs)', 
            color: 'var(--nokia-dark)',
            textTransform: 'uppercase',
            letterSpacing: '2px'
          }}>
            D-PAD CONTROLLER
          </p>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
          {contactLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.url}
              target={link.url.startsWith('mailto') ? '_self' : '_blank'}
              rel={link.url.startsWith('mailto') ? '' : 'noopener noreferrer'}
              className={`nes-btn ${link.btnClass}`}
              style={{ 
                fontFamily: 'var(--font-tiny)', 
                fontSize: 'var(--text-sm)',
                padding: 'var(--space-3) var(--space-4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 'var(--space-3)',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                borderWidth: '3px',
                transition: 'all var(--duration-fast) var(--ease-out)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.02)';
                e.currentTarget.style.boxShadow = `0 4px 0 ${link.color}`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <span className={`nes-icon ${link.icon} is-large`} style={{ fontSize: '1.2rem' }} />
              {link.label}
            </a>
          ))}
        </div>

        {/* Contact Info */}
        <div className="nes-container with-title mt-4" style={{ backgroundColor: 'var(--nokia-bg)', borderColor: 'var(--nokia-border)' }}>
          <p className="title" style={{ color: 'var(--nokia-dark)', fontSize: 'var(--text-xs)' }}>DIRECT CONTACT</p>
          <div style={{ fontSize: 'var(--text-xs)', color: 'var(--nokia-text)', lineHeight: 2 }}>
            <div><span className="nes-icon mail" style={{ marginRight: 'var(--space-2)' }} />aguilarchan1215@gmail.com</div>
            <div><span className="nes-icon phone" style={{ marginRight: 'var(--space-2)' }} />09603011461</div>
            <div><span className="nes-icon location" style={{ marginRight: 'var(--space-2)' }} />Mabalacat City, Pampanga</div>
          </div>
        </div>

        {/* Availability */}
        <div className="nes-container is-dark with-title mt-4" style={{ backgroundColor: 'var(--nokia-dark)', borderColor: 'var(--nokia-border)', textAlign: 'center' }}>
          <p className="title" style={{ color: 'var(--nokia-highlight)', fontSize: 'var(--text-xs)' }}>STATUS</p>
          <p style={{ fontSize: 'var(--text-xs)', color: 'var(--nokia-highlight)' }}>
            <span className="nes-badge is-success" style={{ fontFamily: 'var(--font-tiny)', marginRight: 'var(--space-2)' }}>ONLINE</span>
            OPEN TO OPPORTUNITIES
          </p>
        </div>
      </div>
    </Window>
  );
};