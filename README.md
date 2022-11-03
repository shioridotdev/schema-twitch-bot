## implementing your .env

`channel` is your channel name  
`prefix` is your command prefix  
`token` is your [tmi oauth bot token](https://twitchapps.com/tmi/)  
`username` is your bot username

```bash
  channel=shioridotdev
  prefix=!
  token=oauth:xxxxxxxxx
  username=ourdungeon
```

## implementing your commands

use the `commands/` folder and give any `.json` files like this

`commands/links.json`
```json
{
    "github": "https://github.com/shioridotdev",
    "blog": "https://shiori.dev"
}
```

`commands/tips.json`
```json
{
    "ghsponsor": "https://github.com/sponsors/shioridotdev",
    "paypalme": "https://paypal.me/kyohkodev",
    "twitch": "https://streamlabs.com/shioridotdev/tips"
}
```

`!github` respond `https://github.com/shioridotdev`  
`!ghsponsor` respond `https://github.com/sponsors/shioridotdev`  