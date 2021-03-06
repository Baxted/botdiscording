# Commands

To get a list of available commands, do !help on your server.

## Arguments & Flags

Most commands accept arguments and/or flags.  
According to the **Type** of the argument or flag you can provide different values.

### Boolean

Bu argümanlar "doğru" veya "yanlış" olmasını bekler. "evet" ve "hayır"ı da kullanabilirsiniz.

### Sayı

Bu argümanlar bir sayı bekliyor

### Enum

Bu bağımsız değişkenler, belirli bir geçerli değerler kümesinden bir değer bekler.

> Komuta bağlı olarak geçerli değerler değişebilir. Komut ve enum için geçerli değerler hakkında daha fazla bilgi almak için `!help <command>` (örn. `!help addRank`) kullanın.

### Davet Kodu

Bu argümanlar bir Discord Davet Kodu bekler.

> Discord'un önizleme oluşturmasını önlemek için yalnızca `https://discord.gg/` dan sonraki kısmı koyabilirsiniz.

### Kullanıcı

Bu argümanlar bir Discord Kullanıcısı bekler. Bir kullanıcıya sağlamak için aşağıdaki yöntemlerden herhangi birini kullanabilirsiniz:

- Kullanıcıdan bahsedin: `@Valandur`
- Kimliklerini kullanın: `102785693046026240`
- Adlarını kullanın: `Valandur`
- Adlarını ve ayrımcılarını kullanın: `Valandur#3581`
- Adlarında boşluk varsa tırnak işaretleri kullanın: `"Boşluklu Valandur"`

### Rol

Bu argümanlar bir Discord Rolü bekler. Bir rol sağlamak için aşağıdaki yöntemlerden herhangi birini kullanabilirsiniz:

- Rolden bahsedin: `@Admin`
- Kimliği kullanın: `102785693046026240`
- Adını kullanın: `Admin`
- Adında boşluk varsa tırnak işareti kullanın: `"Boşluklu yönetici"`

### Kanal

Bu argümanlar bir Discord Kanalı bekler. Kanal sağlamak için aşağıdaki yöntemlerden herhangi birini kullanabilirsiniz: 

- Kanaldan bahsedin: `#general`
- Kanal ID kullanın: `409846838129197057`
- Kanal adını kullanın: `genel` 
- Adda bir boşluk varsa tırnak işareti kullanın: `"boşluklu genel"`

### Komut

Bu argüman bu botun bir komutunu bekliyor. Komut sağlamak için aşağıdaki yöntemlerden birini kullanabilirsiniz: 

- Komut adını kullanın: `invites`
- Komutun takma adını kullanın: `p`

### Metin

Bu argümanlar herhangi bir metin bekler. Boşluk içeren metinler için tırnak işaretleri (`"Tırnak içeren metin"`) kullanabilirsiniz.

> Metin son argümansa, tırnak işaretleri kullanmanıza gerek yoktur.

### Tarih

Bu argüman bir tarih bekliyor. Çeşitli formatlar kullanabilirsiniz, ancak şunları öneririz: `YYYY-AA-GG`

### Süre

Bu argüman bir süre bekler. Aşağıdaki süre türleri desteklenir:

- Saniye: `s` (`5s` = 5 saniye)
- Dakika: `min` (`3min` = 3 dakika)
- Saat: `h` (`4h` = 4 saat)
- Günler: `d` (`2d` = 2 gün)
- Haftalar: `w` (`1w` = 1 hafta)
- Aylar: `mo` (`6mo` = 6 ay)
- Yıllar: `y` (`10y` = 10 yıl)

## Overview

### Invites

