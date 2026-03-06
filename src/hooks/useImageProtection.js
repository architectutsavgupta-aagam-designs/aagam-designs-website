import { useEffect } from 'react'



export default function useImageProtection() {
  useEffect(() => {

    
    const blockContextMenu = (e) => {
      e.preventDefault()
      return false
    }

    const blockDrag = (e) => {
      if (e.target.tagName === 'IMG') {
        e.preventDefault()
        return false
      }
    }
    
    
    const blockShortcuts = (e) => {
      const ctrl = e.ctrlKey || e.metaKey

      if (e.key === 'F12')                          { e.preventDefault(); return false }
      if (ctrl && e.shiftKey && e.key === 'I')      { e.preventDefault(); return false }
      if (ctrl && e.shiftKey && e.key === 'J')      { e.preventDefault(); return false }
      if (ctrl && e.shiftKey && e.key === 'C')      { e.preventDefault(); return false }
      if (ctrl && e.key.toLowerCase() === 'u')      { e.preventDefault(); return false }
      if (ctrl && e.key.toLowerCase() === 's')      { e.preventDefault(); return false }
      if (ctrl && e.key.toLowerCase() === 'p')      { e.preventDefault(); return false }
      if (ctrl && e.key.toLowerCase() === 'a')      { e.preventDefault(); return false }
    }

    document.addEventListener('contextmenu', blockContextMenu)
    document.addEventListener('dragstart',   blockDrag)
    window.addEventListener('keydown',       blockShortcuts)

    return () => {
      document.removeEventListener('contextmenu', blockContextMenu)
      document.removeEventListener('dragstart',   blockDrag)
      window.removeEventListener('keydown',       blockShortcuts)
    }
  }, [])
}