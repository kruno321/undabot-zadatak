<template>
  <v-form class="form" ref="form" v-model="valid" lazy-validation>
    <v-text-field
      solo
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <v-textarea
      solo
      v-model="message"
      :rules="messageRules"
      name="input-7-4"
      label="Message"
    ></v-textarea>

    <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
      Submit
    </v-btn>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    message: "",
    messageRules: [
      v => !!v || "Message is required",
      v => (v && v.length >= 30) || "Name must be longer than 30 characters"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ]
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    }
  }
};
</script>
<style>
.form {
  margin: 60px auto;
  max-width: 700px;
}
</style>
