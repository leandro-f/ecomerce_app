import * as SQLite from "expo-sqlite"

const db = SQLite.openDatabase("sessions.db")

export const init = ()=>{
    const promise = new Promise((resolve,reject) =>{
        db.transaction((tx) => {
            tx.executeSql("CREATE ")
        })
    })
}