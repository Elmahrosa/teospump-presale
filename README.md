# teospump-presale
The repository was created autonomously  by Elmahrosa International 
# 🚀 TeosPump Presale Launchpad

An all‑in‑one, multilingual (Arabic/English) presale launchpad for the TEOS Egypt token—supporting SOL, UST, and Pi payments, with real-time pricing, wallet integration, and automated $TEOS distribution.

---

## 🎯 Key Features

- **Multi-Token Payment**: Users can purchase tokens with Solana (SOL), TerraUSD (UST), or Pi.
- **Live Pricing/Conversion**: Real-time USD → payment token conversion via CoinGecko.
- **Phantom Wallet + Pi QR Flow**: Seamless transaction experience.
- **Automated Token Delivery**: C watcher monitors and triggers smart contract transfers.
- **Localization & Theming**: Arabic and English languages, with Dark/Light mode support.
- **Config-Driven**: Easy updates via `presaleConfig.json`.

---

## 🛠️ Setup & Configuration

### 1. Clone the repo
```bash
git clone https://github.com/your-user/teospump-presale.git
cd teospump-presale
npm install
{
  "totalTokens": 100000000,
  "pricePerTokenUSD": 0.01,
  "minPurchaseUSD": 10,
  "receiverSOL": "Akvm3CbDN448fyD8qmQjowgBGpcYZtjuKFL4xT8PZhbF",
  "receiverPI": "MALYJFJ5SVD45FBWN2GT4IW67SEZ3IBOFSBSPUFCWV427NBNLG3PWAAAAAAAAAMHQDECQ",
  "teosTokenAddress": "AhXBUQmbhv9dNoZCiMYmXF4Gyi1cjQthWHFhTL2CJaSo"
}
NEXT_PUBLIC_CONFIG_PATH=./presaleConfig.json
NODE_ENV=production
COINGECKO_API_URL=https://api.coingecko.com/api/v3
npm run dev                # Development mode (http://localhost:3000)
npm run build && npm run start  # Production build
# 📜 Open‑Source Software Licenses

A selection of widely used licenses, categorized for easy reference.

---

## ✅ Permissive Licenses
| License Name                          | SPDX Identifier    |
|---------------------------------------|--------------------|
| 0‑clause BSD ("Zero Clause BSD")      | 0BSD               |
| MIT License                           | MIT                |
| MIT No Attribution                    | MIT-0              |
| BSD 2‑Clause                          | BSD-2-Clause       |
| BSD 3‑Clause                          | BSD-3-Clause       |
| Apache Software License 2.0
