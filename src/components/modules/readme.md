
> There are some components which are not common component, but it will be reusing in the module or page. so we need define this folder base on structure of "/routes" folder
> <br/> We can use simple structure like below example
```
.
├── ...
├── components                      # common component
│   ├── modules
│   │   ├── Leaderboard             # components reuse in Leaderboard page only
│   │   │   ├── TopTokenTable.tsx
│   │   │   ├── TopTokenCard.tsx
│   │   │   └── ...       
│   │   └── ...   
│   ├── commonA.tsx                 # common components
│   ├── commonB.tsx                 # common components
│   └── ...                         # common components
│
├── roues                           # pages
│   ├── Leaderboard.tsx             # page Leaderboard
│   ├── Otherspage.tsx         
│   └── ...
└── ...
```