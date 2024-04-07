import { collection, getDocs } from "firebase/firestore"; 
import { db } from "./config";


export async function load(){
    const data = []
    const querySnapshot = await getDocs(collection(db, "lists"));
    querySnapshot.forEach((doc) => {
       //console.log(`${doc.id} => ${doc.data()}`);
        data.push({
            ...doc.data(),
            id: doc.id
        })
    });
    return data
}