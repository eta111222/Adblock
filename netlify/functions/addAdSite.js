const admin = require('firebase-admin');
admin.initializeApp({
    credential: admin.credential.cert({
        private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
        client_email: process.env.FIREBASE_CLIENT_EMAIL,
        project_id: process.env.FIREBASE_PROJECT_ID 
    }),
    databaseURL: `https://adblock-firebase.firebaseio.com`
});

const db = admin.firestore();

exports.handler = async function(event, context) {
  const data = JSON.parse(event.body);
  const url = data.url;

  if (!url) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'No URL provided' }),
    };
  }

  try {
    await db.collection('adSites').add({ url });
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'URL added successfully' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Failed to add URL' }),
    };
  }
};
