import Rotas from "./routes/Routes"
import { AuthProvider } from "./context/auth"
export default function App() {
  return (
    <>
    <AuthProvider>
    <Rotas />
    </AuthProvider>
    </>
  )
}
