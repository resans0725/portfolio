<template>
  <div id="gallery_container">
    <!-- <h2>~ Gallery gallery~</h2> -->
    <img id="gallery_img" src="../assets/gallery.png" alt="" />
    <input
      id="gallery_searchbar"
      type="text"
      placeholder="ギャラリーを検索"
      @input="UpdateCards"
      v-model="search_text"
    />
    <div id="galleries">
      <div class="card" v-for="card in disp_cards" :key="card.id">
        <img class="card_img" :src="card.image" />
        <div class="card_title">
          {{ card.title }}
        </div>
        <div class="card_description">
          {{ card.description }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      search_text: "",
      disp_cards: [],
      cards: [
        {
          title: "Oneday Task",
          description:
            "大学生時代に初めてAppleStoreにリリースした第一弾「OnedayTask」簡単に1日のタスクを追加してチェックして消せるアプリ",
          image: require("../assets/onedayTask.png"),
        },
        {
          title: "Hitoted",
          description:
            "大学生時代の第二弾「Hitoted」コロナ禍にお店などで店内の人数を数えてる店舗が多く、簡単に人数制限のカウントできるアプリを作ってみようと思い、作成。",
          image: require("../assets/Hitoted.png"),
        },
        {
          title: "Topic Throw",
          description:
            "大学生時代の第三弾「TopicThrow」食事に行く際や何かの交流するときに会話が途切れないように、シチュエーションに沿った話題を提供してくれるアプリ。",
          image: require("../assets/topicThrow.png"),
        },
      ],
    };
  },
  created() {
    this.UpdateCards();
  },
  methods: {
    UpdateCards() {
      this.disp_cards = [];
      if (this.search_text != "") {
        for (let Target_Key in this.cards) {
          if (
            this.cards[Target_Key].title.indexOf(this.search_text) > -1 ||
            this.cards[Target_Key].description.indexOf(this.search_text) > -1
          ) {
            this.disp_cards.push(this.cards[Target_Key]);
          }
        }
      } else {
        this.disp_cards = this.cards;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
#gallery_container {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    90deg,
    rgb(251, 143, 35) 0%,
    rgb(243, 231, 21) 100%
  );
  color: #fff;
  text-align: center;
  #gallery_searchbar {
    width: 600px;
    height: 40px;
    padding: 0 30px;
    margin: 20px 0;
    border: 1px solid #aaa;
    border-radius: 999px;
    outline: none;
  }
  @media screen and (max-width: 400px) {
    #gallery_searchbar {
      width: 300px;
      height: 40px;
      padding: 0 10px;
      margin: 10px 0;
    }
  }
  #galleries {
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    .card {
      width: 250px;
      height: 300px;
      border-radius: 10px;
      box-shadow: 0px 2px 8px -4px #777777;
      margin: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;
      .card_img {
        width: 100%;
        height: 250px;
        border-radius: 10px 10px 0 0;
        object-fit: cover;
      }
      .card_description {
        background-color: #322e2e;
        width: 100%;
        height: 250px;
        padding: 10px;
        margin-bottom: 50px;
        font-size: 15px;
        font-weight: 900;
        position: absolute;
        opacity: 0;
        transition: 0.3s;
        &:hover {
          opacity: 1;
          background-color: rgba($color: #070606, $alpha: 0.9);
        }
      }
      .card_title {
        width: 100%;
        height: 50px;
        font-size: 17px;
        font-weight: 900;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
</style>
