import { loadFileWithPromise, loadHttpJson } from "./utils";

export async function loadHttpKey(url) {
  let content = await loadHttpJson(url, '[KEY]');
  return content;
}

export async function loadJsonFileKey(path) {
  const content = JSON.parse(await loadFileWithPromise(path));
  return content
}
