export function TrainerCard() {
  return (
    <header className="flex flex-col gap-6">
      {/* Battle HUD / Trainer ID bar */}
      <div
        className="nes-container is-rounded flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
        style={{ backgroundColor: 'var(--card)' }}
      >
        <div className="flex items-center gap-3">
          <i className="nes-pokeball" aria-hidden="true" />
          <span className="text-[10px] leading-relaxed sm:text-xs">
            BADGES: 004
          </span>
        </div>

        <div className="flex flex-col gap-2 sm:min-w-72">
          <div className="flex items-center justify-between gap-3">
            <span className="text-[10px] leading-relaxed sm:text-xs">
              HP: 100/100
            </span>
            <span
              className="text-[10px] leading-relaxed"
              style={{ color: 'var(--accent)' }}
            >
              LV.04
            </span>
          </div>
          <progress
            className="nes-progress is-success"
            value={100}
            max={100}
            aria-label="Hit points: 100 of 100"
          />
        </div>
      </div>

      {/* Trainer name banner */}
      <div
        className="nes-container is-rounded flex flex-col gap-5 px-4 py-6 sm:px-8"
        style={{ backgroundColor: 'var(--primary)', color: '#ffffff' }}
      >
        <div className="flex items-center justify-center gap-4">
          <i className="nes-icon star is-small" aria-hidden="true" />
          <i className="nes-icon trophy is-small" aria-hidden="true" />
          <i className="nes-icon coin is-small" aria-hidden="true" />
        </div>

        <h1 className="text-balance text-center text-base leading-relaxed sm:text-2xl lg:text-3xl">
          CHRISTIAN SAMBERE AGUILAR
        </h1>

        <p className="text-pretty text-center text-[10px] leading-relaxed sm:text-sm">
          TRAINER CLASS: DevOps &amp; Systems Administrator
        </p>
      </div>

      {/* Quick stats dialogue box */}
      <div className="nes-container is-rounded with-title">
        <p className="title">QUICK STATS</p>
        <ul className="nes-list is-circle flex flex-col gap-3 text-[10px] leading-relaxed sm:text-xs">
          <li>LOCATION: Mabalacat City, Pampanga</li>
          <li className="break-all">EMAIL: aguilarchan1215@gmail.com</li>
          <li>REGION EXP: 4+ YEARS IN THE FIELD</li>
        </ul>
        <p className="mt-4 text-[10px] leading-relaxed">
          <span className="pixel-arrow" style={{ color: 'var(--primary)' }}>
            {'\u25B6'}
          </span>{' '}
          A wild INFRASTRUCTURE appeared! Choose a menu below.
        </p>
      </div>
    </header>
  )
}
