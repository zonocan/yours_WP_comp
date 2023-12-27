// functions
// アコーディオン
// slideUp
const slideUp = (el, duration = 300) => {
    el.style.height = el.offsetHeight + "px";
    el.offsetHeight;
    el.style.transitionProperty = "height, margin, padding";
    el.style.transitionDuration = duration + "ms";
    el.style.transitionTimingFunction = "ease";
    el.style.overflow = "hidden";
    el.style.height = 0;
    el.style.paddingTop = 0;
    el.style.paddingBottom = 0;
    el.style.marginTop = 0;
    el.style.marginBottom = 0;
    setTimeout(() => {
      el.style.display = "none";
      el.style.removeProperty("height");
      el.style.removeProperty("padding-top");
      el.style.removeProperty("padding-bottom");
      el.style.removeProperty("margin-top");
      el.style.removeProperty("margin-bottom");
      el.style.removeProperty("overflow");
      el.style.removeProperty("transition-duration");
      el.style.removeProperty("transition-property");
      el.style.removeProperty("transition-timing-function");
    }, duration);
};  

// slideDown
const slideDown = (el, duration = 300) => {
    el.style.removeProperty("display");
    let display = window.getComputedStyle(el).display;
    if (display === "none") {
      display = "block";
    }
    el.style.display = display;
    let height = el.offsetHeight;
    el.style.overflow = "hidden";
    el.style.height = 0;
    el.style.paddingTop = 0;
    el.style.paddingBottom = 0;
    el.style.marginTop = 0;
    el.style.marginBottom = 0;
    el.offsetHeight;
    el.style.transitionProperty = "height, margin, padding";
    el.style.transitionDuration = duration + "ms";
    el.style.transitionTimingFunction = "ease";
    el.style.height = height + "px";
    el.style.removeProperty("padding-top");
    el.style.removeProperty("padding-bottom");
    el.style.removeProperty("margin-top");
    el.style.removeProperty("margin-bottom");
    setTimeout(() => {
      el.style.removeProperty("height");
      el.style.removeProperty("overflow");
      el.style.removeProperty("transition-duration");
      el.style.removeProperty("transition-property");
      el.style.removeProperty("transition-timing-function");
    }, duration);
}; 

// slideToggle
const slideToggle = (el, duration = 300) => {
    if (window.getComputedStyle(el).display === "none") {
      return slideDown(el, duration);
    } else {
      return slideUp(el, duration);
    }
};
// アコーディオン(終了)
// functions(終了)

// header functions

// 検索バー(sp)
const header_search_form_btn = document.querySelector('#header-search-btn');
const header_search_form_btn_ui = document.querySelector('#header-search-btn-ui');
// 検索バー(pc) 
const header_search_form_btn_pc = document.querySelector('#header-search-btn-pc');
const header_search_form_btn_ui_pc = document.querySelector('#header-search-btn-ui-pc');
const all_item_search_form = document.querySelector('#all-item-search-form');

// 検索バー画像の切り替え(SP)
const header_search_form_btn_ui_src = new Array("./assets/ui/search-ui.svg", "./assets/ui/search-ui-clicked.svg");
let header_search_form_btn_ui_src_num = 0;
function headerUibtnChange() {
    if (header_search_form_btn_ui_src_num == 1) {
        header_search_form_btn_ui_src_num = 0;                
       } else {
        header_search_form_btn_ui_src_num ++;
       }    
       header_search_form_btn_ui.src =  header_search_form_btn_ui_src[header_search_form_btn_ui_src_num];
}

// 検索バー画像の切り替え(PC)
function headerUibtnChangePc() {
    if (header_search_form_btn_ui_src_num == 1) {
      header_search_form_btn_ui_src_num = 0;                
    } else {
      header_search_form_btn_ui_src_num ++;
    }     
    header_search_form_btn_ui_pc.src = header_search_form_btn_ui_src[header_search_form_btn_ui_src_num];
}

// sp
header_search_form_btn.addEventListener('click',  () => { 
    slideToggle(all_item_search_form, 300);
    // header_search_form_btn_ui.src = "./assets/ui/search-ui-clicked.svg";
    header_search_form_btn.classList.toggle('is-btn-active');   
});; 

// pc
header_search_form_btn_pc.addEventListener('click',  () => { 
  slideToggle(all_item_search_form, 300);
  header_search_form_btn_pc.classList.toggle('is-btn-active');   
});; 
// 検索バー(終了)

