<template>
  <img :src="url" :alt="alt"/>
</template>
<script>
import ImageService from "../services/ImageService";

export default {
  data() {
    return {
      url: "",
      alt: ""
    };
  },
  props: ['name'],
  mounted() {
    this.getURL().then(res => {
      this.url = res;
    }).catch(err => console.log(err));
  },
  methods: {
    getURL: async function() {
      const urlImage = await ImageService.getImage(this.name);
      return urlImage;
    },
  },
};
</script>
<style scoped></style>
