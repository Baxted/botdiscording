# ضربات

## What are strikes?

Strikes are points that users get for violating server rules. Every time the user receives a strike, he gets a personal message telling him how many strikes he has and why he got them. When a user reaches a certain amount of strikes, he will receive a **punishment**.

## What are violations?

Violations are auto-moderation rules that you can enable or disable on your server. Currently, the following violations exist:

- [invites](strikes.md#invites)
- [links](strikes.md#links)
- [words](strikes.md#words)
- [allCaps](strikes.md#allcaps)
- [duplicateText](strikes.md#duplicatetext)
- [quickMessages](strikes.md#quickmessages)
- [mentionUsers](strikes.md#mentionusers)
- [mentionRoles](strikes.md#mentionroles)
- [emojis](strikes.md#emojis)

For each of those violations, you have to define how many strikes will be given if someone violates it. You can do that by using the `strikeconfig` command:

```text
!strikeconfig <violationType> <numberOfStrikes>
```

For example, if you want users to get `2` strikes for violating the `invites` rule, then you would use the following command:

```text
!strikeconfig invites 2
```

You can check the current config by doing:

```text
!strikeconfig
```

## Detailed list of violations

### invites

This violation is triggered whenever the user posts an invite link to another discord server.

Example:

`!strikeconfig invites 1`

To delete the strike config:

`!strikeconfig invites 0`

**Config options:**

- [autoModInvitesEnabled](../../reference/settings?id=enabled-2)

### links

This violation is triggered whenever the user posts a link.

Example:

`!strikeconfig links 1`

To delete the strike config:

`!strikeconfig links 0`

**Config options:**

- [autoModLinksEnabled](../../reference/settings?id=enabled-3)
- [autoModLinksWhitelist](../../reference/settings?id=whitelist)
- [autoModLinksBlacklist](../../reference/settings?id=blacklist)
- [autoModLinksFollowRedirects](../../reference/settings?id=follow-redirects)

### words

This violation is triggered whenever the user posts blacklisted words.

Example:

`!strikeconfig words 1`

To delete the strike config:

`!strikeconfig words 0`

**Config options:**

- [autoModWordsEnabled](../../reference/settings?id=enabled-4)
- [autoModWordsBlacklist](../../reference/settings?id=blacklist-1)

### allCaps

This violation is triggered whenever the user posts a message that is mostly in CAPS.

Example:

`!strikeconfig allCaps 1`

To delete the strike config:

`!strikeconfig allCaps 0`

**Config options:**

- [autoModAllCapsEnabled](../../reference/settings?id=enabled-5)
- [autoModAllCapsMinCharacters](../../reference/settings?id=min-characters)
- [autoModAllCapsPercentageCaps](../../reference/settings?id=percentage-caps)

### duplicateText

This violation is triggered whenever the user posts the same text multiple times.

Example:

`!strikeconfig duplicateText 1`

To delete the strike config:

`!strikeconfig duplicateText 0`

**Config options:**

- [autoModDuplicateTextEnabled](../../reference/settings?id=enabled-6)
- [autoModDuplicateTextTimeframeInSeconds](../../reference/settings?id=timeframe-in-seconds)

### quickMessages

This violation is triggered whenever the user quickly posts messages.

Example:

`!strikeconfig quickMessages 1`

To delete the strike config:

`!strikeconfig quickMessages 0`

**Config options:**

- [autoModQuickMessagesEnabled](../../reference/settings?id=enabled-7)
- [autoModQuickMessagesNumberOfMessages](../../reference/settings?id=-of-messages)
- [autoModQuickMessagesTimeframeInSeconds](../../reference/settings?id=timeframe-in-seconds-1)

### mentionUsers

This violation is triggered whenever the user mentions mutliple users.

Example:

`!strikeconfig mentionUsers 1`

To delete the strike config:

`!strikeconfig mentionUsers 0`

**Config options:**

- [autoModMentionUsersEnabled](../../reference/settings?id=enabled-8)
- [autoModMentionUsersMaxNumberOfMentions](../../reference/settings?id=max-of-mentions)

### mentionRoles

This violation is triggered whenever the user mentions mutliple roles.

Example:

`!strikeconfig mentionRoles 1`

To delete the strike config:

`!strikeconfig mentionRoles 0`

**Config options:**

- [autoModMentionRolesEnabled](../../reference/settings?id=enabled-9)
- [autoModMentionRolesMaxNumberOfMentions](../../reference/settings?id=max-of-mentions-1)

### emojis

This violation is triggered whenever the user posts multiple emojis.

Example:

`!strikeconfig emojis 1`

To delete the strike config:

`!strikeconfig emojis 0`

**Config options:**

- [autoModEmojisEnabled](../../reference/settings?id=enabled-10)
- [autoModEmojisMaxNumberOfEmojis](../../reference/settings?id=max-of-emojis)
