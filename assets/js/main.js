  /*
   * Mobile nav toggle button
     Botão de alternância de navegação móvel
   */
   let MenuBtn = document.querySelector('#MenuBtn');
   MenuBtn.addEventListener('click', function (e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark');
   });


  /*
   * Easy selector helper function
     Função auxiliar do seletor fácil
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /*
   * Easy event listener function
     Função de ouvinte de evento fácil 
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /*
   * Easy on scroll event listener 
     Ouvinte de eventos de rolagem fácil 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /*
   * Navbar links active state on scroll
     Estado ativo dos links da barra de navegação na rolagem
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
     Rola para um elemento com deslocamento de cabeçalho
   */
  const scrollto = (el) => {
    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos,
      behavior: 'smooth'
    })
  }



  /*
   * Scrool with ofset on links with a class name .scrollto
    Rolar com deslocamento em links com um nome de classe .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let body = select('body')
      if (body.classList.contains('mobile-nav-active')) {
        body.classList.remove('mobile-nav-active')
      }
      scrollto(this.hash)
    }
  }, true)


