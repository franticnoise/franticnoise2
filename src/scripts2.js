export function createGumroad(idtarget, image, url ) {
  const gumroad = `<div id="cell"><img style="width: 240px" class="gumroadimg" src="../img/${image}"/>
  <a class="gumroad-button" href="https://franticnoise.gumroad.com/l/${url}">Buy on</a></div>`;
  console.log(gumroad);
  return (document.getElementById(idtarget).innerHTML = gumroad);
}

export function createBandcamp(album_id, idtarget) {
  const bandcamp = `<iframe class="iframe_bandcamp" src="https://bandcamp.com/EmbeddedPlayer/album=${album_id}/size=large/bgcol=333333/linkcol=fe7eaf/minimal=true/transparent=true/" seamless></iframe>`
  return (document.getElementById(idtarget).innerHTML = bandcamp);
}

export function createYoutube(video_link, idtarget ) {
  const youtube =  `<iframe src="https://www.youtube.com/embed/${video_link}?controls=0"
    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    style="border-radius:18px" class="iframe_props" allowfullscreen></iframe>`
    return (document.getElementById(idtarget).innerHTML = youtube);
}

export function createSoundcloud(cloud_link, idtarget ) {
  const soundcloud =  `<iframe scrolling="no" frameborder="no" allow="autoplay" class="iframe_souncloud" 
  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${cloud_link}&color=%23272626&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
  ></iframe>`
    return (document.getElementById(idtarget).innerHTML = soundcloud);
}

export function createHead(pagename) {
  const headinfo = `<title>Frantic Noise ${pagename}</title><meta charset="UTF-8" />` +
    `<meta name="viewport" content="width=device-width" /><script src="https://gumroad.com/js/gumroad.js"></script>` +
    `<link rel="stylesheet" href="css/styles.css" /><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>` +
    `<link rel="stylesheet" href="css/style-iframe.css" />`;
    return document.getElementById("head").innerHTML = headinfo
}

////////////// GUMROAD JSON PARSE 

export function gumroadScripts() { 
  const script = document.createElement("script");
  script.src = "https://assets.gumroad.com/packs/js/overlay-499efd442e6f54649ee6.js";
  script.charset = "utf-8";
  document.head.appendChild(script);
  document.head.innerHTML += '<link rel="stylesheet" href="https://assets.gumroad.com/packs/css/overlay-9325a7da.css" media="screen" />';
}

export async function loadJson(section) {


  
  const res = await fetch("../src/gumroad.json");
  const json = await res.json();

  let gid = 1;
  for (let i = 0; i < json.gumroad.length; i++) {
    if (json.gumroad[i].cat === section) {
      const gumroadList = document.getElementById("container");
      gumroadList.className = "js-container js-container-dual";
      let createGumroadDiv = document.createElement("div");

      createGumroadDiv.id = gid;
      createGumroadDiv.className = "js-cellbandcamp js-cell-gumroad";

      gumroadList.appendChild(createGumroadDiv);
      
      document.getElementById(gid).innerHTML = `<div id="cell"><img class="gumroadimg" src="../img/${json.gumroad[i].img}"/>
      <a class="gumroad-button" href="https://franticnoise.gumroad.com/l/${json.gumroad[i].code}"><span>Buy on</span></a></div>`;
      console.log(  json.gumroad[i].cat,json.gumroad[i].img,json.gumroad[i].code,gid);
      gid++;
    }
  }
}