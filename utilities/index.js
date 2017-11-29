import path from "path";

export const PROD = process.env.NODE_ENV === "production";
export const DEV = process.env.NODE_ENV === "development";
export const PRERENDER = process.env.PRERENDER === "true";
export const clientFolder = path.resolve(process.cwd(), "src");
export const serverRendererPath = path.resolve(process.cwd(), "src/server/src/ssr/render");
export const cssChunkNaming = "[hash:base64]";
export const includePaths = [
	path.resolve(process.cwd(), "node_modules"),
	path.resolve(process.cwd(), "src/client")
];
