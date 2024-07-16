// let start = 0
// let end = 10
// const API = `https://jsonplaceholder.typicode.com/posts?_start=${start}&_end=${end}`

// const data_display = async () =>{
 
//     // 'https://jsonplaceholder.typicode.com/posts?_start=start&_end=end'
    
//     const result = await fetch(API)
//     const data = await result.json()

//     data.forEach((element) => {
//         const data_result = document.getElementById('overview')
//         const div_data = document.createElement('div')
//         div_data.className = 'data_result'
//         const div1 = document.createElement('div')
//         const div2 = document.createElement('div')
//         div1.id = 'show_id'
//         div1.innerHTML = element.id 
//         div2.id = 'show_data'
//         div2.innerHTML = element.body 
//         div_data.appendChild(div1)
//         div_data.appendChild(div2)
//         data_result.appendChild(div_data)
//     });
// }

// function getNextPostsCount() {
//     const postHeight = 90;
//     const newPostCount = Math.ceil(window.innerHeight / postHeight);
//     console.log(newPostCount)
//     // return start + newPostCount;
//   }

// // window.addEventListener('scroll', data_display)
// getNextPostsCount()
// data_display()

let ready = false;
const count = 10;
let imagesLoaded = 0;

const App_ID = 633574;
// const API_Key = 'UZET0MoBjP5LA5jcLKsyp_V4vqmLUD79E6ghhPd9l2Q';
const API_Key = '_DDIVJSgdK-GI1wA3aHOtxC9YTt8tCY6-4jMk7guznY';
const Secret_Key = 'p0D6omXtBuqWuT_LSmxnuoZFuFGZH5t_TyKPN7jAFH0';
const API_Url = `https://api.unsplash.com/photos/random/?client_id=${API_Key}&count=${count}`

const getImages = async() =>{
    try{
        const response = await fetch(API_Url);
        const ImagesArray  = await response.json();
        display_images(ImagesArray)
    }catch(e){
        console.log(e)
    }
    
}

const onLoadImage = () =>{
    imagesLoaded++;
    if(count === imagesLoaded){
        ready = true;

        console.log('All Images are loaded ready to call API')
    }
    
}

const image_collection = document.getElementById('image_collection')
const display_images =(imagesArray) =>{
    imagesArray.forEach((imageObj) => {
        const img = document.createElement('img')
        img.src= imageObj.urls.regular
        img.alt="Random Img"
        img.addEventListener('load',onLoadImage)
    image_collection.appendChild(img)
    });
}
getImages()
// display_images()

window.addEventListener('scroll', () =>{
    if(window.scrollY + window.innerHeight > document.body.offsetHeight && ready === true){
        ready = false
        imagesLoaded=0
        getImages()
    }
})
