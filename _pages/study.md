---
title: Project Study
author: Issa Fares
date: 2025-05-23
category: Jekyll
layout: post
mermaid: true
---

<head>

<link href="{{ site.baseurl }}/assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
<link href="{{ site.baseurl }}/assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
<link href="{{ site.baseurl }}/assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>


<style>

    nav {
        display: block
    }

    * {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        -webkit-overflow-scrolling: touch;
        -webkit-tap-highlight-color: transparent;
        -webkit-text-size-adjust: none;
        -webkit-touch-callout: none;
        -webkit-font-smoothing: antialiased
    }

    a {
        text-decoration: none
    }

    body,
    html {
        height: 100%
    }

    html {
        font-size: 62.5%
    }

    body {
        text-rendering: optimizeLegibility;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-size: 14px;
        letter-spacing: .2px;
        text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%
    }

    .swot-list li {
        margin-bottom: 1rem;         
        line-height: 1.4;             
    }

    .projection-chart-tittle{
        text-align: center;
        font-style: italic;

    }

    .chart-container {
        position: relative;
        width: 100%;
        max-width: 100%;
        aspect-ratio: 16 / 9;
        /* or 4 / 3 for square-ish charts */
        margin-bottom: 2rem;
    }

    @media (max-width: 768px) {
        .chart-container {
            aspect-ratio: 4 / 3;
        }
    }

    .sankey-container {
        position: relative;
        width: 100%;
        height: 0;
        padding-bottom: 66.66%;
        /* 16:9 aspect ratio (9 / 16 * 100) */
        margin-bottom: 2rem;
    }

    #sankey_chart {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    @media (max-width: 768px) {
        .sankey-container {
            padding-bottom: 100%;
            /* 1:1 aspect ratio for better mobile height */
        }
    }



</style>

</head>

**Name:** Issa Fares **Date:** `2024-19-01` **Contact:** faresissa22@gmail.com

<div style="display: flex; justify-content: center; align-items: center; text-align: center;">
  <div>
  <p >
    <img src="{{ site.baseurl }}/assets/pilot_images/mining_1.jpg"  style="width: 90%; height: auto;">
  </p>
  </div>
</div>


# 1.0 Executive Summary

This report outlines a strategic Bitcoin mining operation based in Kano, Nigeria, designed for long-term profitability and sustainability through a blend of high-performance mining hardware and renewable energy integration. The operation leverages Bitmain’s Antminer S21 XP Hydro units, known for their energy efficiency and high hashrate performance (473 TH/s per unit). With an initial deployment of 30 units, the farm is engineered to maximize uptime, optimize cooling in a challenging climate, and progressively shift towards solar energy reliance.

A purely initial investment scenario projects a **first-year net profit of ＄145,248 on a total revenue of ＄275,670, with an annual operating cost of ＄130,422**. When reinvestment strategies are included—particularly the allocation of 85% of monthly profit into operational scaling and solar expansion—the project yields a **3-year net profit of ＄478,845**, with a **Return on Investment (ROI) of 68.5%**. The solar power share is expected to increase from **60% to 93%**, significantly reducing long-term energy costs.

The operation is designed with scalability and regulatory foresight, capitalizing on Nigeria’s recent recognition of digital assets in 2025. This legal backing is expected to enhance investor confidence and open the doors for institutional partnerships. In addition to cryptocurrency mining, the facility is positioned to evolve into a hybrid data center offering services such as edge computing and hosting.

Risks such as regulatory shifts, grid instability, and market volatility are actively mitigated through redundancy planning, energy diversification, and continual technical oversight. The facility’s modular infrastructure, climate-aware design, and strategic location offer long-term viability and opportunities for expansion.

---

# 2.0 Introduction

This report outlines the budget for the pilot study of a Crypto mining project. The project involves the construction of a facility from the ground up, incorporating advanced systems for energy integration, cooling mechanisms, and mining. The goal of this pilot study is to validate the feasibility and efficiency of the proposed design.

## 2.1 Background of Cryptocurrency and ASIC Mining

Cryptocurrency, a form of decentralized digital currency built on blockchain technology, has experienced rapid growth and adoption since the launch of Bitcoin in 2009. At the core of many cryptocurrencies, particularly Bitcoin, is a consensus mechanism known as Proof of Work (PoW), which requires solving complex cryptographic puzzles to validate transactions and secure the network. This process, commonly referred to as mining, demands significant computational power and energy consumption.

To meet these demands, the mining industry has evolved from using standard CPUs and GPUs to deploying specialized hardware known as Application-Specific Integrated Circuits (ASICs). ASIC miners are purpose-built chips designed to execute a narrow set of tasks with unmatched speed and efficiency—in this case, performing SHA-256 hashing used in Bitcoin mining. These devices dramatically outperform traditional hardware in both speed and energy efficiency, making them the industry standard for profitable large-scale mining operations.


## 2.2 Global trends in crypto mining

Over the last decade, cryptocurrency mining has transitioned into a global industrial operation. Countries like the United States, Russia, Kazakhstan, and previously China have led in hash rate production due to access to cheap electricity and favorable climates for cooling [Cambridge Centre for Alternative Finance, 2023]. However, rising regulatory scrutiny and environmental concerns have pushed the industry to seek more sustainable energy sources.

A notable trend is the integration of renewable energy, particularly solar and hydro, into mining infrastructure to reduce carbon footprints and maintain profitability. Furthermore, the industry has shown a shift toward modular mining units like Bitmain’s Antbox containers, which offer scalability, rapid deployment, and improved thermal management. These trends align with global ESG (Environmental, Social, and Governance) concerns and regulatory pressure on carbon-intensive data operations.

## 2.3 Project scope

This business study proposes the development of a solar-powered, containerized ASIC mining facility in Kano, Nigeria, utilizing Bitmain’s ANTSPACE HK5 (formerly HW5) modular hydro-cooling data center and Antminer S21 XP Hyd units. The ANTSPACE HK5 is a high-performance, closed-loop liquid cooling container capable of hosting up to 210 hydro-cooled miners per unit, offering exceptional energy efficiency and thermal stability in hot climates.

The mining facility will be powered entirely by solar photovoltaic (PV) energy, with additional energy storage and a UPS (uninterruptible power supply) system to ensure continuous operations during nighttime or periods of low solar irradiance. Given the high temperatures and dust levels characteristic of Northern Nigeria, hydro cooling offers a more reliable and efficient solution than traditional air cooling, significantly reducing the risk of thermal throttling and downtime.

This report provides a comprehensive analysis of the project’s technical, environmental, and financial feasibility. It covers the infrastructure and energy requirements, cooling design, capital and operational expenditures, local regulatory considerations, and projected return on investment (ROI). The project aims to showcase a clean, scalable, and profitable crypto mining model that leverages Nigeria’s abundant solar resources and growing interest in blockchain infrastructure development.

---

# 3.0 Project Design

## Description

The building structure will be constructed from the ground up, designed to accommodate the batteries module, office, water filtration and cooling system, and the HVAC system. It will include reinforced foundations, walls, and roofing to support the weight of the infrastructure and ensure durability.

## 3.1 General Infrastructure

<div style="display: flex; justify-content: center; align-items: center; text-align: center;">
  <div>
  <p >
    <figcaption><b>Figure 1:</b> Site (Top view)  </figcaption>
    <img src="{{ site.baseurl }}/assets/pilot_images/topview_new.jpg"  style="width: 90%; height: auto;">
  </p>
  </div>
</div>

