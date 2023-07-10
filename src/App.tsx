import "./App.css";
import { Header } from "./Components/Header/Header";
import { SceneViewer } from "./Containers/Scene/SceneViewer";
function App() {

  return (
    <div className="app">
      <Header />
      <SceneViewer />
    </div>
  );
}

export default App;
