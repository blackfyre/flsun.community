# Quick Start Guide

## About

:::tip Kudos
This guide is based on the FAQ of the largest FLSUN facebook group, credit for compiling most of knowledge goes to the original authors of that document.  
The rest of the credit goes to the repository contributors, which you can join any time!
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
- Calibrate extruder, see [E-Step Calibration](/guide/calibration.html#e-step-calibration)
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

## Diagonal rods

- Several folks have seen the rods loosen or come out of the ball-joints.
  Reattach them using epoxy. Make sure the end is rotated and properly aligned
  with the other end. CA glue works, but doesn't give enough time to align.
- Make sure all rods are the same length!
- Measure the rods and enter the hole-to-hole length into config file
  ("delta diagonal rod" length). The stock length is 280.0 mm (QQ/QQ-S).
- This jig can assist with rod repairs: <https://www.thingiverse.com/thing:3108080>

## Filament sensor

- Yes, the firmware already supports it (definitely for QQ-S; not sure about QQ).
- You can find designs on thingiverse.com or buy a premade module online
- How to install:
  - You should use the normally-open side of the switch (switch should close when filament runs out).
    In either case, be sure you do NOT SHORT Gnd and 5V pins together!!!
    - QQ-S: Attach to MT-DET connector between S & G pins (see board labels). V is 5V.
    - QQ: Attach to ServoS2 connector between D4 and Gnd (2 outer pins; middle is 5V).
    - QQ, alternate: Attach to TFT28 board, as shown:![](https://lh3.googleusercontent.com/mo6OS4di6BuBIZMEuzF7RkiM6sTSxZtixVAOMHfbDff4_zJrtMpMgvMPuC5yhFhyLHyDxZIyKAIqVleeAxEguN3PnpG6BrctYbq-dX0rcOYWAsh8RHKhFoveK-16c2bW9HxoDecY) (Figure from the TFT28 Datasheet; see link In the "More Details" section further down.)

## Fans stay on, are noisy:

- Add an inline power switch: search "iec cord switch"
- Add thermoswitches (KSD9700, 45C, N.O.)
  - one for power supply fan (mount it in the donut)
  - one for chassis fan (mount it next to motor driver heatsinks)
- The fans are 60x60x15, 12V (QQ) or 24V (QQ-S) (except for power supply fan: 12V)
- If you really want to use Noctua fans for QQ-S, use a 24->12V buck-converter (a single converter can supply power for multiple fans, since adjustable fans work by switching the ground connection on and off)

## Belts

### How to tighten?

They are tightened by turning the thumb nuts at the top of the printer.

### How much to tighten?

They should be tight enough that there is some tension to keep the two sides of
the belt from touching each other in the middle with light finger pressure.
They should NOT be tight as guitar strings! This causes belt damage!  
You can also checkout the relevant [Calbiraton section](/guide/calibration.html#proper-belt-tensioning)

### How to tighten if the nuts are already bottomed out?

In this case:
 1. check your belts for damage,
 2. If not damaged, you'll need to shorten the belts by a couple of teeth.

For relevant steps, see the [replacement method](/guide/#how-to-replace-the-belts).

### What are the belts? How long are they?

They are 6mm GT2 belts, and each is approximately 148 cm for the QQ-S (Pro).  

:::tip
Don't use steel core belts as they will damage the idlers/drive gear as they are made from aluminium.
:::

### How to replace the belts?

First, loosen the nuts at the top. Then remove the metal side covers.
On the carriage, remove the 4 screws on the back to remove the back cover plate.
The ends of the belt can then slide out from the holder.
Motor mounts can bend: (older models had aluminum brackets instead of steel)

- The motor mounts can bend if the belts were over tightened.
- This can cause damage to the motor pulleys, belts, as well as printing problems.
- If they are bent, you can straighten them out using brute force.
- You should consider adding motor blocks to prevent the mounts from tilting.
  See <https://www.tinkercad.com/things/6hsckUHrPAz>

## Making the print stick

- Be sure to both autolevel and set the Z0 offset (ie, get first layer height right).
- Set the right temperatures for nozzle and bed.
- Use hairspray or glue stick if needed.
- Enable raft setting in slicer if needed.
- Large area prints will want to warp unless the printer environment is warm.
- (also try to avoid any breezes)

## Under-extrusion, or extruder is clicking without pushing filament

- Confirm that the bowden tube is tight against the nozzle with no gaps.
- Consider the Luke Hatfield fix; see <https://www.youtube.com/watch?v=7tCxO17XZtw>
- Confirm that the hot-end nozzle is firm against the throat (not the block).
- Confirm that the hot-end heatsink is being properly cooled.
- Check the extruder gear spring tension (counter-clockwise to tighten on QQ-S/Q5).
- Make sure the nozzle isn't too close to the bed (first layer only).
- Check the nozzle itself for any blockage or deformity.
- Confirm slicer settings (filament diameter).
- [Calibrate your extruder](/guide/calibration.html#e-step-calibration).
- Make sure your hot-end temperature is appropriate for the filament you're using.
- Make sure your print speed isn't too fast for the filament/nozzle you're using
- (use a lower speed for the first layer).

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

1.  Setup your QQ-S wifi as per this video
2.  Log on to your wifi router and get the assigned IP address for your printer, then write it down
3.  install Repetier Host from here https://www.repetier.com/download-now/
4.  Start Repetier
    1. Click on ‘Config’ then ‘Printer settings’ make sure you are on the connections tab
    2. Change the IP address to the one you wrote down from your router
    3. Make sure the port is 8080
    4. Click on the printer tab
    5. Click on check box for ‘Y axis’ invert direction so that it is ticked
    6. Click on the ‘Extruder’ tab
    7. Change extruder temp to 270, Bed temp to 120
    8. Make sure that the extruder nozzle diameter and numbers of extruders is set correctly
    9. Click on the ‘Printer shape’ tab
    10. Change shape to Rostock
    11. Change home z = 376, x = 0, y =0
    12. Change radius to 130, and height to 376
5.  Click on Apply, then OK
6.  Click on connect.
    If everything is connected and you have the correct Wifi data you should be able to see ‘Disconnect’ instead of ‘Connect’.
    Click on the ‘Manual Control’ tab and you should be able to jog the Printer from the PC.
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

## G-Code descriptions:

- <https://reprap.org/wiki/G-code> (best one: describes all types incl. Repetier)
- <http://marlinfw.org/meta/gcode/> (Marlin only)

## CAD Files

* [Old QQ-S](https://grabcad.com/library/modded-flsun-qq-s-1)

### More details about TFT28, including button customization:

- [English datasheet](https://github.com/makerbase-mks/Datasheet/blob/master/English%20datasheet/MKS%20TFT28%2032%20DataSheet.pdf)
- [IMG2LCD software](https://github.com/makerbase-mks/Software/tree/master/Image2LCD)
  (A similar procedure can be used to customize QQ-S/Q5 button appearance)
