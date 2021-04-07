# Upgrades

## Silent drivers

First, check if your board has sockets for the stepper drivers. The QQ and Q5 should by default, but for the QQ-S, you need to have the version of the Hispeed board that has socketed drivers. Next, unplug your printer, remove the existing driver board(s), then carefully install the new module(s) (TMC2208 or TMC2209). Next, you'll have to reverse the motor directions for the installed drivers. This can be done in hardware (by reversing the wires as they plug into the driver) or in software (in the config.txt file, look for lines that say `INVERT_X_DIR` or `EXT0_INVERSE` and change the values, then reflash this file). Finally, set the motor current by adjusting the trim pots on the driver boards. There are youtube videos for this, such as <https://www.youtube.com/watch?v=0EH_hUJRLag>

### Troubleshooting & FAQ

- Can I enable UART mode for the TMC drivers?
  Yes, assuming you are using Marlin firmware and not using the wifi module. See <https://www.youtube.com/watch?v=7ShcFKXrVHo> for the Q5. QQ-S is similar.
- It prints fine for the first few layers, then there's gaps: it's under extruding
- I can't get the driver for the printer installed on my computer.
  See: <https://learn.sparkfun.com/tutorials/how-to-install-ch340-drivers/all>
