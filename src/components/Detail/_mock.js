/* process:
1: upcoming: thời gian chuẩn bị mở bán 
2: registration: thời gian đăng ký
3: pocessing : thời gian xử lý đăng ký, công bố danh sách trúng
4: swap: thời gian để user mua
5: claim: thời gian để user nhận token
6: end: kết thúc 
*/

const json = `
{
    "id": "1x1929321",
    "address_sale": "0x11111111112222222222",
    "type": 1,
    "type_value": "registration",
    "title": "DeltaFi",
    "thumbnail": "https://storage.googleapis.com/dao-pad-production.appspot.com/66ce87f863fa94ad919a90e22f0551f9_photo.png",
    "sub_title": "Build the world's most efficient DEX with machine learning",
    "payment_token": "Near",
    "payment_token_image": "https://solanium-prd-backend-space.ams3.digitaloceanspaces.com/media/usdc_icon.png",
    "description": "Machine learning powered solution to solve impermanent loss, price slippage and provide friendly market making APIs.",
    "process": [
        {
            "id": 0,
            "title": "Preparation",
            "description": "This project is in preparation phase. Stay tuned.",
            "time": ""
        },
        {
            "id": 1,
            "title": "Whitelist",
            "description": "This project is in preparation phase. Stay tuned.",
            "time": ""
        }
    ],
    "ido": {
        "pool_size": "2,000,000",
        "hardcap": "1,000,000",
        "sale_rate": "0.5",
        "sale_type": "Unlocked",
        "registration_time": "1646493574750",
        "open_time": "1646672400000",
        "close_time": "1646758800000",
        "unlock_time": "1646845200000"
    },
    "token": {
        "symbol": "DELFI",
        "token_image": "https://solanium-prd-backend-space.ams3.digitaloceanspaces.com/media/deltafi-token-icon.png",
        "category": "VPN",
        "token_distribution": "Feb 19, 2022, 7:00:00 PM",
        "blockchain": "Solana"
    },
    "whitepaper": "https://www.facebook.com/",
    "info": {
        "about": "<html/> <p>html content etc</p>",
        "features": "<html/>",
        "roadmap": "<html/>",
        "tokenomic": "<html/>",
        "team": ""
    },
    "social": {
        "web": "https://www.facebook.com/",
        "twitter": "https://twitter.com/",
        "reddit": "https://www.reddit.com/",
        "telegram": "https://t.me/",
        "medium": "https://medium.com/",
        "discord": "https://discord.com/",
        "github": ""
    },
    "public": [
        {
            "name": "prism",
            "link": "https://prism.ag/?swap=USDC-DELFI"
        },
        {
            "name": "prism",
            "link": "https://prism.ag/?swap=USDC-DELFI"
        },
        {
            "name": "prism",
            "link": "https://prism.ag/?swap=USDC-DELFI"
        }
    ]
}
`;

export const mockProjects = [
  JSON.parse(json),
];
