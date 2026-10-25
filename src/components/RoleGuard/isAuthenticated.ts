'use client'

import React, { useEffect } from 'react'
import { useAuthStore } from '@/stores/authStores'
import { useRouter } from 'next/navigation'

export function RoleGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const { hasLoaded, isAuthenticated } = useAuthStore()
  //   useEffect(() => {
  //     if (!isAuthenticated) {
  //       router.replace('/login')
  //     }
  //   }, [isAuthenticated, router])
}
