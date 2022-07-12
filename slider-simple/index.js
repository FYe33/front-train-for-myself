// 获取 dom 元素对象
const slider_item = document.querySelector('.slider-item')
const container = document.querySelector('.container')

// 坐标初始位置信息
let start;
// 滑块最大滑动距离 => container的宽度 - 滑块的宽度(包括border 2px)
let max = container.offsetWidth - slider_item.offsetWidth - 2;
// 滑动事件锁
let move_lock = false

// 给滑块绑定鼠标按下事件
slider_item.addEventListener('mousedown', (e) => {
  // 初始化 初始坐标
  start = e.pageX
  // 取消 transition 带来的滑动延迟
  slider_item.style.transition = 'none'
  // 解锁 滑动事件锁
  move_lock = true

  // 绑定 mousemove 事件
  document.onmousemove = (e) => {
    // 未解锁不滑动
    if (!move_lock) return

    const deltaX = Math.max(0, Math.min(max, e.pageX - start))
    slider_item.style.transform = `translateX(${deltaX}px)`
  }

  // 绑定 mouseup 事件
  document.onmouseup = () => {
    // 抬起锁定滑动事件锁
    move_lock = false
    // 重置滑块位置
    slider_item.style.transition = 'all .5s'
    slider_item.style.transform = 'translateX(0px)'
  }
})