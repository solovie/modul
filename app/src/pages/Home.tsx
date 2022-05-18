import { IonContent, IonHeader, IonItem, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import ExploreContainer from '../components/ExploreContainer'
import './Home.css'

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Резнікова Анна КН-32</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <ExploreContainer />
        <div id="content" style={{ margin: '10px 10px' }}></div>
      </IonContent>
    </IonPage>
  )
}

export default Home
