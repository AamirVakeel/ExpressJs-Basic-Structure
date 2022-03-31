const req = require("express/lib/request");
const { ref, set } = require('firebase/database')
const { Timestamp, FieldValue, collection, doc, addDoc, setDoc } = require('firebase/firestore');
const { database, firestore } = require('../../custom_modules/firebaseinit')

class FirebaseTest {
    async input(req, message) {
        message.NAME = message.API_USER_ID ? message.API_USER_ID : "UNAUTHORIZED";
    }
    async process(message) {
        message.NAME = message.NAME + " Muhammad Aamir ";
        await set(ref(database, 'users/' + "aamirroute"), {
            username: "Aamir",
            email: "abc",
        });
        const col1 = collection(firestore, 'abc')
        const docRef = doc(col1, "DEF")
        const colRef = collection(docRef, 'users');
        const docRef2 = doc(colRef, "DEFg")

        addDoc(colRef, { 'email': "Aamir" })
        setDoc(docRef2, { "email": "Aamir" })
    }
    async output(res, message) {
        res.responseBody.loopBackName = message.NAME;
        res.status = "Success";
    }
}
module.exports = new FirebaseTest();