<div style="display: flex; justify-content: center; align-items: center; text-align: center;">
  <div>
  <p >
    <figcaption><b>Figure 2:</b> Structural Foundation </figcaption>
    <img src="{{ site.baseurl }}/assets/pilot_images/foundation.JPG"  style="width: 90%; height: auto;">
  </p>
  </div>
</div>

<div style="display: flex; justify-content: center; align-items: center; text-align: center;">
  <div>
  <p >
    <figcaption><b>Figure 3:</b> Structural columns </figcaption>
    <img src="{{ site.baseurl }}/assets/pilot_images/columns.JPG"  style="width: 90%; height: auto;">
  </p>
  </div>
</div>

<div style="display: flex; justify-content: center; align-items: center; text-align: center;">
  <div>
  <p >
    <figcaption><b>Figure 4:</b> Overhead Slab </figcaption>
    <img src="{{ site.baseurl }}/assets/pilot_images/overhead_slab.JPG"  style="width: 90%; height: auto;">
  </p>
  </div>
</div>

## 3.2 Mining Infrastructure

### 3.2.1 Use of Bitmain Antbox / Modular Containers

The project will utilize Bitmain's ANTSPACE HK5 (Hydro Cooling Data Center), a state-of-the-art, containerized data center specifically engineered for hydro-cooled ASIC mining hardware. Each HK5 unit supports up to 210 Antminer Hydro units and is fully integrated with internal water circulation, heat exchangers, and power distribution systems.

The choice of the HK5 is based on several key advantages:

- Optimized Cooling Performance: The hydro-cooling system ensures stable miner operation in high-temperature environments such as Kano, Nigeria, where ambient temperatures can exceed 40°C. Water cooling drastically reduces heat buildup, ensuring higher miner uptime and performance consistency.

- Dust and Debris Protection: Compared to air cooling, hydro-cooling minimizes exposure of internal electronics to environmental dust, which is common in Northern Nigeria due to the Harmattan season.

- High Density, Small Footprint: The container form factor allows easy transportation and compact deployment, ideal for modular growth without large infrastructure investment.

- Pre-engineered for S21 XP Hyd Compatibility: The HK5 is designed to support the high power and cooling needs of Bitmain's latest hydro miners, ensuring seamless integration.

<div style="display: flex; justify-content: center; align-items: center; text-align: center;">
  <div>
  <p >
    <figcaption><b>Figure 5:</b> ANTSPACE HW5 From Bitmain </figcaption>
    <img src="{{ site.baseurl }}/assets/pilot_images/container.jpg"  style="width: 90%; height: auto;">
  </p>
  </div>
</div>

### 3.2.2 ASIC Miner Selection

The selected ASIC model is the Bitmain Antminer S21 XP Hyd, a high-efficiency, hydro-cooled miner capable of delivering up to 473 TH/s with an energy efficiency of 12 J/TH, making it one of the most cost-efficient options available.

Due to capital constraints and a strategic decision to scale operations sustainably, the initial deployment will consist of:

- 1 x ANTSPACE HK5 container

- Up to 30 x Antminer S21 XP Hyd units (14.28% of HK5 full capacity)

This phased approach allows the business to manage initial capital expenditure while preparing the infrastructure for future expansion. The remaining capacity within the container will be populated in future procurement cycles using returns generated from the initial deployment.

**Why S21 XP Hyd?**

- Best-in-class energy efficiency lowers operational costs and increases BTC mined per watt.

- Hydro cooling compatibility with the HK5 eliminates additional cooling infrastructure costs.

- Long-term ROI: High hash rate-to-power ratio extends the economic lifespan of each unit, even during periods of low Bitcoin price or high difficulty.

<div style="display: flex; justify-content: center; align-items: center; text-align: center;">
  <div>
  <p >
    <figcaption><b>Figure 6:</b> Miner S21 XP Hyd </figcaption>
    <img src="{{ site.baseurl }}/assets/pilot_images/s21.jpg"  style="width: 90%; height: auto;">
  </p>
  </div>
</div>

### 3.2.3 Deployment Scale and Strategy

The deployment will begin with one modular unit, designed to operate semi-autonomously with minimal on-site staff. As profits are realized, additional S21 XP Hyd units will be procured to fill the HK5 to full capacity. Following that, further expansion to multiple containers is anticipated in 12–18 month cycles based on performance and reinvestment metrics.

**Each container will be:**

- Installed on pre-prepared concrete pads with integrated utility access

- Connected to a dedicated solar PV array and battery storage system

- Managed via centralized remote monitoring software provided by Bitmain or third-party integrators

## 3.3 Cooling System

The cooling system is a critical aspect of any high-density ASIC mining deployment, especially when targeting performance optimization, energy efficiency, and equipment longevity. For this project, the Bitmain ANTSPACE HK5 container solution has been selected due to its integrated hydro-cooling architecture, which supports the Antminer S21 XP Hydro series.

### 3.3.1 Hydro-Cooling Loop Design

The ANTSPACE HK5 employs a closed-loop water cooling system, which circulates coolant (typically purified water or a water-glycol mixture) through internal piping that interfaces directly with the miners' cold plates. Heat is absorbed by the water and transported outside the container to a dry cooler (radiator system), where it is dissipated into the air before returning to the container for re-circulation.

- This configuration offers several benefits over traditional air-cooled or immersion-cooled solutions:

- Significantly higher thermal efficiency, allowing for higher hash rate operation with lower failure rates.

- Fully enclosed and isolated system, reducing dust ingress, corrosion, and noise.

- Modular design, enabling outdoor deployment in remote or industrial zones.

Each HK5 container supports approximately 210–250 kW of mining capacity, and the internal loop is designed to minimize fluid loss, although regular inspection and topping up are required.

### 3.3.2 Water Supply and Quality Management

Although the hydro-loop is sealed, it requires an initial charging volume of purified water, as well as periodic top-ups to compensate for evaporative losses or system maintenance. Importantly, Bitmain and other hardware manufacturers explicitly recommend the use of deionized or distilled water to prevent:

- **Scale buildup** in heat exchangers (from calcium or magnesium)

- **Electrochemical corrosion** from high ionic content

- **Biofouling**, which can block pipes and reduce cooling efficiency

Given that the proposed deployment site is in Kano, Nigeria — a region where groundwater (borehole) sources often exhibit high mineral content and microbiological load — direct use of untreated water is not viable. Instead, an on-site Reverse Osmosis (RO) treatment system is proposed.

### 3.3.3 Water Treatment System Design

The proposed treatment train is as follows:

1. **Borehole Intake** – Provides raw water input.

2. **Sediment Filtration (5–20 micron)** – Removes sand and suspended solids.

3. **Activated Carbon Filtration** – Removes chlorine, organic matter, and odors.

4. **Antiscalant or Softener** – Prevents mineral scaling of RO membrane.

5. **Reverse Osmosis System** – Produces purified water with low conductivity and low TDS (<10 ppm).

6. **UV Sterilization or Ozone Disinfection** – Optional microbial control.

7. **Storage Tank (5,000–10,000 liters)** – To buffer treated water for system fill-ups and maintenance.

8. **Delivery Pump** – Feeds treated water into the HK5 container as needed.

The RO system need not be continuous-flow and can be designed to produce 1,000–2,000 liters/day, sufficient to meet the initial fill (~5,000–8,000 L per container) and weekly top-ups (~50–100 L per container).

### 3.3.4 Maintenance and Monitoring

To ensure consistent cooling performance and system health:

