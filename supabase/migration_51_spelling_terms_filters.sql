-- Veyn: body-area and specialty filters for the Academy spelling search tool
-- (account/spelling-search.html). body_area is a body-system taxonomy that
-- applies to both anatomy terms (where they are) and medications (what they
-- treat/act on), so a secretary can filter "Respiratory" and get both
-- Trachea and Salbutamol. specialty reuses the exact list from
-- SPECIALTIES/specialties-data.js so it lines up with consultant profiles
-- and search filters elsewhere in the app.
-- Run this in the Supabase SQL editor.

alter table spelling_terms add column body_area text;
alter table spelling_terms add column specialty text;

alter table spelling_terms add constraint spelling_terms_body_area_check
  check (body_area in (
    'Cardiovascular', 'Respiratory', 'Gastrointestinal', 'Musculoskeletal',
    'Nervous system', 'Genitourinary', 'Reproductive', 'Endocrine', 'Skin',
    'Eyes', 'Ears, nose & throat', 'Head & neck', 'Blood & immune',
    'Mental health', 'General / systemic'
  ));

alter table spelling_terms add constraint spelling_terms_specialty_check
  check (specialty in (
    'Aesthetic medicine', 'Cardiology', 'Dermatology', 'Endocrinology', 'ENT',
    'Fertility', 'Gastroenterology', 'General medicine', 'General surgery',
    'Gynaecology', 'Neurology', 'Oncology', 'Ophthalmology', 'Orthopaedics',
    'Paediatrics', 'Pain management', 'Plastic surgery', 'Psychiatry',
    'Respiratory medicine', 'Rheumatology', 'Urology'
  ));

-- Suggestions can optionally flag a specialty too, so an admin has a head
-- start when approving — body_area is assigned on approval instead, since
-- it's a finer-grained call than a secretary suggesting a term is likely to
-- know or care about.
alter table spelling_term_suggestions add column specialty text;
alter table spelling_term_suggestions add constraint spelling_term_suggestions_specialty_check
  check (specialty in (
    'Aesthetic medicine', 'Cardiology', 'Dermatology', 'Endocrinology', 'ENT',
    'Fertility', 'Gastroenterology', 'General medicine', 'General surgery',
    'Gynaecology', 'Neurology', 'Oncology', 'Ophthalmology', 'Orthopaedics',
    'Paediatrics', 'Pain management', 'Plastic surgery', 'Psychiatry',
    'Respiratory medicine', 'Rheumatology', 'Urology'
  ));

