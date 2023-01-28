// import "./App.css";
import Welcome from "./Welcome";
import Projects from "./Projects";
import Nav from "./Nav";
import Contact from "./Contact";
import { IonApp } from "@ionic/react";

function App() {
  return (
    <IonApp class="styles">
      <Nav />
      <Welcome />
      <Projects />
      <Contact />
      <script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        nomodule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      ></script>
    </IonApp>
  );
}

export default App;
