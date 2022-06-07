import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import { Wrapper } from "./styles/styles";

export function App() {
  return (
    <div>
      <Header />
      <Wrapper>
        <Sidebar />
        <main>
          <Post />
        </main>
      </Wrapper>
    </div>

  )
}

