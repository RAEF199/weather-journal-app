

// Personal API Key for OpenWeatherMap API
const baseUrl = `https://api.openweathermap.org/data/2.5/weather?zip=`;
const apiKey = '&appid=dd879efbf8bd6ba48358a59e0941cb71';

/* Function to GET Web API Data*/
const getData = async(url, zip, key)=>{
const response = await fetch(url+zip+',us'+key)
try{
    const data = response.json();
    console.log(data);
    return data;
}catch(error){
    console.log(error);
}
}

/* Function to POST data */
const postData = async (url='', data={})=>{
    const response= await fetch(url, {
        method: 'POST',
        credentials: 'same-origin', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).then(response => response.json());
    try{
       // const data = await response.json();
        console.log(response);
    }catch(error){
        console.log(error);
    }
};

const updateUI = async ()=>{
    const request = await fetch('/all');
    try{
        const allData = await request.json();
        document.getElementById('temp').innerHTML = allData.temp;
        console.log();
        document.getElementById('date').innerHTML = allData.date;
        console.log();
        document.getElementById('content').innerHTML = allData.user_response;
    }catch(error){
        console.log('error', error);
    }

};

// Event listener to add function to existing HTML DOM element
// Function called by event listener */
document.getElementById('generate').addEventListener('click', ()=>{
    const zip = document.getElementById('zip').value;
    const feeling = document.getElementById('feelings').value;
    const date = new Date();
    getData(baseUrl,zip,apiKey).then(function (data){
        postData('/all', { temp: data.main.temp, date: date, user_response: feeling})
    }).then(updateUI());}
);

/* Function to GET Project Data */



