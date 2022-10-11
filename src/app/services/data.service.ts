import { Injectable } from '@angular/core';

import { getFirestore, collection, addDoc, getDocs  } from "firebase/firestore";
import { getStorage, ref ,uploadBytes, listAll, getDownloadURL  } from "firebase/storage";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyDzO0-5QjenrcAlP9mocUb9_AGHBdPgFPk",
  authDomain: "rpch-ec05f.firebaseapp.com",
  projectId: "rpch-ec05f",
  storageBucket: "rpch-ec05f.appspot.com",
  messagingSenderId: "301353369032",
  appId: "1:301353369032:web:a407ad1a4434bd3b3314fd",
  measurementId: "G-TS99VP1RZF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);



@Injectable({
  providedIn: 'root'
})
export class DataService {

  connexionState=false
  constructor() { }

  login(user){
    if(user["username"]=="ROOT" && user["psw"]=="TOOR"){
      this.connexionState=true
      return "0000"
    }
    else{
      return undefined
    }
  }


  async addDataCollection(collect, data){
    try {
      const docRef = await addDoc(collection(db, collect),data);
      console.log("Document written with ID: ", docRef.id);
      return docRef.id
    } catch (e) {
      console.error("Error adding document: ", e);
      return e
    }
  }

  addFile(reference, file){
    const storageRef = ref(storage, reference);
    // 'file' comes from the Blob or File API
    uploadBytes(storageRef, file).then((snapshot) => {
      console.log('Uploaded a blob or file!');
      return snapshot
    });
  }

  async getCollection(collect){
    const data=[]
    const querySnapshot = await getDocs(collection(db, collect));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
      data.push({id:doc.id, data:doc.data()})
    });
    return data
  }

  getFile(reference, id, limit):string[]{
    limit="all"
    const all=[]
    let one=[]
    const storageRef = ref(storage, reference);
    listAll(storageRef).then(async files=>{
      //console.log(files)
      if(limit=="all"){
        for(let file of files.items){
          //console.log(file.fullPath)
          const url=await getDownloadURL(file)
          all.push(url)
        }
      }
      else if(limit=="one"){
        for(let file of files.items){
          console.log(file.fullPath)
          if(file.fullPath==reference+"/"+id){
            one[0]=await getDownloadURL(file); 
            break
          }
        }
      }
      
    }).catch(er=>console.log(er))
    if(limit=="all") return all
    else if(limit=="one") return one
  }

}
