const ideas = [
    {
         img:"https://static.vecteezy.com/system/resources/thumbnails/003/536/323/small_2x/winter-outdoor-skiing-activity-free-vector.jpg",
         text: "Skiing",
         textline:"Skiing is the use of skis to glide on snow.Variations of purpose include basic transport, a recreational activity, or a competitive winter sport.",
    },
    {
        img:"https://st10.cannypic.com/thumbs/40/403939_632_canny_pic.jpg",
        text: "Zip Lines",
        textline:"A zip line is made up of a pulley appended to a stainless-steel cable extended between fixed points of different elevations.  ",
    },
    {
        img:"https://static.vecteezy.com/system/resources/previews/003/419/261/original/rafting-canoeing-kayaking-in-the-river-illustration-vector.jpg",
        text: "Kayaking ",
        textline:"It is distinguished from canoeing by the sitting position of the paddler and the number of blades on the paddle. A kayak is a low-to-the-water",
    },
    {
        img:"https://static.vecteezy.com/system/resources/thumbnails/000/208/412/small/SCUBA_DIVING.jpg",
        text: "Scuba Diving ",
        textline:"Scuba diving is mainly done for the attraction of the unattainable undersea world.  It is one area of nature that mankind ",
    }
]

document.getElementById('Idea').innerHTML=`${ideas.map((po)=>{
    return `
    <div class="cards">
       <div class="imgcont">
          <img src="${po.img}" alt="" width="80%">
       </div>
      <div class="textcont">
         <h2>${po.text}</h2>
         <br>
         <p>${po.textline}</p>
         
      </div>
    </div>
 </div>
    `
  }).join('')}`





