import Vue from 'vue'
import App from './App.vue'

import styled from 'styled-components'
import { space, layout, color } from 'styled-system'

const Box = styled.div`
  ${space}
  ${layout}
  ${color}
`

export default Box

Vue.config.productionTip = false

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
