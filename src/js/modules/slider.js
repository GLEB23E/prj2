import axios from 'axios';
const slider = () => {
    const total = []
    const photo = document.getElementById('photo')
    const btn1 = document.getElementById('f')
    const btn2 = document.getElementById('s')
    const btn3 = document.getElementById('t')
    const btn4 = document.getElementById('fo')
    const oldpr = document.getElementById('old')
    const newpr = document.getElementById('new')
    function sli() {
        const url = `http://localhost:1337/api/shoesapiplural?populate=*`;
        // http://localhost:1337/uploads/pngegg_bb8f673850.png
        axios.get(url)
            .then(response => {
                const rens = response.data.data
                total.push(rens[0].attributes)
                total.push(rens[1].attributes)
                total.push(rens[2].attributes)
                console.log(rens)
                console.log(total)
                btn2.onclick = function() {
                    photo.src = `http://localhost:1337${total[0].photo.data[0].attributes.url}`;
                    oldpr.textContent = total[0].price
                    newpr.textContent = total[0].price - 200
                    console.log('coni')
                }
                btn3.onclick = function() {
                    photo.src = `http://localhost:1337${total[1].photo.data[0].attributes.url}`;
                    oldpr.textContent = total[1].price
                    newpr.textContent = total[1].price - 200
                    console.log('coni')
                }
                btn4.onclick = function() {
                    photo.src = `http://localhost:1337${total[2].photo.data[0].attributes.url}`;
                    oldpr.textContent = total[2].price
                    newpr.textContent = total[2].price - 200
                    console.log('coni')
                }
                btn1.onclick = function() {
                    photo.src = `./assets/img/running_shoes_PNG5823.png`;
                    oldpr.textContent = 2000
                    newpr.textContent = 1800
                    console.log('coni')
                }
            })
            .catch(error => {
                console.error('There was a problem with your axios request:', error);
            });
        
    }
    sli()
}
export default slider