<template>
  <form>
    <v-alert outlined text :type="getmsgtype" rounded="pill" v-if="getmessage">
      {{ getmessage }}
    </v-alert>
    <v-row class="otp">
      <v-col cols="2" v-for="(f, i) in field" :key="i" class="px-2">
        <v-text-field
          height="70"
          rounded
          solo
          type="text"
          v-model="field[i]"
          ref="field"
          hide-details
          @input="gotonext(i)"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn text rounded color="info" @click="changeEmail">
          Change Email
        </v-btn>
      </v-col>
      <v-col class="text-right">
        <v-btn
          text
          rounded
          color="info"
          @click="resendCode"
          :loading="getloading"
        >
          Resend OTP
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn
          rounded
          large
          block
          color="primary"
          type="submit"
          height="60"
          class="grad-btn mb-5"
          @click="submitform"
        >
          Submit OTP
        </v-btn>
      </v-col>
    </v-row>
  </form>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import Forgot from "./Forgot";
import NewPassword from "./NewPassword";

export default {
  name: "Otp",
  data() {
    return {
      field: ["", "", "", "", "", ""],
      resendLoading: false
    };
  },
  computed: {
    ...mapGetters(["getloading", "getmsgtype", "getmessage"])
  },
  methods: {
    ...mapActions(["forgotPassword"]),
    ...mapMutations(["setOtp", "setAuthState", "setmessage"]),
    gotonext(i) {
      if (i < 5) {
        if (this.$refs["field"][i].$refs["input"].value !== "") {
          this.$refs["field"][i + 1].focus();
        }
      }
      if (i > 0) {
        if (this.$refs["field"][i].$refs["input"].value === "") {
          this.$refs["field"][i - 1].focus();
        }
      }
    },
    async submitform() {
      var otp = this.field.join("");
      this.setOtp(otp);
      this.setmessage({
        message: null,
        type: "error"
      });
      if (otp.length === 6) {
        this.setAuthState(NewPassword);
      } else {
        this.setmessage({
          message: "Enter a valid OTP",
          type: "error"
        });
      }
    },
    async resendCode() {
      await this.forgotPassword({
        email: this.$store.getters.getEmail
      });
    },
    changeEmail() {
      this.setmessage({
        message: null,
        type: "error"
      });
      this.setAuthState(Forgot);
    }
  },
  mounted() {
    this.$refs["field"].forEach(el => {
      el.$refs["input"].setAttribute("maxlength", 1);
    });
  }
};
</script>

<style scoped></style>
