<template lang="">
    <div id='row' class="container pb-5" >
        <div id='row' class="row mt-5">
            
            <div id="wrap" class="mt-3" v-if="Object.values(detail).length > 0">
                <h6>
                  Written by "{{ detail.writter.first_name }} {{ detail.writter.last_name }}" in {{ detail.posted }}
                </h6>
                
                <div class="row" id="aa">
                    <h3 ><i>{{ detail.title }}</i></h3>

                </div>
                {{ detail.body }} 


                <hr>
               
                <div id="reactContainer">
                   <div id="react">
                      <img @click="postLike" title="like" class="like" :src="detail.reacts.like.length ? require('@/assets/reactimg/like.svg') : require('@/assets/reactimg/heart-outline.svg')" alt="like">
                      <span>{{ detail.reacts.like.length }}</span>
                   </div>
                </div>


                <h2>Comments</h2>
                <div v-for="com in detail.comments" :key="com._id" class="mt-5" id='commentContainer'>
                    <div id="sad">
                      <div id='userInfo'>
                        <small class="ms-2 ">
                          "{{com.people.first_name}} {{com.people.last_name}}" in {{com.time}}
                        </small>
                      </div>
                      <p class="ms-3 p-2">{{com.body}}</p>
                    </div>
                    <div id="float">
                      <img @click="removeComment(com._id)" title="remove comment" class="delete" :src="require('@/assets/reactimg/delete-icon.svg')" alt="remove">
                    </div>
                </div> 
            </div>
            
        </div>
        
        
        <hr>

        <div id='comments'>
            <div class="mb-3">
              <label for="txtArea" class="form-label ms-4"><small>Enter Your Comment</small></label>
              <textarea v-model='comment' class="form-control" id="txtArea" rows="3"></textarea>
            </div>
            <button @click="postComment" id="btn" type="button" class="btn">
              comment
            </button>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      detail: {},
      comment: "",
      userId: "",
      like: 0,
    };
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
  },

  mounted() {
    this.userId = localStorage.getItem("userId");

    this.getPostDetail();
  },
  methods: {
    getPostDetail() {
      this.axios.get(`/blog/details/${this.id}`).then((res) => {
        this.detail = res.data;
        // console.log(res.data)
      });
    },

    postComment() {
      this.axios
        .post(
          "/blog/comment",
          {
            blogId: this.id,
            body: this.comment,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("x-access-token")}`,
              "x-access-token": localStorage.getItem("x-access-token"),
            },
          }
        )
        .then((res) => {
          console.log(res);
          this.getPostDetail();
        });
      this.comment = "";
    },
    postLike() {
      this.axios
        .put(
          "/blog/react",
          {
            blogId: this.id,
            reactName: "like",
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("x-access-token")}`,
              "x-access-token": localStorage.getItem("x-access-token"),
            },
          }
        )
        .then(() => {
          this.getReact();
        });
    },
    getReact() {
      this.axios
        .get(`/blog/details/${this.id}`, {
          blogId: this.id,
        })
        .then((response) => {
          this.detail.reacts.like = response.data.reacts.like;
          this.detail.comments = response.data.comments;
        });
    },
    removeComment(com) {
      this.axios
        .delete("/blog/comment", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("x-access-token")}`,
            "x-access-token": localStorage.getItem("x-access-token"),
          },
          data: {
            blogId: this.id,
            id: com,
          },
        })
        .then(() => {
          this.getReact()
          console.log(this.userId);
        });
    },
  },
};
</script>
<style scoped>
#aa {
  text-align: center;
  margin-bottom: 15px;
  margin-top: 25px;
}
#row {
  background-color: lightgray;
  padding: 20px;
}
#wrap {
  word-wrap: break-word;
}
#btn {
  margin-left: 10%;
  background-color: skyblue;
}
#commentContainer {
  width: 100%;

  display: flex;
}
#comments {
  background-color: rgb(208, 239, 252) !important;
  padding-bottom: 20px;
}
textarea {
  width: 85%;
  margin: auto;
}
#reactContainer {
  width: 100%;
}
.like {
  width: 32px;
  height: 32px;
  margin-right: 20px;
  cursor: pointer;
}
.dislike {
  width: 40px;
  height: 37px;
}
#react {
  display: flex;
  justify-content: end;
}

#sad {
  width: 70%;
  word-wrap: break-word;
  border-radius: 5px;
  border: 1px solid gray;
  background-color: rgb(175, 174, 174);
}
#float {
  display: flex;
  align-items: center;
}
.delete {
  width: 32px;
  height: 32px;
  cursor: pointer;
  margin-left: 7px;
}
</style>