- Water conductivity, temperature, and flow rate will be monitored continuously via sensors.

- Filter cartridges (pre-RO) will be replaced monthly or as required.

- The dry cooler will be maintained periodically to ensure unrestricted airflow and fan performance.

- Water quality testing will be performed quarterly to validate purification system output.

This integrated approach to hydro-cooling and water purification is designed to ensure optimal ASIC performance, minimal downtime, and long-term operational sustainability — all while maintaining a compact environmental footprint suitable for deployment in northern Nigeria.

<div style="display: flex; justify-content: center; align-items: center; text-align: center;">
  <div>
  <p >
    <figcaption><b>Figure 7:</b> Water treatment and testing laboratory  </figcaption>
    <img src="{{ site.baseurl }}/assets/pilot_images/lab.JPG"  style="width: 90%; height: auto;">
  </p>
</div>
</div>

## 3.4 Power System

A robust and efficient power infrastructure is paramount for the continuous operation of high-density ASIC miners. Leveraging Kano's high solar irradiance, this project adopts a hybrid energy solution combining solar photovoltaic (PV) generation, battery energy storage systems (BESS), uninterruptible power supply (UPS), and a diesel generator for backup.

### 3.4.1 Load Profile and Total Power Demand

The deployment includes 30 Antminer S21 XP Hyd units, each consuming approximately 5.7 kW under optimal hydro-cooled conditions.

Total ASIC Power Load:

```
30 units × 5.7 kW = 171 kW
```

Including Cooling Systems, RO Units, and Safety Margin (~10%):

```
Total Continuous Load ≈ 188 kW
```

### 3.4.2 Solar Farm Design

<div style="display: flex; justify-content: center; align-items: center; gap: 10px; text-align: center;">
  <div>
  <p >
    <figcaption><b>Figure 8:</b> Effective layout of 600 monocrystalline solar panels <strong>(drawn to scale)</strong></figcaption>
    <img src="{{ site.baseurl }}/assets/pilot_images/solar_panels.JPG"  style="width: 90%; height: auto;">
  </p>
  </div>
</div>

Kano benefits from an average of 7.0 Peak Sun Hours (PSH) per day, making it ideal for solar energy generation.

**Daily Energy Requirement:**

```
188 kW × 24 hours = 4,512 kWh/day
```

**Solar Generation Target (Daylight Hours):**

only 60% of the energy will be sourced from solar energy for starters, while the rest will be procured from KEDKO. thus, to meet the daily demand during daylight:

```
(4,512 kWh x 60/100) ÷ 7.0 PSH ≈ 386.7 kW (DC Capacity)
```

**Panel Rating:** 610 W (monocrystalline)

**Number of Panels Required:**

```
386.7 KW ÷ 0.610 KW/panel ≈ 635 panels
```

**Land Requirement:**

Assuming a **5x10 grid** of panels each with the dimensions of **width 1.2m, length = 2.4m** per panel angled at 25 degrees from the horizontal, and a grid spacing of **2.2m** as seen in figure 9 Below:

<div style="display: flex; justify-content: center; align-items: center; gap: 10px; text-align: center;">
  <div>
  <p >
    <figcaption><b>Figure 9:</b> Solar Grid Illustration (to scale)</figcaption>
    <img src="{{ site.baseurl }}/assets/pilot_images/solar_grid.JPG"  style="width: 90%; height: auto;">
  </p>
  </div>
</div>

```
grid length (width spacing) = (2.4m x 10 panels) + 1.1 = 25.1m
grid width (width spacing) = (1.2m x 5 panels x cos(25)) + 1.1 = 6.54m
```

```
Area of grid (50 panels)= total grid length x total grid width ≈ 164.1 m²
```

```
total required area = Area of grid x (635 panels / 50 panels per grid)
total required area = 164.1 m² x (635/50) ≈  2,084 m² (~0.5 acres)
```

### 3.4.3 Batteries

**Energy storage Requirement:**

- The total energy required continuously is 4,512 Kwh, but since only 60% will be provided by solar panels as mentioned earlier, only 2,707.2 Kwh need to be evaluated.
- The energy produced during the 7 hours of peak solar hours daily will be used up directly and does not require storage, thus energy to be stored is:

```
Total Energy stored =  total solar energy -  (total power required × 7 PSH)
Total Energy stored =  2,707.2 -  (188 kW × 7 PSH) = 1,391.2 kWh
```

**Including 10% Buffer for Inefficiencies during charge/discharge cycles:**

```
1,391.2 kWh / 0.9 = 1,545.8 kWh (~1.55 MWh)
```

**Battery Selection:**

<div style="display: flex; justify-content: center; align-items: center; gap: 10px; text-align: center;">
  <div>
  <p >
    <figcaption><b>Figure 10:</b> 215 Kwh Battery module</figcaption>
    <img src="{{ site.baseurl }}/assets/pilot_images/battery.JPG"  style="width: 90%; height: auto;">
  </p>
  </div>
</div>

- **Type:** Lithium Iron Phosphate (LiFePO₄)

- **Advantages:** High cycle life, thermal stability, safety

  **Battery Module Configuration:**

  **Module Capacity:** 215 kWh

  **Number of Modules Required:**

  ```
  1,545.8 kWh ÷ 215 kWh/module ≈ 7.18 → 8 modules
  ```

  **System Layout:**

  - Modular racks with integrated Battery Management Systems (BMS)

### 3.4.4 Inverters

- The inverter rating should be above the total Continuous Load by a small margin.
- For easier integration down the line, the system will have multiple inverters connected and working in parallel
  **Inverter starting Selection:**

```
- 1 Inverter rated for continuous  150 kW, 3-phase, 400 V output
- 1 Inverter rated for continuous 50 kW, 3-phase, 400 V output
```

### 3.4.5 Diesel Generator Backup

**Apparent Power Required (Kva):**

```
Apparent Power = (power required x generator Redundancy Factor) / generator power Factor;
Apparent Power = (188 x 1.15) / 0.9 ≈ 240.2 Kva
```

- **Configuration:** 1 × 250 kVA diesel generators (N+1 redundancy)

- **Features:**

  - Auto-start capability
  - Fuel-efficient operation

- **Usage Scenario:** Extended cloudy periods, maintenance downtime, or emergency situations

### 3.4.6 Transformers

**Step-Up Transformer:** 400V to 11kV for grid integration
Facilitates energy export and grid support

- Assuming a typical power factor of 0.9 for mining equipment
- Targeting 80% of full capacity for continuous loads

```
Apparent Power (kVA)  =  Real Power (kW) / (Power Factor (PF) x (working Capacity Percentage / 100))
Apparent Power (kVA)  =  188 / (0.9 x (80 / 100))
Apparent Power (kVA)  = ~261 KVA
```

**Transformer Selection:**

- **Capacity:** 300 kVA

- **Primary Voltage:** 11 kV

- **Secondary Voltage:** 400 V (3-phase)

### 3.4.7 Visual Diagrams and Layout

To aid in visualization, the following schematic illustrates the integrated power system:

<div style="display: flex; justify-content: center; align-items: center; text-align: center;">
  <div>
  <p >
    <figcaption><b>Figure 11:</b> Power transition Structure </figcaption>
    <img src="{{ site.baseurl }}/assets/pilot_images/power_diagram.jpg"  style="width: 90%; height: auto;">
  </p>
</div>
</div>

This diagram showcases the flow from solar panels through inverters, battery storage, and load distribution, including backup systems.

**Summary of Power System Specifications**

