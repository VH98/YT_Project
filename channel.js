var chnlArray = new Array(50);

function Channel(channelTitle, channelID) {
  this.channelID = channelID;
  this.channelTitle = channelTitle;
}
function channelArray() {
  for (let i = 0; i < 50; i++) {
    chnlArray[i] = new Channel(channelTitle, channelID);
  }

}
async function addChannels() {
  for (let i = 0; i < itemArray.length; i++) {
    channelTitle = itemArray[i].snippet.title;
    channelID = itemArray[i].snippet.resourceId.channelId;
    await insert_value();
    await waiting();
  }
}
