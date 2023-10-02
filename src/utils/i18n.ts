import i18next from 'i18next'
import I18NextVue from 'i18next-vue'
import LanguageDetector from 'i18next-browser-languagedetector'


i18next
  .use(LanguageDetector)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,

    },
    resources: {
      en: {
        translation: {
          "whoami": "I'm a passionate software engineer, who loves to solve problems and build useful things " +
            "that make people's lives easier. I'm a quick learner and I'm always looking for new " +
            "challenges and opportunities to grow as a person and as a professional.",
          "more": "More",
          "whativebeento": "What I've been up to",

          "project.deepview.title": "DeepView",
          "project.deepview.desc": "Web application for detection of biomass in underwater images. Made in conjunction with members of the Department of Marine Biology of the University of La Laguna. " +
                                    "It consists of a backend made with Django and MongoDB, the processing of the images is done with OpenCV and the user interface is made with ReactJS and Redux. You can learn " +
                                    "more details in the <a href=\"https://www.mdpi.com/2076-3417/13/19/10870\">article published in the scientific journal Applied Sciences</a>",

          "project.pycture.title": "Pycture",
          "project.pycture.desc": "Pycture is a photo editor made in Python with the PyQT5 library. It has the basic functionalities of a photo editor, such as: " +
                                   "brightness, contrast, saturation, etc. It also has a very intuitive user interface, which allows the user to edit their photos in " +
                                   "a simple and fast way. Made in collaboration with <a href=\"https://github.com/Daniel-del-Castillo\">@Daniel-del-Castillo</a>.",
        },
      },

      es: {
        translation: {
          "whoami": "Soy un ingeniero de software apasionado, que adora resolver problemas y construir cosas útiles " +
            "que faciliten la vida de las personas. Aprendo rápido y siempre estoy buscando nuevos " +
            "desafíos y oportunidades para crecer como persona y como profesional.",
          "more": "Más",
          "whativebeento": "Proyectos recientes",
          
          "project.deepview.title": "DeepView",
          "project.deepview.desc": "Aplicación web para la detección de biomasa en imágenes submarinas. Realizada en conjunto con miembros del Departamento de Biología Marina de la Universidad de La Laguna. " +
                                   "Consta de un backend hecho con Django y MongoDB, el procesamiento de las imágenes se realiza con OpenCV y la interfaz de usuario está hecha con ReactJS y Redux. Puedes conocer " +
                                   "más detalles en el <a href=\"https://www.mdpi.com/2076-3417/13/19/10870\">artículo publicado en la revista científica Applied Sciences</a>",

          "project.pycture.title": "Pycture",
          "project.pycture.desc": "Pycture es un editor de fotografía hecho en Python con la librería PyQT5. Cuenta con las funcionalidades básicas de un editor de fotografía, como son: " +
                                  "ajuste de brillo, contraste, saturación, etc. Además, cuenta con una interfaz de usuario muy intuitiva, que permite al usuario editar sus fotografías de " +
                                  "manera sencilla y rápida. Hecho en colaboración con <a href=\"https://github.com/Daniel-del-Castillo\">@Daniel-del-Castillo</a>.",
            
      }
    }
  }
  })

export default function (app: any) {
  app.use(I18NextVue, { i18next })
}