<script setup>
import { ref, computed } from "vue";

const rowY = ref(5);
const colX = ref(5);

const square = computed(() => {
  return {
    x: +colX.value,
    y: +rowY.value ? +rowY.value : 1,
  };
});
</script>

<template>
  <v-row class="d-flex justify-center mt-10">
    <v-col cols="3">
      <v-card class="pa-8">
        <v-text-field v-model="rowY" v-mask="'##'" label="Row"></v-text-field>
        <v-text-field
          v-model="colX"
          v-mask="'##'"
          label="Column"
        ></v-text-field>
      </v-card>
    </v-col>
    <v-col cols="11">
      <v-card class="pa-10">
        <div
          v-for="row in square.y"
          :key="row"
          class="my-1 d-flex row-container"
          :class="{ square: !square.x, 'bg-black pa-2': square.x }"
        >
          <span class="d-flex align-center text-caption">{{
            `row-${row}`
          }}</span>
          <div
            v-for="col in square.x"
            :key="col"
            class="mx-1 d-flex align-center text-caption square bg-white hover"
          >
            {{ `col-${col}` }}
          </div>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>
<style scoped>
.row-container {
  overflow-x: auto;
}
.square {
  display: inline-block;
  min-width: 36px;
  max-width: 36px;
  height: 36px;
  border: 1px solid;
  transition: all 0.3s;
}
.bg-black {
  background-color: #000000;
}
.bg-white {
  background-color: #ffffff;
}
.hover:hover {
  filter: invert(1);
  cursor: pointer;
}
</style>
