<template>
  <div class="container-fluied">
    <div class="row">
      <div>
        <form class="mt-4">
          <!-- 2 column grid layout with text inputs for the first and last names -->
          <div class="row mb-4">
            <div class="col">
              <div class="form-outline">
                <input
                  autocomplete="on"
                  v-model="edit.First_name"
                  type="text"
                  id="form6Example1"
                  class="form-control"
                />
                <label class="form-label" for="form6Example1">First name</label>
              </div>
            </div>
            <div class="col">
              <div class="form-outline">
                <input
                  autocomplete="on"
                  v-model="edit.last_name"
                  type="text"
                  id="form6Example2"
                  class="form-control"
                />
                <label class="form-label" for="form6Example2">Last name</label>
              </div>
            </div>
          </div>

          <!-- Email input -->
          <div class="form-outline mb-4">
            <input
              v-model="edit.Email"
              type="email"
              id="form6Example5"
              class="form-control"
            />
            <label class="form-label" for="form6Example5">Email</label>
          </div>

          <!-- Number input -->
          <div class="form-outline mb-4">
            <input
              autocomplete="on"
              v-model="edit.job"
              type="text"
              id="form6Example6"
              class="form-control"
            />
            <label class="form-label" for="form6Example6">job</label>
          </div>

          <!-- Text input -->
          <div class="form-outline mb-4">
            <input
              autocomplete="on"
              v-model="edit.address"
              type="text"
              id="form6Example4"
              class="form-control"
            />
            <label class="form-label" for="form6Example4">Address</label>
          </div>

          <!-- Text input -->
          <div class="form-outline mb-4">
            <input
              autocomplete="on"
              v-model="edit.about"
              type="text"
              id="form6Example3"
              class="form-control"
            />
            <label class="form-label" for="form6Example3">About</label>
          </div>

          <!-- Submit button -->
          <button @click="userEdit" class="btn btn-primary btn-block mb-4">
            Edit
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import UserService from "../services/userService.js";
export default {
  data() {
    return {
      edit: {
        Email: "",
        First_name: "",
        last_name: "",
        job: "",
        address: "",
        about: "",
      }
    };
  },
  methods: {
    userEdit() {
      UserService.editProfileJs(this.edit)
    },
  },
};
</script>
<style scoped>
form {
  border: 1px solid #ddd;
  padding: 10px;
}
</style>