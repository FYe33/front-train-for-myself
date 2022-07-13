// 获取元素对象
const container = document.querySelector('.container')
const btn = document.querySelector('.btn')

// 监听按钮，添加或删除容器的class
btn.addEventListener('click', () => container.classList.toggle('big'))

function create3dBox() {
  // 生成行和列的box
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      const box = document.createElement('div')
      box.classList.add('box')
      // 行：向左偏移(取负值)第j个Box 乘 Box宽度
      // 列: 向上偏移(取负值)第i个Box 乘 Box宽度
      box.style.backgroundPosition = `${-j * 250}px ${-i * 250}px`
      // 添加到container容器中
      container.appendChild(box)
    }
  }
}
create3dBox()
