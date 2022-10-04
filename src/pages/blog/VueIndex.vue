<template >
  <div class="container">
    <div
      @click="getname(cat._id)"
      id="sss"
      v-for="cat in categories"
      :key="cat._id"
      class="badge me-3 mt-4"
      :class="cat.isActive ? 'bg-primary' : 'bg-secondary'"
    >
      {{ cat.name }}
    </div>
    <hr>
    <div class="row" v-if="blogs.length > 0">
      <div v-for="post in blogs" :key="post._id" class="col-12 col-md-4 mt-3">
        <div id="card" class="card p-3">
          <img :src="post.img" alt="image is broken" />
          <h3 class="mt-2">{{ post.title }}</h3>
          <router-link class="btn btn-success" :to="`/blog/${post._id}`">
            i want read
          </router-link>
        </div>
      </div>
    </div>
    
    <div class="row mt-5" v-else>
      <h2>you don't have any post in this category</h2>
    </div>
    

    <div></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      categories: [],
      blogs: [],
      userId: "",
      hasLength: false,
    };
  },
  mounted() {
    // dynamic variable user id
    this.userId = localStorage.getItem('userId')
    this.getAllCategories();
  },
  methods: {
    getAllCategories() {
      this.axios
        .get("/category")
        .then((response) => {
          this.categories = response.data
                  .map((item, index) => {
          item.isActive = index === 0
          return item
          });
          this.getname(this.categories[0]._id)
        })
        .catch((err) => {
          console.log(err);
        });
    },

    getname(id) {
      this.categories.map(item => item.isActive = false)
      this.categories.find( item => item._id === id).isActive = true
      this.axios
        .get(`/blog/${this.userId}/${id}`)
        .then((response) => {
          this.blogs = response.data.result;
          console.log(response.data.result);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style scoped>
#sss {
  font-size: large;
  cursor: pointer;
}
a {
  text-decoration: none !important;
}

#card {
  text-align: center;
  background-color: rgb(192, 226, 253);
}
</style>



