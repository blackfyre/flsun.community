# Quick Start Guide

## Group etiquette

- Use the group search feature to look for answers first.
- Also look in the Files section of the group.
- Tell if you have QQ or QQ-S or Q5.
- Tell what software are you using, if relevant.
- Tell what filament are you using, if relevant.
- Always follow-up to your own post with the final solution you found.

## Maximum print dimensions? (QQ/QQ-S)

- 260 x 320/370 (cylinder+cone) - 210 x 180/210 (Q5)
- It's a 260mm wide x 320mm tall cylinder, topped off with a 50mm tall "cone" (not a true cone, since the sides are defined by arcs, not straight lines)

## QQ/QQ-S/QQ-S Pro differences

- QQ has power switch on left vs QQ-S right (internals rearranged)
- QQ has MKS Gen L 8-bit board vs QQ-S has MKS Robin Mini 32-bit board
- QQ has MKS TFT28 LCD with its own CPU vs QQ-S has simple LCD (no CPU)
- QQ has offboard mosfet module for bed vs QQ-S has onboard mosfet for bed
- QQ has offboard full-size SD card reader vs QQ-S has onboard micro SD reader
- QQ has 12V power supply, heaters vs QQ-S has 24V power supply, heaters
- QQ has aluminum bed vs QQ-S has lattice glass bed

## What's the QQ-S Pro?

- It's a QQ-S that comes with the leveling switch instead of the leveling pad
- QQ-S Pro has a "true" power switch by the cord jack, no switch on the front
- Note that Flsun makes changes all the time, so there are units with mixed parts.

## How to contact Flsun

- email: <service@flsund3d.com> (note the extra 'd') or Skype: search flsun
- through reseller such as AliExpress or Amazon store 
  -  <https://flsund3d.aliexpress.com/store/feedback-score/431393.html>
  - <https://www.amazon.com/sp?marketplaceID=ATVPDKIKX0DER&seller=A8DKO6HP8H5CQ>

## Initial setup
- Check your power supply voltage! Switch is on the side of the power supply.
- Assemble; tape the limit switch wires back; lubricate the rods
- Tighten belts properly (but not too tight; see below)
- Update firmware (see topic below)
- Load filament
- Make sure extruder has proper tension (but not too tight)
- Autolevel (see topic below)
- Set Z0 height
- Calibrate extruder (see Appendix 1)
- Do a test print
## Firmware
- What's the latest firmware version?
    - QQ: 3.0.2.4
    - QQ-S: 2.5
    - Q5: 2.5

### Where do I get it?

Check the [Firmware](/firmware/) section of the site! 

### How do I update my printer?
You need a reliable SD card that is 32GB or smaller and FAT32 formatted.
Just extract the contents from the appropriate rar/zip file to the SD card root.
- QQ: you should see (on card) 2 "mks" directories and 3 files starting with "mks".
- QQ-S/Q5: you should see 2 "mks" directories and 2 files starting with "robin".
- Turn the printer off, insert the SD card into the printer, and then turn it on.
- The printer should show "Updating", after which it should start up normally.
- After updating, you will need to auto-level and set the Z0 height again.

### What's the deal with firmware?

#### QQ: The QQ has 3 firmwares: Gen L board, TFT28 board, Wifi board
Typically, the Gen L firmware is left alone and only the other two are updated.
The Gen L board has a version of Marlin 1.x on it, modified by FLSun.
#### QQ-S/Q5: It has 2 firmwares: Robin Mini (Q5:Nano) board, Wifi board (if equipped)
The Robin Mini board runs a custom MKS/FLSun firmware based on Repetier.
Since Repetier firmware is GPL licensed, FLSun is required under the license
to publish their changes to the source code. They are in violation of the GPL
since they have not done this. Please ask them to publish the QQ-S source code!
###  What about "real" Marlin firmware?

