'use client'

import { useEffect, useState } from 'react'
import { SignUp, useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function SignUpPage() {
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
        
        {/* LEFT SIDE - Login CTA (moved here instead of right) */}
        <div className="hidden md:flex flex-col justify-center items-center w-1/2 bg-blue-600 text-white p-10">
          <h2 className="text-xl font-semibold mb-4">Already Have an Account?</h2>
          <p className="text-sm text-blue-100 mb-6 text-center max-w-xs">
            Log in to continue building and editing your onboarding flows.
          </p>
          <Link
            href="/auth/sign-in"
            className="border border-white px-6 py-2 rounded-md text-sm font-medium hover:bg-white hover:text-blue-600 transition"
          >
            LOG IN
          </Link>
        </div>

        {/* RIGHT SIDE - Sign Up Form */}
        <div className="flex flex-col justify-center items-center w-full md:w-1/2 px-1 py-1 mb-4">
          <h1 className="text-2xl font-bold text-gray-900 mb-6 mt-1">Create Your Account</h1>
          <p className="text-sm text-gray-600 mb-6 text-center">
            Start your journey with MasteroKonnect 🚀
          </p>

          <div className="w-full max-w-sm">
            <SignUp
              routing="path"
              path="/auth/sign-up"
              redirectUrl="/profile-building"
              signInUrl="/auth/sign-in"
              appearance={{
                elements: {
                  formFieldInput:
                    'border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2',
                  formFieldLabel: 'text-sm font-medium text-gray-700 mb-1',
                  formButtonPrimary:
                    'bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md text-sm px-4 py-2 w-full mt-3',
                  card: 'shadow-none border-0 bg-transparent',
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
