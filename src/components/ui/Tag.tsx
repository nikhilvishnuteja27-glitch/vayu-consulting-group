import { cn } from '@/lib/utils'

interface TagProps {
  children: React.ReactNode
  className?: string
}

export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        'inline-block text-[0.6875rem] font-medium tracking-[0.15em] uppercase',
        'text-white/40',
        className
      )}
    >
      {children}
    </span>
  )
}
