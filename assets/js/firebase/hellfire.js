import app from "./app.js";
import {getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js'

export async function subscribeToFireBase(subscription){
    const db = getFirestore(app)
    const hellfireCollection = collection(db,'Hell-fire')
    const docRef = await addDoc(hellfireCollection, subscription)
    return docRef.id
}