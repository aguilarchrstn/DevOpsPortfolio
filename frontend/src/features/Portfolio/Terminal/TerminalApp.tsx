import React, { useState, useRef, useEffect } from 'react';
import { Window } from '@/components/molecules/Window/Window';
import { useTranslation } from 'react-i18next';

const commands = {
  help: {
    description: 'Show available commands',
    usage: 'help'
  },
  about: {
    description: 'Show profile information',
    usage: 'about'
  },
  skills: {
    description: 'List technical skills',
    usage: 'skills'
  },
  experience: {
    description: 'Show work experience',
    usage: 'experience'
  },
  projects: {
    description: 'List key projects',
    usage: 'projects'
  },
  contact: {
    description: 'Show contact information',
    usage: 'contact'
  },
  clear: {
    description: 'Clear terminal',
    usage: 'clear'
  },
  whoami: {
    description: 'Show current user',
    usage: 'whoami'
  },
  date: {
    description: 'Show current date',
    usage: 'date'
  },
  neofetch: {
    description: 'Show system info (retro style)',
    usage: 'neofetch'
  },
  sudo: {
    description: 'Execute command as superuser (simulated)',
    usage: 'sudo <command>'
  }
};

const asciiArt = `
      ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
      █ CHRISTIAN SAMBERE AGUILAR █
      █ DevOps & Systems Admin    █
      ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
`;

const welcomeMessage = `
${asciiArt}
Welcome to the Nokia 3310 DevOps Terminal v1.0
Type 'help' for available commands.
System: Linux 6.x | Shell: bash | User: christian
`;

