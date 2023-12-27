// top tap
const top_gender_tabBtn = document.querySelectorAll(".top-line-up-gender-tab-btn");
const top_gender_tabContent = document.querySelectorAll(".top-line-up-gender-tab-content");

document.addEventListener("DOMContentLoaded", function () {
   
    //各タブにクリックイベントを設定
  for (let i = 0; i < top_gender_tabBtn.length; i++) {
    top_gender_tabBtn[i].addEventListener("click", tabSwitch);
  }

  function tabSwitch() {

    // 1:activeクラスを持っている要素からactiveクラスを削除
    document.querySelectorAll(".tab_is_active")[0].classList.remove("tab_is_active");

    //2:クリックしたタブにactiveクラスを付与
    this.classList.add("tab_is_active");

     //3:showクラスを持っている要素からshowクラスを削除
     document.querySelectorAll(".tab_show")[0].classList.remove("tab_show");

     //4:タブを配列にする
    let tabArr = Array.from(top_gender_tabBtn);

    //5:クリックしたタブのインデックス番号を取得
    let index = tabArr.indexOf(this);

    //6:タブのインデックスから同じインデックスのコンテンツにshowクラスを付与する
    top_gender_tabContent[index].classList.add("tab_show");

  }
});
// end top tap