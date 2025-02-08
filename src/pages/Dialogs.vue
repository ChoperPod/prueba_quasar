<template>
  <q-page class="q-pa-md">
    <div class="text-h3">Dialogs</div>
    <q-serparator spaced />
    <!-- <span v-if="name"> -->
    <div v-if="name" class="text-h6">Hello, {{ name }}</div>
    <q-serparator v-if="name" spaced />
    <!-- </span> -->
    <div class="q-pa-md q-gutter-sm">
      <q-btn label="Alert" color="primary" @click="alert" />
      <q-btn label="Confirm" color="primary" @click="confirm" />
      <q-btn label="Prompt" color="primary" @click="prompt" />
    </div>
  </q-page>
</template>

<script setup>
// import { name } from '@vue/eslint-config-prettier/skip-formatting'
import { useQuasar } from 'quasar'
import { ref } from 'vue'
defineOptions({
  name: 'DialogsPage',
})
const $q = useQuasar()
const name = ref('')
function alert() {
  $q.dialog({
    title: 'Alert',
    message: 'Some message',
  })
    .onOk(() => {
      // console.log('OK')
    })
    .onCancel(() => {
      // console.log('Cancel')
    })
    .onDismiss(() => {
      // console.log('I am triggered on both OK and Cancel')
    })
}

function confirm() {
  $q.dialog({
    title: 'Confirm',
    message: 'Would you like to turn on the wifi?',
    cancel: true,
    persistent: true,
  })
    .onOk(() => {
      // console.log('>>>> OK')
    })
    .onOk(() => {
      // console.log('>>>> second OK catcher')
    })
    .onCancel(() => {
      // console.log('>>>> Cancel')
    })
    .onDismiss(() => {
      // console.log('I am triggered on both OK and Cancel')
    })
}

function prompt() {
  $q.dialog({
    title: 'Prompt',
    message: 'What is your name?',
    prompt: {
      model: '',
      type: 'text', // optional
    },
    cancel: true,
    persistent: true,
  })
    .onOk((data) => {
      name.value = data
      console.log('>>>> OK, received', data)
    })
    .onCancel(() => {
      // console.log('>>>> Cancel')
    })
    .onDismiss(() => {
      // console.log('I am triggered on both OK and Cancel')
    })
}
</script>
