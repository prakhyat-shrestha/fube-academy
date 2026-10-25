import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { User } from '@/types/authStores'
import { login } from '@/httpMethod/auth'
import { alertSuccess, errorMessage } from '@/views/errorHandling/error'

interface AuthState {
  user: User | null
  isAuthenticated: boolean
  accessToken: string | null
  isLoading: boolean
  error: string | null
  hasLoaded: boolean
  sethasLoaded: (value: boolean) => void

  login: (email: string, password: string) => Promise<void>
}

export const useAuthStore = create<AuthState>()(
  persist(
    set => ({
      user: null,
      isAuthenticated: false,
      isLoading: false,
      accessToken: null,
      error: null,
      hasLoaded: false,
      sethasLoaded: value => set({ hasLoaded: value }),

      login: async (email, password) => {
        set({
          isLoading: true,
          error: null
        })

        try {
          const res = await login(email, password)
          set({
            user: res.data,
            accessToken: res.token,
            isAuthenticated: true,
            isLoading: false,
            error: null
          })
          alertSuccess(res.message)

          return res
        } catch (err: any) {
          set({
            isLoading: false,
            error: err || 'login failed',
            isAuthenticated: false
          })
          errorMessage(err || 'login failed')
        }
      }
    }),
    {
      name: 'fubeAcademy-auth',
      onRehydrateStorage: () => state => {
        state?.sethasLoaded(true)
      }
    }
  )
)
