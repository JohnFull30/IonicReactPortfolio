import { IonButton, IonHeader, IonTitle, IonToolbar } from "@ionic/react";

function Nav() {
  return (
    <>
      <IonHeader translucent={true}>
        <IonToolbar mode="ios">
          {/* <ul>
          <li>
            <a href="#welcome-section">About</a>
          </li>
          <li>
            <a href="#projects">Work</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul> */}
          <IonTitle>
            <IonButton class="nav-buttons" fill="clear">
              About
            </IonButton>
            <IonButton class="nav-buttons" fill="clear">
              Work
            </IonButton>
            <IonButton class="nav-buttons" fill="clear">
              Contact
            </IonButton>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
    </>
  );
}

export default Nav;
