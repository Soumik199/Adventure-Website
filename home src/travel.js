const photo=[
    {
        img:'/images/pic1.jpeg',
    },
    {
        img:'/images/pic2.jpg',
    },
    {
        img:'/images/pic3.jpg',
    },
    {
        img:'/images/pic4.jpg',
    },
    {
        img:'/images/pic5.jpg',
    },
    {
        img:'/images/pic7.jpg',
    },
    {
        img:'/images/pic6.jpg',
    },
    {
        img:'/images/pic8.jpg',
    },
 
]
document.getElementById('Travel').innerHTML=`${photo.map((collective)=>{
   return `
    <div class="photo">
         <div class="imbox">
              <img src =${collective.img} width="70%">
        </div>
    </div>
   `

}).join('')}`