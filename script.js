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
  "lorem" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla iaculis nulla nec bibendum suscipit. Donec ut libero et turpis convallis iaculis. ",
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

let galeriFoto = document.getElementsByClassName('gf');

function view(foto){
  let tmp = document.createElement('div');
  tmp.setAttribute('class','view');
  let gambar = document.createElement('img');
  gambar.src = foto;
  gambar.alt = "gambar";
  gambar.setAttribute('class','viewImage');
  tmp.appendChild(gambar);
  let close = document.createElement('button');
  close.textContent = "x"
  close.setAttribute('class','closeView');
  tmp.appendChild(close);
  document.body.appendChild(tmp);
  close.addEventListener('click',()=>{
    document.body.removeChild(tmp);
  })
  tmp.addEventListener('click',(e)=>{
    if(e.target.hasAttribute("src")){
        
      
    }
    else{
      document.body.removeChild(tmp);
    }
  })
}

for(let gf of galeriFoto){
  gf.addEventListener('click', (e)=>{
    console.log(e.target.src);
    view(e.target.src);
  })
}

   
function copy(ini, data) {
  // Get the text field
  //let teks = document.getElementById(coba);
   let copyText = document.createElement('input');
   copyText.value = data;
  //console.log(copyText.value);
  // Select the text field
   copyText.select();
   copyText.setSelectionRange(0, 99999);
  // For mobile devices
   // Copy the text inside the text field
   navigator.clipboard.writeText(copyText.value)
   .then(
      v => {
         toast('Rekening disalin: ' + copyText.value)
         ini.textContent = "Disalin!"
      },
      e => toast(e.toString())//console.log(e.toString())
   );
}

      
function toast(text){
   let toastIni = document.createElement('div');
    
   toastIni.setAttribute('style',"position: fixed; bottom: 10vh; left: 5%; width: 90%; padding: 2% 5%; background: rgba(120, 193, 243, .9); color: #fff; text-align: center; border-radius: 8px; z-index: 25; font-family: 'Montserrat', Sans-Serif;");
    
   toastIni.setAttribute('class','fadeIn');
   toastIni.innerHTML = `<p class="mb-0">${text}</p>`;
   document.body.appendChild(toastIni);

   setTimeout(()=>{
      toastIni.classList.remove('fadeIn');
      toastIni.classList.add('fadeOut');
      setTimeout(()=>{
        document.body.removeChild(toastIni)
      }, 1000);
   }, 2000);
    
}
  