export const TerminalApp: React.FC = () => {
  const { t } = useTranslation('portfolio');
  const [history, setHistory] = useState<string[]>([welcomeMessage]);
  const [input, setInput] = useState('');
  const [cursorPosition, setCursorPosition] = useState(0);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
    terminalRef.current?.scrollTop = terminalRef.current.scrollHeight;
  }, [history]);

  const executeCommand = (cmd: string) => {
    const trimmed = cmd.trim();
    if (!trimmed) return;

    setHistory(prev => [...prev, `christian@nokia3310:~$ ${trimmed}`]);

    const [command, ...args] = trimmed.split(' ');
    const output = processCommand(command.toLowerCase(), args);
    
    if (output) {
      setHistory(prev => [...prev, ...output.split('\n')]);
    }
  };

  const processCommand = (command: string, args: string[]): string => {
    switch (command) {
      case 'help':
        return Object.entries(commands).map(([cmd, info]) => 
          `  ${cmd.padEnd(12)} ${info.description}`
        ).join('\n');

      case 'about':
        return `
CHRISTIAN SAMBERE AGUILAR
DevOps & Systems Administrator
Location: Mabalacat City, Pampanga
Email: aguilarchan1215@gmail.com
Phone: 09603011461
Experience: 4+ Years
GitHub: github.com/aguilarchrstn
LinkedIn: linkedin.com/in/chrstn-aguilar
        `.trim();

      case 'skills':
        return `
CLOUD INFRASTRUCTURE
  AWS EC2, RDS, S3, IAM, VPC, CloudWatch, Lambda

DEVOPS & CI/CD
  Docker, Jenkins, Git/SVN, OutSystems, Ansible

SCRIPTING & AUTOMATION
  Bash, PowerShell, Python, Cron Jobs

MONITORING & SECURITY
  Grafana, Prometheus, Nagios, OWASP ZAP

OPERATING SYSTEMS
  Ubuntu Server, Linux/Unix, Windows Server

DATABASES
  PostgreSQL, Oracle Database
        `.trim();

      case 'experience':
        return `
STAGE 02: Application System Administrator
  ADEC Innovations Corporation | Apr 2024 - Nov 2025
  - Orchestrated CI/CD pipelines across AWS & OutSystems
  - Managed AWS: EC2, RDS, S3, IAM, Lambda
  - Monitoring: Site24x7, CloudWatch
  - Automation: PowerShell, SQL scripts
  - Oracle DB administration

STAGE 01: Junior IT Linux System Administrator
  Z GetCare Systems Inc | Aug 2021 - Apr 2024
  - Ubuntu Server lifecycle management
  - Bash scripting & Cron automation
  - Docker containerization (Java, Spring Boot, Vue.js)
  - Monitoring: Nagios, CloudWatch
  - Security: OWASP ZAP, VPN, MFA, Firewall
        `.trim();

      case 'projects':
        return `
1. PostgreSQL Automated Maintenance
   Dead tuple cleanup & performance optimization

2. System Utilization Alerting
   CPU/Memory monitoring via Bash/Cron

3. Infrastructure Monitoring Stack
   Grafana + Prometheus deployment

4. Automated Backup & Recovery
   Replica-based pipeline automation

5. CI/CD Pipeline Integrations
   Jenkins + Docker + AWS

6. AI-Assistant & RandomChatmatch
   Full-stack personal applications
        `.trim();

      case 'contact':
        return `
CONTACT INFORMATION
  Email:    aguilarchan1215@gmail.com
  Phone:    09603011461
  Location: Mabalacat City, Pampanga
  GitHub:   github.com/aguilarchrstn
  LinkedIn: linkedin.com/in/chrstn-aguilar

STATUS: ONLINE - OPEN TO OPPORTUNITIES
        `.trim();

      case 'clear':
        return '__CLEAR__';

      case 'whoami':
        return 'christian (DevOps Engineer)';

      case 'date':
        return new Date().toString();

      case 'neofetch':
        return `
       ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
       █  christian@nokia3310            █
       █  -----------------------------  █
       █  OS: Linux 6.x (Ubuntu)         █
       █  Kernel: 6.5.0-15-generic       █
       █  Shell: bash 5.2.15             █
       █  Terminal: Nokia 3310 v1.0      █
       █  CPU: Intel i7 / ARM Cortex     █
       █  Memory: 16GB / 32GB            █
       █  Disk: 512GB NVMe               █
       █  Uptime: 4+ years               █
       █  Packages: 1000+                █
       █  Resolution: 84x48 (monochrome) █
       ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
        `.trim();

      case 'sudo':
        if (args.length === 0) {
          return 'sudo: a command is required';
        }
        if (args[0] === 'reboot') {
          return 'System reboot initiated... [SIMULATED]';
        }
        if (args[0] === 'apt' && args[1] === 'install' && args[2] === 'devops-skills') {
          return 'Reading package lists... Done\nBuilding dependency tree... Done\nThe following NEW packages will be installed:\n  devops-skills (4.0+ years experience)\n0 upgraded, 1 newly installed, 0 to remove.\nNeed to get 0 B of archives.\nAfter this operation, 0 B of additional disk space will be used.\nGet:1 http://archive.nokia.com devops-skills 4.0 [0 B]\nFetched 0 B in 0s (0 B/s)\nSelecting previously unselected package devops-skills.\nPreparing to unpack .../devops-skills_4.0_all.deb ...\nUnpacking devops-skills (4.0) ...\nSetting up devops-skills (4.0) ...\nProcessing triggers for man-db (2.10.2-1) ...\n[SIMULATED] DevOps skills installed successfully!';
        }
        return `sudo: ${args.join(' ')}: command not found (simulated)`;

      default:
        return `bash: ${command}: command not found\nType 'help' for available commands.`;
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      executeCommand(input);
      setInput('');
      setCursorPosition(0);
    } else if (e.key === 'ArrowUp') {
      // History navigation could be added here
    } else if (e.key === 'ArrowDown') {
      // History navigation could be added here
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    setCursorPosition(e.target.selectionStart || 0);
  };

  // Handle clear command
  useEffect(() => {
    if (history.length > 0 && history[history.length - 1] === '__CLEAR__') {
      setHistory([welcomeMessage]);
    }
  }, [history]);

  return (
    <Window
      title={t('terminal.title')}
      defaultSize={{ width: 600, height: 400 }}
      resizable={true}
      minimizable={true}
      maximizable={true}
      closable={true}
      icon="terminal"
    >
      <div className="terminal-app" style={{ 
        fontFamily: 'var(--font-mono)', 
        fontSize: 'var(--text-xs)',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'var(--nokia-dark)',
        color: 'var(--nokia-highlight)'
      }}>
        <div 
          ref={terminalRef}
          style={{ 
            flex: 1, 
            overflow: 'auto', 
            padding: 'var(--space-3)',
            lineHeight: 1.6,
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word'
          }}
        >
          {history.map((line, index) => (
            <div key={index} style={{ 
              opacity: index < history.length - 1 ? 0.8 : 1,
              color: line.startsWith('christian@') ? 'var(--nokia-highlight)' : 'var(--nokia-bg)'
            }}>
              {line}
            </div>
          ))}
        </div>

        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          padding: 'var(--space-2) var(--space-3)',
          borderTop: '2px solid var(--nokia-border)',
          backgroundColor: 'var(--nokia-accent)'
        }}>
          <span style={{ 
            color: 'var(--nokia-highlight)', 
            marginRight: 'var(--space-2)',
            fontWeight: 'bold'
          }}>
            christian@nokia3310:~$
          </span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            style={{
              flex: 1,
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: 'var(--nokia-bg)',
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-xs)',
              caretColor: 'var(--nokia-highlight)'
            }}
            placeholder="Type 'help' for commands..."
            autoFocus
          />
          <span style={{ 
            color: 'var(--nokia-highlight)',
            animation: 'blink 1s infinite',
            marginLeft: 'var(--space-1)'
          }}>
            █
          </span>
        </div>
      </div>
    </Window>
  );
};