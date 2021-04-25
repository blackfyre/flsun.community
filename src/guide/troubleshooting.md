# Troubleshooting

## Pulleys are loose on the motor shafts

One carriage doesn't move or doesn't always move right. Tighten them.

## Nozzle is higher in the middle vs. the sides (or vice versa)

You need to set the diagonal rod length accurately, then redo the auto-leveling. Diagonal rod length can be adjusted with the curvature buttons, or by sending the G-code `M665 L<length in mm>`. The diagonal rod length is the hole-center to hole-center distance for the diagonal rods. They all need to be the same length for accurate printing.

## Print isn't sticking to the bed

- Make sure bed is clean
  - Wipe the bed with Isopropyl Alcohol a.k.a. rubbing alcohol regurarly
  - Use dishwashing liquid to remove grease from the bed
- Make sure Z0 height is correct (nozzle isn't too high)
- Make sure the temperatures are correct for the given filament
- If necessary, use a brim or raft for extra adhesion
- If necessary, use hairspray or glue for extra adhesion

## My print is skewed / leaning

- Make sure that the belts are equally tight. Big differences in belt tension can cause this.

## The QQ-S pauses slightly when I press buttons while printing

Yes, you should avoid doing that. Or change to a different firmware.

- There's a new board ("Hispeed") available for the QQ-S that features replaceable drivers. You can buy it from Flsun customer service, or check AliExpress for it.

## It doesn't auto-level right, it goes to the wrong height or digs into the bed

You may have the Z-probe offset set incorrectly. This is the height of the nozzle above the bed when the Z-probe makes contact.

- For the leveling switch, set with G-code: `M851 Z-16.2`
- For the leveling pad, set with G-code: `M851 Z-1.05`
- Then save by using G-code: `M500`
  Also, if you've adjusted something that changes the height, reset the Z0 height.

## I broke my hot-end!

- The hot-end parts are relatively fragile, especially the throat
- You should heat the hot-end before removing the nozzle
  (otherwise, the plastic inside can act like glue)
- You should always use two wrenches or pliers: one to hold the stationary part, one to hold the part you're unscrewing
- When reassembling, first assemble loosely, then push the bowden tube all the way in, then heat and tighten last bit
  (or, use the Luke Hatfield fix; see above "Under-extrusion")

### Videos

- QQ-S: [https://youtu.be/3JNdCIWlTTY](https://youtu.be/3JNdCIWlTTY)

## Heating problems shown on LCD

### TH-error1 or BED-error1

Minimum temperature error at hot-end/bed heater

#### Check for

- (hot-end/bed) thermistor disconnected from the motherboard
- (hot-end/bed) thermistor wiring is broken
- (hot-end/bed) thermistor itself is broken

### TH-error2 or BED-error2

Maximum temperature error at hot-end/Bed heater

#### Check for

- (hot-end/bed) thermistor wiring is short-circuited
- (hot-end/bed) is on fire

### TH-error3 or BED-error3

Hot-end/bed not heating as expected

#### Check for

- (hot-end/bed) thermistor is not attached to (hot-end/bed)
- (hot-end/bed) thermistor is not making good contact with (hot-end/bed)
- (hot-end/bed) heater is not working properly
- excessive cool air is blowing on (hot-end/bed)

## The black coating is coming off from the glass

This is mostly a cosmetic issue. If adhesion is reduced, you can always use hairspray or glue to get it back. In fact, using hairspray or glue can act as a "buffer" to prevent a print from taking off any more of the black coating.
If the appearance bothers you, one easy fix is to get a Buildtak, PEI sheet, or other print surface to cover the entire bed with.

## The printer screen comes on when plugged into USB:

- This is annoying. In order to fix, you need to remove a part from the main board:
- remove D10 or F4 on MKS Gen L board (QQ)
- remove D5 or F4 on Robin Mini board (QQ-S)
- You could also modify a USB cable and cut the 5V power line.

## The fan ducts don't point at the nozzle tip:

You'll probably need another fan duct...

- QQ-S (Pro)
  - take your pick at [Thingieverse](https://www.thingiverse.com/search?q=qq-s+fan+duct&type=things&sort=relevant)
- Q5:
  - take your pick at [Thingieverse](https://www.thingiverse.com/search?q=q5+fan+duct&type=things&sort=relevant)

## Diagonal rods fell apart

Several folks have seen the rods loosen or come out of the ball-joints.  
Reattach them using epoxy. Make sure the end is rotated and properly aligned with the other end.

- Make sure all rods are the same length!
- Measure the rods and enter the hole-to-hole length into config file ("delta diagonal rod" length). The stock length is 280.0 mm (QQ/QQ-S).
- This jig can assist with rod repairs: <https://www.thingiverse.com/thing:3108080>

::: warning
CA glue works, but doesn't give enough time to align the parts.
:::

## Under-extrusion, or extruder is clicking without pushing filament

- Confirm that the bowden tube is tight against the nozzle with no gaps.
- Consider the Luke Hatfield fix; see <https://www.youtube.com/watch?v=7tCxO17XZtw>
- Confirm that the hot-end nozzle is firm against the throat (not the block).
- Confirm that the hot-end heatsink is being properly cooled.
- Check the extruder gear spring tension (counter-clockwise to tighten on QQ-S/Q5).
- Make sure the nozzle isn't too close to the bed (first layer only).
- Check the nozzle itself for any blockage or deformity.
- Confirm slicer settings (filament diameter).
- [Calibrate your extruder](/guide/calibration.md#e-step-calibration).
- Make sure your hot-end temperature is appropriate for the filament you're using.
- Make sure your print speed isn't too fast for the filament/nozzle you're using
- (use a lower speed for the first layer).

## Fans stay on, are noisy

- Add an inline power switch: search "iec cord switch"
- Add thermoswitches (KSD9700, 45C, N.O.)
  - one for power supply fan (mount it in the donut)
  - one for chassis fan (mount it next to motor driver heatsinks)
- The fans are 60x60x15, 12V (QQ) or 24V (QQ-S) (except for power supply fan: 12V)
- You can consider the [Noctua mod](/guide/upgrades.md#noctua-fans)