#### QQ: Search post "Rick Salvador Marlin" for 1.1.9 and/or
find the 1.1.6 source in the Files Section.
Note: You must unplug the LCD screen in order to update over USB.
Or: Start with official Marlin, with the Delta/Flsun/Kossel configuration, then
modify the delta size parameters for the QQ (see the QQ-S's configuration).
#### QQ-S: There is a QQ-S config in the official Marlin source now.
Go to <https://marlinfw.org> or <https://github.com/MarlinFirmware>
(This is for folks who will build it themselves.)
You can also find prebuilt versions in the group's files section.
## QQ Extruder:
- Print this piece before it breaks: <https://www.thingiverse.com/thing:2970718>
- Too late, it broke already. What do I do?
You can use a clamp to hold the broken piece in place while you print a
replacement.
## Autoleveling:
- leveling pad vs new leveling module (switch)
- The leveling pad is a pain; you should use a leveling switch.
- Where to get the switch module? Search: "flsun leveling module"
(The "anycubic leveling sensor" can also work, but may require modification;
Either change the wire from the switch NC contact to NO contact, or change
Z_PROBE_ON_HIGH to 1 in robin_mini_config.txt.)
- How to install switch module? Search: "flsun leveling module", see videos
- DIY switch: See <https://www.thingiverse.com/thing:3741924> or
<https://www.thingiverse.com/thing:3457361>
- manual leveling (QQ-S/Q5 only)
Many folks say this is more accurate than autoleveling.
In any case, you must do an autolevel at least once before doing manual leveling.
- You must also set Z0! Autolevel alone doesn't guarantee correct nozzle height!
QQ-S: Use the menu button "Adjust Z0"
QQ: See [https://www.youtube.com/watch?v=8pePqGybytM ](https://www.youtube.com/watch?v=8pePqGybytM)or see Appendix 2.
## Diagonal rods:
- Several folks have seen the rods loosen or come out of the ball-joints.
Reattach them using epoxy. Make sure the end is rotated and properly aligned
with the other end. CA glue works, but doesn't give enough time to align.
- Make sure all rods are the same length!
- Measure the rods and enter the hole-to-hole length into config file
("delta diagonal rod" length). The stock length is 280.0 mm (QQ/QQ-S).
- This jig can assist with rod repairs: <https://www.thingiverse.com/thing:3108080>

## Filament sensor:

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

## Belts:
### How to tighten?
They are tightened by turning the thumb nuts at the top of the printer.
### How much to tighten?
They should be tight enough that there is some tension to keep the two sides of
the belt from touching each other in the middle with light finger pressure.
They should NOT be tight as guitar strings! This causes belt damage!
### How to tighten if the nuts are already bottomed out?
In this case, you need to shorten the belts by a couple of teeth.
See below on replacing.
### What are the belts? How long are they?
They are 6mm GT2 belts, and each is approximately 148 cm.
### How to replace the belts?
First, loosen the nuts at the top. Then remove the metal side covers.
On the carriage, remove the 4 screws on the back to remove the back cover plate.
The ends of the belt can then slide out from the holder.
Motor mounts can bend: (older models had aluminum brackets instead of steel)
- The motor mounts can bend if the belts were over tightened.
- This can cause damage to the motor pulleys, belts, as well as printing problems.
- If they are bent, you can straighten them out using brute force.
- You should consider adding motor blocks to prevent the mounts from tilting.
See <https://www.facebook.com/groups/120961628750040/permalink/438804073632459>

## Should I add TL smoothers?

- Not necessary, but folks say they do make prints smoother.
- They just plug inline between the main board and the motors.
- Use double-stick foam tape to secure them in the base.
- On Robin Mini, you can also try shorting across the resistors marked Rm6 (4 of them).
  - This forces mixed decay mode in the drivers and should result in smoother stepping.
  - This is not recommended to try as the risk of damaging the board is very high.

## The printer screen comes on when plugged into USB:

- This is annoying. In order to fix, you need to remove a part from the main board:
- remove D10 or F4 on MKS Gen L board (QQ)
- remove D5 or F4 on Robin Mini board (QQ-S)
- You could also modify a USB cable and cut the 5V power line.

## Making the print stick:
- Be sure to both autolevel and set the Z0 offset (ie, get first layer height right).
- Set the right temperatures for nozzle and bed.
- Use hairspray or glue stick if needed.
- Enable raft setting in slicer if needed.
- Large area prints will want to warp unless the printer environment is warm.
- (also try to avoid any breezes)

## Under-extrusion, or extruder is clicking without pushing filament:

- Confirm that the bowden tube is tight against the nozzle with no gaps.
- Consider the Luke Hatfield fix; see <https://www.youtube.com/watch?v=7tCxO17XZtw>
- Confirm that the hot-end nozzle is firm against the throat (not the block).
- Confirm that the hot-end heatsink is being properly cooled.
- Check the extruder gear spring tension (counter-clockwise to tighten on QQ-S/Q5).
- Make sure the nozzle isn't too close to the bed (first layer only).
- Check the nozzle itself for any blockage or deformity.
- Confirm slicer settings (filament diameter).
- Calibrate your extruder (see below).
- Make sure your hot-end temperature is appropriate for the filament you're using.
- Make sure your print speed isn't too fast for the filament/nozzle you're using
- (use a lower speed for the first layer).

## Replacement extruders (the filament pusher) (mostly for the QQ):

- The cheap aluminum one works fine.
- So does the Titan (clone).
- Many folks like the Bondtech dual-drive gear extruder.
- How to calibrate extruder?
See instructions in Appendix 1 below.

## Alternate extruder mounting:

- Why? It provides better filament control, needing less retraction.
- mid-mounted extruder: print a bracket <https://www.thingiverse.com/thing:3368268>
This allows the bowden tube to be not-quite half as long.
- flying extruder: Use a bracket like the one in the files section
  - This allows the bowden tube to be less than 12" (30cm) long.
  - You'll also need 3 paper clips and 3 large rubber bands (or similar material).
  - The paper clips can be installed under the screws at the top of the carriages to hold one end of the rubber bands, with the other end going to the extruder bracket. See <https://www.facebook.com/groups/120961628750040/permalink/434002980779235>

## What is the stock Hot End?

- QQ/QQ-S: It's a combination of: XCR BP6 block, mk8 nozzle, V6-clone heatsink & throat
- Can I upgrade to e3d v6? Sure! Many people have.
- Q5, and late-model QQ-S Pros: It's totally different; like Ender 3 (tbd)

## The fan ducts don't point at the nozzle tip:

- Print new ones from the Files section.
- There's also a version for the E3D V6 that is slightly shorter.

## Wifi:

- Ways to set up: see documents in the Files section. The app is not necessary.
- Or use a RaspberryPi with Octoprint instead. It's better.
- Later printers don't seem to include the wifi module.

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
More details about TFT28, including button customization:
- [https://github.com/makerbase-mks/Datasheet/blob/master/English%20datasheet/\

MKS%20TFT28%2032%20DataSheet.pdf](https://github.com/makerbase-mks/Datasheet/blob/master/English%20datasheet/MKS%20TFT28%2032%20DataSheet.pdf)
- IMG2LCD software: <https://github.com/makerbase-mks/Software/tree/master/Image2LCD>
(A similar procedure can be used to customize QQ-S/Q5 button appearance)

## Other problems:

- Pulleys are loose on the motor shafts (one carriage doesn't move or doesn't always move right). Tighten them.
- Nozzle is higher in the middle vs. the sides (or vice versa). You need to set the diagonal rod length accurately, then redo the auto-leveling. Diagonal rod length can be adjusted with the curvature buttons, or by sending the G-code `M665 L<length in mm>`. The diagonal rod length is the hole-center to hole-center distance for the diagonal rods. They all need to be the same length for accurate printing.
- Print isn't sticking to the bed:
- Make sure bed is clean
- Make sure Z0 height is correct (nozzle isn't too high)
- Make sure the temperatures are correct for the given filament
- If necessary, use a brim or raft for extra adhesion
- If necessary, use hairspray or glue for extra adhesion
- The QQ-S pauses slightly when I press buttons while printing. Yes, you should avoid doing that. Or change to a different firmware.
- There's a new board ("Hispeed") available for the QQ-S that features replaceable drivers. You can buy it from Flsun customer service, or check AliExpress for it.
- Info about the Q5? It's like a smaller QQ-S, but with several differences:
- Smaller print volume (210mm round by 210mm high, peak)
- Uses MKS Robin Nano board (has replaceable drivers, support for 2 extruders); still using Repetier-based firmware; still no source code.
- Different sliders (extruded rails & rollers vs. smooth rods)
- Different hot-end (slide-in throat vs. screw-in throat; different heatsink mount)
- It doesn't auto-level right: it goes to the wrong height or digs into the bed.
You may have the Z-probe offset set incorrectly. This is the height of the nozzle above the bed when the Z-probe makes contact.
- For the leveling switch, set with G-code: `M851 Z-16.2`
- For the leveling pad, set with G-code: `M851 Z-1.05`
- Then save by using G-code: `M500`
Also, if you've adjusted something that changes the height, reset the Z0 height.
- There's a new, cost-reduced version of the QQ-S Pro being sold now:
- Umbilical doesn't go to top, no metal inline plug/jack anymore
- Effector & hot-end is the same as the Q5, with only 2 fans total
- I broke my hot-end!
- The hot-end parts are relatively fragile, especially the throat
- You should heat the hot-end before removing the nozzle
(otherwise, the plastic inside can act like glue)
- You should always use two wrenches or pliers: one to hold the stationary part, one to hold the part you're unscrewing
- When reassembling, first assemble loosely, then push the bowden tube all the way in, then heat and tighten last bit
(or, use the Luke Hatfield fix; see above "Under-extrusion")
- Heating problems shown on LCD:
TH-error1: Minimum temperature error at hot-end heater
BED-error1: like TH-error1, but for the heated bed
Check for:
a) (hot-end/bed) thermistor disconnected from the motherboard
b) (hot-end/bed) thermistor wiring is broken
c) (hot-end/bed) thermistor itself is broken
TH-error2: Maximum temperature error at hot-end heater
BED-error2: like TH-error2, but for the heated bed
Check for:
a) (hot-end/bed) thermistor wiring is short-circuited
b) (hot-end/bed) is on fire
TH-error3: Hot-end not heating as expected
BED-error3: like TH-error3, but for the heated bed
Check for:
a) (hot-end/bed) thermistor is not attached to (hot-end/bed)
b) (hot-end/bed) thermistor is not making good contact with (hot-end/bed)
c) (hot-end/bed) heater is not working properly
d) excessive cool air is blowing on (hot-end/bed)
- The black coating is coming off from the glass
This is mostly a cosmetic issue. If adhesion is reduced, you can always use hairspray or glue to get it back. In fact, using hairspray or glue can act as a "buffer" to prevent a print from taking off any more of the black coating.
If the appearance bothers you, one easy fix is to get a Buildtak, PEI sheet, or other print surface to cover the entire bed with.
- I'd like to install silent stepper drivers. How?
First, check if your board has sockets for the stepper drivers. The QQ and Q5 should by default, but for the QQ-S, you need to have the version of the Hispeed board that has socketed drivers. Next, unplug your printer, remove the existing driver board(s), then carefully install the new module(s) (TMC2208 or TMC2209). Next, you'll have to reverse the motor directions for the installed drivers. This can be done in hardware (by reversing the wires as they plug into the driver) or in software (in the config.txt file, look for lines that say INVERT_X_DIR or EXT0_INVERSE and change the values, then reflash this file). Finally, set the motor current by adjusting the trim pots on the driver boards. There are youtube videos for this, such as <https://www.youtube.com/watch?v=0EH_hUJRLag>
- Can I enable UART mode for the TMC drivers?
Yes, assuming you are using Marlin firmware and not using the wifi module. See <https://www.youtube.com/watch?v=7ShcFKXrVHo> for the Q5. QQ-S is similar.
- It prints fine for the first few layers, then there's gaps:
See Under-Extrusion section on page 5.
- I can't get the driver for the printer installed on my computer.
See: <https://learn.sparkfun.com/tutorials/how-to-install-ch340-drivers/all>
- What else?

