<template>
  <q-page>
    <div class="row q-mb-sm">
      <div class="col bg-primary">1</div>
      <div class="col col-6 bg-secondary">2</div>
      <div class="col bg-accent">3</div>
    </div>
    <div class="row q-mb-sm">
      <div class="col bg-primary">1</div>
      <div class="col col-8 bg-secondary">2</div>
      <div class="col bg-accent">3</div>
    </div>
    <q-separator spaced />
    <div class="row q-mb-sm">
      <div class="col-12 col-sm-6 col-md-4 bg-primary">1</div>
      <div class="col-12 col-sm-6 col-md-4 bg-secondary">2</div>
    </div>

    <q-separator spaced />
    <div class="row q-mb-sm">
      <div class="square-box bg-primary">1</div>
      <div class="square-box bg-secondary">2</div>
      <div class="square-box bg-accent">3</div>
    </div>
  </q-page>
</template>

<script setup>
defineOptions({
  name: 'FlexPage',
})
</script>
<style>
.col,
.col-4,
.col-6,
.col-8,
.col-12 {
  background-color: #f1f1f1;
  border: 1px solid #d3d3d3;
  padding: 5px;
  height: 150px;
}
.square-box {
  width: 50px;
  height: 50px;
  background-color: #f1f1f1;
  border: 1px solid #d3d3d3;
  padding: 5px;
}
</style>
