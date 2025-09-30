import './globals.css'

export const metadata = {
  title: 'Elite eSports',
  description: 'Premium Gaming Tournaments',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
