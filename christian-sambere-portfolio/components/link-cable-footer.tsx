export function LinkCableFooter() {
  return (
    <footer
      aria-labelledby="contact-heading"
      className="flex flex-col gap-6 pb-4"
    >
      <h2
        id="contact-heading"
        className="text-sm leading-relaxed sm:text-lg"
        style={{ color: 'var(--primary)' }}
      >
        {'\u25B6'} LINK CABLE / CONTACT
      </h2>

      <div className="nes-container is-rounded with-title">
        <p className="title" style={{ fontSize: '9px' }}>
          POKéCOM
        </p>

        <div className="flex flex-col gap-6">
          <p className="text-pretty text-[10px] leading-relaxed">
            Connect the link cable to trade infrastructure notes, review a
            pipeline, or talk about an open role.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="nes-btn is-error inline-flex items-center justify-center gap-3"
            >
              <i className="nes-icon github is-small" aria-hidden="true" />
              GITHUB
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="nes-btn is-primary inline-flex items-center justify-center gap-3"
            >
              <i className="nes-icon linkedin is-small" aria-hidden="true" />
              LINKEDIN
            </a>

            <a
              href="mailto:aguilarchan1215@gmail.com"
              className="nes-btn inline-flex items-center justify-center gap-3"
            >
              <i className="nes-icon gmail is-small" aria-hidden="true" />
              EMAIL
            </a>
          </div>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <div className="flex items-center gap-4">
              <i className="nes-ash" aria-hidden="true" />
              <i className="nes-pokeball" aria-hidden="true" />
            </div>
            <p
              className="text-center text-[8px] leading-relaxed sm:text-right"
              style={{ color: 'var(--muted-foreground)' }}
            >
              © {new Date().getFullYear()} CHRISTIAN SAMBERE AGUILAR — SAVING…
              DO NOT TURN OFF THE POWER.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
