/* exported gapiLoaded */
/* exported gisLoaded */
/* exported handleAuthClick */
/* exported handleSignoutClick */

// TODO(developer): Set to client ID and API key from the Developer Console
const CLIENT_ID = '557955567242-3954rii51vs5icp1m8vut8g2d8v4eicg.apps.googleusercontent.com';
const API_KEY = 'AIzaSyCHKNdNoQTSlx3XgFFVJ6Q7xo54sF7pkSI';

// Discovery doc URL for APIs used by the quickstart
const DISCOVERY_DOC = 'https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest';

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
const SCOPES = 'https://mail.google.com/';

let tokenClient;
let gapiInited = false;
let gisInited = false;

/**
* Callback after api.js is loaded.
*/
function gapiLoaded() {
    gapi.load('client', initializeGapiClient);
}

/**
* Callback after the API client is loaded. Loads the
* discovery doc to initialize the API.
*/
async function initializeGapiClient() {
    await gapi.client.init({
        apiKey: API_KEY,
        discoveryDocs: [DISCOVERY_DOC],
    });
    gapiInited = true;
    maybeEnableButtons();
}

/**
* Callback after Google Identity Services are loaded.
*/
function gisLoaded() {
    tokenClient = google.accounts.oauth2.initTokenClient({
        client_id: CLIENT_ID,
        scope: SCOPES,
        callback: '', // defined later
    });
    gisInited = true;
}

document.querySelector('#googleIcon').addEventListener('click',()=>{
    tokenClient.callback = async (resp) => {
        if (resp.error !== undefined) {
          throw (resp);
        }
        const token = gapi.client.getToken();
        localStorage.setItem('gmail_token', JSON.stringify(token));
        window.location.href = 'emailAutomation.html';
      };

      if (gapi.client.getToken() === null) {
        // Prompt the user to select a Google Account and ask for consent to share their data
        // when establishing a new session.
        tokenClient.requestAccessToken({prompt: 'consent'});
      } else {
        // Skip display of account chooser and consent dialog for an existing session.
        tokenClient.requestAccessToken({prompt: ''});
      }
});