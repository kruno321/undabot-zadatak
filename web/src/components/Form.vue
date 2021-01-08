<template>
  <v-form class="form" ref="form" v-model="valid">
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
    <v-snackbar v-model="snackbar" :multi-line="true">
      <span v-html="snackbarText"></span>

      <template v-slot:action="{ attrs }">
        <v-btn color="red" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    message: "",
    messageRules: [
      v => !!v || "Message is required",
      v => (v && v.length >= 30) || "Message must be longer than 30 characters"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    snackbar: false,
    snackbarText: ""
  }),

  methods: {
    reset() {
      this.$refs.form.reset();
    },
    validate() {
      this.$refs.form.validate();
      if (this.valid) {
        this.$http
          .post(
            process.env.VUE_APP_API + "contact",
            {
              email: this.email,
              message: this.message
            },
            { headers: { "Content-Type": "application/json" } }
          )
          .then(response => {
            console.log(response);
            this.snackbar = true;
            this.snackbarText = response.data.msg;
            this.reset();
          })
          .catch(error => {
            console.log(error);
            this.snackbar = true;
            if (!error.response) {
              this.snackbarText = "Backend isn't working";
            }
            error.response.data.errors.forEach(error => {
              console.log(error);
              if (error.param === "email") {
                this.snackbarText += `Email is invalid <br>`;
              }
              if (error.param === "message") {
                this.snackbarText += `Message is invalid <br>`;
              }
            });
          });
      }
    }
  }
};
</script>
<style>
.form {
  margin: 60px auto;
  max-width: 700px;
}
.v-snack__content {
  white-space: pre-wrap;
}
</style>
