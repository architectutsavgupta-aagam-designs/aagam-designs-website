import { useEffect } from 'react'

function useSEO({ title, description, keywords, ogImage }) {
  useEffect(() => {
    if (title) document.title = title

    const setMeta = (selector, attrKey, attrVal, content) => {
      if (!content) return
      let el = document.querySelector(selector)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attrKey, attrVal)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    setMeta('meta[name="description"]', 'name', 'description', description)
    setMeta('meta[name="keywords"]', 'name', 'keywords', keywords)
    setMeta('meta[property="og:title"]', 'property', 'og:title', title)
    setMeta('meta[property="og:description"]', 'property', 'og:description', description)
    setMeta('meta[property="og:image"]', 'property', 'og:image', ogImage)
  }, [title, description, keywords, ogImage])
}

export default useSEO