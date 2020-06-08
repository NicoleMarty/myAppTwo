import React, { useState } from 'react'
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonInput,
  IonButton
} from '@ionic/react'
import TabOneContainer from '../components/TabOneContainer'
import './Tab1.css'

const Tab1: React.FC = () => {
  const [text, setText] = useState<string>()
  const [password, setPassword] = useState<string>()
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
        <IonList>
          <IonItem>
            <IonInput
              type='email'
              value={text}
              placeholder='Email'
              onIonChange={e => setText(e.detail.value!)}
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonInput
              type='password'
              value={password}
              placeholder='Password'
              required
              onIonChange={e => setPassword(e.detail.value!)}
            ></IonInput>
          </IonItem>

          <IonButton type='submit' expand='block'>
            Log In
          </IonButton>
        </IonList>
      </IonContent>
    </IonPage>
  )
}

export default Tab1
