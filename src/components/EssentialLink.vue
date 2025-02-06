<template>
  <q-item clickable tag="a" @click="navigateToLink">
    <q-item-section v-if="props.icon" avatar>
      <q-icon :name="props.icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ props.title }}</q-item-label>
      <q-item-label caption>{{ props.caption }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup>
import { useRouter } from 'vue-router'
const props = defineProps({
  title: {
    type: String,
    required: true,
  },

  caption: {
    type: String,
    default: '',
  },

  link: {
    type: String,
    default: '#',
  },

  icon: {
    type: String,
    default: '',
  },
})
console.log(props)
const router = useRouter()
const navigateToLink = () => {
  if (props.link.startsWith('http')) {
    window.open(props.link, '_blank')
  } else {
    router.push(props.link)
  }
}
</script>
