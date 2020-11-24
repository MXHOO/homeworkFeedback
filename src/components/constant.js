import { computed, ref } from 'vue'
const count = ref('aaa')
  const computeVal = computed(() => {
    return count.value + 'bbbb'
  })
export {
  count,
  computeVal
}