# Remotely access

Remotely accessing your printer is a boon when you want to monitor your printer and can't gaze at it 24/7... There are options!

::: tip
These are only recommendations, not a definitive guide!
:::

Things you'll probably need:  
  - Raspberry Pi 3/4 or alternative if you don't have 1 already
  - WebCam, if you don't have 1 already

::: danger
There is one thing you should absolutely avoid in all cases: **don't setup direct internet access to your printer interface!**
:::

## Remote access / monitoring with Octoprint

Octoprint's robust plugin system allows you to remotely interact with your printer in multiple ways:
 - [Telegram bots](https://plugins.octoprint.org/plugins/telegram/)
   - supports both monitoring and control
 - [Slack bot](https://plugins.octoprint.org/plugins/Octoslack/)
   - supports both monitoring and control
   - control via Pushover is not supported
 - [The Spaghetti Detective](https://plugins.octoprint.org/plugins/thespaghettidetective/)
   - supports both monitoring and control
   - Automagically cancels the print in case of [Flying Spaghetti Monsters](https://en.wikipedia.org/wiki/Flying_Spaghetti_Monster)

## Remote access with Klipper
 - [Moonraker Telegram](https://github.com/Raabi91/moonraker-telegram)
   - supports both monitoring and control
 - [VPN](remote-access.md#remote-access-through-vpn)

## Remote access with Duet Web Control
 - [Duet Telegram](https://github.com/martinj/duet-telegram)
   - supports both monitoring and control
 - [VPN](remote-access.md#remote-access-through-vpn)

## Remote access through VPN
 - [PiVPN](https://www.pivpn.io/)
   - really easy to set up if you've got a raspberry pi on your home network