import Footer from './components/Footer'
import Header from './components/Header'
import '../styles/globals.scss'



export const metadata = {
  title: 'Filipe Valente Front End Developer - I am a Front End Developer',
  description: 'Front End Developer based in New Jersey',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
