const dest=[
    {
        image:"/images/goa.jpg",
        place:"Goa",
        details:"Goa over the years has become a prime attraction in this country that <br>hosts a large number of adventurous places Goa provides ample opportunities for adventure enthusiasts to explore the waters and that is one of the reasons why people love visiting this place ",
        price:"7,000",
    

    },
    {
        image:"https://res.cloudinary.com/purnesh/image/upload/w_540,f_auto/land-of-joy.jpg",
        place:"Oaty",
        details:" Trekking across the lush green trail or Nilgiris or Angling at Goad Trout and Carp in<br> Pykara Lake, exploring the landscapes via horse riding, and gliding from the <br>mountain top or the mountain bicycling are some of the fun and adventure activities in Ooty.",
        price:"9,000", 
        
    },

    {
        image:"/images/kerela.jpg",
        place:"Kerala",
        details:"Kerala is famous for its beautiful and pleasing beaches that have numerous <br>opportunities to explore many adventure water sports. During water sports tour you can relish parasailing, snorkeling, scuba diving, surfing, kayaking, kerala boat<br> race and a lot more adventureactivities in kerala.",
        price:"9,500", 
    
        
    },
    {
        image:"https://img.traveltriangle.com/blog/wp-content/uploads/2020/01/Places-to-Visit-in-Darjeeling-in-June_20th-jan1.jpg",
        place:"Kashmir",
        details:"Kashmir who have also introduced several other adventure activities <br>like paragliding where you can fly like a bird and enjoy the panoramic mountain landscapes from the sky, Rock / Sport climbing <br>where you can learn and try out rock climbing, Kayaking along river Teesta,",
        price:"9,500", 
        
    },
    {
        image:"/images/Shimla.jpg",
        place:"Shimla",
        details:"A wide array of adventure sports are offered in Shimla, which includes river rafting, <br>rock climbing, trekking, paragliding, fishing, ice skating, skiing, heli-skiing, mountain biking, cycling and so on",
        price:"9,500", 
        
    }
]

document.getElementById('PopularDestinations').innerHTML=`${dest.map((popdest)=>{

    return `
    <div class="blogpost" data-aos="flip-left">
         <div class="blogpost-img">
           <img src=${popdest.image} width="70%">
        </div>
       <div class="blogpost-info">
       <div class="price">
          <p> Price Starting From: ${popdest.price}</p>
        </div>
          <div class="price">
          <p> </p>
        </div>
         <div class ="blogpost-cont">
             <br>
             <br>
            <h2> ${popdest.place}</h2>
             <p> ${popdest.details}</p>
            <button class="Read">Read More</button>
            <button class="Book">Booking In</button>
          </div>
         
          
       </div>
    </div>
    `

}).join('')}`