| Component                 | Specification                                        |
| ------------------------- | ---------------------------------------------------- |
| **ASIC Load**             | 171 kW                                               |
| **Total Load w/ Cooling** | ~188 kW                                              |
| **Solar Capacity**        | ~387 kW (DC Capacity), ~635 panels                   |
| **Battery Storage**:      | ~1.55 MWh LiFePO₄ (8 modules of 215 kWh)             |
| **Inverters**             | 200 kW, 3-phase, 400 V output                        |
| **Generator Backup**      | 1 × 250 kVA Diesel (N+1 Redundancy)                  |
| **Transformer**           | Isolation (off-grid) / Step-Up 400V→11kV (grid-tied) |

## 3.5 Network setup

<div style="display: flex; justify-content: center; align-items: center; text-align: center;">
  <div>
  <p >
    <figcaption><b>Figure 12:</b> Dual-WAN Network Redundancy Structure  </figcaption>
    <img src="{{ site.baseurl }}/assets/pilot_images/network_setup.jpg"  style="width: 90%; height: 800px;">
  </p>
</div>
</div>

1. **Starlink Setup**

   - Starlink Dish (Outdoors)

   - Starlink Router (bridged mode or via Ethernet Adapter)

   - Supplies internet via Ethernet

2. **Local ISP Setup**

   - Fiber, LTE, or microwave modem/router

   - Also outputs via Ethernet

3. **Dual-WAN Router (Main Brain)**
   Use a router that supports automatic failover + load balancing. Good examples:

   - Ubiquiti EdgeRouter

   - TP-Link ER605

   - MikroTik hEX S

   - Peplink Balance

   **Functions:**

   - Monitors both WANs

   - If local ISP fails → automatically routes traffic to Starlink

   - Can balance traffic across both if desired (non-mining traffic, updates, etc.)

4. **Switch & LAN**
   - Gigabit Ethernet switch
   - Connects miners, NMS (network management system), local control PC

**Optional: Firewall / VPN**

- For secure remote access, use:

- A small firewall appliance (like pfSense or OPNsense)

- VPN tunnel for remote monitoring

**Benefits of This Structure**

- High Uptime: One link goes down, the other takes over

- Performance: Can load-balance software updates or background tasks to avoid blocking mining traffic

- Scalability: Easily extendable as you grow from 100 to 300+ miners

---

# 4.0 Financial Analysis

## 4.1 Capital Expenditure (CAPEX)

This section details the initial capital investment required to deploy the ASIC mining project. Costs are estimated based on standard international and Nigerian market prices as of 2024–2025, including logistics and engineering.

### 4.1.1 Site Preparation and Construction

<div style="display: flex; justify-content: center; align-items: center; text-align: center;">
  <div>
  <p >
    <figcaption><b>Figure 13:</b> Construction Breakdown by Phase (overview)</figcaption>
    <img src="{{ site.baseurl }}/assets/pilot_images/construction_pie_chart.jpg"  style="width: 80%; height: auto;">
  </p>
  </div>
</div>

<table  cellspacing="0" cellpadding="5">
<caption style=' text-align: center; margin-bottom: 5px; margin-top: 20px;'> <b>Table 1:</b> Construction Breakdown by Phase (detailed)</caption>
    <tr>
        <th>Sub-Structure (₦9,897,800)</th>
        <th>Super-Structure (₦28,281,000)</th>
        <th>Blockwork (₦9,188,500)</th>
        <th>Electrical (₦4,652,500)</th>
        <th>Finishing (₦10,889,500)</th>
    </tr>
    <tr>
        <td>Site Clearing</td>
        <td>Formwork to Columns and Beams</td>
        <td>Block to Headcourse</td>
        <td>Electrical Piping and Wiring</td>
        <td>Plastering of Walls Both Faces</td>
    </tr>
    <tr>
        <td>Excavation of Foundation</td>
        <td>Casting to Columns and Beams</td>
        <td>&nbsp;</td>
        <td>Fixtures and Fittings</td>
        <td>Dressing of Doors and Windows</td>
    </tr>
    <tr>
        <td>Starter: Columns and Base</td>
        <td>Formwork to Headcourse</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>Epoxy Flooring</td>
    </tr>
    <tr>
        <td>Casting of Foundation</td>
        <td>Rebar to Headcourse</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>Site Clearing to Handover</td>
    </tr>
    <tr>
        <td>Blockwork Filled Solid</td>
        <td>Rebar to Column and Beams</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
    </tr>
    <tr>
        <td>Casting of Starter Column</td>
        <td>Casting of Headcourse</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
    </tr>
    <tr>
        <td>Hardcore Filling and Compaction</td>
        <td>Formwork to Suspended Roof</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
    </tr>
    <tr>
        <td>Damp Proof Course (DPC)</td>
        <td>Rebar to Suspended Roof</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
    </tr>
    <tr>
        <td></td>
        <td>Casting of Suspended Roof</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
    </tr>
</table>

- **Subtotal:**
  **≈ ₦62,909,300**

* for more details please view **Appendix 1** at the end

### 4.1.2 Office and lab equipments

<table>
<caption style=' text-align: center; margin-bottom: 5px; margin-top: 20px;'> <b>Table 3:</b> Furniture and Utility Items</caption>
    <tr>
        <th>Location</th>
        <th>Item</th>
        <th>Qty</th>
        <th>Unit Price (₦)</th>
        <th>Amount (₦)</th>
    </tr>
    <tr>
        <td rowspan="5">Office</td>
        <td>Office Chair</td>
        <td>3</td>
        <td>65,000</td>
        <td>195,000</td>
    </tr>
    <tr>
        <td>Office Table</td>
        <td>2</td>
        <td>120,000</td>
        <td>240,000</td>
    </tr>
    <tr>
        <td>Cabinet</td>
        <td>1</td>
        <td>150,000</td>
        <td>150,000</td>
    </tr>
    <tr>
        <td>Seating Area</td>
        <td>1</td>
        <td>150,000</td>
        <td>150,000</td>
    </tr>
    <tr>
        <td>Computer</td>
        <td>2</td>
        <td>400,000</td>
        <td>800,000</td>
    </tr>
    <tr>
        <td rowspan="3">Lab</td>
        <td>Chemical Equipments</td>
        <td>1</td>
        <td>500,000</td>
        <td>500,000</td>
    </tr>
    <tr>
        <td>Laboratory Workstation</td>
        <td>1</td>
        <td>850,000</td>
        <td>850,000</td>
    </tr>
    <tr>
        <td>Misc</td>
        <td>-</td>
        <td>-</td>
        <td>200,000</td>
    </tr>
    <tr>
        <td colspan="4" style="text-align:center;"><b>Total</b></td>
        <td><b>3,085,000</b></td>
    </tr>
</table>

### 4.1.3 Bitmain Containers and ASICs

- **ANTSPACE HW5 Hydro Cooling Container**

  - Each container holds up to 210 miners (the project aims to start with 30 units, allowing future expansion).

  - Cost Estimate: ~**＄84,000 USD**(container only)

- **Antminer S21 XP Hyd (473 TH/s @ 5676W)**

  - **Unit Cost (bulk rate):** ~10,170 USD per unit × 30 = **＄305,100**

  - **Power Draw:** ~170.28 kW total for 30 units

  - **Crypto algorithmcoins:** SHA256 BTC/BCH/BSV

  - Comes with hydro cooling blocks integrated

- **Subtotal:**
  ≈ **＄389,100 USD**

