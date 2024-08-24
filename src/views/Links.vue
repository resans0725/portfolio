<template>
  <div id="links_container">
    <!-- <h2 class="links-title">link</h2> -->
    <img id="link_img" src="../assets/link.png" alt="" />
    <div class="links-grid">
      <a
        v-for="link in links"
        :key="link.name"
        :href="link.url"
        target="_blank"
        rel="noopener noreferrer"
        class="link-card"
      >
        <img :src="require(`@/assets/${link.image}`)" :alt="link.name" />
        <span class="link-name">{{ link.name }}</span>
      </a>
    </div>
    <!-- <h1 class="connect">contact</h1> -->
    <!-- <div class="link-card email-card">
      <a :href="'mailto:' + email" class="email-link">
        <img src="@/assets/mail.png" alt="Email Icon" />
        <span class="link-name-email">{{ email }}</span>
      </a>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "coollongapp0725@gmail.com", // あなたのメールアドレスに変更
      links: [
        {
          name: "GitHub",
          url: "https://github.com/resans0725",
          image: "git.jpeg",
        },
        {
          name: "X(Twitter)",
          url: "https://x.com/Resan0725Apple",
          image: "twitter.png",
        },
        {
          name: "YouTube",
          url: "https://www.youtube.com/channel/UCAYD2jWVRn1fr1CEO-YP29w",
          image: "youtube.png",
        },
        {
          name: "Note",
          url: "https://note.com/resan0725",
          image: "note.png",
        },
        {
          name: "Qitta",
          url: "https://qiita.com/Resan0725Apple",
          image: "qitta.png",
        },
        {
          name: "Instagram",
          url: "https://www.instagram.com/kitchenreesans/",
          image: "instagram.png",
        },
      ],
    };
  },
};
</script>

<style scoped>
#links_container {
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
  padding: 20px;
}

.connect {
  margin-top: 100px;
  font-size: 2em;
  font-weight: bold;
  color: #242424;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.links-title {
  font-size: 2em;
  font-weight: bold;
  color: #242424;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
}

.links-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 30px;
  width: 100%;
  max-width: 600px;
}

.link-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  text-decoration: none;
  background-color: #333;
  color: white;
  padding: 20px;
  border-radius: 10px;
  transition: transform 0.3s, box-shadow 0.3s, background-color 0.3s;
}
.link-card:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: #4a90e2;
}
.link-card img {
  width: 50px;
  height: 50px;
  object-fit: cover;
  margin-bottom: 10px;
}
.link-name {
  font-size: 1.2em;
  color: #fff;
}

.email-card {
  display: flex;
  align-items: center; /* 画像とテキストを縦方向に中央揃え */
  background-color: #0078d4; /* メールカードの特定の色 */
  padding: 10px 20px; /* パディングの追加 */
  margin-top: 20px; /* 上マージン */
}
.email-card:hover {
  background-color: #005bb5;
}
.email-link {
  display: flex;
  align-items: center; /* 画像とテキストを縦方向に中央揃え */
  text-decoration: none;
  color: inherit;
}
.email-link img {
  width: 100px;
  height: 100px;
  margin-right: 15px; /* 画像とテキストの間の余白 */
}
.link-name-email {
  font-size: 1.4em;
  font-weight: bold;
  color: #fff;
  margin: 0; /* 余計なマージンを削除 */
}
</style>
