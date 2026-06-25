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