| Command | Description | Usage |
|---|---|---|
| [addInvites](#addInvites) | Kullanıcıya davet puanı ekler/siler. | !addInvites \<user\> \<amount\> [reason]  |
| [clearInvites](#clearInvites) | Sunucudaki/kullanıcıdaki davetleri temizler. | !clearInvites [-d value\|--date=value] [-cb\|--clearBonus] [user]  |
| [createInvite](#createInvite) | Özel davet kodları oluştur. | !createInvite \<name\> [channel]  |
| [info](#info) | Belirli bir üye hakkında bilgi göster. | !info \<user\> [details] [page]  |
| [inviteCodes](#inviteCodes) | Tüm davet kodlarınızın bir listesini alın | !inviteCodes  |
| [inviteDetails](#inviteDetails) | Davetiyelerinizin nereden geldiğiyle ilgili ayrıntıları gösterir. | !inviteDetails [user]  |
| [invites](#invites) | Kişi Davetlerini Göster | !invites [user]  |
| [leaderboard](#leaderboard) | En çok davet edilen üyeleri göster. | !leaderboard [page]  |
| [removeInvites](#removeInvites) | Bir kullanıcıdan belirtilen miktarda daveti kaldırır. | !removeInvites \<user\> \<amount\> [reason]  |
| [restoreInvites](#restoreInvites) | Önceden temizlenmiş tüm davetiyeleri geri yükleyin. | !restoreInvites [user]  |
| [subtractFakes](#subtractFakes) | Tüm kullanıcılardan sahte davetliler temizlendi. | !subtractFakes  |
| [subtractLeaves](#subtractLeaves) | Tüm Kullanıcılardan Sunucudan Ayrılanları Sil. | !subtractLeaves  |

### Ranks

| Command | Description | Usage |
|---|---|---|
| [addRank](#addRank) | Yeni bir rütbe ekle. | !addRank \<role\> \<invites\> [info]  |
| [fixRanks](#fixRanks) | Rolün silindiği tüm rütbeleri siler. | !fixRanks  |
| [ranks](#ranks) | Tüm rütbeleri göster. | !ranks [page]  |
| [removeRank](#removeRank) | Bir rank'ı kaldırın. | !removeRank \<rank\>  |

### Config

| Command | Description | Usage |
|---|---|---|
| [botConfig](#botConfig) | Botun yapılandırmasını göster ve değiştir. | !botConfig [key] [value]  |
| [config](#config) | Sunucunun yapılandırmasını göster ve değiştir. | !config [key] [value]  |
| [interactiveConfig](#interactiveConfig) | Etkileşimli Yapılandırma | !interactiveConfig  |
| [inviteCodeConfig](#inviteCodeConfig) | Sunucunun davet kodlarının yapılandırmasını gösterin ve değiştirin. | !inviteCodeConfig [key] [inviteCode] [value]  |
| [memberConfig](#memberConfig) | Sunucunun üyelerinin yapılandırmasını gösterin ve değiştirin. | !memberConfig [key] [user] [value]  |
| [permissions](#permissions) | Komutları kullanmak için izinleri yapılandırın. | !permissions [cmd] [role]  |

### Info

| Command | Description | Usage |
|---|---|---|
| [botInfo](#botInfo) | Bot hakkında genel bilgi al. | !botInfo  |
| [credits](#credits) | Bot geliştiricileri ve katkıda bulunanları göster. | !credits  |
| [getBot](#getBot) | Bot için bir davet linki al. | !getBot  |
| [help](#help) | Yardımı gösterir. | !help [command]  |
| [members](#members) | Geçerli sunucunun üye sayısını göster. | !members  |
| [ping](#ping) | Botun pingi | !ping  |
| [prefix](#prefix) | Botun geçerli ön-ekini gösterir. | !prefix  |
| [setup](#setup) | Botu ayarlama ve sorunları kontrol etme konusunda yardım (örn. Eksik izinler) | !setup  |
| [support](#support) | Destek sunucumuza katılmak için davet bağlantısı alın. | !support  |

### Premium

| Command | Description | Usage |
|---|---|---|
| [export](#export) | InviteManager verilerini bir csv sayfasına aktarın. | !export \<type\>  |
| [premium](#premium) | InviteManager'ın premium versiyonu hakkında bilgi edinmek. | !premium [action]  |
| [tryPremium](#tryPremium) | InviteManager'ın premium sürümünü sınırlı bir süre için ücretsiz deneyin. | !tryPremium  |

### Moderation

| Command | Description | Usage |
|---|---|---|
| [ban](#ban) | Kullanıcıyı sunucudan banlamak için. | !ban [-d value\|--deleteMessageDays=value] \<user\> [reason]  |
| [caseDelete](#caseDelete) | Belirli bir durumu silin. | !caseDelete \<caseNumber\> [reason]  |
| [caseView](#caseView) | Belirli bir durum hakkındaki bilgileri görüntüleyin. | !caseView \<caseNumber\>  |
| [check](#check) | Bir kullanıcının ihlal ve ceza geçmişini kontrol edin. | !check \<user\>  |
| [clean](#clean) | Belirli mesaj türlerinden bir kanalı temizleyin. | !clean \<type\> [numberOfMessages]  |
| [cleanShort](#cleanShort) | Kısa mesajları temizle | !cleanShort \<maxTextLength\> [numberOfMessages]  |
| [cleanText](#cleanText) | Belirli anahtar kelimeleri içeren iletileri sil | !cleanText \<text\> [numberOfMessages]  |
| [kick](#kick) | Sunucudan bir üyeyi atar. | !kick \<member\> [reason]  |
| [lockdown](#lockdown) | Belirli bir kanalı kilitleyin (Özel rolü olmayan herkesin mesaj göndermesini engeller) | !lockdown [-t value\|--timeout=value] [channel]  |
| [mute](#mute) | Bir kullanıcı sustur | !mute [-d value\|--duration=value] \<user\> [reason]  |
| [punishmentConfig](#punishmentConfig) | Belirli bir ihtar sayısına ulaşıldığında cezaları yapılandırın. | !punishmentConfig [punishment] [strikes] [args]  |
| [purge](#purge) | Bir kanaldaki mesajları temizleme | !purge \<quantity\> [user]  |
| [purgeUntil](#purgeUntil) | Bir kanaldaki mesajları belirtilen mesaja kadar temizleyin. | !purgeUntil \<messageID\>  |
| [softBan](#softBan) | Bir üyeyi sunucudan yasaklayın ve ardından otomatik olarak yasağını kaldırın. | !softBan [-d value\|--deleteMessageDays=value] \<user\> [reason]  |
| [strike](#strike) | Bir kullanıcıya ihtar ekleme | !strike \<member\> \<type\> \<amount\>  |
| [strikeConfig](#strikeConfig) | Çeşitli ihlaller için alınan ihtarları yapılandırın. | !strikeConfig [violation] [strikes]  |
| [unban](#unban) | Bir kullanıcının yasağını kaldır. | !unban \<user\> [reason]  |
| [unhoist](#unhoist) | Tüm üyelerin önüne, adlarının önünde özel bir karakter olacak şekilde bir karakter ekleyin, böylece üye listesinin sonunda gösterilirler. | !unhoist  |
| [unmute](#unmute) | Bir kullanıcının susturulmasını aç | !unmute \<user\>  |
| [warn](#warn) | Kullanıcı Uyar | !warn \<member\> [reason]  |

### Music

| Command | Description | Usage |
|---|---|---|
| [disconnect](#disconnect) | Botu geçerli ses kanalından çıkarın. | !disconnect  |
| [lyrics](#lyrics) | Şu anda çalan şarkının sözlerini göster. | !lyrics [-l\|--live]  |
| [mashup](#mashup) | 2 şarkıdan oluşan bir karma oluşturun. | !mashup \<videos\>  |
| [nowPlaying](#nowPlaying) | Çalmakta olan şarkı hakkında bilgi gösterir | !nowPlaying [-p\|--pin]  |
| [pause](#pause) | Çalan şarkıyı durdur. | !pause  |
| [play](#play) | Sıra boşsa şarkıyı açın, aksi takdirde şarkıyı kuyruğun sonuna ekler. | !play [-p value\|--platform=value] [-n\|--next] \<link\>  |
| [queue](#queue) | Şarkıları kuyrukta göster | !queue  |
| [repeat](#repeat) | Tekrar çalınacak şarkıyı ayarlayın. | !repeat  |
| [resume](#resume) | Çalınan Şarkıyı Sürdür. | !resume  |
| [rewind](#rewind) | Şarkıyı geri sar ve en baştan başla. | !rewind  |
| [search](#search) | Arama terimini arayın ve sonuçlardan birini seçmenize izin verin. | !search [-p value\|--platform=value] \<search\>  |
| [seek](#seek) | Şarkının belirli bir bölümüne atla. | !seek [duration]  |
| [skip](#skip) | Geçerli şarkıyı atlayın ve sıradaki bir sonraki şarkıyı çalın. | !skip [amount]  |
| [volume](#volume) | Eğer bir argüman varsa sesi ayarlarsınız, yoksa şu anki sesi görürsünüz. | !volume [volume]  |

### Other

| Command | Description | Usage |
|---|---|---|
| [graph](#graph) | Bu sunucudaki çeşitli istatistikler hakkındaki grafikleri gösterir. | !graph \<type\> [from] [to]  |

<a name='addInvites'></a>

---

## !addInvites

Kullanıcıya davet puanı ekler/siler.

### Usage

```text
!addInvites <user> <amount> [reason] 
```

### Aliases

- `!add-invites`

### Arguments

| Argument | Type | Required | Description | Details |
|---|---|---|---|---|
| user | [Kullanıcı](#Kullanıcı) | Yes | Bonus alacak / kaybedecek kullanıcı davet eder.|  |
| amount | [Sayı](#Sayı) | Yes | Kullanıcının alacağı / kaybedeceği davet miktarı. Davetiyeleri kaldırmak için negatif (-) bir sayı kullanın.|  |
| reason | [Metin](#Metin) | No | Kullanıcıya davet puanı ekleme/silme sebebi.|  |

### Examples

```text
!addInvites @User 5
```
  
```text
!addInvites "Name with space" -30 Removed for cheating
```


<a name='addRank'></a>

---

## !addRank

Yeni bir rütbe ekle.

### Usage

```text
!addRank <role> <invites> [info] 
```

### Aliases

- `!add-rank`
- `!set-rank`
- `!setrank`

### Arguments

| Argument | Type | Required | Description | Details |
|---|---|---|---|---|
| role | [Rol](#Rol) | Yes | Bu rütbeye geldiğinde kullanıcının alacağı rol.|  |
| invites | [Sayı](#Sayı) | Yes | Rütbeye ulaşmak için gereken davet miktarı.|  |
| info | [Metin](#Metin) | No | Kullanıcıların göreceği bir açıklama, böylece bu rütbe hakkında daha fazla bilgi sahibi olacaklar.|  |

### Examples

```text
!addRank @Role 5
```
  
```text
!addRank "Role with space" 10 Wow, already 10 people!
```


<a name='ban'></a>

---

## !ban

Kullanıcıyı sunucudan banlamak için.

### Usage

```text
!ban [-d value|--deleteMessageDays=value] <user> [reason] 
```

### Arguments

| Argument | Type | Required | Description | Details |
|---|---|---|---|---|
| user | [Kullanıcı](#Kullanıcı) | Yes | Kullanıcıyı yasaklamak için.|  |
| reason | [Metin](#Metin) | No | Kullanıcı neden yasaklandı?|  |

### Flags

| Flag | Short | Type | Description |
|---|---|---|---|
| &#x2011;&#x2011;deleteMessageDays | &#x2011;d | [Sayı](#Sayı) | Belirtilirse, yasaklanan üyelerin mesajlarını bu günler önce siler. |

### Examples



<a name='botConfig'></a>

---

## !botConfig

Botun yapılandırmasını göster ve değiştir.

### Usage

```text
!botConfig [key] [value] 
```

### Aliases

- `!bot-config`
- `!botsetting`
- `!bot-setting`

### Arguments

| Argument | Type | Required | Description | Details |
|---|---|---|---|---|
| key | [Enum](#Enum) | No | Göstermek / değiştirmek istediğiniz bot yapılandırma ayarı.| Aşağıdaki değerlerden birini kullanın: `activityEnabled`, `activityMessage`, `activityStatus`, `activityType`, `activityUrl`, `embedDefaultColor` |
| value | [Değer](#Değer) | No | Ayarın yeni değeri.|  |

### Examples

```text
!botConfig
```


<a name='botInfo'></a>

---

## !botInfo

Bot hakkında genel bilgi al.

### Usage

```text
!botInfo 
```

### Aliases

- `!bot-info`

### Examples

```text
!botInfo
```


<a name='caseDelete'></a>

---

## !caseDelete

Belirli bir durumu silin.

### Usage

```text
!caseDelete <caseNumber> [reason] 
```

### Aliases

- `!case-delete`
- `!deletecase`
- `!delete-case`

### Arguments

| Argument | Type | Required | Description | Details |
|---|---|---|---|---|
| caseNumber | [Sayı](#Sayı) | Yes | Durum numarası|  |
| reason | [Metin](#Metin) | No | Durumu silmenin sebebi|  |

### Examples

```text
!caseDelete 5434 User apologized
```


<a name='caseView'></a>

---

## !caseView

Belirli bir durum hakkındaki bilgileri görüntüleyin.

### Usage

```text
!caseView <caseNumber> 
```

### Aliases

- `!case-view`
- `!viewcase`
- `!view-case`

### Arguments

| Argument | Type | Required | Description | Details |
|---|---|---|---|---|
| caseNumber | [Sayı](#Sayı) | Yes | Durum numarası|  |

### Examples

```text
!caseView 5434
```


<a name='check'></a>

---

## !check

Bir kullanıcının ihlal ve ceza geçmişini kontrol edin.

### Usage

```text
!check <user> 
```

### Aliases

- `!history`

### Arguments

| Argument | Type | Required | Description | Details |
|---|---|---|---|---|
| user | [Kullanıcı](#Kullanıcı) | Yes | Kontrol edilecek kullanıcı.|  |

### Examples

```text
!check @User
```
  
```text
!check "User with space"
```


<a name='clean'></a>

---

## !clean

Belirli mesaj türlerinden bir kanalı temizleyin.

### Usage

```text
!clean <type> [numberOfMessages] 
```

### Aliases

- `!clear`

### Arguments

| Argument | Type | Required | Description | Details |
|---|---|---|---|---|
| type | [Enum](#Enum) | Yes | Silinecek mesajların türü.| Aşağıdaki değerlerden birini kullanın: `bots`, `embeds`, `emojis`, `images`, `links`, `mentions`, `reacted`, `reactions` |
| numberOfMessages | [Sayı](#Sayı) | No | Aranacak mesaj sayısı.|  |

### Examples



<a name='cleanShort'></a>

---

## !cleanShort

Kısa mesajları temizle

### Usage

```text
!cleanShort <maxTextLength> [numberOfMessages] 
```

### Aliases

- `!clean-short`
- `!clearshort`
- `!clear-short`

### Arguments

| Argument | Type | Required | Description | Details |
|---|---|---|---|---|
| maxTextLength | [Sayı](#Sayı) | Yes | Bundan kısa olan tüm mesajlar silinecektir.|  |
| numberOfMessages | [Sayı](#Sayı) | No | Aranacak mesaj sayısı.|  |

### Examples



<a name='cleanText'></a>

---

## !cleanText

Belirli anahtar kelimeleri içeren iletileri sil

### Usage

```text
!cleanText <text> [numberOfMessages] 
```

### Aliases

- `!clean-text`
- `!cleartext`
- `!clear-text`

### Arguments

| Argument | Type | Required | Description | Details |
|---|---|---|---|---|
| text | [Metin](#Metin) | Yes | Bu kelimeyi içeren tüm mesajlar silinecek.|  |
| numberOfMessages | [Sayı](#Sayı) | No | Aranacak mesaj sayısı.|  |

### Examples



<a name='clearInvites'></a>

---

## !clearInvites

Sunucudaki/kullanıcıdaki davetleri temizler.

### Usage

```text
!clearInvites [-d value|--date=value] [-cb|--clearBonus] [user] 
```

### Aliases

- `!clear-invites`

### Arguments

| Argument | Type | Required | Description | Details |
|---|---|---|---|---|
| user | [Kullanıcı](#Kullanıcı) | No | Kullanıcıdan tüm davetiyeleri temizleyecek. Atlanırsa tüm kullanıcıları temizler.|  |

### Flags

| Flag | Short | Type | Description |
|---|---|---|---|
| &#x2011;&#x2011;date | &#x2011;d | [Tarih](#Tarih) | Davetlerin sayıldığı tarih başlangıcı. Varsayılan bugün. |
| &#x2011;&#x2011;clearBonus | &#x2011;cb | [Boolean](#Boolean) | Bonus davetlerini de temizlemek için bu bayrağı ekleyin. Aksi takdirde bonus davetlerine dokunulmaz. |

### Examples

```text
!clearInvites
```
  
```text
!clearInvites @User
```
  
```text
!clearInvites -cb "User with space"
```


<a name='config'></a>

---

## !config

Sunucunun yapılandırmasını göster ve değiştir.

### Usage

```text
!config [key] [value] 
```

### Aliases

- `!c`

### Arguments

| Argument | Type | Required | Description | Details |
|---|---|---|---|---|
| key | [Enum](#Enum) | No | Göstermek/değiştirmek istediğiniz yapılandırma ayarı.| Aşağıdaki değerlerden birini kullanın: `announcementVoice`, `announceNextSong`, `autoModAllCapsEnabled`, `autoModAllCapsMinCharacters`, `autoModAllCapsPercentageCaps`, `autoModDeleteBotMessage`, `autoModDeleteBotMessageTimeoutInSeconds`, `autoModDisabledForOldMembers`, `autoModDisabledForOldMembersThreshold`, `autoModDuplicateTextEnabled`, `autoModDuplicateTextTimeframeInSeconds`, `autoModEmojisEnabled`, `autoModEmojisMaxNumberOfEmojis`, `autoModEnabled`, `autoModHoistEnabled`, `autoModIgnoredChannels`, `autoModIgnoredRoles`, `autoModInvitesEnabled`, `autoModLinksBlacklist`, `autoModLinksEnabled`, `autoModLinksFollowRedirects`, `autoModLinksWhitelist`, `autoModLogEnabled`, `autoModMentionRolesEnabled`, `autoModMentionRolesMaxNumberOfMentions`, `autoModMentionUsersEnabled`, `autoModMentionUsersMaxNumberOfMentions`, `autoModModeratedChannels`, `autoModModeratedRoles`, `autoModQuickMessagesEnabled`, `autoModQuickMessagesNumberOfMessages`, `autoModQuickMessagesTimeframeInSeconds`, `autoModWordsBlacklist`, `autoModWordsEnabled`, `autoSubtractFakes`, `autoSubtractLeaves`, `autoSubtractLeaveThreshold`, `captchaVerificationFailedMessage`, `captchaVerificationLogEnabled`, `captchaVerificationOnJoin`, `captchaVerificationSuccessMessage`, `captchaVerificationTimeout`, `captchaVerificationWelcomeMessage`, `channels`, `defaultMusicPlatform`, `disabledMusicPlatforms`, `fadeMusicEndDelay`, `fadeMusicOnTalk`, `getUpdates`, `hideLeftMembersFromLeaderboard`, `ignoredChannels`, `joinMessage`, `joinMessageChannel`, `joinMessageVanity`, `joinRoles`, `lang`, `leaderboardStyle`, `leaveMessage`, `leaveMessageChannel`, `leaveMessageVanity`, `logChannel`, `modLogChannel`, `modPunishmentBanDeleteMessage`, `modPunishmentKickDeleteMessage`, `modPunishmentMuteDeleteMessage`, `modPunishmentSoftbanDeleteMessage`, `modPunishmentWarnDeleteMessage`, `musicVolume`, `mutedRole`, `prefix`, `rankAnnouncementChannel`, `rankAnnouncementMessage`, `rankAssignmentStyle` |
| value | [Değer](#Değer) | No | Ayarın yeni değeri.|  |

### Examples

```text
!config
```


<a name='createInvite'></a>

---

## !createInvite

Özel davet kodları oluştur.

### Usage

```text
!createInvite <name> [channel] 
```

### Aliases

- `!create-invite`

### Arguments

| Argument | Type | Required | Description | Details |
|---|---|---|---|---|
| name | [Metin](#Metin) | Yes | Davet kodunun adı.|  |
| channel | [Kanal](#Kanal) | No | Davet kodunun oluşturulduğu kanal. Geçerli kanalı varsayılan olarak kullanır.|  |

### Examples

```text
!createInvite reddit
```
  
```text
!createInvite website #welcome
```


<a name='credits'></a>

---

## !credits

Bot geliştiricileri ve katkıda bulunanları göster.

### Usage

```text
!credits 
```

### Examples

```text
!credits
```


<a name='disconnect'></a>

---

## !disconnect

Botu geçerli ses kanalından çıkarın.

### Usage

```text
!disconnect 
```

### Aliases

- `!dc`

### Examples

```text
!disconnect
```


<a name='export'></a>

---

## !export

InviteManager verilerini bir csv sayfasına aktarın.

### Usage

```text
!export <type> 
```

### Arguments

| Argument | Type | Required | Description | Details |
|---|---|---|---|---|
| type | [Enum](#Enum) | Yes | İstediğiniz dışa aktarma türü.| Aşağıdaki değerlerden birini kullanın: `leaderboard` |

### Examples

```text
!export leaderboard
```


<a name='fixRanks'></a>

---

## !fixRanks

Rolün silindiği tüm rütbeleri siler.

### Usage

```text
!fixRanks 
```

### Aliases

- `!fix-ranks`

### Examples

```text
!fixRanks
```


<a name='getBot'></a>

---

## !getBot

Bot için bir davet linki al.

### Usage

```text
!getBot 
```

### Aliases

- `!get-bot`
- `!invite-bot`
- `!invitebot`

### Examples

```text
!getBot
```


<a name='graph'></a>

---

## !graph

Bu sunucudaki çeşitli istatistikler hakkındaki grafikleri gösterir.

### Usage

```text
!graph <type> [from] [to] 
```

### Aliases

- `!g`
- `!chart`

### Arguments

| Argument | Type | Required | Description | Details |
|---|---|---|---|---|
| type | [Enum](#Enum) | Yes | Gösterilecek tablonun türü.| Aşağıdaki değerlerden birini kullanın: `joins`, `joinsAndLeaves`, `leaves` |
| from | [Tarih](#Tarih) | No | Grafiğin başlangıç tarihi|  |
| to | [Tarih](#Tarih) | No | Grafiğin bitiş tarihi|  |

### Examples

```text
!graph joins
```
  
```text
!graph leaves
```
  
```text
!graph usage
```


<a name='help'></a>

---

## !help

Yardımı gösterir.

### Usage

```text
!help [command] 
```

### Arguments

| Argument | Type | Required | Description | Details |
|---|---|---|---|---|
| command | [Komut](#Komut) | No | Hakkında ayrıntılı bilgi alma komutu.| Aşağıdaki değerlerden birini kullanın: `addInvites`, `addRank`, `ban`, `botConfig`, `botInfo`, `caseDelete`, `caseView`, `check`, `clean`, `cleanShort`, `cleanText`, `clearInvites`, `config`, `createInvite`, `credits`, `disconnect`, `export`, `fixRanks`, `getBot`, `graph`, `help`, `info`, `interactiveConfig`, `inviteCodeConfig`, `inviteCodes`, `inviteDetails`, `invites`, `kick`, `leaderboard`, `lockdown`, `lyrics`, `mashup`, `memberConfig`, `members`, `mute`, `nowPlaying`, `pause`, `permissions`, `ping`, `play`, `prefix`, `premium`, `punishmentConfig`, `purge`, `purgeUntil`, `queue`, `ranks`, `removeInvites`, `removeRank`, `repeat`, `restoreInvites`, `resume`, `rewind`, `search`, `seek`, `setup`, `skip`, `softBan`, `strike`, `strikeConfig`, `subtractFakes`, `subtractLeaves`, `support`, `tryPremium`, `unban`, `unhoist`, `unmute`, `volume`, `warn` |

### Examples

```text
!help
```
  
```text
!help addRank
```


<a name='info'></a>

---

## !info

Belirli bir üye hakkında bilgi göster.

### Usage

```text
!info <user> [details] [page] 
```

### Aliases

- `!showinfo`

### Arguments

| Argument | Type | Required | Description | Details |
|---|---|---|---|---|
| user | [Kullanıcı](#Kullanıcı) | Yes | Ek bilgi görmek istediğiniz kullanıcı.|  |
| details | [Enum](#Enum) | No | Bir üye hakkında sadece belirli detayları isteyin.| Aşağıdaki değerlerden birini kullanın: `bonus`, `members` |
| page | [Sayı](#Sayı) | No | Ayrıntıların hangi sayfasında gösterileceği. Reaksiyonlarda gezinmek için de kullanabilirsiniz.|  |

### Examples

```text
!info @User
```
  
```text
!info "User with space"
```
  
```text
!info @User members
```
  
```text
!info @User bonus
```
  
```text
!info @User members 4
```


<a name='interactiveConfig'></a>

---

## !interactiveConfig

Etkileşimli Yapılandırma

### Usage

```text
!interactiveConfig 
```

### Aliases

- `!ic`

### Examples

```text
!interactiveConfig
```


<a name='inviteCodeConfig'></a>

---

## !inviteCodeConfig

Sunucunun davet kodlarının yapılandırmasını gösterin ve değiştirin.

### Usage

```text
!inviteCodeConfig [key] [inviteCode] [value] 
```

### Aliases

- `!invite-code-config`
- `!icc`

### Arguments

| Argument | Type | Required | Description | Details |
|---|---|---|---|---|
| key | [Enum](#Enum) | No | Göstermek / değiştirmek istediğiniz yapılandırma ayarı.| Aşağıdaki değerlerden birini kullanın: `name`, `roles` |
| inviteCode | [Davet Kodu](#DavetKodu) | No | Ayarlarını değiştirmek istediğiniz davet kodu.|  |
| value | [Değer](#Değer) | No | Ayarın yeni değeri|  |

### Examples

```text
!inviteCodeConfig
```


<a name='inviteCodes'></a>

---

## !inviteCodes

Tüm davet kodlarınızın bir listesini alın

### Usage

```text
!inviteCodes 
```

### Aliases

- `!invitecode`
- `!invite-code`
- `!invite-codes`
- `!getinvitecode`
- `!get-invite-code`
- `!get-invite-codes`
- `!showinvitecode`
- `!show-invite-code`

### Examples

```text
!inviteCodes
```


<a name='inviteDetails'></a>

---

## !inviteDetails

Davetiyelerinizin nereden geldiğiyle ilgili ayrıntıları gösterir.

### Usage

```text
!inviteDetails [user] 
```

### Aliases

- `!invite-details`

### Arguments

| Argument | Type | Required | Description | Details |
|---|---|---|---|---|
| user | [Kullanıcı](#Kullanıcı) | No | Ayrıntılı davetler göstermek istediğiniz kullanıcı.|  |

### Examples

```text
!inviteDetails
```
  
```text
!inviteDetails @User
```
  
```text
!inviteDetails "User with space"
```


<a name='invites'></a>

---

## !invites

Kişi Davetlerini Göster

### Usage

```text
!invites [user] 
```

### Aliases

- `!invite`
- `!rank`

### Arguments

| Argument | Type | Required | Description | Details |
|---|---|---|---|---|
| user | [Kullanıcı](#Kullanıcı) | No | Kendisini göstermek istediğiniz kullanıcı davet ediyor.|  |

### Examples

```text
!invites
```
  
```text
!invites @User
```
  
```text
!invites "User with space"
```


<a name='kick'></a>

---

## !kick

Sunucudan bir üyeyi atar.

### Usage

```text
!kick <member> [reason] 
```

### Arguments

| Argument | Type | Required | Description | Details |
|---|---|---|---|---|
| member | [Üye](#Üye) | Yes | Kullanıcı Atıldı.|  |
| reason | [Metin](#Metin) | No | Kullanıcının Atılma Sebebi|  |

### Examples



<a name='leaderboard'></a>

---

## !leaderboard

En çok davet edilen üyeleri göster.

### Usage

```text
!leaderboard [page] 
```

### Aliases

- `!top`

### Arguments

| Argument | Type | Required | Description | Details |
|---|---|---|---|---|
| page | [Sayı](#Sayı) | No | Afiş almak için hangi sayfa.|  |

### Examples

```text
!leaderboard
```
  
```text
!leaderboard 1mo
```
  
```text
!leaderboard 30d 6
```


<a name='lockdown'></a>

---

## !lockdown

Belirli bir kanalı kilitleyin (Özel rolü olmayan herkesin mesaj göndermesini engeller)

### Usage

```text
!lockdown [-t value|--timeout=value] [channel] 
```

### Arguments

| Argument | Type | Required | Description | Details |
|---|---|---|---|---|
| channel | [Kanal](#Kanal) | No | Kilitlemek istediğiniz kanal.|  |

### Flags

| Flag | Short | Type | Description |
|---|---|---|---|
| &#x2011;&#x2011;timeout | &#x2011;t | [Süre](#Süre) | Kilitlemenin otomatik olarak sona erdiği zaman aşımı süresi. Kilidi manuel olarak sonlandırmak için komutu tekrar çalıştırın. |

### Examples

```text
!lockdown
```


<a name='lyrics'></a>

---

## !lyrics

Şu anda çalan şarkının sözlerini göster.

### Usage

```text
!lyrics [-l|--live] 
```

### Flags

| Flag | Short | Type | Description |
|---|---|---|---|
| &#x2011;&#x2011;live | &#x2011;l | [Boolean](#Boolean) | Ayarlanırsa, sözler şarkının geçerli saati ile senkronize edilir. |

### Examples

```text
!lyrics
```


<a name='mashup'></a>

---

## !mashup

2 şarkıdan oluşan bir karma oluşturun.

### Usage

```text
!mashup <videos> 
```

### Arguments

| Argument | Type | Required | Description | Details |
|---|---|---|---|---|
| videos | [Metin](#Metin) | Yes | Birleştirilmesi gereken videolar.|  |

### Examples



<a name='memberConfig'></a>

---

## !memberConfig

Sunucunun üyelerinin yapılandırmasını gösterin ve değiştirin.

### Usage

```text
!memberConfig [key] [user] [value] 
```

### Aliases

- `!member-config`
- `!memconf`
- `!mc`

### Arguments

| Argument | Type | Required | Description | Details |
|---|---|---|---|---|
| key | [Enum](#Enum) | No | Göstermek / değiştirmek istediğiniz üye yapılandırma ayarı.| Aşağıdaki değerlerden birini kullanın: `hideFromLeaderboard` |
| user | [Kullanıcı](#Kullanıcı) | No | Ayarın gösterildiği / değiştirildiği üye.|  |
| value | [Değer](#Değer) | No | Ayarın yeni değeri.|  |

### Examples

```text
!memberConfig
```


<a name='members'></a>

---

## !members

Geçerli sunucunun üye sayısını göster.

### Usage

```text
!members 
```

### Aliases

- `!member`
- `!memberscount`

### Examples

```text
!members
```


<a name='mute'></a>

---

## !mute

Bir kullanıcı sustur

### Usage

```text
!mute [-d value|--duration=value] <user> [reason] 
```

### Arguments

| Argument | Type | Required | Description | Details |
|---|---|---|---|---|
| user | [Üye](#Üye) | Yes | Susturulması gereken kullanıcı.|  |
| reason | [Metin](#Metin) | No | Bu kullanıcının susturulmuş olmasının nedeni.|  |

### Flags

| Flag | Short | Type | Description |
|---|---|---|---|
| &#x2011;&#x2011;duration | &#x2011;d | [Süre](#Süre) | Kullanıcının susturulma süresi |

### Examples



<a name='nowPlaying'></a>

---

## !nowPlaying

Çalmakta olan şarkı hakkında bilgi gösterir

### Usage

```text
!nowPlaying [-p|--pin] 
```

### Aliases

- `!np`
- `!now-playing`

### Flags

| Flag | Short | Type | Description |
|---|---|---|---|
| &#x2011;&#x2011;pin | &#x2011;p | [Boolean](#Boolean) | Şimdi çalınan mesajı sabitleyin ve yeni bir şarkı çaldığında otomatik olarak güncelleyin. |

### Examples

```text
!nowPlaying
```


<a name='pause'></a>

---

## !pause

Çalan şarkıyı durdur.

### Usage

```text
!pause 
```

### Aliases

- `!stop`

### Examples

```text
!pause
```


<a name='permissions'></a>

---

## !permissions

Komutları kullanmak için izinleri yapılandırın.

### Usage

```text
!permissions [cmd] [role] 
```

### Aliases

- `!perms`

### Arguments

| Argument | Type | Required | Description | Details |
|---|---|---|---|---|
| cmd | [Komut](#Komut) | No | Komut, izinleri yapılandırma için| Aşağıdaki değerlerden birini kullanın: `addInvites`, `addRank`, `ban`, `botConfig`, `botInfo`, `caseDelete`, `caseView`, `check`, `clean`, `cleanShort`, `cleanText`, `clearInvites`, `config`, `createInvite`, `credits`, `disconnect`, `export`, `fixRanks`, `getBot`, `graph`, `help`, `info`, `interactiveConfig`, `inviteCodeConfig`, `inviteCodes`, `inviteDetails`, `invites`, `kick`, `leaderboard`, `lockdown`, `lyrics`, `mashup`, `memberConfig`, `members`, `mute`, `nowPlaying`, `pause`, `permissions`, `ping`, `play`, `prefix`, `premium`, `punishmentConfig`, `purge`, `purgeUntil`, `queue`, `ranks`, `removeInvites`, `removeRank`, `repeat`, `restoreInvites`, `resume`, `rewind`, `search`, `seek`, `setup`, `skip`, `softBan`, `strike`, `strikeConfig`, `subtractFakes`, `subtractLeaves`, `support`, `tryPremium`, `unban`, `unhoist`, `unmute`, `volume`, `warn` |
| role | [Rol](#Rol) | No | Komuta erişim izni verilmesi veya reddedilmesi gereken rol.|  |

### Examples

```text
!permissions
```


<a name='ping'></a>

---

## !ping

Botun pingi

### Usage

```text
!ping 
```

### Examples

```text
!ping
```


<a name='play'></a>

---

## !play

Sıra boşsa şarkıyı açın, aksi takdirde şarkıyı kuyruğun sonuna ekler.

### Usage

```text
!play [-p value|--platform=value] [-n|--next] <link> 
```

### Aliases

- `!p`

### Arguments

| Argument | Type | Required | Description | Details |
|---|---|---|---|---|
| link | [Metin](#Metin) | Yes | Belirli bir şarkıya veya arama terimine bağlantı.|  |

### Flags

| Flag | Short | Type | Description |
|---|---|---|---|
| &#x2011;&#x2011;platform | &#x2011;p | [Enum](#Enum) | Şarkının çalınmasını istediğiniz platformu seçin. |
| &#x2011;&#x2011;next | &#x2011;n | [Boolean](#Boolean) | Ayarlanmışsa, sıranın sonuna eklemek yerine bu şarkıyı bir sonraki şarkıya ekler. |

### Examples



<a name='prefix'></a>

---

## !prefix

Botun geçerli ön-ekini gösterir.

### Usage

```text
!prefix 
```

### Examples

```text
!prefix
```


<a name='premium'></a>

---

## !premium

InviteManager'ın premium versiyonu hakkında bilgi edinmek.

### Usage

```text
!premium [action] 
```

### Aliases

- `!patreon`
- `!donate`

### Arguments

| Argument | Type | Required | Description | Details |
|---|---|---|---|---|
| action | [Enum](#Enum) | No | Gerçekleştirilecek eylem. Premium bilgi için yok. Premium durumunuzu kontrol etmek için ` check`. bu sunucu için priminizi kullanmak için `activate` .| Aşağıdaki değerlerden birini kullanın: `Activate`, `Check`, `Deactivate` |

### Examples

```text
!premium
```
  
```text
!premium check
```
  
```text
!premium activate
```
  
```text
!premium deactivate
```


<a name='punishmentConfig'></a>

---

## !punishmentConfig

Belirli bir ihtar sayısına ulaşıldığında cezaları yapılandırın.

### Usage

```text
!punishmentConfig [punishment] [strikes] [args] 
```

### Aliases

- `!punishment-config`

### Arguments

| Argument | Type | Required | Description | Details |
|---|---|---|---|---|
| punishment | [Enum](#Enum) | No | Kullanılacak cezalandırma türü.| Aşağıdaki değerlerden birini kullanın: `ban`, `kick`, `mute`, `softban`, `warn` |
| strikes | [Sayı](#Sayı) | No | Bu cezalandırma için kullanılacak ihtar sayısı.|  |
| args | [Metin](#Metin) | No | İddialar cezaya geçti.|  |

### Examples

```text
!punishmentConfig
```


<a name='purge'></a>

---

## !purge

Bir kanaldaki mesajları temizleme

### Usage

```text
!purge <quantity> [user] 
```

### Aliases

- `!prune`

### Arguments

| Argument | Type | Required | Description | Details |
|---|---|---|---|---|
| quantity | [Sayı](#Sayı) | Yes | Kaç mesaj silinmelidir.|  |
| user | [Kullanıcı](#Kullanıcı) | No | Mesajları silinmiş olan kullanıcı.|  |

### Examples



<a name='purgeUntil'></a>

---

## !purgeUntil

Bir kanaldaki mesajları belirtilen mesaja kadar temizleyin.

### Usage

```text
!purgeUntil <messageID> 
```

### Aliases

- `!purge-until`
- `!prune-until`
- `!pruneu`
- `!purgeu`

### Arguments

| Argument | Type | Required | Description | Details |
|---|---|---|---|---|
| messageID | [Metin](#Metin) | Yes | Silinecek son mesaj ID'si|  |

### Examples



<a name='queue'></a>

---

## !queue

Şarkıları kuyrukta göster

### Usage

```text
!queue 
```

### Aliases

- `!q`

### Examples

```text
!queue
```


<a name='ranks'></a>

---

## !ranks

Tüm rütbeleri göster.

### Usage

```text
!ranks [page] 
```

### Aliases

- `!show-ranks`
- `!showranks`

### Arguments

| Argument | Type | Required | Description | Details |
|---|---|---|---|---|
| page | [Sayı](#Sayı) | No | Gösterilecek sıralama listesinin sayfası|  |

### Examples

```text
!ranks
```


<a name='removeInvites'></a>

---

## !removeInvites

Bir kullanıcıdan belirtilen miktarda daveti kaldırır.

### Usage

```text
!removeInvites <user> <amount> [reason] 
```

### Aliases

- `!remove-invites`

### Arguments

| Argument | Type | Required | Description | Details |
|---|---|---|---|---|
| user | [Kullanıcı](#Kullanıcı) | Yes | Davetlerin kaldırılacağı kullanıcı.|  |
| amount | [Sayı](#Sayı) | Yes | Kaldırılacak davetlerin sayısı.|  |
| reason | [Metin](#Metin) | No | Davetlerin kaldırılmasının nedeni.|  |

### Examples

```text
!removeInvites @User 5
```
  
```text
!removeInvites "User with space" 23 Removed for cheating
```
  
```text
!removeInvites @User -6 Added for apologizing
```


<a name='removeRank'></a>

---

## !removeRank

Bir rank'ı kaldırın.

### Usage

```text
!removeRank <rank> 
```

### Aliases

- `!remove-rank`

### Arguments

| Argument | Type | Required | Description | Details |
|---|---|---|---|---|
| rank | [Rol](#Rol) | Yes | The role of the rank you want to remove.|  |

### Examples

```text
!removeRank @Role
```
  
```text
!removeRank "Role with space"
```


<a name='repeat'></a>

---

## !repeat

Tekrar çalınacak şarkıyı ayarlayın.

### Usage

```text
!repeat 
```

### Aliases

- `!loop`

### Examples

```text
!repeat
```


<a name='restoreInvites'></a>

---

## !restoreInvites

Önceden temizlenmiş tüm davetiyeleri geri yükleyin.

### Usage

```text
!restoreInvites [user] 
```

### Aliases

- `!restore-invites`
- `!unclear-invites`
- `!unclearinvites`

### Arguments

| Argument | Type | Required | Description | Details |
|---|---|---|---|---|
| user | [Kullanıcı](#Kullanıcı) | No | Tüm davetleri geri yükleyecek kullanıcı. Atlanırsa tüm kullanıcılar için davetleri geri yükler.|  |

### Examples

```text
!restoreInvites
```
  
```text
!restoreInvites @User
```
  
```text
!restoreInvites "User with space"
```


<a name='resume'></a>

---

## !resume

Çalınan Şarkıyı Sürdür.

### Usage

```text
!resume 
```

### Aliases

- `!start`

### Examples

```text
!resume
```


<a name='rewind'></a>

---

## !rewind

Şarkıyı geri sar ve en baştan başla.

### Usage

```text
!rewind 
```

### Aliases

- `!replay`

### Examples

```text
!rewind
```


<a name='search'></a>

---

## !search

Arama terimini arayın ve sonuçlardan birini seçmenize izin verin.

### Usage

```text
!search [-p value|--platform=value] <search> 
```

### Arguments

| Argument | Type | Required | Description | Details |
|---|---|---|---|---|
| search | [Metin](#Metin) | Yes | Arama terimi|  |

### Flags

| Flag | Short | Type | Description |
|---|---|---|---|
| &#x2011;&#x2011;platform | &#x2011;p | [Enum](#Enum) | Şarkının çalınmasını istediğiniz platformu seçin. |

### Examples



<a name='seek'></a>

---

## !seek

Şarkının belirli bir bölümüne atla.

### Usage

```text
!seek [duration] 
```

### Arguments

| Argument | Type | Required | Description | Details |
|---|---|---|---|---|
| duration | [Sayı](#Sayı) | No | Şarkının atlanacağı konum (başlangıçtan itibaren, saniye olarak).|  |

### Examples

```text
!seek
```


<a name='setup'></a>

---

## !setup

Botu ayarlama ve sorunları kontrol etme konusunda yardım (örn. Eksik izinler)

### Usage

```text
!setup 
```

### Aliases

- `!guide`
- `!test`
- `!testbot`
- `!test-bot`

### Examples

```text
!setup
```


<a name='skip'></a>

---

## !skip

Geçerli şarkıyı atlayın ve sıradaki bir sonraki şarkıyı çalın.

### Usage

```text
!skip [amount] 
```

### Aliases

- `!next`

### Arguments

| Argument | Type | Required | Description | Details |
|---|---|---|---|---|
| amount | [Sayı](#Sayı) | No | Kaç şarkı atlanacak.|  |

### Examples

```text
!skip
```


<a name='softBan'></a>

---

## !softBan

Bir üyeyi sunucudan yasaklayın ve ardından otomatik olarak yasağını kaldırın.

### Usage

```text
!softBan [-d value|--deleteMessageDays=value] <user> [reason] 
```

### Aliases

- `!soft-ban`

### Arguments

| Argument | Type | Required | Description | Details |
|---|---|---|---|---|
| user | [Üye](#Üye) | Yes | Kullanıcı Yasaklamak.|  |
| reason | [Metin](#Metin) | No | Kullanıcı neden yasaklandı ? |  |

### Flags

| Flag | Short | Type | Description |
|---|---|---|---|
| &#x2011;&#x2011;deleteMessageDays | &#x2011;d | [Sayı](#Sayı) | Kullanıcının bu kadar gün önceki mesajlarını silin. |

### Examples



<a name='strike'></a>

---

## !strike

Bir kullanıcıya ihtar ekleme

### Usage

```text
!strike <member> <type> <amount> 
```

### Arguments

| Argument | Type | Required | Description | Details |
|---|---|---|---|---|
| member | [Üye](#Üye) | Yes | Vuruşları alan üye|  |
| type | [Enum](#Enum) | Yes | İhlalin türü| Aşağıdaki değerlerden birini kullanın: `allCaps`, `duplicateText`, `emojis`, `hoist`, `invites`, `links`, `mentionRoles`, `mentionUsers`, `quickMessages`, `words` |
| amount | [Sayı](#Sayı) | Yes | Eklenecek ihtar sayısı|  |

### Examples



<a name='strikeConfig'></a>

---

## !strikeConfig

Çeşitli ihlaller için alınan ihtarları yapılandırın.

### Usage

```text
!strikeConfig [violation] [strikes] 
```

### Aliases

- `!strike-config`

### Arguments

| Argument | Type | Required | Description | Details |
|---|---|---|---|---|
| violation | [Enum](#Enum) | No | İhlal türü.| Aşağıdaki değerlerden birini kullanın: `allCaps`, `duplicateText`, `emojis`, `hoist`, `invites`, `links`, `mentionRoles`, `mentionUsers`, `quickMessages`, `words` |
| strikes | [Sayı](#Sayı) | No | İhtar sayısı.|  |

### Examples

```text
!strikeConfig
```


<a name='subtractFakes'></a>

---

## !subtractFakes

Tüm kullanıcılardan sahte davetliler temizlendi.

### Usage

```text
!subtractFakes 
```

### Aliases

- `!subtract-fakes`
- `!subfakes`
- `!sf`

### Examples

```text
!subtractFakes
```


<a name='subtractLeaves'></a>

---

## !subtractLeaves

Tüm Kullanıcılardan Sunucudan Ayrılanları Sil.

### Usage

```text
!subtractLeaves 
```

### Aliases

- `!subtract-leaves`
- `!subleaves`
- `!sl`

### Examples

```text
!subtractLeaves
```


<a name='support'></a>

---

## !support

Destek sunucumuza katılmak için davet bağlantısı alın.

### Usage

```text
!support 
```

### Examples

```text
!support
```


<a name='tryPremium'></a>

---

## !tryPremium

InviteManager'ın premium sürümünü sınırlı bir süre için ücretsiz deneyin.

### Usage

```text
!tryPremium 
```

### Aliases

- `!try`
- `!try-premium`

### Examples

```text
!tryPremium
```


<a name='unban'></a>

---

## !unban

Bir kullanıcının yasağını kaldır.

### Usage

```text
!unban <user> [reason] 
```

### Arguments

| Argument | Type | Required | Description | Details |
|---|---|---|---|---|
| user | [Kullanıcı](#Kullanıcı) | Yes | Yasağının kaldırılması gereken kullanıcı|  |
| reason | [Metin](#Metin) | No | Bu kullanıcının yasaklanmasının nedeni.|  |

### Examples



<a name='unhoist'></a>

---

## !unhoist

Tüm üyelerin önüne, adlarının önünde özel bir karakter olacak şekilde bir karakter ekleyin, böylece üye listesinin sonunda gösterilirler.

### Usage

```text
!unhoist 
```

### Aliases

- `!dehoist`

### Examples

```text
!unhoist
```


<a name='unmute'></a>

---

## !unmute

Bir kullanıcının susturulmasını aç

### Usage

```text
!unmute <user> 
```

### Arguments

| Argument | Type | Required | Description | Details |
|---|---|---|---|---|
| user | [Üye](#Üye) | Yes | Susturulması gereken kullanıcı|  |

### Examples



<a name='volume'></a>

---

## !volume

Eğer bir argüman varsa sesi ayarlarsınız, yoksa şu anki sesi görürsünüz.

### Usage

```text
!volume [volume] 
```

### Aliases

- `!vol`

### Arguments

| Argument | Type | Required | Description | Details |
|---|---|---|---|---|
| volume | [Sayı](#Sayı) | No | Ayarlanacak olan ses.|  |

### Examples

```text
!volume
```


<a name='warn'></a>

---

## !warn

Kullanıcı Uyar

### Usage

```text
!warn <member> [reason] 
```

### Arguments

| Argument | Type | Required | Description | Details |
|---|---|---|---|---|
| member | [Üye](#Üye) | Yes | Uyarılacak kullanıcı.|  |
| reason | [Metin](#Metin) | No | Üye neden uyarıldı ?|  |

### Examples



