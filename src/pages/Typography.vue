<template>
  <q-page class="flex column q-pa-xl">
    <span class="text-h1">Headline 1</span>
    <span class="text-h2">Headline 2</span>
    <span class="text-h3">Headline 3</span>
    <span class="text-h4">Headline 4</span>
    <span class="text-h5">Headline 5</span>
    <span class="text-h6">Headline 6</span>
    <q-separator />
    <span class="text-subtitle1">Subtitle 1</span>
    <span class="text-subtitle2">Subtitle 2</span>
    <q-separator />
    <p class="text-body1">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel eligendi totam eos obcaecati sunt
      quidem voluptate quos ipsa ex voluptatibus fuga laborum eius et nisi pariatur temporibus,
      veniam quibusdam? Id.
    </p>
    <p class="text-body2">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore aperiam magni
      necessitatibus laudantium. Impedit doloribus facere dolores a neque? Neque dignissimos,
      reprehenderit hic ab tenetur fugiat quia labore possimus. Fugit.
    </p>
    <q-separator />
    <span class="text-caption">Caption</span>
    <span class="text-overline">Overline</span>
    <q-separator />
    <span class="text-weight-thin">lorem ipsum line</span>
    <span class="text-weight-light">lorem ipsum line</span>
    <span class="text-weight-regular">lorem ipsum line</span>
    <span class="text-weight-medium">lorem ipsum line</span>
    <span class="text-weight-bold">lorem ipsum line</span>
    <span class="text-weight-black">lorem ipsum line</span>
    <q-separator />

    <q-btn
      color="primary"
      :label="sideMenuOpen ? 'Cerrar menu lateral' : 'Abrir menu lateral'"
      class="q-mt-md"
      @click="toggleSideMenu"
    />
  </q-page>
</template>

<script setup>
import { useUI } from 'src/composables/useUI'
defineOptions({
  name: 'TypographyPage',
})
const { sideMenuOpen, toggleSideMenu } = useUI()
</script>
