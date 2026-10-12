function parseQuestion() {
    const parts = location.pathname.split("/").filter(Boolean);
    if (!parts.includes("problem")) return null;

    const index = parts.at(-1);
    const contestId = parts[0] === "contest" ? parts[1] : parts.at(-2);
    const titleEl = document.querySelector(".problem-statement .title");
    if (!titleEl || !/^\d+$/.test(contestId)) return null;

    const name = titleEl.textContent.replace(/^\s*[A-Z]\d*\.\s*/, "").replace(/[^A-Za-z0-9]/g, "");

    return { fileName: `${name}${contestId}${index}.cpp`, titleEl, contestId };
}

function parseContest(contestId) {
    const link = document.querySelector(`#sidebar a[href="/contest/${contestId}"]`);
    if (!link) return null;

    return { contestName: link.textContent.replace(/[^A-Za-z0-9]/g, "") };
}

function addCopyButton() {
    const container = document.createElement("div");
    container.className = "codeledger-buttons";

    const question = parseQuestion();
    if (!question) return;
    container.appendChild(copyButton("codeledger-copy", question.fileName, "Click to copy"));

    const contest = parseContest(question.contestId);
    if (contest) {
        container.appendChild(copyButton("codeledger-copy", contest.contestName, "Click to copy"));
    }

    question.titleEl.after(container);
}
