const article = [
   {
      image:'/images/arti1.jpg',
      heading:'SOLO TRAVEL',
      date:'4 days ago',
      Desc:'I did my first trip alone at the age of 19. Since then, I try to plan at least one solo trip a year and travel somewhere completely on my own. Dare to live the life you always wanted.',
      
   },
   {
      image:'/images/arti2.jpg',
      heading:'CAMP & BONDFIRE',
      date:'1 days ago',
      Desc:'Your practice should be strengthened by the <br>difficult situations you encounter,<br> just as a bonfire in a strong wind is not blown out, but blazes even brighter.Life Is Best When You are Camping .',
      
   },
   {
      image:'/images/arti4.jpg',
      heading:'WITH FAMILY',
      date:' 6 days ago',
      Desc:'In family life, love is the oil that eases friction, the cement that binds closer together, and the music that brings harmony.The most important thing in the world is family and love',
   },
   
   {
      image:'/images/arti5.jpg',
      heading:'SPORT',
      date:'4 days ago',
      Desc:'We live in a wonderful world that is full of beauty, charm and adventure. There is no end to the adventures that we can have if only we seek them with our eyes open.Life is either a daring adventure or nothing',
   },
   {
      image:'/images/arti6.jpg',
      heading:'TRAVELLER',
      date:'4 days ago',
      Desc:'Why do you go away? So that you <br>can come back. So that you can see the place you came from with new eyes and extra colors. And the people there see you differently, too. ”',
   },
   {
      image:'/images/arti8.jpg',
      heading:'COUPLES GOAL',
      date:'10 days ago',
      Desc:'When you realize you want to spend <br>the rest of yourlife with somebody, <br>you want the rest of your life to start as soon as possible.Date someone who is a home and an adventure all at once',
   },
   {
      image:'/images/arti9.jpg',
      heading:'SOLO RIDER',
      date:'2 days ago',
      Desc:'A motorcycle is like a drug but it doesn’t clog your arteries, impair your brain function, or send you to a rehabilitation centre. Plus, it’s completely legal (if you have a licence).',
   }
]
document.getElementById('news').innerHTML=`${article.map((poi)=>{
  return `
  <div class="card">
         <div class="contain">
            <img src ="${poi.image}" width="100%">
         </div>
            <h3 class="date">${poi.heading}</h3>
             <p class="dates">${poi.date}</p>
             <p class="dates">${poi.Desc}</p>
             <p class="dat"><a href="#">Read More..</a></p>
           </div>
  `
}).join('')}`