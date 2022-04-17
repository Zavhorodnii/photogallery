<template>
  <v-container>
    <PhotoForm @addPhoto="addPhoto"/>
<!--    <PhotoForm v-show="dialogVisible" @addPhoto="addPhoto"/>-->
<!--    <PhotoForm v-if="photos.length < 11" @addPhoto="addPhoto"/>-->
<!--    <div v-else>Вы не можете больше добавить фотографий</div>-->
    <v-row>
      <Photo
          v-for="(photo, index) in $store.getters.getAllPhotos"
          :photo="photo"
          :key="index"
      />
    </v-row>
    <PhotoDialog />
  </v-container>
</template>

<script>
import Photo from "@/components/photo/Photo";
import PhotoForm from "@/components/photo/PhotoForm";
import PhotoDialog from "@/components/photo/PhotoDialog";
import {mapActions} from "vuex";

export default {
  name: "PhotosPage",
  components: {PhotoDialog, PhotoForm, Photo},
  data: () => ({
    photos: [],
    // currentPhoto: {},
    // dialogVisible: false
  }),
  mounted() {
    // this.fetchTodo()
    // this.$store.dispatch("fetchPhotos")
    this.fetchPhotos()
  },
  methods: {
    ...mapActions(['fetchPhotos']),
    // fetchTodo() {
    //   this.axios.get('https://jsonplaceholder.typicode.com/photos?_limit=10')
    //       .then(response => this.photos = response.data)
    // },
    addPhoto(photo){
      this.photos.push(photo)
    },
    openPhoto(photo){
      this.currentPhoto = photo
      this.dialogVisible = true
    }
  }
}
</script>

<style scoped>

</style>