// 存数据
// name：命名 data：数据
function saveData(name, data) {
    localStorage.setItem(name, JSON.stringify({ 'time': Date.now(), 'data': data }))
}

// 取数据
// name：命名 time：过期时长,单位分钟,如传入30,即加载数据时如果超出30分钟返回0,否则返回数据
function loadData(name, time) {
    let d = JSON.parse(localStorage.getItem(name));
    // 过期或有错误返回 0 否则返回数据
    if (d) {
        let t = Date.now() - d.time
        if (t < (time * 60 * 1000) && t > -1) return d.data;
    }
    return 0;
}

// 上面两个函数如果你有其他需要存取数据的功能，也可以直接使用

// 读取背景
try {
    let data = loadData('blogbg', 1440)
    if (data) changeBg(data, 1)
    else localStorage.removeItem('blogbg');
} catch (error) { localStorage.removeItem('blogbg'); }

// 切换背景函数
// 此处的flag是为了每次读取时都重新存储一次,导致过期时间不稳定
// 如果flag为0则存储,即设置背景. 为1则不存储,即每次加载自动读取背景.
function changeBg(s, flag) {
    let bg = document.getElementById('web_bg')
    if (s.charAt(0) == '#') {
        bg.style.backgroundColor = s
        bg.style.backgroundImage = 'none'
    } else bg.style.backgroundImage = s
    if (!flag) { saveData('blogbg', s) }
}

// 以下为2.0新增内容

// 创建窗口
var winbox = ''

