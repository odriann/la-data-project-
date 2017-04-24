// Use the fetch function
// to grab some data
// from the LA Open Data API

// We're going to display that data on our index.html file
// Bootstrap as the primary styling library
// Materialize
// https://data.lacity.org/A-Prosperous-City/New-Housing-Units-Permitted/5u9x-y4iz/data

//function getLADataFromAPI(){
    var endpoint = 'https://data.lacity.org/resource/5u9x-y4iz.json'
    
    fetch(endpoint) 
    .then(function(data){
        return data.json()
    })
    .then(function(json){
        console.log(json);
        
        var resultDiv = document.getElementById('result');
        
        var finalHTML = `
            <li>
                House Cost: $${json[0].valuation}
                <br />
                Number of Stories: ${json[0].of_stories}
                <br />
                Address: ${json[1].street_name} ${json[0].street_suffix} ${json[0].zip_code}
                <br />
                Contractor Location: ${json[1].contractor_address}
            </li>
        `;
        resultDiv.innerHTML = finalHTML;
    })
    .catch(function(error){
        console.log(error)
  })
//}