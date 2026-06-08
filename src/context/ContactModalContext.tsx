'use client'

import { createContext, useContext, useState, useCallback } from 'react'

interface ContactModalContextValue {
  isOpen:     boolean
  openModal:  () => void
  closeModal: () => void
}

const ContactModalContext = createContext<ContactModalContextValue>({
  isOpen:     false,
  openModal:  () => {},
  closeModal: () => {},
})

export function ContactModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const openModal  = useCallback(() => setIsOpen(true),  [])
  const closeModal = useCallback(() => setIsOpen(false), [])

  return (
    <ContactModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </ContactModalContext.Provider>
  )
}

export function useContactModal() {
  return useContext(ContactModalContext)
}
