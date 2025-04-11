const { exec } = require("child_process");

const run = (command) =>
  new Promise((resolve) => {
    const process = exec(command, (error, stdout, stderr) => {
      console.log(stdout);
      if (stderr) console.error(stderr);
      resolve();
    });

    process.on("exit", resolve);
  });

(async () => {
  console.log("🧪 Executando testes...");
  await run("npx cypress run --browser chrome --headed");

  console.log("📄 Gerando relatório...");
  await run("node generate-report.js");

  console.log("✅ Finalizado!");
})();