// $(document).ready(function(){
//   $(window).scroll(function(){
//     if(this.scrollY > 20){
//       $('.navbar').addClass("sticky");
//     } else{
//       $('.navbar').removeClass("sticky");
//     }
//   });
 
 //  toggle menu btn navbar
 $('.menu-btn').click(function(){
  $(".navbar .menu").toggleClass("active");
  $(".menu-btn i").toggleClass("active");
});


// });

// quotes

const quotes = [{
  quote: `🌙Yeah it iz Friday Night im walking home tonight🌙`,
  author: `- Moonwalk🌙👣`
}, {
  quote: `🦋Nabi bogoshipo, nabi ~ nabi bogoshipo🦋`,
  author: `- Nabi Bogoshipo`
}, {
  quote: `✨Tansuy Prosto Tansuy, Da divigay Nogami ~ Nogami✨`,
  author: `- Kelly Demo`
}, {
  quote: `🎵❤️Its Okay to Fail at Times cauze we got these people🎵❤️`,
  author: `- Its Okay`
}, {
  quote: `🌃Beautiful, so Beautiful Around the World, Around the World🌃`,
  author: `- Beautiful Place`
}, {
  quote: `❤️🎧Ikaw ang gusto kong Makasama sa Mundo ooh ooh❤️🎧`,
  author: `- Ikaw ang Gustong Makasama`
}, {
  quote: `🎹🎶Everyday in a Movie, in a Game, in a Drama is what I do to relax my Mind and BodyMusi🎹🎶`,
  author: `- My Everyday`
}, {
  quote: `💫1 2 3 4 5 Im counting all of the Stars in the Dark Night Sky💫`,
  author: `- Stars in the Dark Night Sky`
}, {
  quote: `💕Your My Everything, Your My Destiny and well be together for eternity ٨ـﮩﮩ❤٨ـﮩﮩـ━❤️❥❥`,
  author: `- FLOW`
}, {
  quote: `🔥Yeah you are just like a Candle, cauze you light up my Pathway🔥`,
  author: `- Music I hear on your Phone`
}, {
  quote: `🎶I have this fantasy in my mind till you came right here By My Side🎶`,
  author: `- Be By My Side`
}, 
{
  quote: `☁️Rain is Falling right now outside, Im just stayin inside my House☁️`,
  author: `- Rain is Falling `
}, 
{
  quote: `♡❤️🎵Love your partner, Love your children and love your Parents, Du, du ,du doo dooo doo dooo ♡❤️🎵`,
  author: `- Family`
}, 
{
  quote: `☀️☁️Ako ay may Panaginip, Ikaw ay nandoon at ikaw ay nasa tabi ko, sa Paraiso☀️☁️`,
  author: `- Paraiso`
}, 
{
  quote: `💕💕One Day I was born in this Big Wide Wide World, Yeah! Yeah! Yeah! Yeah!💕💕`,
  author: `- Love is Powerful`
}, 
{
  quote: `𝄟🎶You're so good My Future Spouse, wanna be with you My Future Spouse, wanna live with you My Future Spouse Foreverrr𝄟🎶`,
  author: `- My Future Spouse`
}, 
{
  quote: `🎶One Late Night in this City there's no light yeah yeahhh, cauze tonight it is brownout and I dont know what to do oooh🎶`,
  author: `- Brownout`
}, 
{
  quote: `🥀🥀How much more do I have to wait, until I can see your face again, Im always looking at your pictures, cauze I am missing you🥀🥀`,
  author: `- あいたいです`
},
{
  quote: `🐣✨Hana, Dul, Set, Net, Come on Let's Dance right now Yeah! Yeah! Yeah! Yeah!🐣✨`,
  author: `- Come on Let's Dance`
}, 
{
  quote: `🍩Gusto ko ng Tinapay na may Kape pa, Gusto ko ng Tinapay na may Kape🍩`,
  author: `- Tinapay na may Kape`
},
{
  quote: `🍋I wake up in this new day, I think it's gonna be a Good Day, I might go outside and pray, and might as well Do Hoondokhae🍋`,
  author: `- Do Hoondokhae`
}, 
{
  quote: `🥭I Dont Wanna Die, Yeah I Dont Wanna Die, I Dont Wanna Die cauze I Wanna Be Alive🥭`,
  author: `-  I Dont Wanna Die `
},
{
  quote: `🍑I am now one year older I am right now 21 Today maybe ill blow out the candles and gonna eat some Spaghetti🍑`,
  author: `- Today is My Birthday`
}

]
// New Quote Button
const quoteBtn = document.getElementById('quote-btn');
// Get Quote and author Section
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
// Event Handler
quoteBtn.addEventListener('click', () => {
  let random = Math.floor(Math.random() * quotes.length);
  quote.innerHTML = quotes[random].quote;
  author.innerHTML = quotes[random].author;
})

const observer = new  IntersectionObserver((entries) =>{

    entries.forEach((entry) =>{
  
      if (entry.isIntersecting  ){
        entry.target.classList.add('show');
      } else{
        entry.target.classList.remove('show');
      }
    });

});
const observer2 = new  IntersectionObserver((entries) =>{

  entries.forEach((entry) =>{

    if (entry.isIntersecting  ){
      entry.target.classList.add('showright');
    } else{
      entry.target.classList.remove('showright');
    }
  });

});
const observer3 = new  IntersectionObserver((entries) =>{

  entries.forEach((entry) =>{

    if (entry.isIntersecting  ){
      entry.target.classList.add('showup');
    } else{
      entry.target.classList.remove('showup');
    }
  });
  

});


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


const hiddenElements2 = document.querySelectorAll('.hidden-right');
hiddenElements2.forEach((el) => observer2.observe(el));


const hiddenElements3 = document.querySelectorAll('.hidden-up');
hiddenElements3.forEach((el) => observer3.observe(el));




