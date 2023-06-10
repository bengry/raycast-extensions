import esbuild from "esbuild";

export async function covertTypeScriptToJavaScript(typescriptCode: string) {
  const { code, warnings } = await esbuild.transform(typescriptCode, {
    loader: "tsx",
  });

  return {
    code,
    warnings,
  };
}
