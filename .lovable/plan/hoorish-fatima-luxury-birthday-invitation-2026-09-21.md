# Hoorish Fatima Luxury Birthday Invitation

## Direction
Create a mobile-first digital invitation inspired by Bellagio’s tactile, ceremonial pacing: an invitation-cover opening, generous editorial spacing, fine botanical ornament, and gradual reveals. Translate the visual language into blush pink, warm ivory, dusty rose, and restrained champagne accents so it feels distinctly like an intimate girl’s birthday rather than a wedding conversion.

## Experience
- Begin with a full-screen, paper-textured invitation cover with a monogram seal and an accessible **Open invitation** control.
- Animate the cover opening gently, then reveal the main invitation without abrupt movement or autoplay audio.
- Build a concise scroll story: introduction, Hoorish’s portrait and date, family hosts, celebration details, and a warm closing.
- Add restrained reveal motion and delicate decorative linework, with reduced-motion support.
- Include an unobtrusive disabled music control labeled as unavailable until an audio file is supplied.

## Visual Design
- Use one editorial serif and one clean supporting typeface.
- Frame Hoorish’s real photograph as the primary visual, preserving her identity and natural appearance with careful cropping only.
- Use custom CSS floral line art, ornamental borders, soft shadows, and a subtle paper texture; avoid generated decorations, neon, glass effects, and generic cards.
- Keep all color, typography, shadow, and spacing choices in the shared design system.

## Content
- Present: Hoorish Fatima, 16 October.
- Parents: Muhammad Mubashir and Maryam Maknoon.
- Grandparents: Mr. Zafar Iqbal and Mrs. Nazra Parvez.
- Do not invent a time, venue, address, age, or year.
- Close with “With love, The Mubashir Family” and the supplied celebration message.

## Quality Checks
- Verify the opening interaction, scroll reveals, portrait crop, and text hierarchy on phone and desktop.
- Check for horizontal overflow, overlapping text, reduced-motion behavior, console errors, and current build status.
- Add unique invitation metadata for search and sharing.

## Technical Notes
- Implement within the existing TanStack Start app using React and Tailwind CSS v4.
- Store the uploaded portrait through the project asset flow and reference the resulting pointer.
- Use lightweight browser APIs and CSS transitions rather than an animation dependency.
