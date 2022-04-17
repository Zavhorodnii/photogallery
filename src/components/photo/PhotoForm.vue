<template>
  <v-container>
    <v-row class="d-flex">
      <v-text-field v-model="title"/>
<!--      <v-file-input v-model="chosenFile"/>-->
      <v-file-input
          show-size
          counter
          label="File input"
          v-model="img"
          @formdata="img"
      ></v-file-input>
      <v-btn @click="addPhoto">Добавить</v-btn>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "PhotoForm",
  data: () => ({
    title: null,
    img: [],
  }),
  methods: {
    addPhoto(){
      let reader = new FileReader()
      reader.onload = () => {
        let photo = {
          id: Date.now(),
          title: this.title,
          url: reader.result
        }
        this.$emit('addPhoto', photo)
      }
      reader.readAsDataURL(this.img[0])
      console.log(reader.result)
    },
  },
}
</script>

<style scoped>

</style>