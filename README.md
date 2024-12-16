# AdBlock Chrome Extension (JavaScript, Firebase, Netlify, Chrome Extensions API)

This Chrome extension allows users to block websites they identify as ad sites. Users can mark a website as an ad site, and the extension will block it on future visits.

-Developed a Chrome extension that allows users to mark websites as ad sites, leveraging the Chrome Extensions API for browser interaction.

-Implemented cloud functions hosted on Netlify to handle the processing and storage of marked websites in a Firebase Firestore database.

-Configured Firebase Firestore to store and manage user-generated ad site data securely.

-Created a dynamic rule-based blocking system using Chrome's declarativeNetRequest API, which regularly fetches the latest ad site data from Firebase and updates local blocking rules.

-Ensured seamless user experience by automating the blocking of marked websites on subsequent visits, enhancing ad-free browsing.

## Features
- Mark websites as ad sites
- Block marked websites on subsequent visits
- Simple and intuitive UI

## Installation
1. Download the extension from [this link](https://github.com/eta111222/Adblock/blob/main/extension.zip).
2. Unzip the file.
3. Open Chrome and navigate to `chrome://extensions/`.
4. Enable Developer mode (toggle the switch in the top right).
5. Click "Load unpacked" and select the unzipped folder.

## Demo
[Insert GIF or images showing how your extension works]

## Try it out
You can download the extension and see the source code [here](https://github.com/eta111222/Adblock).
