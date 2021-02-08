<template>
  <EditContent ref="content"></EditContent>
</template>
<script>
import { provide, reactive, readonly, ref } from 'vue'
import EditContent from '../components/createWork/index.vue'
export default {
  name: 'Content',
  components: {
    EditContent
  },
  data () {
    return {
      src: 1
    }
  },
  setup () {
    const location = ref('-------')
    const geolocation = reactive({
      longitude: 90,
      latitude: 135
    })

    provide('location', readonly(location))
    provide('geolocation', geolocation)
  },
  methods: {
  },
  mounted () {
  }
}
</script>