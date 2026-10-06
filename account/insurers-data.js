// Veyn: the insurers a consultant can say they work with (consultant profile
// forms, profile page, and the Find a consultant filter). Stored by name in
// consultant_profiles.insurers (migration_64_consultant_insurers.sql), so
// renaming an entry here orphans anyone who already picked the old name.
const CONSULTANT_INSURERS = [
  'Bupa',
  'AXA Health',
  'Aviva',
  'Vitality',
  'WPA',
  'The Exeter',
  'Freedom Health Insurance',
  'Cigna',
  'Healix',
  'Benenden Health',
  'BHSF',
  'Simplyhealth',
  'General & Medical Healthcare',
  'International insurers',
  'Self-pay patients',
];

// Fills `container` with one checkbox chip per insurer, ticking `selected`.
function renderInsurerChips(container, selected) {
  const chosen = new Set(selected || []);
  container.innerHTML = '';
  CONSULTANT_INSURERS.forEach(name => {
    const label = document.createElement('label');
    label.className = 'chip-toggle';
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.value = name;
    input.checked = chosen.has(name);
    const span = document.createElement('span');
    span.textContent = name;
    label.append(input, span);
    container.appendChild(label);
  });
}

function getSelectedInsurers(container) {
  return [...container.querySelectorAll('input:checked')].map(i => i.value);
}
