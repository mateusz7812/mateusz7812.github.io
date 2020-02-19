function scrollToId(id){
  const element = document.getElementById(id);
  const offset = 80;
  const bodyRect = document.body.getBoundingClientRect().top;
  const elementRect = element.getBoundingClientRect().top;
  const elementPosition = elementRect - bodyRect;
  const offsetPosition = elementPosition - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
  }
function sendEmail() {
  window.open('mailto:test@example.com?subject=subject&body=body', "_self");
}
