<template>
  <main>
      <div class="hero-section">

        <header>
        <h1> ADA Giving Network</h1>

        <h3>
          Your donation can make a world of difference. Join us in 
          our mission to create positive change and help those in need.
          Every contribution, no matter how small, brings us one 
          step closer to achieving our goals and improving lives.
        </h3>

        </header>

        <router-link to="/signup"><button class="btn">Donate</button></router-link>

        
      </div>

        
  </main>
</template>

<script>
export default {

  data() {
    return {
      
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style scoped>
   main {
    height: 92vh;
    background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("/image/hero_home.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
 }

.hero-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70%;
}

 header h1 {
    text-align: center;
    font-size: 50px;
    color: rgb(255, 255, 255);
    padding-top: 50px;
 }

 header h3 {
  text-align: center;
  color: white;
  width: 50%;
  padding-top: 10px;
  margin: 0 auto;
 }

 .btn {
  width: 250px;
  margin-top: 45px;
  padding-top: 10px;
  padding-bottom: 10px;
  /* background-image: linear-gradient(to right ,rgb(255, 0, 0),black); */
  font-size: 20px;
  font-weight: bold;
  background-color: transparent;
  color: white;
  box-shadow: 2px 2px 4px white;
  border: 2px solid white;
  cursor: pointer;
 }

 .btn:hover {
  background-color: white;
  color: black;
  box-shadow: 6px 6px 8px;
 }

 


</style>