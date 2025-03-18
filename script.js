// 切换展开和收起
function toggleContent(id, element) {
    let content = document.getElementById(id);
    let arrow = element.querySelector(".arrow");

    if (content.style.display === "none" || content.classList.contains("hidden")) {
        content.style.display = "block";
        content.classList.remove("hidden");
        arrow.innerHTML = "v"; // 变成向下箭头
    } else {
        content.style.display = "none";
        arrow.innerHTML = "&#60;"; // 变回向左箭头
    }
}

function toggleSection(id) {
    let content = document.getElementById(id);
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}