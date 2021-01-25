if(eventobject.launchmode === 4){
    const universalLinkAddress = "https://test-deeplink-memes.herokuapp.com"
    let launchparams = eventobject.launchparams
    if((launchparams !== null || launchparams !== undefined) && launchparams !== {} && launchparams.URL.startsWith(universalLinkAddress)){
      let splitURL = launchparams.URL.replace(universalLinkAddress, "")
      if (splitURL === "/chat") return frmStartChatCred;
    }
  }