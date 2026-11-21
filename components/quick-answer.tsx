import { Sparkles } from 'lucide-react'

export function QuickAnswer({ children }: { children: React.ReactNode }) {
  return (
    <aside aria-label="Quick answer" className="rounded-2xl border-l-4 border-primary bg-accent/60 p-6">
      <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-accent-foreground">
        <Sparkles className="size-4" aria-hidden="true" />
        Quick answer
      </p>
      <p className="mt-3 text-lg leading-relaxed text-foreground">{children}</p>
    </aside>
  )
}
