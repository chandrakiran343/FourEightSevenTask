(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const m of s.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&n(m)}).observe(document,{childList:!0,subtree:!0});function d(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=d(r);fetch(r.href,s)}})();document.querySelector("#app").innerHTML=`
  <div class="flex h-fit lg:flex-row flex-col lg:gap-0 sm:gap-0 gap-4 w-full">
    <div id="displayarea" class="bg-black lg:h-screen h-[60vh] sm:h-[80vh] flex relative overflow-hidden lg:w-1/2 w-full">
      <div id="container" class="flex transition-all duration-200">
          <img class=" aspect-video" src="./six.webp"></img>
          <img class=" aspect-video" src="./one.webp"></img>
          <img class=" aspect-video" src="./two.webp"></img>
          <img class=" aspect-video" src="./three.webp"></img>
          <img class=" aspect-video" src="./four.webp"></img>
          <img class=" aspect-video" src="./five.webp"></img>
          <img class=" aspect-video" src="./six.webp"></img>
          <img class=" aspect-video" src="./one.webp"></img>
      </div>
      <div class="hidden absolute bottom-10 lg:flex gap-4 sm:flex-col left-5">
        <button id="control_1" class="border-solid border-white border-[2px] rounded-full overflow-hidden">
          <img draggable="false" class="lg:h-[60px] lg:w-[60px] h-[2px] w-[2px]" src="./one.webp"></img>
        </button>
        <button id="control_2" class="border-solid border-white border-[2px] rounded-full overflow-hidden">
          <img draggable="false" class="lg:h-[60px] lg:w-[60px] h-[2px] w-[2px]" src="./two.webp"></img>
        </button>
        <button id="control_3" class="border-solid border-white border-[2px] rounded-full overflow-hidden">
          <img draggable="false" class="lg:h-[60px] lg:w-[60px] h-[2px] w-[2px]" src="./three.webp"></img>
        </button>
        <button id="control_4" class="border-solid border-white border-[2px] rounded-full overflow-hidden">
          <img draggable="false" class="lg:h-[60px] lg:w-[60px] h-[2px] w-[2px]" src="./four.webp"></img>
        </button>
        <button id="control_5" class="border-solid border-white border-[2px] rounded-full overflow-hidden">
          <img draggable="false" class="lg:h-[60px] lg:w-[60px] h-[2px] w-[2px]" src="./five.webp"></img>
        </button>
        <button id="control_6" onclick="somefunc" class="border-solid border-white border-[2px] rounded-full overflow-hidden">
          <img draggable="false" class="lg:h-[60px] lg:w-[60px] h-[2px] w-[2px]" src="./six.webp"></img>
        </button>
      </div>
    </div>
    <div class="w-full lg:hidden flex mb-4 justify-center gap-2">
      <button id="mobile_control_1" class="border-solid h-[10px] w-[10px] bg-white rounded-full overflow-hidden">
    </button>
    <button id="mobile_control_2" class="border-solid h-[10px] w-[10px] bg-black rounded-full overflow-hidden">
    </button> 
    <button id="mobile_control_3" class="border-solid h-[10px] w-[10px] bg-black rounded-full overflow-hidden">
    </button>
    <button id="mobile_control_4" class="border-solid h-[10px] w-[10px] bg-black rounded-full overflow-hidden">
    </button>
    <button id="mobile_control_5" class="border-solid h-[10px] w-[10px] bg-black rounded-full overflow-hidden">
    </button>
    <button id="mobile_control_6" onclick="somefunc" class="border-solid h-[10px] w-[10px] bg-black rounded-full overflow-hidden">
    </button>
    </div>
    <div class="flex flex-col justify-start lg:justify-center gap-4 items-center bg-[#F6E6D9] h-screen lg:w-1/2 w-full">
      <span class="flex flex-col items-center w-fit border-solid border-0 border-b-2 border-black justify-center">
        <p class="text-black font-semibold text-4xl lg:text-[45px] leading-[1.3] p-0">“Drizzle” & “Sizzle”</p>
        <p class="text-black font-semibold text-4xl lg:text-[45px] leading-[0.5] mb-6 p-0 underlined">Extra Virgin Olive Oil</p>
      </span>
      <div class="grid lg:p-4 p-2 sm:w-4/5 m-0 w-full gap-4 lg:gap-2 sm:rounded-[15px] bg-[#FFF4EC] sm:border-solid border-black sm:border-2 rounded-1/2 text-black text-xl">
        <div class="w-full text-start text-[1rem] font-semibold leading-none text-[#3c422e]">Quantity</div>
        <div class="w-full flex lg:flex-nowrap flex-wrap justify-center lg:gap-4 gap-2 sm:gap-4 lg:p-4 items-start">
          <span class="flex h-1/2 sm:h-full lg:h-full sm:p-2 p-2 sm:w-[20%] lg:w-1/4 w-[40%] rounded-lg hover:bg-[#F6E6D9] cursor-pointer transition-all duration-500 border-solid border-black border-2 flex-col items-center justify-start">
            <h2>1</h2>
            <p class="text-sm">Set</p>
            <p class="text-xs">+10% off</p>
          </span>
          <span class="flex h-1/2 sm:h-full lg:h-full sm:p-2 p-2 sm:w-[20%] lg:w-1/4 w-[40%] rounded-lg hover:bg-[#F6E6D9] cursor-pointer border-solid border-black border-2 flex-col items-center justify-start">
            <h2>2</h2>
            <p class="text-sm">Sets</p>
            <p class="text-xs">Free Shipping</p>
            <p class="text-xs">+14% off</p>
          </span>
          <span class="flex h-1/2 sm:h-full lg:h-full sm:p-2 p-2 sm:w-[20%] lg:w-1/4 w-[40%] rounded-lg hover:bg-[#F6E6D9] cursor-pointer border-solid border-black border-2 flex-col items-center justify-start">
            <h2>3</h2>
            <p class="text-sm">Sets</p>
            <p class="text-xs">Free Shipping</p>
            <p class="text-xs">+15% off</p>
          </span>
          <span class="flex h-1/2 sm:h-full lg:h-full sm:p-2 p-2 sm:w-[20%] lg:w-1/4 w-[40%] rounded-lg hover:bg-[#F6E6D9] cursor-pointer border-solid border-black border-2 flex-col items-center justify-start">
            <h2>6</h2>
            <p class="text-sm">Sets</p>
            <p class="text-xs">Free Shipping</p>
            <p class="text-xs">+17% off</p>
          </span>
        </div>
        <div class="flex w-full justify-between items-center">
          <div class="text-[1rem] flex gap-2 items-center">
            <input type="radio" class="border-solid border-[1px] h-[1.25rem] w-[1.25rem] border-black rounded-[999px]" />
            <p>One Time Purchase</p>
          </div>
          <p class="text-xs">$222 - $192</p>
        </div>
        <div class="flex w-full justify-between items-center">
          <div class="text-[1rem] flex gap-2 items-center">
            <input type="radio" class="border-solid border-[1px] h-[1.25rem] w-[1.25rem] border-black rounded-[999px]" />
            <p>Subscribe & Save</p>
          </div>
          <p class="text-xs">$222 - $192</p>
        </div>
        <div id="dropdownroot" class="flex flex-col h-[45px] cursor-pointer transition-all border-solid rounded-[15px] border-black border-2 duration-400 overflow-hidden">
          <div class="p-2 w-full text-[1rem] hover:bg-[#F6E6D9]">Frequency - Every 1 month</div>
          <div class="p-2 w-full text-[1rem] hover:bg-[#F6E6D9]">Frequency - Every 2 months</div>
          <div class="p-2 w-full text-[1rem] hover:bg-[#F6E6D9]">Frequency - Every 3 months</div>
        </div>
        <div class="oddButton relative">
          <div class="w-full bg-[#D1E030] text-black text-[1rem] rounded-[15px] cursor-pointer p-2 text-center font-bold transition-all duration-500 test">
            Subscribe - $64.59
          </div>
        </div>
        <div class="text-sm w-full text-center">Skip or Cancel anytime</div>
      </div>
      <div class="h-fit w-full flex justify-center items-start">
        <div class="sm:w-3/4 w-full p-4 h-fit rounded-[15px]">
          <span class="flex w-full justify-between font-bold border-0 border-solid border-b-[1px] border-black">
            <div id="descreption" class="cursor-pointer w-full bg-[#3C422E] text-[#F6E6D9] rounded-t-[15px] text-black text-center border-solid border-[1px] border-b-[0px] border-black">DESCRIPTION</div>
            <div id="harvest" class="cursor-pointer w-full rounded-t-[15px] text-black text-center border-solid border-[1px] border-b-[0px] border-black">HARVEST</div>
            <div id="usecases" class="cursor-pointer w-full rounded-t-[15px] text-black text-center border-solid border-[1px] border-b-[0px] border-black">USE CASES</div>
          </span>
          <div id="content" class="w-full p-4 text-black h-full border-solid border-black border-[1px]">
            
          </div>
        </div>
      </div>
    </div>
  </div>
  `;const p=document.getElementById("dropdownroot");new Array(p.children.length).fill(0).forEach((t,o)=>{p.children.item(o).addEventListener("click",()=>{const n=p.style.height;p.style.height=n==="135px"?"45px":"135px"})});const c=document.getElementById("descreption"),b=document.getElementById("harvest"),u=document.getElementById("usecases"),x=document.getElementById("content"),i=(t,o)=>{if(o){t.style.color="#F6E6D9",t.style.backgroundColor="#3C422E";return}t.style.color="black",t.style.backgroundColor="transparent"};c.addEventListener("click",()=>{i(c,!0),i(b,!1),i(u,!1),x.innerHTML=`<p class="font-bold leading-[1.8]">DRIZZLE: 500ML</p>
  Extra Virgin finishing oil made from olives that are picked early, when flavor is bold and antioxidants are highest. Made for eating, never heating.
  <br />
  <br />
  <p class="font-bold leading-[1.8]">SIZZLE: 750ML</p>
  Extra Virgin cooking oil made from mature, mid-season olives that yield a more mellow flavor. Use it every day, in every way.`});b.addEventListener("click",()=>{i(c,!1),i(b,!0),i(u,!1),x.innerHTML=`<p class="font-bold leading-[1.8]">DRIZZLE:</p>
  Harvested in October, before the olives have ripened fully. Picked by hand because young olives need a firm yank to loosen up.
  <br />
  <br />
  <p class="font-bold leading-[1.8]">SIZZLE:</p>
  Harvested in November and December, when the olives are more mature. They’re pretty laid back by this point, so it only takes a few shakes to get them off the branch.`});u.addEventListener("click",()=>{i(c,!1),i(b,!1),i(u,!0),x.innerHTML=`<p class="font-bold leading-[1.8]">DRIZZLE:</p>
  A little Drizzle goes a long way! Use it on and around things like ice cream, pesto, popcorn, salads, sandwiches or even directly on your tongue (we won’t tell).
  <br />
  <br />
  <p class="font-bold leading-[1.8]">SIZZLE:</p>
  If you would put it in or on top of an oven, use sizzle. Chicken Cutlets, Sheet Pan Veggies, Fried Rice, or even Chocolate Chip Cookies! You name it, Sizzle sizzles it.
  `});c.click();const l=document.getElementById("container");let e=100;for(let t=1;t<7;t++){const o=document.getElementById(`control_${t}`),d=document.getElementById(`mobile_control_${t}`);o.addEventListener("click",()=>{e=t*100,l.style.transform=`translateX(-${e}%)`}),d.addEventListener("click",()=>{const n=document.getElementById(`mobile_control_${e>=100?e/100:e}`);n.style.backgroundColor="black",e=t*100,l.style.transform=`translateX(-${e}%)`,d.style.backgroundColor="white"})}document.getElementById("displayarea");let a=1,g,f;var h=document.createElement("img");h.src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";l.addEventListener("dragstart",t=>{g=t.clientX,t==null||t.dataTransfer.setDragImage(h,0,0)});l.addEventListener("dragend",t=>{f=t.clientX,l.style.transitionProperty="all",l.style.transitionDuration="200ms",g>f?a=1:a=-1,e=e+a*100,l.style.transform=`translateX(-${e}%)`,setTimeout(()=>{(e===0||e===700)&&(l.style.transition="none",l.style.transform=`translateX(-${e===700?100:600}%)`,e=e===700?100:600)},200)});l.addEventListener("touchstart",t=>{g=t.touches[0].clientX});l.addEventListener("touchend",t=>{f=t.changedTouches[0].clientX,l.style.transitionProperty="all",l.style.transitionDuration="200ms",g>f?a=1:a=-1;const o=document.getElementById(`mobile_control_${e>=100?e/100:e}`);o.style.backgroundColor="black",e=e+a*100,l.style.transform=`translateX(-${e}%)`;const d=document.getElementById(`mobile_control_${e==700?1:e==0?6:e/100}`);d.style.backgroundColor="white",setTimeout(()=>{(e===0||e===700)&&(l.style.transition="none",l.style.transform=`translateX(-${e===700?100:600}%)`,e=e===700?100:600)},200)});
