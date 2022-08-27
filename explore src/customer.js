const exp =[
    {
       img:"https://media.istockphoto.com/photos/adventure-man-picture-id527839513?k=6&m=527839513&s=170667a&w=0&h=wZ3Px9-e3XzQ0upFEzpeTKngmrb3SnOCuO_WJR90r8o=",
       name:"soumik",
       email:"soumik@gmail.com"
    },
    {
      img:"https://th.bing.com/th/id/OIP.6fk_qiAEX3PK3iHl_Ocb4gHaE7?pid=ImgDet&w=2048&h=1362&rs=1",
      name:"soumik",
      email:"soumik@gmail.com"
   },
    {
        img:"https://th.bing.com/th/id/OIP.Sxx8WZ-UdJgTFHXRAxXC4AHaHa?pid=ImgDet&rs=1",
        name:"soumik",
        email:"soumik@gmail.com"
     },
    
     {
        img:"https://live.staticflickr.com/4670/25203033737_91baa8dd7d_b.jpg",
        name:"soumik",
        email:"soumik@gmail.com"
     },
     



]



document.getElementById('exp').innerHTML=`${exp.map((point)=>{

    return `     
    <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <img src="${point.img}" alt="Avatar" style="width:250px;height:260px;">
      </div>
      <div class="flip-card-back">
        <h1>${point.name}</h1>
        <p>${point.email}</p>
        <p>We love that guy</p>
      </div>
    </div>
  </div>

    `

}).join('')}`
