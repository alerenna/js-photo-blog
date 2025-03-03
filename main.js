// DOM const
const blogEl = document.querySelector('.blog')

//Functions
// create a markup generator function
function markupCardGenerator(pic) {

    const markup =
    `<div class="co d-flex justify-content-center">
        <div class="card-custom bg-body mt-4 position-relative" >
            <img class="pin position-absolute top-0 start-50 translate-middle" src="./assets/img/pin.svg" style="width:2rem;" alt="">

            <img src=${pic.url} class="card-img-top p-3" alt="...">
            <div class="card-body">
                <h6 class="card-date mb-2 text-muted ps-3">${pic.date}</h6>
                <h5 class="card-title ps-3 pb-3">${pic.title}</h5>

            </div>
        </div>
    </div>`

    return markup

}

//create a function insert the card in the DOM
function cardDisplayer(res){
    let pictureList = res.data

        pictureList.forEach(pic => {
            console.log(pic);

            const markup = markupCardGenerator(pic)

            blogEl.insertAdjacentHTML('beforeend', markup)
            
        }); 
  
}


//axios call for find the objects and call inside the display fucntion
axios.get('https://lanciweb.github.io/demo/api/pictures/')
    .then(res => {
        console.log(res.data);

        cardDisplayer(res)

    })
    .catch(error => { console.log(error); })









