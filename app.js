
const api_url = 'https://api.wheretheiss.at/v1/satellites/25544/positions?timestamps=1436029892,1436029902&units=miles';
async function getISS(){
    const response = await fetch(api_url)
    const data = await response.json();
    //const { latitude, longitude }= data;
    //console.log(data)
    console.log(data.latitude)
    console.log(data.longitude)
}
getISS();