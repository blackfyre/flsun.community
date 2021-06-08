# Quick Start Guide

## About

This site is inteded to answer the most common questions around FLSUN 3D Printers, be it simple maintenance, upgrades or troubleshooting them. While most of the knowledge found here can be applied to most Delta type printers in the wild, it never hurts to have something specific to our own.

:::tip Kudos
This guide is based on the FAQ of the largest FLSUN facebook group, credit for compiling most of knowledge goes to the original authors of that document.  
The rest of the credit goes to the repository contributors, whom you can join any time!
:::

## How to contact Flsun

- email: <service@flsund3d.com> (note the extra 'd') or Skype: search flsun
- through reseller
  - [AliExpress](https://flsund3d.aliexpress.com/store/feedback-score/431393.html)
  - [Amazon](https://www.amazon.com/sp?marketplaceID=ATVPDKIKX0DER&seller=A8DKO6HP8H5CQ)
  - [FLSUN North America](https://flsunnorthamerica.com/)
  - [FLSUN Europe](https://flsun.eu/)
    - Offers refurbished printers as well

## Initial setup

- Check your power supply voltage! Switch is on the side of the power supply.
- Assemble; tape the limit switch wires back; lubricate the rods
- Tighten belts properly (but not too tight; see below)
- Update firmware (see topic below)
- Load filament
- Make sure extruder has proper tension (but not too tight)
- Autolevel (see topic below)
- Set Z0 height
- Calibrate extruder, see [E-Step Calibration](/guide/calibration.md#e-step-calibration)
- Do a test print

## QQ Extruder

- Print this piece before it breaks: <https://www.thingiverse.com/thing:2970718>
- Too late, it broke already. What do I do?
  You can use a clamp to hold the broken piece in place while you print a
  replacement.

## Autoleveling

- leveling pad vs new leveling module (switch)
- The leveling pad is a pain; you should use a leveling switch.
- Where to get the switch module? Search: "flsun leveling module"  
  (The "anycubic leveling sensor" can also work, but may require modification;  
  Either change the wire from the switch NC contact to NO contact, or change `Z_PROBE_ON_HIGH` to `1` in robin_mini_config.txt.)
- How to install switch module? Search: "flsun leveling module", see videos
- DIY switch: See <https://www.thingiverse.com/thing:3741924> or
  <https://www.thingiverse.com/thing:3457361>
- manual leveling (QQ-S/Q5 only)  
  Many folks say this is more accurate than autoleveling.  
  In any case, you must do an autolevel at least once before doing manual leveling.
- You must also set Z0! Autolevel alone doesn't guarantee correct nozzle height!
  - QQ-S: Use the menu button "Adjust Z0"
  - QQ: See [https://www.youtube.com/watch?v=8pePqGybytM ](https://www.youtube.com/watch?v=8pePqGybytM)or see Appendix 2.

## Wifi

There are a couple of options here:

- Setting up Repetier
- Or use a RaspberryPi with [Octoprint](https://octoprint.org/) instead. It's better.
  - No more SD card
  - GCODE console
  - lots of usability improving plugins

### Setting up repetier

1.  Setup your QQ-S wifi
2.  Log on to your wifi router and get the assigned IP address for your printer, then write it down
3.  install Repetier Host from here https://www.repetier.com/download-now/
4.  Start Repetier
    1. Click on `Config` then `Printer settings` make sure you are on the connections tab
    2. Change the IP address to the one you wrote down from your router
    3. Make sure the port is 8080
    4. Click on the printer tab
    5. Click on check box for `Y axis` invert direction so that it is ticked
    6. Click on the `Extruder` tab
    7. Change extruder temp to 270, Bed temp to 120
    8. Make sure that the extruder nozzle diameter and numbers of extruders is set correctly
    9. Click on the `Printer shape` tab
    10. Change shape to Rostock
    11. Change home z = 376, x = 0, y =0
    12. Change radius to 130, and height to 376
5.  Click on Apply, then OK
6.  Click on connect.
    If everything is connected and you have the correct Wifi data you should be able to see `Disconnect` instead of `Connect`.
    Click on the `Manual Control` tab and you should be able to jog the Printer from the PC.
7.  Have fun and enjoy!!

_Courtesy of TK Ward_

## Maximum print speed?

- Depends on many variables, but mostly the material and the model.
- Folks have printed at up to 130mm/sec with PLA.

## What about an enclosure?

When printing at the edge of the bed, the effector sticks out past the frame.  
So if you put flat sides on you'll limit the print area.  
You can use a design that provides a top and bottom for a piece of stiff but flexible material (there are several on Thingiverse).

## Slicers

::: tip
You should probably download the current version instead of using the provided one.
:::

This list only highlights the most popular Slicer choices!

- [Cura](https://ultimaker.com/software/ultimaker-cura) (open source; available for PC, Mac, and Linux)
  - Has default profiles for Q5, QQ-S (Pro)
  - Has default profiles for several different filaments
  - Some versions had very slow z movement; there's a fix for that:
    - Set the maximum Z speed in the settings to a reasonable value.
- [PrusaSlicer](https://www.prusa3d.com/prusaslicer/) (open source; for PC, Mac, and Linux)
  - Has default profiles for Q5, QQ-S (Pro)
  - Has default profiles for several different filaments
- [Simplify 3D](https://www.simplify3d.com) (commercial; available for PC, Mac, and Linux)
- [SuperSlicer](https://github.com/supermerill/SuperSlicer) (open source; for Windows & Linux source)
  - It's a customized/extended version of PrusaSlicer
  - Doesn't include a profile for FLSUN Printers, you'll have set it up yourself!
    - Not much to do, really... Just setup the bed size & max Z
    - You can use the PrusaSlicer profiles for reference
  - Has a couple advantages over Slic3r, PrusaSlicer on toolpath generation!
- [Slic3r](https://slic3r.org/) (open source; available for PC, Mac, and Linux)
  - The very slicer that's used as the foundation for PrusaSlicer, SuperSlicer, ...

::: warning
You should avoid asking for settings/profiles as each printer differs slightly and require different settings!  
:::

::: tip
You should always fine tune your settings depending on the spool of filament you're working with!
:::

### Priming the hotend

Properly priming the hotend for printing is beneficial to the print quality. Deltas have a bit tougher job than the usual square bedded counterparts, but there are a couple of options:

 - Print a skirt, 3 lines at least.
 - Print a [purge line](/guide/prime-line.md)

## Other software

- [Repetier Host](https://www.repetier.com/download-now/)
  - Use for printing from a computer or sending G-code. Includes slicers.
- [Pronterface](http://www.pronterface.com/#download) (PrintRun)
  - Use for testing the printer and sending G-code.
  - Is bundled with PrusaSlicer
- [Octoprint](https://octoprint.org/) (on RPi)
  - Enables easy wifi printing, time lapses, remote management, sending G-code and features a really poweful plugin system. 

## Give me Things to print!

After the exahustive setup, you might want to print something useful (or not), but where to get the things?  
Here are a couple of options for you:
 - [Cults](https://cults3d.com)
 - [MyMiniFactory](https://myminifactory.com) 
 - [Thingieverse](https://thingieverse.com)
 - [Thangs](https://thangs.com)

## Details about the boards

- MKS Robin Mini board: <https://github.com/makerbase-mks/MKS-Robin-mini>
- MKS Robin Nano board: <https://github.com/makerbase-mks/MKS-Robin-Nano>
- MKS Gen L board: <https://github.com/makerbase-mks/MKS-GEN_L>
- MKS TFT28 board: <https://github.com/makerbase-mks/MKS-TFT>
- The HiSpeed board is a custom version of the Robin Mini board.
  - There are two versions:
    - one with soldered motor drivers,
    - one with driver sockets.

### More details about TFT28, including button customization:

- [English datasheet](https://github.com/makerbase-mks/Datasheet/blob/master/English%20datasheet/MKS%20TFT28%2032%20DataSheet.pdf)
- [IMG2LCD software](https://github.com/makerbase-mks/Software/tree/master/Image2LCD)
  (A similar procedure can be used to customize QQ-S/Q5 button appearance)

## G-Code descriptions

- <https://reprap.org/wiki/G-code> (best one: describes all types incl. Repetier)
- <http://marlinfw.org/meta/gcode/> (Marlin only)

## CAD Files

- [Old QQ-S](https://grabcad.com/library/modded-flsun-qq-s-1)

## Bill of Materials

There's a BOM compilation in the [Bill of Materials section](/bom/) of the site
