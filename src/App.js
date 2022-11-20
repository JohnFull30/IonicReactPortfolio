// import "./App.css";
import Welcome from "./Welcome";
import Projects from "./Projects";
import Nav from "./Nav";
import { IonApp } from "@ionic/react";

function App() {
  return (
    <IonApp class="styles">
      <Nav />
      <Welcome />
      <Projects />
    </IonApp>
  );
}

export default App;
