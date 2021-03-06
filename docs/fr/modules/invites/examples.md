# Exemples

## Normal

```text
!config joinMessage {memberMention} **a rejoint**; Invité par **{inviterName}** (**{numInvites}** invitations)
```

```text
!config leaveMessage {memberName} **a quitté** après {joinedAt:duration} sur ce serveur; Invité par **{inviterName}**
```

## Normal (Vanity)

```text
!config joinMessageVanity {memberMention} **joined** using the vanity invite code **{inviteCode}**
```

```text
!config leaveMessageVanity {memberName} **left** after {joinedAt:duration} on this server
```

## Embed

### Message d'arrivée

<!-- tabs:start -->

#### ** Capture d'écran **

![Embed d'arrivée](../../../assets/invite-manager-join-message-premium.png)

#### ** Code **

```text
!config joinMessage { "color": "#5cd65c", "author": { "name": "{memberName} a rejoint !", "icon_url": "{memberImage}" }, "fields": [ { "name": "Compte créé", "value": "{memberCreated:timeAgo}", "inline": true }, { "name": "Première arrivée", "value": "{firstJoin:date}", "inline": true }, { "name": "Nombre d'arrivées", "value": "{numJoins}", "inline": true }, { "name": "Invité par", "value": "{inviterMention}\n{numInvites} (normales : {numRegularInvites}, bonus : {numBonusInvites}, fausses : {numFakeInvites}, partis : {numLeaveInvites})" }, { "name": "Code d'invitation", "value": "{inviteCode} dans {channelMention}" }, { "name": "Nombre total de membres", "value": "{memberCount}" } ] }
```

<!-- tabs:end -->

### Join Message (Vanity)

<!-- tabs:start -->

#### ** Capture d'écran **

![Join Embed (Vanity)](../../../assets/invite-manager-join-message-vanity-premium.png)

#### ** Code **

```text
!config joinMessageVanity { "color": "#5cd65c", "author": { "name": "{memberName} joined!", "icon_url": "{memberImage}" }, "fields": [ { "name": "Account created", "value": "{memberCreated:timeAgo}", "inline": true }, { "name": "First joined", "value": "{firstJoin:date}", "inline": true }, { "name": "Number of joins", "value": "{numJoins}", "inline": true }, { "name": "Vanity Invite Code", "value": "{inviteCode}" }, { "name": "Total Member Count", "value": "{memberCount}" } ] }
```

<!-- tabs:end -->

### Message de départ

<!-- tabs:start -->

#### ** Capture d'écran **

![Embed de départ](../../../assets/invite-manager-leave-message-premium.png)

#### ** Code **

```text
!config leaveMessage { "color": "#d65c5c", "author": { "name": "{memberName} a quitté!", "icon_url": "{memberImage}" }, "fields": [ { "name": "Temps sur le serveur", "value": "{joinedAt:duration}", "inline": true }, { "name": "Première arrivée", "value": "{firstJoin:date}", "inline": true }, { "name": "Nombre d'arrivées", "value": "{numJoins}", "inline": true }, { "name": "Invité par", "value": "{inviterMention}\n{numInvites} (normales : {numRegularInvites}, bonus : {numBonusInvites}, fausses : {numFakeInvites}, partis : {numLeaveInvites})" }, { "name": "Code d'invitation", "value": "{inviteCode} dans {channelMention}" }, { "name": "Nombre total de membres", "value": "{memberCount}" } ] }
```

<!-- tabs:end -->

### Leave Message (Vanity)

<!-- tabs:start -->

#### ** Capture d'écran **

![Leave Embed (Vanity)](../../../assets/invite-manager-leave-message-vanity-premium.png)

#### ** Code **

```text
!config leaveMessageVanity { "color": "#d65c5c", "author": { "name": "{memberName} left!", "icon_url": "{memberImage}" }, "fields": [ { "name": "Time on server", "value": "{joinedAt:duration}", "inline": true }, { "name": "First joined", "value": "{firstJoin:date}", "inline": true }, { "name": "Number of joins", "value": "{numJoins}", "inline": true }, { "name": "Vanity Invite Code", "value": "{inviteCode}" }, { "name": "Total Member Count", "value": "{memberCount}" } ] }
```

<!-- tabs:end -->
