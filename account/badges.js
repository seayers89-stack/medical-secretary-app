// Veyn: Skills-Tested badge icon — engraved-seal construction (outer ring,
// dashed inner ring, bar-chart mark) per the brand's verification badge
// system. Colour is success green, reserved for passed-assessment
// credentials (as opposed to gold for identity verification).

function skillsTestedIconSVG(size = 16) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 120 120" style="flex-shrink:0; vertical-align:-2px;">
    <circle cx="60" cy="60" r="56" fill="none" stroke="#3F6B4F" stroke-width="3.5"/>
    <circle cx="60" cy="60" r="46" fill="none" stroke="#3F6B4F" stroke-width="2" stroke-dasharray="3,7"/>
    <g transform="translate(60,62)" fill="none" stroke="#3F6B4F" stroke-width="7" stroke-linecap="round">
      <path d="M-16,8 L-16,-4 M-6,8 L-6,-12 M4,8 L4,-2 M14,8 L14,-16"/>
    </g>
  </svg>`;
}

// Veyn Staff badge — same engraved-seal construction, ink navy (an
// organisational/identity mark, distinct from gold identity-verification
// and green skills-tested credentials).
function staffBadgeIconSVG(size = 16) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 120 120" style="flex-shrink:0; vertical-align:-2px;">
    <circle cx="60" cy="60" r="56" fill="none" stroke="#1B2430" stroke-width="3.5"/>
    <circle cx="60" cy="60" r="46" fill="none" stroke="#1B2430" stroke-width="2" stroke-dasharray="3,7"/>
    <path d="M60,34 L74,42 L74,62 C74,76 68,84 60,88 C52,84 46,76 46,62 L46,42 Z" fill="none" stroke="#1B2430" stroke-width="6" stroke-linejoin="round"/>
  </svg>`;
}
