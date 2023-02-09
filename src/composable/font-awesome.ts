import { fontAwesomeKitUrl } from '@/config/font-awesome.js'

export function useFontAwesome() {
  const appendScript = (source: string) => {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = source
    document.head.appendChild(script)
  }

  appendScript(fontAwesomeKitUrl)
}
