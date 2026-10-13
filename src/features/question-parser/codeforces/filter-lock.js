const FILTERS = [
    { name: "verdictName", text: "Accepted" },
    { name: "programTypeForInvoker", value: "cpp.gcc14-64-msys2-g++23" },
];

function lockFilters() {
    if (!location.pathname.includes("/status")) return;

    let changed = false;
    let form = null;

    for (const { name, text, value } of FILTERS) {
        const select = document.querySelector(`select[name="${name}"]`);
        const option = [...(select?.options ?? [])].find((o) => o.value === value || o.textContent.trim() === text);
        if (!option || select.value === option.value) continue;

        select.value = option.value;
        form = select.form;
        changed = true;
    }

    if (changed) form?.requestSubmit();
}
