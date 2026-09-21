# First Birthday and Replay Refinements

## Changes
- Raise the background music from its current very quiet level to a still-gentle, clearly audible level while preserving smooth fades.
- Replace every “another year” phrase with warm first-birthday wording, without changing names, date, family details, or page structure.
- Turn the final circular “H” into an accessible replay control that scrolls to the top, restores the closed envelope, and allows the full opening animation and celebration burst to run again.

## Technical details
- Reuse the existing envelope, animation, audio, and Button systems.
- Reset the opening state only after returning to the top so the closing transition reads naturally.
- Verify replay, audio, wording, scrolling, and layout on phone and desktop, including reduced-motion behavior and console output.