Appendix 1: How to calibrate extruder E-steps on your 3D printer:
1) Figure out how to send g-code commands to your printer. Use software such as:
  - Pronterface 
  - Repetier Host 
  - many others (e.g. serial terminal programs)
    You can search: how to send g-code using [my printing software]
    Try baud rates of `250000` (QQ) or `115200` (QQ-S/Q5).
2) Find out what your starting E-step value is, if you can.
  - For QQ, use g-code: `M503`
    - Look at the M92 line, remember the number after "E" as the starting E-value (it's normally around 87 for the stock Flsun direct extruder).
  - For QQ-S/Q5, use g-code: `M205`
Look for the number right before the label "Extr.1 steps per mm". (it's normally around 367 for the stock Titan-clone extruder).
3) Only if `M503` and `M205` don't work and you're not sure of the value, then go ahead
and set a known initial value for E-steps; otherwise, skip this step.
Send g-code: `M92 E99` (replace 99 with a different guess if you want)
Use this guess as the starting E-step value for later.
4) Go ahead and set the hot-end to a temperature that will melt the
filament you are using.
Use the GUI or send g-code: `M104 S200` (replace 200 with desired temp)
5) Note where the filament enters the extruder drive, then measure and mark
a point on the filament 70mm from where it goes in.
6) Wait for the hot-end to reach extruding temperature.
7) Tell the printer to extrude 50mm of filament, slowly.
Use the GUI or send g-codes:
   1) `M83` (do once to set extruder to relative mode)
   2) `G1 E50 F200` (extrude 50mm at 200mm/minute, which should take 15 seconds)
