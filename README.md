# CroxyAPI - Gelişmiş Bir Türkçe Modül!
> Discord Sunucusu: https://discord.gg/tuG3B8mJ49

<a href="https://npmjs.com/package/croxy-api/" rel="nofollow"><img src="https://img.shields.io/npm/dt/croxy-api.svg?maxAge=3600" alt="NPM" /></a>

# Yenilikler
- "api.steam()" ve "api.minecraftSunucu()" fonksiyonları eklendi.

* Örnek;

```js
const croxy = require("croxy-api");
const api = croxy = new croxy("API-KEY")

api.youtubeVideolar("newdaynewgame")
//sonuç:

/*
[
  {
    id: '0GonIqQmxA4',
    'kapakFotoğrafı': {
      url: 'https://i.ytimg.com/vi/0GonIqQmxA4/hqdefault.jpg?sqp=-oaymwEjCNACELw
BSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBI9fvnYjfpKr60skwoirYMYdX6aQ'
,
      width: 336,
      height: 188
    },
    'başlık': 'TİK TOK DANSLARINI ÖĞRENİYORUZ @Cemre Solmaz',
    'yayınlanma': '3 gün önce',
    'görüntülenme': '2.864.653',
    link: 'https://www.youtube.com/watch?v=0GonIqQmxA4'
  },
  ...
]
*/

```

# Destek
> Destek almak için discord sunucumuza gelebilirsiniz. https://discord.gg/tuG3B8mJ49

# API Key
> API Key almak için öncelikle sunucumuza katılmalı ve https://croxythedeveloper.com.tr/croxyapi sitesinden Discord hesabınızla giriş yapmalısınız.
> Discord hesabınızla giriş yaptıktan sonra, aynı siteye gelip butona tıklamanız gerekmektedir. Size bir API Key verilecektir. Dökümantasyon sayfasında bunu nasıl kullanabileceğiniz yazmaktadır.

# Neden Discord Girişi Yaptırıyorsun?
> API Key'lerinize erişimleri Discord hesaplarınız üzerinden sağlıyorsunuz. Sistem şöyle işlemektedir, eğer siz Discord sunucumuzda yoksanız bu modül de çalışmaz. Eğer web sitemiz ile Discord hesabınızı ilişkilendirirseniz; zaten botun istediği izinler gözükmektedir. Sadece kullanıcı ID'nize ve avatarınıza erişiyoruz. Bunlar da herkes tarafından erişilebilen şeyler. 
