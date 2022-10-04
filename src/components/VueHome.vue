<template lang="">
    <div>
        <div class="container">
           
            <card v-if="userILoggedIn" class="mt-3"
                 :email="email"
                 :firstName="firstName"
                 :lastName="lastName"> 
            </card>
             <div v-else>
                <h2>please LogIn</h2>
             </div>
            
        </div>
    </div>
</template>
<script>
import card from "./VueCard.vue";
import UserService from "../services/userService"
export default {
  data() {
    return {
      user: {},
      firstName: "",
      email: "",
      lastName: "",
    };
  },
  components: {
    card,
  },
  created() {
    if (!localStorage.getItem("x-access-token")) {
      this.$router.push("/");
      
    } else {
      this.getUserInfo();
      
    }
  },
  computed: {
    userILoggedIn() {
      return localStorage.getItem("x-access-token");
    }
  },
  methods: {
    getUserInfo() {
      UserService.getUserInfo().then((res)=>{
        this.user = res.data;
        this.firstName = res.data.first_name;
        this.email = res.data.email;
        this.lastName = res.data.last_name;
      })
    }
  },
};
</script>
<style>
</style>