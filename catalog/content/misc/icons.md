

## Icon Copypasta

The below icon copy was something I wrote in August in a Github Repo for transparency before design system became more mature. Most of this information is straight up wrong now. Just keeping it here for reference and to pull from in future icon definition that is correct.

### Icon Overview

The brave icon aesthetic is a monoline stroke with rounded endcaps. The icons are meant to be friendly and approachable in appearance. We don't typically give icons dimension or depth, but simplify core shapes and geometry as much as possible to be translated into flat stroked elements.

Brave icons follow a resizing pattern that proportionally resizes strokes to correctly fall on the icon grid as often as possible in whole or half pixel increments.

The team has found that our icon set looks best at 24px with a stroke size of
1.5px. Sometimes this can result in icon strokes appearing fuzzy because it's splitting a pixel but in most use cases this isn't apparent.
In instances where it's apparent or the icon is in heavily used and in constant view (i.e. Toolbar icons), special care should be taken to recraft the icon to correctly fall on the pixel grid.

### Useful Icon Links

1. [Making Pixel Perfect Icons](https://icons8.com/articles/make-pixel-perfect-icons/)

2. [The Right Way to Make Outline Icons](http://iconutopia.com/proper-way-of-creating-outline-icons/)

### Icon Structure

Brave icons are initially made in a 32px artboard. The main reason for this is designing pixels at 32px allows the stroke width to be 2px which makes building them to a pixel grid much easier as the strokes snap in place naturally.

The other reason for designing at this size is proportional scaling in 8px increments up or down allows for the stroke size to fall on half or whole pixel increments consistently.

### Icon Layout

We build our icons with gutter and padding built inherently into the artboard. This serves three main purposes:

Icons are balanced visually within the artboard. This allows for more visual synergy across a set of icons because artboards can be consistent in size and alignment and the icons will always be visually balanced within it.

Replacing Icon is much easier. Since icons are in a consistent artboard size, swapping in new icons will fill the exact same space as the previous icon and not cause padding or margin issues.

Allowing for a gutter within the icon artboard allows elements that may need to be slightly larger or extend into this area to retain weighted visual balance can do so without resizing the artboard.

### Icon Types

Currently we are working with 4 types of icons.

1. System Icons

These are the typical icons that follow all the logic and rules outlined in this doc.

2. Toolbar Icons

These icons take on specific sizing characteristics not present anywhere else. They are used so often and must take advantage of every pixel available and therefore merit considerable fine tuning to the pixel grid and within the bounding box it sits.

3. Illustrative Icons

Sometimes an icon needs to be 32x32px or larger and our system icons begin to feel overwhelming. In instances of this happening, we have carved out a section of icons called Illustrative icons that are meant to be used in instances of a 32x32px minimum size.

Firm creation guidelines still need established for these icons but the tentative rule is to use 1px strokes at 32x32px instead of 2px.

4. Full Color Icons

Some of our icons (mainly logos) are created as a full color icon and therefor don't accept color overrides. Logic used for system icons apply here but they just simply omit color override capabilities.

### Icons in Abstract

Our icons live in the Design Language project within Abstract. The icon file is a library file which means that when projects are linked to it, they pull from all the symbols within the project and are automatically updated when the library file is updated.

### Opening a New Design Language Branch

- Create a new branch from Master of the Design Language Project
- Open the icons.sketch file