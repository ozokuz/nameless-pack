import { existsSync } from "node:fs";
import { mkdir, copyFile, rm } from "node:fs/promises";
import { join } from "node:path";
import { cwd } from "node:process";

const kube = join(cwd(), "kubejs");
const server = join(kube, "server_scripts");
const startup = join(kube, "startup_scripts");
const client = join(kube, "client_scripts");
const dist = join(cwd(), "dist");

const main = async () => {
  if (existsSync(kube)) {
    await rm(kube, { recursive: true });
  }

  await mkdir(kube);
  await mkdir(server);
  await mkdir(startup);
  await mkdir(client);

  await copyFile(join(dist, "server.global.js"), join(server, "script.js"));
  await copyFile(join(dist, "startup.global.js"), join(startup, "script.js"));
  await copyFile(join(dist, "client.global.js"), join(client, "script.js"));
};

main();
