  function authenticate() {
    return gapi.auth2.getAuthInstance()
      .signIn({ scope: "https://www.googleapis.com/auth/youtube.readonly" })
      .then(function() { console.log("Sign-in successful"); },
        function(err) { console.error("Error signing in", err); });
  }

  function loadClient() {
    gapi.client.setApiKey("AIzaSyDWYy5R6uUj7ok-IdZj7gg5tVMV9KQxe7g");
    return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
      .then(function() { console.log("GAPI client loaded for API"); },
        function(err) { console.error("Error loading GAPI client for API", err); });
  }
  // Make sure the client is loaded and sign-in is complete before calling this method.
  var channelTitle = null;
  var channelID = null;
  var flag = 0;
  var itemArray = null;

  function execute() {
    return gapi.client.youtube.subscriptions.list({
        "part": [
        "id",
        "snippet"
      ],
        "maxResults": 50,
        "mine": true
      })
      .then(function(response) {
          itemArray = response.result.items;
          for (let i = 0; i < itemArray.length; i++) {
            channelTitle = itemArray[i].snippet.title;
            channelID = itemArray[i].snippet.resourceId.channelId;
            console.log("Name", channelTitle);
            console.log("ID", channelID);
            channelArray();







          }

          // Handle the results here (response.result has the parsed body).

        },
        function(err) { console.error("Execute error", err); });
  }
  gapi.load("client:auth2", function() {
    gapi.auth2.init({ client_id: "121206852478-tml3h641sopouggoojl2iumcnjmn4ft8.apps.googleusercontent.com" });
  });
  