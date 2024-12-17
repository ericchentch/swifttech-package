import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Package testing',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <link rel="icon" href="/kanban-icon.svg" sizes="any" />
      <link rel="apple-touch-icon" href="/kanban-icon.svg" sizes="any" />
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  )
}
