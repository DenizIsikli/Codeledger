function main() {
    const host = location.hostname;

    if (host.endsWith("codeforces.com")) {
        addCopyButtonCF();
        lockFilters();
    } else if (host.endsWith("leetcode.com")) {
        addCopyButtonLC();
    } else if (host.endsWith("cses.fi")) {
        addCopyButtonCSES();
    }
}

main();
