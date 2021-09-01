import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'

config.autoAddCss = false

    import  { faTiktok as fortawesomefreebrandssvgicons_faTiktok } from '@fortawesome/free-brands-svg-icons'
    library.add(fortawesomefreebrandssvgicons_faTiktok)

    import  { faLightbulb as fortawesomefreesolidsvgicons_faLightbulb } from '@fortawesome/free-solid-svg-icons'
    library.add(fortawesomefreesolidsvgicons_faLightbulb)

Vue.component('fa', FontAwesomeIcon)
Vue.component('fa-layers', FontAwesomeLayers)
Vue.component('fa-layers-text', FontAwesomeLayersText)