### 4.1.4 Batteries, Solar Panels, Inverters, Transformers, and Generator

**Batteries:**

- **Industrial-grade LiFePO₄ (215 kWh/module)** with integrated BMS and rack housing
- **Market Rate** : ＄16,500 USD per battery
- Subtotal: 8 batteries × 16,500 USD ≈ **132,000 USD**

**Solar Panels:**

- 610W panels → need ~635 units

- Price per panel (uninstalled): ~51.24 USD
- with racking and installation estimated at 10%, price (installed): ＄57

- Subtotal: **＄36,195 USD**

**Inverters:**

- 1 x ATESS HPS Series, 150Kw Inverter Commercial-grade,hybrid inverter at 20600
- 1 x ATESS HPS Series, 50Kw Inverter Commercial-grade,hybrid inverter at 8600

- Subtotal: **＄29,200 USD**

**Transformers:**

- 1 x 11kv 3-phase transformer
- Subtotal: **＄4,950**

**Generator:**

- 1 × 250 kVA diesel generators (N+1 redundancy)

**TOTAL: ＄215,345 USD**

- Subtotal: **＄13,000**

### 4.1.4 HVAC cooling

<table>
<caption style=' text-align: center; margin-bottom: 5px; margin-top: 20px;'> <b>Table 8:</b> Cost breakdown for the HVAC system</caption>
    <tr>
        <th>Item</th>
        <th>Model</th>
        <th>Qty</th>
        <th>Description</th>
        <th>Capacity (Kw)</th>
        <th>Unit Price (＄)</th>
        <th>Total Price (＄)</th>
    </tr>
    <tr>
        <td>&nbsp;</td>
        <td><b>VRF Outdoor Units</b></td>
        <td>&nbsp;</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>1</td>
        <td>4TVVT192DD07CAA</td>
        <td>1</td>
        <td>Trane/20HP TVR 7G Modular Cooling Only</td>
        <td>56.00</td>
        <td>7,011.49</td>
        <td>7,011.49</td>
    </tr>
        <tr>
        <td>&nbsp;</td>
        <td><b>VRF Indoor Units</b></td>
        <td>&nbsp;</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>2</td>
        <td>4TVBD009AB07RAA </td>
        <td>1</td>
        <td>Trane TVR 7G Compact Four-way Cassette Unit</td>
        <td>2.80</td>
        <td>395.78</td>
        <td>395.78</td>
    </tr>
    <tr>
        <td>3</td>
        <td>4TVCD038AB07RAA </td>
        <td>1</td>
        <td>Trane TVR 7G Four-way Cassette Unit</td>
        <td>11.20</td>
        <td>704.10</td>
        <td>704.10</td>
    </tr>
    <tr>
        <td>4</td>
        <td>4TVCD055AB07RAA</td>
        <td>3</td>
        <td>Trane TVR 7G Four-way Cassette Unit</td>
        <td>16.00</td>
        <td>880.91</td>
        <td>2,642.74</td>
    </tr>
        <tr>
        <td>&nbsp;</td>
        <td><b>Branch Distributors & Accessories</b></td>
        <td>&nbsp;</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>5</td>
        <td>4TV0RDK01CA007G</td>
        <td>1</td>
        <td>Trane/IDU Y Joint, kW < 22.4</td>
        <td>-</td>
        <td>34.69</td>
        <td>34.69</td>
    </tr>
    <tr>
        <td>6</td>
        <td>4TV0RDK03CA007G</td>
        <td>3</td>
        <td>Trane/IDU Y Joint, 33≤ KW < 104</td>
        <td>-</td>
        <td>69.96</td>
        <td>209.87</td>
    </tr>
    <tr>
        <td colspan="6" style="text-align:right;"><b>Total Price (USD)</b></td>
        <td>＄10,998.67</td>
    </tr>
    <tr>
        <td colspan="6" style="text-align:right;"><b>Total Price (NGN)</b></td>
        <td>₦17,597,866.00</td>
    </tr>
    <tr>
        <td colspan="6" style="text-align:right;"><b>VAT (7.5%)</b></td>
        <td>₦1,319,839.95</td>
    </tr>
    <tr>
        <td colspan="6" style="text-align:right;"><b>Grand Total</b></td>
        <td>₦18,917,705.95</td>
    </tr>

</table>

### 4.1.5 Liquid Cooling System Setup for miners

<table>
<caption style=' text-align: center; margin-bottom: 5px; margin-top: 20px;'> <b>Table 6:</b> Stainless steel tank construction</caption>
    <thead>
        <tr>
            <th>Component</th>
            <th>Quantity</th>
            <th>Unit Price (₦)</th>
            <th>Total (₦)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>120m 1 inch PVC pipe</td>
            <td>50</td>
            <td>2,200</td>
            <td>110,000</td>
        </tr>
        <tr>
            <td>40m 1/2 inch PVC pipe</td>
            <td>15</td>
            <td>1,800</td>
            <td>27,000</td>
        </tr>
        <tr>
            <td>Stainless steel 2mm</td>
            <td>10</td>
            <td>150,000</td>
            <td>1,500,000</td>
        </tr>
        <tr>
            <td>Hollow Quad Pipe (Stainless 50 X 20 X 2 mm)</td>
            <td>4</td>
            <td>50,000</td>
            <td>200,000</td>
        </tr>
        <tr>
            <td>Hollow Circular Pipe (Stainless)</td>
            <td>4</td>
            <td>25,000</td>
            <td>100,000</td>
        </tr>
        <tr>
            <td>Labour + fixtures</td>
            <td>1</td>
            <td>500,000</td>
            <td>500,000</td>
        </tr>
        <tr>
            <td colspan="3" style="text-align:end;"><strong>Total</strong></td>
            <td><strong>2,437,000</strong></td>
        </tr>
    </tbody>
</table>

<div style="display: flex; justify-content: center; align-items: center; text-align: center;">
  <div>
  <p >
    <figcaption><b>Figure 14:</b> Stainless steel tanks</figcaption>
    <img src="{{ site.baseurl }}/assets/pilot_images/tanks_final_v2.jpg"  style="width: 80%; height: auto;">
  </p>
  </div>
</div>

- water from the ground tends to be contaminated with all kind of natural salts, molecules, and elements. To acquire neutral water, the water will pass through a reverse osmosis process with the help of the purification machine shown in **figure 15** below. The price varies at about **₦6,000,000**.

<div style="display: flex; justify-content: center; align-items: center; gap: 10px; text-align: center;">
  <div>
  <p >
    <figcaption><b>Figure 15:</b> Reverse Osmosis Machinery</figcaption>
    <img src="{{ site.baseurl }}/assets/pilot_images/Reverse-Osmosis-System.jpg"  style="width: 90%; height: auto;">
  </p>
  </div>
</div>

### 4.1.6 Labor and Engineering Fees

- Electrical, mechanical, and civil contractors
- Solar + electrical system design and commissioning
- Technical documentation, inspection, and testing

- **Estimated Total:**
  - 5,000 – 10,000 USD

### 4.1.7 Logistics and Import Duties

- International shipping of container, ASICs, solar panels

- Port clearance, inland transport to Kano

- Customs duties, taxes, agent fees

- **Customs Duty (Nigeria):**

  - Varies ~5–20% depending on equipment

  - Budget margin: ~7.5% of equipment cost

- **Estimate:**
  - ＄29,183 USD

### 4.1.8 Capex Summary

<p class="projection-chart-tittle"><b>Figure 16:</b> Capital Expenditure Breakdown</p>
<div class="sankey-container">
    <div id="sankey_chart"></div>
