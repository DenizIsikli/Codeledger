# CodeLedger

A small Firefox extension for faster archiving and less busywork while solving on Codeforces and LeetCode. It removes the repetitive steps of saving solutions to a structured archive, such as typing out filenames and re-selecting the same filters every time.

## What it does

**Copyable filenames.** A button under the problem title copies a formatted filename for the solution:

| Site       | Example                              |
| ---------- | ------------------------------------ |
| Codeforces | `InhabitantoftheDeepSea1955C.cpp`    |
| LeetCode   | `MaximumAlternatingSumofSquares.cpp` |

On Codeforces contest pages, a second button copies the contest name, for example `CodeforcesRound960Div2`.

**Locked filters.** On Codeforces status pages, the verdict and language filters are set to _Accepted_ and _C++_ automatically.

## Installation

### Install

Download the latest signed `.xpi` from the [Releases](../../releases) page. In Firefox, open `about:addons`, click the settings icon, choose **Install Add-on From File** and select the file.

### Development

Clone the repository:

```bash
git clone https://github.com/DenizIsikli/Codeledger.git
```

Open `about:debugging#/runtime/this-firefox`, click **Load Temporary Add-on** and select `manifest.json` from the cloned folder. Click **Reload** after making changes.

Temporary add-ons may need site access granted manually. Click the extensions icon in the toolbar and allow CodeLedger on Codeforces and LeetCode.

### Releasing your own build

Signing requires a free account on [addons.mozilla.org](https://addons.mozilla.org) and your own fork of this repository, since the release workflow runs with your repository's secrets.

1. Fork the repository on GitHub and clone your fork.
2. Change `id` in `manifest.json` to your own, for example `codeledger@yourname`.
3. Generate API keys in the Developer Hub under **Tools > Manage API Keys**.
4. Add them as repository secrets in your fork under **Settings > Secrets and variables > Actions**, named `AMO_JWT_ISSUER` and `AMO_JWT_SECRET`.
5. Set `version` in `manifest.json` to a number not yet tagged in your fork, for example `1.2`. Commit the change, then push a tag with the same number:

```bash
   git add manifest.json
   git commit -m "Release 1.2"
   git push
   git tag v1.2
   git push origin v1.2
```

The release workflow signs the extension and publishes the `.xpi` on your fork's Releases page.

## License

MIT

