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

export const timeSort = (pagesArr) => {
  pagesArr.sort((a,b)=>{
    let timeA = Date.parse(a.lastUpdated)
    let timeB = Date.parse(b.lastUpdated)
     return timeB - timeA
  })
  return pagesArr
}

export const nearFormatTime = (lastUpdated) =>{
  let time = new Date(lastUpdated)
  let year = time.getFullYear()
  let day = time.getDate()
  let Month = time.getMonth() + 1
  return (`${year}-${Month}-${day}`)
}