</div>



<table >
<caption style=' text-align: center; margin-bottom: 5px; margin-top: 20px;'> <b>Table 12:</b> CAPEX Budget summary overview</caption>
    <tr>
        <th rowspan="2">Section</th>
        <th>Cost</th>
        <th></th>
    </tr>
    <tr>
        <th>USD (＄)</th>
        <th>NGN (₦)</th>
    </tr>
    <tr>
        <td>Site Preparation and Construction</td>
        <td>-</td>
        <td>62,909,300</td>
    </tr>
    <tr>
        <td>Office and lab equipments</td>
        <td>-</td>
        <td>3,085,000</td>
    </tr>
    <tr>
        <td>Bitmain Containers and ASICs</td>
        <td>389,100</td>
        <td>-</td>
    </tr>
    <tr>
        <td>Batteries, Solar Panels, Inverters, Transformers</td>
        <td>215,345</td>
        <td>-</td>
    </tr>
    <tr>
        <td>HVAC cooling</td>
        <td>-</td>
        <td>18,917,500</td>
    </tr>
    <tr>
        <td>Liquid Cooling System</td>
        <td>-</td>
        <td>8,437,000</td>
    </tr>
    <tr>
        <td>Labor and Engineering Fees</td>
        <td>7,500</td>
        <td>-</td>
    </tr>
        <tr>
        <td>Logistics and Import Duties</td>
        <td>29,183</td>
        <td>-</td>
    </tr>
    <tr>
      <td colspan="1" style="text-align:center;"><strong>Total</strong></td>
      <td><strong>641,128</strong></td>
      <td><strong>93,348,800</strong></td>
    </tr>
</table>



**At 1,600 ₦ /USD, the GRAND TOTAL: ＄699,471**



## 4.2 Operational Expenditure (OPEX)

### 4.2.1 Electicity Cost

Total ASIC Power Load:

```
30 units × 5,676 W = 170.28 kW
```

Including Cooling Systems, RO Units, and Safety Margin (~10%):

```
Total Continuous Load ≈ 187.308 kW
```

**Yearly Energy Requirement:**

```
187.308 kW × 24 hours x 30 days x 12 months = 1,618.34 MWh/year
```

**Yearly Energy Cost:**
only 60% of the energy will be sourced from solar energy for starters, while the rest will be procured from KEDKO. thus:

```
1,618.34 MWh x 224,000 ₦/MWh x 0.4 ≈ ₦145,003,364
```

At the rate of 1600 ₦/USD, the total is:

```
₦145,003,364 / 1,600 ₦/USD ≈ ＄90,627 USD
```

### 4.2.2 Maintenance of Miners & Cooling

**ASINC maintainance:** ~ 150–200 USD /year per ASIC miner

**For 30 miners:**

```
＄200 × 30  = ＄6,000/year
```

**Cooling system (pumps, RO filters):** ~2–3% of equipment CAPEX annually
**cooling capex at 11,823:**

```
 ＄11,823 x 2% = ＄236.5/year
```

### 4.2.3 Staff Salaries

<table >
<caption style=' text-align: center; margin-bottom: 5px; margin-top: 20px;'> <b>Table 10:</b> Specialized Employee's projected salaries for the duration of 6 months</caption>
    <thead>
        <tr>
            <th>Employee Role</th>
            <th>Monthly Salary (₦)</th>
            <th>Number of Workers</th>
            <th>Total Yearly Salary (₦)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Manager</td>
            <td>450,000</td>
            <td>1</td>
            <td>5,400,000</td>
        </tr>
        <tr>
            <td>Mechanical Engineer (Fabrication)</td>
            <td>300,000</td>
            <td>1</td>
            <td>3,600,000</td>
        </tr>
        <tr>
            <td>Electrician</td>
            <td>300,000</td>
            <td>1</td>
            <td>3,600,000</td>
        </tr>
        <tr>
            <td>Technicians</td>
            <td>120,000</td>
            <td>2</td>
            <td>2,880,000</td>
        </tr>
        <tr>
            <td>Security</td>
            <td>50,000</td>
            <td>4</td>
            <td>2,400,000</td>
        </tr>
        <tr>
            <td>Lab Technician</td>
            <td>150,000</td>
            <td>1</td>
            <td>1,800,000</td>
        </tr>
        <tr>
            <td>Casual workers</td>
            <td>40,000</td>
            <td>3</td>
            <td>1,440,000</td>
        </tr>
        <tr>
            <th colspan="3" style="text-align:right;">Total</th>
            <th>21,120,000</th>
        </tr>
    </tbody>
</table>

At the rate of 1600 ₦/USD, the total is:

```
₦21,120,000 / 1,600 ₦/USD ≈ ＄13,200 USD
```

### 4.2.4 Internet & Network Services

**Starlink:** ＄43/month (as of Nigeria rates)

**Local ISP backup:** 20–30 USD/month

**Router maintenance:** ＄100/year

**Annual:** ~＄1,000/year

### 4.2.5 Insurance & Security

**Equipment insurance (Include fire/theft/policy costs):** 1–2% of CAPEX

```
Fixed Assets = Total Capex - Labor and Engineering Fees  - Logistics and Import Duties
Fixed Assets = ＄699,471 - ＄7,500 - ＄29,183 = ＄662,788

Insurance = ＄662,788 x (2/100) = ＄13,256
```

### 4.2.6 Spare Parts & Consumables

**Budget (Fans, cables, hoses, filters)**: 2–3% of mining equipment cost/year

**Est:** ＄6,102/year

### 4.2.7 OPEX Summary

<table >
<caption style=' text-align: center; margin-bottom: 5px; margin-top: 20px;'> <b>Table 12:</b> OPEX Budget summary overview</caption>
    <tr>
        <th rowspan="1">Section</th>
        <th>Anual Cost USD (＄)</th>
    </tr>
    <tr>
        <td>Maintenance & Spearparts</td>
        <td>12,339</td>
    </tr>
    <tr>
        <td>Electricity (at 60% solar)</td>
        <td>90,627</td>
    </tr>
    <tr>
        <td>Fixed Costs(Overheads and Bills)</td>
        <td>14,200</td>
    </tr>
    <tr>
        <td>Insurance</td>
        <td>13,256</td>
    </tr>
    <tr>
      <td colspan="1" style="text-align:center;"><strong>Total</strong></td>
      <td><strong>130,422</strong></td>
    </tr>
</table>


---

# 5.0 Profit Projections

## 5.1 Profit & ROI

The folling calculations are Based Purely on the Initial setup and does not account any reinvestemnt strategies.


The total expected revenue generated from Bitcoin mining is directly related to the contributed computational power, measured in hashrate — the number of cryptographic guesses a miner can make per second. In Bitcoin mining, the probability of successfully mining a block (and earning a reward) is proportional to a miner’s hashrate relative to the total network hashrate.

The **Reward Per Hash** represents the expected revenue earned per individual hash attempt. It is typically calculated by dividing the total block reward (in monetary terms, including transaction fees) by the expected number of hashes required to successfully find a block — a value determined by the current mining difficulty. This metric provides a probabilistic estimate of how much revenue can be earned per unit of computational effort.



Figure 17 below illustrates the revenue obtained from a Bitmain Antminer **S21 XP Hydro**, which operates at a rated hashrate of 473 TH/s, over the past six months.


