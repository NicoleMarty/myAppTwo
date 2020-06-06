import React from 'react'
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react'
import TabOneContainer from '../components/TabOneContainer'
import './Tab1.css'

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Left Brain</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse='condense'>
          <IonToolbar>
            <IonTitle size='large'>Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <TabOneContainer name='Login/Sign Up' />
      </IonContent>
    </IonPage>
  )
}

export default Tab1
