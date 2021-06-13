export const toDark = function () {
    if (typeof window !== "undefined") {
        document
            .getElementsByTagName("html")[0]
            .setAttribute("class", "theme-mode-dark");
        document
            .getElementsByTagName("body")[0]
            .setAttribute("class", "theme-mode-dark");
        document
            .getElementById("theme-container")
            .setAttribute("class", "theme-mode-dark");
    }
    localStorage.setItem('theme', 'dark');
}

export const toLight = function () {
    if (typeof window !== "undefined") {
        document
            .getElementsByTagName("html")[0]
            .setAttribute("class", "theme-mode-light");
        document
            .getElementsByTagName("body")[0]
            .setAttribute("class", "theme-mode-light");
        document
            .getElementById("theme-container")
            .setAttribute("class", "theme-mode-light");
    }
    localStorage.setItem('theme', 'light');
}

export const currentMode = function () {
    return localStorage.getItem('theme');
}