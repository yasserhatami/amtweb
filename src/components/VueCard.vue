<template>
  <div class="col-md-6">
    <div class="card" style="width: 17rem">
      <div class="card-body">
        <div id="imageCard">
            <img src="../assets\users-svgrepo-com.svg" alt="">
        </div>
        <h5 class="card-title"></h5>
        <h6 class="card-subtitle mb-2 text-muted">User Info</h6>
        <div>
            <p>name : {{firstName}}</p>
        </div>
        <div>
            <p>family : {{lastName}}</p>
        </div>
        <div>
            <p>email : {{email}}</p>
        </div>
        <div class="d-flex justify-content-end" id="editContainer">
            <div title="edit profile" id="edit">
                <img @click="showEditForm" src="..\assets\edit.svg" alt="image broken">
            </div>
        </div>
      </div>
    </div>

    <editcom v-if="indicate"></editcom>

    
  </div>
</template>
<script>
import editcom from './EditProfile.vue'
export default {
    components :{
        editcom
    },
    props: ['email','firstName','lastName'],
    data(){
        return {
            
            indicate : false
            }
    },
    methods: {
        showEditForm() {
            this.indicate = !this.indicate
        }
    }
};
</script>
<style scoped>
#imageCard{
    width: 70%;
    height: 7rem;
}
img{
    width: 100%;
    height: 100%;
}

#edit{
    width: 30px;
    height :30px;
    cursor: pointer;
}

</style>