-- Backfill the existing 305-term seed (migration_50_spelling_terms.sql).
update spelling_terms set body_area = 'General / systemic', specialty = 'General medicine' where term = 'Amoxicillin' and category = 'medication';
update spelling_terms set body_area = 'General / systemic', specialty = 'General medicine' where term = 'Co-amoxiclav' and category = 'medication';
update spelling_terms set body_area = 'General / systemic', specialty = 'General medicine' where term = 'Flucloxacillin' and category = 'medication';
update spelling_terms set body_area = 'General / systemic', specialty = 'General medicine' where term = 'Erythromycin' and category = 'medication';
update spelling_terms set body_area = 'General / systemic', specialty = 'General medicine' where term = 'Clarithromycin' and category = 'medication';
update spelling_terms set body_area = 'General / systemic', specialty = 'General medicine' where term = 'Azithromycin' and category = 'medication';
update spelling_terms set body_area = 'General / systemic', specialty = 'General medicine' where term = 'Doxycycline' and category = 'medication';
update spelling_terms set body_area = 'Genitourinary', specialty = 'Urology' where term = 'Ciprofloxacin' and category = 'medication';
update spelling_terms set body_area = 'Respiratory', specialty = 'Respiratory medicine' where term = 'Levofloxacin' and category = 'medication';
update spelling_terms set body_area = 'Genitourinary', specialty = 'Urology' where term = 'Trimethoprim' and category = 'medication';
update spelling_terms set body_area = 'Genitourinary', specialty = 'Urology' where term = 'Nitrofurantoin' and category = 'medication';
update spelling_terms set body_area = 'Gastrointestinal', specialty = 'Gastroenterology' where term = 'Metronidazole' and category = 'medication';
update spelling_terms set body_area = 'Musculoskeletal', specialty = 'Rheumatology' where term = 'Sulfasalazine' and category = 'medication';
update spelling_terms set body_area = 'Musculoskeletal', specialty = 'Rheumatology' where term = 'Hydroxychloroquine' and category = 'medication';
update spelling_terms set body_area = 'Musculoskeletal', specialty = 'Rheumatology' where term = 'Methotrexate' and category = 'medication';
update spelling_terms set body_area = 'Musculoskeletal', specialty = 'Rheumatology' where term = 'Azathioprine' and category = 'medication';
update spelling_terms set body_area = 'Musculoskeletal', specialty = 'Rheumatology' where term = 'Leflunomide' and category = 'medication';
update spelling_terms set body_area = 'Gastrointestinal', specialty = 'Gastroenterology' where term = 'Omeprazole' and category = 'medication';
update spelling_terms set body_area = 'Gastrointestinal', specialty = 'Gastroenterology' where term = 'Lansoprazole' and category = 'medication';
update spelling_terms set body_area = 'Gastrointestinal', specialty = 'Gastroenterology' where term = 'Esomeprazole' and category = 'medication';
update spelling_terms set body_area = 'Gastrointestinal', specialty = 'Gastroenterology' where term = 'Pantoprazole' and category = 'medication';
update spelling_terms set body_area = 'Gastrointestinal', specialty = 'Gastroenterology' where term = 'Ranitidine' and category = 'medication';
update spelling_terms set body_area = 'Cardiovascular', specialty = 'Cardiology' where term = 'Atorvastatin' and category = 'medication';
update spelling_terms set body_area = 'Cardiovascular', specialty = 'Cardiology' where term = 'Simvastatin' and category = 'medication';
update spelling_terms set body_area = 'Cardiovascular', specialty = 'Cardiology' where term = 'Rosuvastatin' and category = 'medication';
update spelling_terms set body_area = 'Cardiovascular', specialty = 'Cardiology' where term = 'Ezetimibe' and category = 'medication';
update spelling_terms set body_area = 'Cardiovascular', specialty = 'Cardiology' where term = 'Bisoprolol' and category = 'medication';
update spelling_terms set body_area = 'Cardiovascular', specialty = 'Cardiology' where term = 'Atenolol' and category = 'medication';
update spelling_terms set body_area = 'Cardiovascular', specialty = 'Cardiology' where term = 'Propranolol' and category = 'medication';
update spelling_terms set body_area = 'Cardiovascular', specialty = 'Cardiology' where term = 'Ramipril' and category = 'medication';
update spelling_terms set body_area = 'Cardiovascular', specialty = 'Cardiology' where term = 'Lisinopril' and category = 'medication';
update spelling_terms set body_area = 'Cardiovascular', specialty = 'Cardiology' where term = 'Perindopril' and category = 'medication';
update spelling_terms set body_area = 'Cardiovascular', specialty = 'Cardiology' where term = 'Losartan' and category = 'medication';
update spelling_terms set body_area = 'Cardiovascular', specialty = 'Cardiology' where term = 'Candesartan' and category = 'medication';
update spelling_terms set body_area = 'Cardiovascular', specialty = 'Cardiology' where term = 'Amlodipine' and category = 'medication';
update spelling_terms set body_area = 'Cardiovascular', specialty = 'Cardiology' where term = 'Felodipine' and category = 'medication';
update spelling_terms set body_area = 'Cardiovascular', specialty = 'Cardiology' where term = 'Furosemide' and category = 'medication';
update spelling_terms set body_area = 'Cardiovascular', specialty = 'Cardiology' where term = 'Bendroflumethiazide' and category = 'medication';
update spelling_terms set body_area = 'Cardiovascular', specialty = 'Cardiology' where term = 'Spironolactone' and category = 'medication';
update spelling_terms set body_area = 'Blood & immune', specialty = 'Cardiology' where term = 'Warfarin' and category = 'medication';
update spelling_terms set body_area = 'Blood & immune', specialty = 'Cardiology' where term = 'Rivaroxaban' and category = 'medication';
update spelling_terms set body_area = 'Blood & immune', specialty = 'Cardiology' where term = 'Apixaban' and category = 'medication';
update spelling_terms set body_area = 'Blood & immune', specialty = 'Cardiology' where term = 'Dabigatran' and category = 'medication';
update spelling_terms set body_area = 'Blood & immune', specialty = 'Cardiology' where term = 'Edoxaban' and category = 'medication';
update spelling_terms set body_area = 'Blood & immune', specialty = 'Cardiology' where term = 'Clopidogrel' and category = 'medication';
update spelling_terms set body_area = 'Blood & immune', specialty = 'Cardiology' where term = 'Prasugrel' and category = 'medication';
update spelling_terms set body_area = 'Blood & immune', specialty = 'Cardiology' where term = 'Ticagrelor' and category = 'medication';
update spelling_terms set body_area = 'Endocrine', specialty = 'Endocrinology' where term = 'Levothyroxine' and category = 'medication';
update spelling_terms set body_area = 'Endocrine', specialty = 'Endocrinology' where term = 'Carbimazole' and category = 'medication';
update spelling_terms set body_area = 'Endocrine', specialty = 'Endocrinology' where term = 'Metformin' and category = 'medication';
update spelling_terms set body_area = 'Endocrine', specialty = 'Endocrinology' where term = 'Gliclazide' and category = 'medication';
update spelling_terms set body_area = 'Endocrine', specialty = 'Endocrinology' where term = 'Sitagliptin' and category = 'medication';
update spelling_terms set body_area = 'Endocrine', specialty = 'Endocrinology' where term = 'Empagliflozin' and category = 'medication';
update spelling_terms set body_area = 'Endocrine', specialty = 'Endocrinology' where term = 'Dapagliflozin' and category = 'medication';
update spelling_terms set body_area = 'Endocrine', specialty = 'Endocrinology' where term = 'Pioglitazone' and category = 'medication';
update spelling_terms set body_area = 'Mental health', specialty = 'Psychiatry' where term = 'Sertraline' and category = 'medication';
update spelling_terms set body_area = 'Mental health', specialty = 'Psychiatry' where term = 'Citalopram' and category = 'medication';
update spelling_terms set body_area = 'Mental health', specialty = 'Psychiatry' where term = 'Escitalopram' and category = 'medication';
update spelling_terms set body_area = 'Mental health', specialty = 'Psychiatry' where term = 'Fluoxetine' and category = 'medication';
update spelling_terms set body_area = 'Mental health', specialty = 'Psychiatry' where term = 'Paroxetine' and category = 'medication';
update spelling_terms set body_area = 'Mental health', specialty = 'Psychiatry' where term = 'Venlafaxine' and category = 'medication';
update spelling_terms set body_area = 'Mental health', specialty = 'Psychiatry' where term = 'Duloxetine' and category = 'medication';
update spelling_terms set body_area = 'Mental health', specialty = 'Psychiatry' where term = 'Mirtazapine' and category = 'medication';
update spelling_terms set body_area = 'Mental health', specialty = 'Psychiatry' where term = 'Amitriptyline' and category = 'medication';
update spelling_terms set body_area = 'Mental health', specialty = 'Psychiatry' where term = 'Quetiapine' and category = 'medication';
update spelling_terms set body_area = 'Mental health', specialty = 'Psychiatry' where term = 'Olanzapine' and category = 'medication';
update spelling_terms set body_area = 'Mental health', specialty = 'Psychiatry' where term = 'Risperidone' and category = 'medication';
update spelling_terms set body_area = 'Mental health', specialty = 'Psychiatry' where term = 'Aripiprazole' and category = 'medication';
update spelling_terms set body_area = 'Nervous system', specialty = 'Neurology' where term = 'Lamotrigine' and category = 'medication';
update spelling_terms set body_area = 'Nervous system', specialty = 'Neurology' where term = 'Levetiracetam' and category = 'medication';
update spelling_terms set body_area = 'Nervous system', specialty = 'Neurology' where term = 'Phenytoin' and category = 'medication';
update spelling_terms set body_area = 'Nervous system', specialty = 'Neurology' where term = 'Carbamazepine' and category = 'medication';
update spelling_terms set body_area = 'Nervous system', specialty = 'Neurology' where term = 'Sodium valproate' and category = 'medication';
update spelling_terms set body_area = 'Nervous system', specialty = 'Pain management' where term = 'Pregabalin' and category = 'medication';
update spelling_terms set body_area = 'Nervous system', specialty = 'Pain management' where term = 'Gabapentin' and category = 'medication';
update spelling_terms set body_area = 'Musculoskeletal', specialty = 'Pain management' where term = 'Baclofen' and category = 'medication';
update spelling_terms set body_area = 'General / systemic', specialty = 'Pain management' where term = 'Tramadol' and category = 'medication';
update spelling_terms set body_area = 'General / systemic', specialty = 'Pain management' where term = 'Co-codamol' and category = 'medication';
update spelling_terms set body_area = 'General / systemic', specialty = 'Pain management' where term = 'Oxycodone' and category = 'medication';
update spelling_terms set body_area = 'General / systemic', specialty = 'Pain management' where term = 'Buprenorphine' and category = 'medication';
update spelling_terms set body_area = 'Musculoskeletal', specialty = 'Rheumatology' where term = 'Naproxen' and category = 'medication';
update spelling_terms set body_area = 'Musculoskeletal', specialty = 'Rheumatology' where term = 'Diclofenac' and category = 'medication';
update spelling_terms set body_area = 'General / systemic', specialty = 'General medicine' where term = 'Prednisolone' and category = 'medication';
update spelling_terms set body_area = 'Respiratory', specialty = 'Respiratory medicine' where term = 'Salbutamol' and category = 'medication';
update spelling_terms set body_area = 'Respiratory', specialty = 'Respiratory medicine' where term = 'Beclometasone' and category = 'medication';
update spelling_terms set body_area = 'Respiratory', specialty = 'Respiratory medicine' where term = 'Tiotropium' and category = 'medication';
update spelling_terms set body_area = 'Respiratory', specialty = 'Respiratory medicine' where term = 'Montelukast' and category = 'medication';
update spelling_terms set body_area = 'Genitourinary', specialty = 'Urology' where term = 'Tamsulosin' and category = 'medication';
update spelling_terms set body_area = 'Genitourinary', specialty = 'Urology' where term = 'Finasteride' and category = 'medication';
update spelling_terms set body_area = 'Genitourinary', specialty = 'Urology' where term = 'Solifenacin' and category = 'medication';
update spelling_terms set body_area = 'Mental health', specialty = 'Psychiatry' where term = 'Diazepam' and category = 'medication';
update spelling_terms set body_area = 'Mental health', specialty = 'Psychiatry' where term = 'Zopiclone' and category = 'medication';
update spelling_terms set body_area = 'Musculoskeletal', specialty = 'Rheumatology' where term = 'Adalimumab' and category = 'medication';
update spelling_terms set body_area = 'Musculoskeletal', specialty = 'Rheumatology' where term = 'Etanercept' and category = 'medication';
update spelling_terms set body_area = 'Musculoskeletal', specialty = 'Rheumatology' where term = 'Infliximab' and category = 'medication';
update spelling_terms set body_area = 'Musculoskeletal', specialty = 'Rheumatology' where term = 'Rituximab' and category = 'medication';
update spelling_terms set body_area = 'Musculoskeletal', specialty = 'Rheumatology' where term = 'Tocilizumab' and category = 'medication';
update spelling_terms set body_area = 'Musculoskeletal', specialty = 'Rheumatology' where term = 'Denosumab' and category = 'medication';
update spelling_terms set body_area = 'Musculoskeletal', specialty = 'Rheumatology' where term = 'Alendronic acid' and category = 'medication';
update spelling_terms set body_area = 'Musculoskeletal', specialty = 'Rheumatology' where term = 'Risedronate' and category = 'medication';
update spelling_terms set body_area = 'Musculoskeletal', specialty = 'Rheumatology' where term = 'Zoledronic acid' and category = 'medication';
update spelling_terms set body_area = 'Musculoskeletal', specialty = 'Rheumatology' where term = 'Colchicine' and category = 'medication';
update spelling_terms set body_area = 'Musculoskeletal', specialty = 'Rheumatology' where term = 'Allopurinol' and category = 'medication';
update spelling_terms set body_area = 'Musculoskeletal', specialty = 'Rheumatology' where term = 'Febuxostat' and category = 'medication';
update spelling_terms set body_area = 'Endocrine', specialty = 'Endocrinology' where term = 'Hydrocortisone' and category = 'medication';
update spelling_terms set body_area = 'Endocrine', specialty = 'Endocrinology' where term = 'Dexamethasone' and category = 'medication';
update spelling_terms set body_area = 'Endocrine', specialty = 'Endocrinology' where term = 'Fludrocortisone' and category = 'medication';
update spelling_terms set body_area = 'Genitourinary', specialty = 'Urology' where term = 'Desmopressin' and category = 'medication';
update spelling_terms set body_area = 'Genitourinary', specialty = 'Urology' where term = 'Oxybutynin' and category = 'medication';
update spelling_terms set body_area = 'Genitourinary', specialty = 'Urology' where term = 'Dutasteride' and category = 'medication';
update spelling_terms set body_area = 'Genitourinary', specialty = 'Urology' where term = 'Doxazosin' and category = 'medication';
update spelling_terms set body_area = 'Reproductive', specialty = 'Urology' where term = 'Tadalafil' and category = 'medication';
update spelling_terms set body_area = 'Reproductive', specialty = 'Fertility' where term = 'Clomifene' and category = 'medication';
update spelling_terms set body_area = 'Reproductive', specialty = 'Fertility' where term = 'Letrozole' and category = 'medication';
update spelling_terms set body_area = 'Reproductive', specialty = 'Oncology' where term = 'Goserelin' and category = 'medication';
update spelling_terms set body_area = 'Reproductive', specialty = 'Oncology' where term = 'Leuprorelin' and category = 'medication';
update spelling_terms set body_area = 'Reproductive', specialty = 'Oncology' where term = 'Tamoxifen' and category = 'medication';
update spelling_terms set body_area = 'Reproductive', specialty = 'Oncology' where term = 'Anastrozole' and category = 'medication';
update spelling_terms set body_area = 'Reproductive', specialty = 'Oncology' where term = 'Exemestane' and category = 'medication';
update spelling_terms set body_area = 'General / systemic', specialty = 'Oncology' where term = 'Capecitabine' and category = 'medication';
update spelling_terms set body_area = 'General / systemic', specialty = 'Oncology' where term = 'Cyclophosphamide' and category = 'medication';
update spelling_terms set body_area = 'General / systemic', specialty = 'Oncology' where term = 'Docetaxel' and category = 'medication';
update spelling_terms set body_area = 'General / systemic', specialty = 'Oncology' where term = 'Paclitaxel' and category = 'medication';
update spelling_terms set body_area = 'General / systemic', specialty = 'Oncology' where term = 'Bevacizumab' and category = 'medication';
update spelling_terms set body_area = 'General / systemic', specialty = 'Oncology' where term = 'Trastuzumab' and category = 'medication';
update spelling_terms set body_area = 'General / systemic', specialty = 'Oncology' where term = 'Pembrolizumab' and category = 'medication';
update spelling_terms set body_area = 'General / systemic', specialty = 'Oncology' where term = 'Nivolumab' and category = 'medication';
update spelling_terms set body_area = 'Skin', specialty = 'Dermatology' where term = 'Isotretinoin' and category = 'medication';
update spelling_terms set body_area = 'Skin', specialty = 'Dermatology' where term = 'Adapalene' and category = 'medication';
update spelling_terms set body_area = 'Skin', specialty = 'Dermatology' where term = 'Tretinoin' and category = 'medication';
update spelling_terms set body_area = 'Skin', specialty = 'Dermatology' where term = 'Terbinafine' and category = 'medication';
update spelling_terms set body_area = 'Skin', specialty = 'Dermatology' where term = 'Fluconazole' and category = 'medication';
update spelling_terms set body_area = 'Skin', specialty = 'Dermatology' where term = 'Clotrimazole' and category = 'medication';
update spelling_terms set body_area = 'Skin', specialty = 'Dermatology' where term = 'Aciclovir' and category = 'medication';
update spelling_terms set body_area = 'Skin', specialty = 'Dermatology' where term = 'Valaciclovir' and category = 'medication';
update spelling_terms set body_area = 'Skin', specialty = 'Dermatology' where term = 'Famciclovir' and category = 'medication';
update spelling_terms set body_area = 'Respiratory', specialty = 'General medicine' where term = 'Oseltamivir' and category = 'medication';
update spelling_terms set body_area = 'General / systemic', specialty = 'General medicine' where term = 'Co-trimoxazole' and category = 'medication';
update spelling_terms set body_area = 'General / systemic', specialty = 'General medicine' where term = 'Vancomycin' and category = 'medication';
update spelling_terms set body_area = 'General / systemic', specialty = 'General medicine' where term = 'Gentamicin' and category = 'medication';
update spelling_terms set body_area = 'General / systemic', specialty = 'General medicine' where term = 'Teicoplanin' and category = 'medication';
update spelling_terms set body_area = 'General / systemic', specialty = 'General medicine' where term = 'Piperacillin-tazobactam' and category = 'medication';
update spelling_terms set body_area = 'General / systemic', specialty = 'General medicine' where term = 'Meropenem' and category = 'medication';
update spelling_terms set body_area = 'General / systemic', specialty = 'General medicine' where term = 'Linezolid' and category = 'medication';
update spelling_terms set body_area = 'Respiratory', specialty = 'Respiratory medicine' where term = 'Rifampicin' and category = 'medication';
update spelling_terms set body_area = 'Respiratory', specialty = 'Respiratory medicine' where term = 'Isoniazid' and category = 'medication';
update spelling_terms set body_area = 'Respiratory', specialty = 'Respiratory medicine' where term = 'Pyrazinamide' and category = 'medication';
update spelling_terms set body_area = 'Respiratory', specialty = 'Respiratory medicine' where term = 'Ethambutol' and category = 'medication';
update spelling_terms set body_area = 'Respiratory', specialty = 'Respiratory medicine' where term = 'Budesonide' and category = 'medication';
update spelling_terms set body_area = 'Respiratory', specialty = 'Respiratory medicine' where term = 'Fluticasone' and category = 'medication';
update spelling_terms set body_area = 'Respiratory', specialty = 'Respiratory medicine' where term = 'Mometasone' and category = 'medication';
update spelling_terms set body_area = 'Respiratory', specialty = 'Respiratory medicine' where term = 'Ipratropium' and category = 'medication';
update spelling_terms set body_area = 'Respiratory', specialty = 'Respiratory medicine' where term = 'Formoterol' and category = 'medication';
update spelling_terms set body_area = 'Respiratory', specialty = 'Respiratory medicine' where term = 'Theophylline' and category = 'medication';
update spelling_terms set body_area = 'General / systemic', specialty = 'General medicine' where term = 'Cetirizine' and category = 'medication';
update spelling_terms set body_area = 'General / systemic', specialty = 'General medicine' where term = 'Loratadine' and category = 'medication';
update spelling_terms set body_area = 'General / systemic', specialty = 'General medicine' where term = 'Fexofenadine' and category = 'medication';
update spelling_terms set body_area = 'General / systemic', specialty = 'General medicine' where term = 'Chlorphenamine' and category = 'medication';
update spelling_terms set body_area = 'Gastrointestinal', specialty = 'Gastroenterology' where term = 'Domperidone' and category = 'medication';
update spelling_terms set body_area = 'Gastrointestinal', specialty = 'Gastroenterology' where term = 'Metoclopramide' and category = 'medication';
update spelling_terms set body_area = 'Gastrointestinal', specialty = 'Gastroenterology' where term = 'Ondansetron' and category = 'medication';
update spelling_terms set body_area = 'Gastrointestinal', specialty = 'Gastroenterology' where term = 'Cyclizine' and category = 'medication';
update spelling_terms set body_area = 'Gastrointestinal', specialty = 'Gastroenterology' where term = 'Loperamide' and category = 'medication';
update spelling_terms set body_area = 'Gastrointestinal', specialty = 'Gastroenterology' where term = 'Mesalazine' and category = 'medication';
update spelling_terms set body_area = 'Gastrointestinal', specialty = 'Gastroenterology' where term = 'Lactulose' and category = 'medication';
update spelling_terms set body_area = 'Gastrointestinal', specialty = 'Gastroenterology' where term = 'Macrogol' and category = 'medication';
update spelling_terms set body_area = 'Gastrointestinal', specialty = 'Gastroenterology' where term = 'Docusate sodium' and category = 'medication';
update spelling_terms set body_area = 'Blood & immune', specialty = 'General medicine' where term = 'Ferrous fumarate' and category = 'medication';
update spelling_terms set body_area = 'Blood & immune', specialty = 'General medicine' where term = 'Ferrous sulfate' and category = 'medication';
update spelling_terms set body_area = 'Blood & immune', specialty = 'General medicine' where term = 'Cyanocobalamin' and category = 'medication';
update spelling_terms set body_area = 'Endocrine', specialty = 'General medicine' where term = 'Cholecalciferol' and category = 'medication';
update spelling_terms set body_area = 'Endocrine', specialty = 'Endocrinology' where term = 'Alfacalcidol' and category = 'medication';
update spelling_terms set body_area = 'Skin', specialty = 'Dermatology' where term = 'Hydroxyzine' and category = 'medication';
update spelling_terms set body_area = 'General / systemic', specialty = 'General surgery' where term = 'Propofol' and category = 'medication';
update spelling_terms set body_area = 'General / systemic', specialty = 'General surgery' where term = 'Midazolam' and category = 'medication';
update spelling_terms set body_area = 'General / systemic', specialty = 'Pain management' where term = 'Dihydrocodeine' and category = 'medication';
update spelling_terms set body_area = 'Musculoskeletal', specialty = 'Rheumatology' where term = 'Meloxicam' and category = 'medication';
update spelling_terms set body_area = 'Musculoskeletal', specialty = 'Rheumatology' where term = 'Etoricoxib' and category = 'medication';
update spelling_terms set body_area = 'Musculoskeletal', specialty = 'Rheumatology' where term = 'Celecoxib' and category = 'medication';
update spelling_terms set body_area = 'Gastrointestinal', specialty = 'Gastroenterology' where term = 'Oesophagus' and category = 'anatomy';
update spelling_terms set body_area = 'Gastrointestinal', specialty = 'Gastroenterology' where term = 'Duodenum' and category = 'anatomy';
update spelling_terms set body_area = 'Gastrointestinal', specialty = 'Gastroenterology' where term = 'Jejunum' and category = 'anatomy';
update spelling_terms set body_area = 'Gastrointestinal', specialty = 'Gastroenterology' where term = 'Ileum' and category = 'anatomy';
update spelling_terms set body_area = 'Gastrointestinal', specialty = 'Gastroenterology' where term = 'Ilium' and category = 'anatomy';
update spelling_terms set body_area = 'Gastrointestinal', specialty = 'Gastroenterology' where term = 'Pancreas' and category = 'anatomy';
update spelling_terms set body_area = 'Gastrointestinal', specialty = 'Gastroenterology' where term = 'Gallbladder' and category = 'anatomy';
update spelling_terms set body_area = 'Gastrointestinal', specialty = 'Gastroenterology' where term = 'Diaphragm' and category = 'anatomy';
update spelling_terms set body_area = 'Gastrointestinal', specialty = 'Gastroenterology' where term = 'Peritoneum' and category = 'anatomy';
update spelling_terms set body_area = 'Gastrointestinal', specialty = 'Gastroenterology' where term = 'Mesentery' and category = 'anatomy';
update spelling_terms set body_area = 'Gastrointestinal', specialty = 'Gastroenterology' where term = 'Appendix' and category = 'anatomy';
update spelling_terms set body_area = 'Gastrointestinal', specialty = 'Gastroenterology' where term = 'Caecum' and category = 'anatomy';
update spelling_terms set body_area = 'Gastrointestinal', specialty = 'Gastroenterology' where term = 'Sigmoid colon' and category = 'anatomy';
update spelling_terms set body_area = 'Musculoskeletal', specialty = 'Orthopaedics' where term = 'Sternum' and category = 'anatomy';
update spelling_terms set body_area = 'Musculoskeletal', specialty = 'Orthopaedics' where term = 'Clavicle' and category = 'anatomy';
update spelling_terms set body_area = 'Musculoskeletal', specialty = 'Orthopaedics' where term = 'Scapula' and category = 'anatomy';
update spelling_terms set body_area = 'Musculoskeletal', specialty = 'Orthopaedics' where term = 'Humerus' and category = 'anatomy';
update spelling_terms set body_area = 'Musculoskeletal', specialty = 'Orthopaedics' where term = 'Ulna' and category = 'anatomy';
update spelling_terms set body_area = 'Musculoskeletal', specialty = 'Orthopaedics' where term = 'Carpals' and category = 'anatomy';
update spelling_terms set body_area = 'Musculoskeletal', specialty = 'Orthopaedics' where term = 'Metacarpals' and category = 'anatomy';
update spelling_terms set body_area = 'Musculoskeletal', specialty = 'Orthopaedics' where term = 'Phalanges' and category = 'anatomy';
update spelling_terms set body_area = 'Musculoskeletal', specialty = 'Orthopaedics' where term = 'Patella' and category = 'anatomy';
update spelling_terms set body_area = 'Musculoskeletal', specialty = 'Orthopaedics' where term = 'Fibula' and category = 'anatomy';
update spelling_terms set body_area = 'Musculoskeletal', specialty = 'Orthopaedics' where term = 'Calcaneus' and category = 'anatomy';
update spelling_terms set body_area = 'Musculoskeletal', specialty = 'Orthopaedics' where term = 'Vertebrae' and category = 'anatomy';
update spelling_terms set body_area = 'Musculoskeletal', specialty = 'Orthopaedics' where term = 'Coccyx' and category = 'anatomy';
update spelling_terms set body_area = 'Musculoskeletal', specialty = 'Orthopaedics' where term = 'Sacrum' and category = 'anatomy';
update spelling_terms set body_area = 'Ears, nose & throat', specialty = 'ENT' where term = 'Larynx' and category = 'anatomy';
update spelling_terms set body_area = 'Ears, nose & throat', specialty = 'ENT' where term = 'Pharynx' and category = 'anatomy';
update spelling_terms set body_area = 'Respiratory', specialty = 'Respiratory medicine' where term = 'Trachea' and category = 'anatomy';
update spelling_terms set body_area = 'Respiratory', specialty = 'Respiratory medicine' where term = 'Bronchus' and category = 'anatomy';
update spelling_terms set body_area = 'Respiratory', specialty = 'Respiratory medicine' where term = 'Alveoli' and category = 'anatomy';
update spelling_terms set body_area = 'Respiratory', specialty = 'Respiratory medicine' where term = 'Pleura' and category = 'anatomy';
update spelling_terms set body_area = 'Respiratory', specialty = 'Respiratory medicine' where term = 'Mediastinum' and category = 'anatomy';
update spelling_terms set body_area = 'Cardiovascular', specialty = 'Cardiology' where term = 'Myocardium' and category = 'anatomy';
update spelling_terms set body_area = 'Cardiovascular', specialty = 'Cardiology' where term = 'Pericardium' and category = 'anatomy';
update spelling_terms set body_area = 'Cardiovascular', specialty = 'Cardiology' where term = 'Aorta' and category = 'anatomy';
update spelling_terms set body_area = 'Genitourinary', specialty = 'Urology' where term = 'Ureter' and category = 'anatomy';
update spelling_terms set body_area = 'Genitourinary', specialty = 'Urology' where term = 'Urethra' and category = 'anatomy';
update spelling_terms set body_area = 'Genitourinary', specialty = 'Urology' where term = 'Prostate' and category = 'anatomy';
update spelling_terms set body_area = 'Reproductive', specialty = 'Urology' where term = 'Epididymis' and category = 'anatomy';
update spelling_terms set body_area = 'Reproductive', specialty = 'Urology' where term = 'Vas deferens' and category = 'anatomy';
update spelling_terms set body_area = 'Reproductive', specialty = 'Gynaecology' where term = 'Fallopian tubes' and category = 'anatomy';
update spelling_terms set body_area = 'Reproductive', specialty = 'Gynaecology' where term = 'Cervix' and category = 'anatomy';
update spelling_terms set body_area = 'Reproductive', specialty = 'Gynaecology' where term = 'Perineum' and category = 'anatomy';
update spelling_terms set body_area = 'Nervous system', specialty = 'Neurology' where term = 'Hypothalamus' and category = 'anatomy';
update spelling_terms set body_area = 'Nervous system', specialty = 'Neurology' where term = 'Pituitary gland' and category = 'anatomy';
update spelling_terms set body_area = 'Nervous system', specialty = 'Neurology' where term = 'Cerebellum' and category = 'anatomy';
update spelling_terms set body_area = 'Nervous system', specialty = 'Neurology' where term = 'Medulla oblongata' and category = 'anatomy';
update spelling_terms set body_area = 'Nervous system', specialty = 'Neurology' where term = 'Meninges' and category = 'anatomy';
update spelling_terms set body_area = 'Nervous system', specialty = 'Neurology' where term = 'Hippocampus' and category = 'anatomy';
update spelling_terms set body_area = 'Eyes', specialty = 'Ophthalmology' where term = 'Sclera' and category = 'anatomy';
update spelling_terms set body_area = 'Eyes', specialty = 'Ophthalmology' where term = 'Choroid' and category = 'anatomy';
update spelling_terms set body_area = 'Eyes', specialty = 'Ophthalmology' where term = 'Conjunctiva' and category = 'anatomy';
update spelling_terms set body_area = 'Eyes', specialty = 'Ophthalmology' where term = 'Lacrimal gland' and category = 'anatomy';
update spelling_terms set body_area = 'Ears, nose & throat', specialty = 'ENT' where term = 'Tympanic membrane' and category = 'anatomy';
update spelling_terms set body_area = 'Ears, nose & throat', specialty = 'ENT' where term = 'Cochlea' and category = 'anatomy';
update spelling_terms set body_area = 'Ears, nose & throat', specialty = 'ENT' where term = 'Vestibule' and category = 'anatomy';
update spelling_terms set body_area = 'Head & neck', specialty = 'ENT' where term = 'Mandible' and category = 'anatomy';
update spelling_terms set body_area = 'Head & neck', specialty = 'ENT' where term = 'Maxilla' and category = 'anatomy';
update spelling_terms set body_area = 'Head & neck', specialty = 'ENT' where term = 'Zygomatic bone' and category = 'anatomy';
update spelling_terms set body_area = 'Head & neck', specialty = 'ENT' where term = 'Sphenoid bone' and category = 'anatomy';
update spelling_terms set body_area = 'Head & neck', specialty = 'ENT' where term = 'Ethmoid bone' and category = 'anatomy';
update spelling_terms set body_area = 'Reproductive', specialty = 'Urology' where term = 'Scrotum' and category = 'anatomy';
update spelling_terms set body_area = 'Blood & immune', specialty = 'General surgery' where term = 'Spleen' and category = 'anatomy';
update spelling_terms set body_area = 'Musculoskeletal', specialty = 'Orthopaedics' where term = 'Achilles tendon' and category = 'anatomy';
update spelling_terms set body_area = 'Musculoskeletal', specialty = 'Orthopaedics' where term = 'Meniscus' and category = 'anatomy';
update spelling_terms set body_area = 'Musculoskeletal', specialty = 'Orthopaedics' where term = 'Acromioclavicular joint' and category = 'anatomy';
update spelling_terms set body_area = 'Musculoskeletal', specialty = 'Orthopaedics' where term = 'Gluteus maximus' and category = 'anatomy';
update spelling_terms set body_area = 'Musculoskeletal', specialty = 'Orthopaedics' where term = 'Trapezius' and category = 'anatomy';
update spelling_terms set body_area = 'Musculoskeletal', specialty = 'Orthopaedics' where term = 'Latissimus dorsi' and category = 'anatomy';
update spelling_terms set body_area = 'Musculoskeletal', specialty = 'Orthopaedics' where term = 'Sternocleidomastoid' and category = 'anatomy';
update spelling_terms set body_area = 'Musculoskeletal', specialty = 'Orthopaedics' where term = 'Quadriceps' and category = 'anatomy';
update spelling_terms set body_area = 'Ears, nose & throat', specialty = 'ENT' where term = 'Mastoid process' and category = 'anatomy';
update spelling_terms set body_area = 'Ears, nose & throat', specialty = 'ENT' where term = 'Eustachian tube' and category = 'anatomy';
update spelling_terms set body_area = 'Ears, nose & throat', specialty = 'ENT' where term = 'Turbinates' and category = 'anatomy';
update spelling_terms set body_area = 'Ears, nose & throat', specialty = 'ENT' where term = 'Nasal septum' and category = 'anatomy';
update spelling_terms set body_area = 'Ears, nose & throat', specialty = 'ENT' where term = 'Tonsils' and category = 'anatomy';
update spelling_terms set body_area = 'Ears, nose & throat', specialty = 'ENT' where term = 'Adenoids' and category = 'anatomy';
update spelling_terms set body_area = 'Ears, nose & throat', specialty = 'ENT' where term = 'Maxillary sinus' and category = 'anatomy';
update spelling_terms set body_area = 'Ears, nose & throat', specialty = 'ENT' where term = 'Ethmoidal sinus' and category = 'anatomy';
update spelling_terms set body_area = 'Ears, nose & throat', specialty = 'ENT' where term = 'Sphenoidal sinus' and category = 'anatomy';
update spelling_terms set body_area = 'Eyes', specialty = 'Ophthalmology' where term = 'Macula' and category = 'anatomy';
update spelling_terms set body_area = 'Eyes', specialty = 'Ophthalmology' where term = 'Fovea' and category = 'anatomy';
update spelling_terms set body_area = 'Eyes', specialty = 'Ophthalmology' where term = 'Vitreous humour' and category = 'anatomy';
update spelling_terms set body_area = 'Eyes', specialty = 'Ophthalmology' where term = 'Aqueous humour' and category = 'anatomy';
update spelling_terms set body_area = 'Eyes', specialty = 'Ophthalmology' where term = 'Ciliary body' and category = 'anatomy';
update spelling_terms set body_area = 'Eyes', specialty = 'Ophthalmology' where term = 'Optic nerve' and category = 'anatomy';
update spelling_terms set body_area = 'Musculoskeletal', specialty = 'Orthopaedics' where term = 'Acetabulum' and category = 'anatomy';
update spelling_terms set body_area = 'Musculoskeletal', specialty = 'Orthopaedics' where term = 'Glenoid cavity' and category = 'anatomy';
update spelling_terms set body_area = 'Musculoskeletal', specialty = 'Orthopaedics' where term = 'Olecranon' and category = 'anatomy';
update spelling_terms set body_area = 'Musculoskeletal', specialty = 'Orthopaedics' where term = 'Malleolus' and category = 'anatomy';
update spelling_terms set body_area = 'Musculoskeletal', specialty = 'Orthopaedics' where term = 'Subscapularis' and category = 'anatomy';
update spelling_terms set body_area = 'Musculoskeletal', specialty = 'Orthopaedics' where term = 'Supraspinatus' and category = 'anatomy';
update spelling_terms set body_area = 'Musculoskeletal', specialty = 'Orthopaedics' where term = 'Infraspinatus' and category = 'anatomy';
update spelling_terms set body_area = 'Musculoskeletal', specialty = 'Orthopaedics' where term = 'Iliotibial band' and category = 'anatomy';
update spelling_terms set body_area = 'Musculoskeletal', specialty = 'Orthopaedics' where term = 'Plantar fascia' and category = 'anatomy';
update spelling_terms set body_area = 'Reproductive', specialty = 'Gynaecology' where term = 'Endometrium' and category = 'anatomy';
update spelling_terms set body_area = 'Reproductive', specialty = 'Gynaecology' where term = 'Myometrium' and category = 'anatomy';
update spelling_terms set body_area = 'Reproductive', specialty = 'Gynaecology' where term = 'Labia majora' and category = 'anatomy';
update spelling_terms set body_area = 'Reproductive', specialty = 'Gynaecology' where term = 'Labia minora' and category = 'anatomy';
update spelling_terms set body_area = 'Reproductive', specialty = 'Gynaecology' where term = 'Bartholin''s glands' and category = 'anatomy';
update spelling_terms set body_area = 'Skin', specialty = 'Dermatology' where term = 'Dermis' and category = 'anatomy';
update spelling_terms set body_area = 'Skin', specialty = 'Dermatology' where term = 'Epidermis' and category = 'anatomy';
update spelling_terms set body_area = 'Skin', specialty = 'Dermatology' where term = 'Subcutis' and category = 'anatomy';
update spelling_terms set body_area = 'Skin', specialty = 'Dermatology' where term = 'Sebaceous glands' and category = 'anatomy';
update spelling_terms set body_area = 'Nervous system', specialty = 'Neurology' where term = 'Corpus callosum' and category = 'anatomy';
update spelling_terms set body_area = 'Nervous system', specialty = 'Neurology' where term = 'Thalamus' and category = 'anatomy';
update spelling_terms set body_area = 'Nervous system', specialty = 'Neurology' where term = 'Basal ganglia' and category = 'anatomy';
update spelling_terms set body_area = 'Nervous system', specialty = 'Neurology' where term = 'Brainstem' and category = 'anatomy';
update spelling_terms set body_area = 'Nervous system', specialty = 'Neurology' where term = 'Occipital lobe' and category = 'anatomy';
update spelling_terms set body_area = 'Nervous system', specialty = 'Neurology' where term = 'Temporal lobe' and category = 'anatomy';
update spelling_terms set body_area = 'Nervous system', specialty = 'Neurology' where term = 'Parietal lobe' and category = 'anatomy';
update spelling_terms set body_area = 'Nervous system', specialty = 'Neurology' where term = 'Frontal lobe' and category = 'anatomy';
update spelling_terms set body_area = 'Cardiovascular', specialty = 'Cardiology' where term = 'Tricuspid valve' and category = 'anatomy';
update spelling_terms set body_area = 'Cardiovascular', specialty = 'Cardiology' where term = 'Mitral valve' and category = 'anatomy';
update spelling_terms set body_area = 'Cardiovascular', specialty = 'Cardiology' where term = 'Pulmonary valve' and category = 'anatomy';
update spelling_terms set body_area = 'Cardiovascular', specialty = 'Cardiology' where term = 'Aortic valve' and category = 'anatomy';
update spelling_terms set body_area = 'Cardiovascular', specialty = 'Cardiology' where term = 'Atrioventricular node' and category = 'anatomy';
update spelling_terms set body_area = 'Cardiovascular', specialty = 'Cardiology' where term = 'Sinoatrial node' and category = 'anatomy';
update spelling_terms set body_area = 'Cardiovascular', specialty = 'Cardiology' where term = 'Ventricular septum' and category = 'anatomy';
update spelling_terms set body_area = 'Cardiovascular', specialty = 'General surgery' where term = 'Carotid artery' and category = 'anatomy';
update spelling_terms set body_area = 'Cardiovascular', specialty = 'General surgery' where term = 'Jugular vein' and category = 'anatomy';
update spelling_terms set body_area = 'Cardiovascular', specialty = 'General surgery' where term = 'Femoral artery' and category = 'anatomy';
update spelling_terms set body_area = 'Cardiovascular', specialty = 'General surgery' where term = 'Popliteal artery' and category = 'anatomy';
update spelling_terms set body_area = 'Cardiovascular', specialty = 'General surgery' where term = 'Saphenous vein' and category = 'anatomy';
