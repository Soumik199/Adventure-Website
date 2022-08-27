const pack =
[
    {
        place:"Kashmir Adventure Package",
        img:"/images/kashmir.jpg" ,
    },

    {
        place:"Srinagar Adventure Package",
        img:"/images/Srinagar.jpg",
     },
       
     {
        place:" Lakdha Adventure Packages",
        img:"/images/Leh.jpg",
    },
    {
        place:"Manali Adventure Packages",
        img:"/images/Manali.jpg",
    },

    {
        place:"Uttarakhand Adventure Package",
        img:"/images/Uttarakhand.jpg",
    },
    {
        place:"Pahalgam Adventure Package",
        img:"/images/Pahalgam.jpg",
    },
    
]

document.getElementById('Packages').innerHTML=`${pack.map((packs)=>{
    
    return `
    <div class="cardbox">
        <div class="imgboxs">
          <img src= ${packs.img} width="100%">
         </div>
         <div class="context">
            <h3>${packs.place}</h3>
            <p>
        </div>
    </div>
    `

}).join('')}`

