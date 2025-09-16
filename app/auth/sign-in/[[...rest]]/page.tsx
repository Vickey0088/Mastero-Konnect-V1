'use client'

import { useEffect, useState } from 'react'
import { SignIn, useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function SignInPage() {
  const { isSignedIn, isLoaded } = useUser()
  const router = useRouter()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      router.push('/profile-building')
    }
  }, [isLoaded, isSignedIn, router])

  // Loading State
  if (!isLoaded || !isClient) {
    return (
      <div className="flex h-screen w-screen items-center justify-center bg-blue-600">
        <div className="text-white text-sm">Loading...</div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen w-screen items-center justify-center bg-slate-300 font-sans px-4">
      <div className="flex w-full max-w-5xl rounded-lg overflow-hidden bg-white shadow-xl">
        
        {/* LEFT SIDE - Login */}
        <div className="flex flex-col justify-center items-center w-full md:w-1/2 px-6 py-10">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Log in to Your Account</h1>
          <p className="text-sm text-gray-600 mb-6 text-center">
            Log in so you can continue building and editing your onboarding flows.
          </p>

          <div className="w-full max-w-sm">
            <SignIn
              routing="path"
              path="/auth/sign-in"
              redirectUrl="/profile-building"
              signUpUrl="/auth/sign-up"
              appearance={{
                elements: {
                  // Email + Password Inputs
                  formFieldInput:
                    'border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3',
                  formFieldLabel:
                    'text-sm font-medium text-gray-700 mb-1',

                  // Primary Button
                  formButtonPrimary:
                    'bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md text-sm px-4 py-2 w-full mt-2',

                  // Forgot Password Link
                  footerAction__forgotPassword:
                    'text-sm text-blue-600 hover:underline mt-1 block text-right',

                  card: 'shadow-none border-0 bg-transparent',
                },
              }}
            />
          </div>
        </div>

        {/* RIGHT SIDE - Sign Up CTA */}
        <div className="hidden md:flex flex-col justify-center items-center w-1/2 bg-blue-500 text-white p-10">
          <h2 className="text-xl font-semibold mb-4">Don’t Have an Account Yet?</h2>
          <p className="text-sm text-blue-100 mb-6 text-center max-w-xs">
            Let’s get you all set up so you can start creating your first onboarding experience.
          </p>
          <Link
            href="/auth/sign-up"
            className="border border-white px-6 py-2 rounded-md text-sm font-medium hover:bg-white hover:text-blue-600 transition"
          >
            SIGN UP
          </Link>
        </div>
      </div>
    </div>
  )
}
