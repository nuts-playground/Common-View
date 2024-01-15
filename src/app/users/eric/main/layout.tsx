import type { Metadata } from 'next'
import '../../../globals.css'

export const metadata: Metadata = {
  title: 'eric-page',
  description: '반갑습니다!',
}

export default function RootLayout({children}: {
  children: React.ReactNode
}) {
  return (
      <div className={``}>{children}</div>
  )
}
