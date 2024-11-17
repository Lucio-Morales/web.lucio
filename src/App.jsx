import { ThemeProvider } from './context/ThemeContext';

import Header from './components/header/Header';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex flex-col min-h-screen bg-light-background dark:bg-dark-background"></main>
      </div>
    </ThemeProvider>
  );
}

export default App;