<p class="projection-chart-tittle"><b>Figure 17:</b> Bitmain Antminer S21 XP Hydro Miner Revenue with a hashrate of 473 TH/S</p>
<div class="chart-container">
    <canvas id="hashRate"></canvas>
</div>



Using the average revenue for the past 6 months we can calculate an approximate Reward Per Hash:
- If a miner earned 25.525 USD and the BTC price is 104,200 USD/BTC, then the miner earned:
```
BTC Revenue = 25.525 USD ÷ 104,200 USD/BTC ≈ 0.000245 BTC
```
- Since that revenue was generated using 473 TH/s over one day (86,400 seconds), then:
```
473 TH/s = 473 × 10¹² hashes per second
Total Hashes = 473 × 10¹² × 86,400 = 4.08672 × 10¹⁹ hashes
```
- The BTC and USD per hash is:
```
Reward Per Hash (in BTC) = 0.000245 BTC ÷ 4.08672 × 10¹⁹ ≈ 6.0 × 10⁻²⁴ BTC/hash
Reward Per Hash (in USD) ≈ 6.0 × 10⁻²⁴ × 104,200 ≈ 6.25 × 10⁻²⁰ USD/hash
```
Yearly revenue for 30 miners:
```
revenue = Number of miners x Reward Per Hash (in USD) x Total Hashes per day x 365 days
revenue = 30 x 6.25 × 10⁻²⁰ x 4.08672 × 10¹⁹ x 365
revenue = 275,670 USD
```



**Annual Profit:** 
```
= Revenue - Annual Operating Cost
= 275,670 - 130,422
= ＄145,248 USD
```


## 5.2 Reinvestment strategies

**The following projections for the reinvestment strategy** were calculated using the previously established starting point, along with the following assumptions:

- The Bitcoin price is held constant at its current value throughout the 3-year simulation.

- Dividend payouts are fixed at **15%** during the reinvestment period.

- The reinvestment period spans the **first 11 months** of the simulation.

- The reinvestment strategy prioritizes **energy efficiency**, specifically by increasing the share of solar-generated power from the initial **60%**.

The resulting projections are outlined below:
<div class="mt-5" id="results">

<div class="row">
    <div  class="col-md-6">
        <div class="card mb-3">
            <div class="card-body d-flex justify-content-between align-items-center p-2">
                <strong class="fw-bold text-success">Total CAPEX:</strong>
                <span id="breakEvenText" class="text-secondary">699,471</span>
            </div>
        </div>
        <div class="card mb-3">
            <div class="card-body d-flex justify-content-between align-items-center p-2">
                <strong class="fw-bold text-success">Net Profit:</strong>
                <span id="breakEvenText" class="text-secondary">478,845</span>
            </div>
        </div>
        <div class="card mb-3">
            <div class="card-body d-flex justify-content-between align-items-center p-2">
                <strong class="fw-bold text-success">OPEX (avg):</strong>
                <span id="breakEvenText" class="text-secondary">5,911</span>
            </div>
        </div>
        <div class="card mb-3">
            <div class="card-body d-flex justify-content-between align-items-center p-2">
                <strong class="fw-bold text-success">Final Solar Load Percentile:</strong>
                <span id="breakEvenText" class="text-secondary">93.0%</span>
            </div>
        </div>
    </div>
    <div class="col-md-6">
        <div class="card mb-3">
            <div class="card-body d-flex justify-content-between align-items-center p-2">
                <strong class="fw-bold text-success">Asset Evaluation (year 3):</strong>
                <span id="breakEvenText" class="text-secondary">690,390</span>
            </div>
        </div>
        <div class="card mb-3">
            <div class="card-body d-flex justify-content-between align-items-center p-2">
                <strong class="fw-bold text-success">Monthly Profit (avg):</strong>
                <span id="breakEvenText" class="text-secondary">13,301</span>
            </div>
        </div>
        <div class="card mb-3">
            <div class="card-body d-flex justify-content-between align-items-center p-2">
                <strong class="fw-bold text-success">ROI:</strong>
                <span id="breakEvenText" class="text-secondary">68.5%</span>
            </div>
        </div>
    </div>
</div>

<hr style="height: 2px; background-color: rgb(15, 15, 15); border: none; width: 50%; margin: 15px auto;">

<p class="projection-chart-tittle"><b>Figure 18:</b> Average OPEX Distribution</p>
<div class="chart-container">
    <canvas id="opexPieChart"></canvas>
</div>

<hr style="height: 2px; background-color: rgb(15, 15, 15); border: none; width: 50%; margin: 15px auto;">

<p class="projection-chart-tittle"><b>Figure 19:</b> Financial Position</p>
<div class="chart-container">
    <canvas id="profitChart"></canvas>
</div>

<hr style="height: 2px; background-color: rgb(15, 15, 15); border: none; width: 50%; margin: 15px auto;">

<p class="projection-chart-tittle"><b>Figure 19:</b> Power Requirements</p>
<div class="chart-container">
    <canvas id="powerChart"></canvas>
</div>

<hr style="height: 2px; background-color: rgb(15, 15, 15); border: none; width: 50%; margin: 15px auto;">

<p class="projection-chart-tittle"><b>Figure 20:</b> Stored Energy</p>
<div class="chart-container">
    <canvas id="energyChart"></canvas>
</div>


</div>





# 6.0 S.W.O.T Analysis

<div class="container my-4">
  <div class="row align-items-stretch g-4">
    <div class="col-md-6">
        <div class="card h-100">
            <div class="card-header bg-success text-white fw-bold">Strengths</div>
            <div class="card-body">
                <ul class="mb-0 swot-list">
                    <li><strong>Low Operating Costs:</strong> Relatively affordable land and labor in Kano reduce overhead.</li>
                    <li><strong>Tailored Infrastructure:</strong> Purpose-built mining setup optimized for Bitmain ASICs, ensuring maximum hashrate and uptime.</li>
                    <li><strong>Scalability:</strong> Facility design can accommodate scaling with additional ASIC units.</li>
                    <li><strong>Technical Expertise:</strong> Completed study indicates deep understanding of local grid and mining tech.</li>
                    <li><strong>Potential for Off-Grid Power:</strong> Abundant sunlight supports solar/hybrid setups for long-term cost savings.</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="col-md-6">
        <div class="card h-100">
            <div class="card-header bg-warning text-white fw-bold">Weaknesses</div>
            <div class="card-body">
                <ul class="mb-0 swot-list">
                    <li><strong>High Initial Capital:</strong> ASIC hardware and cooling infrastructure are expensive.</li>
                    <li><strong>Energy Demands:</strong> ASICs require consistent high-power input; stress on grid or need for custom generation.</li>
                    <li><strong>Heat Management:</strong> Kano’s high ambient temperature challenges cooling systems.</li>
                    <li><strong>Maintenance Needs:</strong> Dust, heat, and voltage fluctuation may increase hardware failure rate.</li>
                    <li><strong>Specialized Skill Requirement:</strong> Running mining operations needs experienced operators and electricians.</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="col-md-6">
        <div class="card h-100">
            <div class="card-header bg-info text-white fw-bold">Opportunities</div>
            <div class="card-body">
                <ul class="mb-0 swot-list">
                    <li><strong>New Legal Recognition of Digital Assets (2025):</strong> Crypto now has legal backing under Nigerian law, opening doors for institutional investments, regulated growth, and investor confidence.</li>
                    <li><strong>Solar Integration:</strong> High solar irradiance supports hybrid/solar energy to reduce grid reliance.</li>
                    <li><strong>Rising Bitcoin Adoption:</strong> Potential for long-term profitability as demand for BTC increases thus driving the price.</li>
                    <li><strong>Cheap Renewable Projects:</strong> Government or private incentives for renewable power infrastructure.</li>
                    <li><strong>Data Center Expansion:</strong> Facility can evolve to offer other services (e.g., hosting, edge computing).</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="col-md-6">
        <div class="card h-100">
            <div class="card-header bg-danger text-white fw-bold">Threats</div>
            <div class="card-body">
                <ul class="mb-0 swot-list">
                    <li><strong>Unstable Grid:</strong> Frequent outages, surges, and inconsistent supply from regional power providers.</li>
                    <li><strong>Regulatory Uncertainty:</strong> Nigeria's shifting stance on crypto could impose sudden restrictions.</li>
                    <li><strong>Crypto Market Volatility:</strong> Profitability swings heavily with BTC price and network difficulty.</li>
                    <li><strong>Import Constraints:</strong> Customs delays, duties, or restrictions on ASIC hardware and cooling tech.</li>
                    <li><strong>Naira Inflation:</strong> Currency devaluation impacts cost of imported goods and ROI calculations.</li>
                    <li><strong>Market Shift to Proof-of-Stake (PoS):</strong> Increasing global momentum toward energy-efficient blockchains may reduce long-term viability of ASIC mining.</li>
                </ul>
            </div>
        </div>
    </div>
  </div>
