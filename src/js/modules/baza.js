import axios from 'axios';
const Jet = () => {
    let all = document.querySelectorAll('.grid-item');
    console.log(all)
    function getWeather() {
        const url = `http://localhost:1337/api/shoesapiplural?populate=*`;
        // http://localhost:1337/uploads/pngegg_bb8f673850.png
        let i = 0
        axios.get(url)
            .then(response => {
                // Обработка полученных данных
                const rens = response.data.data
                console.log(rens)
                all.forEach(item => {
                    const textElement = item.querySelector('.gridtxt'); 
                    const imgElement = item.querySelector('.gridimg');
                    let sr = rens[i].attributes.photo.data[0].attributes.url
                    console.log(sr)
                    imgElement.src = `http://localhost:1337${sr}`;
                    // Выбираем элемент с классом "gridtxt" внутри каждого блока "grid-item"
                    textElement.textContent =  rens[i].attributes.name
                    i++ // Получаем текстовое содержимое элемента
                });
            })
            .catch(error => {
                console.error('There was a problem with your axios request:', error);
            });
    }
    getWeather()
}
export default Jet