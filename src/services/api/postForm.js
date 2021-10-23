export default {
  postForm: function ( data ) {
    return fetch('https://webto.salesforce.com/servlet/servlet.WebToCase?encoding=UTF-8', {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      body: data
    }).catch(function(err) {
      console.log(err);
    });
  }
}