8) Measure the distance between the mark and where the filament goes in.
With this measurement, we can calculate exactly how much filament was extruded.
Calculate: extruded_amount = 70 - measurement
9) Now, based on that amount, calculate the correct E-step value:
new_e_steps = starting_e_step_value * 50 / extruded_amount
(ie, multiply the starting value by 50, then divide by the extruded amount)
10) Enter this new value by sending g-codes:
M92 Exxx.x (you MUST replace xxx.x with your calculated new_e_steps)
M500 (saves the value to non-volatile memory)
11) You can repeat steps 5-8 to verify the new value.
12) Turn off the hot-end:
Use the GUI or send g-code: `M104 S0`
If the mark disappears inside the extruder drive at step 7, then you need to measure further out than 70mm. This shouldn't be necessary unless your initial guess is way off. You could also change your initial guess and go back to step 3.

Appendix 2: How to set the correct Z=0 height on the QQ or QQ-S:
In the steps below, don't type the comment in []'s.
Steps:
-) Set up and run the program Pronterface
(or any program that lets you send G-code to the printer).
Try baud rates of 250000 (QQ) or 115200 (QQ-S/Q5).
0) Pick a height value about 5mm less than the maximum Z height of the nozzle.
Here, we chose 365mm since the QQ's maximum Z height is around 370mm (Q5: 200mm)
1) Send G-code: `M665 H365` [Set height value to 365mm, the height chosen above]
2) Send G-code: `G28` [Home the printer]
3) Send G-code: `G1 Z0 F3000` [Go to Z=0, speed = 3000mm/min or 50mm/sec]
4) Measure the space between the nozzle and the bed. It should be around 5mm.
If you aren't sure of the precise value, err on the low side
(ie, if you aren't sure if it's 5 or 6mm, choose 5).
5) Calculate new H value = 365 + measured space
6) Put a piece of paper on the printer bed.
7) Send G-code: `M665 H<value>` [new H value]
8) Send G-code: `G28` [Home again, to sync with new value]
9) Send G-code: `G1 Z0` [Go to Z=0]
X) See if the paper moves easily, has slight friction, or is stuck tight,
then choose:
Paper moves easily:
a) Increase H value by 0.1
b) Go back to step 7
Paper has slight friction:
a) Send G-code: `M500` [Save the new value]
b) You're done! Celebrate!
Paper is stuck tight:
a) Decrease H value by 0.1
b) Go back to step 7


If you just want to tweak your Z=0 setting, follow these steps:
0) Set up and run Pronterface in order to send the bold G-codes below.
1) Read the current delta height using `M503` (for QQ) or `M205` (for QQ-S/Q5).
For the QQ, look in the output for the `M665` line's "H" number.
For the QQ-S, look in the output for "Z Max Length".
The H (height) value should be a number around `370` for the QQ/QQ-S (210 Q5).
2) Home the printer with `G28`
3) Put a piece of paper on the printer bed.
4) Bring the nozzle to Z0 with `G1 Z0 F3000`
5) Go to step (X) above.