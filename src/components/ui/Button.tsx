'use client'

import { cn } from '@/lib/utils'
import { type ButtonHTMLAttributes } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: 'sm' | 'md' | 'lg'
}

export function Button({ variant = 'primary', size = 'md', className, children, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center gap-2 font-body transition-all duration-300 cursor-pointer',
        'tracking-wide',
        size === 'sm' && 'px-4 py-2 text-sm',
        size === 'md' && 'px-6 py-3 text-sm',
        size === 'lg' && 'px-8 py-4 text-base',
        variant === 'primary' && [
          'border border-[#c8a96e] text-white/90 bg-transparent rounded-full',
          'hover:bg-[rgba(200,169,110,0.1)] hover:shadow-[0_0_20px_rgba(200,169,110,0.15)]',
        ],
        variant === 'secondary' && [
          'border border-white/10 text-white/70 bg-transparent rounded-full',
          'hover:border-white/20 hover:text-white/90',
        ],
        variant === 'ghost' && [
          'border-0 text-white/60 bg-transparent',
          'hover:text-white/90',
        ],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
