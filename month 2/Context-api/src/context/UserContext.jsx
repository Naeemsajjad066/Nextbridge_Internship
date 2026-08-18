import { createContext, useContext } from 'react'

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext()

export function UserProvider({ children }) {
  const user = {
    name: 'naeem sajjad',
    role: 'Mern Stack Developer',
  }

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useUser() {
  return useContext(UserContext)
}
