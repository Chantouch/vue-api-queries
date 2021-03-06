import type { ValidatorType } from './core/Validator'
import BaseProxy from './core/BaseProxy'
import Validator from './core/Validator'
import BaseTransformer from './core/BaseTransformer'
import PaginationTransformer from './core/PaginationTransformer'

// augment typings of Vue.js
import './vue'

export type Errors = ValidatorType
export type { ValidatorType }

class VueApiQueries {
  install(Vue: any) {
    Vue.mixin({
      beforeCreate() {
        this.$options.$errors = {}
        Vue.util.defineReactive(this.$options, '$errors', Validator)
        if (!this.$options.computed) {
          this.$options.computed = {}
        }
        this.$options.computed.$errors = function () {
          return this.$options.$errors
        }
      },
    })
  }
}
export { BaseProxy, BaseTransformer, PaginationTransformer, Validator }
export default new VueApiQueries()
