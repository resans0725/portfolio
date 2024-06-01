<template>
  <div id="app">
    <nav id="navbar">
      <a href="#top" class="nav-link" @click.prevent="scrollToSection('top')"
        >TOP</a
      >
      <a
        href="#profile"
        class="nav-link"
        @click.prevent="scrollToSection('profile')"
        >PROFILE</a
      >
      <a
        href="#skills"
        class="nav-link"
        @click.prevent="scrollToSection('skills')"
        >SKILL</a
      >
      <a
        href="#gallery"
        class="nav-link"
        @click.prevent="scrollToSection('gallery')"
        >GALLERY</a
      >
      <a
        href="#links"
        class="nav-link"
        @click.prevent="scrollToSection('links')"
        >LINK</a
      >
    </nav>
    <div id="content">
      <section id="top" data-background="#f6d365">
        <Top />
        <div
          class="triangle-button"
          @click.prevent="scrollToSection('profile')"
        ></div>
      </section>
      <section id="profile" data-background="#f6d365">
        <Profile @scroll-to-section="scrollToSection" />
      </section>
      <section id="skills" data-background="#fda085">
        <Skills />
      </section>
      <section id="gallery" data-background="#a8edea">
        <Gallery />
      </section>
      <section id="links" data-background="#fed6e3">
        <Links />
      </section>
    </div>
  </div>
</template>

<script>
import Top from "./views/Top.vue";
import Profile from "./views/Profile.vue";
import Skills from "./views/Skills.vue";
import Gallery from "./views/Gallery.vue";
import Links from "./views/Links.vue";

export default {
  name: "App",
  components: {
    Top,
    Profile,
    Skills,
    Gallery,
    Links,
  },
  methods: {
    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      section.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style scoped>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
}
#navbar {
  position: fixed;
  top: 0;
  right: 0;
  padding: 15px;
  padding-right: 12px;
  display: flex;
  gap: 15px;
  z-index: 1000;
}

.nav-link {
  text-decoration: none;
  color: #333;
  font-weight: bold;
}

.nav-link:hover {
  color: #007bff;
}

#content {
  margin: -10px;
}

section {
  padding: -10px;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.triangle-button {
  position: absolute;
  bottom: 0;
  margin-bottom: 15px;
  width: 0;
  height: 0;
  border-left: 30px solid transparent;
  border-right: 30px solid transparent;
  border-top: 30px solid black;
}

/* Animation */
.triangle-button {
  animation: floating-y 1s ease-in-out infinite alternate-reverse;
}
@keyframes floating-y {
  0% {
    transform: translateY(-20%);
  }
  100% {
    transform: translateY(10%);
  }
}
</style>
