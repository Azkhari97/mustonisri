let data = {
  "deskripsi" : "Undangan Pernikahan Mustoni dan Sri Yulianti",
  "pratinjau" : "",
  "judul" : "Pernikahan Mustoni dan Sri Yulianti",
  "nickPutra" : "Mustoni",
  "putra" : "Mustoni, A. Md. Kom",
  "nickPutri" : "Sri Yulianti",
  "putri" : "Sri Yulianti, S. Pd",
  "tanggal" : "Kamis, 18 Juli 2024",
  "akad" : "Kamis, 18 Juli 2024 07:00",
  "resepsi" : "Kamis, 18 Juli 2024 10:00",
  "alamat" : "Dusun Pangungsen, Desa Ciasem Girang, Kecamatan Ciasem, Kabupaten Subang, Jawa Barat",
  "alamatPutra" : "Dusun Margaluyu Timur Gg. 01A, RT 31/ RW 14, Desa Sukamandijaya, Kecamatan Ciasem, Kabupaten Subang",
  "ortuPutra" : "Putra dari Bapak SUDJIMIN (Alm) dan Ibu NURSEHA (Alm)",
  "alamatPutri" : "Dusun Pangungsen RT 18/ RW 05, Desa Ciasem Girang, Kecamatan Ciasem, Kabupaten Subang",
  "ortuPutri" : "Putri dari Bapak ABDUL HAMID dan Ibu SUMIATI",
  "lorem" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla iaculis nulla nec bibendum suscipit. Donec ut libero et turpis convallis iaculis. Duis turpis nulla, ullamcorper et odio a, fringilla ultricies nisl. Pellentesque ullamcorper tellus magna, in pellentesque dolor luctus sed. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed eu sapien in lacus lacinia aliquet. Mauris ex enim, auctor sit amet varius rutrum, lacinia vel metus. Nullam eros sem, accumsan ac diam a, commodo viverra metus. Quisque sagittis nisi a scelerisque porta. In elementum tellus sit amet molestie rutrum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ornare tempor arcu fringilla dignissim. Morbi accumsan quis arcu at finibus. Ut quis varius eros. Morbi ut quam non urna elementum dictum.",
}

data['hariA'] = data.akad.split(',')[0]
data['hariR'] = data.resepsi.split(',')[0]

data['tglA'] = data.akad.split(' ')[1]
data['tglR'] = data.resepsi.split(' ')[1]

data['jamA'] = data.akad.split(' ')[4]
data['jamR'] = data.resepsi.split(' ')[4]

data['blnA'] = data.akad.split(' ')[2]
data['blnR'] = data.resepsi.split(' ')[2]

data['thnA'] = data.akad.split(' ')[3]
data['thnR'] = data.resepsi.split(' ')[3]


let data_bind = document.getElementsByClassName('data');

for(let bind of data_bind){
  //console.log(bind.getAttribute('d'))
  //console.log(data[bind.getAttribute('d')])
  if(bind.hasAttribute('content') == true){
    bind.setAttribute('content', data[bind.getAttribute('d')])
  }
  else {
    bind.textContent = 
    data[bind.getAttribute('d')]
  }
}

let buka = document.getElementById('buka');
let cover = document.getElementById('cover')
buka.addEventListener("click",(e)=>{
  
  console.log(cover.style.display)
  cover.style.animation = "swipeUp 2s 1 ease";
  setTimeout(function() {
    cover.classList.replace("d-flex","d-none");
  }, 2000);
} )

let stars = document.getElementsByClassName('star');

function glitter(el, n){
for(let ix = 0; ix < n; ++ix){
let star = document.createElement('span');
star.setAttribute('class','star');
star.setAttribute('style','');
let acakX = Math.round(Math.random()*100);
let acakY = Math.round(Math.random()*100);
//let acakD = Math.round(Math.random()*2);
  star.style.top = acakX + "%";
  star.style.left = acakY + "%";
  //star.style.animationDelay = acakD + "s";
el.appendChild(star);
  setTimeout(()=>{el.removeChild(star)}, 2000);
}
}

let star1 = document.getElementById('star1')
let star2 = document.getElementById('star2')
let cerita = document.getElementById('cerita')
let pasangan = document.getElementById('pasangan')

glitter(star1, 15)
glitter(star2, 15)

let s1 = setInterval(()=>{
glitter(star1, 15)
}, 2000);

let s2 = setInterval(()=>{
glitter(star2, 15)
}, 2000);

let c1 = setInterval(()=>{
  glitter(cerita, 55);
}, 2000);

let p1 = setInterval(()=>{
  glitter(pasangan, 45);
}, 2000);
