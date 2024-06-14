

const pages = [
  Principal,
  Historia,
  Blog,
  Contacto,
  Politicas
];

const components = [
  Menu,
  MenuNormal,
  MenuMobile,
  Telefono,
  Heros,
  Blog,
  Footer
];

export { pages, components };




function handleScroll() {
  const menu = document.getElementById("MenuGlobal");
  if (window.scrollY > 20) {
      menu.style.backgroundColor = "black"; // Cambiar el fondo a negro si se desplaza más de 20px
  } else {
      menu.style.backgroundColor = ""; // Restaurar el fondo predeterminado si se desplaza menos de 20px
  }
}
window.addEventListener("scroll", handleScroll);

window.addEventListener("innerWidth",(e)=>{
  console.log(e)
  m.redraw()
})

function Principal() {
  return {
    view: () => [
      m(Menu),
      m(Telefono),
      m(Hero),
      m(SeccionEventos),
      m(Fechas),
      m(InformacionOrquesta),
      m(Opiniones),
      m(Novedades),
      m(ObtenerTickets),
      m(Footer)

    ]
  }
  function Hero() {
    return {
      model: {
        TextoSobreTitulo: "Alcanzar la grandeza",
        Titulo: "FILARMÓNICA",
        Subtitulo: "ORQUESTA",
        TextoBoton: "OBTENER TICKETS",
        LinkBoton: "#!/contacto",
        imagen: "assets/mt-2288-home-bg1.jpg",
      },
      view: () => [
        m("header", {
          "style": {
            "background-image": "url('" + this.state.model.imagen + "')", "background-position": "center", "background-repeat": "no-repeat", "background-size": "cover", "padding-bottom": "170px", "padding-right": "0px", "padding-left": "0px", "padding-top": "15px", "position": "relative", "margin": "0px", "padding": "15px 0px 170px", "box-sizing": "border-box"
          }
        },
          m("div", { "style": { "display": "flex", "justify-content": "center", "position": "static", "margin": "0px", "padding": "20px", "box-sizing": "border-box" } },
            m("div", { "style": { "padding-top": "120px", "position": "relative", "margin": "0px", "box-sizing": "border-box" } },
              m("div", { "style": { "display": "flex", "justify-content": "center", "margin-left": "-15px", "margin-right": "-15px", "padding": "0px", "display": "flex", "flex-wrap": "wrap", "box-sizing": "border-box" } },
                m("div", { "style": { "flex": "0 0 100%", "max-width": "100%", "padding-right": "15px", "padding-left": "15px", "padding-bottom": "0px", "padding-top": "0px", "position": "relative", "margin": "0px", "padding": "0px 15px", "width": "100%", "min-height": "1px", "box-sizing": "border-box" } },
                  m("div", {
                    "style": {
                      "padding-right": "0px", "padding-left": "0px", "padding-bottom": "40px", "padding-top": "0px", "position": "relative", "margin": "0px", "box-sizing": "border-box"
                    }
                  },
                    m("div", {
                      "style": {
                        "padding": "0px 1px", "margin": "0px", "box-sizing": "border-box"
                      }
                    },
                      m("p", { "style": { "text-align": "center", "font-weight": "300", "font-style": "normal", "font-family": "'Nexa Rust Script L', sans-serif", "color": "rgb(255, 255, 255)", "font-size": "35px", "letter-spacing": "3px", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                        this.state.model.TextoSobreTitulo),
                      m("h1", { "style": { "text-align": "center", "margin-top": "15px", "font-weight": "700", "font-style": "normal", "font-family": "Montserrat, sans-serif", "color": "rgb(255, 255, 255)", "font-size": "50px", "line-height": "64px", "letter-spacing": "normal", "padding": "0px", "box-sizing": "border-box" } },
                        this.state.model.Titulo),
                      m("p", { "style": { "text-align": "center", "font-weight": "300", "font-style": "normal", "font-family": "Poppins, sans-serif", "color": "rgb(255, 255, 255)", "font-size": "48px", "line-height": "58px", "letter-spacing": "3px", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                        [
                          this.state.model.Subtitulo,
                          m.trust("&nbsp;")
                        ]
                      )
                    )
                  ),
                  m("div", { "style": { "padding-right": "0px", "padding-left": "0px", "padding-bottom": "0px", "padding-top": "0px", "text-align": "center", "position": "relative", "margin": "0px", "box-sizing": "border-box" } },
                    [
                      m("a", {
                        "href": this.state.model.LinkBoton, "style": {
                          "padding": "12px 30px", "min-width": "167px", "border-style": "solid", "border-width": "1px", "border-color": "rgb(255, 255, 255)", "border-radius": "0px", "background-color": "rgba(0, 0, 0, 0)", "font-size": "14px", "position": "relative", "text-align": "center", "z-index": "1", "transition": "all 0.3s ease 0s", "line-height": "14px", "border": "1px solid rgb(255, 255, 255)", "margin": "0px", "letter-spacing": "normal", "background": "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box", "overflow": "hidden", "display": "inline-flex", "align-items": "center", "justify-content": "center", "flex-flow": "row nowrap", "cursor": "pointer", "color": "white", "text-decoration": "none solid rgb(51, 122, 183)", "box-sizing": "border-box"
                        },
                        "onmouseenter": (event) => {
                          event.target.style.backgroundColor = "white";
                          event.target.style.color = "black";
                        },
                        "onmouseleave": (event) => {
                          event.target.style.backgroundColor = "rgba(0, 0, 0, 0)";
                          event.target.style.color = "white";
                        }
                      }, [
                        m("span", {
                          "style": {
                            "font-size": "14px", "letter-spacing": "normal", "font-family": "Poppins, sans-serif", "font-style": "normal", "font-weight": "500", "text-decoration": "none solid rgb(255, 255, 255)", "position": "relative", "transition": "all 0.3s ease 0s", "z-index": "1", "margin": "0px", "padding": "0px", "box-sizing": "border-box"
                          }
                        }, this.state.model.TextoBoton)
                      ])
                    ])
  
                )
              )
            )
          )
        )
      ]
    }
  }
  
  //-----------Seccion EVENTOS 
  function SeccionEventos() {
  
    var mesSeleccionado = 0;
  
    return {
      model: {
        Titulo: "EVENTOS",
        SubTitulo: "PROXIMOS EVENTOS",
  
        meses: [
          {
            Nombre: "Setiembre",
            id: 0,
            imagen1: "assets/mt-2288-home-events-img1.jpg",
            imagen2: "assets/mt-2288-home-events-img2.jpg",
            Lugar: "Concierto de la Orquesta de Ámsterdam",
            Fecha: "09.09.2022",
            Parrafo1: "¡Estamos muy contentos de darle la bienvenida nuevamente a nuestro teatro después de un largo descanso!",
            Parrafo2: "Una historia icónica de un pobre que cayó en una sociedad secular, en un entorno inusual de una ciudad medieval.",
            Parrafo3: "Somos la mejor escuela de música para ti.",
            Telefono: "(123) 456 78 90",
            TextoBoton: "OBTENER TICKETS",
            LinkBoton: "#!/Contacto",
            TextoLlamada: "Llamar ",
            ImagenTelefono: "assets/mt-2288-home-phone.png"
          },
          {
  
  
            Nombre: "Octubre",
            id: 1,
            imagen1: "assets/mt-2288-home-events-img3.jpg",
            imagen2: "assets/mt-2288-home-events-img4.jpg",
            Lugar: "London Symphony Orchestra",
            Fecha: "09.10.2022",
            Parrafo1: "Con habilidades de razonamiento más avanzadas y pensamiento abstracto, los adolescentes se esfuerzan por lograr una mayor independencia, aspiran a una sensación de logro y se involucran.",
            Parrafo2: "Es un instrumento musical que se toca mediante un teclado",
            Parrafo3: "",
            Telefono: "(123) 456 78 90",
            TextoBoton: "OBTENER TICKETS",
            LinkBoton: "#!/Contacto",
            TextoLlamada: "Llamar ",
            ImagenTelefono: "assets/mt-2288-home-phone.png"
          },
          {
            Nombre: "Noviembre",
            id: 2,
            imagen1: "assets/mt-2288-home-events-img5.jpg",
            imagen2: "assets/mt-2288-home-events-img6.jpg",
            Lugar: "La Orquesta Harvard-Radcliffe",
            Fecha: "09.11.2022",
            Parrafo1: "¡Además de eso, el diseño minimalista se verá lo suficientemente elegante y formal como para ser universal! ¡Para obtener más información sobre qué características exactas hacen que esta plantilla se destaque frente al resto!",
            Parrafo2: "",
            Parrafo3: "",
            Telefono: "(123) 456 78 90",
            TextoBoton: "OBTENER TICKETS",
            LinkBoton: "#!/Contacto",
            TextoLlamada: "Llamar ",
            ImagenTelefono: "assets/mt-2288-home-phone.png"
          },
          {
            Nombre: "Diciembre",
            id: 3,
            imagen1: "assets/mt-2288-home-events-img7.jpg",
            imagen2: "assets/mt-2288-home-events-img8.jpg",
            Lugar: "Orquesta Filarmónica Real",
            Fecha: "09.12.2022",
            Parrafo1: "Con un cuerpo docente de 30 instructores, cientos de clases y un ambiente inclusivo y acogedor, ¡es un excelente lugar para estar! Para estudiantes desde 6 meses hasta los mayores, todos están invitados a unirse a la diversión.",
            Parrafo2: "",
            Parrafo3: "",
            Telefono: "(123) 456 78 90",
            TextoBoton: "OBTENER TICKETS",
            LinkBoton: "#!/Contacto",
            TextoLlamada: "Llamar ",
            ImagenTelefono: "assets/mt-2288-home-phone.png"
          },
  
        ]
      },
      view: () =>
        m("div", { "style": { "justify-content": "center", "padding-top": "120px", "padding-right": "0px", "padding-left": "0px", "padding-bottom": "80px", "position": "relative", "margin": "0px", "box-sizing": "border-box" } },
          m("div", { "style": { "display": "flex", "flex": "0,0,100%", "justify-content": "center", "max-width": "1200px", "padding-right": "15px", "padding-left": "15px", "margin-left": "auto", "margin-right": "auto", "padding": "0px 15px", "width": "100%", "box-sizing": "border-box" } },
            m("div", { "style": { "margin-left": "-15px", "margin-right": "-15px", "padding": "0px", "display": "flex", "flex-wrap": "wrap", "box-sizing": "border-box" } },
              m("div", { "style": { "flex": "0 0 100%", "max-width": "100%", "padding-right": "15px", "padding-left": "15px", "padding": "0px 15px", "margin": "0px", "position": "relative", "width": "100%", "min-height": "1px", "box-sizing": "border-box" } },
                [
                  m("div", { "data-widget": "text", "data-preset": "default", "data-spacing": "aasa", "data-visible-on": "-", "data-animation": "", "style": { "padding-right": "0px", "padding-left": "0px", "padding-bottom": "15px", "padding-top": "0px", "position": "relative", "margin": "0px", "box-sizing": "border-box" } },
                    m("div", { "style": { "padding": "0px 1px", "margin": "0px", "box-sizing": "border-box" } },
                      [
                        m("p", { "style": { "text-align": "center", "font-weight": "400", "font-style": "normal", "font-family": "'Nexa Rust Script L', sans-serif", "color": "rgb(152, 152, 152)", "font-size": "40px", "line-height": "36px", "letter-spacing": "3px", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                          this.state.model.Titulo
                        ),
                        m("p", { "style": { "margin-top": "50px", "text-align": "center", "font-weight": "400", "font-style": "normal", "font-family": "Montserrat, sans-serif", "color": "rgb(49, 49, 49)", "font-size": "58px", "line-height": "49.4px", "letter-spacing": "normal", "padding": "0px", "box-sizing": "border-box" } },
                          this.state.model.SubTitulo
                        )
                      ]
                    )
                  ),
                  m("div", { "style": { "padding-right": "0px", "padding-left": "0px", "padding-bottom": "0px", "padding-top": "0px", "position": "relative", "margin": "0px", "box-sizing": "border-box" } },
                    m("div", { "style": { "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                      [
                        m("div", { "style": { "width": "auto", "margin-bottom": "0px", "justify-content": "center", "text-align": "center", "display": "flex", "flex-wrap": "wrap", "padding": "0px", "box-sizing": "border-box" } },
                          [
                            this.state.model.meses.map(item =>
                              m(CargarMeses, {
                                Nombre: item.Nombre, id: item.id,
                                onclick: () => mesSeleccionado = item.id
                              })
                            )
                          ]
                        ),
                        m("div", { "style": { "justify-content": "center", "padding": "0px", "box-sizing": "border-box" } },
                          [
                            m(CargarEventos, this.state.model.meses[mesSeleccionado])
                          ]
                        )
                      ]
                    )
                  )
                ]
              )
            )
          )
        )
    }
  
  
    /// !!! Este componente solo se utiliza aquí. Mejor definirlo dentro de SeccionEventos
  
    function CargarMeses() {
      return {
        view: ({ attrs }) => [
          m("div", {
            "style": {
              "background-color": attrs.id === mesSeleccionado ? "rgb(83, 71, 65)" : "rgb(255, 255, 255)", "border-style": "solid", "border-width": "1px", "border-radius": "0px", "border-color": attrs.id === mesSeleccionado ? "rgba(0, 0, 0, 0)" : "#000000", "font-size": "18px", "padding": "14px 50px", "margin-right": "10px", "display": "flex", "cursor": "pointer", "user-select": "none", "z-index": "1", "transition": "color 0.3s ease 0s, background-color 0.3s ease 0s, border-color 0.3s ease 0s", "margin-top": "10px", "box-sizing": "border-box",
              "color": attrs.id === mesSeleccionado ? "rgb(255, 255, 255)" : "rgb(0, 0, 0)", // Negro si no está seleccionado
            },
  
            onclick: () => {
              // Actualizar el estado mesSeleccionado al hacer clic en el botón del mes
              attrs.onclick(attrs.id);
            }
          },
            m("span", {
              "style": {
                "text-decoration": "none solid rgb(255, 255, 255)",
                "font-family": "Poppins, sans-serif",
                "font-style": "normal",
                "font-weight": "500",
                "display": "flex",
                "justify-content": "center",
                "align-items": "center",
                "margin": "0px",
                "padding": "0px",
                "box-sizing": "border-box"
  
              }
            }, attrs.Nombre)
          ),
        ]
      }
    }
  
    /// !!! Lo mismo 
    function CargarEventos() {
      return {
        view: ({ attrs }) => [
          m("div", { "style": { "display": "flex", "justify-content": "center", "align-items": "center" } },
            m("div", { "style": { "margin": "0 auto" } },
  
              m("div", { "style": { "display": "block", "position": "relative", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                m("div", { "style": { "border-style": "none", "border-width": "0px", "border-radius": "0px", "background-color": "rgba(0, 0, 0, 0)", "border-color": "rgba(0, 0, 0, 0)", "padding": "60px 0px 0px", "position": "relative", "margin": "0px", "box-sizing": "border-box" } },
                  m("div", { "style": { "background-position": "left top", "padding-right": "0px", "padding-left": "0px", "padding-bottom": "0px", "padding-top": "0px", "flex": "0 0 auto", "position": "relative", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                    m("div", { "style": { "padding-right": "15px", "padding-left": "15px", "margin-left": "auto", "margin-right": "auto", "margin": "0px", "padding": "0px 15px", "width": "100%", "box-sizing": "border-box" } },
                      m("div", { "style": { "margin-left": "-15px", "margin-right": "-15px", "padding": "0px", "display": "flex", "flex-wrap": "wrap", "box-sizing": "border-box" } },
                        [
                          m("div", { "style": { "padding-right": "15px", "padding-left": "15px", "padding-bottom": "0px", "padding-top": "0px", "position": "relative", "margin": "0px", "padding": "0px 15px", "min-height": "1px", "box-sizing": "border-box" } },
                            m("div", { "style": { "background-position": "left top", "padding-right": "0px", "padding-left": "0px", "padding-bottom": "0px", "padding-top": "0px", "flex": "0 0 auto", "justify-content": "flex-end", "position": "relative", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
  
                              m("div", { "style": { "margin-left": "0px", "margin-right": "0px", "padding": "0px", "display": "flex", "flex-wrap": "wrap", "box-sizing": "border-box" } },
                                [
                                  m("div", { "style": { "padding-right": "0px", "padding-left": "0px", "padding-bottom": "0px", "padding-top": "0px", "justify-content": "flex-end", "display": "flex", "flex-direction": "column", "position": "relative", "margin": "0px", "padding": "0px", "flex": "0 0 50%", "min-height": "1px", "box-sizing": "border-box" } },
                                    m("div", { "style": { "padding-right": "15px", "padding-left": "0px", "padding-bottom": "0px", "padding-top": "0px", "font-size": "0px", "flex": "0 0 auto", "text-align": "right", "position": "relative", "margin": "0px", "box-sizing": "border-box" } },
                                      m("span", { "style": { "position": "relative", "overflow": "hidden", "transition": "all 0.3s ease 0s", "display": "inline-block", "max-width": "100%", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                                        m("img", { "src": attrs.imagen1, "style": { "transition": "all 0.3s ease 0s", "width": "100%", "max-width": "100%", "height": "auto", "margin": "0px", "padding": "0px", "box-sizing": "border-box", "vertical-align": "middle", "border": "0px none rgb(67, 79, 83)" } })
                                      )
                                    )
                                  ),
                                  m("div", { "style": { "padding-right": "0px", "padding-left": "0px", "padding-bottom": "0px", "padding-top": "0px", "justify-content": "flex-end", "display": "flex", "flex-direction": "column", "position": "relative", "margin": "0px", "padding": "0px", "flex": "0 0 50%", "max-width": "50%", "width": "100%", "min-height": "1px", "box-sizing": "border-box" } },
                                    m("div", { "style": { "padding-right": "0px", "padding-left": "15px", "padding-bottom": "40px", "padding-top": "0px", "font-size": "0px", "flex": "0 0 auto", "text-align": "left", "position": "relative", "margin": "0px", "box-sizing": "border-box" } },
                                      m("span", { "style": { "position": "relative", "overflow": "hidden", "transition": "all 0.3s ease 0s", "display": "inline-block", "max-width": "100%", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                                        m("img", { "src": attrs.imagen2, "data-id": "252", "title": "", "width": "249", "height": "391", "alt": "", "style": { "transition": "all 0.3s ease 0s", "width": "100%", "max-width": "100%", "height": "auto", "margin": "0px", "padding": "0px", "box-sizing": "border-box", "vertical-align": "middle", "border": "0px none rgb(67, 79, 83)" } })
                                      )
                                    )
                                  )
                                ]
                              )
                            )
                          ),
                          m("div", { "style": { "flex": "1", "background-position": "left top", "padding-right": "40px", "padding-left": "40px", "padding-bottom": "0px", "padding-top": "0px", "position": "relative", "margin": "0px", "padding": "0px 40px", "min-height": "1px", "box-sizing": "border-box" } },
                            [
                              m("div", { "data-visible-on": "+desktop,tablet,mobile-h,mobile-v", "data-animation": "", "style": { "padding-right": "0px", "padding-left": "0px", "padding-bottom": "40px", "padding-top": "40px", "position": "relative", "margin": "0px", "box-sizing": "border-box" } },
                                m("div", { "style": { "padding": "0px 1px", "margin": "0px", "box-sizing": "border-box" } },
                                  [
                                    m("h3", { "style": { "margin": "0px", "font-weight": "500", "font-style": "normal", "font-family": "Montserrat, sans-serif", "color": "rgb(0, 0, 0)", "font-size": "36px", "line-height": "46.8px", "letter-spacing": "normal", "padding": "0px", "box-sizing": "border-box" } },
                                      attrs.Lugar
                                    ),
                                    m("p", { "style": { "font-weight": "400", "font-style": "normal", "font-family": "'Nexa Rust Script L', sans-serif", "color": "rgb(152, 152, 152)", "font-size": "24px", "line-height": "36px", "letter-spacing": "3px", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                                      attrs.Fecha
                                    ),
                                    m("p", { "style": { "font-weight": "400", "font-style": "normal", "font-family": "Poppins, sans-serif", "color": "rgb(24, 35, 51)", "font-size": "16px", "line-height": "22.4px", "letter-spacing": "normal", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                                      [
                                        attrs.Parrafo1,
                                        m.trust("&nbsp;"),
                                        attrs.Parrafo2,
                                        m.trust("&nbsp;"),
                                        attrs.Parrafo3
                                      ]
                                    )
                                  ]
                                )
                              ),
                              m("div", { "style": { "background-position": "left top", "padding-right": "0px", "padding-left": "0px", "padding-bottom": "0px", "padding-top": "0px", "justify-content": "center", "position": "relative", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                                m("div", { "style": { "max-width": "1200px", "padding-right": "0px", "padding-left": "0px", "margin-left": "auto", "margin-right": "auto", "margin": "0px", "padding": "0px", "width": "100%", "box-sizing": "border-box" } },
                                  m("div", { "style": { "margin-left": "-15px", "margin-right": "-15px", "padding": "0px", "display": "flex", "flex-wrap": "wrap", "box-sizing": "border-box" } },
                                    [
                                      m("div", { "style": { "background-position": "left top", "flex": "0 0 41.6667%", "max-width": "41.6667%", "padding-right": "15px", "padding-left": "15px", "padding-bottom": "0px", "padding-top": "0px", "justify-content": "center", "display": "flex", "flex-direction": "column", "position": "relative", "margin": "0px", "padding": "0px 15px", "width": "100%", "min-height": "1px", "box-sizing": "border-box" } },
                                        m("div", { "style": { "padding-right": "0px", "padding-left": "0px", "padding-bottom": "15px", "padding-top": "0px", "text-align": "left", "position": "relative", "margin": "0px", "box-sizing": "border-box" } },
                                          m("a", { "href": attrs.LinkBoton, "data-action": "page", "style": { "padding": "16px 40px", "min-width": "169px", "border-style": "solid", "border-width": "1px", "border-color": "rgb(0, 0, 0)", "border-radius": "0px", "background-color": "rgba(0, 0, 0, 0)", "font-size": "14px", "position": "relative", "text-align": "center", "z-index": "1", "transition": "all 0.3s ease 0s", "line-height": "14px", "border": "1px solid rgb(0, 0, 0)", "margin": "0px", "letter-spacing": "normal", "background": "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box", "overflow": "hidden", "display": "inline-flex", "align-items": "center", "justify-content": "center", "flex-flow": "row nowrap", "cursor": "pointer", "text-decoration": "none solid rgb(51, 122, 183)", "color": "rgb(51, 122, 183)", "box-sizing": "border-box" } },
                                            [
                                              m("span", { "style": { "display": "none", "position": "relative", "align-items": "center", "justify-content": "center", "transition": "all 0.3s ease 0s", "flex-shrink": "0", "inset": "auto", "float": "none", "margin": "0px", "padding": "0px", "box-sizing": "border-box", "font-style": "normal", "font-variant": "normal", "font-kerning": "auto", "font-optical-sizing": "auto", "font-feature-settings": "normal", "font-variation-settings": "normal", "font-weight": "400", "font-stretch": "100%", "line-height": "14px", "font-family": "FontAwesome", "font-size": "14px", "text-rendering": "auto", "-webkit-font-smoothing": "antialiased" } }),
                                              m("span", { "style": { "display": "none", "border": "0px none rgb(51, 122, 183)", "margin": "0px", "transition": "border-color 0.5s ease 0s", "padding": "0px", "box-sizing": "border-box" } }),
                                              m("span", { "style": { "font-size": "14px", "letter-spacing": "normal", "font-family": "Poppins, sans-serif", "font-style": "normal", "font-weight": "500", "color": "rgb(0, 0, 0)", "text-decoration": "none solid rgb(0, 0, 0)", "position": "relative", "transition": "all 0.3s ease 0s", "z-index": "1", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                                                attrs.TextoBoton
                                              )
                                            ]
                                          )
                                        )
                                      ),
                                      m("div", { "style": { "background-position": "left top", "padding-right": "15px", "padding-left": "15px", "padding-bottom": "0px", "padding-top": "0px", "justify-content": "center", "display": "flex", "flex-direction": "column", "position": "relative", "margin": "0px", "padding": "0px 15px", "width": "100%", "min-height": "1px", "box-sizing": "border-box" } },
                                        m("div", { "style": { "padding-right": "0px", "padding-left": "0px", "padding-bottom": "15px", "padding-top": "0px", "position": "relative", "margin": "0px", "box-sizing": "border-box" } },
                                          m("div", { "style": { "padding": "0px 1px", "margin": "0px", "box-sizing": "border-box" } },
                                            m("p", { "style": { "font-weight": "400", "font-style": "normal", "font-family": "Poppins, sans-serif", "color": "rgb(0, 0, 0)", "font-size": "20px", "line-height": "32px", "letter-spacing": "normal", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                                              [
                                                m("span", { "style": { "padding-right": "15px", "padding-left": "0px", "padding-bottom": "0px", "padding-top": "0px", "display": "inline-block", "max-width": "100%", "margin": "0px", "box-sizing": "border-box" } },
                                                  m("span", { "style": { "display": "inline-block", "max-width": "100%", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                                                    m("img", { "alt": "", "width": "30", "height": "30", "src": attrs.ImagenTelefono, "style": { "max-width": "100%", "height": "auto", "vertical-align": "middle", "margin": "0px", "padding": "0px", "box-sizing": "border-box", "border": "0px none rgb(0, 0, 0)" } })
                                                  )
                                                ),
                                                attrs.TextoLlamada,
                                                m("a", { "data-action": "call", "href": attrs.Telefono, "style": { "color": "rgb(0, 0, 0)", "text-decoration": "none solid rgb(0, 0, 0)", "font-weight": "400", "font-style": "normal", "transition": "all 0.3s ease 0s", "margin": "0px", "padding": "0px", "box-sizing": "border-box", "background-color": "rgba(0, 0, 0, 0)" } },
                                                  attrs.Telefono
                                                )
                                              ]
                                            )
                                          )
                                        )
                                      )
                                    ]
                                  )
                                )
                              )
                            ]
                          )
                        ]
                      )
                    )
                  )
                )
              )
            )
          )
        ]
      }
    }
  
  }
  
  //-----------------BANNER DE FECHAS-----
  function Fechas() {
    return {
      model: {
        Imagen: "assets/mt-2288-home-bg2.jpg",
        Datos: [
          {
            Texto: "Fundado",
            Fecha: "1975"
          },
          {
            Texto: "Galardonado",
            Fecha: "1978"
          },
          {
            Texto: "Expansión",
            Fecha: "2009"
          },
          {
            Texto: "Desde",
            Fecha: "2015"
          }
        ]
      },
      view: () => [
        m("div", { "style": { "background-image": "url('" + this.state.model.Imagen + "')", "background-position": "center", "background-repeat": "no-repeat", "background-size": "cover", "padding-top": "120px", "padding-right": "0px", "padding-left": "0px", "padding-bottom": "80px", "position": "relative", "margin-top": "50px", "padding": "120px 0px 80px", "box-sizing": "border-box" } },
          m("div", { "style": { "padding-right": "15px", "padding-left": "15px", "margin": "0px", "width": "100%", "margin-right": "auto", "margin-left": "auto", "box-sizing": "border-box" } },
            m("div", { "style": { "margin-left": "-15px", "margin-right": "-15px", "padding": "0px", "display": "flex", "flex-wrap": "wrap", "box-sizing": "border-box" } },
              m("div", { "style": { "flex": "0 0 100%", "max-width": "100%", "padding-right": "0px", "padding-left": "0px", "padding": "0px", "margin": "0px", "position": "relative", "width": "100%", "min-height": "1px", "box-sizing": "border-box" } },
                m("div", { "data-grid-type": "sm", "data-visible-on": "-", "data-spacing": "aaaa", "style": { "padding-right": "0px", "padding-left": "0px", "padding-bottom": "0px", "padding-top": "0px", "flex": "0 0 auto", "position": "relative", "margin": "0px", "box-sizing": "border-box" } },
                  m("div.container-fluid", { "style": {} },
                    m("div.row", { "style": { "justify-content": "center", "padding": "0px", "display": "flex", "flex-wrap": "wrap", "box-sizing": "border-box" } },
                      this.state.model.Datos.map(item => m(CargarFechasyDatos, item))
                    )
                  )
                )
              )
            )
          )
        )
      ]
    }
  
   function CargarFechasyDatos() {
      let contador
      return {
        oncreate: function (vnode) {
          // var contadorElemento = vnode.dom.querySelector('.contador');
          var fechaObjetivo = parseInt(vnode.attrs.Fecha);
          contador = fechaObjetivo/2;
          let paso=Math.ceil(fechaObjetivo/50)
  
          var intervalo = setInterval(function () {
            // contadorElemento.textContent = contador;
            if (contador >= fechaObjetivo) {
              clearInterval(intervalo);
            }
            contador+=paso;
          }, 10); // Velocidad de incremento del contador
        },
        view: ({ attrs }) => [
          m("div.col-lg-3", { "style": { "flex": "0 0 25%", "padding-right": "15px", "padding-left": "15px", "padding-bottom": "0px", "padding-top": "0px", "margin": "0px", "padding": "0px 15px", "width": "100%", "min-height": "1px", "box-sizing": "border-box" } },
            [
              m("div", { "style": { "padding-right": "0px", "padding-left": "0px", "padding-bottom": "15px", "padding-top": "0px", "text-align": "center", "position": "relative", "margin": "0px", "box-sizing": "border-box" } },
                m("div", { "style": { "display": "inline-flex", "align-items": "center", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                  m("span.contador", { "style": { "font-weight": "700", "font-style": "normal", "font-family": "Montserrat, sans-serif", "color": "rgb(255, 255, 255)", "font-size": "56px", "line-height": "67.2px", "letter-spacing": "normal", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                  contador)
                )
              ),
              m("div", { "data-widget": "text", "data-preset": "default", "data-spacing": "aama", "data-visible-on": "-", "data-animation": "", "style": { "padding-right": "0px", "padding-left": "0px", "padding-bottom": "40px", "padding-top": "0px", "position": "relative", "margin": "0px", "box-sizing": "border-box" } },
                m("div", { "style": { "padding": "0px 1px", "margin": "0px", "box-sizing": "border-box" } },
                  m("p", { "style": { "text-align": "center", "font-weight": "400", "font-style": "normal", "font-family": "'Nexa Rust Script L', sans-serif", "color": "rgb(255, 255, 255)", "font-size": "24px", "line-height": "33.6px", "letter-spacing": "3px", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                    attrs.Texto
                  )
                )
              )
            ]
          ),
        ]
      }
    }

  }
  
  //--------------INFORMACION DE ORQUESTAS------------
  function InformacionOrquesta() {
    return {
      model: {
        Titulo: "Por qué elegirnos",
        Subtitulo: "ORQUESTA",
        Texto1: "Nuestro enfoque profesional y desarrollo continuo nos han llevado a convertirnos en el proveedor líder de educación musical profesional.",
        Texto2: "Somos la mejor escuela de música para ti.",
        Texto3: "Combinamos formas innovadoras, divertidas y creativas de enseñar música e involucrarnos con los estudiantes para alcanzar su máximo potencial",
        Texto4: "Esperamos sinceramente que en este sitio, dedicado a las obras, descubras muchas cosas nuevas o puedas disfrutar de fragmentos de arias, óperas, canciones y romances olvidados hace mucho tiempo",
        Texto5: "Todos los visitantes, sin excepción, están invitados a participar en la discusión de las canciones escuchadas y leer la información. No duden en hacer ajustes, hacer cambios y comentar para su placer.",
        Texto6: "El movimiento de la batuta - y en el silencio del auditorio fluían los sonidos de la obertura",
        Imagen1: "assets/mt-2288-home-orchestra-img1.jpg",
        Imagen2: "assets/mt-2288-home-orchestra-img2.jpg",
        Imagen3: "assets/mt-2288-home-orchestra-img3.jpg",
      },
      view: () => [
        m("div", { "style": { "display": "flex", "justify-content": "center", "padding-right": "0px", "padding-left": "0px", "padding-bottom": "80px", "padding-top": "80px", "position": "relative", "margin": "0px", "box-sizing": "border-box" } },
          m("div", { "style": { "max-width": "1200px", "padding-right": "15px", "padding-left": "15px", "margin-left": "auto", "margin-right": "auto", "margin": "0px 31.5px", "padding": "0px 15px", "box-sizing": "border-box" } },
            m("div", { "style": { "margin-left": "-15px", "margin-right": "-15px", "padding": "0px", "display": "flex", "flex-wrap": "wrap", "box-sizing": "border-box" } },
              m("div", { "style": { "flex": "0 0 100%", "max-width": "100%", "padding-right": "15px", "padding-left": "15px", "padding": "0px 15px", "margin": "0px", "position": "relative", "width": "100%", "min-height": "1px", "box-sizing": "border-box" } },
                [
                  m("div", { "data-visible-on": "-", "data-animation": "", "style": { "padding-right": "0px", "padding-left": "0px", "padding-bottom": "15px", "padding-top": "0px", "position": "relative", "margin": "0px", "box-sizing": "border-box" } },
                    m("div", { "style": { "padding": "0px 1px", "margin": "0px", "box-sizing": "border-box" } },
                      [
                        m("p", { "style": { "text-align": "center", "font-weight": "400", "font-style": "normal", "font-family": "'Nexa Rust Script L', sans-serif", "color": "rgb(152, 152, 152)", "font-size": "24px", "line-height": "36px", "letter-spacing": "3px", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                          this.state.model.Titulo
                        ),
                        m("p", { "style": { "text-align": "center", "font-weight": "400", "font-style": "normal", "font-family": "Montserrat, sans-serif", "color": "rgb(49, 49, 49)", "font-size": "38px", "line-height": "49.4px", "letter-spacing": "normal", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                          this.state.model.Subtitulo
                        )
                      ]
                    )
                  ),
                  m("div", { "style": { "padding-right": "0px", "padding-left": "0px", "padding-bottom": "0px", "padding-top": "0px", "flex": "0 0 auto", "position": "relative", "margin": "0px", "box-sizing": "border-box" } },
                    m("div", { "style": { "max-width": "1200px", "padding-right": "15px", "padding-left": "15px", "margin-left": "auto", "margin-right": "auto", "margin": "0px", "padding": "0px 15px", "width": "100%", "box-sizing": "border-box" } },
                      m("div", { "style": { "margin-left": "-15px", "margin-right": "-15px", "padding": "0px", "display": "flex", "flex-wrap": "wrap", "box-sizing": "border-box" } },
                        [
                          m("div", { "data-enabled-side-spacing": "true", "style": { "flex": window.innerWidth < 768 ? "0 0 100%" : "0 0 41.6667%", "max-width": "41.6667%", "padding-right": "40px", "padding-left": "15px", "padding-bottom": "0px", "padding-top": "0px", "position": "relative", "margin": "0px", "padding": "0px 40px 0px 15px", "width": "100%", "min-height": "1px", "box-sizing": "border-box" } },
                            [
                              m("div", { "style": { "flex": window.innerWidth < 768 ? "0 0 100%" : "0 0 75%", "padding-right": "0px", "padding-left": "0px", "padding-bottom": "15px", "padding-top": "0px", "font-size": "0px", "flex": "0 0 auto", "position": "relative", "margin": "0px", "box-sizing": "border-box" } },
                                m("span", { "style": { "position": "relative", "overflow": "hidden", "transition": "all 0.3s ease 0s", "display": "inline-block", "max-width": "100%", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                                  m("img", { "src": this.state.model.Imagen1, "style": { "transition": "all 0.3s ease 0s", "max-width": "100%", "margin": "0px", "padding": "0px", "box-sizing": "border-box", "vertical-align": "middle", "border": "0px none rgb(67, 79, 83)" } })
                                )
                              ),
                              m("div", { "style": { "flex": window.innerWidth < 768 ? "0 0 100%" : "0 0 58%", "padding-right": "0px", "padding-left": "0px", "padding-bottom": "0px", "padding-top": "0px", "position": "relative", "margin": "0px", "box-sizing": "border-box" } },
                                m("div", { "style": { "padding": "0px 1px", "margin": "0px", "box-sizing": "border-box" } },
                                  [
                                    m("p", { "style": { "font-weight": "400", "font-style": "normal", "font-family": "Poppins, sans-serif", "color": "rgb(24, 35, 51)", "font-size": "16px", "line-height": "22.4px", "letter-spacing": "normal", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                                      [
                                        this.state.model.Texto1,
                                        m.trust("&nbsp;"),
                                        this.state.model.Texto2,
                                        m.trust("&nbsp;")
                                      ]
                                    ),
                                    m("p", { "style": { "font-weight": "400", "font-style": "normal", "font-family": "Poppins, sans-serif", "color": "rgb(24, 35, 51)", "font-size": "16px", "line-height": "22.4px", "letter-spacing": "normal", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                                      m.trust("&nbsp;")
                                    ),
                                    m("p", { "style": { "font-weight": "400", "font-style": "normal", "font-family": "Poppins, sans-serif", "color": "rgb(24, 35, 51)", "font-size": "16px", "line-height": "22.4px", "letter-spacing": "normal", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                                      this.state.model.Texto3
                                    )
                                  ]
                                )
                              )
                            ]
                          ),
                          m("div", { "style": { "flex": "0 0 58.3333%", "max-width": "58.3333%", "padding-right": "15px", "padding-left": "15px", "padding-bottom": "0px", "padding-top": "0px", "position": "relative", "margin": "0px", "padding": "0px 15px", "width": "100%", "min-height": "1px", "box-sizing": "border-box" } },
                            [
                              m("div", { "data-visible-on": "-", "data-animation": "", "style": { "padding-right": "0px", "padding-left": "0px", "padding-bottom": "40px", "padding-top": "40px", "position": "relative", "margin": "0px", "box-sizing": "border-box" } },
                                m("div", { "style": { "padding": "0px 1px", "margin": "0px", "box-sizing": "border-box" } },
                                  [
                                    m("p", { "style": { "font-weight": "400", "font-style": "normal", "font-family": "Poppins, sans-serif", "color": "rgb(24, 35, 51)", "font-size": "16px", "line-height": "22.4px", "letter-spacing": "normal", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                                      this.state.model.Texto4
                                    ),
                                    m("p", { "style": { "font-weight": "400", "font-style": "normal", "font-family": "Poppins, sans-serif", "color": "rgb(24, 35, 51)", "font-size": "16px", "line-height": "22.4px", "letter-spacing": "normal", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                                      m.trust("&nbsp;")
                                    ),
                                    m("p", { "style": { "font-weight": "400", "font-style": "normal", "font-family": "Poppins, sans-serif", "color": "rgb(24, 35, 51)", "font-size": "16px", "line-height": "22.4px", "letter-spacing": "normal", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                                      [
                                        this.state.model.Texto5,
                                        m.trust("&nbsp;"),
                                        this.state.model.Texto6
                                      ]
                                    )
                                  ]
                                )
                              ),
                              m("div", { "data-grid-type": "xs", "data-visible-on": "-", "style": { "padding-right": "0px", "padding-left": "0px", "padding-bottom": "0px", "padding-top": "0px", "flex": "0 0 auto", "position": "relative", "margin": "0px", "box-sizing": "border-box" } },
                                m("div", { "style": { "max-width": "1200px", "padding-right": "0px", "padding-left": "0px", "margin-left": "auto", "margin-right": "auto", "margin": "0px", "padding": "0px", "width": "100%", "box-sizing": "border-box" } },
                                  m("div", { "style": { "margin-left": "0px", "margin-right": "0px", "padding": "0px", "display": "flex", "flex-wrap": "wrap", "box-sizing": "border-box" } },
                                    [
                                      m("div", { "style": { "background-image": "url('" + this.state.model.Imagen2 + "')", "background-position": "center", "background-repeat": "no-repeat", "background-size": "cover", "padding-right": "0px", "padding-left": "0px", "padding-bottom": "0px", "padding-top": "0px", "position": "relative", "margin": "0px", "padding": "0px", "width": "100%", "min-height": "1px", "flex": "0 0 58.3333%", "max-width": "58.3333%", "box-sizing": "border-box" } },
                                        m("div", { "data-visible-on": "+desktop,tablet,mobile-h,mobile-v", "style": { "padding-right": "0px", "padding-left": "0px", "padding-bottom": "80px", "padding-top": "80px", "position": "relative", "margin": "0px", "box-sizing": "border-box" } },
                                          m("div", { "style": { "height": "80pxmargin", "padding": "0px", "box-sizing": "border-box", "margin": "0px" } })
                                        )
                                      ),
                                      m("div", { "style": { "padding-right": "0px", "padding-left": "0px", "padding-bottom": "0px", "padding-top": "0px", "position": "relative", "margin": "0px", "width": "100%", "min-height": "1px", "flex": "0 0 41.6667%", "max-width": "41.6667%", "box-sizing": "border-box" } },
                                        [
                                          m("div", { "style": { "left": "0px", "transform": "matrix(1, 0, 0, 1, -10, 0)", "position": "absolute", "top": "0px", "bottom": "0px", "pointer-events": "none", "display": "flex", "flex-direction": "column", "justify-content": "center", "align-items": "center", "z-index": "100", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                                            m("div", { "style": { "height": "100%", "border-left-style": "solid", "border-left-width": "20px", "border-left-color": "#ffffff", "border-left": "20px solid rgb(255, 255, 255)", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } })
                                          ),
                                          m("div", { "style": { "padding-right": "0px", "padding-left": "0px", "padding-bottom": "0px", "padding-top": "0px", "font-size": "0px", "flex": "0 0 auto", "text-align": "right", "position": "relative", "margin": "0px", "box-sizing": "border-box" } },
                                            m("span", { "style": { "position": "relative", "overflow": "hidden", "transition": "all 0.3s ease 0s", "display": "inline-block", "max-width": "100%", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                                              m("img", { "src": this.state.model.Imagen3, "data-id": "261", "title": "", "width": "272", "height": "383", "alt": "", "style": { "transition": "all 0.3s ease 0s", "width": "100%", "max-width": "100%", "height": "auto", "margin": "0px", "padding": "0px", "box-sizing": "border-box", "vertical-align": "middle", "border": "0px none rgb(67, 79, 83)" } })
                                            )
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                )
                              )
                            ]
                          )
                        ]
                      )
                    )
                  )
                ]
              )
            )
          )
        )
      ]
    }
  }
  
  //-------------------OPINIONES-----------
  function Opiniones() {
    let actual = 0;

    return {
        model: {
            ImagenFondo: "assets/mt-2288-home-bg3.jpg",
            Personas: [
                {
                    Imagen: "assets/mt-2288-home-testimonials-img1.png",
                    Nombre: "Maria Brooks",
                    Texto: "Tutora con una voz mágica, sabe interesar a un adolescente, mostrarle todas las facetas y posibilidades de la voz. ¡Es muy interesante! ¡Lo recomendamos!"
                },
                {
                    Imagen: "assets/mt-2288-home-testimonials-img2.png",
                    Nombre: "Jamie Green",
                    Texto: "El mundo de la música clásica es tan fascinante. Es un mundo que abarca a personas de todas partes y borra las restricciones básicas de la nacionalidad; todos están unidos por este lenguaje común de la música"
                }
            ]
        },
        view: () => [
            m("div", { "style": { "background-image": "url('" + this.state.model.ImagenFondo + "')", "background-position": "center","background-repeat": "no-repeat", "background-size": "cover", "padding-right": "0px", "padding-left": "0px","position": "relative","margin": "0px", "padding": "80px 0px", "box-sizing": "border-box" } },
                m("div", { "style": { "max-height":"400px","max-width": "1200px", "padding-right": "15px", "padding-left": "15px", "margin-left": "auto", "margin-right": "auto", "padding": "0px 15px", "width": "100%", "box-sizing": "border-box" } },
                    m("div", { "style": { "margin-left": "-15px", "margin-right": "-15px", "padding": "0px", "display": "flex", "flex-wrap": "wrap", "box-sizing": "border-box" } },
                        m("div", { "style": { "flex": "0 0 100%", "max-width": "100%", "padding-right": "15px", "padding-left": "15px", "margin": "0px", "position": "relative", "width": "100%", "min-height": "1px", "box-sizing": "border-box" } },
                            m("div", { "style": { "display":"flex","justify-content":"center","padding-right": "0px", "padding-left": "0px", "padding-bottom": "0px", "padding-top": "0px", "position": "relative", "margin": "0px", "box-sizing": "border-box" } }, [
                                m("svg", {"class": "icon icon-tabler icon-tabler-circle-arrow-left","xmlns": "http://www.w3.org/2000/svg","width": "40","height": "40","viewBox": "0 0 24 24","stroke-width": "1.5","stroke": "#ffffff","fill": "none","stroke-linecap": "round","stroke-linejoin": "round",
                                  "style": { "position": "absolute", "top": "50%", "left": "0", "transform": "translateY(-50%)", "cursor": "pointer" },
                                  "onclick": () => {
                                        actual = (actual - 1 + this.state.model.Personas.length) % this.state.model.Personas.length;
                                        m.redraw();
                                    }
                                }, [
                                    m("path", { "stroke": "none", "d": "M0 0h24v24H0z", "fill": "none" }),
                                    m("path", { "d": "M12 21a9 9 0 1 0 0 -18a9 9 0 0 0 0 18" }),
                                    m("path", { "d": "M8 12l4 4" }),
                                    m("path", { "d": "M8 12h8" }),
                                    m("path", { "d": "M12 8l-4 4" })
                                ]),
                                m(Opinion, this.state.model.Personas[actual]),
                                m("svg", {"class":"icon icon-tabler icon-tabler-circle-arrow-right",
                                "xmlns":"http://www.w3.org/2000/svg","width":"40","height":"40",
                                "viewBox":"0 0 24 24","stroke-width":"1.5","stroke":"#ffffff","fill":"none","stroke-linecap":"round","stroke-linejoin":"round","style":{
                                  "position": "absolute", "top": "50%","right":"0","transform": "translateY(-50%)", "cursor": "pointer" },
                                "onclick": () => {
                                  actual = (actual + 1) % this.state.model.Personas.length;
                                  m.redraw();
                              }},
                                [
                                  m("path", {"stroke":"none","d":"M0 0h24v24H0z","fill":"none"}),
                                  m("path", {"d":"M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0 -18"}),
                                  m("path", {"d":"M16 12l-4 -4"}),
                                  m("path", {"d":"M16 12h-8"}),
                                  m("path", {"d":"M12 16l4 -4"})
                              ])
                            ]
                    )
                )
            )
                )
              )
            ]
    }
  
    ///!!!! Como Opinion solo se gasta en el componente Opiniones, lo definimos dentro de él
    function Opinion() {
      return {
        view: ({ attrs }) => [
          m("div", {
            "aria-hidden": "false",
            "style": {
              "margin-top":"25px","margin-bottom":"25px", "padding": "0px", "box-sizing": "border-box","max-width":"800px"
            }
          },
            [
              m("a", {
                "style": {
                  "width": "100%",
                  "display": "flex",
                  "justify-content": "center",
                  "align-items": "center",
                  "text-decoration": "none",
                  "color": "rgb(51, 122, 183)",
                  "background-color": "rgba(0, 0, 0, 0)"
                }
              },
                m("img", {
                  "src": attrs.Imagen,
                  "alt": "mt-2288-home-testimonials-img1.png",
                  "style": {
                    "max-width": "100%",
                    "height": "auto",
                    "margin": "0 auto",
                    "padding": "0",
                    "box-sizing": "border-box"
                  }
                })
              ),
              m("div", {
                "style": {
                  "background-color": "rgba(0, 0, 0, 0)",
                  "margin": "0px",
                  "padding": "0px",
                  "box-sizing": "border-box"
                }
              },
                [
                  m("p", {
                    "style": {
                      "text-align": "center",
                      "font-weight": "400",
                      "font-style": "normal",
                      "font-family": "'Open Sans', sans-serif",
                      "color": "rgb(255, 255, 255)",
                      "font-size": "14px",
                      "letter-spacing": "normal",
                      "margin": "0px",
                      "padding": "0px",
                      "box-sizing": "border-box"
                    }
                  },
                    m.trust("&nbsp;")
                  ),
                  m("p", {
                    "style": {"text-align": "center","font-weight": "400","font-style": "normal","font-family": "Montserrat, sans-serif","color": "rgb(255, 255, 255)","font-size": "24px","letter-spacing": "normal","margin": "0px","padding": "0px","box-sizing": "border-box"
                    }
                  },
                    attrs.Texto
                  ),
                  m("p", {
                    "style": {"text-align": "center","font-weight": "400","font-style": "normal","font-family": "'Open Sans', sans-serif","color": "rgb(255, 255, 255)","font-size": "14px","letter-spacing": "normal","margin": "0px","padding": "0px","box-sizing": "border-box"
                    }
                  },
                    m.trust("&nbsp;")
                  ),
                  m("p", {"style": {"text-align": "center","font-weight": "400","font-style": "normal","font-family": "'Nexa Rust Script L', sans-serif","color": "rgb(255, 255, 255)","font-size": "24px","letter-spacing": "3px","margin": "0px","padding": "0px","box-sizing": "border-box"
                    }
                  },
                    attrs.Nombre
                  )
                ]
              )
            ]
          )
        ]
      }
    }
  
  }
  
  //------------------NOVEDADES----------
  function Novedades() {
    return {
      model: {
        Titulo: "Blog",
        SubTitulo: "Nuestras noticias",
        TextoMasPost: "Mas noticias",
        Link: "#!/Blog"
      },
      view: () => [
        m("div", { "style": { "display": "flex", "padding-right": "0px", "padding-left": "0px", "padding-bottom": "80px", "padding-top": "80px", "position": "relative", "margin": "0px", "box-sizing": "border-box" } },
          m("div", { "style": { "padding-right": "15px", "padding-left": "15px", "width": "100%", "box-sizing": "border-box" } },
            m("div", { "style": { "margin-left": "-15px", "margin-right": "-15px", "padding": "0px", "display": "flex", "flex-wrap": "wrap", "box-sizing": "border-box" } },
              m("div", { "style": { "padding-right": "15px", "padding-left": "15px", "padding": "0px 15px", "margin": "0px", "position": "relative", "width": "100%", "min-height": "1px", "box-sizing": "border-box" } },
                [
                  m("div", { "style": { "padding-right": "0px", "padding-left": "0px", "padding-bottom": "0px", "padding-top": "0px", "flex": "0 0 auto", "justify-content": "center", "position": "relative", "margin": "0px", "box-sizing": "border-box" } },
                    m("div", { "style": { "padding-right": "15px", "padding-left": "15px", "margin-left": "auto", "margin-right": "auto", "margin": "0px", "padding": "0px 15px", "width": "100%", "box-sizing": "border-box" } },
                      m("div", { "style": { "margin-left": "-15px", "margin-right": "-15px", "padding": "0px", "display": "flex", "flex-wrap": "wrap", "box-sizing": "border-box" } },
                        [
                          m("div", { "style": { "flex": "0 0 66.6667%", "max-width": "66.6667%", "padding-right": "15px", "padding-left": "15px", "padding-bottom": "0px", "padding-top": "0px", "justify-content": "center", "display": "flex", "flex-direction": "column", "position": "relative", "margin": "0px", "padding": "0px 15px", "width": "100%", "min-height": "1px", "box-sizing": "border-box" } },
                            m("div", { "data-visible-on": "-", "data-animation": "", "style": { "padding-right": "0px", "padding-left": "0px", "padding-bottom": "15px", "padding-top": "15px", "position": "relative", "margin": "0px", "box-sizing": "border-box" } },
                              m("div", { "style": { "padding": "0px 1px", "margin": "0px", "box-sizing": "border-box" } },
                                [
                                  m("p", { "style": { "font-weight": "400", "font-style": "normal", "font-family": "'Nexa Rust Script L', sans-serif", "color": "rgb(152, 152, 152)", "font-size": "24px", "line-height": "36px", "letter-spacing": "3px", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                                    this.state.model.Titulo
                                  ),
                                  m("p", { "style": { "font-weight": "400", "font-style": "normal", "font-family": "Montserrat, sans-serif", "color": "rgb(49, 49, 49)", "font-size": "38px", "line-height": "49.4px", "letter-spacing": "normal", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                                    this.state.model.Subtitulo
                                  )
                                ]
                              )
                            )
                          ),
                          m("div", { "style": { "flex": "0 0 33.3333%", "max-width": "33.3333%", "padding-right": "15px", "padding-left": "15px", "padding-bottom": "0px", "padding-top": "0px", "justify-content": "center", "display": "flex", "flex-direction": "column", "position": "relative", "margin": "0px", "width": "100%", "min-height": "1px", "box-sizing": "border-box" } },
                            m("div", { "style": { "padding-right": "0px", "padding-left": "0px", "padding-bottom": "15px", "padding-top": "0px", "text-align": "right", "position": "relative", "margin": "0px", "box-sizing": "border-box" } },
                              m("a", { "href": this.state.model.Link, "data-action": "blog.index", "style": { "padding": "16px 40px", "border-style": "solid", "border-width": "1px", "border-color": "rgb(0, 0, 0)", "border-radius": "0px", "background-color": "rgba(0, 0, 0, 0)", "font-size": "14px", "position": "relative", "text-align": "center", "z-index": "1", "transition": "all 0.3s ease 0s", "line-height": "14px", "border": "1px solid rgb(0, 0, 0)", "margin": "0px", "letter-spacing": "normal", "background": "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box", "overflow": "hidden", "display": "inline-flex", "align-items": "center", "justify-content": "center", "flex-flow": "row nowrap", "cursor": "pointer", "text-decoration": "none solid rgb(51, 122, 183)", "color": "rgb(51, 122, 183)", "box-sizing": "border-box" } },
                                [
                                  m("span", { "style": { "display": "none", "position": "relative", "align-items": "center", "justify-content": "center", "transition": "all 0.3s ease 0s", "flex-shrink": "0", "inset": "auto", "float": "none", "margin": "0px", "padding": "0px", "box-sizing": "border-box", "font-style": "normal", "font-variant": "normal", "font-kerning": "auto", "font-optical-sizing": "auto", "font-feature-settings": "normal", "font-variation-settings": "normal", "font-weight": "400", "font-stretch": "100%", "line-height": "14px", "font-family": "FontAwesome", "font-size": "14px", "text-rendering": "auto", "-webkit-font-smoothing": "antialiased" } }),
                                  m("span", { "style": { "display": "none", "border": "0px none rgb(51, 122, 183)", "margin": "0px", "transition": "border-color 0.5s ease 0s", "padding": "0px", "box-sizing": "border-box" } }),
                                  m("span", { "style": { "font-size": "14px", "letter-spacing": "normal", "font-family": "Poppins, sans-serif", "font-style": "normal", "font-weight": "500", "color": "rgb(0, 0, 0)", "text-decoration": "none solid rgb(0, 0, 0)", "position": "relative", "transition": "all 0.3s ease 0s", "z-index": "1", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                                    this.state.model.TextoMasPost
                                  )
                                ]
                              )
                            )
                          )
                        ]
                      )
                    )
                  ),
                  m("div", { "style": { "justify-content": "center", "display": "flex", "flex": "0 0 100%", "position": "relative", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                    m("div", { "style": { "max-width": "1200px", "padding-right": "15px", "padding-left": "15px", "margin-left": "auto", "margin-right": "auto", "margin": "0px", "padding": "0px 15px", "width": "100%", "box-sizing": "border-box" } },
                      m("div", { "style": { "margin-left": "-15px", "margin-right": "-15px", "list-style-type": "none", "padding": "0px", "display": "flex", "flex-wrap": "wrap", "justify-content": "center", "box-sizing": "border-box" } }, // Agrega esta línea para centrar las noticias horizontalmente
                        [
                          Noticia.slice(0, 2).map(item => m(cargarNoticias, item))
                        ]
                      )
                    )
                  )
                ]
              )
            )
          )
        )
      ]
    }
    
  
    function cargarNoticias() {
      return {
        view: ({ attrs }) => [
          m("div", { "style": { "flex": window.innerWidth < 768 ? "0 0 100%" : "0 0 50%", "max-width": "100%", "padding-right": "15px", "padding-left": "15px", "margin": "0px", "padding": "0px 15px", "position": "relative", "width": "100%", "min-height": "1px", "box-sizing": "border-box" } },
            m("div", { "style": { "padding-right": "0px", "padding-left": "0px", "padding-bottom": "0px", "padding-top": "15px", "margin": "0px", "box-sizing": "border-box" } },
              [
                m("div", { "style": { "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                  m("div", { "style": { "padding-right": "0px", "padding-left": "0px", "padding-bottom": "15px", "padding-top": "0px", "font-size": "0px", "flex": "0 0 auto", "text-align": "left", "position": "relative", "margin": "0px", "box-sizing": "border-box" } },
                    m("a", { "href": "#!/Blog", onclick: () => { idNoticia = attrs.id;modo=2 }, "style": { "position": "relative", "overflow": "hidden", "transition": "all 0.3s ease 0s", "display": "inline-block", "max-width": "100%", "text-decoration": "none solid rgb(51, 122, 183)", "color": "rgb(51, 122, 183)", "margin": "0px", "padding": "0px", "box-sizing": "border-box", "background-color": "rgba(0, 0, 0, 0)" } },
                      m("img", { "src": attrs.Imagen, "style": { "transition": "all 0.3s ease 0s", "width": "100%", "max-width": "100%", "height": "auto", "margin": "0px", "padding": "0px", "box-sizing": "border-box", "vertical-align": "middle", "border": "0px none rgb(51, 122, 183)" } })
                    )
                  )
                ),
                m("div", { "style": { "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                  m("div", { "style": { "padding-right": "0px", "padding-left": "0px", "padding-bottom": "15px", "padding-top": "0px", "text-align": "left", "position": "relative", "margin": "0px", "box-sizing": "border-box" } },
                    m("div", { "style": { "padding": "0px 1px", "margin": "0px", "box-sizing": "border-box" } },
                      m("h2", { "style": { "margin": "0px", "font-weight": "500", "font-style": "normal", "font-family": "Montserrat, sans-serif", "color": "rgb(37, 37, 37)", "font-size": "20px", "line-height": "24px", "letter-spacing": "normal", "padding": "0px", "box-sizing": "border-box" } },
                        m("a", { "href": "#!/Blog", onclick: () => { idNoticia = attrs.id;modo=2 }, "style": { "color": "rgb(37, 37, 37)", "text-decoration": "none solid rgb(37, 37, 37)", "font-weight": "500", "font-style": "normal", "transition": "all 0.3s ease 0s", "margin": "0px", "padding": "0px", "box-sizing": "border-box", "background-color": "rgba(0, 0, 0, 0)" } },
                          attrs.Titulo
                        )
                      )
                    )
                  )
                ),
                m("div", { "style": { "padding-right": "0px", "padding-left": "0px", "padding-bottom": "15px", "padding-top": "0px", "overflow-wrap": "break-word", "margin": "0px", "box-sizing": "border-box" } },
                  m("p", { "style": { "font-weight": "400", "font-style": "normal", "font-family": "Poppins, sans-serif", "color": "rgb(24, 35, 51)", "font-size": "16px", "line-height": "22.4px", "letter-spacing": "normal", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                    attrs.Parrafos?.[0].Parrafo
                  )
                )
              ]
            )
          ),
        ]
      }
    }
  
  }
  
  //------------------SECCION DE TICKETS
  function ObtenerTickets() {
    return {
      model: {
        ImagenFondo: "assets/mt-2288-home-bg4.jpg",
        Texto1: "Orquesta",
        Texto2: "LAS LEGENDARIAS ENTRADAS PARA LOS CONCIERTOS DE ÁMSTERDAM QUE YA ESTÁN A LA VENTA",
        ObtenerTickets: "OBTENER TICKETS",
        LinkBoton: "#!/contacto"
      },
      view: () => [
        m("div", { "style": { "display": "flex", "padding-right": "0px", "padding-left": "0px", "padding-bottom": "80px", "padding-top": "0px", "position": "relative", "margin": "0px", "box-sizing": "border-box" } },
          m("div", { "style": { "justify-content": "center", "max-width": "1200px", "padding-right": "15px", "padding-left": "15px", "margin-left": "auto", "margin-right": "auto", "padding": "0px 15px", "width": "100%", "box-sizing": "border-box" } },
            m("div", { "style": { "margin-left": "-15px", "margin-right": "-15px", "padding": "0px", "display": "flex", "flex-wrap": "wrap", "box-sizing": "border-box" } },
              m("div", { "style": { "flex": "0 0 100%", "max-width": "100%", "padding-right": "15px", "padding-left": "15px", "padding": "0px 15px", "margin": "0px", "position": "relative", "width": "100%", "min-height": "1px", "box-sizing": "border-box" } },
                m("div", { "style": { "display": "flex", "background-image": "url('" + this.state.model.ImagenFondo + "')", "background-repeat": "no-repeat", "background-size": "cover", "padding-right": "0px", "padding-left": "0px", "padding-bottom": "40px", "padding-top": "40px", "position": "relative", "margin": "0px", "box-sizing": "border-box" } },
  
                  m("div", { "style": { "max-width": "1000px", "padding-right": "15px", "padding-left": "15px", "margin": "0px", "padding": "0px 15px", "width": "100%", "box-sizing": "border-box" } },
                    m("div", { "style": { "justify-content": "center", "margin-left": "-15px", "margin-right": "-15px", "padding": "0px", "box-sizing": "border-box" } },
                      [
                        m("div", { "style": { "flex": "0 0 33.3333%", "padding-right": "15px", "padding-left": "15px", "padding-bottom": "0px", "padding-top": "0px", "position": "relative", "margin": "0px", "padding": "0px 15px", "width": "100%", "min-height": "1px", "box-sizing": "border-box" } },
                        ),
                        m("div", { "style": { "flex": "0 0 66.6667%", "padding-right": "40px", "padding-left": "40px", "padding-bottom": "0px", "padding-top": "0px", "position": "relative", "margin": "0px", "padding": "0px 40px", "width": "100%", "min-height": "1px", "box-sizing": "border-box" } },
                          [
                            m("div", { "style": { "padding-right": "15px", "padding-left": "0px", "padding-bottom": "40px", "padding-top": "15px", "position": "relative", "margin": "0px", "box-sizing": "border-box" } },
                              m("div", { "style": { "padding": "0px 1px", "margin": "0px", "box-sizing": "border-box" } },
                                [
                                  m("p", { "style": { "text-align": "right", "font-weight": "400", "font-style": "normal", "font-family": "'Vampiro One', display", "color": "rgb(255, 255, 255)", "font-size": "24px", "line-height": "38.4px", "letter-spacing": "3px", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                                    this.state.model.Texto1
                                  ),
                                  m("p", { "style": { "text-align": "right", "font-weight": "400", "font-style": "normal", "font-family": "Montserrat, sans-serif", "color": "rgb(49, 49, 49)", "font-size": "38px", "line-height": "49.4px", "letter-spacing": "normal", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                                    m("span", { "style": { "color": "rgb(255, 255, 255)", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                                      this.state.model.Texto2
                                    )
                                  )
                                ]
                              )
                            ),
                            m("div", { "style": { "padding-right": "15px", "padding-left": "0px", "padding-bottom": "0px", "padding-top": "0px", "text-align": "right", "position": "relative", "margin": "0px", "box-sizing": "border-box" } },
                              m("a", { "href": this.state.model.LinkBoton, "data-action": "page", "style": { "padding": "16px 40px", "min-width": "167px", "border-style": "solid", "border-width": "1px", "border-color": "rgb(255, 255, 255)", "border-radius": "0px", "background-color": "rgba(0, 0, 0, 0)", "font-size": "14px", "position": "relative", "text-align": "center", "z-index": "1", "transition": "all 0.3s ease 0s", "line-height": "14px", "border": "1px solid rgb(255, 255, 255)", "margin": "0px", "letter-spacing": "normal", "background": "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box", "overflow": "hidden", "display": "inline-flex", "align-items": "center", "justify-content": "center", "flex-flow": "row nowrap", "cursor": "pointer", "text-decoration": "none solid rgb(51, 122, 183)", "color": "rgb(51, 122, 183)", "box-sizing": "border-box" } },
                                [
                                  m("span", { "style": { "display": "none", "position": "relative", "align-items": "center", "justify-content": "center", "transition": "all 0.3s ease 0s", "flex-shrink": "0", "inset": "auto", "float": "none", "margin": "0px", "padding": "0px", "box-sizing": "border-box", "font-style": "normal", "font-variant": "normal", "font-kerning": "auto", "font-optical-sizing": "auto", "font-feature-settings": "normal", "font-variation-settings": "normal", "font-weight": "400", "font-stretch": "100%", "line-height": "14px", "font-family": "FontAwesome", "font-size": "14px", "text-rendering": "auto", "-webkit-font-smoothing": "antialiased" } }),
                                  m("span", { "style": { "display": "none", "border": "0px none rgb(51, 122, 183)", "margin": "0px", "transition": "border-color 0.5s ease 0s", "padding": "0px", "box-sizing": "border-box" } }),
                                  m("span", { "style": { "font-size": "14px", "letter-spacing": "normal", "font-family": "Poppins, sans-serif", "font-style": "normal", "font-weight": "500", "color": "rgb(255, 255, 255)", "text-decoration": "none solid rgb(255, 255, 255)", "position": "relative", "transition": "all 0.3s ease 0s", "z-index": "1", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                                    this.state.model.ObtenerTickets
                                  )
                                ]
                              )
                            )
                          ]
                        )
                      ]
                    )
                  )
                )
              )
            )
          )
        )
      ]
    }
  }
}

let SeccionesHistoria = [
  {
    Fecha: "1975",
    Titulo: "Orquesta fundada",
    Texto: "Maestro es uno de los artistas emergentes de los que más se habla en toda la industria de la música pop. Lo curioso es que inicialmente Mary era una artista de música pop-country, con raíces en Arkansas. Nació el 13 de diciembre de 1975. , en Reading, la familia Maestro se mudó a Arkansas muy pronto, donde comenzó a crear canciones a los 5 años y, a los 16, lanzó su primer álbum debut",
    Imagen: "assets/mt-2288-history-img1.jpg"
  },
  {
    Fecha: "1978",
    Titulo: "Orquesta fundada",
    Texto: "Éxitos como “Love Story” y “You Belong With Me” atrajeron tanto a los fanáticos del country como del pop y ayudaron a impulsar el éxito multiplatino de sus álbumes, con Fearless logrando fácilmente el estatus de éxito de ventas en Billboard en 1978",
  },
  {
    Fecha: "2009",
    Titulo: "Orquesta fundada",
    Texto1: "Maestro es uno de los artistas emergentes de los que más se habla en toda la industria de la música pop. Lo curioso es que era una música pop-country, de la que surgen sus raíces",
    Texto2I: "Nacido en 2009",
    Texto2II: ", en Reading, la familia Maestro se mudó a Arkansas muy pronto, donde comenzó a crear canciones a los 5 años y, a los 16, lanzó su primer álbum debut",
    Texto3: "A continuación se detallan los errores comunes relacionados con asuntos monetarios junto con consejos de planificación financiera para ayudarlo a administrar sus propias finanzas adecuadamente",
    Texto4: "El presupuesto es lo más básico en la planificación financiera. Por eso es especialmente importante tener cuidado al elaborarlo. Para empezar, tienes que elaborar tu propio presupuesto para el mes siguiente y sólo después podrás hacer un presupuesto anual. ",
    Imagen1: "assets/mt-2288-history-img2.jpg",
    Imagen2: "assets/mt-2288-history-img3.jpg"
  },
  {
    Fecha1: "2015",
    Fecha2: "2021",
    Titulo: "Orquesta fundada",
    Imagen: "assets/mt-2288-history-img4.jpg",
    items: [
      {
        Fecha: "2015",
        Texto: "Depende del curso que elijas, ofrecemos lecciones entre lecciones por semana. Sin embargo, si necesitas más, puedes comprar una de nuestras actualizaciones",
        Texto2: ""
      },
      {
        Fecha: "2018",
        Texto2: "Todos los participantes deben registrarse con antelación.",
        Texto: "Los músicos y los padres de todo el mundo saben que el ajedrez no es un juego sencillo. Es una gran herramienta de aprendizaje que ayudará a desarrollar las habilidades de las funciones ejecutivas de su hijo."
      },
      {
        Fecha: "2021",
        Texto: "Únase a nosotros en el Gran Torneo de Verano 2021. Se celebra cada año el primer domingo de verano, nuestros maestros y principiantes de ajedrez del Gran Torneo de Verano del norte de California",
        Texto2: ""
      },
    ]
  }
]

function Historia() {    
    return {
    view: () => [
      m(Menu),
      m(Heros,{texto:"Historia"}),
      m(PrimeraSeccionHistoria),//Se utilizan diferentes secciones, cada una tiene un formato de visualizacion distinta.
      m(SegundaSeccionHistoria),
      m(TerceraSeccionHistoria),
      m(UltimaSeccionHistoria),
      m(Footer)
    ]
  }
}
  function PrimeraSeccionHistoria() {
    return {
      view: () => [
        m("div", { "style": { "display": "flex", "padding-right": "0px", "padding-left": "0px", "padding-bottom": "0px", "padding-top": "0px", "flex": "0 0 auto", "position": "relative", "margin": "0px", "box-sizing": "border-box" } },
          m("div", { "style": { "max-width": "1200px", "padding-right": "15px", "padding-left": "15px", "margin-left": "auto", "margin-right": "auto", "padding": "0px 15px", "width": "100%", "box-sizing": "border-box" } },
            m("div", { "style": { "margin-left": "-15px", "margin-right": "-15px", "padding": "0px", "display": "flex", "flex-wrap": "wrap", "box-sizing": "border-box" } },
              [
                m("div", { "data-spacing": "aaaa", "style": { "flex": "0 0 16.6667%", "max-width": "16.6667%", "padding-right": "15px", "padding-left": "15px", "padding-bottom": "0px", "padding-top": "0px", "position": "relative", "margin": "0px", "padding": "0px 15px", "width": "100%", "min-height": "1px", "box-sizing": "border-box" } },
                ),
                m("div", { "data-spacing": "aaaa", "style": { "flex": "0 0 66.6667%", "max-width": "66.6667%", "padding-right": "15px", "padding-left": "15px", "padding-bottom": "0px", "padding-top": "0px", "position": "relative", "margin": "0px", "padding": "0px 15px", "width": "100%", "min-height": "1px", "box-sizing": "border-box" } },
                  [
                    m("div", { "style": { "justify-content": "center", "padding-right": "15px", "padding-left": "15px", "padding-bottom": "0px", "padding-top": "0px", "position": "relative", "margin": "0px", "width": "100%", "min-height": "1px", "box-sizing": "border-box" } },
                      [
                        
                        m(ContadorFechas,{Fecha:SeccionesHistoria[0].Fecha}),

                        m("div", { "style": { "max-width": "1000px", "padding-right": "0px", "padding-left": "0px", "padding-bottom": "40px", "padding-top": "0px", "position": "relative", "margin": "0px", "box-sizing": "border-box" } },
                          m("div", { "style": { "padding": "0px 1px", "margin": "0px", "box-sizing": "border-box" } },
                            [
                              m("p", { "style": { "text-align": "center", "font-weight": "400", "font-style": "normal", "font-family": "'Nexa Rust Script L', sans-serif", "color": "rgb(0, 0, 0)", "font-size": "24px", "line-height": "33.6px", "letter-spacing": "3px", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                              SeccionesHistoria[0].Titulo
                              ),
                              m("p", { "style": { "text-align": "center", "font-weight": "400", "font-style": "normal", "font-family": "'Nexa Rust Script L', sans-serif", "color": "rgb(0, 0, 0)", "font-size": "24px", "line-height": "33.6px", "letter-spacing": "3px", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                                m.trust("&nbsp;")
                              ),
                              m("p", { "style": { "text-align": "center", "font-weight": "400", "font-style": "normal", "font-family": "Poppins, sans-serif", "color": "rgb(24, 35, 51)", "font-size": "16px", "line-height": "22.4px", "letter-spacing": "normal", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                              SeccionesHistoria[0].Texto
                              )
                            ]
                          )
                        ),
                        m("div", { "style": { "padding-right": "0px", "padding-left": "0px", "padding-bottom": "40px", "padding-top": "0px", "font-size": "0px", "flex": "0 0 auto", "text-align": "center", "position": "relative", "margin": "0px", "box-sizing": "border-box" } },
                          m("span", { "style": { "position": "relative", "overflow": "hidden", "transition": "all 0.3s ease 0s", "display": "inline-block", "max-width": "100%", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                            m("img", { "src": SeccionesHistoria[0].Imagen, "data-id": "300", "title": "", "width": "780", "height": "370", "alt": "", "style": { "transition": "all 0.3s ease 0s", "width": "100%", "max-width": "100%", "height": "auto", "margin": "0px", "padding": "0px", "box-sizing": "border-box", "vertical-align": "middle", "border": "0px none rgb(67, 79, 83)" } })
                          )
                        )
                      ]
                    ),
                    m("div", {
                      "style": {
                        "display": "flex",
                        "justify-content": "center",
                      }
                    }, [
                      m("div", {
                        "style": {
                          "border-left": "1px solid #000",
                          "height": "100px",
                        }
                      })
                    ])
                  ]
                )
              ]
            )
          )
        )
      ]
  
    }
  }

  function SegundaSeccionHistoria() {
    return {
      view: () => [
        m("div", { "style": { "display": "flex", "padding-right": "0px", "padding-left": "0px", "padding-bottom": "40px", "padding-top": "40px", "position": "relative", "margin": "0px", "box-sizing": "border-box" } },
          m("div", { "style": { "padding-right": "15px", "padding-left": "15px", "margin": "0px", "width": "100%", "box-sizing": "border-box" } },
            m("div", { "style": { "justify-content": "center", "margin-left": "-15px", "margin-right": "-15px", "padding": "0px", "display": "flex", "flex-wrap": "wrap", "box-sizing": "border-box" } },
              m("div", { "style": { "box-sizing": "border-box" } },
                [
                  m("div", { "style": { "padding-right": "15px", "padding-left": "15px", "padding-bottom": "0px", "padding-top": "0px", "position": "relative", "margin": "0px", "width": "100%", "min-height": "1px", "box-sizing": "border-box" } },
                  ),
                  m("div", { "style": { "padding-right": "15px", "padding-left": "15px", "padding-bottom": "0px", "padding-top": "0px", "position": "relative", "margin": "0px", "width": "100%", "min-height": "1px", "box-sizing": "border-box" } },
                    [
                      m(ContadorFechas,{Fecha:SeccionesHistoria[1].Fecha}),
                      m("div", { "style": { "padding-right": "0px", "padding-left": "0px", "padding-bottom": "0px", "padding-top": "0px", "position": "relative", "margin": "0px", "box-sizing": "border-box" } },
                        m("div", { "style": { "padding": "0px 1px", "margin": "0px", "box-sizing": "border-box" } },
                          [
                            m("p", { "style": { "text-align": "center", "font-weight": "400", "font-style": "normal", "font-family": "'Nexa Rust Script L', sans-serif", "color": "rgb(0, 0, 0)", "font-size": "24px", "line-height": "33.6px", "letter-spacing": "3px", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                            SeccionesHistoria[1].Titulo
                            ),
                            m("p", { "style": { "font-weight": "400", "font-style": "normal", "font-family": "'Nexa Rust Script L', sans-serif", "color": "rgb(0, 0, 0)", "font-size": "24px", "line-height": "33.6px", "letter-spacing": "3px", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                              m.trust("&nbsp;")
                            ),
                            m("p", {
                              "style": {
                                "text-align": "center", "font-weight": "400", "font-style": "normal", "font-family": "Poppins, sans-serif", "color": "rgb(24, 35, 51)", "font-size": "16px", "line-height": "22.4px", "letter-spacing": "normal", "margin": "0px", "padding": "0px", "box-sizing": "border-box", "width": "50%", "margin": "0 auto"
                              }
                            },
                            SeccionesHistoria[1].Texto
                            )
                          ]
                        )
                      )
                    ]
                  ),
                  m("div", { "style": { "flex": "0 0 33.3333%", "max-width": "33.3333%", "padding-bottom": "0px", "padding-top": "0px", "position": "relative", "margin": "0px", "width": "100%", "min-height": "1px", "box-sizing": "border-box" } },
                  )
                ]
              )
            )
          )
        ),
        m("div", {
          "style": {
            "display": "flex", 
            "justify-content": "center", 
          }
        }, [
          m("div", {
            "style": {
              "border-left": "1px solid #000",
              "height": "100px", "margin-bottom": "35px", "margin-top": "35px"
            }
          })
        ])
      ]
    }
  }

  function TerceraSeccionHistoria() {
    return {
      view: () => [m("div", { "style": { "display": "flex", "padding-right": "0px", "padding-left": "0px", "padding-bottom": "0px", "padding-top": "40px", "flex": "0 0 auto", "position": "relative", "margin": "0px", "box-sizing": "border-box" } },
        m("div", { "style": { "justify-content": "center", "max-width": "1200px", "padding-right": "15px", "padding-left": "15px", "margin-left": "auto", "margin-right": "auto", "padding": "0px 15px", "width": "100%", "box-sizing": "border-box" } },
          m("div", { "style": { "margin-left": "-15px", "margin-right": "-15px", "padding": "0px", "display": "flex", "flex-wrap": "wrap", "box-sizing": "border-box" } },
            [
              m("div", { "style": { "flex": "0 0 16.6667%", "max-width": "16.6667%", "padding-right": "15px", "padding-left": "15px", "padding-bottom": "0px", "padding-top": "0px", "position": "relative", "margin": "0px", "padding": "0px 15px", "width": "100%", "min-height": "1px", "box-sizing": "border-box" } },
              ),
              m("div", { "style": { "flex": "0 0 66.6667%", "max-width": "66.6667%", "padding-right": "15px", "padding-left": "15px", "padding-bottom": "0px", "padding-top": "0px", "position": "relative", "margin": "0px", "padding": "0px 15px", "width": "100%", "min-height": "1px", "box-sizing": "border-box" } },
                [
                  m("div", { "style": { "padding-right": "0px", "padding-left": "0px", "padding-bottom": "15px", "padding-top": "0px", "text-align": "center", "position": "relative", "margin": "0px", "box-sizing": "border-box" } },
                    m("div", { "style": { "display": "inline-flex", "align-items": "center", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                      m("span", { "style": { "font-weight": "700", "font-style": "normal", "font-family": "Montserrat, sans-serif", "color": "rgb(0, 0, 0)", "font-size": "56px", "line-height": "67.2px", "letter-spacing": "normal", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                        m(ContadorFechas,{Fecha:SeccionesHistoria[2].Fecha})
                      )
                    ),
                    m("div", { "data-widget": "text", "data-preset": "default", "data-spacing": "aama", "data-visible-on": "-", "data-animation": "", "style": { "padding-right": "0px", "padding-left": "0px", "padding-bottom": "40px", "padding-top": "0px", "position": "relative", "margin": "0px", "box-sizing": "border-box" } },
                      m("div", { "style": { "padding": "0px 1px", "margin": "0px", "box-sizing": "border-box" } },
                        m("p", { "style": { "text-align": "center", "font-weight": "400", "font-style": "normal", "font-family": "'Nexa Rust Script L', sans-serif", "color": "rgb(0, 0, 0)", "font-size": "24px", "line-height": "33.6px", "letter-spacing": "3px", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                        SeccionesHistoria[2].Titulo
                        )
                      )
                    ),
                    m("div", { "data-grid-type": "sm", "data-visible-on": "-", "data-spacing": "aaaa", "style": { "padding-right": "0px", "padding-left": "0px", "padding-bottom": "0px", "padding-top": "0px", "flex": "0 0 auto", "position": "relative", "margin": "0px", "box-sizing": "border-box" } },
                      m("div", { "style": { "max-width": "1200px", "padding-right": "0px", "padding-left": "0px", "margin-left": "auto", "margin-right": "auto", "margin": "0px", "padding": "0px", "width": "100%", "box-sizing": "border-box" } },
                        m("div", { "style": { "margin-left": "-15px", "margin-right": "-15px", "padding": "0px", "display": "flex", "flex-wrap": "wrap", "box-sizing": "border-box" } },
                          [
                            m("div", { "style": { "flex": window.innerWidth < 768 ? "0 0 100%" : "0 0 50%", "max-width": "100%", "padding-right": "15px", "padding-left": "15px", "padding-bottom": "0px", "padding-top": "0px", "position": "relative", "margin": "0px", "padding": "0px 15px", "width": "100%", "min-height": "1px", "box-sizing": "border-box" } },
                              [
                                m("div", { "style": { "max-height": "250px", "padding-right": "0px", "padding-left": "0px", "padding-bottom": "40px", "padding-top": "0px", "position": "relative", "margin": "0px", "box-sizing": "border-box" } },
                                  m("div", { "style": { "padding": "0px 1px", "margin": "0px", "box-sizing": "border-box" } },
                                    m("p", { "style": { "font-weight": "400", "font-style": "normal", "font-family": "Poppins, sans-serif", "color": "rgb(24, 35, 51)", "font-size": "17px", "line-height": "22.4px", "letter-spacing": "normal", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                                    SeccionesHistoria[2].Texto1
                                    )
                                  )
                                ),
                                m("div", { "style": { "padding-right": "0px", "padding-left": "0px", "padding-bottom": "40px", "padding-top": "0px", "font-size": "0px", "text-align": "center", "position": "relative", "margin": "0px", "box-sizing": "border-box" } },
                                  m("span", { "style": { "position": "relative", "overflow": "hidden", "transition": "all 0.3s ease 0s", "display": "inline-block", "max-width": "100%", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                                    m("img", { "src": SeccionesHistoria[2].Imagen1, "style": { "transition": "all 0.3s ease 0s", "width": "100%", "max-width": "100%", "height": "auto", "margin": "0px", "padding": "0px", "box-sizing": "border-box", "vertical-align": "middle", "border": "0px none rgb(67, 79, 83)" } })
                                  )
                                )
                              ]
                            ),
                            m("div", { "style": { "flex": window.innerWidth < 768 ? "0 0 100%" : "0 0 50%", "max-width": "100%", "padding-right": "15px", "padding-left": "15px", "padding-bottom": "0px", "padding-top": "0px", "position": "relative", "margin": "0px", "padding": "0px 15px", "width": "100%", "min-height": "1px", "box-sizing": "border-box" } },
                              [
                                m("div", { "style": { "max-height": "450px", "padding-right": "0px", "padding-left": "0px", "padding-bottom": "40px", "padding-top": "0px", "position": "relative", "margin": "0px", "box-sizing": "border-box" } },
                                  m("div", { "style": { "padding": "0px 1px", "margin": "0px", "box-sizing": "border-box" } },
                                    m("p", { "style": { "font-weight": "400", "font-style": "normal", "font-family": "Poppins, sans-serif", "color": "rgb(24, 35, 51)", "font-size": "17px", "line-height": "22.4px", "letter-spacing": "normal", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                                      [
                                        SeccionesHistoria[2].Texto2I,
                                        m.trust("&nbsp;"),
                                        SeccionesHistoria[2].Texto2II
                                      ]
                                    )
                                  )
                                ),
                                m("div", { "style": { "padding-right": "0px", "padding-left": "0px", "padding-bottom": "40px", "padding-top": "0px", "font-size": "0px", "text-align": "center", "margin": "0px", "box-sizing": "border-box" } },
                                  m("span", { "style": { "position": "relative", "overflow": "hidden", "transition": "all 0.3s ease 0s", "display": "inline-block", "max-width": "100%", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                                    m("img", { "src": SeccionesHistoria[2].Imagen2, "style": { "transition": "all 0.3s ease 0s", "width": "100%", "max-width": "100%", "height": "auto", "margin": "0px", "padding": "0px", "box-sizing": "border-box", "vertical-align": "middle", "border": "0px none rgb(67, 79, 83)" } })
                                  )
                                )
                              ]
                            )
                          ]
                        )
                      )
                    ),
                    m("div", { "data-widget": "text", "data-preset": "default", "data-spacing": "aama", "data-visible-on": "-", "data-animation": "", "style": { "padding-right": "0px", "padding-left": "0px", "padding-bottom": "40px", "padding-top": "0px", "position": "relative", "margin": "0px", "box-sizing": "border-box" } },
                      m("div", { "style": { "padding": "0px 1px", "margin": "0px", "box-sizing": "border-box" } },
                        [
                          m("p", { "style": { "font-weight": "400", "font-style": "normal", "font-family": "Poppins, sans-serif", "color": "rgb(24, 35, 51)", "font-size": "16px", "line-height": "22.4px", "letter-spacing": "normal", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                          SeccionesHistoria[2].Texto3
                          ),
                          m("p", { "style": { "font-weight": "400", "font-style": "normal", "font-family": "Poppins, sans-serif", "color": "rgb(24, 35, 51)", "font-size": "16px", "line-height": "22.4px", "letter-spacing": "normal", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                            m.trust("&nbsp;")
                          ),
                          m("p", { "style": { "font-weight": "400", "font-style": "normal", "font-family": "Poppins, sans-serif", "color": "rgb(24, 35, 51)", "font-size": "16px", "line-height": "22.4px", "letter-spacing": "normal", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                          SeccionesHistoria[2].Texto4
                          )
                        ]
                      )
                    )
                  )
  
                ]
              )
            ]
          )
        )
      ),
      m("div", {
        "style": {
          "display": "flex", "justify-content": "center",
        }
      }, [
        m("div", {
          "style": {
            "border-left": "1px solid #000", "height": "100px", "margin-bottom": "35px", "margin-top": "35px"
          }
        })
      ])
  
      ]
    }
  }

  function UltimaSeccionHistoria() {
    return {
      view: () => [
        m("div", { "style": { "display": "flex", "justify-content": "center", "padding-right": "0px", "padding-left": "0px", "padding-bottom": "80px", "padding-top": "40px", "position": "relative", "margin": "0px", "box-sizing": "border-box" } },
          m("div", { "style": { "max-width": "1400px", "display": "flex", "justify-content": "center", "align-items": "center", "padding-right": "15px", "padding-left": "15px", "margin": "0px", "width": "100%", "box-sizing": "border-box" } },
            m("div", { "style": { "justify-content": "center", "margin-left": "-15px", "margin-right": "-15px", "padding": "0px", "display": "flex", "flex-wrap": "wrap", "box-sizing": "border-box" } },
              m("div", { "style": { "justify-content": "center", "flex": "0 0 100%", "max-width": "100%", "padding-right": "0px", "padding-left": "0px", "padding": "0px", "margin": "0px", "position": "relative", "width": "100%", "min-height": "1px", "box-sizing": "border-box" } },
                [
                  m("div", { "style": { "padding-right": "0px", "padding-left": "0px", "padding-bottom": "0px", "padding-top": "0px", "flex": "0 0 auto", "position": "relative", "margin": "0px", "box-sizing": "border-box" } },
                    m("div", { "style": { "max-width": "1200px", "padding-right": "15px", "padding-left": "15px", "margin-left": "auto", "margin-right": "auto", "padding": "0px 15px", "width": "100%", "box-sizing": "border-box" } },
                      m("div", { "style": { "margin-left": "-15px", "margin-right": "-15px", "padding": "0px", "display": "flex", "flex-wrap": "wrap", "box-sizing": "border-box" } },
                        [
                          m("div", { "style": { "flex": "0 0 33.3333%", "max-width": "33.3333%", "padding-right": "15px", "padding-left": "15px", "padding-bottom": "0px", "padding-top": "0px", "position": "relative", "margin": "0px", "padding": "0px 15px", "width": "100%", "min-height": "1px", "box-sizing": "border-box" } },
                          ),
                          m("div", { "style": { "flex": "0 0 33.3333%", "max-width": "33.3333%", "padding-right": "15px", "padding-left": "15px", "padding-bottom": "0px", "padding-top": "0px", "position": "relative", "margin": "0px", "padding": "0px 15px", "width": "100%", "min-height": "1px", "box-sizing": "border-box" } },
                            [
                              m("div", { "style": { "display": "flex", "justify-content": "center", "max-width": "1200px", "margin": "0 auto", "box-sizing": "border-box" } },
                                m("div", { "style": { "flex": "1", "max-width": "400px", "padding": "0px", "margin": "0px", "box-sizing": "border-box" } },
                                  m(ContadorFechas,{Fecha:SeccionesHistoria[3].Fecha1}),
                                ),
                                m("div", { "style": { "flex": "1", "display": "flex", "align-items": "center", "justify-content": "center", "max-width": "100px", "padding": "0px", "margin": "0px", "box-sizing": "border-box" } },
                                  m("div", { "style": { "padding": "0px 1px", "margin": "0px", "box-sizing": "border-box" } },
                                    m("p", { "style": { "text-align": "center", "font-weight": "700", "font-style": "normal", "font-family": "Montserrat, sans-serif", "color": "rgb(0, 0, 0)", "font-size": "56px", "line-height": "67.2px", "letter-spacing": "normal", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                                      "-"
                                    )
                                  )
                                ),
                                m("div", { "style": { "flex": "1", "max-width": "400px", "padding": "0px", "margin": "0px", "box-sizing": "border-box" } },
                                  m(ContadorFechas,{Fecha:SeccionesHistoria[3].Fecha2}),
                                )
                              ),
                              m("div", { "data-widget": "text", "data-preset": "default", "data-spacing": "aama", "data-visible-on": "-", "data-animation": "", "style": { "padding-right": "0px", "padding-left": "0px", "padding-bottom": "40px", "padding-top": "0px", "position": "relative", "margin": "0px", "box-sizing": "border-box" } },
                                m("div", { "style": { "padding": "0px 1px", "margin": "0px", "box-sizing": "border-box" } },
                                  m("p", { "style": { "text-align": "center", "font-weight": "400", "font-style": "normal", "font-family": "'Nexa Rust Script L', sans-serif", "color": "rgb(0, 0, 0)", "font-size": "24px", "line-height": "33.6px", "letter-spacing": "3px", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                                  SeccionesHistoria[3].Titulo
                                  )
                                )
                              )
                            ]
                          ),
                          m("div", { "style": { "flex": "0 0 33.3333%", "max-width": "33.3333%", "padding-right": "15px", "padding-left": "15px", "padding-bottom": "0px", "padding-top": "0px", "position": "relative", "margin": "0px", "padding": "0px 15px", "width": "100%", "min-height": "1px", "box-sizing": "border-box" } },
                          )
                        ]
                      )
                    )
                  ),
                  m("div", { "style": { "display": "flex", "padding-right": "0px", "padding-left": "0px", "padding-bottom": "0px", "padding-top": "0px", "position": "relative", "margin": "0px", "box-sizing": "border-box" } },
                    m("div", { "style": { "max-width": "1400px", "padding-right": "15px", "padding-left": "15px", "padding": "0px 15px", "width": "100%", "box-sizing": "border-box" } },
                      m("div", { "style": { "margin-left": "-15px", "margin-right": "-15px", "padding": "0px", "display": "flex", "flex-wrap": "wrap", "box-sizing": "border-box" } },
                        [
                          m("div", { "style": { "align-item": "center", "flex": window.innerWidth < 768 ? "0 0 100%" : "0 0 33.3333%", "max-width": "100%", "padding-right": "15px", "padding-left": "15px", "padding-bottom": "0px", "padding-top": "0px", "position": "relative", "margin": "0px", "min-height": "1px", "box-sizing": "border-box" } },
                            m("div", { "style": { "padding-right": "0px", "padding-left": "0px", "padding-bottom": "15px", "padding-top": "0px", "font-size": "0px", "position": "relative", "margin": "0px", "box-sizing": "border-box" } },
                              m("img", { "src":SeccionesHistoria[3].Imagen, "style": { "transition": "all 0.3s ease 0s", "width": "100%", "max-width": "100%", "margin": "0px", "padding": "0px", "box-sizing": "border-box", "vertical-align": "middle", "border": "0px none rgb(67, 79, 83)" } })
                            )
                          ),
                          m("div", { "style": { "flex": window.innerWidth < 768 ? "0 0 100%" : "0 0 66.6667%", "max-width": "100%", "padding-right": "15px", "padding-left": "15px", "padding-bottom": "0px", "padding-top": "0px", "position": "relative", "margin": "0px", "padding": "0px 15px", "width": "100%", "min-height": "1px", "box-sizing": "border-box" } },
                            [
                              SeccionesHistoria[3].items.map(item => m(componentesHistoria, item))
                            ]
                          )
                        ]
                      )
                    )
                  )
                ]
              )
            )
          )
        )
      ]
    }
  }

  
  function componentesHistoria() {
    return {
      view: ({ attrs }) => [
        m("div", { "style": { "padding-right": "0px", "padding-left": "0px", "padding-bottom": "30px", "padding-top": "0px", "position": "relative", "box-sizing": "border-box" } },
          m("div", { "style": { "max-width": "800px", "padding-right": "0px", "padding-left": "0px", "margin-left": "auto", "margin-right": "auto", "margin": "0px", "padding": "0px", "width": "100%", "box-sizing": "border-box" } },
            m("div", { "style": { "margin-left": "-15px", "margin-right": "-15px", "padding": "0px", "display": "flex", "flex-wrap": "wrap", "box-sizing": "border-box" } },
              [
                m("div", { "style": { "max-width": "100%", "padding-right": "15px", "padding-left": "15px", "padding-bottom": "0px", "padding-top": "0px", "position": "relative", "margin": "0px", "width": "100%", "min-height": "1px", "box-sizing": "border-box" } },
                  m("div", { "style": { "padding-right": "0px", "padding-left": "0px", "padding-bottom": "0px", "padding-top": "0px", "position": "relative", "margin": "0px", "box-sizing": "border-box" } },
                    m("div", { "style": { "padding": "0px 1px", "margin": "0px", "box-sizing": "border-box" } },
                      m("p", { "style": { "font-weight": "700", "font-style": "normal", "font-family": "Montserrat, sans-serif", "color": "rgb(83, 71, 65)", "font-size": "40px", "line-height": "48px", "letter-spacing": "normal", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                        attrs.Fecha
                      )
                    )
                  )
                ),
                m("div", { "style": { "flex": "0 0 100%", "max-width": "100%", "padding-right": "15px", "padding-left": "15px", "padding-bottom": "0px", "padding-top": "0px", "position": "relative", "margin": "0px", "padding": "0px 15px", "width": "100%", "min-height": "1px", "box-sizing": "border-box" } },
                  m("div", { "style": { "padding-right": "0px", "padding-left": "0px", "padding-bottom": "0px", "padding-top": "0px", "position": "relative", "margin": "0px", "box-sizing": "border-box" } },
                    m("div", { "style": { "padding": "0px 1px", "margin": "0px", "box-sizing": "border-box" } },
                      m("p", { "style": { "font-weight": "400", "font-style": "normal", "font-family": "Poppins, sans-serif", "color": "rgb(24, 35, 51)", "font-size": "16px", "line-height": "22.4px", "letter-spacing": "normal", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                        attrs.Texto,
                        m.trust("&nbsp;"),
                        attrs.Texto2
                      )
                    )
                  )
                )
              ]
            )
          )
        )
      ]
    }
  }

  function ContadorFechas() {
    let contadorIniciado = false; // Variable para controlar si el contador se ha iniciado
    let contador=0

    return {
      oncreate: (vnode) => {
        let Fecha=vnode.attrs.Fecha
        console.log("create")
        // Iniciar el contador solo si no ha sido iniciado previamente
        if (!contadorIniciado) {
          // const contadorElemento = vnode.dom.querySelector('.contador');
          const fechaObjetivo = parseInt(Fecha);
          contador = Math.ceil(fechaObjetivo/2);
          let paso=Math.ceil(fechaObjetivo/200)
  
          const intervalo = setInterval((e) => {
            // contadorElemento.textContent = contador;
            if (contador >= fechaObjetivo) {
              clearInterval(intervalo);
            }
            contador+=paso;
            console.log(contador)
            m.redraw()
          }, 10); // Velocidad de incremento del contador
  
          contadorIniciado = true; // Marcar que el contador se ha iniciado
        }
      },
        view: () =>
            m("div", { "style": { "padding-right": "0px", "padding-left": "0px", "padding-bottom": "15px", "padding-top": "0px", "text-align": "center", "position": "relative", "margin-top": "50px", "box-sizing": "border-box" } },
                m("div", { "style": { "display": "inline-flex", "align-items": "center", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                    m("span", { "style": { "font-weight": "700", "font-style": "normal", "font-family": "Montserrat, sans-serif", "color": "rgb(0, 0, 0)", "font-size": "56px", "line-height": "67.2px", "letter-spacing": "normal", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                        m("span.contador", { "style": { "font-weight": "700", "font-style": "normal", "font-family": "Montserrat, sans-serif", "font-size": "56px", "line-height": "67.2px", "letter-spacing": "normal", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                        contador
                        )
                    )
                )
            )
    }
  }

//-------------SECCIONES DE NOTICIAS---
//------variables globales para controlar eventos(Noticias seleccionadas, tags seleccionados o categorias seleccionadas)---
let idNoticia = 0;
//-------Listas de noticias, tags y categorias para que sean reutilizadas
var Noticia = [
  {
    id: 0,
    Titulo: "Pasos sencillos para reemplazar mosaicos viejos",
    Fecha: "04/04/2024",
    Imagen: "assets/mt-2288-blog-img1.jpg",
    ImagenInferior: "assets/disqus.png",
    Usuario: "Usuario demo",
    Tema: "Consulta de trabajo",
    IdTema: 0,
    IdTema2: 1,
    Parrafos:
      [
        {
          Parrafo: "La capacidad de administrar correctamente el dinero es una cualidad especialmente valiosa en condiciones de crisis financiera, cuando el poder adquisitivo de la población se reduce, la inflación aumenta y los tipos de cambio son completamente impredecibles. A continuación se detallan los errores comunes relacionados con los asuntos monetarios a lo largo de con consejos de planificación financiera para ayudarle a administrar sus propias finanzas adecuadamente.",
        },
        {
          Parrafo: "El presupuesto es lo más básico en la planificación financiera. Por eso es especialmente importante tener cuidado al elaborarlo. Para empezar, tienes que elaborar tu propio presupuesto para el mes siguiente y sólo después podrás hacer un presupuesto anual. ",
        },
        {
          Parrafo: "Como base se toma su ingreso mensual, reste de él los gastos regulares como el costo de la vivienda, el transporte y luego seleccione entre el 20 y el 30% para los ahorros o el pago del préstamo hipotecario",
        },
        {
          Parrafo: "El resto lo puedes gastar en la vida: restaurantes, ocio, etc. Si tienes miedo de gastar demasiado, limítate a los gastos semanales teniendo una cierta cantidad de efectivo disponible",
        },
        {
          Parrafo: "\"Cuando la gente pide prestado, piensa que debería devolverlo lo antes posible\", dijo Sofía Bera, planificadora financiera certificada y fundadora de la empresa Gen Y Planning. Y para pagarlo gasta todo lo que gana. Pero no es del todo racionalmente \".",
        },
        {
          Parrafo: "Si no tienes dinero en un día lluvioso, en caso de una emergencia (por ejemplo, emergencia de reparación del coche) tendrás que pagar con tarjeta de crédito o contraer nuevas deudas. Mantén en cuenta al menos $1000 en caso de gastos inesperados. . Y aumentar gradualmente el \"airbag\" hasta una cantidad igual a sus ingresos durante un máximo de tres a seis meses",
        },
        {
          Parrafo: "\"Por lo general, cuando la gente planea invertir, sólo piensan en las ganancias y no creen que sea posible perder\", dice Harold Evensky, presidente de la empresa de gestión financiera Evensky ",
        },
        {
          Parrafo: " Katz. Dijo que a veces la gente no hace cálculos matemáticos básicos.",
        },
        {
          Parrafo: "Por ejemplo, olvidar que si en un año perdieron el 50%, y al año siguiente recibieron el 50% de las ganancias, no volvieron al punto de partida, y perdieron el 25% de sus ahorros. Por tanto, piensen en las consecuencias. dispuesto a cualquier opción. Y, por supuesto, sería más prudente invertir en varios objetos de inversión diferentes.",
        }
      ],
    EtiquetasInferiores: [
      {
        Titulo: "Desarrollo de negocios",
        Link: "",
        id: 0
      },
      {
        Titulo: "Gestion financiera",
        Link: "",
        id: 1

      }
    ]
  },
  {
    id: 1,
    Titulo: "Cuando tengo un problema con las tuberías.",
    Fecha: "04/04/2024",
    Imagen: "assets/mt-2288-blog-img2.jpg",
    ImagenInferior: "assets/disqus.png",
    Usuario: "Usuario demo",
    Tema: "Consulta de trabajo",
    IdTema: 0,
    IdTema2: 2,
    Parrafos:
      [
        {
          Parrafo: "La búsqueda de personal no es una tarea fácil. Según los jefes departamentales de gestión de personal, para encontrar personal que corresponda a las necesidades y requisitos relevantes del cliente, es necesario realizar un gran trabajo.",
        },
        {
          Parrafo: "Para la búsqueda y selección del personal necesario se utilizan diversos medios del arsenal de la ciencia psicológica: cuestionarios biográficos, entrevistas estandarizadas y no estandarizadas, puestos de trabajo, modelos de trabajo y ejercicios situacionales, pruebas de logros, personalidad, inteligencia y habilidades, pruebas poligráficas. exámenes y mucho más.",
        },
        {
          Parrafo: "Para la búsqueda y selección del personal necesario se utilizan diversos medios del arsenal de la ciencia psicológica: cuestionarios biográficos, entrevistas estandarizadas y no estandarizadas, puestos de trabajo, modelos de trabajo y ejercicios situacionales, pruebas de logros, personalidad, inteligencia y habilidades, pruebas poligráficas. exámenes y mucho más.",
        },
        {
          Parrafo: "No se puede decir que el uso de métodos psicológicos esté absolutamente exento de complicaciones. Aunque muchos años de experiencia en el uso de fondos en un entorno competitivo influyen en detalles como la redacción de contratos de trabajo y la garantía de un paquete de motivación completo.",
        },
        {
          Parrafo: "Existen algunas técnicas psicológicas tomadas del extranjero y su adaptación en la gran mayoría de los casos se ha reducido al mínimo. Como resultado, las prácticas que de alguna manera todavía se pueden utilizar en la búsqueda y selección de personal no cumplen con los requisitos básicos de la psicrometría.",
        },
        {
          Parrafo: "El segundo gran obstáculo para el uso de los diagnósticos psicológicos modernos en la práctica de la selección profesional es el bajo nivel de formación psicológica de los directivos de los poderes adjudicadores y, lamentablemente, de los candidatos que desean conseguir un lugar de trabajo sin mucho esfuerzo. Por tanto, los psicólogos profesionales no son suficientes para gestionar una selección psicológica profesional del personal y resolver otros problemas de la empresa relacionados con la estimación del personal. También se requieren herramientas de evaluación psicológica bien establecidas que cumplan con todos los requisitos necesarios.",
        }
      ],
    EtiquetasInferiores: [
      {
        Titulo: "Desarrollo de negocios",
        Link: "",
        id: 0
      },
      {
        Titulo: "Noticias de negocios",
        Link: "",
        id: 2
      },
      {
        Titulo: "Consejos comerciales",
        Link: "",
        id: 3
      }
    ]
  },
  {
    id: 2,
    Titulo: "Somos un equipo de expertos que le ofrecemos una solución web innovadora.",
    Fecha: "04/04/2024",
    Imagen: "assets/mt-2288-blog-img4.jpg",
    ImagenInferior: "assets/disqus.png",
    Usuario: "Usuario demo",
    Tema: "Marketing",
    IdTema: 2,
    IdTema2: 0,
    Parrafos: [
      {
        Parrafo: "Los monos con el logo de la empresa están relacionados con la economía y la practicidad. La preferencia por el estilo corporativo implica un aumento significativo de los costes de desarrollo de soluciones de diseño, confección personalizada, selección de los materiales necesarios, etc",

      },
      {
        Parrafo: "Los monos hace mucho tiempo que dejaron de cumplir una función exclusivamente utilitaria. A menudo la parte de la imagen juega un papel muy importante.",

      },
      {
        Parrafo: "La elección no despierta el interés de muchos empresarios y por eso la ignoran. Una mejor solución para estos empresarios es colocar el logotipo en la ropa, como sudaderas o en el pedido de camisetas o sudaderas con capucha. Este enfoque también garantiza el reconocimiento de la empresa y la comprensión de los clientes potenciales.",

      },
      {
        Parrafo: "En algunos tipos de acciones btl se utilizan disfraces publicitarios: presentadores publicitarios espectaculares y coloridos que atraen eficazmente la atención. También tiene sentido aplicar el logo en la ropa de la empresa, ya que en estas condiciones, será recordado a un nivel intuitivo y complementará las emociones agradables del evento.",

      },
      {
        Parrafo: "La ropa de trabajo con un logotipo con forma de contorno es bastante popular. Existen algunos métodos para implementar este tipo de logotipo que requieren la posibilidad de imágenes de gran tamaño. La impresión transfer permite diseñar pequeños accesorios: bolsos, gorras, pañuelos, etc.",

      },
      {
        Parrafo: "Es importante entender que el mono y el logo de la empresa son imágenes, la cara de la empresa, es una herramienta para ser recordada por los clientes.",

      }
    ],
    EtiquetasInferiores: [
      {
        Titulo: "Desarrollo de negocios",
        Link: "",
        id: 0
      },
      {
        Titulo: "Noticias de negocios",
        Link: "",
        id: 2
      },
      {
        Titulo: "Comercialización de pequeñas empresas",
        Link: "",
        id: 4
      }
    ]
  },

  {
    id: 3,
    Titulo: "Los errores más comunes a la hora de gestionar las finanzas personales",
    Fecha: "04/04/2024",
    Imagen: "assets/mt-2288-blog-img4.jpg",
    ImagenInferior: "assets/disqus.png",
    Usuario: "Usuario demo",
    Tema: "Noticias",
    IdTema: 3,
    IdTema2: 1,
    Parrafo: [
      {
        Parrafo: "El mercado moderno es absolutamente impredecible. Y, sin embargo, vive según leyes estrictas. Los especialistas en marketing necesitan ser conocidos para lograr los máximos resultados en su negocio; esa es la tarea principal del especialista en marketing.",
      },
      {
        Parrafo: "¿Cálculo frío o intuición? 'Máximos resultados' es un concepto amplio. ¿A qué se enfrentan los especialistas en marketing profesionales?A primera vista, su trabajo parece bastante aburrido. Aprenderán qué cambios ocurren en el mercado global, cuánto creció el presupuesto publicitario de una empresa competidora y cómo afectará esto al desarrollo del negocio.",
      },
      {
        Parrafo: "Por otro lado, cada tarea que resuelven requiere creatividad. Cómo crear productos de marca, cómo dirigir una empresa de publicidad, cómo mejorar el producto, a través de quién organizar y establecer un sistema de distribución eficaz, dónde preparar el camino para una promoción rápida...",
      },
      {
        Parrafo: "El trabajo en el ámbito del marketing es una combinación del sistema y directamente de la naturaleza del hombre. Combina tecnología y arte. Desarrollar estrategias y construir una marca son tecnologías del proceso de contenido. Y el arte está en trabajar con la gente. Requiere talento, imaginación y alma. Después de todo, la atracción de los compradores es la comunicación, el juego, el espectáculo.",
      },
      {
        Parrafo: "El marketing se considera uno de los campos más prometedores. Esto confirma la apertura de nuevas universidades, departamentos y facultades especializadas, donde los profesores y la administración 'harán' genios en el campo de la gestión del mercado.",
      }
    ],
    EtiquetasInferiores: [
      {
        Titulo: "Desarrollo de negocios",
        Link: "",
        id: 0
      },
      {
        Titulo: "Gestion financiera",
        Link: "",
        id: 1
      }
    ]
  },
  {
    id: 4,
    Titulo: "La recesión es una buena oportunidad para asestar un golpe mortal a los competidores",
    Fecha: "04/04/2024",
    Imagen: "assets/mt-2288-blog-img5.jpg",
    ImagenInferior: "assets/disqus.png",
    Usuario: "Usuario demo",
    Tema: "Noticias",
    IdTema: 3,
    IdTema2: 4,
    Parrafos: [
      {
        Parrafo: "Los precios de los medios están cayendo, por lo que la publicidad se vuelve más rentable. La combinación de precios bajos en los medios y una competencia débil brinda a las empresas la oportunidad de hacerse con cuota de mercado a bajo costo.",

      },
      {
        Parrafo: "Luego llegaron tiempos realmente aterradores para los directores de marketing. ¿Cómo responder? ¿Cuál es la estrategia óptima? Existen varias reglas de supervivencia en tiempos de crisis.",

      },
      {
        Parrafo: "No entre en pánico. La mayoría de los especialistas en marketing suponen que durante la crisis los consumidores han recortado drásticamente sus gastos. De hecho, el gasto de los consumidores rara vez cae realmente; simplemente crece más lentamente, no al ritmo de la inflación.",

      },
      {
        Parrafo: "Reduzca los costos correctos. A la derecha están los costes administrativos e incluso la reducción de volúmenes de fabricación. No es posible empezar a ahorrar en la calidad del producto o en su promoción.",

      },
      {
        Parrafo: "La reducción de los costos de publicidad inevitablemente reducirá sus ingresos. Esta es la manera más fácil y rápida de reducir costos, pero el ajuste de cuentas es inevitable. Los estudios han demostrado que las empresas que reducen los costos de publicidad durante una recesión suelen experimentar una disminución del 20 al 30% en las ventas y las ganancias durante los dos años siguientes.",

      },
      {
        Parrafo: "La reducción de los costos publicitarios causa daños a largo plazo. Según los resultados de las investigaciones, la publicidad tiene un efecto duradero en las ventas: se hace evidente hasta cinco años después de la campaña. Recortar los presupuestos publicitarios está perjudicando a los negocios a largo plazo. El análisis PIMS muestra que las empresas que acortan los anuncios necesitan mucho más tiempo para salir de la crisis que el resto (cuando la situación económica empieza a mejorar).", Parrafo7: "",

      }
    ],
    EtiquetasInferiores: [
      {
        Titulo: "Desarrollo de negocios",
        Link: "",
        id: 0
      },
      {
        Titulo: "Consejos comerciales",
        Link: "",
        id: 3
      },
      {
        Titulo: "Comercialización de pequeñas empresas",
        Link: "",
        id: 4
      }
    ]
  },
]
var ListaTags = [
  {
    Titulo: "Desarrollo de negocios",
    Texto: "La capacidad de administrar el dinero de manera competente es una cualidad especialmente valiosa en condiciones de crisis financiera, cuando el poder adquisitivo de la población se reduce, la inflación aumenta y los tipos de cambio son completamente impredecibles. A continuación se detallan los errores comunes relacionados con asuntos monetarios junto con consejos de planificación financiera para ayudarlo a administrar sus propias finanzas adecuadamente.",
    id: 0
  },
  {
    Titulo: "Gestión financiera",
    Texto: "Para la búsqueda y selección del personal necesario se utilizan diversos medios del arsenal de la ciencia psicológica: cuestionarios biográficos, entrevistas estandarizadas y no estandarizadas, puestos de trabajo, modelos de trabajo y ejercicios situacionales, pruebas de logros, personalidad, inteligencia y habilidades, pruebas poligráficas. exámenes y mucho más.",
    id: 1
  },
  {
    Titulo: "Noticias de negocios",
    Texto: "Los monos con el logo de la empresa están relacionados con la economía y la practicidad. La preferencia por el estilo corporativo implica un aumento significativo de los costes de desarrollo de soluciones de diseño, confección personalizada, selección de los materiales necesarios, etc.",
    id: 2
  },
  {
    Titulo: "Consejos comerciales",
    Texto: "El mercado moderno es absolutamente impredecible. Y, sin embargo, vive según leyes estrictas. Los especialistas en marketing necesitan ser conocidos para lograr los máximos resultados en su negocio; esa es la tarea principal del especialista en marketing.",
    id: 3
  },
  {
    Titulo: "Comercialización de pequeñas empresas",
    Texto: "La capacidad de administrar el dinero de manera competente es una cualidad especialmente valiosa en condiciones de crisis financiera, cuando el poder adquisitivo de la población se reduce, la inflación aumenta y los tipos de cambio son completamente impredecibles. A continuación se detallan los errores comunes relacionados con asuntos monetarios junto con consejos de planificación financiera para ayudarlo a administrar sus propias finanzas adecuadamente.",
    id: 4
  }
]
var ListaCategorias = [
  {
    Titulo: "Consulta de trabajo",
    Link: "#",
    id: 0
  },
  {
    Titulo: "Gestión financiera",
    Link: "#",
    id: 1
  },
  {
    Titulo: "Marketing",
    Link: "#",
    id: 2
  },
  {
    Titulo: "Noticias",
    Link: "#",
    id: 3
  },
  {
    Titulo: "Pequeños negocios",
    Link: "#",
    id: 4
  }
]
function Blog() {
  let pagina = 1;//determina para el paginador de los Blogs sin barra lateral cual es la pagina que se está visualizando por tanto que noticias debe cargar.
  let CategoriaSeleccionada = 0;
  let TagSeleccionado = 0;
  let modo = 1;
  return {
    view: () => [
      m(Menu),
      m(Heros,{texto:"Blog"}),
      m("div", { "style": { "display": "flex", "justify-content": "center", "padding-right": "15px", "padding-left": "15px" } },
        m("div", { "style": { "margin-top": "60px", "max-width": "1200px", "padding-right": "15px", "padding-left": "15px", "padding": "0px 15px", "box-sizing": "border-box" } },
          modo === 1 ? 
          m("div", { "data-visible-on": "-", "style": { "flex": "0 0 auto", "position": "relative", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
            m("div", { "style": { "max-width": "1200px", "padding-right": "15px", "padding-left": "15px", "margin-left": "auto", "margin-right": "auto", "padding": "0px 15px", "width": "100%", "box-sizing": "border-box" } },
              m("div", { "style": { "margin-left": "-15px", "margin-right": "-15px", "padding": "0px", "display": "flex", "flex-wrap": "wrap", "box-sizing": "border-box" } },
                [
                  m("div", { "style": { "flex": "0 0 16.6667%", "max-width": "16.6667%", "padding-right": "15px", "padding-left": "15px", "position": "relative", "margin": "0px", "padding": "0px 15px", "width": "100%", "min-height": "1px", "box-sizing": "border-box" } },
                  ),
                  m("div", { "style": { "flex": "0 0 66.6667%", "max-width": "66.6667%", "padding-right": "15px", "padding-left": "15px", "position": "relative", "margin": "0px", "padding": "0px 15px", "width": "100%", "min-height": "1px", "box-sizing": "border-box" } },
                    m("div", { "data-widget-id": "wid__blog_post_list__61e01f72e7ca0", "data-widget": "blog.post_list", "style": { "padding-right": "0px", "padding-left": "0px", "padding-bottom": "0px", "padding-top": "0px", "position": "relative", "margin": "0px", "box-sizing": "border-box" } },
                      [
                        m("ul", { "style": { "list-style-type": "none", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                          [
                            m("ul", { "style": { "list-style-type": "none", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                              [
                                pagina === 1 
                                ? Noticia.slice(0, 3).map(item => m(NoticiasBlog, item)) 
                                : pagina === 2 
                                ? Noticia.slice(3, 5).map(item => m(NoticiasBlog, item)) 
                                : null
                              ]
                            ),
                            m("div", {"style": { "padding-bottom": "15px", "padding-top": "15px", "font-family": "Poppins, sans-serif", "font-style": "normal", "font-weight": "500", "font-size": "14px", "text-align": "left", "position": "relative", "margin": "0px", "box-sizing": "border-box" }
                            },
                            m(Paginador)
                            )
                        ]
                      )
                    ]
                  )
                )
              ]
            )
          )
        )
        :
        [m("div", { "style": { "display": "flex", "flexWrap": "wrap", "max-width": "1200px", "padding-right": "15px", "padding-left": "15px", "padding": "0px 15px", "box-sizing": "border-box" } },
              m("div", { "style": { "flex": window.innerWidth < 900 ? "0 0 75%" : "0 0 75%", "max-width": window.innerWidth < 900 ? "75%" : "75%", "padding-bottom": "0px", "padding-top": "0px", "position": "relative", "margin": "0px", "min-height": "1px", "box-sizing": "border-box" } },
                [
                  modo === 2 ? //Al ingresar a una de las noticias se cargará la NoticiasDetalles y la barra lateral. 
                  [  
                  m(NoticiasDetalles, Noticia[idNoticia])
                  ] 
                  : modo === 3 ? //Carga las noticias segun su categoria.
                  [  
                  m(tituloYTexto, ListaCategorias[CategoriaSeleccionada]),//cargan el titulo y descripcion.
                    Noticia.filter(noticia => noticia.IdTema === CategoriaSeleccionada || noticia.IdTema2 === CategoriaSeleccionada).slice(0, -1).map(noticia => m(NoticiasBlog, noticia)),//Carga todas las noticias en este formato excepto la ultima
                    Noticia.filter(noticia => noticia.IdTema === CategoriaSeleccionada || noticia.IdTema2 === CategoriaSeleccionada).slice(-1).map(noticia => m(NoticiasDetalles, noticia))//Carga la ultima noticia en formato Noticias Detalles
                  ]
                    : modo === 4 ? //Carga las noticias segun su Tag
                   [
                    m(tituloYTexto, ListaTags[TagSeleccionado]),//Cargan el titulo y la descripcion
                    Noticia.filter(noticia => noticia.EtiquetasInferiores.some(tag => tag.id === TagSeleccionado)).slice(0, -1).map(noticia => m(NoticiasBlog, noticia)),//El filtro carga todas las noticias en este formato excepto la ultima
                    Noticia.filter(noticia => noticia.EtiquetasInferiores.some(tag => tag.id === TagSeleccionado)).slice(-1).map(noticia => m(NoticiasDetalles, noticia))//En esta seccion se filtra la ultima noticia y se la carga en formato Noticias Detalles. 
                   ]
                   :null
                ]
              ), modo !== 1 && m(BarraLateral) //La barra lateral se carga solo en aquellos modos que sean diferentes al modo 1, el de SeccionBlog.
            )
          ]
        ),
      ), m(Footer)
    ]
  }
  function BarraLateral() {
    return {
      model: {
        TituloCategorias: "CATEGORIAS",
        TituloTags: "TAGS",
        TituloRecientes: "POST RECIENTES",
      },
      view: () => m("div", { "style": { "padding-bottom": "0px", "padding-top": "0px", "position": "relative", "margin": "0px", "min-height": "1px", "box-sizing": "border-box", "flex": window.innerWidth <= 900 ? "0 0 50%" : "0 0 25%", "max-width": window.innerWidth < 900 ? "50%" : "25%" } },
        m("div", { "style": { "padding-right": "0px", "padding-left": "0px", "padding-bottom": "15px", "padding-top": "0px", "position": "relative", "margin": "0px", "box-sizing": "border-box" } },
          m("div", { "style": { "padding": "0px 1px", "margin": "0px", "box-sizing": "border-box" } },
            m("p", { "style": { "font-weight": "400", "font-style": "normal", "font-family": "Montserrat, sans-serif", "color": "rgb(255, 255, 255)", "font-size": "24px", "line-height": "36px", "letter-spacing": "normal", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
              m("span", { "style": { "color": "rgb(0, 0, 0)", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                this.state.model.TituloCategorias
              )
            )
          ),
          ListaCategorias.map(item => m(Categoria, item)),
          m("div", { "style": { "padding": "0px 1px", "margin": "0px", "box-sizing": "border-box" } },
            m("p", { "style": { "font-weight": "400", "font-style": "normal", "font-family": "Montserrat, sans-serif", "color": "rgb(255, 255, 255)", "font-size": "24px", "line-height": "36px", "letter-spacing": "normal", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
              m("span", { "style": { "color": "rgb(0, 0, 0)", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                this.state.model.TituloTags
              )
            )
          ),
          ListaTags.map(item => m(Tag, item)),
          m("div", { "style": { "padding": "0px 1px", "margin": "0px", "box-sizing": "border-box" } },
            m("p", { "style": { "font-weight": "400", "font-style": "normal", "font-family": "Montserrat, sans-serif", "color": "rgb(255, 255, 255)", "font-size": "24px", "line-height": "36px", "letter-spacing": "normal", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
              m("span", { "style": { "color": "rgb(0, 0, 0)", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                this.state.model.TituloRecientes
              )
            )
          ),
          m("div", { "style": { "padding-right": "0px", "padding-left": "0px", "padding-bottom": "0px", "padding-top": "0px", "position": "relative", "margin": "0px", "box-sizing": "border-box" } },
            m("div", { "style": { "position": "relative", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
              m("div", { "style": { "max-width": "1200px", "padding-right": "0px", "padding-left": "0px", "margin-left": "auto", "margin-right": "auto", "margin": "0px", "padding": "0px", "width": "100%", "box-sizing": "border-box" } },
                m("div", { "style": { "margin-left": "-15px", "margin-right": "-15px", "list-style-type": "none", "padding": "0px", "display": "flex", "flex-wrap": "wrap", "box-sizing": "border-box" } },
                  [
                    Noticia.slice(0, 3).map(item => m(PostRecientes, item))
                  ]
                )
              )
            )
          )
        )
      )
    }

    function Categoria() {
      return {
        view: ({ attrs }) => [
          m("li", { "style": { "padding-bottom": "6px", "border-bottom": "1px solid rgba(0, 0, 0, 0)", "margin-bottom": "6px", "list-style": "outside none none", "margin": "0px 0px 6px", "box-sizing": "border-box" } },
            m("a", { "href": "#!/Blog", onclick: () => { CategoriaSeleccionada = attrs.id; modo = 3 }, "style": { "font-family": "Montserrat, sans-serif", "font-style": "normal", "font-weight": "500", "font-size": "16px", "color": "rgb(24, 35, 51)", "display": "flex", "align-items": "center", "text-decoration": "none solid rgb(24, 35, 51)", "justify-content": "flex-start", "margin": "0px", "padding": "0px", "box-sizing": "border-box", "background-color": "rgba(0, 0, 0, 0)" } },
              m("span", { "style": { "font-size": "16px", "text-decoration": "none solid rgb(24, 35, 51)", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                attrs.Titulo
              )
            )
          ),
        ]
      }
    }

    function Tag() {
      return {
        view: ({ attrs }) => m("li", {
          "style": "max-width:500px;margin-right: 7px; margin-bottom: 7px; padding: 0px; box-sizing: border-box; background-color: black; list-style:outside none none;color: white;",
          "onmouseenter": (event) => {
            event.currentTarget.style.backgroundColor = "white";
            event.currentTarget.style.color = "black";
            event.currentTarget.style.border = "1px solid black";
          },
          "onmouseleave": (event) => {
            event.currentTarget.style.backgroundColor = "black";
            event.currentTarget.style.color = "white";
            event.currentTarget.style.border = "none";
          }
        },
          m("a", {
            "href": "#!/Blog",
            onclick: () => { TagSeleccionado = attrs.id; modo = 4 },
            "style": "font-family: Poppins, sans-serif; font-style: normal; font-weight: 400; font-size: 14px; padding: 8px 14px; border-style: solid; border-width: 1px; border-radius: 0px; text-decoration: none; color: inherit; background-color: transparent; border-color: rgba(0, 0, 0, 0); display: block; transition: all 0.2s ease 0s; margin: 0px; box-sizing: border-box;"
          },
            m("span", {
              "style": "margin: 0px; padding: 0px; box-sizing: border-box;"
            },
              attrs.Titulo
            )
          )
        )
      };
    }
    
    function PostRecientes() {
      return {
        view: ({ attrs }) => [m("div", { "style": { "padding-right": "15px", "padding-left": "15px", "margin": "0px", "padding": "0px 15px", "position": "relative", "min-height": "1px", "box-sizing": "border-box" } },
          m("div", { "style": { "padding-right": "0px", "padding-left": "0px", "padding-bottom": "0px", "padding-top": "15px", "margin": "0px", "box-sizing": "border-box" } },
            [
              m("div", { "style": { "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                m("div", { "style": { "padding-right": "0px", "padding-left": "0px", "padding-bottom": "15px", "padding-top": "0px", "font-size": "0px", "flex": "0 0 auto", "text-align": "left", "position": "relative", "margin": "0px", "box-sizing": "border-box" } },
                  m("a", { "href": "#!/Blog", onclick: () => { idNoticia = attrs.id; modo = 2 }, "data-action": "url", "style": { "position": "relative", "overflow": "hidden", "transition": "all 0.3s ease 0s", "display": "inline-block", "max-width": "100%", "text-decoration": "none solid rgb(51, 122, 183)", "color": "rgb(51, 122, 183)", "margin": "0px", "padding": "0px", "box-sizing": "border-box", "background-color": "rgba(0, 0, 0, 0)" } },
                    m("img.img-fluid", { "src": attrs.Imagen, "data-id": "", "title": "", "alt": "", "style": { "transition": "all 0.3s ease 0s", "width": "100%", "max-width": "100%", "height": "auto", "margin": "0px", "padding": "0px", "box-sizing": "border-box", "vertical-align": "middle", "border": "0px none rgb(51, 122, 183)" } })
                  )
                )
              ),
              m("div", { "style": { "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                m("div", { "style": { "padding-right": "0px", "padding-left": "0px", "padding-bottom": "15px", "padding-top": "0px", "text-align": "left", "position": "relative", "margin": "0px", "box-sizing": "border-box" } },
                  m("div", { "style": { "padding": "0px 1px", "margin": "0px", "box-sizing": "border-box" } },
                    m("h2", { "style": { "margin": "0px", "font-weight": "400", "font-style": "normal", "font-family": "Poppins, sans-serif", "color": "rgb(24, 35, 51)", "font-size": "16px", "line-height": "22.4px", "letter-spacing": "normal", "padding": "0px", "box-sizing": "border-box" } },
                      m("a", { "href": "#!/Blog", onclick: () => { idNoticia = attrs.id; modo = 2 }, "style": { "color": "rgb(24, 35, 51)", "text-decoration": "none solid rgb(24, 35, 51)", "font-weight": "400", "font-style": "normal", "transition": "all 0.3s ease 0s", "margin": "0px", "padding": "0px", "box-sizing": "border-box", "background-color": "rgba(0, 0, 0, 0)" } },
                        attrs.Titulo
                      )
                    )
                  )
                )
              )
            ]
          )
        ),]
      }
    }
  }

  function tituloYTexto() {//Funcion para cargar el Titulo y el Texto de la categoria o tag seleccionado.
      return {
        view: ({ attrs }) => [
                m("div", { "style": { "padding-right": "0px", "padding-left": "0px", "padding-bottom": "0px", "padding-top": "0px", "position": "relative", "margin": "0px", "box-sizing": "border-box" } },
                  m("h1", { "style": { "margin": "0px", "font-weight": "500", "font-style": "normal", "font-family": "Montserrat, sans-serif", "color": "rgb(51, 51, 51)", "font-size": "38px", "line-height": "49.4px", "letter-spacing": "normal", "padding": "0px", "box-sizing": "border-box" } },
                    attrs.Titulo
                  )
                ),
          m("div", { "style": { "padding-right": "0px", "padding-left": "0px", "padding-bottom": "15px", "padding-top": "15px", "position": "relative", "margin": "0px", "box-sizing": "border-box" } },
            m("div", { "style": { "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
              m("div", { "style": { "padding": "0px 1px", "margin": "0px", "box-sizing": "border-box" } },
                m("p", { "style": { "font-weight": "400", "font-style": "normal", "font-family": "Poppins, sans-serif", "color": "rgb(24, 35, 51)", "font-size": "16px", "line-height": "22.4px", "letter-spacing": "normal", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                  attrs.Texto
                )
              )
            )
          )
        ]
      }
    }
  function Paginador() {
    return {
      view:()=>[
        pagina === 1?
        m("div", {"style": { "padding-bottom": "15px", "padding-top": "15px", "font-family": "Poppins, sans-serif", "font-style": "normal", "font-weight": "500", "font-size": "14px", "text-align": "left", "position": "relative", "margin": "0px", "box-sizing": "border-box" } },
        [
          m("ul", { "style": { "list-style": "outside none none", "display": "inline-flex", "cursor": "default", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
            [
              m("li", { "style": { "margin-right": "5px", "line-height": "0px", "text-align": "center", "padding": "0px", "box-sizing": "border-box" } },
                m("span", { "style": { "font-style": "normal", "font-weight": "500", "color": "rgb(128, 128, 128)", "border-color": "rgba(0, 0, 0, 0)", "text-decoration": "none solid rgb(128, 128, 128)", "background-color": "rgba(0, 0, 0, 0)", "border-width": "1px", "border-radius": "0%", "border-style": "solid", "width": "31px", "height": "31px", "padding": "0px 10.5px", "display": "table", "margin": "0px", "box-sizing": "border-box" } },
                  m("span", { "style": { "display": "table-cell", "vertical-align": "middle", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                    "1"
                  )
                )
              ),
              m("li", { "style": { "margin-right": "0px", "line-height": "0px", "text-align": "center", "padding": "0px", "box-sizing": "border-box" } },
                m("a", { "href": "#!/Blog", onclick: () => { pagina = 2; modo = 1; }, "style": { "color": "rgb(128, 128, 128)", "background-color": "rgba(0, 0, 0, 0)", "border-color": "rgba(0, 0, 0, 0)", "border-width": "1px", "border-radius": "0%", "border-style": "solid", "text-decoration": "none solid rgb(128, 128, 128)", "width": "31px", "height": "31px", "padding": "0px 10.5px", "display": "table", "cursor": "pointer", "margin": "0px", "box-sizing": "border-box" } },
                  m("span", { "style": { "display": "table-cell", "vertical-align": "middle", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                    "2"
                  )
                )
              ),
              m("li", { "style": { "margin-right": "5px", "line-height": "0px", "text-align": "center", "padding": "0px", "box-sizing": "border-box" } },
                m("a", { "href": "#!/Blog", onclick: () => { pagina = 1; modo = 1; }, "style": { "color": "rgb(128, 128, 128)", "background-color": "rgba(0, 0, 0, 0)", "border-color": "rgba(0, 0, 0, 0)", "border-width": "1px", "border-radius": "0%", "border-style": "solid", "text-decoration": "none solid rgb(128, 128, 128)", "width": "31px", "height": "31px", "padding": "0px 10.5px", "display": "table", "cursor": "pointer", "margin": "0px", "box-sizing": "border-box" } },
                  m("i", { "style": { "font-size": "19.88px", "line-height": "0px", "height": "29px", "padding-top": "0.77532px", "display": "table-cell", "vertical-align": "middle", "margin": "0px", "padding": "0.77532px 0px 0px", "box-sizing": "border-box", "font-style": "normal", "font-variant": "normal", "font-kerning": "auto", "font-optical-sizing": "auto", "font-feature-settings": "normal", "font-variation-settings": "normal", "font-weight": "400", "font-stretch": "100%", "font-family": "FontAwesome", "text-rendering": "auto", "-webkit-font-smoothing": "antialiased" } },
                    m("svg", { "class": "icon icon-tabler icon-tabler-arrows-left", "xmlns": "http://www.w3.org/2000/svg", "width": "20", "height": "20", "viewBox": "0 0 24 24", "stroke-width": "1.5", "stroke": "#597e8d", "fill": "none", "stroke-linecap": "round", "stroke-linejoin": "round","transform": "rotate(180)" },
                      [
                        m("path", { "stroke": "none", "d": "M0 0h24v24H0z", "fill": "none" }),
                        m("path", { "d": "M3 7l18 0" }),
                        m("path", { "d": "M6 20l-3 -3l3 -3" }),
                        m("path", { "d": "M6 4l-3 3l3 3" }),
                        m("path", { "d": "M3 17l18 0" })
                      ]
                    )
                  )
                )
              ),
              m("li", { "style": { "margin-right": "5px", "line-height": "0px", "text-align": "center", "padding": "0px", "box-sizing": "border-box" } },
                m("a", { "href": "#!/Blog", onclick: () => { pagina = 1; modo = 1; }, "style": { "color": "rgb(128, 128, 128)", "background-color": "rgba(0, 0, 0, 0)", "border-color": "rgba(0, 0, 0, 0)", "border-width": "1px", "border-radius": "0%", "border-style": "solid", "text-decoration": "none solid rgb(128, 128, 128)", "width": "31px", "height": "31px", "padding": "0px 10.5px", "display": "table", "cursor": "pointer", "margin": "0px", "box-sizing": "border-box" } },
                  m("i", { "style": { "font-size": "19.88px", "line-height": "0px", "height": "29px", "padding-top": "0.77532px", "display": "table-cell", "vertical-align": "middle", "margin": "0px", "padding": "0.77532px 0px 0px", "box-sizing": "border-box", "font-style": "normal", "font-variant": "normal", "font-kerning": "auto", "font-optical-sizing": "auto", "font-feature-settings": "normal", "font-variation-settings": "normal", "font-weight": "400", "font-stretch": "100%", "font-family": "FontAwesome", "text-rendering": "auto", "-webkit-font-smoothing": "antialiased" } },
                    m("svg", { "class": "icon icon-tabler icon-tabler-arrow-right", "xmlns": "http://www.w3.org/2000/svg", "width": "19.88px", "height": "19.88px", "viewBox": "0 0 24 24", "stroke-width": "1.5", "stroke": "#9e9e9e", "fill": "none", "stroke-linecap": "round", "stroke-linejoin": "round"},
                      [
                        m("path", { "stroke": "none", "d": "M0 0h24v24H0z", "fill": "none" }),
                        m("path", { "d": "M5 12l14 0" }),
                        m("path", { "d": "M13 18l6 -6" }),
                        m("path", { "d": "M13 6l6 6" })
                      ]
                    )
                  )

                )
              ),
            ]
          )
        ])
        : pagina === 2 ?
        m("div", { "style": { "padding-bottom": "15px", "padding-top": "15px", "font-family": "Poppins, sans-serif", "font-style": "normal", "font-weight": "500", "font-size": "14px", "text-align": "left", "position": "relative", "margin": "0px", "box-sizing": "border-box" } },
        [
          m("ul", { "style": { "list-style": "outside none none", "display": "inline-flex", "cursor": "default", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
            [
              m("li", { "style": { "margin-right": "5px", "line-height": "0px", "text-align": "center", "padding": "0px", "box-sizing": "border-box" } },
                m("a", { "href": "#!/Blog", onclick: () => { pagina = 1; modo = 1; }, "style": { "color": "rgb(128, 128, 128)", "background-color": "rgba(0, 0, 0, 0)", "border-color": "rgba(0, 0, 0, 0)", "border-width": "1px", "border-radius": "0%", "border-style": "solid", "text-decoration": "none solid rgb(128, 128, 128)", "width": "31px", "height": "31px", "padding": "0px 10.5px", "display": "table", "cursor": "pointer", "margin": "0px", "box-sizing": "border-box" } },
                  m("i", { "style": { "font-size": "19.88px", "line-height": "0px", "height": "29px", "padding-top": "0.77532px", "display": "table-cell", "vertical-align": "middle", "margin": "0px", "padding": "0.77532px 0px 0px", "box-sizing": "border-box", "font-style": "normal", "font-variant": "normal", "font-kerning": "auto", "font-optical-sizing": "auto", "font-feature-settings": "normal", "font-variation-settings": "normal", "font-weight": "400", "font-stretch": "100%", "font-family": "FontAwesome", "text-rendering": "auto", "-webkit-font-smoothing": "antialiased" } },
                    m("svg", { "class": "icon icon-tabler icon-tabler-arrows-left", "xmlns": "http://www.w3.org/2000/svg", "width": "20", "height": "20", "viewBox": "0 0 24 24", "stroke-width": "1.5", "stroke": "#597e8d", "fill": "none", "stroke-linecap": "round", "stroke-linejoin": "round" },
                      [
                        m("path", { "stroke": "none", "d": "M0 0h24v24H0z", "fill": "none" }),
                        m("path", { "d": "M3 7l18 0" }),
                        m("path", { "d": "M6 20l-3 -3l3 -3" }),
                        m("path", { "d": "M6 4l-3 3l3 3" }),
                        m("path", { "d": "M3 17l18 0" })
                      ]
                    )
                  )
                )
              ),
              m("li", { "style": { "margin-right": "5px", "line-height": "0px", "text-align": "center", "padding": "0px", "box-sizing": "border-box" } },
                m("a", { "href": "#!/Blog", onclick: () => { pagina = 1; modo = 1; }, "style": { "color": "rgb(128, 128, 128)", "background-color": "rgba(0, 0, 0, 0)", "border-color": "rgba(0, 0, 0, 0)", "border-width": "1px", "border-radius": "0%", "border-style": "solid", "text-decoration": "none solid rgb(128, 128, 128)", "width": "31px", "height": "31px", "padding": "0px 10.5px", "display": "table", "cursor": "pointer", "margin": "0px", "box-sizing": "border-box" } },
                  m("i", { "style": { "font-size": "19.88px", "line-height": "0px", "height": "29px", "padding-top": "0.77532px", "display": "table-cell", "vertical-align": "middle", "margin": "0px", "padding": "0.77532px 0px 0px", "box-sizing": "border-box", "font-style": "normal", "font-variant": "normal", "font-kerning": "auto", "font-optical-sizing": "auto", "font-feature-settings": "normal", "font-variation-settings": "normal", "font-weight": "400", "font-stretch": "100%", "font-family": "FontAwesome", "text-rendering": "auto", "-webkit-font-smoothing": "antialiased" } },
                    m("svg", { "class": "icon icon-tabler icon-tabler-arrow-right", "xmlns": "http://www.w3.org/2000/svg", "width": "19.88px", "height": "19.88px", "viewBox": "0 0 24 24", "stroke-width": "1.5", "stroke": "#9e9e9e", "fill": "none", "stroke-linecap": "round", "stroke-linejoin": "round", "transform": "rotate(180)" },
                      [
                        m("path", { "stroke": "none", "d": "M0 0h24v24H0z", "fill": "none" }),
                        m("path", { "d": "M5 12l14 0" }),
                        m("path", { "d": "M13 18l6 -6" }),
                        m("path", { "d": "M13 6l6 6" })
                      ]
                    )
                  )

                )
              ),
              m("li", { "style": { "margin-right": "5px", "line-height": "0px", "text-align": "center", "padding": "0px", "box-sizing": "border-box" } },
                m("a", { "href": "#!/Blog", onclick: () => { pagina = 1; modo = 1; }, "style": { "color": "rgb(128, 128, 128)", "background-color": "rgba(0, 0, 0, 0)", "border-color": "rgba(0, 0, 0, 0)", "border-width": "1px", "border-radius": "0%", "border-style": "solid", "text-decoration": "none solid rgb(128, 128, 128)", "width": "31px", "height": "31px", "padding": "0px 10.5px", "display": "table", "cursor": "pointer", "margin": "0px", "box-sizing": "border-box" } },
                  m("span", { "style": { "display": "table-cell", "vertical-align": "middle", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                    "1"
                  )
                )
              ),
              m("li", { "style": { "margin-right": "0px", "line-height": "0px", "text-align": "center", "padding": "0px", "box-sizing": "border-box" } },
                m("span", { "style": { "font-style": "normal", "font-weight": "500", "color": "rgb(128, 128, 128)", "border-color": "rgba(0, 0, 0, 0)", "text-decoration": "none solid rgb(128, 128, 128)", "background-color": "rgba(0, 0, 0, 0)", "border-width": "1px", "border-radius": "0%", "border-style": "solid", "width": "31px", "height": "31px", "padding": "0px 10.5px", "display": "table", "margin": "0px", "box-sizing": "border-box" } },
                  m("span", { "style": { "display": "table-cell", "vertical-align": "middle", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                    "2"
                  )
                )
              )
            ]
          )
        ]
      ) 
    :null
    ]
    }
  }
  //Carga noticias de blog
  function NoticiasBlog() { //Formato de Noticias: Carga: Titulo, Imagen, Fecha, Primer Parrafo.
    return {
      view: ({ attrs }) => [
        m("li", { "style": { "margin": "0px", "padding": "0px", "box-sizing": "border-box","list-style-type": "none"} },
          m("article", { "style": { "margin": "0px", "padding": "0px", "box-sizing": "border-box", "display": "block" } },
            m("div", { "style": { "max-width": "1200px", "padding-right": "0px", "padding-left": "0px", "margin-left": "auto", "margin-right": "auto", "margin": "0px", "padding": "0px", "width": "100%", "box-sizing": "border-box" } },
              m("div", { "style": { "margin-left": "-15px", "margin-right": "-15px", "padding": "0px", "display": "flex", "flex-wrap": "wrap", "box-sizing": "border-box" } },
              m("div", { "style": { "flex": window.innerWidth < 900 ? "0 0 100%" : "0 0 90%", "max-width": window.innerWidth < 900 ? "100%" : "90%", "padding-bottom": "0px", "padding-top": "0px", "position": "relative", "margin": "0px", "min-height": "1px", "box-sizing": "border-box" } },
              [
                    m("div", { "style": { "padding-right": "0px", "padding-left": "0px", "padding-bottom": "15px", "padding-top": "0px", "text-align": "left", "position": "relative", "margin": "0px", "box-sizing": "border-box" } },
                      m("div", { "style": { "padding": "0px 1px", "margin": "0px", "box-sizing": "border-box" } },
                        m("h2", { "style": { "margin": "0px", "font-weight": "500", "font-style": "normal", "font-family": "Montserrat, sans-serif", "color": "rgb(51, 51, 51)", "font-size": "38px", "line-height": "49.4px", "letter-spacing": "normal", "padding": "0px", "box-sizing": "border-box" } },
                          m("a", { "href": "#!/Blog", onclick: () => { idNoticia = attrs.id; modo = 2 }, "style": { "color": "rgb(51, 51, 51)", "text-decoration": "none solid rgb(51, 51, 51)", "font-weight": "500", "font-style": "normal", "transition": "all 0.3s ease 0s", "margin": "0px", "padding": "0px", "box-sizing": "border-box", "background-color": "rgba(0, 0, 0, 0)" } },
                            attrs.Titulo
                          )
                        )
                      )
                    ),
                    m("div", { "style": { "flex": "0 0 auto", "position": "relative", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                      m("div", { "style": { "max-width": "1200px", "padding-right": "0px", "padding-left": "0px", "margin-left": "auto", "margin-right": "auto", "margin": "0px", "padding": "0px", "width": "100%", "box-sizing": "border-box" } },
                        m("div", { "style": { "margin-left": "-15px", "margin-right": "-15px", "padding": "0px", "display": "flex", "flex-wrap": "wrap", "box-sizing": "border-box" } },
                          m("div", { "style": { "flex-basis": "0px", "flex-grow": "1", "max-width": "100%", "padding-right": "15px", "padding-left": "15px", "margin": "0px", "padding": "0px 15px", "position": "relative", "width": "100%", "min-height": "1px", "box-sizing": "border-box" } },
                            m("div", { "style": { "padding-right": "0px", "padding-left": "0px", "padding-bottom": "15px", "padding-top": "0px", "text-align": "left", "position": "relative", "margin": "0px", "box-sizing": "border-box" } },
                              m("div", { "style": { "font-weight": "400", "font-style": "normal", "font-family": "'Nexa Rust Script L', sans-serif", "color": "rgb(152, 152, 152)", "font-size": "24px", "line-height": "36px", "letter-spacing": "3px", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                                [
                                  m("svg", { "class": "icon icon-tabler icon-tabler-calendar-month", "xmlns": "http://www.w3.org/2000/svg", "width": "32", "height": "32", "viewBox": "0 0 24 24", "stroke-width": "1.5", "stroke": "#000000", "fill": "none", "stroke-linecap": "round", "stroke-linejoin": "round", "margin-top": "-15px" },
                                    [
                                      m("path", { "stroke": "none", "d": "M0 0h24v24H0z", "fill": "none" }),
                                      m("path", { "d": "M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z" }),
                                      m("path", { "d": "M16 3v4" }),
                                      m("path", { "d": "M8 3v4" }),
                                      m("path", { "d": "M4 11h16" }),
                                      m("path", { "d": "M7 14h.013" }),
                                      m("path", { "d": "M10.01 14h.005" }),
                                      m("path", { "d": "M13.01 14h.005" }),
                                      m("path", { "d": "M16.015 14h.005" }),
                                      m("path", { "d": "M13.015 17h.005" }),
                                      m("path", { "d": "M7.01 17h.005" }),
                                      m("path", { "d": "M10.01 17h.005" })
                                    ]
                                  ),
                                  m("span", { "style": { "margin-right": "5px", "padding": "0px", "box-sizing": "border-box", "display": "inline-block", "font-style": "normal", "font-variant": "normal", "font-kerning": "auto", "font-optical-sizing": "auto", "font-feature-settings": "normal", "font-variation-settings": "normal", "font-weight": "400", "font-stretch": "100%", "line-height": "24px", "font-family": "FontAwesome", "font-size": "24px", "text-rendering": "auto", "-webkit-font-smoothing": "antialiased" } }),
                                  m("span", { "style": { "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },

                                    attrs.Fecha
                                  )
                                ]
                              )
                            )
                          )
                        )
                      )
                    ),
                    m("div", { "style": { "padding-right": "0px", "padding-left": "0px", "padding-bottom": "15px", "padding-top": "0px", "font-size": "0px", "flex": "0 0 auto", "position": "relative", "margin": "0px", "box-sizing": "border-box" } },
                      m("a", { "href": "#!/Blog", onclick: () => { idNoticia = attrs.id; modo = 2 }, "style": { "position": "relative", "overflow": "hidden", "transition": "all 0.3s ease 0s", "display": "inline-block", "max-width": "100%", "text-decoration": "none solid rgb(51, 122, 183)", "color": "rgb(51, 122, 183)", "margin": "0px", "padding": "0px", "box-sizing": "border-box", "background-color": "rgba(0, 0, 0, 0)" } },
                        m("img", { "src": attrs.Imagen, "style": { "transition": "all 0.3s ease 0s", "width": "100%", "max-width": "100%", "height": "auto", "margin": "0px", "padding": "0px", "box-sizing": "border-box", "vertical-align": "middle", "border": "0px none rgb(51, 122, 183)" } })
                      )
                    ),
                    m("div", { "style": { "padding-right": "0px", "padding-left": "0px", "padding-bottom": "15px", "padding-top": "0px", "margin": "0px", "box-sizing": "border-box" } },
                      m("p", {
                        "style": {
                          "font-weight": "400",
                          "font-style": "normal",
                          "font-family": "Poppins, sans-serif",
                          "color": "rgb(24, 35, 51)",
                          "font-size": "16px",
                          "line-height": "22.4px",
                          "letter-spacing": "normal",
                          "margin": "0px",
                          "padding": "0px",
                          "box-sizing": "border-box"
                        }
                      }, attrs.Parrafos?.[0].Parrafo)
                    ),
                    m("div", { "data-divider-type": "horizontal", "style": { "padding-right": "0px", "padding-left": "0px", "padding-bottom": "15px", "padding-top": "15px", "font-size": "0px", "text-align": "center", "position": "relative", "margin": "0px", "box-sizing": "border-box" } },
                      m("hr", { "style": { "border-top": "1px solid rgba(0, 0, 0, 0)", "margin": "0px", "display": "inline-block", "width": "100%", "padding": "0px", "box-sizing": "content-box", "margin-top": "0px", "margin-bottom": "0px", "border-width": "1px 0px 0px", "border-right-style": "none", "border-bottom-style": "none", "border-left-style": "none", "border-right-color": "rgb(67, 79, 83)", "border-bottom-color": "rgb(67, 79, 83)", "border-left-color": "rgb(67, 79, 83)", "border-image": "none", "border-top-style": "solid", "border-top-color": "rgba(0, 0, 0, 0)", "height": "0px" } })
                    )
                  ]
                )
              )
            )
          )
        )

      ]
    }
  }
  //BLOG CON BARRA LATERAL
  function NoticiasDetalles() { //Formato de visualizacion de noticias: Titulo, Usuario, Fecha,Categoria, Imagen, Todos los parrafos,etiquetas inferiores, imagen inferior. 
    return {
      view: ({ attrs }) => [m("div", { "style": { "flex": window.innerWidth < 900 ? "0 0 100%" : "0 0 90%", "max-width": window.innerWidth < 900 ? "100%" : "90%", "padding-bottom": "0px", "padding-top": "0px", "position": "relative", "margin": "0px", "min-height": "1px", "box-sizing": "border-box" } },
        [

          m("h1", { "style": { "margin": "0px", "font-weight": "500", "font-style": "normal", "font-family": "Montserrat, sans-serif", "color": "rgb(51, 51, 51)", "font-size": "38px", "line-height": "49.4px", "letter-spacing": "normal", "padding": "0px", "box-sizing": "border-box" } },
            attrs.Titulo
          ),
          m("div", { "style": { "position": "relative", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
            m("div", { "style": { "max-width": "1200px", "padding-right": "0px", "padding-left": "0px", "margin-left": "auto", "margin-right": "auto", "margin": "0px", "padding": "0px", "width": "100%", "box-sizing": "border-box" } },
              m("div", { "style":  {"margin-right": "15px","justify-content": "space-between", "align-items": "center" } },
                m("div", { "style": { "flex": window.innerWidth < 900 ? "0 0 100%" : "0 0 33%", "margin-right": "15px%" } }, // Contenedor del Usuario
                  m("span", { "style": { "font-weight": "400", "font-style": "normal", "font-family": "'Nexa Rust Script L', sans-serif", "color": "rgb(152, 152, 152)", "font-size": "20px", "line-height": "30px", "letter-spacing": "3px", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                    m("svg", { "class": "icon icon-tabler icon-tabler-users", "xmlns": "http://www.w3.org/2000/svg", "width": "40", "height": "40", "viewBox": "0 0 24 24", "stroke-width": "1.5", "stroke": "#597e8d", "fill": "none", "stroke-linecap": "round", "stroke-linejoin": "round" },
                      [
                        m("path", { "stroke": "none", "d": "M0 0h24v24H0z", "fill": "none" }),
                        m("path", { "d": "M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" }),
                        m("path", { "d": "M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" }),
                        m("path", { "d": "M16 3.13a4 4 0 0 1 0 7.75" }),
                        m("path", { "d": "M21 21v-2a4 4 0 0 0 -3 -3.85" })
                      ]
                    ), attrs.Usuario
                  )
                ),
                m("div", { "style": { "flex": window.innerWidth < 900 ? "0 0 100%" : "0 0 33%", "margin-right": "15px" } }, // Contenedor de la Fecha
                  m("span", { "style": { "font-weight": "400", "font-style": "normal", "font-family": "'Nexa Rust Script L', sans-serif", "color": "rgb(152, 152, 152)", "font-size": "20px", "line-height": "30px", "letter-spacing": "3px", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                    m("svg", { "class": "icon icon-tabler icon-tabler-calendar-week", "xmlns": "http://www.w3.org/2000/svg", "width": "40", "height": "40", "viewBox": "0 0 24 24", "stroke-width": "1.5", "stroke": "#597e8d", "fill": "none", "stroke-linecap": "round", "stroke-linejoin": "round" },
                      [
                        m("path", { "stroke": "none", "d": "M0 0h24v24H0z", "fill": "none" }),
                        m("path", { "d": "M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z" }),
                        m("path", { "d": "M16 3v4" }),
                        m("path", { "d": "M8 3v4" }),
                        m("path", { "d": "M4 11h16" }),
                        m("path", { "d": "M8 14v4" }),
                        m("path", { "d": "M12 14v4" }),
                        m("path", { "d": "M16 14v4" })
                      ]
                    ), attrs.Fecha
                  )
                ),
                m("div", { "style": { "flex": window.innerWidth < 900 ? "0 0 100%" : "0 0 33%", "margin-right": "15px" } }, // Contenedor del Tema
                  m("a", { "href": "/blog/category/business-consulting/", "style": { "color": "rgb(152, 152, 152)", "text-decoration": "none solid rgb(152, 152, 152)", "font-weight": "400", "font-style": "normal", "margin": "0px", "padding": "0px", "box-sizing": "border-box", "background-color": "rgba(0, 0, 0, 0)" } },
                    [
                      m("span", { "style": { "font-weight": "400", "font-style": "normal", "font-family": "'Nexa Rust Script L', sans-serif", "color": "rgb(152, 152, 152)", "font-size": "20px", "line-height": "30px", "letter-spacing": "3px", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                        m("svg", { "class": "icon icon-tabler icon-tabler-folders", "xmlns": "http://www.w3.org/2000/svg", "width": "40", "height": "40", "viewBox": "0 0 24 24", "stroke-width": "1.5", "stroke": "#597e8d", "fill": "none", "stroke-linecap": "round", "stroke-linejoin": "round" },
                          [
                            m("path", { "stroke": "none", "d": "M0 0h24v24H0z", "fill": "none" }),
                            m("path", { "d": "M9 4h3l2 2h5a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" }),
                            m("path", { "d": "M17 17v2a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2h2" })
                          ]
                        ), attrs.Tema),
                    ]
                  )
                )
              )
            ),
            m("div", { "data-widget-id": "wid__blog_post_content__61e01f2a35002", "data-widget": "blog.post_content", "style": { "padding-right": "0px", "padding-left": "0px", "padding-bottom": "15px", "padding-top": "0px", "position": "relative", "margin": "0px", "box-sizing": "border-box" } },
              m("section", { "data-widget": "section", "data-container": "section", "style": { "margin": "0px", "padding": "0px", "box-sizing": "border-box", "display": "block" } },
                m("div", { "style": { "flex": "0 0 auto", "position": "relative", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                  m("div", { "style": { "max-width": "1200px", "padding-right": "0px", "padding-left": "0px", "margin-left": "auto", "margin-right": "auto", "margin": "0px", "padding": "0px", "width": "100%", "box-sizing": "border-box" } },
                    m("div", { "style": { "margin-left": "-15px", "margin-right": "-15px", "padding": "0px", "display": "flex", "flex-wrap": "wrap", "box-sizing": "border-box" } },
                      m("div", { "style": { "flex": "0 0 100%", "max-width": "100%", "padding-right": "15px", "padding-left": "15px", "position": "relative", "margin": "0px", "padding": "0px 15px", "width": "100%", "min-height": "1px", "box-sizing": "border-box" } },
                        [
                          m("div", { "data-widget-id": "wid_1655472912_e22mq4u3f", "data-widget": "image", "style": { "padding-right": "0px", "padding-left": "0px", "padding-bottom": "0px", "padding-top": "0px", "font-size": "0px", "flex": "0 0 auto", "position": "relative", "margin": "0px", "box-sizing": "border-box" } },
                            m("span", { "style": { "position": "relative", "overflow": "hidden", "transition": "all 0.3s ease 0s", "display": "inline-block", "max-width": "100%", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                              m("img", { "src": attrs.Imagen, "style": { "transition": "all 0.3s ease 0s", "width": "100%", "max-width": "100%", "height": "auto", "margin": "0px", "padding": "0px", "box-sizing": "border-box", "vertical-align": "middle", "border": "0px none rgb(67, 79, 83)" } })
                            )
                          ),
                          m("div", {
                            "style": {
                              "padding-right": "0px", "padding-left": "0px", "padding-bottom": "40px", "padding-top": "15px", "position": "relative", "margin": "0px", "box-sizing": "border-box"
                            }
                          }, [
                            m("div", {
                              "style": {
                                "padding": "0px 1px", "margin": "0px", "box-sizing": "border-box"
                              }
                            }, [
                              Noticia[0].Parrafos.slice(0, 9).map(parrafo => [
                                m("p", {
                                  "style": {
                                    "font-weight": "400", "font-style": "normal", "font-family": "Poppins, sans-serif", "color": "rgb(24, 35, 51)", "font-size": "16px", "line-height": "22.4px", "letter-spacing": "normal", "margin": "0px", "padding": "0px", "box-sizing": "border-box"
                                  }
                                }, parrafo.Parrafo),
                                m("br")
                              ])
                            ])
                          ])
                        ]
                      )
                    )
                  )
                )
              )
            ),
            m("div", { "data-widget-id": "wid_1642423748_1lr6kxjpn", "data-widget": "blog.post_tags", "data-preset": "default", "style": { "padding-right": "0px", "padding-left": "0px", "padding-bottom": "40px", "padding-top": "0px", "position": "relative", "margin": "0px", "box-sizing": "border-box" } },
              m("div", { "style": { "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                m("ul", { "style": { "list-style": "outside none none", "display": "flex", "flex-wrap": "wrap", "align-items": "flex-end", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                  [
                    attrs.EtiquetasInferiores.map(item => m(cargarEtiquetasInferiores(item)))
                  ]
                )
              )
            ),

            m("div", { "data-widget-id": "wid_1642078061_xnxd46ru5", "data-widget": "image", "style": { "padding-right": "0px", "padding-left": "0px", "padding-bottom": "40px", "padding-top": "0px", "font-size": "0px", "flex": "0 0 auto", "position": "relative", "margin": "0px", "box-sizing": "border-box" } },
              m("span", { "style": { "position": "relative", "overflow": "hidden", "transition": "all 0.3s ease 0s", "display": "inline-block", "max-width": "100%", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                m("img", { "src": attrs.ImagenInferior, "data-id": "277", "title": "", "width": "1600", "height": "335", "alt": "", "style": { "transition": "all 0.3s ease 0s", "width": "100%", "max-width": "100%", "height": "auto", "margin": "0px", "padding": "0px", "box-sizing": "border-box", "vertical-align": "middle", "border": "0px none rgb(67, 79, 83)" } })
              )
            ),
          )
        ]
      )
      ]
    }

    function cargarEtiquetasInferiores() {
      return {
        view: ({ attrs }) => [
          m("li", { "style": { "margin-right": "15px", "margin-bottom": "1px", "padding": "0px", "box-sizing": "border-box" } },
            m("a", { "href": attrs.Link, onclick: () => { TagSeleccionado = attrs.id; modo = 4 }, "style": { "font-family": "Montserrat, sans-serif", "font-style": "normal", "font-weight": "500", "font-size": "17px", "padding": "0px", "border-style": "none", "border-width": "0px", "border-radius": "0px", "text-decoration": "none solid rgb(49, 49, 49)", "color": "rgb(49, 49, 49)", "background-color": "rgba(0, 0, 0, 0)", "border-color": "rgba(0, 0, 0, 0)", "display": "block", "transition": "all 0.2s ease 0s", "margin": "0px", "box-sizing": "border-box" } },
              m("span", { "style": { "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                attrs.Titulo
              )
            )
          )
        ]
      };
    }
  }
}

//-------FIN SECCIONES DE NOTICIAS------


//-------------------CONTACTO-----------------
function Contacto() {
  return {
    view: () => [
      m(Menu),
      m(Heros,{texto:"CONTACTO"}),
      m(SeccionContacto),
      m(FormularioDeContacto),
      m(Footer)
    ]
  }
  function SeccionContacto() {
    return {
      model: {
        Texto1: "Si desea comunicarse con nosotros, puede hacerlo a través de una de nuestras bandejas de entrada monitoreadas a continuación. Si su consulta está relacionada con una función de nuestra aplicación, consulte primero el centro de ayuda.",
        Texto2: "Si desea ponerse en contacto con un miembro individual del personal, consulte nuestro directorio de personal. Para consultas generales, envíe el formulario de contacto a continuación, llámenos al",
        Telefono: "123.456.7890",
        TextoEmail: "O en nuestro email",
        Email: "maestro@demolink.org"
      },
      view: () => [
        m("div", {
          "style": {
            "text-align": "center",
            "justify-content": "center",
            "position": "relative",
            "margin": "0px",
            "padding": "0px 15px",
            "width": "100%",
            "min-height": "1px",
            "box-sizing": "border-box"
          }
        },
          m("div", [
            m("iframe", {
              "src": "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d30287.80334015257!2d-122.28741496742931!3d38.257712981510245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2suy!4v1712022858322!5m2!1ses!2suy",
              "width": window.innerWidth < 900 ? "100%" : "100%",
              "height": "450",
              "allowfullscreen": "allowfullscreen",
              "loading": "lazy",
              "referrerpolicy": "no-referrer-when-downgrade",
              "style": {
                "display": "flex",
                "border": "0"
              }
            })
          ]),
  
          m("div", [
            m("p", { "style": { "text-align": "center", "font-weight": "400", "font-style": "normal", "font-family": "Poppins, sans-serif", "color": "rgb(24, 35, 51)", "font-size": "16px", "line-height": "22.4px", "letter-spacing": "normal", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
              [
                this.state.model.Texto1,
                m.trust("&nbsp;"),
                this.state.model.Texto2,
                m.trust("&nbsp;"),
                m("a", { "data-action": "call", "href": "tel:123456789", "style": { "color": "rgb(24, 35, 51)", "text-decoration": "none solid rgb(24, 35, 51)", "font-weight": "400", "font-style": "normal", "transition": "all 0.3s ease 0s", "margin": "0px", "padding": "0px", "box-sizing": "border-box", "background-color": "rgba(0, 0, 0, 0)" } },
                  this.state.model.Telefono
                ),
                m.trust("&nbsp;"),
                this.state.model.TextoEmail,
                m.trust("&nbsp;"),
                m("a", { "href": "mailto:'" + this.state.model.Email + "'", "data-action": "mail", "style": { "color": "rgb(24, 35, 51)", "text-decoration": "none solid rgb(24, 35, 51)", "font-weight": "400", "font-style": "normal", "transition": "all 0.3s ease 0s", "margin": "0px", "padding": "0px", "box-sizing": "border-box", "background-color": "rgba(0, 0, 0, 0)" } },
                  this.state.model.Email
                ),
                "."
              ]
            )
  
          ]
          )
        )
      ]
    }
  }
  function FormularioDeContacto() {
    return {
      model: {
        Titulo: "OBTENGA UN CASO GRATIS",
        Subtitulo: "Evaluacion hoy",
        TextoNombre: "Nombre completo",
        TextoTelefono: "Telefono",
        TextoLocacion: "Locacion",
        TextoEmail: "Email",
        TextoMensaje: "Mensaje",
        MensajeErrorCampo: "Debes completar este campo",
        MensajeErrorGeneral: "Mensaje no enviado",
        MensajeEnvioCorrecto: "Mensaje enviado correctamente",
        TextoMailIncorrecto: "Email incorrecto",
        TextoBoton: "Enviar",
        ImagenFondo: "assets/HeroViolin.jpg",
  
  
      },
      view: () => [m("div", { "style": { "background-image": "url('" + this.state.model.ImagenFondo + "')", "margin-top": "50px", "margin-bottom": "10px", "background-position": "center", "background-repeat": "no-repeat", "background-size": "cover", "padding-right": "0px", "padding-left": "0px", "padding-bottom": "80px", "padding-top": "80px", "position": "relative", "padding": "80px 0px", "box-sizing": "border-box" } },
        m("div", { "style": { "position": "absolute", "top": "0", "left": "0", "width": "100%", "height": "100%", "background-color": "rgba(0, 0, 0, 0.7)" } }),
        m("a", { "name": "tickets", "style": { "position": "absolute", "top": "0px", "text-decoration": "none solid rgb(51, 122, 183)", "color": "rgb(51, 122, 183)", "margin": "0px", "padding": "0px", "box-sizing": "border-box", "background-color": "rgba(0, 0, 0, 0)" } }),
        m("div", { "style": { "padding-right": "15px", "padding-left": "15px", "margin": "0px", "width": "100%", "margin-right": "auto", "margin-left": "auto", "box-sizing": "border-box" } },
          m("div", { "style": { "margin-left": "-15px", "margin-right": "-15px", "padding": "0px", "display": "flex", "flex-wrap": "wrap", "box-sizing": "border-box" } },
            m("div", { "style": { "flex": "0 0 100%", "max-width": "100%", "padding-right": "0px", "padding-left": "0px", "padding": "0px", "margin": "0px", "position": "relative", "width": "100%", "min-height": "1px", "box-sizing": "border-box" } },
              m("div", { "data-grid-type": "sm", "data-visible-on": "-", "style": { "padding-right": "0px", "padding-left": "0px", "padding-bottom": "0px", "padding-top": "0px", "flex": "0 0 auto", "position": "relative", "margin": "0px", "box-sizing": "border-box" } },
                m("div", { "style": { "max-width": "1200px", "padding-right": "15px", "padding-left": "15px", "margin-left": "auto", "margin-right": "auto", "padding": "0px 15px", "width": "100%", "box-sizing": "border-box" } },
                  m("div", { "style": { "margin-left": "-15px", "margin-right": "-15px", "padding": "0px", "display": "flex", "flex-wrap": "wrap", "box-sizing": "border-box" } },
                    [
                      m("div", { "style": { "flex": "0 0 25%", "max-width": "25%", "padding-right": "15px", "padding-left": "15px", "padding-bottom": "0px", "padding-top": "0px", "position": "relative", "margin": "0px", "padding": "0px 15px", "width": "100%", "min-height": "1px", "box-sizing": "border-box" } },
                      ),
                      m("div", { "style": { "flex": "0 0 50%", "max-width": "50%", "padding-right": "15px", "padding-left": "15px", "padding-bottom": "0px", "padding-top": "0px", "position": "relative", "margin": "0px", "padding": "0px 15px", "width": "100%", "min-height": "1px", "box-sizing": "border-box" } },
                        [
                          m("div", { "data-visible-on": "-", "data-animation": "", "style": { "padding-right": "0px", "padding-left": "0px", "padding-bottom": "40px", "padding-top": "0px", "position": "relative", "margin": "0px", "box-sizing": "border-box" } },
                            m("div", { "style": { "padding": "0px 1px", "margin": "0px", "box-sizing": "border-box" } },
                              [
                                m("p", { "style": { "text-align": "center", "font-weight": "400", "font-style": "normal", "font-family": "Montserrat, sans-serif", "color": "rgb(255, 255, 255)", "font-size": "24px", "line-height": "36px", "letter-spacing": "normal", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                                  this.state.model.Titulo
                                ),
                                m("p", { "style": { "text-align": "center", "font-weight": "400", "font-style": "normal", "font-family": "Montserrat, sans-serif", "color": "rgb(255, 255, 255)", "font-size": "24px", "line-height": "36px", "letter-spacing": "normal", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                                  this.state.model.Subtitulo
                                )
                              ]
                            )
                          ),
                          m("div", { "style": { "padding-right": "0px", "padding-left": "0px", "padding-bottom": "0px", "padding-top": "0px", "position": "relative", "margin": "0px", "box-sizing": "border-box" } },
                            m("div", { "ng-controller": "widget.ContactForm.Controller", "ng-init": "hash = '2@eyJoIjoicWMyTFwvWjZmWDZmODBna1pWbW1OcEd1cjFJXC9XQlF0NDN0eVZkN25QeEJFPSIsImkiOiI3ZjNlUkdzQ1J4b0l4TGRVV1NEek9RPT0iLCJ2IjoiNjBweE85ZVM5ODVyS1psQmY0OGREU2piVU9HR1dlSGNqRm1ONVN6ZnFDaGYrc3NlSWp6bTlsbzFHWGEyR2xwQ200c2pcL1JieXVcL0N5S20rTVpYak1LREpkOG5veXVSNFdzN0VhbGMzQnNWbz0ifQ==';actionAfterSubmission={&quot;action&quot;:&quot;none&quot;,&quot;url&quot;:&quot;&quot;,&quot;target&quot;:&quot;_self&quot;,&quot;id&quot;:&quot;&quot;};resetAfterSubmission=false", "style": { "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                              m("form", { "role": "form", "name": "contactForm", "ng-submit": "submit()", "novalidate": "novalidate", "style": { "font-family": "Poppins, sans-serif", "overflow": "visible", "width": "100%", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                                [
                                  m("div", { "ng-show": "sending", "style": { "margin": "0px", "padding": "0px", "box-sizing": "border-box", "display": "none" } }),
                                  m("div", { "style": { "margin-bottom": "5px", "position": "relative", "padding": "0px", "box-sizing": "border-box" } },
                                    [
                                      m("label", { "for": "field_name_wid_1656601285_0hds0tiob", "style": { "display": "none", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                                        this.state.model.TextoNombre
                                      ),
                                      m("input", { "type": "text", "placeholder": this.state.model.TextoNombre, "ng-blur": "validate('name')", "required": "required", "ng-model-options": "{ updateOn: 'blur' }", "name": "name", "ng-model": "message.name", "style": { "color": "rgb(24, 35, 51)", "background-color": "rgb(255, 255, 255)", "font-style": "normal", "font-weight": "400", "border-color": "rgb(144, 144, 144)", "line-height": "14px", "font-size": "16px", "padding": "15px 29px", "border": "1px solid rgb(144, 144, 144)", "display": "block", "width": "100%", "margin": "0px", "box-sizing": "border-box", "font-family": "Poppins, sans-serif" } }),
                                      m("span", { "ng-show": "contactForm.name.$invalid &amp;&amp; !contactForm.name.$pristine &amp;&amp; !contactForm.name.emailInvalid", "style": { "font-style": "normal", "font-weight": "400", "color": "rgb(244, 16, 14)", "right": "6px", "top": "2px", "font-size": "11px", "position": "absolute", "margin": "0px", "padding": "0px", "box-sizing": "border-box", "display": "none" } },
                                        this.state.model.MensajeErrorCampo
                                      )
                                    ]
                                  ),
                                  m("div", { "style": { "margin-bottom": "5px", "position": "relative", "padding": "0px", "box-sizing": "border-box" } },
                                    [
                                      m("label", { "for": "field_phone_wid_1656601285_0hds0tiob", "style": { "display": "none", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                                        this.state.model.TextoTelefono
                                      ),
                                      m("input", { "type": "text", "placeholder": this.state.model.TextoTelefono, "ng-blur": "validate('phone')", "required": "required", "ng-model-options": "{ updateOn: 'blur' }", "name": "phone", "ng-model": "message.phone", "style": { "color": "rgb(24, 35, 51)", "background-color": "rgb(255, 255, 255)", "font-style": "normal", "font-weight": "400", "border-color": "rgb(144, 144, 144)", "line-height": "14px", "font-size": "16px", "padding": "15px 29px", "border": "1px solid rgb(144, 144, 144)", "display": "block", "width": "100%", "margin": "0px", "box-sizing": "border-box", "font-family": "Poppins, sans-serif" } }),
                                      m("span", { "ng-show": "contactForm.phone.$invalid &amp;&amp; !contactForm.phone.$pristine &amp;&amp; !contactForm.phone.emailInvalid", "style": { "font-style": "normal", "font-weight": "400", "color": "rgb(244, 16, 14)", "right": "6px", "top": "2px", "font-size": "11px", "position": "absolute", "margin": "0px", "padding": "0px", "box-sizing": "border-box", "display": "none" } },
                                        this.state.model.MensajeErrorCampo
                                      )
                                    ]
                                  ),
                                  m("div", { "style": { "margin-bottom": "5px", "position": "relative", "padding": "0px", "box-sizing": "border-box" } },
                                    [
                                      m("label", { "for": "field_address_wid_1656601285_0hds0tiob", "style": { "display": "none", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                                        this.state.model.TextoLocacion
                                      ),
                                      m("input", { "type": "text", "placeholder": this.state.model.TextoLocacion, "ng-model-options": "{ updateOn: 'blur' }", "name": "address", "ng-model": "message.address", "style": { "color": "rgb(24, 35, 51)", "background-color": "rgb(255, 255, 255)", "font-style": "normal", "font-weight": "400", "border-color": "rgb(144, 144, 144)", "line-height": "14px", "font-size": "16px", "padding": "15px 29px", "border": "1px solid rgb(144, 144, 144)", "display": "block", "width": "100%", "margin": "0px", "box-sizing": "border-box", "font-family": "Poppins, sans-serif" } }),
                                      m("span", { "ng-show": "contactForm.address.$invalid &amp;&amp; !contactForm.address.$pristine &amp;&amp; !contactForm.address.emailInvalid", "style": { "font-style": "normal", "font-weight": "400", "color": "rgb(244, 16, 14)", "right": "6px", "top": "2px", "font-size": "11px", "position": "absolute", "margin": "0px", "padding": "0px", "box-sizing": "border-box", "display": "none" } },
                                        this.state.model.MensajeErrorCampo
                                      )
                                    ]
                                  ),
                                  m("div", { "style": { "margin-bottom": "5px", "position": "relative", "padding": "0px", "box-sizing": "border-box" } },
                                    [
                                      m("label", { "for": "field_email_wid_1656601285_0hds0tiob", "style": { "display": "none", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                                        this.state.model.TextoEmail
                                      ),
                                      m("input", { "type": "text", "placeholder": this.state.model.TextoEmail, "ng-blur": "validate('email')", "required": "required", "ng-model-options": "{ updateOn: 'blur' }", "name": "email", "ng-model": "message.email", "style": { "color": "rgb(24, 35, 51)", "background-color": "rgb(255, 255, 255)", "font-style": "normal", "font-weight": "400", "border-color": "rgb(144, 144, 144)", "line-height": "14px", "font-size": "16px", "padding": "15px 29px", "border": "1px solid rgb(144, 144, 144)", "display": "block", "width": "100%", "margin": "0px", "box-sizing": "border-box", "font-family": "Poppins, sans-serif" } }),
                                      m("span", { "ng-show": "contactForm.email.$invalid &amp;&amp; !contactForm.email.$pristine &amp;&amp; !contactForm.email.emailInvalid", "style": { "font-style": "normal", "font-weight": "400", "color": "rgb(244, 16, 14)", "right": "6px", "top": "2px", "font-size": "11px", "position": "absolute", "margin": "0px", "padding": "0px", "box-sizing": "border-box", "display": "none" } },
                                        this.state.model.MensajeErrorCampo
                                      ),
                                      m("span", { "ng-show": "contactForm.email.emailInvalid &amp;&amp; !contactForm.email.$pristine", "style": { "font-style": "normal", "font-weight": "400", "color": "rgb(244, 16, 14)", "right": "6px", "top": "2px", "font-size": "11px", "position": "absolute", "margin": "0px", "padding": "0px", "box-sizing": "border-box", "display": "none" } },
                                        this.state.model.TextoMailIncorrecto
                                      )
                                    ]
                                  ),
                                  m("div", { "style": { "margin-bottom": "5px", "position": "relative", "padding": "0px", "box-sizing": "border-box" } },
                                    [
                                      m("label", { "for": "field_message_wid_1656601285_0hds0tiob", "style": { "display": "none", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                                        this.state.model.TextoMensaje
                                      ),
                                      m("textarea", { "rows": "3", "placeholder": this.state.model.TextoMensaje, "ng-model-options": "{ updateOn: 'blur' }", "name": "message", "ng-model": "message.message", "style": { "color": "rgb(24, 35, 51)", "background-color": "rgb(255, 255, 255)", "font-style": "normal", "font-weight": "400", "border-color": "rgb(144, 144, 144)", "min-height": "128px", "line-height": "14px", "font-size": "16px", "padding": "15px 29px", "border": "1px solid rgb(144, 144, 144)", "resize": "none", "display": "block", "width": "100%", "margin": "0px", "box-sizing": "border-box", "font-family": "Poppins, sans-serif", "overflow": "auto" } }),
                                      m("span", { "ng-show": "contactForm.message.$invalid &amp;&amp; !contactForm.message.$pristine", "style": { "font-style": "normal", "font-weight": "400", "color": "rgb(244, 16, 14)", "right": "6px", "top": "2px", "font-size": "11px", "position": "absolute", "margin": "0px", "padding": "0px", "box-sizing": "border-box", "display": "none" } },
                                        this.state.model.MensajeErrorCampo
                                      )
                                    ]
                                  ),
                                  m("div", { "ng-show": "showSuccessMessage", "style": { "font-style": "normal", "font-weight": "500", "color": "rgb(45, 238, 121)", "position": "relative", "font-size": "12px", "margin": "0px", "padding": "0px", "box-sizing": "border-box", "display": "none" } },
                                    this.state.model.MensajeEnvioCorrecto
                                  ),
                                  m("div", { "ng-show": "emailError", "style": { "font-style": "normal", "font-weight": "400", "color": "rgb(244, 16, 14)", "position": "relative", "font-size": "12px", "margin": "0px", "padding": "0px", "box-sizing": "border-box", "display": "none" } },
                                    this.state.model.MensajeErrorGeneral
                                  ),
                                  m("div", { "style": { "margin-top": "19px", "padding": "0px", "box-sizing": "border-box" } },
                                    m("div", { "style": { "padding-right": "0px", "padding-left": "0px", "padding-bottom": "0px", "padding-top": "0px", "text-align": "center", "position": "relative", "margin": "0px", "box-sizing": "border-box" } },
                                      m("button", { "type": "submit", "style": { "font-family": "Poppins, sans-serif", "font-weight": "500", "font-style": "normal", "color": "rgb(39, 39, 39)", "background-color": "rgb(255, 255, 255)", "border-color": "rgba(0, 0, 0, 0)", "font-size": "14px", "padding": "17px 10px", "min-width": "180px", "position": "relative", "text-align": "center", "z-index": "1", "transition": "all 0.3s ease 0s", "line-height": "14px", "border": "1px solid rgba(0, 0, 0, 0)", "outline": "rgb(39, 39, 39) none 0px", "display": "inline-block", "cursor": "pointer", "margin": "0px", "box-sizing": "border-box", "appearance": "button", "text-transform": "none", "overflow": "visible" } },
                                        [
                                          m("span", { "style": { "display": "none", "margin": "0px", "padding": "0px", "box-sizing": "border-box", "font-style": "normal", "font-variant": "normal", "font-kerning": "auto", "font-optical-sizing": "auto", "font-feature-settings": "normal", "font-variation-settings": "normal", "font-weight": "400", "font-stretch": "100%", "line-height": "14px", "font-family": "FontAwesome", "font-size": "14px", "text-rendering": "auto", "-webkit-font-smoothing": "antialiased" } }),
                                          m("span", { "style": { "display": "none", "border": "0px none rgb(39, 39, 39)", "margin": "0px", "transition": "border-color 0.5s ease 0s", "padding": "0px", "box-sizing": "border-box" } }),
                                          m("span", { "style": { "text-decoration": "none solid rgb(39, 39, 39)", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                                            this.state.model.TextoBoton
                                          )
                                        ]
                                      )
                                    )
                                  )
                                ]
                              )
                            )
                          )
                        ]
                      ),
                      m("div", { "style": { "flex": "0 0 25%", "max-width": "25%", "padding-right": "15px", "padding-left": "15px", "padding-bottom": "0px", "padding-top": "0px", "position": "relative", "margin": "0px", "padding": "0px 15px", "width": "100%", "min-height": "1px", "box-sizing": "border-box" } },
                      )
                    ]
                  )
                )
              )
            )
          )
        )
      )
      ]
    }
  }
}

function Politicas() {
  return {
    view: () => [
      m(Menu),
      m(Heros,{textos:"Politicas"}),
      m(PoliticasDePrivacidad),
      m(Footer)
    ]
  }
  function PoliticasDePrivacidad() {
    return {
      model: {
        items: [
  
          {
            titulo: "INFORMACIÓN GENERAL",
            Texto: "¡Bienvenido a nuestra página de Política de Privacidad! Cuando utiliza los servicios de nuestro sitio web, nos confía su información. Esta Política de Privacidad está destinada a ayudarle a comprender qué datos recopilamos, por qué los recopilamos y qué hacemos con ellos. Cuándo Si compartes información con nosotros, podemos mejorar aún más nuestros servicios. Por ejemplo, podemos mostrarte resultados de búsqueda y anuncios más relevantes, ayudarte a conectarte con personas o hacer que compartir con otras personas sea más rápido y sencillo. A medida que utilizas nuestros servicios , queremos que tenga claro cómo utilizamos la información y las formas en que puede proteger su privacidad. Esto es importante; esperamos que se tome el tiempo para leerlo detenidamente. Recuerde, puede encontrar controles para administrar su información y proteger su privacidad y seguridad. Hemos tratado de mantenerlo lo más simple posible."
            ,
          },
          {
            titulo: "DERECHO A ACCEDER, CORREGIR Y ELIMINAR LOS DATOS Y A OPONERSE AL TRATAMIENTO DE LOS DATOS",
            Texto: "Nuestros clientes tienen derecho a acceder, rectificar y eliminar los datos personales que les conciernen, y a oponerse al procesamiento de dichos datos, dirigiendo una solicitud por escrito, en cualquier momento. La Compañía hace todo lo posible para tomar las precauciones adecuadas para salvaguardar la seguridad y privacidad de los datos personales, y evitar que sean alterados, corrompidos, destruidos o accedidos por terceros no autorizados, sin embargo, la Empresa no controla todos y cada uno de los riesgos relacionados con el uso de Internet, por lo que advierte a la Usuarios del sitio de los riesgos potenciales involucrados en el funcionamiento y uso de Internet. El Sitio puede incluir enlaces a otros sitios web u otras fuentes de Internet. Como la Compañía no puede controlar estos sitios web y fuentes externas, la Compañía no se hace responsable de la provisión o exhibición de estos sitios web y fuentes externas, y no seremos responsables del contenido, publicidad, productos, servicios o cualquier otro material disponible en o desde estos sitios web o fuentes externas",
          },
          {
            titulo: "GESTIÓN DE DATOS PERSONALES",
            Texto: "Puede ver o editar sus datos personales en línea para muchos de nuestros servicios. También puede tomar decisiones sobre nuestra recopilación y uso de sus datos. La forma en que puede acceder o controlar sus datos personales dependerá de los servicios que utilice. Puede elegir si desea recibir comunicaciones promocionales de nuestro sitio web por correo electrónico, SMS, correo físico y teléfono. Si recibe correos electrónicos promocionales o mensajes SMS de nuestra parte y desea excluirse, puede hacerlo siguiendo las instrucciones en ese mensaje. También puede tomar decisiones sobre la recepción de correos electrónicos promocionales, llamadas telefónicas y correo postal visitando e iniciando sesión en el Administrador de comunicaciones promocionales de la empresa, que le permite actualizar la información de contacto, administrar las preferencias de contacto, optar por no recibir suscripciones de correo electrónico y elegir si desea recibir correos electrónicos promocionales, llamadas telefónicas y correo postal. para compartir su información de contacto con nuestros socios. Estas opciones no se aplican a las comunicaciones de servicio obligatorias que forman parte de ciertos servicios del sitio web",
          },
          {
            titulo: "INFORMACIÓN QUE RECOPILAMOS",
            Texto: "Nuestra tienda recopila datos para operar de manera efectiva y brindarle las mejores experiencias con nuestros servicios. Usted proporciona algunos de estos datos directamente, como cuando crea una cuenta personal. Obtenemos algunos de ellos al registrar cómo interactúa con nuestros servicios mediante, por ejemplo, utilizando tecnologías como cookies y recibiendo informes de errores o datos de uso del software que se ejecuta en su dispositivo. También obtenemos datos de terceros (incluidas otras empresas). Por ejemplo, complementamos los datos que recopilamos comprando datos demográficos de otros empresas. También utilizamos servicios de otras empresas para ayudarnos a determinar una ubicación en función de su dirección IP para personalizar ciertos servicios según su ubicación. Los datos que recopilamos dependen de los servicios y funciones que utilice",
          },
          {
            titulo: "CÓMO UTILIZAMOS TU INFORMACIÓN",
            Texto: "Nuestro sitio web utiliza los datos que recopilamos para tres propósitos básicos: operar nuestro negocio y proporcionar (incluyendo mejorar y personalizar) los servicios que ofrecemos, enviar comunicaciones, incluidas comunicaciones promocionales, y mostrar publicidad. Al llevar a cabo estos propósitos, Combinamos los datos que recopilamos a través de los diversos servicios del sitio web que utiliza para brindarle una experiencia más fluida, consistente y personalizada. Sin embargo, para mejorar la privacidad, hemos incorporado salvaguardias tecnológicas y procesales diseñadas para evitar ciertas combinaciones de datos. Por ejemplo, almacenar los datos que recopilamos de usted cuando no está autenticado (no ha iniciado sesión) por separado de cualquier información de cuenta que lo identifique directamente, como su nombre, dirección de correo electrónico o número de teléfono",
          },
          {
            titulo: "COMPARTIENDO TU INFORMACIÓN",
            Texto: "Compartimos sus datos personales con su consentimiento o según sea necesario para completar cualquier transacción o proporcionar cualquier servicio que haya solicitado o autorizado. Por ejemplo, compartimos su contenido con terceros cuando usted nos indica que lo hagamos. Cuando proporciona datos de pago a realizar una compra, compartiremos datos de pago con bancos y otras entidades que procesan transacciones de pago o brindan otros servicios financieros, y para la prevención de fraude y reducción del riesgo crediticio. Además, compartimos datos personales entre nuestras filiales y subsidiarias controladas. También compartimos datos personales con proveedores o agentes que trabajan en nuestro nombre para los fines descritos en esta declaración. Por ejemplo, las empresas que hemos contratado para brindar soporte de servicio al cliente o ayudar a proteger y asegurar nuestros sistemas y servicios pueden necesitar acceso a datos personales para poder proporcionar esas funciones. En tales casos, estas empresas deben cumplir con nuestros requisitos de seguridad y privacidad de datos y no se les permite utilizar los datos personales que reciben de nosotros para ningún otro propósito. También podemos revelar datos personales como parte de una transacción corporativa como una fusión o venta de activos",
          },
        ],
        mail: "privacy@demolink.org"
      },
      view: () => [
        m("div", { "data-visible-on": "", "style": { "padding-right": "0px", "padding-left": "0px", "padding-bottom": "80px", "padding-top": "80px", "position": "relative", "margin": "0px", "box-sizing": "border-box" } },
          m("div", { "style": { "max-width": "1200px", "padding-right": "15px", "padding-left": "15px", "margin-left": "auto", "margin-right": "auto", "padding": "0px 15px", "width": "90%", "box-sizing": "border-box" } },
            m("div", { "style": { "margin-left": "-15px", "margin-right": "-15px", "padding": "0px", "display": "flex", "flex-wrap": "wrap", "box-sizing": "border-box" } },
              m("div", { "style": { "padding-right": "15px", "padding-left": "15px", "padding": "0px 15px", "margin": "0px", "position": "relative", "width": "100%", "min-height": "1px", "box-sizing": "border-box" } },
                m("div", { "data-visible-on": "-", "data-animation": "", "style": { "padding-right": "0px", "padding-left": "0px", "padding-bottom": "0px", "padding-top": "0px", "position": "relative", "margin": "0px", "box-sizing": "border-box" } },
                  m("div", { "style": { "padding": "0px 1px", "margin": "0px", "box-sizing": "border-box" } },
                    [
                      this.state.model.items.map(items => m(PoliticaTexto, items)),
                      m("p", { "style": { "font-weight": "400", "font-style": "normal", "font-family": "Poppins, sans-serif", "color": "rgb(24, 35, 51)", "font-size": "16px", "line-height": "22.4px", "letter-spacing": "normal", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                        m("a", { "href": this.state.model.mail, "data-action": "mail", "style": { "color": "rgb(24, 35, 51)", "text-decoration": "none solid rgb(24, 35, 51)", "font-weight": "400", "font-style": "normal", "transition": "all 0.3s ease 0s", "margin": "0px", "padding": "0px", "box-sizing": "border-box", "background-color": "rgba(0, 0, 0, 0)" } },
                          this.state.model.mail
                        )
                      )
                    ]
                  )
                )
              )
            )
          )
        )
      ]
    }
    function PoliticaTexto() {
      return {
        view: ({ attrs }) => [
          m("p", { "style": { "font-weight": "500", "font-style": "normal", "font-family": "Montserrat, sans-serif", "color": "rgb(37, 37, 37)", "font-size": "20px", "line-height": "24px", "letter-spacing": "normal", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
            attrs.titulo
          ),
          m("p", { "style": { "font-weight": "400", "font-style": "normal", "font-family": "Poppins, sans-serif", "color": "rgb(24, 35, 51)", "font-size": "16px", "line-height": "22.4px", "letter-spacing": "normal", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
            attrs.Texto
          ),
          m("p", { "style": { "font-weight": "400", "font-style": "normal", "font-family": "Poppins, sans-serif", "color": "rgb(24, 35, 51)", "font-size": "16px", "line-height": "22.4px", "letter-spacing": "normal", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
            m.trust("&nbsp;")
          ),
        ]
      }
    }
    
  }
}


//ELEMENTOS GENERICOS: 

//ICONO DE TELEFONO FLOTANTE
function Telefono() {
  let showUserData = false;

  return {
    model: {
      Nombre: "John Smith",
      Cargo: "Agente",
      Telefono: "+123 456 789"
    },
    view: () => m("div", {
      style: {
        backgroundColor: "#ffffff", cursor: "pointer", textAlign: "center", marginTop: "0px", padding: "0px", boxSizing: "border-box", borderRadius: "50%", width: "70px", height: "70px", position: "fixed", bottom: "20px", left: "20px", zIndex: "9999"
      },
      onclick: function () {
        showUserData = !showUserData;
      }
    }, [
      m("svg", { "class": "icon icon-tabler icon-tabler-phone", "xmlns": "http://www.w3.org/2000/svg", "margin-top": "15px", "width": "56", "height": "56", "viewBox": "0 0 24 24", "stroke-width": "2", "stroke": "#000000", "fill": "none", "stroke-linecap": "round", "stroke-linejoin": "round" },
        [
          m("path", { "stroke": "none", "d": "M0 0h24v24H0z", "fill": "none" }),
          m("path", { "d": "M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" })
        ]
      ),
      showUserData && m("div", {
        style: {
          width: "280px", paddingBottom: "0px", padding: "30px", margin: "0px", boxSizing: "border-box", backgroundColor: "#ffffff", borderRadius: "10px", position: "fixed", bottom: "90px", left: "20px", zIndex: "10000"
        }
      }, [
        m("div", {
          style: {
            textAlign: "center", margin: "0px", padding: "0px", boxSizing: "border-box"
          }
        }, [
          m("svg", {
            xmlns: "http://www.w3.org/2000/svg", class: "icon icon-tabler icon-tabler-user", width: "80", height: "80", viewBox: "0 0 24 24", strokeWidth: "2", stroke: "#9e9e9e", fill: "none", strokeLinecap: "round", strokeLinejoin: "round"
          }, [
            m("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
            m("path", { d: "M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" }),
            m("path", { d: "M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" })
          ]),
          m("div", { style: { margin: "0px", padding: "0px", boxSizing: "border-box" } }, [
            m("p", { style: { textAlign: "center", fontSize: "16px", lineHeight: "22.4px", letterSpacing: "normal", fontWeight: "400", fontStyle: "normal", fontFamily: "Montserrat, sans-serif", color: "#313131", margin: "0px", padding: "0px", boxSizing: "border-box" } }, this.state.model.Nombre),
            m("p", { style: { textAlign: "center", fontSize: "12px", lineHeight: "16.8px", letterSpacing: "normal", fontWeight: "400", fontStyle: "normal", fontFamily: "Poppins, sans-serif", color: "#182333", margin: "0px", padding: "0px", boxSizing: "border-box" } }, this.state.model.Cargo),
            m("p", { style: { textAlign: "center", fontSize: "12px", lineHeight: "16.8px", letterSpacing: "normal", fontWeight: "400", fontStyle: "normal", fontFamily: "Poppins, sans-serif", color: "#182333", margin: "0px", padding: "0px", boxSizing: "border-box" } }, [
              m("a", {
                "data-action": "call",
                href: "tel:+112233445566",
                style: {
                  color: "#182333", textDecoration: "none solid rgb(24, 35, 51)", fontWeight: "400", fontStyle: "normal", fontSize: "12px", lineHeight: "16.8px", letterSpacing: "normal", fontFamily: "Poppins, sans-serif", margin: "0px", padding: "0px", boxSizing: "border-box"
                }
              }, this.state.model.Telefono)
            ])
          ])
        ])
      ])
    ])
  }
}

//HERO DE TODAS LAS SECCIONES EXCEPTO LA PRINCIPAL
function Heros() {
  const model = {
    imagenFondo: "assets/mt-2288-home-bg2.jpg",
    texto: "Texto"
  };
  return {
    model: model,
    view: ({attrs}) => [
      
      m("div", { "style": { "background-image": "url('" + (attrs.imagenFondo || model.imagenFondo) + "')", "background-position": "center", "background-repeat": "no-repeat", "background-size": "cover", "padding-bottom": "170px", "padding-right": "0px", "padding-left": "0px", "padding-top": "15px", "position": "relative", "margin": "0px", "box-sizing": "border-box" } },
        [
          m("div", { "style": { "display": "flex", "justify-content": "center", "padding-right": "0px", "padding-left": "0px", "padding-bottom": "0px", "padding-top": "150px", "flex": "0 0 auto", "position": "relative", "margin": "0px", "box-sizing": "border-box" } },
            m("div", { "style": { "max-width": "1200px", "padding-right": "15px", "padding-left": "15px", "width": "100%", "box-sizing": "border-box" } },
              m("div", { "style": { "max-width": "100%", "padding-bottom": "0px", "padding-top": "0px", "position": "relative", "margin": "0px", "width": "100%", "min-height": "1px", "box-sizing": "border-box", "text-align": "center" } },
                m("ul", { "style": { "justify-content": "center", "background-color": "rgba(0, 0, 0, 0)", "border-width": "0px", "border-color": "rgba(0, 0, 0, 0)", "border-radius": "0px", "border-style": "none", "flex-wrap": "wrap", "display": "inline-flex", "align-items": "center", "margin-top": "50px", "padding": "0px", "box-sizing": "border-box" } },
                  [
                    m("li", { "style": { "list-style": "outside none none", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                      m("span", { "style": { "margin": "0px", "padding": "0px", "box-sizing": "border-box", "color": "rgb(255, 255, 255)", "border-width": "0px", "border-radius": "0px", "border-color": "rgba(0, 0, 0, 0)", "border-style": "none", "font-family": "Poppins, sans-serif", "font-size": "70px", "font-style": "normal", "font-weight": "300", "padding": "0px 3px", "background-color": "rgba(0, 0, 0, 0)", "transition": "all 0.2s ease 0s", "margin": "0px", "box-sizing": "border-box" } },
                        attrs.texto || model.texto
                      )
                    )
                  ]
                )
              )
            )
          )
        ]
      )
    ]
  };
}

//-----------FUNCIONES DE MENU-------------


function Menu() {
  
  return {
    view: () => [m(window.innerWidth < 900 ? MenuMobile : MenuNormal)]
  
  }

}

function MenuNormal() {
  return {
    model: {
      imagen: "assets/mt-2288-home-logo.png",
      botonCotizacion: "COTIZA AQUI",
      linkContacto: "#!/Contacto",
      items: [
        {
          nombreMenu: "HOGAR",
          link: "./"
        },
        {
          nombreMenu: "ACERCA DE",
          children: [
            {
              nombreMenu: "HISTORIA",
              link: "#!/Historia"
            },
            {
              nombreMenu: "CONTACTO",
              link: "#!/Contacto"
            },
            {
              nombreMenu: "POLITICA DE PRIVACIDAD",
              link: "#!/Politicas"
            }
          ]
        },
        {
          nombreMenu: "HISTORIA",
          link: "#!/Historia"
        },
        {
          nombreMenu: "BLOG",
          link: "#!/Blog"
        },
        {
          nombreMenu: "CONTACTO",
          link: "#!/Contacto"
        },
      ]
    },

    view: () => [
      
      m("div",{id: "MenuGlobal", style: {
      
      ...( window.scrollY > 20 ? {"background-color": "black"}: {}), 
      
      "padding-right": "0px", "padding-left": "0px",  "padding-top": "25px","text-align": "center", "justify-content":"center","display": "flex","align-items": "center","position": "fixed", "box-sizing": "border-box", "z-index": "999", "width": "100%","max-height":"200px" } },
        m("div", { "style": { "width": "100%", "box-sizing": "border-box", "max-width":"1200px" } },
          m("div", { "style": {"display": "flex", "padding": "0px",  "flex-wrap": "wrap", "box-sizing": "border-box" } },
            [
              m("div", { "style": { "flex": "0 0 25%", "max-width": "25%", "padding-right": "15px", "padding-left": "15px", "padding-bottom": "0px", "padding-top": "0px", "justify-content": "center", "display": "flex", "flex-direction": "column", "position": "relative", "width": "100%", "min-height": "1px", "box-sizing": "border-box" } },
                m("div", { "style": { "padding-right": "0px", "padding-left": "0px", "padding-bottom": "15px", "padding-top": "0px", "font-size": "0px", "flex": "0 0 auto", "position": "relative", "margin": "0px", "box-sizing": "border-box" } },
                  m("a", { "href": "/", "style": { "position": "relative", "overflow": "hidden", "transition": "all 0.3s ease 0s", "display": "inline-block", "max-width": "100%", "text-decoration": "none solid rgb(51, 122, 183)", "color": "rgb(51, 122, 183)", "margin": "0px", "padding": "0px", "box-sizing": "border-box", "background-color": "rgba(0, 0, 0, 0)" } },
                    m("img", { "src": this.state.model.imagen,"style": { "transition": "all 0.3s ease 0s", "width": "100%", "max-width": "100%", "height": "auto", "margin": "0px", "padding": "0px", "box-sizing": "border-box", "vertical-align": "middle", "border": "0px none rgb(51, 122, 183)" } })
                  )
                )
              ),
              m("div", { "style": { "flex": "0 0 50%", "max-width": "50%", "padding-right": "15px", "padding-left": "15px", "padding-bottom": "0px", "padding-top": "0px", "justify-content": "center", "display": "flex", "flex-direction": "column", "position": "relative", "margin": "0px", "padding": "0px 15px", "width": "100%", "min-height": "1px", "box-sizing": "border-box" } },
                m("div", { "data-grid-type": "sm", "data-visible-on": "-", "style": { "padding-right": "0px", "padding-left": "0px", "padding-bottom": "0px", "padding-top": "0px",  "justify-content": "center", "position": "relative", "margin": "0px", "box-sizing": "border-box" } },
                  m("div", { "style": { "max-width": "1200px", "padding-right": "0px", "padding-left": "0px", "margin-left": "auto", "margin-right": "auto", "margin": "0px", "padding": "0px", "width": "100%", "box-sizing": "border-box" } },
                    m("div", { "style": { "margin-left": "-15px", "margin-right": "-15px", "padding": "0px", "display": "flex", "flex-wrap": "wrap", "box-sizing": "border-box" } },
                      [
                        m("div", { "style": { "flex": "0 0 100%", "max-width": "100%", "padding-right": "15px", "padding-left": "15px", "padding-bottom": "0px", "padding-top": "0px", "justify-content": "center", "display": "flex", "flex-direction": "column", "position": "relative", "margin": "0px", "padding": "0px 15px", "width": "100%", "min-height": "1px", "box-sizing": "border-box" } },
                          m("div", { "style": { "max-height":"55px","padding-right": "0px", "padding-left": "0px", "padding-bottom": "15px", "padding-top": "0px", "flex": "0 0 auto", "text-align": "right", "position": "relative", "margin": "0px", "box-sizing": "border-box" } },
                            [
                              m("a", { "href": "#", "style": { "color": "rgb(49, 49, 49)", "background-color": "rgb(255, 255, 255)", "width": "40px", "height": "40px", "padding": "0px 8px", "display": "none", "text-align": "center", "text-decoration": "none solid rgb(49, 49, 49)", "margin": "0px", "box-sizing": "border-box" } },
                                m("i", { "style": { "font-size": "24px", "line-height": "40px", "margin": "0px", "padding": "0px", "box-sizing": "border-box", "display": "inline-block", "font-style": "normal", "font-variant": "normal", "font-kerning": "auto", "font-optical-sizing": "auto", "font-feature-settings": "normal", "font-variation-settings": "normal", "font-weight": "400", "font-stretch": "100%", "font-family": "FontAwesome", "text-rendering": "auto", "-webkit-font-smoothing": "antialiased" } })
                              ),
                              m("ul", { "style": { "display": "inline-block", "list-style": "outside none none", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                                [
                                  this.state.model.items.map(item =>
                                    m(OpcionesMenu, { nombreMenu: item.nombreMenu, link: item.link, children: item.children })
                                  )
                                ]
                              )
                            ]
                          )
                        )
                      ]
                    )
                  )
                )
              ),
                        m("div", { "style": { "flex": "0 0 25%", "max-width": "25%", "padding-right": "15px", "padding-left": "15px", "padding-bottom": "0px", "padding-top": "0px", "justify-content": "center", "display": "flex", "flex-direction": "column", "position": "relative", "margin": "0px", "padding": "0px 15px", "width": "100%", "min-height": "1px", "box-sizing": "border-box" } },
                          m("div", { "style": { "padding-right": "0px", "padding-left": "0px", "padding-bottom": "15px", "padding-top": "0px", "text-align": "right", "position": "relative", "margin": "0px", "box-sizing": "border-box" } },
                            m("div", { "style": { "margin-right": "20px" } },
                              m("a", {
                                "href": this.state.model.linkContacto, "style": {
                                  "font-family": "Poppins, sans-serif","font-weight": "500", "min-width": "180px", "font-size": "16px", "padding": "17px 10px", "position": "relative", "text-align": "center", "transition": "all 0.3s ease 0s", "line-height": "10px", "border": "1px solid transparent", "display": "inline-block", "text-decoration": "none", "color": "rgb(39, 39, 39)", "background-color": "rgb(255, 255, 255)",
                                },
                                "onmouseenter": (event) => {
                                  event.target.style.borderColor = "white"; event.target.style.backgroundColor = "rgba(0, 0, 0, 0)"; event.target.style.color = "white";
                                },
                                "onmouseleave": (event) => {
                                  event.target.style.borderColor = "rgba(0, 0, 0, 0)"; event.target.style.backgroundColor = "rgb(255, 255, 255)"; event.target.style.color = "rgb(39, 39, 39)";
                                }
                              }, this.state.model.botonCotizacion)
                            )
                          )
                        )
                      ]
                    )
                  )
                )
            ]
          
        
      
    
  }


  // Componente OpcionesMenu
function OpcionesMenu() {
  let showChildren = false;
  let isHovered = false;
  return {
    view: ({ attrs }) => [
      m("li", {"style": {"display": "inline-block", "position": "relative", "padding": "0px", "flex-grow": "1", "flex-basis": "250px", "z-index": "999", "box-sizing": "border-box", "borderBottom": isHovered ? "5px solid white" : "none" 
        },
        onmouseenter: () => {
          showChildren = true;
          isHovered = true;
        },
        onmouseleave: () => {
          showChildren = false;
          isHovered = false;
        }
      }, [
        m("a", {"href": attrs.link, "style": {
            "font-size": "16px", "font-family": "Poppins, sans-serif", "font-weight": "400", "font-style": "normal", "color": "rgb(255, 255, 255)", "text-decoration": "none solid rgb(49, 49, 49)", "background-color": "rgba(0, 0, 0, 0)", "line-height": "16px", "padding": "15px 18px", "position": "relative", "display": "block", "text-align": "left", "transition": "all 0.3s ease 0s", "z-index": "999", "letter-spacing": "normal", "margin": "0px", "box-sizing": "border-box"
          }
        }, attrs.nombreMenu),

        attrs.children && (showChildren || attrs.children.some(child => child.showChildren)) &&
        m("ul", {
          "style": {
            "background-color": "rgb(255, 255, 255)","padding-top": "88px", "min-width": "290px", "padding": "18px 30px", "left": "0px", "box-shadow": "rgba(136, 136, 136, 0.26) 0px 2px 12px 0px", "display": "block", "position": "absolute", "z-index": "500", "margin": "0px", "box-sizing": "border-box"
          }
        }, attrs.children.map(child => [
          
          m("li", { "style": { "display": "block", "position": "relative", "margin": "0px", "padding": "0px", "box-sizing": "border-box", "z-index": "9999" } },
            m("a", { "href": child.link, "data-action": "page", "style": { "font-size": "14px", "font-family": "Poppins, sans-serif", "font-weight": "400", "font-style": "normal", "color": "rgb(0, 0, 0)", "text-decoration": "none solid rgb(49, 49, 49)", "background-color": "rgba(0, 0, 0, 0)", "line-height": "16px", "padding": "10px 18px", "position": "relative", "display": "block", "text-align": "left", "transition": "all 0.3s ease 0s", "z-index": "1", "letter-spacing": "normal", "margin": "0px", "box-sizing": "border-box" } },
              child.nombreMenu)
          )
        ]))
      ])
    ]
  }
}
}
//MODEL MOBILE
function MenuMobile() {
  
  let showMenu = false;
  return {
    model: {
      imagen: "assets/mt-2288-home-logo.png",
      botonCotizacion: "COTIZA AQUI",
      linkContacto: "#!/Contacto",
      items: [
        {
          nombreMenu: "HOGAR",
          link: "./"
        },
        {
          nombreMenu: "ACERCA DE",
          children: [
            {
              nombreMenu: "HISTORIA",
              link: "#!/Historia"
            },
            {
              nombreMenu: "CONTACTO",
              link: "#!/Contacto"
            },
            {
              nombreMenu: "POLITICA DE PRIVACIDAD",
              link: "#!/Politicas"
            }
          ]
        },
        {
          nombreMenu: "HISTORIA",
          link: "#!/Historia"
        },
        {
          nombreMenu: "BLOG",
          link: "#!/Blog"
        },
        {
          nombreMenu: "CONTACTO",
          link: "#!/Contacto"
        },
      ]
    },
    view: () => [
      m("div", { "style": { "padding-top": "15px", "padding-right": "0px", "padding-left": "0px", "padding-bottom": "0px", "flex": "0 0 auto", "justify-content": "center", "position": "relative", "margin": "0px", "box-sizing": "border-box", "background-color": "black" } },
        m("div", { "style": { "background-color": "black", "max-width": "1200px", "padding-right": "15px", "padding-left": "15px", "margin-left": "auto", "margin-right": "auto", "margin": "0px", "padding": "0px 15px", "width": "100%", "box-sizing": "border-box" } },
          m("div", { "style": { "margin-left": "-15px", "margin-right": "-15px", "padding": "0px", "display": "flex", "flex-wrap": "wrap", "box-sizing": "border-box" } },
            [
              m("div", { "style": { "padding-right": "15px", "padding-left": "15px", "padding-bottom": "0px", "padding-top": "0px", "justify-content": "center", "display": "flex", "flex-direction": "column", "position": "relative", "margin": "0px", "width": "100%", "min-height": "1px", "box-sizing": "border-box" } },
                m("div", { "style": { "padding-bottom": "15px", "text-align": "center", "padding-right": "0px", "padding-left": "0px", "padding-top": "0px", "font-size": "0px", "flex": "0 0 auto", "position": "relative", "margin": "0px", "box-sizing": "border-box" } },
                  m("a", { "href": "/", "style": { "position": "relative", "overflow": "hidden", "transition": "all 0.3s ease 0s", "display": "inline-block", "max-width": "100%", "text-decoration": "none solid rgb(51, 122, 183)", "color": "rgb(51, 122, 183)", "margin": "0px", "padding": "0px", "box-sizing": "border-box", "background-color": "rgba(0, 0, 0, 0)" } },
                    m("img", { "src": this.state.model.imagen, "data-id": "251", "title": "", "width": "171", "height": "42", "alt": "", "style": { "transition": "all 0.3s ease 0s", "width": "100%", "max-width": "100%", "height": "auto", "margin": "0px", "padding": "0px", "box-sizing": "border-box", "vertical-align": "middle", "border": "0px none rgb(51, 122, 183)" } })
                  )
                )
              ),
              m("div", { "style": { "padding-right": "15px", "padding-left": "15px", "padding-bottom": "0px", "padding-top": "0px", "justify-content": "center", "display": "flex", "flex-direction": "column", "position": "relative", "margin": "0px", "width": "100%", "min-height": "1px", "box-sizing": "border-box" } },
                m("div", { "style": { "padding-right": "0px", "padding-left": "0px", "padding-bottom": "0px", "padding-top": "0px", "flex": "0 0 auto", "justify-content": "center", "position": "relative", "margin": "0px", "box-sizing": "border-box" } },
                  m("div", { "style": { "max-width": "1200px", "padding-right": "0px", "padding-left": "0px", "margin-left": "auto", "margin-right": "auto", "margin": "0px", "padding": "0px", "width": "100%", "box-sizing": "border-box" } },
                    m("div", { "style": { "margin-left": "-15px", "margin-right": "-15px", "padding": "0px", "display": "flex", "flex-wrap": "wrap", "box-sizing": "border-box" } },
                      [
                        m("div", { "style": { "padding-right": "15px", "padding-left": "15px", "padding-bottom": "0px", "padding-top": "0px", "justify-content": "center", "display": "flex", "flex-direction": "column", "position": "relative", "margin": "0px", "width": "100%", "min-height": "1px", "box-sizing": "border-box" } },
                          m("div", { "style": { "padding-bottom": "15px", "text-align": "center", "padding-right": "0px", "padding-left": "0px", "padding-top": "0px", "flex": "0 0 auto", "position": "relative", "margin": "0px", "box-sizing": "border-box" } },
                            [
                              m("button", {
                                "onclick": () => { showMenu = !showMenu },
                                "style": {"color": "rgb(255, 255, 255)", "background-color": "rgb(49, 49, 49)", "display": "inline-flex", "align-items": "center", "width": "40px", "height": "40px", "padding": "0px 8px", "text-align": "center", "text-decoration": "none solid rgb(255, 255, 255)", "margin": "0px", "box-sizing": "border-box",}
                              },
                                m("svg", {"class": "icon icon-tabler icon-tabler-menu-2", "xmlns": "http://www.w3.org/2000/svg", "width": "32", "height": "32", "viewBox": "0 0 24 24", "stroke-width": "1.5", "stroke": "#ffffff", "fill": "none", "stroke-linecap": "round", "stroke-linejoin": "round", "style": { "font-size": "24px", "line-height": "40px", "margin": "0px", "padding": "0px", "box-sizing": "border-box", "display": "inline-block", "font-style": "normal", "font-variant": "normal", "font-kerning": "auto", "font-optical-sizing": "auto", "font-feature-settings": "normal", "font-variation-settings": "normal", "font-weight": "400", "font-stretch": "100%", "font-family": "FontAwesome", "text-rendering": "auto", "-webkit-font-smoothing": "antialiased" }
                                },
                                  [
                                    m("path", { "stroke": "none", "d": "M0 0h24v24H0z", "fill": "none" }),
                                    m("path", { "d": "M4 6l16 0" }),
                                    m("path", { "d": "M4 12l16 0" }),
                                    m("path", { "d": "M4 18l16 0" })
                                  ]
                                )
                              ),
                              m("ul", {
                                "style": {
                                  "display": showMenu ? "block" : "none", "position": "absolute", "z-index": "999", "left": "0px", "right": "0px", "margin": "0px", "padding": "0px", "box-sizing": "border-box", "background-color": "white"
                                }
                              }, [
                                [this.state.model.items.map(item => m(OpcionesMenuMobile, { nombreMenu: item.nombreMenu, link: item.link, children: item.children })
                                )]
                              ]
                              ),
                              m("div", { "style": { "padding-right": "15px", "padding-left": "15px", "padding-bottom": "0px", "padding-top": "0px", "justify-content": "center", "display": "flex", "flex-direction": "column", "position": "relative", "margin": "0px", "width": "100%", "min-height": "1px", "box-sizing": "border-box", "z-index": "350" } },
                                m("div", { "style": { "padding-bottom": "15px", "text-align": "center", "padding-right": "0px", "padding-left": "0px", "padding-top": "0px", "position": "relative", "margin": "0px", "box-sizing": "border-box" } },
                                  m("a", { "href": this.state.model.linkContacto, "data-action": "page", "style": { "padding": "12px 10px", "font-size": "12px", "min-width": "120px", "font-family": "Poppins, sans-serif", "font-weight": "500", "font-style": "normal", "color": "rgb(39, 39, 39)", "background-color": "rgb(255, 255, 255)", "border-color": "rgba(0, 0, 0, 0)", "position": "relative", "text-align": "center", "z-index": "1", "transition": "all 0.3s ease 0s", "line-height": "14px", "border": "1px solid rgba(0, 0, 0, 0)", "display": "inline-block", "cursor": "pointer", "text-decoration": "none solid rgb(39, 39, 39)", "margin": "0px", "box-sizing": "border-box" } },
                                    [
                                      m("span", { "style": { "display": "none", "margin": "0px", "padding": "0px", "box-sizing": "border-box", "font-style": "normal", "font-variant": "normal", "font-kerning": "auto", "font-optical-sizing": "auto", "font-feature-settings": "normal", "font-variation-settings": "normal", "font-weight": "400", "font-stretch": "100%", "line-height": "12px", "font-family": "FontAwesome", "font-size": "12px", "text-rendering": "auto", "-webkit-font-smoothing": "antialiased" } }),
                                      m("span", { "style": { "display": "none", "border": "0px none rgb(39, 39, 39)", "margin": "0px", "transition": "border-color 0.5s ease 0s", "padding": "0px", "box-sizing": "border-box" } }),
                                      m("span", { "style": { "text-decoration": "none solid rgb(39, 39, 39)", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                                        this.state.model.botonCotizacion
                                      )
                                    ]
                                  )
                                )
                              )
                            ]
                          )
                        )
                      ]
                    )
                  )
                )
              )
            ]
          )
        )
      )
    ]
  }


function OpcionesMenuMobile() {
  let showChildren = false; // Variable para controlar la visibilidad de los submenús

  return {
    view: ({ attrs }) => [
      m("li", {
        "class": "opcionMenuMobile", // Agregar la clase 'active' si el menú está activo
        "style": {
          "position": "relative", "box-sizing": "border-box", "borderBottom": showChildren ? "5px solid white" : "none" // Agregar borde inferior blanco cuando se muestra el submenu
        },
        onclick: () => {
          showChildren = !showChildren;
        }
      }, [
        m("a", {
          "href": attrs.link, "style": {
            "font-size": "16px", "font-family": "Poppins, sans-serif", "font-weight": "400", "font-style": "normal", "color": "black", "text-decoration": "none solid rgb(49, 49, 49)", "background-color": "rgba(0, 0, 0, 0)", "line-height": "16px", "padding": "15px 18px", "position": "relative", "display": "block", "text-align": "left", "transition": "all 0.3s ease 0s", "z-index": "555", "letter-spacing": "normal", "margin": "0px", "box-sizing": "border-box"
          }
        }, attrs.nombreMenu),

        attrs.children && showChildren && m("ul", {
          "style": {
            "background-color": "rgb(255, 255, 255)", "border-color": "rgba(0, 0, 0, 0)", "padding": "18px 30px", "box-shadow": "rgba(136, 136, 136, 0.26) 0px 2px 12px 0px", "display": "block", "position": "absolute", "z-index": "999", "margin": "0px", "box-sizing": "border-box", "min-width": "100%"
          }
        }, attrs.children.map(child => m(OpcionesSubMenu, child)))
      ])
    ]
  }

  function OpcionesSubMenu() {
    return {
      view: ({ attrs }) => [
        m("li", { "style": { "display": "block", "position": "relative", "margin": "0px", "padding": "0px", "box-sizing": "border-box", "z-index": "9999" } },
          m("a", { "href": attrs.link, "data-action": "page", "style": { "font-size": "14px", "font-family": "Poppins, sans-serif", "font-weight": "400", "font-style": "normal", "color": "rgb(0, 0, 0)", "text-decoration": "none solid rgb(49, 49, 49)", "background-color": "rgba(0, 0, 0, 0)", "line-height": "16px", "padding": "10px 18px", "position": "relative", "display": "block", "text-align": "left", "transition": "all 0.3s ease 0s", "z-index": "1", "letter-spacing": "normal", "margin": "0px", "box-sizing": "border-box" } },
            attrs.nombreMenu
          )
        )
      ]
    }
  }
  
}
}

//-----------------FOOTER
function Footer() {
  return {
    model: {
      ImagenFondo: "assets/mt-2288-home-bg5.jpg",
      Texto: "CONECTÉMONOS EN LAS REDES SOCIALES"
    },
    view: () => [
      m("div", { "style": { "display": "flex", "justify-content": "center", "background-image": "url('" + this.state.model.ImagenFondo + "')", "background-position": "center", "background-repeat": "no-repeat", "background-size": "cover", "padding-right": "0px", "padding-left": "0px", "padding-bottom": "15px", "padding-top": "80px", "position": "relative", "margin": "0px", "padding": "80px 0px 15px", "box-sizing": "border-box" } },
        m("div", { "style": { "max-width": "1200px", "padding-right": "15px", "padding-left": "15px", "padding": "0px 15px", "width": "100%", "box-sizing": "border-box" } },
          m("div", { "style": { "padding": "0px", "display": "flex", "flex-wrap": "wrap", "box-sizing": "border-box" } },
            m("div", { "style": { "flex": "0 0 100%", "padding-right": "15px", "padding-left": "15px", "padding": "0px 15px", "margin": "0px", "position": "relative", "width": "100%", "min-height": "1px", "box-sizing": "border-box" } },
              [
                m("div", { "style": { "padding-right": "0px", "padding-left": "0px", "padding-bottom": "40px", "padding-top": "0px", "position": "relative", "margin": "0px", "box-sizing": "border-box" } },
                  m("div", { "style": { "padding": "0px 1px", "margin": "0px", "box-sizing": "border-box" } },
                    m("p", { "style": { "text-align": "center", "font-weight": "500", "font-style": "normal", "font-family": "Montserrat, sans-serif", "color": "rgb(0, 0, 0)", "font-size": "36px", "letter-spacing": "normal", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                      m("span", { "style": { "color": "rgb(255, 255, 255)", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                        this.state.model.Texto
                      )
                    )
                  )
                ),
                m("div", { "style": { "padding-right": "0px", "padding-left": "0px", "padding-bottom": "40px", "padding-top": "0px", "list-style": "outside none none", "font-size": "0px", "text-align": "center", "position": "relative", "margin": "0px", "box-sizing": "border-box" } },
                  m("ul", { "style": { "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                    [
                      m("li", { "style": { "margin-right": "5px", "margin-left": "5px", "margin-bottom": "0px", "display": "inline-block", "vertical-align": "top", "padding": "0px", "box-sizing": "border-box" } },
                        m("a", { "href": "#", "target": "_self", "style": { "font-size": "16px", "width": "40px", "height": "40px", "border-width": "1px", "border-radius": "3px", "border-style": "solid", "color": "rgb(255, 255, 255)", "background-color": "rgba(0, 0, 0, 0)", "border-color": "rgb(255, 255, 255)", "display": "flex", "justify-content": "center", "align-items": "center", "position": "relative", "transition": "all 0.4s ease 0s", "overflow": "hidden", "text-decoration": "none solid rgb(255, 255, 255)", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                          m("span", { "style": { "margin": "0px", "padding": "0px", "box-sizing": "border-box", "display": "block", "font-style": "normal", "font-variant": "normal", "font-kerning": "auto", "font-optical-sizing": "auto", "font-feature-settings": "normal", "font-variation-settings": "normal", "font-weight": "400", "font-stretch": "100%", "line-height": "16px", "font-family": "FontAwesome", "font-size": "16px", "text-rendering": "auto", "-webkit-font-smoothing": "antialiased" } },
                            m("svg", { "class": "icon icon-tabler icon-tabler-brand-facebook", "xmlns": "http://www.w3.org/2000/svg", "width": "24", "height": "24", "viewBox": "0 0 24 24", "stroke-width": "1.5", "stroke": "#ffffff", "fill": "none", "stroke-linecap": "round", "stroke-linejoin": "round" },
                              [
                                m("path", { "stroke": "none", "d": "M0 0h24v24H0z", "fill": "none" }),
                                m("path", { "d": "M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" })
                              ]
                            )
                          )
                        )
                      ),
                      m("li", { "style": { "margin-right": "5px", "margin-left": "5px", "margin-bottom": "0px", "display": "inline-block", "vertical-align": "top", "padding": "0px", "box-sizing": "border-box" } },
                        m("a", { "href": "#", "target": "_self", "style": { "font-size": "16px", "width": "40px", "height": "40px", "border-width": "1px", "border-radius": "3px", "border-style": "solid", "color": "rgb(255, 255, 255)", "background-color": "rgba(0, 0, 0, 0)", "border-color": "rgb(255, 255, 255)", "display": "flex", "justify-content": "center", "align-items": "center", "position": "relative", "transition": "all 0.4s ease 0s", "overflow": "hidden", "text-decoration": "none solid rgb(255, 255, 255)", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                          m("span", { "style": { "margin": "0px", "padding": "0px", "box-sizing": "border-box", "display": "block", "font-style": "normal", "font-variant": "normal", "font-kerning": "auto", "font-optical-sizing": "auto", "font-feature-settings": "normal", "font-variation-settings": "normal", "font-weight": "400", "font-stretch": "100%", "line-height": "16px", "font-family": "FontAwesome", "font-size": "16px", "text-rendering": "auto", "-webkit-font-smoothing": "antialiased" } },
                            m("svg", { "class": "icon icon-tabler icon-tabler-brand-telegram", "xmlns": "http://www.w3.org/2000/svg", "width": "24", "height": "24", "viewBox": "0 0 24 24", "stroke-width": "1.5", "stroke": "#ffffff", "fill": "none", "stroke-linecap": "round", "stroke-linejoin": "round" },
                              [
                                m("path", { "stroke": "none", "d": "M0 0h24v24H0z", "fill": "none" }),
                                m("path", { "d": "M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" })
                              ]
                            )
                          )
                        )
                      ),
                      m("li", { "style": { "margin-right": "5px", "margin-left": "5px", "margin-bottom": "0px", "display": "inline-block", "vertical-align": "top", "padding": "0px", "box-sizing": "border-box" } },
                        m("a", { "href": "#", "target": "_self", "style": { "font-size": "16px", "width": "40px", "height": "40px", "border-width": "1px", "border-radius": "3px", "border-style": "solid", "color": "rgb(255, 255, 255)", "background-color": "rgba(0, 0, 0, 0)", "border-color": "rgb(255, 255, 255)", "display": "flex", "justify-content": "center", "align-items": "center", "position": "relative", "transition": "all 0.4s ease 0s", "overflow": "hidden", "text-decoration": "none solid rgb(255, 255, 255)", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                          m("span", { "style": { "margin": "0px", "padding": "0px", "box-sizing": "border-box", "display": "block", "font-style": "normal", "font-variant": "normal", "font-kerning": "auto", "font-optical-sizing": "auto", "font-feature-settings": "normal", "font-variation-settings": "normal", "font-weight": "400", "font-stretch": "100%", "line-height": "16px", "font-family": "FontAwesome", "font-size": "16px", "text-rendering": "auto", "-webkit-font-smoothing": "antialiased" } },
                            m("svg", { "class": "icon icon-tabler icon-tabler-brand-instagram", "xmlns": "http://www.w3.org/2000/svg", "width": "24", "height": "24", "viewBox": "0 0 24 24", "stroke-width": "1.5", "stroke": "#ffffff", "fill": "none", "stroke-linecap": "round", "stroke-linejoin": "round" },
                              [
                                m("path", { "stroke": "none", "d": "M0 0h24v24H0z", "fill": "none" }),
                                m("path", { "d": "M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" }),
                                m("path", { "d": "M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" }),
                                m("path", { "d": "M16.5 7.5l0 .01" })
                              ]
                            )
                          )
                        )
                      )
                    ]
                  )
                ),
                m("div", { "data-visible-on": "-", "data-animation": "", "style": { "padding-right": "0px", "padding-left": "0px", "padding-bottom": "0px", "padding-top": "40px", "position": "relative", "margin": "0px", "box-sizing": "border-box" } },
                  m("div", { "style": { "padding": "0px 1px", "margin": "0px", "box-sizing": "border-box" } },
                    m("p", { "style": { "text-align": "center", "font-weight": "400", "font-style": "normal", "font-family": "'Open Sans', sans-serif", "color": "rgb(255, 255, 255)", "font-size": "14px", "line-height": "21px", "letter-spacing": "normal", "margin": "0px", "padding": "0px", "box-sizing": "border-box" } },
                      [
                        "Copyright © 2022. ",
                        m("a", { "target": "_self", "href": "/privacy-policy/", "data-action": "page", "data-id": "29", "style": { "color": "rgb(255, 255, 255)", "text-decoration": "none solid rgb(255, 255, 255)", "font-weight": "400", "font-style": "normal", "transition": "all 0.3s ease 0s", "margin": "0px", "padding": "0px", "box-sizing": "border-box", "background-color": "rgba(0, 0, 0, 0)" } },
                          "Todos los derechos reservados"
                        ),
                        "."
                      ]
                    )
                  )
                )
              ]
            )
          )
        )
      )
    ]
  }
}
