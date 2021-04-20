# Upgrades

## Silent drivers <Badge text="easy"/> <Badge text="cheap"/>

First, check if your board has sockets for the stepper drivers. The QQ and Q5 should by default, but for the QQ-S, you need to have the version of the Hispeed board that has socketed drivers. Next, unplug your printer, remove the existing driver board(s), then carefully install the new module(s) (TMC2208 or TMC2209). Next, you'll have to reverse the motor directions for the installed drivers. This can be done in hardware (by reversing the wires as they plug into the driver) or in software (in the config.txt file, look for lines that say `INVERT_X_DIR` or `EXT0_INVERSE` and change the values, then reflash this file). Finally, set the motor current by adjusting the trim pots on the driver boards. There are youtube videos for this, such as <https://www.youtube.com/watch?v=0EH_hUJRLag>

### Troubleshooting & FAQ

- Can I enable UART mode for the TMC drivers?
  Yes, assuming you are using Marlin firmware and not using the wifi module. See <https://www.youtube.com/watch?v=7ShcFKXrVHo> for the Q5. QQ-S is similar.
- It prints fine for the first few layers, then there's gaps: it's under extruding
- I can't get the driver for the printer installed on my computer.
  See: <https://learn.sparkfun.com/tutorials/how-to-install-ch340-drivers/all>

## From bushings to bearings <Badge text="easy"/>

The QQ-S uses graphite impregnated bronze bushings in the sliders, these can be optionally replaced with:

- LM8UU linear bearings
- IGUS RJ4JP-01-08 or IGUS RJ4JP-03-08

::: tip
Be sure to get these from a well known, respectable source!
:::

## Noctua Fans <Badge text="medium"/>

### QQ-S (Pro)

The replacements are pretty straight forward as the fans are a direct replacement for the factory ones, even the wiring can be used, no need to do new wire runs.  
The only extra is a buck converter of the between the board and the 2 always on fans to set the proper voltages for the fans.

### Bill of Materials

- 1x NF-A4x20-FLX for the hot-end
- 1x NF-A6x25-FLX for the chassis
- If you have a 24V system, then a DC-DC, adjustable buck converter (LM2596 is the most common)

## Should I add TL smoothers?

- Not necessary, but folks say they do make prints smoother.
- They just plug inline between the main board and the motors.
- Use double-stick foam tape to secure them in the base.
- Silent stepper divers are more worht wile [upgrade](/guide/upgrades.html#silent-drivers).
- On Robin Mini, you can also try shorting across the resistors marked Rm6 (4 of them).
  - This forces mixed decay mode in the drivers and should result in smoother stepping.
  - This is not recommended to try as the risk of damaging the board is very high.

## Replacement extruders (the filament pusher) <Badge text="easy"/>

There are many options here from cheap clones to cutting edge, best of the best ones.

### QQ-S (Pro)

The most direct replacement one would be an E3D Titan or a clone of it.  
The most popular at the time seems to the Bondtech BMG or a clone of it.  
But just about any extuder will to that fits to a NEMA17 face plate!

## Alternate extruder mountings

It provides better filament control, needing less retraction, but in same cases it can introduce extra resonance into the frame which can result in ghosting.

### QQ-S (Pro)

#### Tower shroud mount

The mounting bracket can be found at <https://www.thingiverse.com/thing:3368268>  
This allows the bowden tube to be not-quite half as long.

#### Top mounted arm

The mounting arm can be found at <https://www.thingiverse.com/thing:4747813>  
This incorporates a mounting point for a filament runount sensor as well.

#### Flying extruder

The mounting can be fount at <https://www.thingiverse.com/thing:4355343>  
This allows the bowden tube to be less than 12" (30cm) long.

## Board switch

Ditching the factory board can have advantages like the handling more stepper drivers (for multiple extruders) or add RGB LED controlling feature through a NeoPixel Bus interface or just and order of magnitude higher computational capacity (Delta style printers require a higher level of computational power than Cartesian style ones).

::: tip
Write up a list of what features you want and choose the board accordingly!
:::

::: danger
If you proceed with this, you're doing this at your own risk. Your warranty is now void!
:::

### Duet 2 Wifi <Badge text="challenging"/>

Duet boards are stable, highly capable and can be configured through gcodes, supports macros and a lot of handy features for 3D Printing.  
A guide for gutting the QQ-S Pro can be found at [Medium](https://meki.medium.com/flsun-qq-s-and-duet-2-wifi-91b9c5419668)

### BigTreeTech SKR Boards <Badge text="not so hard"/>

BigTreeTech became popular with it's capable, (mostly) Marlin running cost effective boards. Each generation feautres fun things like NeoPixel support, well integrated TFT screens (as addons), proper fuses,... and the list could go on...

Theres replacement demonstation over at [Youtube](https://www.youtube.com/watch?v=lo4q7uVZlwU&ab_channel=EEtransmit)

## Optical Endstops

### QQ-S (Pro) <Badge text="easy"/> <Badge text="cheap"/>

The factory board has 3 pin connectors for the endstops which means that you can get power to more advanced endstops as well. The cheapest and most precise option is to use an optical endstop.  
There are a couple of options on thingiverse, but the best so far can be found at: [https://www.thingiverse.com/thing:4677442](https://www.thingiverse.com/thing:4677442)  
There are a couple of advantages:

- No more clicky-clicky when homing
- You'll get an additional 30mm of Z height
- Optical endstops don't wear out mechanically
- They are more precise than mechanical switches
