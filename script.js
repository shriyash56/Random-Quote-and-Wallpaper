
function changeBG() {
  
var value = document.getElementById("searchInput").value;
fetch(`https://pixabay.com/api/?key=19876420-6d828e4ed12874fee77ec4364&q=${value}&image_type=photo&pretty=true`)
  .then(response => response.json())
  .then(result => {
     var numberOfimg=20;
     console.log(numberOfimg);
     var min=1;
     var randomimg= Math.floor(Math.random() * (numberOfimg - min) + min);
      console.log(randomimg);
      document.body.style.backgroundImage ='url('+ result.hits[randomimg].largeImageURL +')';
      
  })
  .catch(error => console.log('error', error));
}



fetch("https://type.fit/api/quotes")
  .then(response => response.json())
  .then(result => {
    var arrayText= result[Math.floor(Math.random() * result.length)];
    var quotes=arrayText.text;
    document.getElementById("quotes").innerHTML='"'+quotes+'"';
    setInterval(function(){
    var arrayText= result[Math.floor(Math.random() * result.length)];
    var quotes=arrayText.text;
    document.getElementById("quotes").innerHTML=quotes;},86400000)
  })
  .catch(error => console.log('error', error));


  