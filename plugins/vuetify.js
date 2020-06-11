import jeansFold from '~/components/icons/IconJeansFold.vue'
import paintLogo from '~/components/icons/IconPaintLogo.vue'
import logo from '~/components/icons/IconLogo.vue'

export default {
  theme: {
    dark: false,
    themes: {
      dark: {
        primary: '#1d2021',
        accent: '#8ec07c',
        secondary: '#eddbb2',
        success: '#b8bb26',
        info: '#83a598',
        warning: '#fe8019',
        error: '#fb4934'
      },
      light: {
        primary: '#282828',
        accent: '#427b58',
        secondary: '#3c3836',
        success: '#79740e',
        info: '#076678',
        warning: '#af3a03',
        error: '#9d0006'
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
