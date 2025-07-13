import Header from "./components/Header"
import TypingArea from "./components/TypingArea"
import TypingSettings from "./components/TypingSettings"

function App() {

  return (
    <div className="h-dvh bg-background font-[Roboto_Mono]">
      <Header />
      <TypingSettings/>
      <TypingArea/>
    </div>
  )
}

export default App