// ハンバガーメニュー
// ハンバガーメニューのボタン
const humbergerbtn = document.querySelector('#humberger-btn');

// ハンバガーメニューのリスト
const humbergerlist = document.querySelector('#sp-humberger-lists');

humbergerbtn.addEventListener('click',  () => { 
    slideToggle(humbergerlist, 300);
    humbergerbtn.classList.toggle('humberger-is-Active');
});
// ハンバガーメニュー(終了)
// header functions(終了)

// #sp-humberger-lists functions
// mensカテゴリー
const humbergerlist_category_search_mens = document.querySelector('#sp-humberger-list-category-search-mens');
const humbergerlist_li_inner_links_mens = document.querySelector('#sp-humberger-lists-li-inner-links-mens');

humbergerlist_category_search_mens.addEventListener('click',  () => { 
    slideToggle(humbergerlist_li_inner_links_mens, 300);
    humbergerlist_category_search_mens.classList.toggle('accordion-is-active');
});
// mensカテゴリー(終了)

// womensカテゴリー
const humbergerlist_category_search_womens = document.querySelector('#sp-humberger-list-category-search-womens');
const humbergerlist_li_inner_links_womens = document.querySelector('#sp-humberger-lists-li-inner-links-womens');

humbergerlist_category_search_womens.addEventListener('click',  () => { 
    slideToggle(humbergerlist_li_inner_links_womens, 300);
    humbergerlist_category_search_womens.classList.toggle('accordion-is-active');
});
// womensカテゴリー(終了)

// unisexカテゴリー
const humbergerlist_category_search_unisex = document.querySelector('#sp-humberger-list-category-search-unisex');
const humbergerlist_li_inner_links_unisex = document.querySelector('#sp-humberger-lists-li-inner-links-unisex');

humbergerlist_category_search_unisex.addEventListener('click',  () => { 
    slideToggle(humbergerlist_li_inner_links_unisex, 300);
    humbergerlist_category_search_unisex.classList.toggle('accordion-is-active');
});
// unisexカテゴリー(終了)

const humbergerlist_sitemap_home = document.querySelector('#sp-humberger-list-li-site-map-home');
const humbergerlist_li_inner_links_home = document.querySelector('#sp-humberger-lists-li-inner-links-home');

humbergerlist_sitemap_home.addEventListener('click',  () => { 
    slideToggle(humbergerlist_li_inner_links_home, 300);
    humbergerlist_sitemap_home.classList.toggle('accordion-is-active');
});
// #sp-humberger-lists functions(終了)

// footer
const footer_sp_sitemap_accordion = document.querySelector('#footer-sp-sitemap-accordion');
const footer_sp_sitemap_accordion_contents = document.querySelector('#footer-sp-sitemap-accordion-contents');

footer_sp_sitemap_accordion.addEventListener('click',  () => { 
  slideToggle(footer_sp_sitemap_accordion_contents, 300);
  footer_sp_sitemap_accordion.classList.toggle('accordion-is-active');
});


const privacy_modal_modal_btn = document.querySelector('#privacy-modal-modal-btn');
const hum_privacy_modal_modal_btn = document.querySelector('#hum-privacy-modal-modal-btn');
const modal_functions_wrapper = document.querySelector('.modal-functions-wrapper');
const privacy_modal = document.querySelector('#privacy-modal');
const treading_modal_btn = document.querySelector('#treading-modal-btn');
const treading_modal = document.querySelector('#treading-modal');

const modal_close_btn = document.querySelector('.modal-close-btn');
const privacy_modal_close_btn = document.querySelector('#privacy-modal-close-btn');
const treading_modal_close_btn = document.querySelector('#treading-modal-close-btn');




privacy_modal_modal_btn.addEventListener("click", () => {
  privacy_modal.classList.add("is-active");
});

hum_privacy_modal_modal_btn.addEventListener("click", () => {
  privacy_modal.classList.add("is-active");
});

treading_modal_btn.addEventListener("click", () => {
  treading_modal.classList.add("is-active");
});


const closePrivacyModal = () => {
  // modal.style.bottom = `-${modalHeight}px`;
  privacy_modal.classList.remove("is-active");
  // modal.classList.remove("is-active");
};

privacy_modal_close_btn.addEventListener("click", () => {
  closePrivacyModal();
});

const closeTradingModal = () => {
  // modal.style.bottom = `-${modalHeight}px`;
  treading_modal.classList.remove("is-active");
  // modal.classList.remove("is-active");
};

treading_modal_close_btn.addEventListener("click", () => {
  closeTradingModal();
});

