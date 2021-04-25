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

## What is the stock Hot End?

- QQ/QQ-S: It's a combination of: XCR BP6 block, mk8 nozzle, V6-clone heatsink & throat

### Can I upgrade to E3D V6? Sure! Many people have.

- Q5, and late-model QQ-S Pros: It's totally different; like Ender 3 (tbd)

## Wifi

There are a couple of options here:

- Setting up Repetier
- Or use a RaspberryPi with Octoprint instead. It's better.
  - No more SD card
  - GCODE console
  - lots of usability improving pl

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
- Folks have printed at up to 130mm/sec.

## What about an enclosure?

- When printing at the edge of the bed, the effector sticks out past the frame.
- So if you put flat sides on you'll limit the print area.
- You can use a design that provides a top and bottom for a piece of stiff but flexible material (there are several on Thingiverse).

## Slicers, settings:

- You should probably download the current version instead of using the provided one.
- Cura (open source; available for PC, Mac, and Linux) <https://ultimaker.com/software/ultimaker-cura>
- Some versions had very slow z movement; there's a fix for that:
  - Set the maximum Z speed in the settings to a reasonable value.
- Slic3r or Prusa Slicer (open source; for PC, Mac, and Linux) <https://slic3r.org> <https://www.prusa3d.com/prusaslicer/>
- Some settings can be found in the files section
- Simplify 3D (commercial; available for PC, Mac, and Linux) <https://www.simplify3d.com>
- Some settings can be found in the files section

## Other software:

- Repetier Host
- Use for printing from a computer or sending G-code. Includes slicers. <https://www.repetier.com/download-now/>
- Pronterface (PrintRun)
- Use for testing the printer and sending G-code. <http://www.pronterface.com/#download>
- Octoprint (on RPi)
- Enables easy wifi printing, time lapses, other features. <https://octoprint.org/>

## Details about the boards:

- MKS Robin Mini board: <https://github.com/makerbase-mks/MKS-Robin-mini>
- MKS Robin Nano board: <https://github.com/makerbase-mks/MKS-Robin-Nano>
- MKS Gen L board: <https://github.com/makerbase-mks/MKS-GEN_L>
- MKS TFT28 board: <https://github.com/makerbase-mks/MKS-TFT>
- The HiSpeed board is a custom version of the Robin Mini board.
  - There are two versions:
    - one with soldered motor drivers,
    - one with driver sockets.

## G-Code descriptions

- <https://reprap.org/wiki/G-code> (best one: describes all types incl. Repetier)
- <http://marlinfw.org/meta/gcode/> (Marlin only)

## CAD Files

* [Old QQ-S](https://grabcad.com/library/modded-flsun-qq-s-1)

## More details about TFT28, including button customization:

- [English datasheet](https://github.com/makerbase-mks/Datasheet/blob/master/English%20datasheet/MKS%20TFT28%2032%20DataSheet.pdf)
- [IMG2LCD software](https://github.com/makerbase-mks/Software/tree/master/Image2LCD)
  (A similar procedure can be used to customize QQ-S/Q5 button appearance)
