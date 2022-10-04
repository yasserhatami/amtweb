<template lang="">
    <div>
    <nav class="navbar navbar-expand-sm navbar-dark bg-primary">
        <div class="container-fluid">
        <a class="navbar-brand" href="#">WEblog</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
           <span class="navbar-toggler-icon"></span>
         </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto  mb-lg-0">
            <li class="nav-item " >
              <router-link title="go to Home" id="homeimg" class="nav-link" to = "/">
                <img src="../assets/home-2502.svg" alt=""/>
              </router-link>
            </li>
             <li class="nav-item ms-3">
               <router-link title="Categories" id="categoryimg" class="nav-link" to = "/category">
               <img src="../assets/category.svg" alt=""/>
               </router-link>
            </li>
             <li class="nav-item ms-3">
               <router-link title="Log IN " id="loginimg" class="nav-link" to = "/user">
               <img src="../assets/user-signup-3058.svg" alt=""/>
               </router-link>
            </li>
            <li class="nav-item ms-3">
               <router-link title="create a post" id="categoryimg" class="nav-link" to = "/createblog">
               <img src="../assets\blog-64.png" alt=""/>
               </router-link>
            </li>

             <li class="nav-item ms-3">
               <router-link title="read posts" id="categoryimg" class="nav-link" to = "/blogs">
               <!-- edit rout for this router -->
               <img src="../assets\Reading.svg" alt=""/>
               </router-link>
            </li>
           
            <li title="Log Out" class="nav-item mt-2 ms-3" @click="logout">
               <img id="logout" src="../assets\user-logout-3056.svg" alt=""/>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
    </div>
</template>
<script>
export default {
  methods: {
    logout() {
      console.log("fuck");
      localStorage.removeItem("x-access-token");
      window.location = "http://172.17.18.10:8080/";
    },
  },
};
</script>
<style scoped>
#homeimg {
  width: 46px;
  height: 50px;
}
#homeimg img {
  widows: 100%;
  height: 100%;
}
#categoryimg {
  width: 46px;
  height: 50px;
}
#categoryimg img {
  widows: 100%;
  height: 100%;
}



#loginimg {
  width: 46px;
  height: 46px;
}
#loginimg img {
  widows: 100%;
  height: 100%;
}
#logout {
  width: 42px;
  height: 30px;
  cursor: pointer;
}
#logout img {
  widows: 100%;
  height: 100%;
}

</style>