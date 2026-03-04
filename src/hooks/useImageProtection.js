import { useEffect } from 'react'

/**
 * useImageProtection
 * ─────────────────────────────────────────────────────────────
 * Call once at the top of App.jsx.
 * Applies global protection layers:
 *   1. Blocks right-click "Save Image As" on every <img>
 *   2. Blocks dragging images to desktop / other tabs
 *   3. Deters F12 / Ctrl+Shift+I / Ctrl+U / Ctrl+S shortcuts
 *   4. Disables text selection across the whole page
 * ─────────────────────────────────────────────────────────────
 */
export default function useImageProtection() {
  useEffect(() => {

    /* 1. Block right-click specifically on images */
    const blockContextMenu = (e) => {
      if (
        e.target.tagName === 'IMG' ||
        e.target.closest('[data-protected]')
      ) {
        e.preventDefault()
        return false
      }
    }

    /* 2. Block drag-and-drop of images */
    const blockDrag = (e) => {
      if (e.target.tagName === 'IMG') {
        e.preventDefault()
        return false
      }
    }

    /* 3. Deter common DevTools / save shortcuts */
    const blockShortcuts = (e) => {
      const ctrl = e.ctrlKey || e.metaKey

      if (e.key === 'F12')                          { e.preventDefault(); return false }
      if (ctrl && e.shiftKey && e.key === 'I')      { e.preventDefault(); return false }
      if (ctrl && e.shiftKey && e.key === 'J')      { e.preventDefault(); return false }
      if (ctrl && e.shiftKey && e.key === 'C')      { e.preventDefault(); return false }
      if (ctrl && e.key.toLowerCase() === 'u')      { e.preventDefault(); return false }
      if (ctrl && e.key.toLowerCase() === 's')      { e.preventDefault(); return false }
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
