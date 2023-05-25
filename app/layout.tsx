import './globals.css'
import { inter } from "../fonts";

export const metadata = {
  title: 'Rustic Sport Bar',
  description: 'Rustic Web Page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