function createWinbox() {
    let div = document.createElement('div')
    document.body.appendChild(div)
    winbox = WinBox({
        id: 'changeBgBox',
        index: 999,
        title: "切换背景",
        x: "center",
        y: "center",
        minwidth: '300px',
        height: "40%",
        background: 'rgb(186 56 253)',
        onmaximize: () => { div.innerHTML = `<style>body::-webkit-scrollbar {display: none;}div#changeBgBox {width: 100% !important;}</style>` },
        onrestore: () => { div.innerHTML = '' }
    });
    winResize();
    window.addEventListener('resize', winResize)

    // 每一类我放了一个演示，直接往下复制粘贴 a标签 就可以，需要注意的是 函数里面的链接 冒号前面需要添加反斜杠\进行转义
    winbox.body.innerHTML = `
    <div id="article-container" style="padding:10px;">
<p><button onclick="localStorage.removeItem('blogbg');location.reload();" style="background:#5fcdff;display:block;width:100%;padding: 15px 0;border-radius:6px;color:white;"><i class="fa-solid fa-arrows-rotate"></i> 点我恢复默认背景</button></p>

<details class="toggle"><summary class="toggle-button" style="">纯色</summary>
<div class="toggle-content">
<div class="bgbox">
<a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #724C37" onclick="changeBg('#724C37')"></a>
<a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #DFC298" onclick="changeBg('#DFC298')"></a>
<a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #953F23" onclick="changeBg('#953F23')"></a>
<a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #6C7878" onclick="changeBg('#6C7878')"></a>
</div>
</div>
</details>

<details class="toggle"><summary class="toggle-button" style="">查看电脑壁纸</summary>
<div class="toggle-content">
<div class="bgbox">
<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://p2.qhimg.com/bdm/0_0_0/t019ca75cd449be50c1.jpg)" class="imgbox" onclick="changeBg('url(https\://p2.qhimg.com/bdm/0_0_0/t019ca75cd449be50c1.jpg)')"></a>
<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://p8.qhimg.com/bdm/0_0_0/t017bdaabc52301aa0b.jpg)" class="imgbox" onclick="changeBg('url(https\://p8.qhimg.com/bdm/0_0_0/t017bdaabc52301aa0b.jpg)')"></a>
<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://p0.qhimg.com/bdm/0_0_0/t01cc44146214047d1e.jpg)" class="imgbox" onclick="changeBg('url(https\://p0.qhimg.com/bdm/0_0_0/t01cc44146214047d1e.jpg)')"></a>
<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://p1.qhimg.com/bdm/0_0_0/t01e66d486b8e826270.jpg)" class="imgbox" onclick="changeBg('url(https\://p1.qhimg.com/bdm/0_0_0/t01e66d486b8e826270.jpg)')"></a>
<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://p1.qhimg.com/bdm/0_0_0/t012e62633a2eea392b.jpg)" class="imgbox" onclick="changeBg('url(https\://p1.qhimg.com/bdm/0_0_0/t012e62633a2eea392b.jpg)')"></a>
<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://p0.qhimg.com/bdm/0_0_0/t01ae8a70831c1f91cc.jpg)" class="imgbox" onclick="changeBg('url(https\://p0.qhimg.com/bdm/0_0_0/t01ae8a70831c1f91cc.jpg)')"></a>
<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://p6.qhimg.com/bdm/0_0_0/t0163cb132bb8a0a0ea.jpg)" class="imgbox" onclick="changeBg('url(https\://p6.qhimg.com/bdm/0_0_0/t0163cb132bb8a0a0ea.jpg)')"></a>
<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://p1.qhimg.com/bdm/0_0_0/t0139fb6f578296ca4a.jpg)" class="imgbox" onclick="changeBg('url(https\://p1.qhimg.com/bdm/0_0_0/t0139fb6f578296ca4a.jpg)')"></a>
<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://p9.qhimg.com/bdm/0_0_0/t01a31f699a151a9c12.jpg)" class="imgbox" onclick="changeBg('url(https\://p9.qhimg.com/bdm/0_0_0/t01a31f699a151a9c12.jpg)')"></a>
<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://p6.qhimg.com/bdm/0_0_0/t01b499b02017ac021a.jpg)" class="imgbox" onclick="changeBg('url(https\://p6.qhimg.com/bdm/0_0_0/t01b499b02017ac021a.jpg)')"></a>
<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://p5.qhimg.com/bdm/0_0_0/t01807e5a724cedb514.jpg)" class="imgbox" onclick="changeBg('url(https\://p5.qhimg.com/bdm/0_0_0/t01807e5a724cedb514.jpg)')"></a>
<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://p5.qhimg.com/bdm/0_0_0/t01f24ce2d332724cd8.jpg)" class="imgbox" onclick="changeBg('url(https\://p5.qhimg.com/bdm/0_0_0/t01f24ce2d332724cd8.jpg)')"></a>
<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://p2.qhimg.com/bdm/0_0_0/t01593365222eb4780e.jpg)" class="imgbox" onclick="changeBg('url(https\://p2.qhimg.com/bdm/0_0_0/t01593365222eb4780e.jpg)')"></a>
<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://p1.qhimg.com/bdm/0_0_0/t01fa4f975529b3a6e4.jpg)" class="imgbox" onclick="changeBg('url(https\://p1.qhimg.com/bdm/0_0_0/t01fa4f975529b3a6e4.jpg)')"></a>
<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://p3.qhimg.com/bdm/0_0_0/t01fe93ee54ba6c2cbb.jpg)" class="imgbox" onclick="changeBg('url(https\://p3.qhimg.com/bdm/0_0_0/t01fe93ee54ba6c2cbb.jpg)')"></a>
<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://p2.qhimg.com/bdm/0_0_0/t0121521d798af56ea3.jpg)" class="imgbox" onclick="changeBg('url(https\://p2.qhimg.com/bdm/0_0_0/t0121521d798af56ea3.jpg)')"></a>
<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://p2.qhimg.com/bdm/0_0_0/t01f7b8e43cf673aa03.jpg)" class="imgbox" onclick="changeBg('url(https\://p2.qhimg.com/bdm/0_0_0/t01f7b8e43cf673aa03.jpg)')"></a>
<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://p9.qhimg.com/bdm/0_0_0/t01d2199eb3d320c511.jpg)" class="imgbox" onclick="changeBg('url(https\://p9.qhimg.com/bdm/0_0_0/t01d2199eb3d320c511.jpg)')"></a>
<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://p0.qhimg.com/bdm/0_0_0/t018ffab4c6eb805d71.jpg)" class="imgbox" onclick="changeBg('url(https\://p0.qhimg.com/bdm/0_0_0/t018ffab4c6eb805d71.jpg)')"></a>
<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://p5.qhimg.com/bdm/0_0_0/t01789c4234131f59e9.jpg)" class="imgbox" onclick="changeBg('url(https\://p5.qhimg.com/bdm/0_0_0/t01789c4234131f59e9.jpg)')"></a>
<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://p3.qhimg.com/bdm/0_0_0/t01f3b0dd617027a0b2.jpg)" class="imgbox" onclick="changeBg('url(https\://p3.qhimg.com/bdm/0_0_0/t01f3b0dd617027a0b2.jpg)')"></a>
<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://p0.qhimg.com/bdm/0_0_0/t017a398b8041b28261.jpg)" class="imgbox" onclick="changeBg('url(https\://p0.qhimg.com/bdm/0_0_0/t017a398b8041b28261.jpg)')"></a>
<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://p2.qhimg.com/bdm/0_0_0/t0120c23de0d098ff4d.jpg)" class="imgbox" onclick="changeBg('url(https\://p2.qhimg.com/bdm/0_0_0/t0120c23de0d098ff4d.jpg)')"></a>
<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://p8.qhimg.com/bdm/0_0_0/t01c7a5166f364a8305.jpg)" class="imgbox" onclick="changeBg('url(https\://p8.qhimg.com/bdm/0_0_0/t01c7a5166f364a8305.jpg)')"></a>
<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://p5.qhimg.com/bdm/0_0_0/t0113f4c1a12c9cd384.jpg)" class="imgbox" onclick="changeBg('url(https\://p5.qhimg.com/bdm/0_0_0/t0113f4c1a12c9cd384.jpg)')"></a>
<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://p0.qhimg.com/bdm/0_0_0/t01e3ccdcbe92552a5a.jpg)" class="imgbox" onclick="changeBg('url(https\://p0.qhimg.com/bdm/0_0_0/t01e3ccdcbe92552a5a.jpg)')"></a>
<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://p5.qhimg.com/bdm/0_0_0/t019404583900f8af87.jpg)" class="imgbox" onclick="changeBg('url(https\://p5.qhimg.com/bdm/0_0_0/t019404583900f8af87.jpg)')"></a>
<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://p4.qhimg.com/bdm/0_0_0/t01a5142a7f9c122d72.jpg)" class="imgbox" onclick="changeBg('url(https\://p4.qhimg.com/bdm/0_0_0/t01a5142a7f9c122d72.jpg)')"></a>
<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://p7.qhimg.com/bdm/0_0_0/t01dda5650a1a5b16b2.jpg)" class="imgbox" onclick="changeBg('url(https\://p7.qhimg.com/bdm/0_0_0/t01dda5650a1a5b16b2.jpg)')"></a>
<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://p8.qhimg.com/bdm/0_0_0/t01e7ef7536c988293e.jpg)" class="imgbox" onclick="changeBg('url(https\://p8.qhimg.com/bdm/0_0_0/t01e7ef7536c988293e.jpg)')"></a>
<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://p0.qhimg.com/bdm/0_0_0/t01e53ae04f36890b7c.jpg)" class="imgbox" onclick="changeBg('url(https\://p0.qhimg.com/bdm/0_0_0/t01e53ae04f36890b7c.jpg)')"></a>
<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://p5.qhimg.com/bdm/0_0_0/t01521998ee91e981e3.jpg)" class="imgbox" onclick="changeBg('url(https\://p5.qhimg.com/bdm/0_0_0/t01521998ee91e981e3.jpg)')"></a>
<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://p4.qhimg.com/bdm/0_0_0/t01e37d032e3d417a3e.jpg)" class="imgbox" onclick="changeBg('url(https\://p4.qhimg.com/bdm/0_0_0/t01e37d032e3d417a3e.jpg)')"></a>
<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://p3.qhimg.com/bdm/0_0_0/t012692c21ef013fc43.jpg)" class="imgbox" onclick="changeBg('url(https\://p3.qhimg.com/bdm/0_0_0/t012692c21ef013fc43.jpg)')"></a>
<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://p7.qhimg.com/bdm/0_0_0/t019dd38c17e8a99944.jpg)" class="imgbox" onclick="changeBg('url(https\://p7.qhimg.com/bdm/0_0_0/t019dd38c17e8a99944.jpg)')"></a>
<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://p1.qhimg.com/bdm/0_0_0/t01dc554658ffc4da1e.jpg)" class="imgbox" onclick="changeBg('url(https\://p1.qhimg.com/bdm/0_0_0/t01dc554658ffc4da1e.jpg)')"></a>
<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://p8.qhimg.com/bdm/0_0_0/t01b0006374235fb221.jpg)" class="imgbox" onclick="changeBg('url(https\://p8.qhimg.com/bdm/0_0_0/t01b0006374235fb221.jpg)')"></a>
<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://p6.qhimg.com/bdm/0_0_0/t017ef2e6b41f88299a.jpg)" class="imgbox" onclick="changeBg('url(https\://p6.qhimg.com/bdm/0_0_0/t017ef2e6b41f88299a.jpg)')"></a>
<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://p4.qhimg.com/bdm/0_0_0/t0187664fc4dcd82014.jpg)" class="imgbox" onclick="changeBg('url(https\://p4.qhimg.com/bdm/0_0_0/t0187664fc4dcd82014.jpg)')"></a>
<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://p0.qhimg.com/bdm/0_0_0/t01724c85173a2c2add.jpg)" class="imgbox" onclick="changeBg('url(https\://p0.qhimg.com/bdm/0_0_0/t01724c85173a2c2add.jpg)')"></a>
</div>
</div>
</details>
<details class="toggle"><summary class="toggle-button" style="">查看手机壁纸</summary>
<div class="toggle-content">
<div class="bgbox">
<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://tx2.a.kwimgs.com/ufile/atlas/NTIxMTUwOTI0NzU1NjU5MDkwNV8xNjI3MTM2MTQyODMw_1.webp)" class="pimgbox" onclick="changeBg('url(https\://tx2.a.kwimgs.com/ufile/atlas/NTIxMTUwOTI0NzU1NjU5MDkwNV8xNjI3MTM2MTQyODMw_1.webp)')"></a>
<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://tx2.a.kwimgs.com/ufile/atlas/NTIxMTUwOTI0NzU1NjU5MDkwNV8xNjI3MTM2MTQyODMw_2.webp)" class="pimgbox" onclick="changeBg('url(https\://tx2.a.kwimgs.com/ufile/atlas/NTIxMTUwOTI0NzU1NjU5MDkwNV8xNjI3MTM2MTQyODMw_2.webp)')"></a>
<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://tx2.a.kwimgs.com/ufile/atlas/NTIxMTUwOTI0NzU1NjU5MDkwNV8xNjI3MTM2MTQyODMw_9.webp)" class="pimgbox" onclick="changeBg('url(https\://tx2.a.kwimgs.com/ufile/atlas/NTIxMTUwOTI0NzU1NjU5MDkwNV8xNjI3MTM2MTQyODMw_9.webp)')"></a>
<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://tx2.a.kwimgs.com/ufile/atlas/NTIxMTUwOTI0NzU1NjU5MDkwNV8xNjI3MTM2MTQyODMw_12.webp)" class="pimgbox" onclick="changeBg('url(https\://tx2.a.kwimgs.com/ufile/atlas/NTIxMTUwOTI0NzU1NjU5MDkwNV8xNjI3MTM2MTQyODMw_12.webp)')"></a>
<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://tx2.a.kwimgs.com/ufile/atlas/NTIxMTUwOTI0NzU1NjU5MDkwNV8xNjI3MTM2MTQyODMw_14.webp)" class="pimgbox" onclick="changeBg('url(https\://tx2.a.kwimgs.com/ufile/atlas/NTIxMTUwOTI0NzU1NjU5MDkwNV8xNjI3MTM2MTQyODMw_14.webp)')"></a>
<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://tx2.a.kwimgs.com/ufile/atlas/NTIxMTUwOTI0NzU1NjU5MDkwNV8xNjI3MTM2MTQyODMw_18.webp)" class="pimgbox" onclick="changeBg('url(https\://tx2.a.kwimgs.com/ufile/atlas/NTIxMTUwOTI0NzU1NjU5MDkwNV8xNjI3MTM2MTQyODMw_18.webp)')"></a>
<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://ali2.a.kwimgs.com/ufile/atlas/NTI0NjY5MzYxODM0MzAyNzI0M18xNjI3MzA5MzM1Mzg1_4.webp)" class="pimgbox" onclick="changeBg('url(https\://ali2.a.kwimgs.com/ufile/atlas/NTI0NjY5MzYxODM0MzAyNzI0M18xNjI3MzA5MzM1Mzg1_4.webp)')"></a>
<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://ali2.a.kwimgs.com/ufile/atlas/NTI0NjY5MzYxODM0MzAyNzI0M18xNjI3MzA5MzM1Mzg1_15.webp)" class="pimgbox" onclick="changeBg('url(https\://ali2.a.kwimgs.com/ufile/atlas/NTI0NjY5MzYxODM0MzAyNzI0M18xNjI3MzA5MzM1Mzg1_15.webp)')"></a>
<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://ali2.a.kwimgs.com/ufile/atlas/NTIwNzU2ODU5NTc2NzI3MTUzOV8xNjI3NDc4NDAyOTI0_2.webp)" class="pimgbox" onclick="changeBg('url(https\://ali2.a.kwimgs.com/ufile/atlas/NTIwNzU2ODU5NTc2NzI3MTUzOV8xNjI3NDc4NDAyOTI0_2.webp)')"></a>
<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://ali2.a.kwimgs.com/ufile/atlas/NTIwNzU2ODU5NTc2NzI3MTUzOV8xNjI3NDc4NDAyOTI0_4.webp)" class="pimgbox" onclick="changeBg('url(https\://ali2.a.kwimgs.com/ufile/atlas/NTIwNzU2ODU5NTc2NzI3MTUzOV8xNjI3NDc4NDAyOTI0_4.webp)')"></a>
</div>
</div>
</details>

<details class="toggle"><summary class="toggle-button" style="">渐变色</summary>
<div class="toggle-content">
<div class="bgbox">
<a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, #eecda3, #ef629f)" onclick="changeBg('linear-gradient(to right, #eecda3, #ef629f)')"></a>
<a href="javascript:;" rel="noopener external nofollow" class="box" style="background-image: linear-gradient(180deg, #A9C9FF 0%, #FFBBEC 100%)" onclick="changeBg('linear-gradient(180deg, #A9C9FF 0%, #FFBBEC 100%)')"></a>
<a href="javascript:;" rel="noopener external nofollow" class="box" style="background-image: linear-gradient(238deg, #FA8BFF 0%, #2BD2FF 52%, #2BFF88 90%)" onclick="changeBg('linear-gradient(238deg, #FA8BFF 0%, #2BD2FF 52%, #2BFF88 90%)')"></a>
<a href="javascript:;" rel="noopener external nofollow" class="box" style="background-image: linear-gradient(19deg, #3EECAC 0%, #EE74E1 100%)" onclick="changeBg('linear-gradient(19deg, #3EECAC 0%, #EE74E1 100%)')"></a>
</div>
</div>
</details>

`;
}

// 适应窗口大小
function winResize() {
    let box = document.querySelector('#changeBgBox')
    if (!box || box.classList.contains('min') || box.classList.contains('max')) return // 2023-02-10更新
    var offsetWid = document.documentElement.clientWidth;
    if (offsetWid <= 768) {
        winbox.resize(offsetWid * 0.95 + "px", "90%").move("center", "center");
    } else {
        winbox.resize(offsetWid * 0.6 + "px", "70%").move("center", "center");
    }
}

// 切换状态，窗口已创建则控制窗口显示和隐藏，没窗口则创建窗口
function toggleWinbox() {
    if (document.querySelector('#changeBgBox')) winbox.toggleClass('hide');
    else createWinbox();
}