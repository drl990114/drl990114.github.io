
/**
 * 移动元素高度
 * 
 * @param {*} obj 元素
 * @param {*} speed 速度
 * @param {*} zd 终点
 * @param {*} callback 回调
 */
export const move = (obj, speed, zd, callback) => {
  let timer;
  clearInterval(timer);
  let current = parseInt(getComputedStyle(obj, null).height);
  if (current > zd) {
    speed = -speed;
  }
  timer = setInterval(function () {
    let olddata = parseInt(getComputedStyle(obj, null).height);
    let newdata = olddata + speed; //speed正值为右，负值为左

    if ((speed < 0 && newdata < zd) || (speed > 0 && newdata > zd)) {
      newdata = zd;
    }
    obj.style.height = newdata + "px";
    if (newdata === zd) {
      clearInterval(timer);
      callback();
    }
  }, 30);
}

/**
 * 根据时间排序
 * 
 * @param {*} pagesArr 
 * @returns  sort后数组 新发布的在前面
 */
export const timeSort = (pagesArr) => {
  pagesArr.sort((a, b) => {
    let timeA = Date.parse(a.lastUpdated)
    let timeB = Date.parse(b.lastUpdated)
    return timeB - timeA
  })
  return pagesArr
}

/**
 * 格式化lastupdated
 * @param {*} time 
 * @returns  字符串
 */
export const nearFormatTime = (lastUpdated) => {
  let time = new Date(lastUpdated)
  let year = time.getFullYear()
  let day = time.getDate()
  let Month = time.getMonth() + 1
  return (`${year}-${Month}-${day}`)
}

/**
 * 获得文章全部分类categories
 * 
 * @param {*} pages  全部文章
 * @returns 全部分类数组
 */
export const getCategories = (pages) => {
  let categoriesArr = []
  let currentCateforie
  pages.forEach(item => {
    currentCateforie = item.frontmatter.categories
    if (currentCateforie && currentCateforie.length !== 0) {
      for (let i = 0; i < currentCateforie.length; i++) {
        if (categoriesArr.indexOf(currentCateforie[i]) === -1) {
          categoriesArr.push(currentCateforie[i])
        }
      }
    }
  })
  return categoriesArr
}

export const filterConfigMd = (pages) => {
  let articleArr = []
  pages.forEach(item => {
    if (!item.frontmatter.hasOwnProperty("article")
      && !item.article
      && item.frontmatter
      && item.relativePath != "README.md") {
      articleArr.push(item)
    }
  })

  return articleArr
}

/**
 * 
 * @param {*} pages 
 * @returns 时间线map
 */
export const getTimeLines = (pages) => {
  let resultArr = new Map()
  let upDated = []
  const articles = filterConfigMd(pages)
  //获得更新过的文章，并且将文章覆盖的年份给map
  articles.forEach(item => {
    if (item.lastUpdated) {
      upDated.push(item)
      let time = new Date(item.lastUpdated)
      let year = time.getFullYear()
      if (!resultArr.has(year) && typeof year === 'number') {
        resultArr.set(year, [])
      }
    }
  })
  //如果key相同则push到对应的数组
  upDated.forEach(item => {
    let time = new Date(item.lastUpdated)
    let year = time.getFullYear()
    resultArr.get(year).push(item)
  })
  return resultArr
}


export function getUrlParams(name) {
  if (typeof window != 'undefined') {
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); //定义正则表达式 
    let r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURIComponent(decodeURIComponent(r[2]));
    return null;
  }
}


export const findPrevNext = (currentPage, pages) => {
  const PATH = currentPage.path
  const currentIndex = pages.findIndex(item => {
    if (item.path == PATH) {
      return true
    } else return false
  })
  console.log(currentIndex)
  if (currentIndex != -1 && currentIndex != 0 && currentIndex != pages.length) {
    return {
      prev: pages[currentIndex - 1],
      next: pages[currentIndex + 1]
    }
  }
  if (currentIndex == 0) {
    return {
      prev: null,
      next: pages[currentIndex + 1]
    }
  }
  if (currentIndex == pages.length) P
  return {
    prev: pages[currentIndex - 1],
    next: null
  }
}


export const getRelevant = (currentPage, pages) => {
  if (!currentPage) return
  const arcticlePage = filterConfigMd(pages)
  const relevantArr = []
  const arcticles = arcticlePage.filter(page=>page.path != currentPage.path)
  if (currentPage.frontmatter.tags &&
    currentPage.frontmatter.tags.length > 0) {
    currentPage.frontmatter.tags.forEach(tag => {
      arcticles.forEach(item => {
        if (item.frontmatter.tags &&
          item.frontmatter.tags.length > 0) {
          item.frontmatter.tags.findIndex(itm => {
            if (itm == tag) {
              relevantArr.push(item)
              return true
            } else return false
          })
        }
      })
    })
  }
  if (relevantArr.length > 5) {
    relevantArr.length = 5
    return relevantArr
  } else return relevantArr
}