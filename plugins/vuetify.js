import jeansFold from '~/components/icons/IconJeansFold.vue'
import paintLogo from '~/components/icons/IconPaintLogo.vue'
import logo from '~/components/icons/IconLogo.vue'

export default {
  theme: {
    dark: false,
    themes: {
      dark: {
        primary: '#24292E',
        accent: '#90A4AE',
        secondary: '#606670',
        success: '#77DD77',
        info: '#779ECB',
        warning: '#F8C050',
        error: '#FE6B64'
      },
      light: {
        primary: '#24292E',
        accent: '#607D8B',
        secondary: '#404448',
        success: '#77DD77',
        info: '#779ECB',
        warning: '#F8C050',
        error: '#FE6B64'
      }
    }
  },
  icons: {
    iconfont: 'fa',
    values: {
      jeansFold: {
        component: jeansFold
      },
      paintLogo: {
        component: paintLogo
      },
      logo: {
        component: logo
      }
    }
  }
}
