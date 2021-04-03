# Calibration

Calibrating your printer is a must if you want to get prints with decent fidelity and quality.

## E-Step Calibration

### Method 1
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
Calculate: `extruded_amount = 70 - measurement`
9) Now, based on that amount, calculate the correct E-step value:  
`new_e_steps = starting_e_step_value * 50 / extruded_amount`
(ie, multiply the starting value by 50, then divide by the extruded amount)
10) Enter this new value by sending g-codes:   M92 Exxx.x (you MUST replace xxx.x with your calculated new_e_steps) `M500` (saves the value to non-volatile memory)
11) You can repeat steps 5-8 to verify the new value.
12) Turn off the hot-end:  
   - Use the GUI or send g-code: `M104 S0`  
   - If the mark disappears inside the extruder drive at step 7, then you need to measure further out than 70mm. This shouldn't be necessary unless your initial guess is way off. You could also change your initial guess and go back to step 3.

### TeachingTech Style

The online tool by TeachingTech makes the math part easier, use it to your hearts content: [TeachingTech E-Step calibration tool](https://teachingtechyt.github.io/calibration.html#esteps)

## Printer geometry

There are a couple of prints you can do to check if your printers geometry checks out:

 - [https://www.thingiverse.com/thing:745523](https://www.thingiverse.com/thing:745523)
 - [https://www.thingiverse.com/thing:776346](https://www.thingiverse.com/thing:776346)