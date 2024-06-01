<template>
  <div id="top_container">
    <h2 class="large-text">
      楽しいものづくりと<br />ワクワクする体験を世界中に
    </h2>
  </div>
</template>

<style scoped>
.large-text {
  font-size: 5em;
  font-weight: bold;
  text-align: center;
  margin: 20px 0;
  color: #333;
}
.large-text {
  animation-name: fadeInAnime;
  animation-fill-mode: backwards;
  animation-duration: 5s;
  animation-timing-function: ease;
  animation-delay: 0.5s;
  animation-direction: normal;
}

@keyframes fadeInAnime {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>
