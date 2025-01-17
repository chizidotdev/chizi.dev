---
title: upower utility
description: View your battery's current state and statistics on Linux.
date: 2025-01-17T19:00:00Z
published: true
featured: true
---

TLDR;

```sh
upower -i /org/freedesktop/UPower/devices/battery_BAT0
```

Example response

```sh
  native-path:          BAT0
  vendor:               Hewlett-Packard
  model:                Primary
  serial:               01305 2018/02/04
  power supply:         yes
  updated:              Fri 17 Jan 2025 07:10:36 PM WAT (56 seconds ago)
  has history:          yes
  has statistics:       yes
  battery
    present:             yes
    rechargeable:        yes
    state:               discharging
    warning-level:       none
    energy:              33.5759 Wh
    energy-empty:        0 Wh
    energy-full:         35.2968 Wh
    energy-full-design:  50.0115 Wh
    energy-rate:         12.5223 W
    voltage:             11.71 V
    charge-cycles:       532
    time to empty:       2.7 hours
    percentage:          95%
    capacity:            68.8222%
    technology:          lithium-ion
    icon-name:          'battery-full-symbolic'
  History (rate):
    1737137436	12.522	discharging
```

<br/>

---

<br/>

The command breaks down into these parts:

- `upower`: The base command for power management
- `-i`: Flag for "information"
- `/org/freedesktop/UPower/devices/battery_BAT0`: The system path to your primary battery

<br/>

When you run this command, you'll see several key pieces of information:

### Power Supply Details

- **native-path**: Physical location of the battery in your system
- **vendor**: Manufacturer of your battery
- **model**: Battery model number
- **serial**: Battery serial number
- **technology**: Battery type (Li-ion, Li-poly, etc.)

### Current Status

- **state**: Current battery state (charging, discharging, fully-charged)
- **percentage**: Current charge level
- **capacity**: Health of battery compared to its original capacity
- **voltage**: Current voltage level
- **time to empty/full**: Estimated time until battery depletes/charges

### Historical Data

- **energy-rate**: Current power consumption rate
- **energy**: Current energy level
- **energy-full**: Maximum energy when fully charged
- **energy-full-design**: Factory-designed maximum energy

<br/>

---

<br/>

If `BAT0` doesn't work, your battery might be at:

- `battery_BAT1`
- `battery_CMB0`
- `battery_BAT`

You can list all power devices with:

```bash
upower --enumerate
```
