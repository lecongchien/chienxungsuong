<template>
  <navbar></navbar>
  <div style="padding: 0 1rem">
    <v-parallax
      width="100%"
      height="300"
      aspect-ratio="16/9"
      :src="getImagePath('Game3.jpg')"
      alt="Example Image"
      class="image_radius"
    >
    </v-parallax>
    <h1>Contact us</h1>
  </div>

  <v-container>
    <v-row no-gutters>
      <v-col v-for="a in aboutInfo" :key="a" cols="12">
        <v-sheet class="pa-2">
          <v-card
            style="
              display: flex;
              align-items: center;
              justify-content: space-between;
              padding: 20px;
            "
            loading
            :title="a.title"
            :subtitle="a.subtitle"
            class="display-alitem-jcc"
          >
            <v-btn
              style="
                background-color: #000;
                color: #fff;
                font-weight: bold;
                font-size: 10px;
              "
              variant="outlined"
              >{{ a.button }}
            </v-btn>
          </v-card>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
  <Footer />
</template>

<script>
import Footer from '@/components/Footer/Footer.vue'
import Navbar from '../Navbar.vue'
export default {
  data() {
    return {
      aboutInfo: [
        {
          title: 'PHONE',
          subtitle:
            'Our online Client Assistants are available Monday through Sunday, from 7:30AM to 10PM (Singapore local time)',
          button: 'CALL US +84395436247',
        },
        {
          title: 'EMAIL',
          subtitle:
            'To reach our online Client Assistants by email, click "email us" to provide details and your contact information.',
          button: 'E-MAIL US',
        },
      ],
    }
  },
  components: { Navbar, Footer },
  methods: {
    getImagePath(filename) {
      return require(`@/assets/images/${filename}`)
    },
  },
}
</script>

<style>
.display-alitem-jcc {
  margin: 20px 0 0 0;
}
.image_radius {
  position: relative;
  border-radius: 5px;
}
div {
  position: relative;
}
div > h1 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: #fff;
  position: absolute;
}
</style>