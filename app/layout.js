import MainHeader from '@/components/main-header';
import './globals.css';

export const metadata = {
  title: 'News App',
  description: 'Learn how to route to different pages.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div id="page">
          <MainHeader />
          {children}
        </div>

      </body>
    </html>
  )
}
