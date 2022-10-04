<template >
  <div class="container mt-3">
    <div class="form-group">
      <label for="firstName">Name</label>
      <input
        autofocus
        class="form-control"
        autocomplete="on"
        placeholder="write category name"
        type="text"
        name="category"
        v-model="categoryName"
      />
      <button
        :disabled="isDisabled"
        type="button"
        class="btn btn-primary mt-3"
        @click="registerCategory"
      >
        send
      </button>
      <div id="catchContainer">
        <h3 id="notRegister"></h3>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      categoryName: "",
    };
  },

  computed: {
    isDisabled: function () {
      return !this.categoryName;
    },
  },
  methods: {
  goToLogIn(){
          this.$router.push('/')
        },
    registerCategory() {
      if (localStorage.getItem("x-access-token")) {
        this.axios
          .post(
            "/category",
            { name: this.categoryName },
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem( "x-access-token")}`
                ,
                "x-access-token": localStorage.getItem("x-access-token"),
              },
            }
          )
          .then(() => {
            this.$router.push('/category')
          }).catch(err => {
            
            if(err.message.includes('403')){
              alert("This category already exists");
            }
          });
      } else {
        
        let notRegister =document.getElementById('notRegister');
        notRegister.innerHTML = 'you should first Log In';
        notRegister.style.marginTop = '20px';
        notRegister.style.color = 'red'
        let catchContainer =document.getElementById('catchContainer');
        let btn = document.createElement('div');
        btn.innerHTML = `<button onclick="goToLogIn()" class="btn btn-warning  mt-3">go to Log In</button>`;
        catchContainer.appendChild(btn);
        // this should append a func.search later
      }
    },
  },
};
</script>
<style >
h2 {
  color: red;
}
</style>