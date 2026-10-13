function parseQuestionLC() {
    const parts = location.pathname.split("/").filter(Boolean);
    if (parts[0] !== "problems" || !parts[1]) return null;

    const slug = parts[1];
    const titleEl = document.querySelector(`.text-title-large a[href="/problems/${slug}/"]`);
    if (!titleEl) return null;

    const name = titleEl.textContent.replace(/^\s*\d+\.\s*/, "").replace(/[^A-Za-z0-9]/g, "");

    return { fileName: `${name}.cpp`, titleEl };
}

function addCopyButtonLC() {
    const existing = document.querySelector(".codeledger-buttons");
    const question = parseQuestionLC();

    if (!question) {
        existing?.remove();
        return;
    }
    if (existing?.dataset.file === question.fileName) return;
    existing?.remove();

    const container = document.createElement("div");
    container.className = "codeledger-buttons codeledger-buttons-lc";
    container.dataset.file = question.fileName;
    container.append(copyButton("codeledger-copy", question.fileName, "Click to copy"));

    question.titleEl.closest(".justify-between")?.after(container);
}
