import '../styles/globals.css';
import { TodoListProvider } from "../context/TodoListApp";


const App = ({ Component, pageProps }) => (
  <TodoListProvider>
    <div>
      <Component {...pageProps} />
    </div>
  </TodoListProvider>
);

export default App;
