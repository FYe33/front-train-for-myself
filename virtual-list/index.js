// 获取元素对象
const container = document.querySelector('.container')
const content = document.querySelector('.content')

// 容器宽度(不算border)
const container_width = container.offsetWidth - 10

// 记录上一个渲染的首节点下标
let last_first;

// 声明数据源
let arr = []
// 装载数据
for (let i = 1; i <= 100; i++) {
  // 生成 n -> m 中间的一个随机数 (n, m)
  /*
    1、 m-n-2 = w
    2、 Math.round(Math.random() * w + n + 1)
  */
  // (0, container_width)
  const range = Math.round(Math.random() * (container_width - 2) + 1) 
  arr.push({
    i,
    range
  })
}

// 内容器初始高度设置
const inner_height = arr.length * 50
content.style.height = `${inner_height}px`
re_render(0)


container.addEventListener('scroll', (e) => {
  // 获取滚动卷入页面高度 e.target.scrollTop
  const firstIndex = Math.ceil(e.target.scrollTop / 50)
  re_render(firstIndex)
})

// 重新渲染列表
function re_render(firstIndex) {
  // 防止频繁渲染
  if (last_first === firstIndex) return
  last_first = firstIndex
  // 删除所有已存在节点
  content.innerHTML = ''
  // 结束结点下标
  const endIndex = firstIndex + 10
  for (let i = firstIndex; i < endIndex; i++) {
    const el = document.createElement('li')
    el.innerHTML = `${arr[i].i}`
    el.style.paddingLeft = `${arr[i].range}px`
    content.appendChild(el)
  }

  // 重新设置内容器高度(防止高度溢出)
  // content.style.height = `${inner_height - 50 * firstIndex}px`
  // 设置padding-top 显示当前位置元素
  content.style.paddingTop = `${50 * firstIndex}px`
}


  