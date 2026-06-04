import { cn } from '@/lib/utils'
import { Tag } from './Tag'

interface SectionHeaderProps {
  label?: string
  heading: string
  subheading?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeader({ label, heading, subheading, align = 'center', className }: SectionHeaderProps) {
  return (
    <div className={cn(align === 'center' ? 'text-center' : 'text-left', className)}>
      {label && (
        <Tag className="mb-4 block">{label}</Tag>
      )}
      <h2
        className="font-display font-normal text-white/90"
        style={{ fontSize: 'clamp(2rem, 3.5vw, 3.5rem)', lineHeight: 1.1, letterSpacing: '-0.025em' }}
      >
        {heading}
      </h2>
      {subheading && (
        <p
          className="mt-4 text-white/55 font-body font-light"
          style={{
            fontSize: '1.125rem',
            lineHeight: 1.7,
            maxWidth: align === 'center' ? '60ch' : undefined,
            margin: align === 'center' ? '1rem auto 0' : '1rem 0 0',
          }}
        >
          {subheading}
        </p>
      )}
    </div>
  )
}
