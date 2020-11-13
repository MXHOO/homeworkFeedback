<template>
  <div>1111111</div>
  <div>{{msg}}</div>
  <button @click="inc">{{count}}</button>
  <h2>{{computeCount}}</h2>
  <h2>{{obj.name}}</h2>
</template>

<script>
import { ref, isRef, computed, watch, reactive, watchEffect } from 'vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup (props, cxt) {
    let count = ref(0)
    let inc = () => {
      count.value++
    }
    let computeCount = computed(() => {
      return count.value * 2
    })
    watch(count, (newVal) => {
      if (newVal > 10) {
        count.value = "已经超出范围！！！"
      }
    })
    watchEffect(() => {
      console.log('watchEffect')
    })
    let obj = reactive({
      name: '张三',
      age: 12
    })
    obj.name = '里斯'
    console.log('ref', count.value, isRef(count))
    console.log('props-cxt', props, cxt)
    return {
      count,
      inc,
      computeCount,
      obj
    }
  }
}
</script>

<style scoped>
</style>
