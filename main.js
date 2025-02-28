// DOM const
const blogEl = document.querySelector('.blog')

//axios call for find the objects
axios.get('https://lanciweb.github.io/demo/api/pictures/')
    .then(res => {
        console.log(res.data);

        pictureInfo.forEach(thisPic => {
            console.log(thisPic);
    
            const titlePic = thisPic.title
            console.log(titlePic);
            const datePic = thisPic.date
            console.log(datePic);
            const urlPic = thisPic.url
            console.log(urlPic);
            
    
            markupCard()     
            
        });

        blogEl.appendChild()





    })
    .catch(error => { console.log(error); })


// create a markup function
function markupCard(titlePic, datePic, urlPic) {

    const markup =
    `<div class="col-4">
        <div class="card-custom bg-body m-5 position-relative" style="width:18rem;">
            <img class="pin position-absolute top-0 start-50 translate-middle" src="assets/img/pin.svg" style="width:2rem;" alt="">

            <img src=${urlPic} class="card-img-top p-3" alt="...">
            <div class="card-body">
                <h6 class="card-date mb-2 text-muted ps-3">${datePic}</h6>
                <h5 class="card-title ps-3 pb-3">${titlePic}</h5>

            </div>
        </div>
    </div>`

}

//create a function for generate the cards
function cardGenerator(){

  
}






