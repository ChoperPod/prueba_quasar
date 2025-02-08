<template>
  <q-page class="q-ma-md">
    <span class="text-h3">Forms</span>
    <q-separator spaced />
    <div class="row justify-center">
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-xs col-sm-12 col-md-6 q-pt-xl">
        <q-input
          filled
          v-model="userForm.email"
          label="Correo Electronico"
          type="email"
          lazy-rules
          no-error-icon
          :rules="[(val) => (val && val.length > 0) || 'Este campo es obligatorio']"
        />

        <q-input
          filled
          type="password"
          v-model="userForm.password"
          label="Contraseña"
          lazy-rules
          no-error-icon
          :rules="[(val) => (val && val.length > 0) || 'Este campo es obligatorio']"
        />

        <q-input
          filled
          type="password"
          v-model="userForm.password2"
          label="Repetir Contraseña"
          lazy-rules
          no-error-icon
          :rules="[(val) => (val && val.length > 0) || 'Este campo es obligatorio']"
        />
        <q-separator spaced />
        <q-toggle
          v-model="userForm.conditions"
          label="Acepto el uso que se le dara a la informacion proporcionada"
        />
        <q-separator spaced />
        <div class="row justify-end">
          <q-btn label="Submit" type="submit" color="primary" :disable="!isFormValid" />
          <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script setup>
import { ref, computed } from 'vue'
defineOptions({
  name: 'FormsPage',
})
const userForm = ref({
  email: '',
  password: '',
  password2: '',
  conditions: false,
  errorInConditions: false,
})
function onReset() {
  userForm.value.email = ''
  userForm.value.password = ''
  userForm.value.password2 = ''
  userForm.value.conditions = false
  userForm.value.errorInConditions = false
}
function onSubmit() {
  //borra los campos
  console.log(userForm.value)
  // onReset()
  return
}

const isFormValid = computed(() => {
  return (
    userForm.value.email &&
    userForm.value.password &&
    userForm.value.password === userForm.value.password2 &&
    userForm.value.conditions
  )
})
</script>
