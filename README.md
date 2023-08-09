# Roblox Trade Analysis

This is a simple python project which utilizes [Perspective](https://github.com/finos/perspective) and Jupyter Lab to visualize data across the Roblox economy.
This repo is an accessory to a blog post. Read it [here](TODO).

Much of the data is scraped from the [rblx.trade APIs](https://rblx.trade/docs/index.html#/).

---

Widgets included:

- RAP x Popularity
- log(RAP) x Popularity colored by Rarity
- Overvalued items with differential
- Trade history per item
  - Includes Devex USD value
- Historical regression; Fedoras are hot right now!

Some features:

- Exprtk for Regressing on USD value
- Exprtk for matching roblox item name

Future ideas:

- Filter by asset type by cross-referencing the [official Roblox APIs](https://github.com/matthewdean/roblox-web-apis)
- Coalesce metrics from trade history into the catalog
- Websocket connection for live trade info
