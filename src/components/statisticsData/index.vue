<template>
  <div></div>
  <div></div>
</template>
<script>
import {echarts} from 'echarts'
import { ref } from 'vue'
export default {
  setup() {
    const data = ref(1)
    console.log(data)
    console.log(echarts)
  }
}
</script>