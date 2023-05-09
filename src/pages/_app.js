import '@/styles/globals.scss'
import localFont from 'next/font/local'

const matter = localFont({ 
  src:[ { path: '../../public/fonts/Matter-Bold.woff', weight: "700", style: "normal "},
    { path: '../../public/fonts/Matter-Medium.woff2', weight: "500", style: 'normal' },
    { path: '../../public/fonts/Matter-RegularItalic.woff2', weight: "400", style: 'italic' },
    { path: '../../public/fonts/MatterSQ-Bold.woff2', weight: "700", style: 'normal' },
    { path: '../../public/fonts/MatterSQ-Medium.woff2', weight: "500", style: 'normal' },
    { path: '../../public/fonts/MatterSQ-RegularItalic.woff2', weight: "400", style: 'italic' },
]});


export default function App({ Component, pageProps }) {
  return <main style={{
    fontFamily: matter.fontFamily,
  }}>
    <Component {...pageProps} />
  </main>
}
