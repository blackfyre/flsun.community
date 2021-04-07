# Calibration

Calibrating your printer is a must if you want to get prints with decent fidelity and quality.

## E-Step Calibration

### Method 1

1. Figure out how to send g-code commands to your printer. Use software such as:
   - Pronterface
   - Repetier Host
   - many others (e.g. serial terminal programs)
     You can search: how to send g-code using [my printing software]
     Try baud rates of `250000` (QQ) or `115200` (QQ-S/Q5).
2. Find out what your starting E-step value is, if you can.
   - For QQ, use g-code: `M503`
     - Look at the M92 line, remember the number after "E" as the starting E-value (it's normally around 87 for the stock Flsun direct extruder).
   - For QQ-S/Q5, use g-code: `M205`
     Look for the number right before the label "Extr.1 steps per mm". (it's normally around 367 for the stock Titan-clone extruder).
3. Only if `M503` and `M205` don't work and you're not sure of the value, then go ahead
   and set a known initial value for E-steps; otherwise, skip this step.
   Send g-code: `M92 E99` (replace 99 with a different guess if you want)
   Use this guess as the starting E-step value for later.
4. Go ahead and set the hot-end to a temperature that will melt the
   filament you are using.
   Use the GUI or send g-code: `M104 S200` (replace 200 with desired temp)
5. Note where the filament enters the extruder drive, then measure and mark
   a point on the filament 70mm from where it goes in.
6. Wait for the hot-end to reach extruding temperature.
7. Tell the printer to extrude 50mm of filament, slowly.  
   Use the GUI or send g-codes:
   1. `M83` (do once to set extruder to relative mode)
   2. `G1 E50 F200` (extrude 50mm at 200mm/minute, which should take 15 seconds)
8. Measure the distance between the mark and where the filament goes in.
   With this measurement, we can calculate exactly how much filament was extruded.  
   Calculate: `extruded_amount = 70 - measurement`
9. Now, based on that amount, calculate the correct E-step value:  
   `new_e_steps = starting_e_step_value * 50 / extruded_amount`
   (ie, multiply the starting value by 50, then divide by the extruded amount)
10. Enter this new value by sending g-codes: M92 Exxx.x (you MUST replace xxx.x with your calculated new_e_steps) `M500` (saves the value to non-volatile memory)
11. You can repeat steps 5-8 to verify the new value.
12. Turn off the hot-end:

- Use the GUI or send g-code: `M104 S0`
- If the mark disappears inside the extruder drive at step 7, then you need to measure further out than 70mm. This shouldn't be necessary unless your initial guess is way off. You could also change your initial guess and go back to step 3.

### TeachingTech Style

The online tool by TeachingTech makes the math part easier, use it to your hearts content: [TeachingTech E-Step calibration tool](https://teachingtechyt.github.io/calibration.html#esteps)

## Printer geometry

There are a couple of prints you can do to check if your printers geometry checks out:

- [Advanced Delta Printer Calibration](https://www.thingiverse.com/thing:745523)
- [Delta Calibration & Validation Tool](https://www.thingiverse.com/thing:776346)

## How to set the correct Z=0 height on the QQ or QQ-S:

In the steps below, don't type the comment in []'s.
Steps:
-) Set up and run the program Pronterface
(or any program that lets you send G-code to the printer).
Try baud rates of 250000 (QQ) or 115200 (QQ-S/Q5).

0. Pick a height value about 5mm less than the maximum Z height of the nozzle.
   Here, we chose 365mm since the QQ's maximum Z height is around 370mm (Q5: 200mm)
1. Send G-code: `M665 H365` [Set height value to 365mm, the height chosen above]
1. Send G-code: `G28` [Home the printer]
1. Send G-code: `G1 Z0 F3000` [Go to Z=0, speed = 3000mm/min or 50mm/sec]
1. Measure the space between the nozzle and the bed. It should be around 5mm.
   If you aren't sure of the precise value, err on the low side
   (ie, if you aren't sure if it's 5 or 6mm, choose 5).
1. Calculate new H value = 365 + measured space
1. Put a piece of paper on the printer bed.
1. Send G-code: `M665 H<value>` [new H value]
1. Send G-code: `G28` [Home again, to sync with new value]
1. Send G-code: `G1 Z0` [Go to Z=0]
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

0. Set up and run Pronterface in order to send the bold G-codes below.
1. Read the current delta height using `M503` (for QQ) or `M205` (for QQ-S/Q5).
   For the QQ, look in the output for the `M665` line's "H" number.
   For the QQ-S, look in the output for "Z Max Length".
   The H (height) value should be a number around `370` for the QQ/QQ-S (210 Q5).
1. Home the printer with `G28`
1. Put a piece of paper on the printer bed.
1. Bring the nozzle to Z0 with `G1 Z0 F3000`
1. Go to step (X) above.

## Dialing in the retraction

::: tip
Different materials might have different retraction values correct for them, be sure to repeat the calibration for each material you're using, and save the results to their corresponding profiles.
:::

Retraction calibration is usually done with a towet like structure which has changing properties from segment to segment to test multiple options in one go. There are many ways to create these towers, here are some of them:

- [http://retractioncalibration.com/](http://retractioncalibration.com/)
- [Teaching Tech's guide](https://teachingtechyt.github.io/calibration.html#retraction)
- [Cura plugin featured by CHEP](https://www.youtube.com/watch?v=6LjbCIGCmd0&ab_channel=CHEP)

There's also the manual option, thingieverse is loaded with these towers, bout you'll have to about manually changing the values for each section.

## Dialing in the temperature

::: tip
Different materials might have different temperature values correct for them, be sure to repeat the calibration for each material you're using, and save the results to their corresponding profiles.
:::

Temperature calibration is usually done with a towet like structure which has changing properties from segment to segment to test multiple options in one go. There are many ways to create these towers, here are some of them:

- [Teaching Tech's guide](https://teachingtechyt.github.io/calibration.html#temp)
- [Cura plugin featured by CHEP](https://www.youtube.com/watch?v=6LjbCIGCmd0&ab_channel=CHEP)

There's also the manual option, thingieverse is loaded with these towers, bout you'll have to about manually changing the values for each section.