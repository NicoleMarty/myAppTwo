import React from 'react'
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react'
import TabTwoContainer from '../components/TabTwoContainer'
import './Tab2.css'

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse='condense'>
          <IonToolbar>
            <IonTitle size='large'>Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <TabTwoContainer name='Tab 2 page' />
      </IonContent>
    </IonPage>
  )
}

export default Tab2
