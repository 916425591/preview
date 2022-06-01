window.baseSceneUrl='/preview/models/demo/demo0528.gltf';
window.baseUrl='';//服务器目录
window.baseImage='/preview/image/';//服务器目录
/*临时加一个效果切换按钮*/
const dom =  document.createElement('div');
let isClick = false;
dom.style.background = "#092266";
dom.style.borderRadius="25px";
dom.style.padding = "6px 10px";
dom.style.position = "absolute";
dom.style.right = "0.1%";
dom.style.bottom = "0.5%";
dom.innerHTML = "效果切换";
dom.addEventListener('click',()=>{
    if(!isClick) {
        META.tunnel.loadeffect();
        isClick = true;
    }
})
document.body.appendChild(dom);

