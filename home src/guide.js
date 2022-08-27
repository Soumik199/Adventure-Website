const guide = [
    {
        name:"Lawrence Block",
        role:"Senior Guide",        
        img:"/images/picture3.png",
        desc:"Our happiest moments as tourists always seem to come when we stumble upon one thing while in pursuit of something else",
    },
    {
        name:"Lisa France",
        role:"Travel Guide",
        img:"/images/picture2.png",
        desc:"I always wonder why birds stay in the same place when they can fly anywhere on Earth. Then I ask myself the same question",
    },
  
    {
        name:"Anatole France",
        role:" Junior Guide",
        img:"/images/person.png",
        desc:"You don’t choose the day you enter the world and you don’t chose the day you leave. It’s what you do in between that makes all the difference",
    },
    
]
document.getElementById("Guide").innerHTML =`${guide.map((fetch)=>{
 return `
   <div class="team">
      <div class ="team_member">
         <div class="teamimg">
         <img src="${fetch.img}" width="70%">
         </div>
         <br>
         <br>
         <h3 id="color">${fetch.name}</h3>
         <p class="rol">${fetch.role}</p>
         <p>${fetch.desc}</p>
        </div>
    </div>
 `

}).join('')}`