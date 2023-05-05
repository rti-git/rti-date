<template>

<div class="relative isolate flex items-center justify-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-10 sm:px-3.5">

  <header class="absolute inset-x-0 top-0 z-50">
    <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1">
        <a href="https://www.rti.org.tw/" target="_blank" class="-m-1.5 p-1.5">
          <span class="sr-only">Your Company</span>
          <img class="h-8 w-auto" src="https://topic.rti.org.tw/sns/wp-content/uploads/2020/04/960x960-1-1.jpg" alt="">
        </a>
      </div>

      <!-- <div class="hidden lg:flex lg:gap-x-12">
        <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Features</a>
        <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Marketplace</a>
        <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Company</a>
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
      </div> -->
    </nav>

  </header>


  <div class="flex flex-wrap items-center pr-12 gap-x-12 text-2xl gap-y-2">
  
  <NuxtLink to="/">
    <button class="btn btn-primary font-semibold leading-6">首頁</button>
  </NuxtLink>  
 <NuxtLink to="/send">
    <button class="btn btn-primary">參加辦法</button>
  </NuxtLink>
  <NuxtLink to="/notes">
    <button class="btn btn-primary">注意事項</button>
  </NuxtLink>
   <NuxtLink to="/contact">
    <button class="btn btn-primary">聯絡我們</button>
  </NuxtLink>
  </div>
 </div>
    <div class="container p-12"> 
      <div class="list flex flex-col m-10">
          <p class="text-4xl">1.參加資格</p>
            <ul class="list-disc p-8">
              <li>全球人士，不限國籍（惟明信片內容需擇一本臺19種外語文字書寫）。</li>
            </ul>
          <p class="text-4xl">2.收件日期及方式</p>
              <ul class="list-disc p-8">
                  <li>收件日期:</li>
                <p>即日起至2023年6月18日（日）止。(台灣時間)</p>
              </ul>
              <ul class="list-disc p-8">
                  <li>收件地址:</li>
                <p>臺灣111臺北郵局第123-199號信箱<br>P.O. Box 123-199, Taipei 111, Taiwan (R.O.C.)</p>
              </ul>
              <ul class="list-disc p-4">
                  <li>參加方式:</li>
                <ul class="p-4">
                  <li type="circle">依徵集內容書寫明信片。（明信片可自行設計或購買成品）</li>
                  <li type="circle">從所在國家或地區投遞明信片。</li>
                </ul>
              </ul>
           <p class="text-4xl">3.徵集規範說明</p>
               <ul class="list-disc p-4">
                <li>明信片封面：以寄件人所在國家或城市的各樣特色，以能一眼識別其所在國家或城市尤佳，如：</li>
                <ul class="p-4">
                  <li type="circle">著名地標建築：巴黎鐵塔、倫敦西敏寺、美國自由女神、法國羅浮宮、義大利比薩斜塔…等。</li>
                  <li type="circle">風景名勝：日本富士山、越南下龍灣、美國大峽谷、南非好望角、委瑞內拉天使瀑布…等。</li>
                  <li type="circle">信仰風俗：泰國四面佛、柬埔寨吳哥窟、埃及金字塔、伊斯塔堡聖索菲亞清真寺、梵蒂岡聖比得大教堂…等。</li>
                  <li type="circle">文化生活：搭土耳其熱汽球、看極光、大堡礁潛水、西班牙燉飯、日本壽司、德國豬腳…等。</li>
                </ul>
               </ul>
               <ul class="list-disc p-4">
                <li>明信片內容：請親筆書寫，內容如下（字數請視明信片書寫空間而定）：</li>
               <ul class="p-4">
                <li type="circle">問候語須為「dear rti, 我是__________（姓名全名）來自__________（國家或城市）。」
範例：「dear rti, i am grace wu from singapore.」</li>
                <li type="circle">對世界和平的祝福話語。</li>
                <li type="circle">回寄明信片地址及英文全名。（為回寄明信片用途，請務必提供完整地址及英文姓名全名，若有隱私權疑慮請另填表單，表單連結：www.網址.com.tw；如不便填寫表單，請將完整地址及英文姓名全名email至dearrti@gmail.com）</li>
               </ul>
               </ul>
      </div>
    </div>
</template>
