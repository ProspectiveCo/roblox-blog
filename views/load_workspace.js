import perspective from "https://cdn.jsdelivr.net/npm/@finos/perspective@2.3.2/dist/cdn/perspective.js";
import "https://cdn.jsdelivr.net/npm/@finos/perspective-viewer@2.3.2/dist/cdn/perspective-viewer.js";
import "https://cdn.jsdelivr.net/npm/@finos/perspective-viewer-d3fc@2.3.2/dist/cdn/perspective-viewer-d3fc.js";
import "https://cdn.jsdelivr.net/npm/@finos/perspective-viewer-datagrid@2.3.2/dist/cdn/perspective-viewer-datagrid.js";
import "https://cdn.jsdelivr.net/npm/@finos/perspective-viewer-openlayers@2.3.2/dist/cdn/perspective-viewer-openlayers.js";

const wrapper = document.createElement("div");
wrapper.id = "psp-wrapper";
document.body.appendChild(wrapper);
const worker = perspective.worker();
const table_map = {};
const config_map = {};

export async function load_tables(url, tableNames) {
  for (let name of tableNames) {
    const resp = await fetch(new URL(name + ".json", url));
    const json = await resp.json();
    table_map[name] = await worker.table(json);
  }
}

export async function load_configs(url, configNames) {
  for (let name of configNames) {
    const resp = await fetch(new URL(name + ".config.json", url));
    const json = await resp.json();
    config_map[name] = json;
  }
}

export async function load_workspace(views) {
  for (let [name, view] of Object.entries(views)) {
    const viewer = document.createElement("perspective-viewer");
    viewer.load(table_map[view.table]);
    viewer.id = name;
    await viewer.restore(config_map[view.config]);
    wrapper.appendChild(viewer);
  }
}
