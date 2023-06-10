import { Clipboard, showHUD } from "@raycast/api";
import { covertTypeScriptToJavaScript } from "./internal/typescript-to-javascript";

export default async function main() {
  const typescriptCode = await Clipboard.readText();
  if (!typescriptCode) {
    await showHUD("No text found in clipboard");
    return;
  }

  const { code: javascriptCode, warnings } = await covertTypeScriptToJavaScript(typescriptCode);

  if (warnings.length > 0) {
    await showHUD(JSON.stringify(warnings, null, 2));
    return;
  }

  await Clipboard.paste(javascriptCode);
}
