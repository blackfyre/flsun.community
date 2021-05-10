# Upgrades

When changing something on the printer, always do some research first and have a clear goal in mind.  
There are several reasons you would want to change some characteristics of your printer like noise reduction, quick print relase, ability to print with more technical materials like nylon...  
If you're not interested in some measly improvements, but want to the abyss out of your printer, just head over to the [Mods section](/modifications/)

::: tip
Don't fix it if it isn't broke!
:::

## PEI Coated Spring Steel build plate <Badge text="easy"/>

If your glass coating breaks down, or just don't want to wait for the bed to cool down so you can grap your print, a PEI coated spring steel plate is easily the best upgrade you can get.  
There are a variety of available plates:

- PEI coated on one side, bare steel on the other side
- Smooth PEI coat on one side, rough textured on the other side

### BOM (What you'll need)

- 1x PEI coated spring steel plate:
  - Q5 <- looking for contributor info
  - QQ-S (Pro): 265 mm / 10.4 Inch in size
  - SQ <- looking for contributor info
- 1x bed plate sized fridge magnet, sticky on one side
  - usually included with the plate

### Installation

It's easy:

1. Clean the glass of any grease & debris
2. Attach the giant fridge magnet (sticky side to the glass)
3. Place the PEI coated plate on the fridge magnet
4. Enjoy!

::: tip
As you're introducing a couple of new layers the bed temperature may need to be adjusted.
:::

## Silent stepper drivers <Badge text="easy"/> <Badge text="cheap"/>

### BOM (What you'll need)

- 4x TMC2208 or TMC2209 <Badge text="recommended"/> stepper drivers
- 1x electronics board with stepper driver sockets

### Installation

0.  Check if your board has sockets for the stepper drivers.
    - The QQ and Q5 should by default
    - The QQ-S, you need to have the version of the Hispeed board that has socketed drivers.
1.  Unplug your printer, remove the existing driver board(s)
1.  Carefully install the new module(s) (TMC2208 or TMC2209).
1.  You'll have to reverse the motor directions for the installed drivers.

    - This can be done in hardware (by reversing the wires as they plug into the driver)
    - or in software (in the config.txt file, look for lines that say `INVERT_X_DIR` or `EXT0_INVERSE` and change the values, then reflash this file).

1.  Finally, set the motor current by adjusting the trim pots on the driver boards.

If you prefer the visual approach, there are youtube videos for this, such as <https://www.youtube.com/watch?v=0EH_hUJRLag>

### Troubleshooting & FAQ

- **Can I enable UART mode for the TMC drivers?**  
  Yes, assuming you are using Marlin firmware and not using the wifi module. See <https://www.youtube.com/watch?v=7ShcFKXrVHo> for the Q5. QQ-S is similar.
- **It prints fine for the first few layers, then there's gaps**  
  It's under extruding
- **I can't get the driver for the printer installed on my computer**
  See: <https://learn.sparkfun.com/tutorials/how-to-install-ch340-drivers/all>
- **Extruder is LOUD!**  
  Reduce the extruders max acceleration to 250mm/s<sup>2</sup>

## Ease of access

If you find yourself swapping hotends fairly regularly or just about any part in/on the effector cage it's reccommeded to install quick connectors for disconnecting the hotend & fans. A fairly quick & secure connector would be JST SM2.54.

::: tip
Use only 2 pin connectors, for when you only need to replace 1 fan you won't have cut & crimp everything again.
:::

## From bushings to bearings <Badge text="easy"/>

The QQ-S uses graphite impregnated bronze bushings in the carriages, these can be optionally replaced with:

- LM8UU linear bearings
- IGUS RJ4JP-01-08 or IGUS RJ4JP-03-08

::: tip
Be sure to get these from a well known, respectable source!
:::

::: warning
Plastic bushings will wear out faster than the bronze bushings!
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
- Silent stepper divers are more worht wile [upgrade](/guide/upgrades.md#silent-stepper-drivers).
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

## Optical Endstops

### QQ-S (Pro) <Badge text="easy"/> <Badge text="cheap"/>

The factory board has 3 pin connectors for the endstops which means that you can get power to more advanced endstops as well. The cheapest and most precise option is to use an optical endstop.  
There are a couple of options on thingiverse, but the best so far can be found at: [https://www.thingiverse.com/thing:4677442](https://www.thingiverse.com/thing:4677442)  
There are a couple of advantages:

- No more clicky-clicky when homing
- You'll get an additional 30mm of Z height
- Optical endstops don't wear out mechanically
- They are more precise than mechanical switches

## Direct Drive or close to it

Each drive setup (direct, bowden) has it's advantages, but if you want to print flexible materials like TPU, the bowden setup is detrimental to just about everything you would expect (print time, quality, ...). Not to mention that it puts extra strain on your extruder motor as it has to work overtime.  
But, as the extruder is moved, the weight is added to the effector/carriage assembly which can result in a quality drop.  
In general, we're talking about 2 options and variations on those themes:

- A Flying extruder
  - This shortens the bowden tube to a couple of centimeters
  - The load bearing parts are the carriages, not the effector
  - Parts can usually be printed in PLA
- Actual Direct Drive
  - This effectively removes the bowden tube from the equation
  - Adds extra weight to the effector which can result in artefacts and quality drop
  - Some parts will have to be made in temperature resistant materials

### Q5

#### Flying Extruders:

- There's a gimbal mounting in progress, will update this once it's released

### QQ-S (Pro)

#### Flying Extruders (You might have to mix parts):

- For the factory extruder: [https://www.thingiverse.com/thing:3840025](https://www.thingiverse.com/thing:3840025)
- BMG version: [https://www.thingiverse.com/thing:4355343](https://www.thingiverse.com/thing:4355343)

#### Direct Drive solutions:

- [https://www.thingiverse.com/thing:4830145](https://www.thingiverse.com/thing:4830145)

## Filament sensor

### QQ-S (Pro)

- Yes, the firmware already supports it (definitely for QQ-S; not sure about QQ).
- You can find designs on thingiverse.com or buy a premade module online
- How to install:
  - You should use the normally-open side of the switch (switch should close when filament runs out).
    In either case, be sure you do NOT SHORT Gnd and 5V pins together!!!
    - QQ-S: Attach to MT-DET connector between S & G pins (see board labels). V is 5V.
    - QQ: Attach to ServoS2 connector between D4 and Gnd (2 outer pins; middle is 5V).
    - QQ, alternate: Attach to TFT28 board, as shown:![](https://lh3.googleusercontent.com/mo6OS4di6BuBIZMEuzF7RkiM6sTSxZtixVAOMHfbDff4_zJrtMpMgvMPuC5yhFhyLHyDxZIyKAIqVleeAxEguN3PnpG6BrctYbq-dX0rcOYWAsh8RHKhFoveK-16c2bW9HxoDecY) (Figure from the TFT28 Datasheet; see link In the "More Details" section further down.)
