import { ClerkProvider } from '@clerk/nextjs'
import { Inter } from 'next/font/google'
import '../src/styles/globals.css'
import { Toaster } from '@/components/ui/sonner'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mastero Konnect - Transform Your Journey',
  description: 'Connect with industry experts and transform your career journey with AI-powered mentorship matching.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY

  if (!publishableKey) {
    throw new Error('Missing Publishable Key. Please add NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY to your .env.local file.')
  }

  return (
    <ClerkProvider
      publishableKey={publishableKey}
      appearance={{
        variables: {
          colorPrimary: '#2F6BAE',
          colorBackground: '#FFFFFF',
          colorText: '#333333',
          colorInputBackground: '#FFFFFF',
          colorInputText: '#333333',
          borderRadius: '8px',
        },
        elements: {
          formButtonPrimary: 'bg-[linear-gradient(135deg,#2F6BAE,#5A8DC8)] hover:brightness-95',
          card: 'shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-[#EAEAEA]',
        },
      }}
    >
      <html lang="en">
        <body className={inter.className}>
          {children}
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  )
}