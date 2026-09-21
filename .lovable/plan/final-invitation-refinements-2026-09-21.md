# Final Invitation Refinements

## Changes
- Restyle the existing “Open invitation” action as a clearly clickable, high-contrast stationery detail while preserving the envelope and seal.
- Increase undersized labels and important details across every chapter, with special attention to “16 October,” chapter markers, and supporting headings.
- Add an original soft piano, bell, and string birthday instrumental as a lightweight loop.
- Attempt quiet playback when allowed, otherwise start it from the invitation-opening tap; provide an elegant fixed mute/unmute control with smooth fades.

## Technical details
- Keep the existing page structure, content, photography, colors, and animations unchanged.
- Use the native audio element and browser audio APIs rather than a heavy playback library.
- Respect reduced-motion preferences and avoid rejected playback promises or console errors.
- Verify at phone, tablet, and desktop widths, including text wrapping, contrast, playback controls, scrolling, and console output.