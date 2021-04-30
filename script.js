const CITIES = [
    {
        enName: 'Vinnytsia',
        ruName: 'Винница',
    },
    {
        enName: 'Dnipropetrovsk',
        ruName: 'Днепр',
    },
    {
        enName: 'Donetsk',
        ruName: 'Донецк',
    },
    {
        enName: 'Zhytomyr',
        ruName: 'Житомир',
    },
    {
        enName: 'Zaporizhia',
        ruName: 'Запорожье',
    },
    {
        enName: 'Ivano-Frankivsk',
        ruName: 'Ивано-Франковск',
    },
    {
        enName: 'Kyiv',
        ruName: 'Киев',
    },
    {
        enName: 'Kirovohrad',
        ruName: 'Кропивницкий',
    },
    {
        enName: 'Luhansk',
        ruName: 'Луганск',
    },
    {
        enName: 'Lutsk',
        ruName: 'Луцк',
    },
    {
        enName: 'Lviv',
        ruName: 'Львов',
    },
    {
        enName: 'Mykolaiv',
        ruName: 'Николаев',
    },
    {
        enName: 'Odessa',
        ruName: 'Одесса',
    },
    {
        enName: 'Poltava',
        ruName: 'Полтава',
    },
    {
        enName: 'Rivne',
        ruName: 'Ровно',
    },
    {
        enName: 'Sumy',
        ruName: 'Сумы',
    },
    {
        enName: 'Ternopil',
        ruName: 'Тернополь',
    },
    {
        enName: 'Uzhgorod',
        ruName: 'Ужгород',
    },
    {
        enName: 'Kharkiv',
        ruName: 'Харьков',
    },
    {
        enName: 'Kherson',
        ruName: 'Херсон',
    },
    {
        enName: 'Khmelnytskyi',
        ruName: 'Хмельницкий',
    },
    {
        enName: 'Cherkasy',
        ruName: 'Черкасы',
    },
    {
        enName: 'Chernihiv',
        ruName: 'Чернигов',
    },
    {
        enName: 'Chernivtsi',
        ruName: 'Черновцы',
    },
    {
        enName: 'Avtonomna Respublika Krym',
        ruName: 'АР Крым',
    },
    {
        enName: 'Sevastopol',
        ruName: 'Севастополь',
    },
]

CITIES.forEach(function (cityName) {
    let option = document.createElement("option");
    citySelect.appendChild(option);
    option.value = `${cityName.enName}`;
    option.innerHTML = `${cityName.ruName}`;
});

document.getElementById('citySelect').addEventListener('change', fetchInformation);

fetchInformation();

function fetchInformation() {
    let selOption = document.getElementById('citySelect').selectedIndex;
    let options = document.getElementById('citySelect').options;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${options[selOption].value}&lang=ru&appid=49d74620c522f8697439d79e0c969eea`)
        .then(function (resp) {
            return resp.json()
        })
        .then(function (data) {
            console.log(data);
            document.querySelector('.temperature').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
            document.querySelector('.weather').textContent = data.weather[0]['description'];
            document.querySelector('.weatherIcon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
        })
}