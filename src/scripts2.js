export function createGumroad(image, url, idtarget) {
  const gumroad = `<div id="cell"><img style="width: 240px" class="gumroadimg" src="img/${image}"/>
  <a class="gumroad-button" href="https://franticnoise.gumroad.com/l/${url}">Buy on</a></div>`;
  return (document.getElementById(idtarget).innerHTML = gumroad);
}
