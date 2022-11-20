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

export function createHead(pagename = '') {
  const headinfo = `<title>Frantic Noise ${pagename}</title>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width" ="device-width" />
  <link rel="stylesheet" href="../css/styles.css" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css/"/>
  <link rel="stylesheet" href="../css/style-iframe.css" />`;
  document.getElementById("head").innerHTML = headinfo
}
////////////// BPM DELAY MS CALCULATOR

export function calcMs(speed){

  const result = 60000 / speed; 
  console.log(result);
  const results = [];
  results.push(
    {'res': result * 2, 'math': "1/2"},
    {'res': result * 1, 'math': "1/4"},
    {'res': result / 1.5,'math': "1/4t"},
    {'res': result / 2, 'math': "1/8"},
    {'res': result / 3, 'math': "1/8t"},
    {'res': result / 4, 'math': "1/16"},
    {'res': result / 6, 'math': "1/16t"},
    {'res': result / 8, 'math': "1/32"},
    {'res': result / 12, 'math': "1/32t"},
    {'res': result / 16, 'math': "1/64"});
  console.table(results)

  const resultsList = document.getElementById("container");
  
  for (let i = 0; i < results.length; i++) {

    let createResultRow = document.createElement("div");
    createResultRow.id = i;
    createResultRow.className = 'result_div';
    resultsList.appendChild(createResultRow);    
    let bgClass = '';
    if(i % 2 == 0) {bgClass = 'result_bg';}

    let checkResult = results[i].res;
    if(Math.floor(results[i].res) !== results[i].res) { 
       checkResult = results[i].res.toFixed(1);
    } 

    document.getElementById(i).innerHTML = `
      <div class="row_math ${bgClass}">${results[i].math}</div>
      <div class="row_result ${bgClass}">${checkResult}ms</div>`;
    }
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