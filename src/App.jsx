import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Wrapper } from "./styles/styles";

export function App() {
  return (
    <div>
      <Header />
      <Wrapper>
        <Sidebar />
        <main>Main</main>
      </Wrapper>
    </div>

  )
}

