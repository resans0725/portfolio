<template>
  <div id="profile_container">
    <!-- <h1 class="profile_title">- Profile -</h1> -->
    <div class="profile_content">
      <div class="profile_image_container">
        <img id="profile_img" src="../assets/avatar.png" alt="" />
      </div>
      <div class="profile_description">
        <p class="profile_name_kanji_text">永井 涼</p>
        <h3>Nagai Ryo</h3>
        <p class="profile_text">
          {{ Birthdate.year }}年{{ Birthdate.month }}月{{
            Birthdate.day
          }}日生まれ {{ Age }}歳 / 埼玉県育ち
        </p>
        <div id="profile_intro" class="profile_text">
          <h2>現在</h2>
          <p>
            2022年4月にbravesoft株式会社に新卒で入社。<br />
            インターン時代の最初は自社開発のフロントエンドを主に担当していた。
            3ヶ月後にアプリ開発がやっぱりやりたかったので受託事業に異動し、スマホアプリのエンジニアとして働く。
            以降は、携わった案件20件以上。某スポーツアプリを主に担当し、SwiftUIを使用してiOS/iPadOS開発し、開発だけでなく状況に応じて要件定義や設計、iOSチームの管理など幅広く担当する。<br />
            (スキルはまだまだ未熟です。色々な人の助けでなんとかなってます)
          </p>
          <h2>bravesoft 表彰歴</h2>
          <p>
            2021年から半年に一度優秀な成果を残して選ばれた12名の社員に賞と賞金が贈られる制度ができて、これまで受賞した一覧です。<br />
            ・2023年H2 Best Growth Award(成長賞) 受賞<br />
            ・2024年H1 Best Hacker Award(エンジニア賞) 受賞
          </p>
          <h2>プログラミングを始めたきっかけ</h2>
          <p>
            とにかくApple好き！大学4年生になる手前で、iPhoneアプリってどうやってできてるんだろう？
            もし、自分で作れたら簡単にみんなの元に「便利が届けられるじゃん」と思い、興味を持つ
            そこでプログラミングが必要なんだと気が付く。挫折しつつも、独学で3ヶ月でAppleStoreにアプリをリリースした。内気な性格ではあるがやるとなったらやる気がすごく出るタイプで、
            がむしゃらにX「旧ツイッター」で社長に直談判でインターンできないかと頼んだり、現職のbravesoftに2021年に内定をもらう。
            そして内定もらった直後に、プログラミングできないのですぐインターンさせてくださいと頼んで22卒1番乗りでインターンを開始した。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Age: 0,
      Birthdate: {
        day: 25,
        month: 7,
        year: 1999,
      },
    };
  },
  created() {
    this.initAge();
  },
  methods: {
    initAge() {
      let birthdate = new Date(
        this.Birthdate.year,
        this.Birthdate.month - 1,
        this.Birthdate.day
      );
      let today = new Date();
      let age = today.getFullYear() - birthdate.getFullYear();
      if (
        today.getMonth() < birthdate.getMonth() ||
        (today.getMonth() === birthdate.getMonth() &&
          today.getDate() < birthdate.getDate())
      ) {
        age--;
      }
      this.Age = age;
    },
  },
};
</script>

<style scoped>
.profile_title {
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 0;
  letter-spacing: 30px;
}

#profile_container {
  width: 100%;
  height: 150vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column; /* Add this line */
  background: linear-gradient(
    90deg,
    rgb(40, 165, 165) 0%,
    rgb(75, 149, 29) 100%
  );
  color: #fff;
  text-align: center;
}

.profile_content {
  display: flex; /* Set display to flex */
  align-items: center; /* Center vertically */
}

.profile_image_container {
  margin-right: 20px; /* 画像とテキストの間隔 */
}

.profile_description h3 {
  font-size: 40px;
  margin: 0;
}

.profile_text h2 {
  margin-top: 2%;
  margin-bottom: -1%;
}

.profile_name_kanji_text {
  margin: 0;
  font-size: 20px;
}

#profile_img {
  width: 400px;
  height: 400px;
  border-radius: 50%;
  margin: 15px;
  margin-right: 100px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  object-fit: cover;
}

.profile_description {
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* テキストを左寄せ */
}

#profile_intro {
  max-width: 50vw; /* Adjust the maximum width as needed */
  width: 100%; /* Ensure it takes full width within its container */
  margin: 0 auto; /* Center the div horizontally */
  text-align: left;
}
</style>
