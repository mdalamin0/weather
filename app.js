const API_KEY = `8b819b5d00ca390e4dbe5776dce11de9`;
const loadTemparature = (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then(response => response.json())
    .then(data => displayTemparature(data))
    
}

const displayTemparature = (temparatures) => {
    console.log(temparatures);
    const {main, name, weather} = temparatures;
    setInnerTextById('temperature', main.temp);
    setInnerTextById('city-name', name);
    setInnerTextById('clouds', weather[0].main);
}
// common function get by id 
const setInnerTextById = (id, text) => {
    const temperature2 = document.getElementById(id);
    temperature2.innerHTML = text;
    
}
const searchTemperatur = (e) =>{
    const searchField = document.getElementById('search-field').value;
    document.getElementById('search-field').value = '';
    loadTemparature(searchField);
}
document.getElementById('search-field').addEventListener('keyup', function(e){
    if(e.key === 'Enter'){
        loadTemparature(e.target.value);
        document.getElementById('search-field').value = '';
    }
})


loadTemparature('mymensingh');