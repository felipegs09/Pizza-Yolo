window.addEventListener('scroll', onScroll)
onScroll()

function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSession(home)
  activateMenuAtCurrentSession(foodMenu)
  activateMenuAtCurrentSession(about)
  activateMenuAtCurrentSession(contact)
}

function activateMenuAtCurrentSession(section) {
  //linha alvo
  const targetLine = scrollY + innerHeight / 2

  // verificar se a seção passou da linha
  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight
  const sectionTopReachedOrPassedTargetLine = sectionTop <= targetLine

  const sectionEndsAt = sectionTop + sectionHeight
  const sectionEndPassedTargetLIne = sectionEndsAt >= targetLine

  const sectionBoundaries =
    sectionTopReachedOrPassedTargetLine && sectionEndPassedTargetLIne

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

function showNavOnScroll() {
  let nav = document.querySelector('#navigation')

  if (scrollY > 0) {
    nav.classList.add('scroll')
  } else {
    nav.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 500) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menuExpanded')
}

function closeMenu() {
  document.body.classList.remove('menuExpanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
  #home,
  #home img
  #home .stats,
  #foodMenu,
  #foodMenu header,
  #foodMenu .card,
  #about,
  #about header,
  #about .content`)
