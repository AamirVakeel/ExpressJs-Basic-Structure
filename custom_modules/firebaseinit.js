const { initializeApp } = require('firebase/app')
const firebaseConfig = require('../Configurations/Firebase')
const firebaseApp = initializeApp(firebaseConfig);
const { getDatabase } = require('firebase/database')
const { getFirestore } = require('firebase/firestore');

const database = getDatabase(firebaseApp);
const fs = getFirestore(firebaseApp)

module.exports = {
    database: database,
    firestore: fs,
}
