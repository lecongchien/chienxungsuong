<template>
  <v-carousel cycle height="450" hide-delimiter-background show-arrows="hover">
    <v-carousel-item v-for="(slide, i) in item" :key="i">
      <v-sheet height="100%">
        <v-parallax
          width="100%"
          height="400"
          aspect-ratio="16/9"
          :src="slide.image"
          alt="Example Image"
          class="image_radius"
        >
        </v-parallax>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>

  <v-row>
    <v-col cols="12 text">
      <v-sheet>
        TÌM ĐỊA ĐIỂM GAME TRỰC TUYẾN CỦA EA GAMES TÌM ĐỊA ĐIỂM CỦA BẠN
      </v-sheet>
      <v-sheet> FIND YOUR PLACE </v-sheet>
      <v-btn
        :loading="loading"
        class="flex-grow-1"
        height="48"
        variant="tonal"
        @click="load"
        style="margin: 20px 0 0; background: #000; color: #fff"
      >
        EXPLORE GAMEZ
      </v-btn>
    </v-col>
  </v-row>
  <v-divider></v-divider>
</template>

<script>
export default {
  data() {
    return {
      item: [
        {
          id: '1',
          text: 'loren is alone',
          image:
            'https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701228339.jpg',
        },
        {
          id: '2',
          text: 'boxxada',
          image:
            'https://wallpapers.com/images/hd/destiny-the-taken-king-4k-gaming-y31a8hm3p7kpqjzt.jpg',
        },
      ],
      loading: false,
      methods: {
        load() {
          this.loading = true
          setTimeout(() => (this.loading = false), 3000)
        },
      },
    }
  },
}
</script>

<style>
.text {
  text-align: center;
  font-weight: bold;
  margin: 50px 0 50px;
}
</style>