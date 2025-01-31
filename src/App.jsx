import { ThemeProvider } from "./contents/Theme-content";

function App() {


  return (
    <>
      <ThemeProvider storageKey="theme">
        <h1>Hello World</h1>
      </ThemeProvider>
    </>
  )
}

export default App;
