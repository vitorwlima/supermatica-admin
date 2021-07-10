import GlobalStyles from './styles/global'
import Routes from './Routes'
import { UserContextProvider } from './contexts/UserContext'

const App = () => {
  return (
    <UserContextProvider>
      <GlobalStyles />
      <Routes />
    </UserContextProvider>
  )
}

export default App
