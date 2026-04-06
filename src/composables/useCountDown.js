import { computed, onMounted, onUnmounted, ref } from 'vue'
import dayjs from 'dayjs'

export const useCountDown = () => {
  const time = ref(0)
  let timer = null
  const formatTime = computed(() => dayjs.unix(time.value).format('mm:ss'))

  const start = (currentTime) => {
    formatTime.value = currentTime
    timer = setInterval(() => {
      formatTime.value--
    }, 1000)
  }

  onUnmounted(() => {
    timer && clearInterval(timer)
  })
  return {
    formatTime,
    start,
  }
}
