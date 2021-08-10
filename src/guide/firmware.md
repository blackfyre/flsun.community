# Firmwares

Firmwares are an essential part of every 3D printer! A lot rides on proper on the proper firmware for the proper board!
## Official Firmwares

Inside the zip files, there are usually 6 different rar files:
- QQ with leveling pad
- QQ with leveling switch
- QQ-S with leveling pad
- QQ-S with leveling switch
- QQ-S with leveling pad, different-looking icons ("new UI")
- QQ-S with leveling switch, different-looking icons ("new UI")

Extract the proper one for your configuration.

::: warning
The new UI version for QQ-S has mistakes in the "robin_mini_cfg.txt" file.
:::

If you choose this version, you should get the robin_mini_cfg.txt file from the other (2.3) version. (If you can't extract the rar files, install a program such as 7-Zip.)

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

### Sources

#### FLSUN Q5
 * [https://www.flsun3d.com/companyfile/1/](https://www.flsun3d.com/companyfile/1/)

#### FLSUN QQ-S
 * [https://www.flsun3d.com/companyfile/1/](https://www.flsun3d.com/companyfile/1/)

#### FLSUN SR
TBA
## Custom firmwares

::: tip
Instructions for the custom firmwares are provided by the repositories, respectively.
:::

### Marlin
#### Build your own
Go to <https://marlinfw.org> or <https://github.com/MarlinFirmware>
(This is for folks who will build it themselves.)

#### DeltaFoxIes

 * [Firmwares](https://github.com/Foxies-CSTL/Marlin_2.0.x/tree/Firmwares)
 * [Wiki](https://github.com/Foxies-CSTL/Marlin_2.0.x/wiki)

### Klipper

#### What is Klipper?
Klipper is a 3D printer firmware that runs on a Raspberry Pi as opposed to the microcontroller of the printer.
The advantage of this is that the complex inverse kinematic calculations of delta printers can be processed on the
Raspberry Pi, which has way more computational horsepower compared to the 32-bit microcontroller in the printer.
This way, all the microcontroller has to handle are the movement commands (ex. move stepper_a 10 steps) as well as heating commands (ex. heat extruder to 200 degrees). This results in a much smoother operation of the printer.

Another advantage of Klipper is that you don't have to recompile and flash the printer firmware every time you change something in
the configuration file like you do in Marlin. You can even edit the configuration file on the web interface and hit a button to reset the printer and instantly load the new configuration. This makes the tuning process much more efficient.

It's also highly configurable. Here are some of the cool things you can do with it:

- You can set it up to run multiple boards on a single printer (if you have a ton of steppers and/or extruders)
- You can run multiple printers on one Raspberry Pi and control them all from a single web interface
- You can set up a printer farm by running a ton of printers on a powerful Linux PC


#### How do I get it?

##### QQ-S (Pro)
You can follow this tutorial: [https://github.com/CobraPi/Klipper-Firmware-FLSUN-QQ-S-Pro](https://github.com/CobraPi/Klipper-Firmware-FLSUN-QQ-S-Pro)

##### SR

3D Print Beginner made a tutorial on how to do it if you've got an MKS Nano v3 board: [https://3dprintbeginner.com/klipper-on-flsun-super-racer/](https://3dprintbeginner.com/klipper-on-flsun-super-racer/)
