function copyButton(className, content, title) {
    const button = document.createElement("button");
    button.className = className;
    button.textContent = content;
    button.title = title;

    button.addEventListener("click", async () => {
        await navigator.clipboard.writeText(content);
        button.classList.remove("copied");
        void button.offsetWidth;
        button.classList.add("copied");
    });

    button.addEventListener("animationend", () => button.classList.remove("copied"));

    return button;
}
