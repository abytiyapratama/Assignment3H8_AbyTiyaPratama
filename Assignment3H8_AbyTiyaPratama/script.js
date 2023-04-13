const kasusaktif = document.getElementById("kasus-aktif");
const kasusbaru = document.getElementById("kasus-baru");
const kasussembuh = document.getElementById("kasus-sembuh");
const totalkasus = document.getElementById("total-kasus");
const totalmati = document.getElementById("total-mati");
const totaltest = document.getElementById("total-test");

const queryString = window.location.search; 
const urlParams = new URLSearchParams(queryString);
const negara = urlParams.get('formnegara');

function processData(){
    negaranya = negara.value;
    console.log(negaranya);
    fetchStatistic();
}

async function fetchStatistic() {

    const options = {
    method: 'GET',
    url: 'https://covid-193.p.rapidapi.com/statistics',
    params: {country: String(negara) },
    headers: {
        'X-RapidAPI-Key': '04bc1f6dfamshe8fa272a173a503p12d955jsnb3d817298c60',
        'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
    }
    };

    axios.request(options).then(function (response) {
        const objkasus = response.data.response[0].cases;
        const objmati = response.data.response[0].deaths;
        const objtest = response.data.response[0].tests;

        kasusaktif.textContent = objkasus.active;
        kasusbaru.textContent = objkasus.new;
        kasussembuh.textContent = objkasus.recovered;
        totalkasus.textContent = objkasus.total;
        totalmati.textContent = objmati.total;
        totaltest.textContent = objtest.total;
    }).catch(function (error) {
        console.error(error);
    });
    console.log(kasusaktif)
    console.log(kasusbaru)
    console.log(kasussembuh)
    console.log(totalkasus)
    console.log(totalmati)
    console.log(totaltest)
}

fetchStatistic();
