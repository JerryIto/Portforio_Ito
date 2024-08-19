document.querySelectorAll(".top__works, .top__skills, .top__about, .top__contact").forEach(section => {
  let carousel = section.querySelector(".carousel");
  let currdeg = 0;
  const explainElements = section.querySelectorAll('.works__explain p, .skills__explain p , .about__explain p , .contact__explain p');

  const updateExplain = () => {
    const totalItems = explainElements.length;
    let activeIndex = ((currdeg / -60) % totalItems + totalItems) % totalItems;
    explainElements.forEach((el, index) => {
      el.style.display = index === activeIndex ? 'block' : 'none';
    });
  };

  section.querySelector(".next").addEventListener("click", function() {
    currdeg -= 60;
    carousel.style.transform = "rotateY(" + currdeg + "deg)";
    updateExplain();
  });

  section.querySelector(".prev").addEventListener("click", function() {
    currdeg += 60;
    carousel.style.transform = "rotateY(" + currdeg + "deg)";
    updateExplain();
  });

  // 初期表示の説明文を設定
  updateExplain();
});



//href属性の「#」で始まるリンクをすべて取得
const links = document.querySelectorAll('a[href^="#"]');
//取得したリンクを１つずつ処理を実行する。
links.forEach((link)=>{
  //リンクをクリックしたら処理を実行する
  link.addEventListener('click',(e)=>{
    //リンクイベントをキャンセルする
    e.preventDefault();
    //クリックしたリンクのhref属性を取得
    const href = link.getAttribute('href');
    //目的のセクションを取得
    const targetSection =document.querySelector(href);
    //画面の上からセクションのtop位置までの垂直方向の距離
    const sectionTop =targetSection.getBoundingClientRect().top;
    //現在位置を取得
    const currentPos=window.scrollY;
    //ヘッダーの高さ
    const gap = 80;
    //現在位置から目的のsectionまでのスクロール量
    const target = sectionTop + currentPos -gap;
    window.scrollTo({
      top:target,
      behavior:'smooth',
    });
  });
});


