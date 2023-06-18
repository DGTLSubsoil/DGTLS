// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json(
    {
      "totalSupply": "1000000000",
      "publicSale": "0.001",
      "farmingPool": "32",
      "staking": "20",
      "ecosystem": "4",
      "advisor": "3",
      "privateSale": "15",
      "liquidity": "15",
      "marketing": "3",
      "team": "8"
    },
  )
}
