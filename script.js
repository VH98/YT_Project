function authenticate() {
    return gapi.auth2.getAuthInstance()
        .signIn({scope: "https://www.googleapis.com/auth/youtube.force-ssl"})
        .then(
              function(response) {console.log(response);},

              function(err) { console.error("Error signing in", err); });
  }


  function loadClient() {
    gapi.client.setApiKey("AIzaSyBKkbJ3dtvhFXy_Ljm0Rch5pIzvk_FTz-A");
    return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
        .then(function() { console.log("GAPI client loaded for API"); },
              function(err) { console.error("Error loading GAPI client for API", err); });
  }
  // Make sure the client is loaded and sign-in is complete before calling this method.


  function execute() {
    return gapi.client.youtube.subscriptions.insert({
      "resource": {
        "id": "UC1aVIMKzUWHjpWyowcUi6A"
      }
    })
        .then(function(response) {
                // Handle the results here (response.result has the parsed body).
                console.log("Response", response);
              },
              function(err) { console.error("Execute error", err); });
  }
  gapi.load("client:auth2", function() {
    gapi.auth2.init({client_id: "778551256645-n49usuiedqdothjcf64d473nlhh0iqpo.apps.googleusercontent.com"});
  });


  function search() {
    return gapi.client.youtube.search.list({
      "part": [
        "snippet"
      ],
      "maxResults": 25,
      "q": "sanuka"
    })
        .then(function(response) {
                for(let i=0;i<items.length();i++){
                	console.log(response.result.items[i].snippet.title);
                };// Handle the results here (response.result has the parsed body).
                
              },
              function(err) { console.error("Execute error", err); });
  }
