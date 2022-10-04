<template>
  <div class="container mt-3">
   <div id="registerDiv">
     <form v-if="isRgister">
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
        class="form-control"
        autocomplete="on"
        placeholder="email"
        type="email"
        name="email"
        v-model="register.email"
        />
        <small id="emailHelp" class="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>

      <div class="form-group">
        <label for="firstName">firstName</label>
        <input
        class="form-control"
        autocomplete="on"
        placeholder="firstName"
        type="text"
        name="firstName"
        v-model="register.firstName"
        />
      </div>

      <div class="form-group">
        <label for="firstName">lastName</label>
        <input
        class="form-control"
        autocomplete="on"
        placeholder="lastName"
        type="text"
        name="lastName"
        v-model="register.lastName"
      />
      </div>
      <div>
        <label for="firstName">password</label>
        <input
        class="form-control"
        autocomplete="on"
        placeholder="password"
        type="password"
        name="password"
        v-model="register.password"
        />
      </div>
      <button class="btn btn-primary mt-3" @click.prevent="callRegisterApi">register</button>

      <div id="switch" class="d-flex justify-content-between">
        <p class="pl-2">Do you have an account?</p>
        <span id="spa" @click="goToLogIn">log in</span>
      </div>
    </form>
   </div>
   
    <div id="logInDiv" v-if="isLogin">
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            autocomplete="on"
            v-model="login.email"
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" class="form-text text-muted"
            >We'll never share your email with anyone else.</small
          >
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            autocomplete="on"
            v-model="login.password"
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        
        <button @click.prevent="callLogInAPA" class="btn btn-primary mt-3">Log In</button>
      </form>
      <div id="switch" class="d-flex justify-content-around">
        <p class="pl-2">Don't have an account?</p>
        <span id="spa" @click="goToRegister">create one</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line
  name: "User",
  data() {
    return {
      register: {
        email: "",
        firstName: "",
        lastName: "",
        password: "",
      },
      login :{
        email : "",
        password : ""
      },

      isRgister: false,
      isLogin: true,
    };
  },
  methods: {
    callRegisterApi() {
      this.axios
        .post("/user/register", {
          email: this.register.email,
          first_name: this.register.firstName,
          last_name: this.register.lastName,
          password: this.register.password,
        })
        .then((response) => {
          localStorage.setItem("x-access-token", response.data.accessToken);
          this.$router.push("/");
          console.log("ali");
        });
    },
    callLogInAPA(){
        this.axios
        .post("/user/login",{
            email: this.login.email,
            password: this.login.password
        })
        .then((response)=>{
            localStorage.setItem('x-access-token', response.data.accessToken)
            localStorage.setItem('userId', response.data.user._id)
            this.$router.push("/");
        })
    },
    goToRegister() {
      this.isLogin = false;
      this.isRgister =true;
    },
    goToLogIn(){
        this.isRgister =false;
        this.isLogin = true;
    }
  },
};
</script>
<style scoped>
#switch {
  width: 41%;
}
span {
  cursor: pointer;
  color: rgb(11, 110, 150);
}
span:hover {
  color: blue;
}
</style>