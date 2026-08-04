import { GymBadges } from '@/components/gym-badges'
import { KeyItems } from '@/components/key-items'
import { LinkCableFooter } from '@/components/link-cable-footer'
import { MoveSet } from '@/components/move-set'
import { TrainerCard } from '@/components/trainer-card'

export default function Page() {
  return (
    <div className="gbc-screen min-h-screen">
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <TrainerCard />
        <MoveSet />
        <GymBadges />
        <KeyItems />
        <LinkCableFooter />
      </main>
    </div>
  )
}
