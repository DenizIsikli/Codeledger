function parseQuestionCSES() {
    const parts = location.pathname.split("/").filter(Boolean);
    if (parts[0] !== "problemset" || parts[1] !== "task") return null;

    const titleEl = document.querySelector(".title-block");
    const name = titleEl?.querySelector("h1")?.textContent.replace(/[^A-Za-z0-9]/g, "");
    if (!titleEl || !name) return null;

    return { fileName: `${name}${parts[2]}.cpp`, titleEl };
}

function addCopyButtonCSES() {
    const question = parseQuestionCSES();
    if (!question) return;

    const container = document.createElement("div");
    container.className = "codeledger-buttons codeledger-buttons-cses";
    container.append(copyButton("codeledger-copy", question.fileName, "Click to copy"));

    question.titleEl.append(container);
}
