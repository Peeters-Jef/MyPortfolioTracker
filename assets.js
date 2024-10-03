const asset = {
    ticker,
    assetName,
    category,
};

const stock = {
    ticker: asset.ticker,
    stockName: asset.assetName,
    category: asset.category,
    currentPrice,
    currency,
    sector,
    industry,
    eps,
    pe,
    dividend,
    dividendYield,
    markeccap,
};

const crypto = {
    ticker: asset.ticker,
    stockName: asset.assetName,
    category: asset.category,
    currentPrice,
    currency,
    marketcap,
    circulatingSupply,
}
