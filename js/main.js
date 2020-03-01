function scrollToId(id){
  const element = document.getElementById(id);
  const width = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;
  const offset = ((width > 800) ? 80 : 0);
  const bodyRect = document.body.getBoundingClientRect().top;
  const elementRect = element.getBoundingClientRect().top;
  const elementPosition = elementRect - bodyRect;
  const offsetPosition = elementPosition - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
  }

function mapsSelector() {
  if /* if we're on iOS, open in Apple Maps */
  ((navigator.platform.indexOf("iPhone") != -1) ||
    (navigator.platform.indexOf("iPad") != -1) ||
    (navigator.platform.indexOf("iPod") != -1))
    window.open("maps://maps.google.com/maps?daddr=<lat>,<long>&amp;ll=");else /* else use Google */
    window.open("https://maps.google.com/maps?daddr=<lat>,<long>&amp;ll=");
}

function sendEmail() {
  window.open('mailto:test@example.com?subject=subject&body=body', "_self");
}
