const admin = require('firebase-admin');

admin.initializeApp({
    credential: admin.credential.cert({
            private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
            client_email: process.env.FIREBASE_CLIENT_EMAIL,
            project_id: process.env.FIREBASE_PROJECT_ID 
    }),
    databaseURL: 'https://adblock-firebase.firebaseio.com'
});

const db = admin.firestore();

exports.handler = async function() {
  try {
    const snapshot = await db.collection('adSites').get();
    const sites = snapshot.docs.map(doc => doc.data().url);
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*", 
        "Content-Type": "application/json"
      },
      body: JSON.stringify(sites),
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*", 
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message: 'Failed to retrieve URLs' }),
    };
  }
};
