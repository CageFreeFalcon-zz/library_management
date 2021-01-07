<template>
  <v-container class="h-100-p">
    <v-row class="dashboard h-100-p align-content-start">
      <v-col cols="4">
        <v-card rounded="xl" elevation="5">
          <v-card-text class="p-relative text-body-1" style="color: #205072">
            <h4>Books</h4>
            <h1>Counts</h1>
            <h1 class="text-right mt-3">3346</h1>
            <div class="p-absolute quarter_icon">
              <v-icon dark size="sm">fas fa-plus</v-icon>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-card rounded="xl" elevation="5">
          <v-card-text class="p-relative text-body-1" style="color: #205072">
            <h4>Books</h4>
            <h1>Issued</h1>
            <h1 class="text-right mt-3">3346</h1>
            <div class="p-absolute quarter_icon">
              <v-icon dark size="sm">fas fa-plus</v-icon>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-card rounded="xl" elevation="5">
          <v-card-text class="p-relative text-body-1" style="color: #205072">
            <h4>Users</h4>
            <h1>Registered</h1>
            <h1 class="text-right mt-3">3346</h1>
            <div class="p-absolute quarter_icon">
              <v-icon dark size="sm">fas fa-plus</v-icon>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="6">
        <v-img
          src="@/assets/images/dashboard_image.svg"
          contain="true"
          height="450px"
        ></v-img>
      </v-col>
      <v-col cols="6" class="align-self-stretch">
        <v-card rounded="xl" elevation="5">
          <v-card-text class="p-relative text-body-1" style="color: #205072">
            <h1>Notifications</h1>
            <div class="p-absolute quarter_icon">
              <v-icon dark size="sm">fas fa-plus</v-icon>
            </div>
            <v-img
              src="@/assets/images/noNotification.png"
              class="mx-5 mt-10"
            ></v-img>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Dashboard",
  data: () => ({})
};
</script>

<style lang="scss"></style>
