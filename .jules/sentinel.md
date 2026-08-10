## 2024-05-24 - [Command Injection Prevention in JS Scripts]
**Vulnerability:** Use of `execSync` with variable interpolation in `src/generate_commits.js`.
**Learning:** Even internal build/script files can be vulnerable to shell injection if they use `execSync` with unescaped or improperly escaped strings.
**Prevention:** Use `execFileSync` (or `spawnSync`) passing command arguments as an array to prevent shell interpretation of variable data.
