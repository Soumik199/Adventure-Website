const serviceworks =
[
  
    {
        image:"https://866649.smushcdn.com/2093832/wp-content/uploads/2020/05/GettyImages-1158599110-768x703.jpg?lossy=0&strip=1&webp=1",
        typeofservice:" Provide Rental <br>car and  bikes ",
        servicework:"Provide rental Bike and car <br>for tour or any adventrous jounery with family or friends",
    },
    {
        image:"/image/travel.jpg",
        typeofservice:"Experienced Guides<br> Camping facilities ",
        servicework:"Provide Experinenced guides and camping facilities if they selected a adventrous tour",
    },
    {
        image:"/image/support1.jpg",
        typeofservice:" 24*7 call and<br> chat support ",
        servicework:" we provide 24*7 hours call and chat support to our customers and suggest the best tour packages.",
    },
 
    
];
document.getElementById('service').innerHTML=` ${serviceworks.map((services)=>{

    return `
            <div class="car">
                    <div class ="imbox">
                       <img src = ${services.image} " width="100%">
                    </div>
                 <div class ="details">
                 <h4>${services.typeofservice}</h4>
                <p>${services.servicework}</p>
             </div>
            </div>
      </div>
    `

}).join('')}`