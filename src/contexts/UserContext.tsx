import { createContext, ReactNode, useState, useEffect } from 'react'
import api from '../services/api'

interface IUserContextProviderProps {
  children: ReactNode
}

interface IUser {
  name: string
  email: string
  password: string
  admin: boolean
}

export const UserContext = createContext({} as IUser | undefined)

export const UserContextProvider = ({ children }: IUserContextProviderProps) => {
  const [user, setUser] = useState<IUser>()

  useEffect(() => {
    const getUser = async () => {
      const { data } = await api.get('/admin')
      if (data) {
        setUser(data)
      }
    }
    getUser()
  }, [])

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>
}
