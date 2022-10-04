<template >
  <div class="container">
    <div class="row">
      <div id="wrap" v-if="categories.length" class="mt-4">
        <div style="text-align: center"><h2>All categories</h2></div>
        <div
          id="sss"
          v-for="cat in categories"
          :key="cat._id"
          class="col-12 col-md-5 badge bg-primary me-3 mt-4"
        >
          {{ cat.name }}
        </div>
        
      </div>
      <div style="text-align: center">
        <button
          style="font-size: x-large"
          @click="swatchToCreateCategory"
          class="pt-0 btn btn-success mt-5"
        >
          create category
          <span style="font-size : x-large">+</span>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      categoryName: "",
      categories: [],
    };
  },
  mounted() {
    this.getAllCategories();
  },
  methods: {
    swatchToCreateCategory() {
      this.$router.push("/category/createcategory");
    },
    getAllCategories() {
      this.axios
        .get("/category")
        .then((response) => {
          this.categories = response.data;
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
  font-size: larger;
  margin: 7px;
  height: 35px;

}
#wrap {
  width: 100%;
}

</style>