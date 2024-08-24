<template>
  <div id="skills_container">
    <!-- <h2 class="skills-title">~ SKILL SET ~</h2> -->
    <img id="skill_img" src="../assets/skill.png" alt="" />
    <div class="skills-grid">
      <div
        v-for="skill in skills"
        :key="skill.name"
        class="skill-card"
        @mouseover="showExperience(skill)"
        @mouseleave="hideExperience(skill)"
      >
        <img :src="require(`@/assets/${skill.image}`)" alt="Skill Image" />
        <div class="skill-name">{{ skill.name }}</div>
        <div class="skill-experience" v-if="skill.experienceVisible">
          {{ skill.experience }} years
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        {
          name: "Swift",
          image: "swift.png",
          experience: 2,
          experienceVisible: false,
        },
        {
          name: "SwiftUI",
          image: "swiftUI.jpeg",
          experience: 2,
          experienceVisible: false,
        },
        {
          name: "UIKit",
          image: "UIKit.jpeg",
          experience: 1,
          experienceVisible: false,
        },
        {
          name: "Objective-C",
          image: "objective-c.png",
          experience: 0.2,
          experienceVisible: false,
        },
        {
          name: "Vue.js",
          image: "vue.avif",
          experience: 1,
          experienceVisible: false,
        },
        {
          name: "TypeScript",
          image: "Typescript.png",
          experience: 1,
          experienceVisible: false,
        },
        {
          name: "Firebase",
          image: "firebase.png",
          experience: 2,
          experienceVisible: false,
        },
        {
          name: "Git",
          image: "git.jpeg",
          experience: 2,
          experienceVisible: false,
        },
        // 他のスキルもここに追加
      ],
    };
  },
  methods: {
    showExperience(skill) {
      skill.experienceVisible = true;
    },
    hideExperience(skill) {
      skill.experienceVisible = false;
    },
  },
};
</script>

<style scoped>
#skills_container {
  width: 100%;
  min-height: 150vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    90deg,
    rgb(255, 255, 255) 0%,
    rgb(255, 255, 255) 100%
  );
  color: #333;
  text-align: center;
}

.skill_img {
  width: 100px;
}

.skills-title {
  font-size: 2.5em;
  font-weight: bold;
  color: #000000;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  justify-items: center;
}

.skill-card {
  width: 200px;
  height: 220px;
  margin: 10px;
  text-align: center;
  background-color: #333;
  color: white;
  padding: 20px;
  border-radius: 10px;
  transition: transform 0.3s;
}
.skill-card:hover {
  transform: scale(1.05);
}
.skill-card img {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 50%;
}
.skill-name {
  margin-top: 15px;
  font-size: 1.5em;
}
.skill-experience {
  margin-top: 10px;
  font-size: 1.2em;
  color: #ffeb3b;
}
</style>
