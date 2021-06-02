# QQ-S Modifications Gallery

::: warning
Content in this section is will void any warranty on your machine!
:::

## Board switch

Ditching the factory board can have advantages like the handling more stepper drivers (for multiple extruders, ...) or add RGB LED controlling feature through a NeoPixel Bus interface or just and order of magnitude higher computational capacity (Delta style printers require a higher level of computational power than Cartesian style ones).

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

## Linear Rails

There have been postings on the FB group for this, content contribution is required

## Diamond mixing Hotend

There have been postings on the FB group for this, content contribution is required

## Duet Smart Effector

The Smart Effector is a full service hotend mounting solution with a buit in pressure sensor which results in virtually 0 Z-probe offsets and can be a huge contributor for the perfect first layer!  
With proper settings, it's usable by all boards & firmwares, but you'll have to figure it out (and share if possible).  
This guide if assumes that you have a Duet 2 board.

### BOM
 - 1 Duet Smart Effector
 - 1 set (6pcs) [Haydn Huntley's magball arms](https://www.magballarms.com/), 288mm in length
 - ~2m 4 core 22-24 AWG cable
 - ~2m 9 core 22 AWG cable (if your original wiring is short and you want to do a clean job)
 - 1 set (6pcs) Proper bearings/bushings, see [upgrades section](/guide/upgrades.md#from-bushings-to-bearings) for details
 - 3 printed carriages (Material doesn't matter)
   - [https://www.thingiverse.com/thing:4776756](https://www.thingiverse.com/thing:4776756)
   - [https://www.thingiverse.com/thing:4796709](https://www.thingiverse.com/thing:4796709)
 - 1 JST 4 pin inline connector <Badge text="recommended"/>
 - Smart Effector Fan shourds (ABS recommended)
   - [https://www.thingiverse.com/thing:3893311](https://www.thingiverse.com/thing:3893311)
   - [https://www.thingiverse.com/thing:3960474](https://www.thingiverse.com/thing:3960474)
 - 1 Crimping tool

### Hardware setup
 1. Print the Carriages of your choice
 2. Partially disassemble the printer so you can remove the old effector & carriage assembly
 3. Disassemble the effector assembly, the following components are reusable:
    - Heatbreak (a.k.a. throat)
    - Heatblock
    - Thermistor
    - Heat cartridge
    - Part cooling fans
    - Hotend cooling fan
    - Screws
 4. Assemble the new effector, refer to the [Duet Wiki](https://duet3d.dozuki.com/Wiki/Smart_effector_and_carriage_adapters_for_delta_printer#Section_Effector_and_hot_end) for details
 5. Assemble and mount the new carriages
 6. Mount the new effector
 7. Wiring it up  
   Be aware of the wiring, FLSUN skimped on the wiring, so you've got less wires available than you actually need. So you'll have to fill in the missing connections.
    1. Move the effector to one side of the bed, the nozzle should touch the side of the bed
    2. Check your cable lengths  
       - if the cable length good and it can reach the connectors on the smart effector, you're golden
       - if the cable length doesn't reach the connectors on the smart effector, you've got 2 options:
         - You can re-wire everything
         - Add some extensions (solder joints & shrink wrapping is recommended)
    3. Add the additional 4 core cable to the wiring loom
        * Optionally you can add the JST inline connector at the top of the printer, for the ease of disassembly, later on.
 8. Finish the assembly

### Firmware setup

#### RepRapFirmware (on a Duet)
You can take a look at the corresponding [Duet Wiki](https://duet3d.dozuki.com/Wiki/Smart_effector_and_carriage_adapters_for_delta_printer#Section_Commissioning) for this.

### Klipper
These settings are tested and yield consistent results withinh tolerances.

```
# For the actual pin name, refer to your boards documentation
[probe]
pin: PC1 #YMMV
z_offset: -0.340
speed: 20
samples: 2
samples_tolerance_retries: 2
```