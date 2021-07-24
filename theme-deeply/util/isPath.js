export const isIndex = (currentpath) => {
    return currentpath === '/'
}

export const isHome = (currentpath) => {
    return currentpath.indexOf('/home/') != -1
}

export const isRead = (currentpath) => {
    return currentpath.indexOf('/read/') != -1
}

export const isArchives = (currentpath) => {
    return currentpath.indexOf('/archives/') != -1
}

export const isCategories = (currentpath) => {
    return currentpath.indexOf('/categories/') != -1
}

export const isAbout = (currentpath) => {
    return currentpath.indexOf('/about/') != -1
}

export const isBlogRoll = (currentpath) => {
    return currentpath.indexOf('/blogroll/') != -1
}

export const isLab = (currentpath) => {
    return currentpath.indexOf('/lab/') != -1
}