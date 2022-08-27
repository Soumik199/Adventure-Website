const product = [
    {
       prodimg:"/image/product-1.jpg",
       prodtitle:"Survial kits",
       prodprice:"$10.00 - $20.00",
    },
    {
        prodimg:"/image/product-2.jpg",
        prodtitle:"Survial kits",
        prodprice:"$15.00 - $20.00",
     },
     {
        prodimg:"/image/product-3.jpg",
        prodtitle:"Survial kits",
        prodprice:"$25.00 - $20.00",
     },
     {
        prodimg:"/image/product-4.jpg",
        prodtitle:"Survial kits",
        prodprice:"$15.00 - $20.00",
     },
     
]
document.getElementById('product').innerHTML=`${product.map((pro)=>{

    return `
    <div class="card" data-aos="zoom-in-down">
        <div class="imagebox">
          <img src= ${pro.prodimg} width="100%">
         </div>
         <div class="text">
         <h2>${pro.prodtitle}</h2>
         <h3>${pro.prodprice}</h3>
         </div>
        
    </div>
    `
    
}).join('')}`