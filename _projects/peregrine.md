---
layout: page
title: Peregrine UAV-borne Ice-Penetrating Radar System
description: A field-portable fixed-wing UAV equipped with a miniaturized ice-penetrating radar
img: /assets/img/peregrine/flying_svalbard.png
importance: 1
category: research
github: https://github.com/radioglaciology/uhd_radar
external_url: https://orca.radioglaciology.com/
---

Peregrine is a small (2 meter wingspan) fixed-wing UAS carrying a custom miniaturized ice-penetrating radar, built around the Open Radar Code Architecture (ORCA) that Anna Broome and I spent much of our PhD's developing.

You can find the [main project page for ORCA here](https://orca.radioglaciology.com/) or see our paper at the bottom of this page.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/peregrine/flying_svalbard.jpg' | relative_url }}" alt=""/>
    </div>
</div>
<div class="caption">A photo of Peregrine flying over a glacier in Svalbard during testing. Photo by Eliza Dawson.</div>


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <img class="img-fluid rounded" src="{{ '/assets/img/peregrine/svalbard_film_strip_view.png' | relative_url }}" alt=""/>
    </div>
</div>
<div class="caption">A "film strip" visualization of radar data collected by Peregrine in Svalbard showing the bed of the glacier and an internal layer (red arrows).</div>

<div class="publications">
{% bibliography --query @article[tag=teisberg_orca_2024] %}
</div>