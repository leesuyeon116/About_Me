let mainText = document.querySelector("h1");

function horizontalIndicator(e) {
    horizontalUnderLine.style.left = e.currentTarget.offsetLeft + "px";
    horizontalUnderLine.style.width = e.currentTarget.offsetWidth + "px";
    horizontalUnderLine.style.top = e.currentTarget.offsetTop + e.currentTarget.offsetHeight + "px";
}

// 스크롤 이벤트 리스너
window.addEventListener('scroll', function() {
    let value = this.window.scrollY;
    // 스크록 값이 100보다 크면 텍스트 사라짐
    if(value > 100) {
        mainText.style.animation = "disappear 1s ease-out forwards"; 
    }

});