</div>

---

# 7.0 Summary

This report presents a financially and technically grounded Bitcoin mining initiative in Kano, Nigeria. The operation combines cutting-edge ASIC technology with a well-defined path toward solar power integration. Profitability is demonstrated through detailed financial modeling, including both baseline and reinvestment projections. The strategy emphasizes resilience—addressing regulatory, environmental, and operational challenges while seizing opportunities in a maturing African digital economy.

Key highlights include:

- Initial Year Profit: ＄145,248

- 3-Year Net Profit (with reinvestment): ＄478,845

- Projected ROI: 68.5%

- Solar Power Penetration by Month 11: 93%

- Capital Expenditure (CAPEX): ＄699,471

-  Monthly Profit with a Reinvestment strategy of ＄13,301:
  - An average of ＄2,202 for ther first 11 months
  - An spike to ＄20,2007 on month 12 due to injection from unrealized investment funds
  - A monthly profit of ＄18,109 from month 13 to 36

This investment offers strategic exposure to the cryptocurrency mining industry, anchored in a forward-looking model that prioritizes renewable energy integration, infrastructure scalability, and long-term sustainability. Backed by detailed financial projections and a reinvestment strategy that accelerates profitability, the venture provides a structured pathway into the global digital asset ecosystem — with strong local development impact and clear, data-driven ROI potential.




---

# 8.0 Appendix

## Appendix 1

<table >
  <caption style='text-align: center; margin-bottom: 5px; margin-top: 20px;'> <b>Table 2:</b> Construction Breakdown by BOM</caption>
  <tr>
    <th>Description</th>
    <th></th>
    <th>Unit</th>
    <th>Qty</th>
    <th>Unit Price (₦)</th>
    <th>Total (₦)</th>
  </tr>
  <tr>
    <td rowspan="3"><b>Reinforcement</b></td>
    <td>Y16 for Columns</td><td>Units</td><td>67</td><td>22,700</td><td>1,520,900</td>
  </tr>
  <tr>
    <td>Y16 for Beams</td><td>Units</td><td>310</td><td>22,700</td><td>7,037,000</td>
  </tr>
  <tr>
    <td>Y10 for Stirmp</td><td>Units</td><td>50</td><td>8,700</td><td>435,000</td>
  </tr>
  <tr>
    <td><b>Blocks</b></td>
    <td></td><td>Units</td><td>12,522</td><td>700</td><td>8,765,400</td>
  </tr>
  <tr>
    <td><b>Reinforcements</b></td>
    <td>Y12 for Slab</td>
    <td>Units</td><td>420</td><td>12,300</td><td>5,166,000</td>
  </tr>
  <tr>
    <td rowspan="8"><b>Cement</b></td>
    <td>Blockwork</td><td>Bags</td><td>140</td><td>9,500</td><td>1,330,000</td>
  </tr>
  <tr>
    <td>Casting of Columns</td><td>Bags</td><td>64</td><td>9,500</td><td>608,000</td>
  </tr>
  <tr>
    <td>Casting of Slab</td><td>Bags</td><td>350</td><td>9,500</td><td>3,325,000</td>
  </tr>
  <tr>
    <td>Casting of Beams</td><td>Bags</td><td>150</td><td>9,500</td><td>1,425,000</td>
  </tr>
  <tr>
    <td>Casting of DPC</td><td>Bags</td><td>360</td><td>9,500</td><td>3,420,000</td>
  </tr>
  <tr>
    <td>Casting of Binding</td><td>Bags</td><td>150</td><td>9,500</td><td>1,425,000</td>
  </tr>
  <tr>
    <td>Casting of Plaster</td><td>Bags</td><td>200</td><td>9,500</td><td>1,900,000</td>
  </tr>
  <tr>
    <td>External Plaster</td><td>Bags</td><td>200</td><td>9,500</td><td>1,900,000</td>
  </tr>
  <tr>
    <td><b>Marine Boards</b></td>
    <td></td><td>Units</td><td>490</td><td>26,500</td><td>12,985,000</td>
  </tr>
  <tr>
    <td><b>Bamboo</b></td>
    <td></td><td>Units</td><td>300</td><td>2,300</td><td>690,000</td>
  </tr>
  <tr>
    <td rowspan="2"><b>Braces</b></td>
    <td>2x3</td><td>Units</td><td>500</td><td>200</td><td>100,000</td>
  </tr>
  <tr>
    <td>2x4</td><td>Units</td><td>500</td><td>200</td><td>100,000</td>
  </tr>
  <tr>
    <td rowspan="2"><b>Nails</b></td>
    <td>3 Inch</td><td>Bags</td><td>9</td><td>33,000</td><td>297,000</td>
  </tr>
  <tr>
    <td>6 Inch</td><td>Bags</td><td>6</td><td>35,000</td><td>210,000</td>
  </tr>
  <tr>
    <td rowspan="2"><b>Sand</b></td>
    <td>Plaster Sand</td><td>Trips</td><td>14</td><td>130,000</td><td>1,820,000</td>
  </tr>
  <tr>
    <td>Sharp Sand</td><td>Trips</td><td>14</td><td>140,000</td><td>1,960,000</td>
  </tr>
  <tr>
    <td><b>Gravel</b></td>
    <td>Size 3/4</td><td>Trips</td><td>8</td><td>430,000</td><td>3,440,000</td>
  </tr>
  <tr>
    <td><b>Laterite</b></td>
    <td></td><td>Trips</td><td>15</td><td>70,000</td><td>1,050,000</td>
  </tr>
<tr>
    <td colspan="5" style="text-align:center;"><b>Total</b></td>
    <td><b>60,909,300</b></td>
</tr>

</table>


## Appendix 2

<div style="display: flex; justify-content: center; align-items: center; text-align: center;">
  <div>
  <p >
    <figcaption><b>Figure 21:</b> Solar Irradiance Nigeria (2018)  </figcaption>
    <img src="{{ site.baseurl }}/assets/pilot_images/solar_irridance.jpg"  style="width: 90%; height: 800px;">
  </p>
</div>
</div>

---

<script src="{{ site.baseurl }}/assets/projection_charts.js"></script>