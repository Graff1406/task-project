<script setup>
import { reactive, ref } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { email, required, minLength } from "@vuelidate/validators";
import { useRouter } from "vue-router";

const router = useRouter();

const initialState = {
  name: "",
  email: "",
  select: null,
  checkbox: null,
};

const state = reactive({
  ...initialState,
});

const items = ref(["Item 1", "Item 2", "Item 3", "Item 4"]);

const rules = {
  name: { required, minLength: minLength(6) },
  email: { required, email },
};

const v$ = useVuelidate(rules, state);

// Methods

const onSubmit = async () => {
  const result = await v$.value.$validate();

  if (result) router.push("/game");
};
</script>

<template>
  <v-row class="d-flex justify-center mt-10">
    <v-col cols="8">
      <v-card class="pa-10">
        <form>
          <v-text-field
            v-model="state.name"
            :error-messages="v$.name.$errors.map((e) => e.$message)"
            :counter="10"
            label="Name"
            required
            @input="v$.name.$touch"
            @blur="v$.name.$touch"
          ></v-text-field>

          <v-text-field
            v-model="state.email"
            :error-messages="v$.email.$errors.map((e) => e.$message)"
            label="E-mail"
            required
            @input="v$.email.$touch"
            @blur="v$.email.$touch"
          ></v-text-field>

          <v-btn class="me-4" @click="onSubmit"> submit </v-btn>
        </form>
      </v-card>
    </v-col>
  </v-row>
</template>
