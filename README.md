# Inline Shields.io

Replaces text links to [Shields.io][] badges ([like this][sample-badge]) with the
image of the badge (![like this][sample-badge]).

## Installation

- Install [TamperMonkey][]
- Visit the [script][], and click the install button

When you next load or reload a webpage, the script should be active.

## Updates

You can manually update the script by visiting the [script][] again.

The script is configured to automatically check for updates.  Configure the "Script Update Interval" inside the
TamperMonkey settings - this may be set to a long interval by default.

## Configuration

By default, the script will run on all websites:

![default configuration pane](http://i.imgur.com/G4oxJmk.png)

To block the script from running on a few sites, add them with the "User excludes" box:

![blacklist](http://i.imgur.com/9MIyifw.png)

To set a whitelist so the script only runs on a few sites, deselect :ballot_box_with_check: Original matches, and add
sites under "User matches":

![wihtelist](http://i.imgur.com/id1amB9.png)

[TamperMonkey]: https://tampermonkey.net/
[Shields.io]: https://shields.io
[sample-badge]: https://img.shields.io/badge/My-Badge-brightgreen.svg
[script]: https://rweda.github.io/inline-shields.io/script.user.js
