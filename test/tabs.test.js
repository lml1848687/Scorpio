const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/tabs'
import TabsHead from '../src/tabs-head'
import TabsBody from '../src/tabs-body'
import TabsPane from '../src/tabs-pane'
import TabsItem from '../src/tabs-item'
Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-pane', TabsPane)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {
  it('存在.', () => {
    expect(Tabs).to.be.exist
  })
  it('子组件只能是tabs-head 和 tabs-body', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
        <g-tabs>
          <div>hi</div>
        </g-tabs>
      `
    const vm = new Vue({
      el: div
    })
  })

})