import { IonButton, IonInput, IonItem, IonLabel } from '@ionic/react'
import { RenderComponent } from './RenderComponent'

const ExploreContainer: React.FC = () => {
  return (
    <div>
      <IonItem style={{ margin: '10px 0' }}>Середньовічний король вирішив оголосити війну сусідній державі
        для чого необхідно сформувати своє військо та розрахувати вартість
        його утримання та швидкість пересування. Після обліку наявних військових
        одиниць виявилось, що у військо можна записати рейтарів у важкій
        броні(вартість утримання 2 золотих на добу, швидкість пересування 5 км на годину),
        драконів (вартість утримання корм + одна дівчина на добу,
        швидкість пересування 60 км/ч), лучників у шкіряній броні
        (вартість утримання 1 золотий на добу + 10 стріл кожному лучнику швидкість 7 км/ч).
        Необхідно сформувати військо з як мінімум 3 родів військ і
        розрахувати вартість утримання та швидкість.
        Результати такого планування необхідно виводити на екран.
      </IonItem>
      <IonItem>
        <IonLabel position="floating">Чисельність:</IonLabel>
        <IonInput type='number' id='quantity' value='3' />
      </IonItem>
      <IonButton expand="block" onClick={RenderComponent}>
        Результат
      </IonButton>
    </div>
  )
}

export default ExploreContainer
