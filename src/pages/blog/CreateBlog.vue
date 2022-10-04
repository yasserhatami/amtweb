<template>
  <div class="container">
    <div class="row">
      <div class="input-group mb-3 mt-5">
        <label for="inputi">Enter Title :</label>
        
        <input
          v-model="form.title"
          id="inputi"
          type="text"
          class="form-control ms-2"
          placeholder="Title"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>

      <select
        class="form-select mb-4"
        v-model="form.category">
      
        <option value="" disabled selected hidden>Choose a category</option>
        <option v-for="cat in categories" :key="cat._id" :value="cat._id">
          {{ cat.name }}
        </option>

      </select>

      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label"
          >Example textarea</label
        >
        <textarea
          v-model="form.body"
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        >
        </textarea>
        <button class="btn btn-primary mt-3" @click="createBlog">
           create post 
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import UserService from  '@/services/userService'
export default {
  data() {
    return {
      categories: [],
      form: {
        title: "",
        category: "",
        body: "",
      },
    };
  },
  mounted() {
    this.getAllCategories();
  },
  methods: {
    getAllCategories() {
      this.axios
        .get("/category")
        .then((response) => {
          this.categories = response.data;
        })
        .catch((err) => {
          console.log(err);
        });
    }
    ,
    createBlog() {
      //inja mikhastam kole object ro yekja befrestam nashod
      UserService.createBlog(this.form.title,this.form.category,this.form.body)
      .then(()=>{
        this.$router.push('/blogs')
      })
    }
  },
};
</script>
<style lang="">
</style>