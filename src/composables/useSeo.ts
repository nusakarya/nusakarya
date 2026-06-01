type SeoInput = {
  title: string
  description: string
}

const upsertMeta = (name: string, content: string): void => {
  let tag = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('name', name)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

export const useSeo = ({ title, description }: SeoInput): void => {
  document.title = title
  upsertMeta('description', description)
}
