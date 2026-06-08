import { useState, useEffect } from 'react'
import { LanguageContext } from './LanguageContext.jsx'

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('lang') || 'es'
  })

  useEffect(() => {
    localStorage.setItem('lang', lang)
  }, [lang])

  const toggleLanguage = () => {
    setLang(prev => prev === 'es' ? 'en' : 'es')
  }

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}
