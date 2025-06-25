import { useContext } from "react";
import "./App.css";
import ThemeProvider, {
  ThemeButton,
  ThemeContext,
} from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      {" "}
      <ThemeWrapper />{" "}
    </ThemeProvider>
  );
}

function ThemeWrapper() {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      id="all"
      className={`${theme} w-full h-full bg:white dark:bg-black text-black dark:text-white flex flex-col min-h-screen`}
    >
      <main className="mx-auto my-5 flex-1 flex flex-col gap-5 items-center">
        {" "}
        <ThemeButton />{" "}
      </main>
      <footer role="contentinfo">
        <a
          href="https://www.flaticon.com/free-icons/letter-f"
          title="letter f icons"
          target="_blank"
          className="text-center text-xs text-gray-500"
        >
          <p>Letter f icons created by rashedul.islam - Flaticon</p>{" "}
        </a>{" "}
      </footer>{" "}
    </div>
  );
}
export default App;
