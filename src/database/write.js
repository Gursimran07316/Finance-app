import { collection, doc, addDoc, updateDoc, deleteDoc } from "firebase/firestore"; 
import { db } from "./config";
export async function save(updatedTasks){
    //console.log("saving...", updatedTasks)
    try {
        const dbCollection = collection(db, "lists")
        const docRef = await addDoc(dbCollection, updatedTasks);
        console.log("Document written with ID: ", docRef.id);
        return docRef.id
    } catch (e) {
        return null
    }
}

