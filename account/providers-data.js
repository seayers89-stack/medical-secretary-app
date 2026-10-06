// Veyn: the category / service / booking-route options for clinic and
// diagnostic provider listings (provider_locations, migration_66). Stored by
// name, so renaming an entry orphans anyone who already picked the old one.
// Services are suggestions per category — providers can also add their own,
// so this list is a starting point, not a closed vocabulary.
const PROVIDER_CATEGORIES = {
  'Physiotherapy': [
    'Musculoskeletal physiotherapy', 'Sports injury', 'Post-operative rehabilitation',
    'Neurological physiotherapy', "Women's health & pelvic floor", 'Paediatric physiotherapy',
    'Respiratory physiotherapy', 'Vestibular rehabilitation', 'Hydrotherapy', 'Acupuncture',
    'Pilates & exercise rehab', 'Online / telehealth physio',
  ],
  'Imaging & scans': [
    'MRI', 'CT', 'X-ray', 'Ultrasound', 'Obstetric ultrasound', 'DEXA bone density', 'Mammography',
    'Fluoroscopy', 'PET-CT', 'Nuclear medicine', 'Guided injections', 'Open / upright MRI',
  ],
  'Blood tests & pathology': [
    'Phlebotomy (blood draw)', 'Home blood tests', 'Pathology & lab reporting', 'Allergy testing',
    'Genetic & genomic testing', 'Hormone & fertility testing', 'Sexual health screening',
    'Health screening packages',
  ],
  'Cardiac & other diagnostic tests': [
    'ECG', 'Echocardiogram', 'Exercise ECG / stress test', '24-hour ECG (Holter)',
    '24-hour blood pressure monitoring', 'Spirometry / lung function', 'Sleep studies',
    'Audiology / hearing tests', 'Nerve conduction studies & EMG',
  ],
  'Osteopathy & chiropractic': [
    'Osteopathy', 'Chiropractic', 'Sports massage', 'Cranial osteopathy',
  ],
  'Podiatry': [
    'General podiatry', 'Biomechanical assessment', 'Orthotics', 'Nail surgery', 'Diabetic foot care',
  ],
  'Other': [],
};

const PROVIDER_CATEGORY_NAMES = Object.keys(PROVIDER_CATEGORIES);

const PROVIDER_BOOKING_ROUTES = ['Consultant referral', 'GP referral', 'Self-referral'];

// Fills `container` with checkbox chips for `options`, ticking `selected`.
function renderOptionChips(container, options, selected) {
  const chosen = new Set(selected || []);
  container.innerHTML = '';
  options.forEach(name => {
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

function getCheckedValues(container) {
  return [...container.querySelectorAll('input:checked')].map(i => i.value);
}
