
import './globals.css'
import Header  from './components/Header'
import ChakraWrapper from './components/chakraWrapper'
import Pricing from './components/Pricing'
import Features from './components/Features'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
      <ChakraWrapper>

        <Header />
        <Pricing />
        <Features />
        {children}
        
        </ChakraWrapper>
        </body>
    </html>
  )
}
