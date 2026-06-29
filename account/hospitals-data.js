// Veyn: private hospital directory, sourced from the UK county medical secretary directory.
const HOSPITALS = [
  {
    "name": "The Manor Hospital",
    "area": "Bedfordshire",
    "town": "Bedford",
    "type": "Private - Circle",
    "contact": "01234 364252",
    "website": "circlehealthgroup.co.uk",
    "specialties": "Orthopaedics, ENT, Gynae, Imaging, Surgery",
    "notes": "Major private referral hospital"
  },
  {
    "name": "Bedford Hospital Private Patients",
    "area": "Bedfordshire",
    "town": "Bedford",
    "type": "NHS + Private",
    "contact": "01234 355122",
    "website": "bedfordshirehospitals.nhs.uk",
    "specialties": "Diagnostics, consultants, outpatient clinics",
    "notes": "NHS consultant private work"
  },
  {
    "name": "Luton & Dunstable Private Patients",
    "area": "Bedfordshire",
    "town": "Luton",
    "type": "NHS + Private",
    "contact": "01582 491166",
    "website": "bedfordshirehospitals.nhs.uk",
    "specialties": "Surgery, imaging, diagnostics",
    "notes": "Useful NHS/private consultant route"
  },
  {
    "name": "Spire Harpenden Hospital",
    "area": "Bedfordshire",
    "town": "Harpenden",
    "type": "Private - Spire",
    "contact": "01582 763191",
    "website": "spirehealthcare.com",
    "specialties": "Imaging, Surgery, Outpatients, Orthopaedics",
    "notes": "Often used by Bedfordshire patients"
  },
  {
    "name": "Circle Reading Hospital",
    "area": "Berkshire",
    "town": "Reading",
    "type": "Private Hospital - Circle Health",
    "contact": "0118 922 6888",
    "website": "circlehealthgroup.co.uk",
    "specialties": "Outpatients, imaging, diagnostics, surgery, orthopaedics, endoscopy",
    "notes": "Useful for consultant secretaries, imaging bookings, admissions and theatre coordination"
  },
  {
    "name": "Berkshire Independent Hospital",
    "area": "Berkshire",
    "town": "Reading",
    "type": "Private Hospital - Ramsay",
    "contact": "0118 902 8000",
    "website": "ramsayhealth.co.uk",
    "specialties": "Surgery, diagnostics, orthopaedics, physiotherapy, imaging",
    "notes": "Good private referral route for outpatient clinics and procedure bookings"
  },
  {
    "name": "Royal Berkshire Private Healthcare",
    "area": "Berkshire",
    "town": "Reading",
    "type": "NHS + Private PPU",
    "contact": "0118 322 5111",
    "website": "royalberkshireprivate.co.uk",
    "specialties": "Consultant-led private care, radiology, surgery, diagnostics, outpatients",
    "notes": "Useful NHS consultant private pathway; dedicated radiology/private healthcare route"
  },
  {
    "name": "Royal Berkshire Hospital Radiology Private Services",
    "area": "Berkshire",
    "town": "Reading",
    "type": "NHS + Private Imaging",
    "contact": "0118 322 5111",
    "website": "royalberkshireprivate.co.uk",
    "specialties": "Private radiology, imaging, interventional radiology, diagnostics",
    "notes": "Strong secretary usefulness for scan/referral coordination"
  },
  {
    "name": "Parkside Suite Wexham",
    "area": "Berkshire",
    "town": "Slough / Wexham",
    "type": "NHS + Private PPU",
    "contact": "0300 615 3365",
    "website": "parkside-suite-wexham.org.uk",
    "specialties": "Private healthcare within Wexham Park Hospital, admissions, appointments, diagnostics",
    "notes": "Useful for private patient admissions and NHS consultant pathways"
  },
  {
    "name": "Spire Dunedin Hospital",
    "area": "Berkshire",
    "town": "Reading",
    "type": "Private Hospital - Spire",
    "contact": "0118 958 7676",
    "website": "spirehealthcare.com",
    "specialties": "Outpatients, diagnostics, surgery, orthopaedics, imaging",
    "notes": "Good consultant room/private referral route"
  },
  {
    "name": "Berkshire Imaging / InHealth routes",
    "area": "Berkshire",
    "town": "Countywide",
    "type": "Diagnostics Provider",
    "contact": "0333 202 0300",
    "website": "inhealthgroup.com",
    "specialties": "MRI, CT, ultrasound and diagnostic pathways depending on site",
    "notes": "Useful for imaging booking and diagnostics referrals"
  },
  {
    "name": "Spire Bristol Hospital",
    "area": "Bristol",
    "town": "Bristol",
    "type": "Private Hospital - Spire",
    "contact": "0117 980 4000",
    "website": "spirehealthcare.com",
    "specialties": "Private hospital, diagnostics, imaging, outpatients, surgery, orthopaedics",
    "notes": "Large private hospital; useful for consultant secretaries, admissions and imaging"
  },
  {
    "name": "Nuffield Health Bristol Hospital",
    "area": "Bristol",
    "town": "Clifton / Bristol",
    "type": "Private Hospital - Nuffield",
    "contact": "0117 906 4870",
    "website": "nuffieldhealth.com",
    "specialties": "30-bed private hospital, digital theatres, surgery, outpatients, diagnostics",
    "notes": "Useful for consultant clinics, theatres and private referral routes"
  },
  {
    "name": "Practice Plus Group Hospital Emersons Green",
    "area": "Bristol",
    "town": "Emersons Green",
    "type": "Independent Sector / NHS + Private",
    "contact": "0330 162 0974",
    "website": "practiceplusgroup.com",
    "specialties": "NHS and private care, hip/knee surgery, cataracts, general surgery, diagnostics",
    "notes": "Very useful for NHS/private referrals and elective pathway coordination"
  },
  {
    "name": "University Hospitals Bristol and Weston Private Services",
    "area": "Bristol",
    "town": "Bristol",
    "type": "NHS + Private",
    "contact": "0117 923 0000",
    "website": "uhbristol.nhs.uk",
    "specialties": "Private services, specialist consultants, diagnostics, outpatient specialties",
    "notes": "Useful NHS consultant/private patient route"
  },
  {
    "name": "Bristol Eye Hospital Private / Specialist Pathways",
    "area": "Bristol",
    "town": "Bristol",
    "type": "NHS + Private / Specialist",
    "contact": "0117 923 0000",
    "website": "uhbristol.nhs.uk",
    "specialties": "Ophthalmology, diagnostics, outpatient eye services",
    "notes": "Useful ophthalmology secretary and clinic routing"
  },
  {
    "name": "Bristol Royal Infirmary Private Patient Pathways",
    "area": "Bristol",
    "town": "Bristol",
    "type": "NHS + Private",
    "contact": "0117 923 0000",
    "website": "uhbristol.nhs.uk",
    "specialties": "Surgery, cardiology, diagnostics, specialist medicine",
    "notes": "Useful NHS/private consultant secretary route"
  },
  {
    "name": "Vista Health Bristol Area",
    "area": "Bristol",
    "town": "Bristol area",
    "type": "Private Diagnostics",
    "contact": "0333 200 2064",
    "website": "vista-health.co.uk",
    "specialties": "MRI, CT, ultrasound and diagnostic scans depending on site",
    "notes": "Useful self-pay/private imaging route"
  },
  {
    "name": "The Chiltern Hospital",
    "area": "Buckinghamshire",
    "town": "Great Missenden",
    "type": "Private - Circle",
    "contact": "01494 890890",
    "website": "circlehealthgroup.co.uk",
    "specialties": "Outpatients, Imaging/X-ray, Surgery, Endoscopy, Physio",
    "notes": "Consultants, referrals, admissions, imaging"
  },
  {
    "name": "The Shelburne Hospital",
    "area": "Buckinghamshire",
    "town": "High Wycombe",
    "type": "Private - Circle",
    "contact": "01494 888700",
    "website": "circlehealthgroup.co.uk",
    "specialties": "Outpatients, Imaging, Orthopaedics, Surgery",
    "notes": "Consultant rooms and private referrals"
  },
  {
    "name": "The Saxon Clinic",
    "area": "Buckinghamshire",
    "town": "Milton Keynes",
    "type": "Private - Circle",
    "contact": "01908 665533",
    "website": "circlehealthgroup.co.uk",
    "specialties": "Imaging, Surgery, Outpatients, Physio",
    "notes": "Useful for appointments and bookings"
  },
  {
    "name": "Blakelands Hospital",
    "area": "Buckinghamshire",
    "town": "Milton Keynes",
    "type": "Private - Ramsay",
    "contact": "01908 334200",
    "website": "ramsayhealth.co.uk",
    "specialties": "Day surgery, diagnostics, outpatient clinics",
    "notes": "Admissions and theatre bookings"
  },
  {
    "name": "Royal Buckinghamshire Hospital",
    "area": "Buckinghamshire",
    "town": "Aylesbury",
    "type": "Private",
    "contact": "01296 678800",
    "website": "royalbucks.co.uk",
    "specialties": "Neuro rehab, spinal, private GP",
    "notes": "Specialist referrals"
  },
  {
    "name": "Stoke Mandeville Hospital Private Patients",
    "area": "Buckinghamshire",
    "town": "Aylesbury",
    "type": "NHS + Private",
    "contact": "01296 315000",
    "website": "buckshealthcare.nhs.uk",
    "specialties": "NHS consultants, imaging, surgery",
    "notes": "Private patient office route"
  },
  {
    "name": "Wycombe Hospital Private Patients",
    "area": "Buckinghamshire",
    "town": "High Wycombe",
    "type": "NHS + Private",
    "contact": "01494 526161",
    "website": "buckshealthcare.nhs.uk",
    "specialties": "Cardiology, diagnostics, imaging",
    "notes": "Consultant secretary route"
  },
  {
    "name": "Nuffield Health Cambridge Hospital",
    "area": "Cambridgeshire",
    "town": "Cambridge",
    "type": "Private Hospital",
    "contact": "01223 370922",
    "website": "nuffieldhealth.com",
    "specialties": "Outpatients, MRI, CT, X-ray, surgery, oncology, orthopaedics, cardiology, private GP",
    "notes": "Excellent consultant secretary contact route; referrals, imaging, admissions and theatre bookings"
  },
  {
    "name": "Spire Cambridge Lea Hospital",
    "area": "Cambridgeshire",
    "town": "Impington / Cambridge",
    "type": "Private Hospital",
    "contact": "01223 266900",
    "website": "spirehealthcare.com",
    "specialties": "Diagnostics, imaging, outpatient clinics, surgery, orthopaedics, robotic surgery",
    "notes": "Useful for consultant rooms, outpatient bookings, admissions and imaging"
  },
  {
    "name": "Addenbrooke's Hospital Private Patient Pathways",
    "area": "Cambridgeshire",
    "town": "Cambridge",
    "type": "NHS + Private / Specialist",
    "contact": "01223 805000",
    "website": "cuh.nhs.uk",
    "specialties": "Specialist medicine, surgery, imaging, oncology, neurosciences, diagnostics",
    "notes": "NHS consultant secretary route; tertiary specialist referrals"
  },
  {
    "name": "Cambridge University Hospitals Private Care",
    "area": "Cambridgeshire",
    "town": "Cambridge",
    "type": "NHS + Private",
    "contact": "01223 805000",
    "website": "cuh.nhs.uk",
    "specialties": "Consultants, diagnostics, outpatient specialties",
    "notes": "Useful for locating NHS consultants with private practice"
  },
  {
    "name": "Royal Papworth Hospital Private Care",
    "area": "Cambridgeshire",
    "town": "Cambridge Biomedical Campus",
    "type": "NHS + Private Specialist",
    "contact": "01223 638000",
    "website": "royalpapworth.nhs.uk",
    "specialties": "Cardiology, cardiothoracic surgery, respiratory medicine, imaging",
    "notes": "Specialist heart/lung referrals; consultant secretary pathway"
  },
  {
    "name": "Cambridge Heart Clinic",
    "area": "Cambridgeshire",
    "town": "Cambridge",
    "type": "Private Specialist Clinic",
    "contact": "01223 370922",
    "website": "cambridgeheartclinic.co.uk",
    "specialties": "Cardiology, cardiac investigations",
    "notes": "Useful cardiology referral contact"
  },
  {
    "name": "Momentm Health Cambridge Diagnostic Centre",
    "area": "Cambridgeshire",
    "town": "Great Shelford",
    "type": "Private Imaging / Diagnostics",
    "contact": "01223 344366",
    "website": "momentmhealth.com",
    "specialties": "MRI, ultrasound, diagnostic imaging",
    "notes": "Useful direct imaging pathway for secretaries"
  },
  {
    "name": "InHealth Diagnostics Cambridge Area",
    "area": "Cambridgeshire",
    "town": "Cambridge area",
    "type": "Diagnostics Provider",
    "contact": "0333 202 0300",
    "website": "inhealthgroup.com",
    "specialties": "MRI, CT, ultrasound, diagnostic services",
    "notes": "Useful imaging booking route"
  },
  {
    "name": "Vista Health Cambridge Area",
    "area": "Cambridgeshire",
    "town": "Cambridge area",
    "type": "Private Diagnostics",
    "contact": "0333 200 2064",
    "website": "vista-health.co.uk",
    "specialties": "MRI, CT, ultrasound diagnostics",
    "notes": "Useful for self-pay imaging referrals"
  },
  {
    "name": "North Cambridgeshire Hospital",
    "area": "Cambridgeshire",
    "town": "Wisbech",
    "type": "NHS Services",
    "contact": "01945 488000",
    "website": "nwangliaft.nhs.uk",
    "specialties": "Outpatients, diagnostics, community services",
    "notes": "Useful local NHS contact pathway"
  },
  {
    "name": "Hinchingbrooke Hospital Private Patient Pathways",
    "area": "Cambridgeshire",
    "town": "Huntingdon",
    "type": "NHS + Private",
    "contact": "01480 416416",
    "website": "nwangliaft.nhs.uk",
    "specialties": "Surgery, imaging, outpatient clinics, diagnostics",
    "notes": "Consultant secretary and NHS/private referral route"
  },
  {
    "name": "Peterborough City Hospital Private Patient Pathways",
    "area": "Cambridgeshire",
    "town": "Peterborough",
    "type": "NHS + Private",
    "contact": "01733 678000",
    "website": "nwangliaft.nhs.uk",
    "specialties": "Diagnostics, surgery, specialist consultants",
    "notes": "Useful for consultant secretaries and referrals"
  },
  {
    "name": "Spire Cheshire Hospital",
    "area": "Cheshire",
    "town": "Warrington / Stretton",
    "type": "Private Hospital - Spire",
    "contact": "01925 265000",
    "website": "spirehealthcare.com",
    "specialties": "Scans and investigations, MRI, CT, X-ray, ultrasound, outpatients, surgery",
    "notes": "Strong secretary usefulness for imaging, appointments and theatre booking routes"
  },
  {
    "name": "Circle Cheshire Clinic",
    "area": "Cheshire",
    "town": "Northwich",
    "type": "Private Clinic - Circle Health",
    "contact": "01606 535500",
    "website": "circlehealthgroup.co.uk",
    "specialties": "Diagnostics, CT scan, outpatient services, NHS and private patients",
    "notes": "Useful private/NHS clinic route and radiology coordination"
  },
  {
    "name": "Nuffield Health Chester Hospital",
    "area": "Cheshire",
    "town": "Chester",
    "type": "Private Hospital - Nuffield",
    "contact": "01244 680444",
    "website": "nuffieldhealth.com",
    "specialties": "Private hospital, imaging, surgery, outpatients, orthopaedics",
    "notes": "Useful for consultant clinics and private patient admissions"
  },
  {
    "name": "The Wilmslow Hospital",
    "area": "Cheshire",
    "town": "Wilmslow",
    "type": "Private Hospital / HCA Healthcare UK",
    "contact": "01625 545000",
    "website": "hcahealthcare.co.uk",
    "specialties": "Private diagnostics, imaging, outpatient clinics, surgery, women's and men's health",
    "notes": "High-value consultant-led centre; useful for secretary referrals and imaging"
  },
  {
    "name": "HCA Cheshire Imaging and Diagnostics",
    "area": "Cheshire",
    "town": "Wilmslow / Cheshire",
    "type": "Private Diagnostics - HCA",
    "contact": "01625 545000",
    "website": "hcahealthcare.co.uk",
    "specialties": "MRI, X-ray, ultrasound, mammography, DEXA and rapid access clinics",
    "notes": "Excellent radiology/imaging route for secretaries"
  },
  {
    "name": "Cheshire Medical Imaging",
    "area": "Cheshire",
    "town": "Cheshire area",
    "type": "Imaging / Radiology Provider",
    "contact": "Not listed",
    "website": "cheshiremedicalimaging.co.uk",
    "specialties": "Diagnostic and screening radiology support for NHS and private hospitals",
    "notes": "Useful radiology provider reference; confirm direct contact online"
  },
  {
    "name": "Countess of Chester Hospital Private Patient Pathways",
    "area": "Cheshire",
    "town": "Chester",
    "type": "NHS + Private",
    "contact": "01244 365000",
    "website": "coch.nhs.uk",
    "specialties": "Diagnostics, outpatient clinics, specialist consultants",
    "notes": "NHS consultant/private pathway; confirm private patient contacts through switchboard"
  },
  {
    "name": "Duchy Hospital",
    "area": "Cornwall",
    "town": "Truro",
    "type": "Private Hospital - Ramsay",
    "contact": "01872 226100",
    "website": "ramsayhealth.co.uk",
    "specialties": "Cornwall private hospital, X-ray, MRI, CT, ultrasound, endoscopy, day surgery",
    "notes": "Main private hospital route in Cornwall; useful for imaging/admissions/theatre bookings"
  },
  {
    "name": "Royal Cornwall Hospital Private Patient Pathways",
    "area": "Cornwall",
    "town": "Truro",
    "type": "NHS + Private",
    "contact": "01872 250000",
    "website": "royalcornwall.nhs.uk",
    "specialties": "Private patient policy, consulting rooms, diagnostics, specialist services",
    "notes": "NHS consultant/private pathway; verify service availability before use"
  },
  {
    "name": "West Cornwall Hospital Private Patient Pathways",
    "area": "Cornwall",
    "town": "Penzance",
    "type": "NHS + Private",
    "contact": "01736 874000",
    "website": "royalcornwall.nhs.uk",
    "specialties": "Diagnostics, outpatients, local services",
    "notes": "NHS private patient policy applies; confirm current services via switchboard"
  },
  {
    "name": "St Michael's Hospital Private Patient Pathways",
    "area": "Cornwall",
    "town": "Hayle",
    "type": "NHS + Private",
    "contact": "01736 753234",
    "website": "royalcornwall.nhs.uk",
    "specialties": "Elective surgery, orthopaedics, outpatient pathways",
    "notes": "Useful for elective/private pathway checking"
  },
  {
    "name": "Duchy Hospital Imaging Centre",
    "area": "Cornwall",
    "town": "Truro",
    "type": "Private Imaging - Ramsay",
    "contact": "01872 226100",
    "website": "ramsayhealth.co.uk",
    "specialties": "MRI, CT, X-ray, ultrasound, scan booking",
    "notes": "Direct imaging usefulness for medical secretaries"
  },
  {
    "name": "Vista Health Cornwall Diagnostic Centre",
    "area": "Cornwall",
    "town": "Cornwall area",
    "type": "Private Diagnostics",
    "contact": "0333 200 2064",
    "website": "vista-health.co.uk",
    "specialties": "Private MRI, X-ray and CT depending on site",
    "notes": "Useful for self-pay scan referrals; verify exact local site"
  },
  {
    "name": "InHealth Cornwall Area Diagnostics",
    "area": "Cornwall",
    "town": "Countywide",
    "type": "Diagnostics Provider",
    "contact": "0333 202 0300",
    "website": "inhealthgroup.com",
    "specialties": "MRI, CT, ultrasound and community diagnostic services depending on site",
    "notes": "Useful diagnostic provider route"
  },
  {
    "name": "Woodlands Hospital",
    "area": "County Durham",
    "town": "Darlington",
    "type": "Private Hospital - Circle Health",
    "contact": "01325 341700",
    "website": "circlehealthgroup.co.uk",
    "specialties": "Private hospital, advanced treatments, surgery, diagnostics, imaging, outpatients",
    "notes": "Useful for private referrals, radiology, admissions and theatre coordination"
  },
  {
    "name": "Woodlands Hospital Private Imaging",
    "area": "County Durham",
    "town": "Darlington",
    "type": "Private Imaging - Circle Health",
    "contact": "01325 341700",
    "website": "circlehealthgroup.co.uk",
    "specialties": "Private imaging facilities, diagnostics, scans",
    "notes": "Useful direct radiology/imaging route for secretaries"
  },
  {
    "name": "Nuffield Health Tees Hospital",
    "area": "County Durham",
    "town": "Stockton-on-Tees / Tees area",
    "type": "Private Hospital - Nuffield",
    "contact": "01642 360100",
    "website": "nuffieldhealth.com",
    "specialties": "MRI, CT, breast screening, ultrasound, surgery, physiotherapy",
    "notes": "Useful private imaging, admissions and consultant referral route"
  },
  {
    "name": "Spire Washington Hospital",
    "area": "County Durham / Tyne and Wear border",
    "town": "Washington",
    "type": "Private Hospital - Spire",
    "contact": "0191 415 1272",
    "website": "spirehealthcare.com",
    "specialties": "Consultations, diagnosis, treatment, aftercare, X-rays and scans, surgery",
    "notes": "Useful for North East private referrals and imaging/theatre coordination"
  },
  {
    "name": "University Hospital of North Durham",
    "area": "County Durham",
    "town": "Durham",
    "type": "NHS + Private Pathways",
    "contact": "0191 333 2333",
    "website": "cddft.nhs.uk",
    "specialties": "Radiology, plain film, CT, ultrasound, diagnostics, consultant specialties",
    "notes": "NHS consultant/private pathway; use switchboard for relevant secretary/department"
  },
  {
    "name": "Darlington Memorial Hospital",
    "area": "County Durham",
    "town": "Darlington",
    "type": "NHS + Private Pathways",
    "contact": "01325 380100",
    "website": "cddft.nhs.uk",
    "specialties": "Radiology, CT, plain film, outpatient specialties, diagnostics",
    "notes": "NHS consultant/private pathway; use switchboard for relevant secretary/department"
  },
  {
    "name": "County Durham and Darlington Radiology",
    "area": "County Durham",
    "town": "Durham / Darlington",
    "type": "NHS Diagnostics",
    "contact": "0191 333 2333",
    "website": "cddft.nhs.uk",
    "specialties": "Diagnostic imaging, interventional procedures, plain film, CT, ultrasound",
    "notes": "Useful for imaging/radiology routing and reports"
  },
  {
    "name": "Cumberland Infirmary Private Patient Pathways",
    "area": "Cumbria",
    "town": "Carlisle",
    "type": "NHS + Private Pathways",
    "contact": "01228 523444",
    "website": "ncic.nhs.uk",
    "specialties": "Diagnostics, imaging, consultants, outpatient services",
    "notes": "Use switchboard/private routes for consultant secretaries"
  },
  {
    "name": "West Cumberland Hospital Private Patient Pathways",
    "area": "Cumbria",
    "town": "Whitehaven",
    "type": "NHS + Private Pathways",
    "contact": "01946 693181",
    "website": "ncic.nhs.uk",
    "specialties": "Diagnostics, outpatient clinics, imaging",
    "notes": "Useful NHS consultant contact pathway"
  },
  {
    "name": "Nuffield Health Carlisle links",
    "area": "Cumbria",
    "town": "Cumbria area",
    "type": "Private Healthcare Network",
    "contact": "",
    "website": "nuffieldhealth.com",
    "specialties": "Private referrals and consultant pathways where available",
    "notes": "Check current local provision"
  },
  {
    "name": "InHealth Cumbria Diagnostics",
    "area": "Cumbria",
    "town": "Countywide",
    "type": "Diagnostics Provider",
    "contact": "0333 202 0300",
    "website": "inhealthgroup.com",
    "specialties": "MRI, CT, ultrasound depending on site",
    "notes": "Useful imaging referral route"
  },
  {
    "name": "Nuffield Health Derby Hospital",
    "area": "Derbyshire",
    "town": "Derby",
    "type": "Private Hospital",
    "contact": "01332 540100",
    "website": "nuffieldhealth.com",
    "specialties": "Surgery, imaging, outpatients, diagnostics",
    "notes": "Useful for consultant secretaries/admissions"
  },
  {
    "name": "Royal Derby Hospital Private Patient Pathways",
    "area": "Derbyshire",
    "town": "Derby",
    "type": "NHS + Private",
    "contact": "01332 340131",
    "website": "uhdb.nhs.uk",
    "specialties": "Specialists, diagnostics, imaging, surgery",
    "notes": "NHS consultant private route"
  },
  {
    "name": "Chesterfield Royal Hospital Private Pathways",
    "area": "Derbyshire",
    "town": "Chesterfield",
    "type": "NHS + Private",
    "contact": "01246 277271",
    "website": "chesterfieldroyal.nhs.uk",
    "specialties": "Outpatients, diagnostics, imaging",
    "notes": "Useful secretary route"
  },
  {
    "name": "InHealth Derbyshire Diagnostics",
    "area": "Derbyshire",
    "town": "Countywide",
    "type": "Diagnostics Provider",
    "contact": "0333 202 0300",
    "website": "inhealthgroup.com",
    "specialties": "MRI, CT, ultrasound",
    "notes": "Imaging referrals"
  },
  {
    "name": "Nuffield Health Exeter Hospital",
    "area": "Devon",
    "town": "Exeter",
    "type": "Private Hospital",
    "contact": "01392 276591",
    "website": "nuffieldhealth.com",
    "specialties": "Imaging, surgery, outpatients, orthopaedics",
    "notes": "Consultant secretary/admission route"
  },
  {
    "name": "Mount Stuart Hospital",
    "area": "Devon",
    "town": "Torquay",
    "type": "Private Hospital - Ramsay",
    "contact": "01803 321612",
    "website": "ramsayhealth.co.uk",
    "specialties": "Surgery, diagnostics, outpatients",
    "notes": "Private referrals and theatre bookings"
  },
  {
    "name": "Exeter Medical / Royal Devon Private Pathways",
    "area": "Devon",
    "town": "Exeter",
    "type": "NHS + Private",
    "contact": "01392 411611",
    "website": "royaldevon.nhs.uk",
    "specialties": "Consultants, diagnostics, specialist care",
    "notes": "NHS/private consultant pathway"
  },
  {
    "name": "Plymouth Hospitals Private Pathways",
    "area": "Devon",
    "town": "Plymouth",
    "type": "NHS + Private",
    "contact": "01752 202082",
    "website": "plymouthhospitals.nhs.uk",
    "specialties": "Diagnostics, surgery, specialists",
    "notes": "Useful referral pathway"
  },
  {
    "name": "Nuffield Health Bournemouth Hospital",
    "area": "Dorset",
    "town": "Bournemouth",
    "type": "Private Hospital",
    "contact": "01202 702830",
    "website": "nuffieldhealth.com",
    "specialties": "Surgery, imaging, diagnostics, outpatients",
    "notes": "Consultant secretary route"
  },
  {
    "name": "Harbour Hospital",
    "area": "Dorset",
    "town": "Poole",
    "type": "Private Hospital - Circle Health",
    "contact": "01202 244200",
    "website": "circlehealthgroup.co.uk",
    "specialties": "Imaging, surgery, orthopaedics, outpatients",
    "notes": "Private referrals/admissions"
  },
  {
    "name": "Dorset County Hospital Private Pathways",
    "area": "Dorset",
    "town": "Dorchester",
    "type": "NHS + Private",
    "contact": "01305 251150",
    "website": "dchft.nhs.uk",
    "specialties": "Diagnostics, consultants, imaging",
    "notes": "NHS/private consultant route"
  },
  {
    "name": "University Hospitals Dorset Private Pathways",
    "area": "Dorset",
    "town": "Bournemouth/Poole",
    "type": "NHS + Private",
    "contact": "0300 019 8499",
    "website": "uhd.nhs.uk",
    "specialties": "Specialists, imaging, outpatient care",
    "notes": "Secretary contact via hospital routes"
  },
  {
    "name": "Spire Hull and East Riding Hospital",
    "area": "East Riding of Yorkshire",
    "town": "Hull",
    "type": "Private Hospital - Spire",
    "contact": "01482 659471",
    "website": "spirehealthcare.com",
    "specialties": "Outpatients, imaging, diagnostics, surgery, orthopaedics",
    "notes": "Useful for consultant secretaries, admissions and radiology bookings"
  },
  {
    "name": "Hull Royal Infirmary Private Patient Pathways",
    "area": "East Riding of Yorkshire",
    "town": "Hull",
    "type": "NHS + Private Pathways",
    "contact": "01482 875875",
    "website": "hey.nhs.uk",
    "specialties": "Specialists, diagnostics, imaging, outpatient services",
    "notes": "NHS consultant/private referral route"
  },
  {
    "name": "Castle Hill Hospital Private Patient Pathways",
    "area": "East Riding of Yorkshire",
    "town": "Cottingham",
    "type": "NHS + Private Pathways",
    "contact": "01482 875875",
    "website": "hey.nhs.uk",
    "specialties": "Cardiology, cancer, surgery, diagnostics",
    "notes": "Specialist NHS consultant route"
  },
  {
    "name": "InHealth East Yorkshire Diagnostics",
    "area": "East Riding of Yorkshire",
    "town": "Countywide",
    "type": "Diagnostics Provider",
    "contact": "0333 202 0300",
    "website": "inhealthgroup.com",
    "specialties": "MRI, CT, ultrasound pathways",
    "notes": "Useful imaging referral contact"
  },
  {
    "name": "Nuffield Health Brighton Hospital",
    "area": "East Sussex",
    "town": "Brighton",
    "type": "Private Hospital - Nuffield",
    "contact": "01273 624488",
    "website": "nuffieldhealth.com",
    "specialties": "Surgery, diagnostics, imaging, outpatients",
    "notes": "Consultant clinics, admissions and theatre bookings"
  },
  {
    "name": "Spire Sussex Hospital",
    "area": "East Sussex",
    "town": "Hastings",
    "type": "Private Hospital - Spire",
    "contact": "01424 757400",
    "website": "spirehealthcare.com",
    "specialties": "Imaging, surgery, orthopaedics, outpatient clinics",
    "notes": "Useful private referral route"
  },
  {
    "name": "Montefiore Hospital",
    "area": "East Sussex",
    "town": "Hove",
    "type": "Private Hospital - Spire",
    "contact": "01273 828120",
    "website": "spirehealthcare.com",
    "specialties": "Diagnostics, imaging, surgery, private consultants",
    "notes": "Useful for consultant secretary contacts"
  },
  {
    "name": "Royal Sussex County Hospital Private Pathways",
    "area": "East Sussex",
    "town": "Brighton",
    "type": "NHS + Private",
    "contact": "01273 696955",
    "website": "uhsussex.nhs.uk",
    "specialties": "Specialists, imaging, diagnostics",
    "notes": "NHS consultant/private pathway"
  },
  {
    "name": "Springfield Hospital",
    "area": "Essex",
    "town": "Chelmsford",
    "type": "Private Hospital - Ramsay",
    "contact": "01245 234000",
    "website": "ramsayhealth.co.uk",
    "specialties": "Imaging, surgery, outpatients, diagnostics",
    "notes": "Private admissions and consultant referrals"
  },
  {
    "name": "Spire Wellesley Hospital",
    "area": "Essex",
    "town": "Southend",
    "type": "Private Hospital - Spire",
    "contact": "01702 462944",
    "website": "spirehealthcare.com",
    "specialties": "Diagnostics, surgery, imaging, outpatient clinics",
    "notes": "Secretary referral and booking route"
  },
  {
    "name": "Nuffield Health Brentwood Hospital",
    "area": "Essex",
    "town": "Brentwood",
    "type": "Private Hospital - Nuffield",
    "contact": "01277 695695",
    "website": "nuffieldhealth.com",
    "specialties": "Surgery, diagnostics, imaging, orthopaedics",
    "notes": "Consultant secretary pathway"
  },
  {
    "name": "Phoenix Hospital Chelmsford",
    "area": "Essex",
    "town": "Chelmsford",
    "type": "Private Hospital",
    "contact": "01245 801234",
    "website": "phoenixhospitalgroup.com",
    "specialties": "Private surgery, diagnostics, outpatient services",
    "notes": "Useful consultant-led pathway"
  },
  {
    "name": "Broomfield Hospital Private Pathways",
    "area": "Essex",
    "town": "Chelmsford",
    "type": "NHS + Private",
    "contact": "01245 362000",
    "website": "mse.nhs.uk",
    "specialties": "Specialists, diagnostics, imaging",
    "notes": "NHS consultant/private route"
  },
  {
    "name": "Nuffield Health Cheltenham Hospital",
    "area": "Gloucestershire",
    "town": "Cheltenham",
    "type": "Private Hospital - Nuffield",
    "contact": "01242 246500",
    "website": "nuffieldhealth.com",
    "specialties": "Diagnostics, surgery, imaging, outpatients",
    "notes": "Consultant rooms and admissions route"
  },
  {
    "name": "Winfield Hospital",
    "area": "Gloucestershire",
    "town": "Gloucester",
    "type": "Private Hospital - Ramsay",
    "contact": "01452 331111",
    "website": "ramsayhealth.co.uk",
    "specialties": "Surgery, orthopaedics, imaging, diagnostics",
    "notes": "Useful referral/admissions pathway"
  },
  {
    "name": "Gloucestershire Hospitals Private Pathways",
    "area": "Gloucestershire",
    "town": "Gloucester/Cheltenham",
    "type": "NHS + Private",
    "contact": "0300 422 2222",
    "website": "gloshospitals.nhs.uk",
    "specialties": "Consultants, imaging, specialist services",
    "notes": "NHS consultant secretary route"
  },
  {
    "name": "InHealth Gloucestershire Diagnostics",
    "area": "Gloucestershire",
    "town": "Countywide",
    "type": "Diagnostics Provider",
    "contact": "0333 202 0300",
    "website": "inhealthgroup.com",
    "specialties": "MRI, CT, ultrasound services",
    "notes": "Useful imaging route"
  },
  {
    "name": "Chelsea and Westminster Hospital Private Care",
    "area": "Greater London",
    "town": "Chelsea / Kensington",
    "type": "NHS + Private PPU",
    "contact": "020 3315 8484",
    "website": "chelwestprivatecare.co.uk",
    "specialties": "Private care, maternity, diagnostics, surgery, outpatients",
    "notes": "Useful for consultants with NHS/private practice; check private care office for booking routes"
  },
  {
    "name": "OneWelbeck",
    "area": "Greater London",
    "town": "Marylebone",
    "type": "Private Specialist Centre",
    "contact": "020 3653 2000",
    "website": "welbeck.com",
    "specialties": "Cardiology, digestive health, ENT, lung health, orthopaedics, imaging",
    "notes": "Large consultant-suite model; useful for secretary referral routing"
  },
  {
    "name": "The London Clinic",
    "area": "Greater London",
    "town": "Marylebone",
    "type": "Private Hospital",
    "contact": "020 7935 4444",
    "website": "thelondonclinic.co.uk",
    "specialties": "Cancer care, surgery, imaging, outpatients",
    "notes": "Major central London private hospital with consultant rooms"
  },
  {
    "name": "King Edward VII's Hospital",
    "area": "Greater London",
    "town": "Marylebone",
    "type": "Private Hospital",
    "contact": "020 7486 4411",
    "website": "kingedwardvii.co.uk",
    "specialties": "Surgery, urology, orthopaedics, women's health",
    "notes": "Consultant-led private admissions and diagnostics"
  },
  {
    "name": "Cromwell Hospital",
    "area": "Greater London",
    "town": "Kensington",
    "type": "Private Hospital - Bupa",
    "contact": "020 7460 5700",
    "website": "cromwellhospital.com",
    "specialties": "Diagnostics, surgery, cancer, cardiology",
    "notes": "Large private hospital with outpatient and imaging departments"
  },
  {
    "name": "Royal Free London Private Patients Unit",
    "area": "Greater London",
    "town": "Hampstead",
    "type": "NHS + Private PPU",
    "contact": "020 7317 7751",
    "website": "royalfreeprivatepatients.com",
    "specialties": "Liver, renal, cancer, surgery, diagnostics, dialysis",
    "notes": "Large NHS PPU; useful for tertiary consultant referrals"
  },
  {
    "name": "Imperial College Healthcare Private Care",
    "area": "Greater London",
    "town": "Paddington / Hammersmith",
    "type": "NHS + Private PPU",
    "contact": "020 3311 7700",
    "website": "private.imperial.nhs.uk",
    "specialties": "Cardiology, cancer, surgery, neurology, diagnostics",
    "notes": "Private care across Imperial NHS hospitals"
  },
  {
    "name": "Guy's and St Thomas' Specialist Care",
    "area": "Greater London",
    "town": "Westminster / London Bridge",
    "type": "NHS + Private PPU",
    "contact": "020 7188 5197",
    "website": "guysandstthomasprivatehealthcare.co.uk",
    "specialties": "Cardiology, cancer, transplant, complex surgery",
    "notes": "NHS private care across five leading hospitals"
  },
  {
    "name": "Royal Marsden Private Care",
    "area": "Greater London",
    "town": "Chelsea / Sutton",
    "type": "NHS + Private PPU",
    "contact": "020 7811 8111",
    "website": "royalmarsdenprivatecare.co.uk",
    "specialties": "Cancer, chemotherapy, radiotherapy, diagnostics",
    "notes": "Major specialist oncology private care"
  },
  {
    "name": "Moorfields Private Eye Hospital",
    "area": "Greater London",
    "town": "City Road / Marylebone",
    "type": "NHS + Private PPU",
    "contact": "020 7566 2803",
    "website": "moorfields-private.co.uk",
    "specialties": "Cataract, retina, glaucoma, cornea, ophthalmology",
    "notes": "Specialist eye hospital; outpatient and theatre relevance"
  },
  {
    "name": "The Christie Private Care",
    "area": "Greater Manchester",
    "town": "Manchester",
    "type": "NHS + Private / HCA",
    "contact": "0161 918 7296",
    "website": "hcahealthcare.co.uk",
    "specialties": "Cancer, chemotherapy, radiotherapy, diagnostics",
    "notes": "Major oncology consultant pathway"
  },
  {
    "name": "Spire Manchester Hospital",
    "area": "Greater Manchester",
    "town": "Manchester",
    "type": "Private Hospital - Spire",
    "contact": "0161 447 6677",
    "website": "spirehealthcare.com",
    "specialties": "Imaging, surgery, outpatients, diagnostics",
    "notes": "Large consultant base"
  },
  {
    "name": "The Alexandra Hospital",
    "area": "Greater Manchester",
    "town": "Cheadle",
    "type": "Private Hospital - Circle",
    "contact": "0161 428 3656",
    "website": "circlehealthgroup.co.uk",
    "specialties": "Diagnostics, surgery, imaging, orthopaedics",
    "notes": "Useful for admissions and consultant secretaries"
  },
  {
    "name": "Manchester Royal Infirmary Private Pathways",
    "area": "Greater Manchester",
    "town": "Manchester",
    "type": "NHS + Private",
    "contact": "0161 276 1234",
    "website": "mft.nhs.uk",
    "specialties": "Specialist medicine, diagnostics, imaging",
    "notes": "NHS consultant/private route"
  },
  {
    "name": "Wythenshawe Hospital Private Pathways",
    "area": "Greater Manchester",
    "town": "Manchester",
    "type": "NHS + Private",
    "contact": "0161 998 7070",
    "website": "mft.nhs.uk",
    "specialties": "Cardiac, respiratory, surgery, diagnostics",
    "notes": "Specialist referral pathway"
  },
  {
    "name": "Spire Southampton Hospital",
    "area": "Hampshire",
    "town": "Southampton",
    "type": "Private Hospital - Spire",
    "contact": "023 8077 5544",
    "website": "spirehealthcare.com",
    "specialties": "Imaging, diagnostics, surgery, orthopaedics, outpatient clinics",
    "notes": "Useful for consultant secretaries, admissions and radiology bookings"
  },
  {
    "name": "Nuffield Health Wessex Hospital",
    "area": "Hampshire",
    "town": "Eastleigh",
    "type": "Private Hospital - Nuffield",
    "contact": "023 8026 6377",
    "website": "nuffieldhealth.com",
    "specialties": "MRI, X-ray, surgery, diagnostics, outpatients",
    "notes": "Private referral and consultant pathway"
  },
  {
    "name": "Sarum Road Hospital",
    "area": "Hampshire",
    "town": "Winchester",
    "type": "Private Hospital - Circle Health",
    "contact": "01962 844555",
    "website": "circlehealthgroup.co.uk",
    "specialties": "Diagnostics, surgery, imaging, outpatient care",
    "notes": "Admissions and consultant secretary route"
  },
  {
    "name": "Queen Alexandra Hospital Private Pathways",
    "area": "Hampshire",
    "town": "Portsmouth",
    "type": "NHS + Private",
    "contact": "023 9228 6000",
    "website": "porthosp.nhs.uk",
    "specialties": "Specialists, diagnostics, imaging, surgery",
    "notes": "NHS consultant/private patient route"
  },
  {
    "name": "University Hospital Southampton Private Care",
    "area": "Hampshire",
    "town": "Southampton",
    "type": "NHS + Private",
    "contact": "023 8077 7222",
    "website": "uhs.nhs.uk",
    "specialties": "Cancer, cardiac, surgery, imaging, specialist consultants",
    "notes": "Useful tertiary consultant route"
  },
  {
    "name": "Nuffield Health Hereford Hospital",
    "area": "Herefordshire",
    "town": "Hereford",
    "type": "Private Hospital - Nuffield",
    "contact": "01432 355131",
    "website": "nuffieldhealth.com",
    "specialties": "Outpatients, diagnostics, surgery, imaging",
    "notes": "Consultant secretary and referral pathway"
  },
  {
    "name": "Hereford County Hospital Private Patient Pathways",
    "area": "Herefordshire",
    "town": "Hereford",
    "type": "NHS + Private",
    "contact": "01432 355444",
    "website": "wyevalley.nhs.uk",
    "specialties": "Diagnostics, consultants, outpatient specialties",
    "notes": "NHS consultant/private care route"
  },
  {
    "name": "Wye Valley NHS Diagnostics",
    "area": "Herefordshire",
    "town": "Countywide",
    "type": "NHS Diagnostics",
    "contact": "01432 355444",
    "website": "wyevalley.nhs.uk",
    "specialties": "Radiology, scans, outpatient diagnostics",
    "notes": "Useful imaging contact pathway"
  },
  {
    "name": "InHealth Herefordshire Diagnostics",
    "area": "Herefordshire",
    "town": "Countywide",
    "type": "Diagnostics Provider",
    "contact": "0333 202 0300",
    "website": "inhealthgroup.com",
    "specialties": "MRI, CT, ultrasound routes",
    "notes": "Useful for diagnostic referrals"
  },
  {
    "name": "Spire Harpenden Hospital",
    "area": "Hertfordshire",
    "town": "Harpenden",
    "type": "Private Hospital - Spire",
    "contact": "01582 763191",
    "website": "spirehealthcare.com",
    "specialties": "Imaging, surgery, diagnostics, outpatient clinics",
    "notes": "Consultant rooms and private referrals"
  },
  {
    "name": "One Hatfield Hospital",
    "area": "Hertfordshire",
    "town": "Hatfield",
    "type": "Private Hospital",
    "contact": "01707 443333",
    "website": "onehealthcare.co.uk",
    "specialties": "MRI, diagnostics, surgery, outpatients",
    "notes": "Useful for admissions and consultant secretaries"
  },
  {
    "name": "Pinehill Hospital",
    "area": "Hertfordshire",
    "town": "Hitchin",
    "type": "Private Hospital - Ramsay",
    "contact": "01462 422822",
    "website": "ramsayhealth.co.uk",
    "specialties": "Surgery, imaging, diagnostics, orthopaedics",
    "notes": "Private referral pathway"
  },
  {
    "name": "Rivers Hospital",
    "area": "Hertfordshire",
    "town": "Sawbridgeworth",
    "type": "Private Hospital - Ramsay",
    "contact": "01279 600282",
    "website": "ramsayhealth.co.uk",
    "specialties": "Diagnostics, imaging, surgery, outpatient care",
    "notes": "Useful consultant pathway"
  },
  {
    "name": "Lister Hospital Private Pathways",
    "area": "Hertfordshire",
    "town": "Stevenage",
    "type": "NHS + Private",
    "contact": "01438 314333",
    "website": "enherts-tr.nhs.uk",
    "specialties": "Specialists, diagnostics, imaging",
    "notes": "NHS consultant route"
  },
  {
    "name": "St Mary's Hospital Private Patient Pathways",
    "area": "Isle of Wight",
    "town": "Newport",
    "type": "NHS + Private",
    "contact": "01983 524081",
    "website": "iow.nhs.uk",
    "specialties": "Diagnostics, imaging, outpatient specialties",
    "notes": "NHS consultant/private route"
  },
  {
    "name": "Isle of Wight Diagnostic Services",
    "area": "Isle of Wight",
    "town": "Newport",
    "type": "NHS Diagnostics",
    "contact": "01983 524081",
    "website": "iow.nhs.uk",
    "specialties": "Radiology, scans, diagnostics",
    "notes": "Useful imaging pathway"
  },
  {
    "name": "Mainland private referral routes",
    "area": "Isle of Wight",
    "town": "Southampton/Portsmouth links",
    "type": "Private Pathways",
    "contact": "",
    "website": "",
    "specialties": "Spire/Nuffield/Circle mainland referral options",
    "notes": "Often used for specialist private referrals"
  },
  {
    "name": "KIMS Hospital",
    "area": "Kent",
    "town": "Maidstone",
    "type": "Private Hospital",
    "contact": "01622 237500",
    "website": "kims.org.uk",
    "specialties": "MRI, CT, imaging, surgery, outpatients, orthopaedics",
    "notes": "Major Kent private hospital; useful secretary pathway"
  },
  {
    "name": "Spire Alexandra Hospital",
    "area": "Kent",
    "town": "Chatham",
    "type": "Private Hospital - Spire",
    "contact": "01634 687166",
    "website": "spirehealthcare.com",
    "specialties": "Diagnostics, imaging, surgery, outpatients",
    "notes": "Consultant/admission route"
  },
  {
    "name": "Benenden Hospital",
    "area": "Kent",
    "town": "Benenden",
    "type": "Independent Hospital",
    "contact": "01580 240333",
    "website": "benendenhospital.org.uk",
    "specialties": "Surgery, diagnostics, imaging, ophthalmology",
    "notes": "Useful NHS/private pathway"
  },
  {
    "name": "One Ashford Hospital",
    "area": "Kent",
    "town": "Ashford",
    "type": "Private Hospital",
    "contact": "01233 423000",
    "website": "onehealthcare.co.uk",
    "specialties": "Diagnostics, surgery, imaging, outpatient care",
    "notes": "Consultant secretary route"
  },
  {
    "name": "Maidstone and Tunbridge Wells Private Pathways",
    "area": "Kent",
    "town": "Maidstone/Tunbridge Wells",
    "type": "NHS + Private",
    "contact": "01622 729000",
    "website": "mtw.nhs.uk",
    "specialties": "Cancer, diagnostics, surgery, imaging",
    "notes": "NHS consultant/private route"
  },
  {
    "name": "Euxton Hall Hospital",
    "area": "Lancashire",
    "town": "Chorley",
    "type": "Private Hospital - Ramsay",
    "contact": "01257 276261",
    "website": "ramsayhealth.co.uk",
    "specialties": "Orthopaedics, surgery, diagnostics, imaging, outpatients",
    "notes": "Useful for consultant secretaries, admissions and theatre bookings"
  },
  {
    "name": "Fulwood Hall Hospital",
    "area": "Lancashire",
    "town": "Preston",
    "type": "Private Hospital - Ramsay",
    "contact": "01772 704111",
    "website": "ramsayhealth.co.uk",
    "specialties": "Imaging, diagnostics, surgery, outpatient clinics",
    "notes": "Useful referral and booking route"
  },
  {
    "name": "Spire Fylde Coast Hospital",
    "area": "Lancashire",
    "town": "Blackpool",
    "type": "Private Hospital - Spire",
    "contact": "01253 308031",
    "website": "spirehealthcare.com",
    "specialties": "Diagnostics, imaging, surgery, orthopaedics",
    "notes": "Consultant and imaging pathway"
  },
  {
    "name": "Lancashire Teaching Hospitals Private Patient Pathways",
    "area": "Lancashire",
    "town": "Preston",
    "type": "NHS + Private",
    "contact": "01772 716565",
    "website": "lancsteachinghospitals.nhs.uk",
    "specialties": "Specialists, diagnostics, imaging, surgery",
    "notes": "NHS consultant/private route"
  },
  {
    "name": "Nuffield Health Leicester Hospital",
    "area": "Leicestershire",
    "town": "Leicester",
    "type": "Private Hospital - Nuffield",
    "contact": "0116 276 9401",
    "website": "nuffieldhealth.com",
    "specialties": "Surgery, diagnostics, imaging, outpatients",
    "notes": "Useful consultant secretary pathway"
  },
  {
    "name": "Spire Leicester Hospital",
    "area": "Leicestershire",
    "town": "Leicester",
    "type": "Private Hospital - Spire",
    "contact": "0116 265 3685",
    "website": "spirehealthcare.com",
    "specialties": "MRI, CT, X-ray, surgery, outpatient clinics",
    "notes": "Useful for admissions and imaging bookings"
  },
  {
    "name": "Leicester Royal Infirmary Private Pathways",
    "area": "Leicestershire",
    "town": "Leicester",
    "type": "NHS + Private",
    "contact": "0300 303 1573",
    "website": "uhl-tr.nhs.uk",
    "specialties": "Specialist consultants, imaging, diagnostics",
    "notes": "NHS/private consultant route"
  },
  {
    "name": "Glenfield Hospital Private Pathways",
    "area": "Leicestershire",
    "town": "Leicester",
    "type": "NHS + Private",
    "contact": "0300 303 1573",
    "website": "uhl-tr.nhs.uk",
    "specialties": "Cardiac, respiratory, diagnostics",
    "notes": "Specialist referral route"
  },
  {
    "name": "The Lincoln Hospital",
    "area": "Lincolnshire",
    "town": "Lincoln",
    "type": "Private Hospital - Circle Health",
    "contact": "01522 578000",
    "website": "circlehealthgroup.co.uk",
    "specialties": "Surgery, imaging, diagnostics, outpatient care",
    "notes": "Consultant/admissions pathway"
  },
  {
    "name": "St Hugh's Hospital",
    "area": "Lincolnshire",
    "town": "Grimsby",
    "type": "Independent Hospital",
    "contact": "01472 251100",
    "website": "hmtsthughs.org",
    "specialties": "Diagnostics, imaging, surgery, outpatients",
    "notes": "Useful private and NHS pathway"
  },
  {
    "name": "Lincoln County Hospital Private Pathways",
    "area": "Lincolnshire",
    "town": "Lincoln",
    "type": "NHS + Private",
    "contact": "01522 512512",
    "website": "ulh.nhs.uk",
    "specialties": "Diagnostics, specialists, imaging",
    "notes": "NHS consultant pathway"
  },
  {
    "name": "Pilgrim Hospital Private Pathways",
    "area": "Lincolnshire",
    "town": "Boston",
    "type": "NHS + Private",
    "contact": "01205 364801",
    "website": "ulh.nhs.uk",
    "specialties": "Outpatients, diagnostics, imaging",
    "notes": "Secretary referral route"
  },
  {
    "name": "Spire Liverpool Hospital",
    "area": "Merseyside",
    "town": "Liverpool",
    "type": "Private Hospital - Spire",
    "contact": "0151 733 7123",
    "website": "spirehealthcare.com",
    "specialties": "Diagnostics, imaging, surgery, outpatient clinics",
    "notes": "Consultant secretary route"
  },
  {
    "name": "Liverpool Women's Private Patient Pathways",
    "area": "Merseyside",
    "town": "Liverpool",
    "type": "NHS + Private",
    "contact": "0151 708 9988",
    "website": "liverpoolwomens.nhs.uk",
    "specialties": "Women's health, fertility, diagnostics",
    "notes": "Specialist consultant pathway"
  },
  {
    "name": "The Clatterbridge Cancer Centre Private Pathways",
    "area": "Merseyside",
    "town": "Liverpool",
    "type": "NHS + Private Specialist",
    "contact": "0151 556 5000",
    "website": "clatterbridgecc.nhs.uk",
    "specialties": "Cancer, oncology, chemotherapy, radiotherapy",
    "notes": "Specialist oncology route"
  },
  {
    "name": "Liverpool University Hospitals Private Pathways",
    "area": "Merseyside",
    "town": "Liverpool",
    "type": "NHS + Private",
    "contact": "0151 706 2000",
    "website": "liverpoolft.nhs.uk",
    "specialties": "Diagnostics, imaging, specialist medicine",
    "notes": "NHS consultant/private route"
  },
  {
    "name": "Spire Norwich Hospital",
    "area": "Norfolk",
    "town": "Norwich",
    "type": "Private Hospital - Spire",
    "contact": "01603 456181",
    "website": "spirehealthcare.com",
    "specialties": "Imaging, diagnostics, surgery, orthopaedics, outpatients",
    "notes": "Useful consultant and radiology route"
  },
  {
    "name": "Nuffield Health Norwich Hospital",
    "area": "Norfolk",
    "town": "Norwich",
    "type": "Private Hospital - Nuffield",
    "contact": "01603 456181",
    "website": "nuffieldhealth.com",
    "specialties": "Surgery, diagnostics, imaging, outpatient services",
    "notes": "Private referral pathway"
  },
  {
    "name": "Norfolk and Norwich University Hospital Private Pathways",
    "area": "Norfolk",
    "town": "Norwich",
    "type": "NHS + Private",
    "contact": "01603 286286",
    "website": "nnuh.nhs.uk",
    "specialties": "Specialists, imaging, diagnostics, surgery",
    "notes": "NHS consultant/private route"
  },
  {
    "name": "Queen Elizabeth Hospital King's Lynn Private Pathways",
    "area": "Norfolk",
    "town": "King's Lynn",
    "type": "NHS + Private",
    "contact": "01553 613613",
    "website": "qehkl.nhs.uk",
    "specialties": "Diagnostics, imaging, outpatient specialties",
    "notes": "Useful secretary route"
  },
  {
    "name": "Nuffield Health York Hospital",
    "area": "North Yorkshire",
    "town": "York",
    "type": "Private Hospital - Nuffield",
    "contact": "01904 715000",
    "website": "nuffieldhealth.com",
    "specialties": "Outpatients, imaging, diagnostics, surgery, orthopaedics",
    "notes": "Useful for consultant secretaries, admissions and imaging bookings"
  },
  {
    "name": "York Hospital Private Patient Pathways",
    "area": "North Yorkshire",
    "town": "York",
    "type": "NHS + Private",
    "contact": "01904 631313",
    "website": "yorkhospitals.nhs.uk",
    "specialties": "Specialists, diagnostics, imaging, surgery",
    "notes": "NHS consultant/private patient route"
  },
  {
    "name": "Harrogate District Hospital Private Pathways",
    "area": "North Yorkshire",
    "town": "Harrogate",
    "type": "NHS + Private",
    "contact": "01423 885959",
    "website": "hdft.nhs.uk",
    "specialties": "Diagnostics, outpatient specialties, imaging",
    "notes": "Useful consultant secretary pathway"
  },
  {
    "name": "InHealth North Yorkshire Diagnostics",
    "area": "North Yorkshire",
    "town": "Countywide",
    "type": "Diagnostics Provider",
    "contact": "0333 202 0300",
    "website": "inhealthgroup.com",
    "specialties": "MRI, CT, ultrasound services",
    "notes": "Useful imaging route"
  },
  {
    "name": "Three Shires Hospital",
    "area": "Northamptonshire",
    "town": "Northampton",
    "type": "Private - Circle",
    "contact": "01604 620311",
    "website": "circlehealthgroup.co.uk",
    "specialties": "Imaging, Outpatients, Surgery, Orthopaedics",
    "notes": "Large consultant base"
  },
  {
    "name": "Woodland Hospital",
    "area": "Northamptonshire",
    "town": "Kettering",
    "type": "Private - Ramsay",
    "contact": "01536 210019",
    "website": "ramsayhealth.co.uk",
    "specialties": "Orthopaedics, Surgery, Diagnostics",
    "notes": "Admissions/referrals"
  },
  {
    "name": "Northampton General Private Patients",
    "area": "Northamptonshire",
    "town": "Northampton",
    "type": "NHS + Private",
    "contact": "01604 634700",
    "website": "ngh.nhs.uk",
    "specialties": "Consultants, diagnostics, surgery",
    "notes": "NHS private patient route"
  },
  {
    "name": "Kettering General Private Patients",
    "area": "Northamptonshire",
    "town": "Kettering",
    "type": "NHS + Private",
    "contact": "01536 492000",
    "website": "kgh.nhs.uk",
    "specialties": "Outpatients, diagnostics, imaging",
    "notes": "Consultant secretary route"
  },
  {
    "name": "Northumbria Healthcare Private Pathways",
    "area": "Northumberland",
    "town": "Cramlington / Northumberland",
    "type": "NHS + Private",
    "contact": "0344 811 8111",
    "website": "northumbria.nhs.uk",
    "specialties": "Consultants, diagnostics, surgery, imaging",
    "notes": "NHS/private consultant route"
  },
  {
    "name": "Northumbria Specialist Emergency Care Hospital",
    "area": "Northumberland",
    "town": "Cramlington",
    "type": "NHS + Private Pathways",
    "contact": "0344 811 8111",
    "website": "northumbria.nhs.uk",
    "specialties": "Specialists, diagnostics, imaging",
    "notes": "Secretary routing via trust contacts"
  },
  {
    "name": "Wansbeck General Hospital Pathways",
    "area": "Northumberland",
    "town": "Ashington",
    "type": "NHS + Private Pathways",
    "contact": "0344 811 8111",
    "website": "northumbria.nhs.uk",
    "specialties": "Outpatients, diagnostics, imaging",
    "notes": "Useful referral route"
  },
  {
    "name": "InHealth Northumberland Diagnostics",
    "area": "Northumberland",
    "town": "Countywide",
    "type": "Diagnostics Provider",
    "contact": "0333 202 0300",
    "website": "inhealthgroup.com",
    "specialties": "MRI, CT, ultrasound",
    "notes": "Useful scan pathway"
  },
  {
    "name": "Spire Nottingham Hospital",
    "area": "Nottinghamshire",
    "town": "Nottingham",
    "type": "Private Hospital - Spire",
    "contact": "0115 937 7800",
    "website": "spirehealthcare.com",
    "specialties": "Imaging, diagnostics, surgery, orthopaedics, outpatients",
    "notes": "Useful for consultant secretaries and admissions"
  },
  {
    "name": "The Park Hospital",
    "area": "Nottinghamshire",
    "town": "Nottingham",
    "type": "Private Hospital - Circle Health",
    "contact": "0115 966 2000",
    "website": "circlehealthgroup.co.uk",
    "specialties": "MRI, CT, surgery, diagnostics, outpatient clinics",
    "notes": "Private referral and booking route"
  },
  {
    "name": "Nottingham University Hospitals Private Pathways",
    "area": "Nottinghamshire",
    "town": "Nottingham",
    "type": "NHS + Private",
    "contact": "0115 924 9924",
    "website": "nuh.nhs.uk",
    "specialties": "Specialist consultants, imaging, diagnostics",
    "notes": "NHS consultant/private route"
  },
  {
    "name": "Sherwood Forest Hospitals Private Pathways",
    "area": "Nottinghamshire",
    "town": "Mansfield",
    "type": "NHS + Private",
    "contact": "01623 622515",
    "website": "sfh-tr.nhs.uk",
    "specialties": "Diagnostics, imaging, outpatient care",
    "notes": "Secretary contact pathway"
  },
  {
    "name": "Nuffield Health Oxford The Manor",
    "area": "Oxfordshire",
    "town": "Oxford",
    "type": "Private - Nuffield",
    "contact": "01865 307777",
    "website": "nuffieldhealth.com",
    "specialties": "Imaging, Surgery, Orthopaedics, Oncology",
    "notes": "Consultant secretary pathway"
  },
  {
    "name": "The New Foscote Hospital",
    "area": "Oxfordshire",
    "town": "Banbury",
    "type": "Private",
    "contact": "01295 252281",
    "website": "thefoscotehospital.co.uk",
    "specialties": "Imaging, Surgery, Outpatients",
    "notes": "Private referrals"
  },
  {
    "name": "The Cherwell Hospital",
    "area": "Oxfordshire",
    "town": "Banbury",
    "type": "Private - Ramsay",
    "contact": "01295 755000",
    "website": "ramsayhealth.co.uk",
    "specialties": "Diagnostics, Surgery, Outpatients",
    "notes": "Bookings and admissions"
  },
  {
    "name": "Oxford University Hospitals Private Healthcare",
    "area": "Oxfordshire",
    "town": "Oxford",
    "type": "NHS + Private",
    "contact": "01865 221473",
    "website": "ouh.nhs.uk",
    "specialties": "Cancer, Cardiac, Neurosurgery, Diagnostics",
    "notes": "NHS consultant private pathway"
  },
  {
    "name": "John Radcliffe Hospital Private Patients",
    "area": "Oxfordshire",
    "town": "Oxford",
    "type": "NHS + Private",
    "contact": "01865 741166",
    "website": "ouh.nhs.uk",
    "specialties": "Specialist medicine, imaging, surgery",
    "notes": "Useful tertiary referrals"
  },
  {
    "name": "Churchill Hospital Private Care",
    "area": "Oxfordshire",
    "town": "Oxford",
    "type": "NHS + Private",
    "contact": "01865 741841",
    "website": "ouh.nhs.uk",
    "specialties": "Cancer, renal, diagnostics",
    "notes": "Specialist consultants"
  },
  {
    "name": "Rutland Memorial Hospital Pathways",
    "area": "Rutland",
    "town": "Oakham",
    "type": "NHS Pathways",
    "contact": "01572 722552",
    "website": "leicspart.nhs.uk",
    "specialties": "Outpatients, diagnostics, community services",
    "notes": "Useful local routing; private care often via neighbouring counties"
  },
  {
    "name": "Leicester / Peterborough Private Referral Routes",
    "area": "Rutland",
    "town": "Regional links",
    "type": "Private Pathways",
    "contact": "",
    "website": "",
    "specialties": "Private hospitals accessed nearby",
    "notes": "Useful for Rutland patient referrals"
  },
  {
    "name": "InHealth Rutland Area Diagnostics",
    "area": "Rutland",
    "town": "Countywide",
    "type": "Diagnostics Provider",
    "contact": "0333 202 0300",
    "website": "inhealthgroup.com",
    "specialties": "MRI, CT, ultrasound options",
    "notes": "Useful imaging route"
  },
  {
    "name": "Nuffield Health Shrewsbury Hospital",
    "area": "Shropshire",
    "town": "Shrewsbury",
    "type": "Private Hospital - Nuffield",
    "contact": "01743 282500",
    "website": "nuffieldhealth.com",
    "specialties": "Surgery, diagnostics, imaging, outpatients",
    "notes": "Consultant secretary/admission pathway"
  },
  {
    "name": "The Shrewsbury and Telford Hospital Private Pathways",
    "area": "Shropshire",
    "town": "Shrewsbury/Telford",
    "type": "NHS + Private",
    "contact": "01743 261000",
    "website": "sath.nhs.uk",
    "specialties": "Specialists, diagnostics, imaging",
    "notes": "NHS consultant/private route"
  },
  {
    "name": "Robert Jones and Agnes Hunt Orthopaedic Hospital Private Care",
    "area": "Shropshire",
    "town": "Oswestry",
    "type": "NHS + Private Specialist",
    "contact": "01691 404000",
    "website": "rjah.nhs.uk",
    "specialties": "Orthopaedics, diagnostics, specialist surgery",
    "notes": "Excellent specialist referral route"
  },
  {
    "name": "InHealth Shropshire Diagnostics",
    "area": "Shropshire",
    "town": "Countywide",
    "type": "Diagnostics Provider",
    "contact": "0333 202 0300",
    "website": "inhealthgroup.com",
    "specialties": "MRI, CT, ultrasound",
    "notes": "Useful imaging pathway"
  },
  {
    "name": "Nuffield Health Taunton Hospital",
    "area": "Somerset",
    "town": "Taunton",
    "type": "Private Hospital - Nuffield",
    "contact": "01823 286991",
    "website": "nuffieldhealth.com",
    "specialties": "Outpatients, imaging, diagnostics, surgery, orthopaedics",
    "notes": "Useful for consultant secretaries, admissions and imaging referrals"
  },
  {
    "name": "Circle Bath Hospital",
    "area": "Somerset",
    "town": "Bath",
    "type": "Private Hospital - Circle Health",
    "contact": "01761 422222",
    "website": "circlehealthgroup.co.uk",
    "specialties": "MRI, CT, X-ray, surgery, diagnostics, outpatient clinics",
    "notes": "Useful private referral/admission route"
  },
  {
    "name": "Musgrove Park Hospital Private Pathways",
    "area": "Somerset",
    "town": "Taunton",
    "type": "NHS + Private",
    "contact": "01823 333444",
    "website": "somersetft.nhs.uk",
    "specialties": "Specialists, diagnostics, imaging, surgery",
    "notes": "NHS consultant/private route"
  },
  {
    "name": "Yeovil District Hospital Private Pathways",
    "area": "Somerset",
    "town": "Yeovil",
    "type": "NHS + Private",
    "contact": "01935 475122",
    "website": "somersetft.nhs.uk",
    "specialties": "Outpatients, diagnostics, imaging",
    "notes": "Useful secretary pathway"
  },
  {
    "name": "Thornbury Hospital",
    "area": "South Yorkshire",
    "town": "Sheffield",
    "type": "Private Hospital - Circle Health",
    "contact": "0114 266 1133",
    "website": "circlehealthgroup.co.uk",
    "specialties": "Imaging, diagnostics, surgery, orthopaedics, outpatients",
    "notes": "Consultant secretary and admissions route"
  },
  {
    "name": "Claremont Private Hospital",
    "area": "South Yorkshire",
    "town": "Sheffield",
    "type": "Private Hospital",
    "contact": "0114 263 2114",
    "website": "claremont-hospital.co.uk",
    "specialties": "MRI, diagnostics, surgery, outpatient services",
    "notes": "Useful referral and imaging route"
  },
  {
    "name": "Sheffield Teaching Hospitals Private Pathways",
    "area": "South Yorkshire",
    "town": "Sheffield",
    "type": "NHS + Private",
    "contact": "0114 243 4343",
    "website": "sth.nhs.uk",
    "specialties": "Specialists, imaging, diagnostics, surgery",
    "notes": "NHS consultant/private pathway"
  },
  {
    "name": "Doncaster Royal Infirmary Private Pathways",
    "area": "South Yorkshire",
    "town": "Doncaster",
    "type": "NHS + Private",
    "contact": "01302 366666",
    "website": "dbth.nhs.uk",
    "specialties": "Diagnostics, imaging, outpatient specialties",
    "notes": "Useful secretary route"
  },
  {
    "name": "Rowley Hall Hospital",
    "area": "Staffordshire",
    "town": "Stafford",
    "type": "Private Hospital - Ramsay",
    "contact": "01785 238661",
    "website": "ramsayhealth.co.uk",
    "specialties": "Surgery, diagnostics, imaging, outpatients",
    "notes": "Consultant/admission route"
  },
  {
    "name": "Nuffield Health North Staffordshire Hospital",
    "area": "Staffordshire",
    "town": "Newcastle-under-Lyme",
    "type": "Private Hospital - Nuffield",
    "contact": "01782 625431",
    "website": "nuffieldhealth.com",
    "specialties": "MRI, surgery, diagnostics, orthopaedics",
    "notes": "Useful consultant pathway"
  },
  {
    "name": "Royal Stoke University Hospital Private Pathways",
    "area": "Staffordshire",
    "town": "Stoke-on-Trent",
    "type": "NHS + Private",
    "contact": "01782 715444",
    "website": "uhnm.nhs.uk",
    "specialties": "Specialists, imaging, diagnostics",
    "notes": "NHS consultant/private route"
  },
  {
    "name": "County Hospital Stafford Private Pathways",
    "area": "Staffordshire",
    "town": "Stafford",
    "type": "NHS + Private",
    "contact": "01785 257731",
    "website": "uhnm.nhs.uk",
    "specialties": "Diagnostics, outpatient services",
    "notes": "Secretary referral route"
  },
  {
    "name": "Nuffield Health Ipswich Hospital",
    "area": "Suffolk",
    "town": "Ipswich",
    "type": "Private Hospital - Nuffield",
    "contact": "01473 279100",
    "website": "nuffieldhealth.com",
    "specialties": "Surgery, diagnostics, imaging, outpatient clinics",
    "notes": "Useful consultant secretary route"
  },
  {
    "name": "Ipswich Hospital Private Pathways",
    "area": "Suffolk",
    "town": "Ipswich",
    "type": "NHS + Private",
    "contact": "01473 712233",
    "website": "esneft.nhs.uk",
    "specialties": "Specialists, diagnostics, imaging",
    "notes": "NHS consultant pathway"
  },
  {
    "name": "West Suffolk Hospital Private Pathways",
    "area": "Suffolk",
    "town": "Bury St Edmunds",
    "type": "NHS + Private",
    "contact": "01284 713000",
    "website": "wsh.nhs.uk",
    "specialties": "Outpatients, diagnostics, imaging",
    "notes": "Useful referral pathway"
  },
  {
    "name": "InHealth Suffolk Diagnostics",
    "area": "Suffolk",
    "town": "Countywide",
    "type": "Diagnostics Provider",
    "contact": "0333 202 0300",
    "website": "inhealthgroup.com",
    "specialties": "MRI, CT, ultrasound routes",
    "notes": "Useful imaging contact"
  },
  {
    "name": "Nuffield Health Guildford Hospital",
    "area": "Surrey",
    "town": "Guildford",
    "type": "Private Hospital - Nuffield",
    "contact": "01483 555800",
    "website": "nuffieldhealth.com",
    "specialties": "Imaging, surgery, oncology, diagnostics, outpatients",
    "notes": "Consultant secretary/admissions route"
  },
  {
    "name": "Mount Alvernia Hospital",
    "area": "Surrey",
    "town": "Guildford",
    "type": "Private Hospital - Circle Health",
    "contact": "01483 570122",
    "website": "circlehealthgroup.co.uk",
    "specialties": "MRI, diagnostics, surgery, outpatient care",
    "notes": "Private referral route"
  },
  {
    "name": "Ashtead Hospital",
    "area": "Surrey",
    "town": "Ashtead",
    "type": "Private Hospital - Ramsay",
    "contact": "01372 221400",
    "website": "ramsayhealth.co.uk",
    "specialties": "Diagnostics, surgery, orthopaedics, imaging",
    "notes": "Admissions and consultant route"
  },
  {
    "name": "Royal Surrey Private Patient Pathways",
    "area": "Surrey",
    "town": "Guildford",
    "type": "NHS + Private",
    "contact": "01483 571122",
    "website": "royalsurrey.nhs.uk",
    "specialties": "Cancer, diagnostics, surgery, specialist consultants",
    "notes": "NHS private patient route"
  },
  {
    "name": "Nuffield Health Newcastle Hospital",
    "area": "Tyne and Wear",
    "town": "Newcastle",
    "type": "Private Hospital - Nuffield",
    "contact": "0191 281 6131",
    "website": "nuffieldhealth.com",
    "specialties": "Imaging, diagnostics, surgery, orthopaedics, outpatients",
    "notes": "Useful consultant secretary and admission route"
  },
  {
    "name": "Spire Washington Hospital",
    "area": "Tyne and Wear",
    "town": "Washington",
    "type": "Private Hospital - Spire",
    "contact": "0191 415 1272",
    "website": "spirehealthcare.com",
    "specialties": "Diagnostics, scans, surgery, outpatient clinics",
    "notes": "Useful imaging and referral pathway"
  },
  {
    "name": "Freeman Hospital Private Pathways",
    "area": "Tyne and Wear",
    "town": "Newcastle",
    "type": "NHS + Private",
    "contact": "0191 233 6161",
    "website": "newcastle-hospitals.nhs.uk",
    "specialties": "Cardiology, transplant, specialist surgery, diagnostics",
    "notes": "Specialist consultant/private route"
  },
  {
    "name": "Royal Victoria Infirmary Private Pathways",
    "area": "Tyne and Wear",
    "town": "Newcastle",
    "type": "NHS + Private",
    "contact": "0191 233 6161",
    "website": "newcastle-hospitals.nhs.uk",
    "specialties": "Specialists, imaging, outpatient care",
    "notes": "Secretary referral route"
  },
  {
    "name": "Nuffield Health Warwickshire Hospital",
    "area": "Warwickshire",
    "town": "Leamington Spa",
    "type": "Private Hospital - Nuffield",
    "contact": "01926 427971",
    "website": "nuffieldhealth.com",
    "specialties": "Diagnostics, imaging, surgery, outpatients",
    "notes": "Consultant/admissions pathway"
  },
  {
    "name": "The Meriden Hospital",
    "area": "Warwickshire",
    "town": "Coventry",
    "type": "Private Hospital - Circle Health",
    "contact": "02476 647000",
    "website": "circlehealthgroup.co.uk",
    "specialties": "MRI, CT, surgery, diagnostics, orthopaedics",
    "notes": "Useful consultant and imaging route"
  },
  {
    "name": "South Warwickshire NHS Private Pathways",
    "area": "Warwickshire",
    "town": "Warwick",
    "type": "NHS + Private",
    "contact": "01926 495321",
    "website": "swft.nhs.uk",
    "specialties": "Consultants, diagnostics, imaging",
    "notes": "NHS/private consultant route"
  },
  {
    "name": "George Eliot Hospital Private Pathways",
    "area": "Warwickshire",
    "town": "Nuneaton",
    "type": "NHS + Private",
    "contact": "02476 351351",
    "website": "geh.nhs.uk",
    "specialties": "Outpatients, imaging, diagnostics",
    "notes": "Useful secretary pathway"
  },
  {
    "name": "The Priory Hospital Birmingham",
    "area": "West Midlands",
    "town": "Birmingham",
    "type": "Private Hospital - Circle Health",
    "contact": "0121 440 2323",
    "website": "circlehealthgroup.co.uk",
    "specialties": "Imaging, surgery, cancer care, diagnostics",
    "notes": "Large consultant base and admissions route"
  },
  {
    "name": "Spire Little Aston Hospital",
    "area": "West Midlands",
    "town": "Sutton Coldfield",
    "type": "Private Hospital - Spire",
    "contact": "0121 353 2444",
    "website": "spirehealthcare.com",
    "specialties": "MRI, CT, surgery, outpatients",
    "notes": "Useful private referral route"
  },
  {
    "name": "HCA The Harborne Hospital",
    "area": "West Midlands",
    "town": "Birmingham",
    "type": "Private Hospital - HCA",
    "contact": "0121 468 3000",
    "website": "hcahealthcare.co.uk",
    "specialties": "Specialist private care, imaging, surgery, diagnostics",
    "notes": "Major consultant-led private pathway"
  },
  {
    "name": "Queen Elizabeth Hospital Birmingham Private Care",
    "area": "West Midlands",
    "town": "Birmingham",
    "type": "NHS + Private",
    "contact": "0121 371 2000",
    "website": "uhb.nhs.uk",
    "specialties": "Specialist surgery, cancer, imaging, diagnostics",
    "notes": "NHS tertiary consultant pathway"
  },
  {
    "name": "Nuffield Health Chichester Hospital",
    "area": "West Sussex",
    "town": "Chichester",
    "type": "Private Hospital - Nuffield",
    "contact": "01243 530600",
    "website": "nuffieldhealth.com",
    "specialties": "Surgery, diagnostics, imaging, outpatient clinics",
    "notes": "Consultant secretary route"
  },
  {
    "name": "Goring Hall Hospital",
    "area": "West Sussex",
    "town": "Worthing",
    "type": "Private Hospital - Circle Health",
    "contact": "01903 506699",
    "website": "circlehealthgroup.co.uk",
    "specialties": "Imaging, diagnostics, surgery, orthopaedics",
    "notes": "Useful admissions/referral pathway"
  },
  {
    "name": "St Richard's Hospital Private Pathways",
    "area": "West Sussex",
    "town": "Chichester",
    "type": "NHS + Private",
    "contact": "01243 788122",
    "website": "uhsussex.nhs.uk",
    "specialties": "Diagnostics, specialists, imaging",
    "notes": "NHS/private consultant route"
  },
  {
    "name": "Worthing Hospital Private Pathways",
    "area": "West Sussex",
    "town": "Worthing",
    "type": "NHS + Private",
    "contact": "01903 205111",
    "website": "uhsussex.nhs.uk",
    "specialties": "Outpatients, diagnostics, imaging",
    "notes": "Secretary contact route"
  },
  {
    "name": "Spire Leeds Hospital",
    "area": "West Yorkshire",
    "town": "Leeds",
    "type": "Private Hospital - Spire",
    "contact": "0113 269 3939",
    "website": "spirehealthcare.com",
    "specialties": "Diagnostics, imaging, surgery, outpatients",
    "notes": "Consultant and admissions route"
  },
  {
    "name": "Nuffield Health Leeds Hospital",
    "area": "West Yorkshire",
    "town": "Leeds",
    "type": "Private Hospital - Nuffield",
    "contact": "0113 388 2000",
    "website": "nuffieldhealth.com",
    "specialties": "MRI, surgery, diagnostics, specialist clinics",
    "notes": "Useful secretary pathway"
  },
  {
    "name": "Leeds Teaching Hospitals Private Pathways",
    "area": "West Yorkshire",
    "town": "Leeds",
    "type": "NHS + Private",
    "contact": "0113 243 3144",
    "website": "leedsth.nhs.uk",
    "specialties": "Specialists, imaging, diagnostics, surgery",
    "notes": "NHS consultant/private route"
  },
  {
    "name": "Bradford Teaching Hospitals Private Pathways",
    "area": "West Yorkshire",
    "town": "Bradford",
    "type": "NHS + Private",
    "contact": "01274 542200",
    "website": "bradfordhospitals.nhs.uk",
    "specialties": "Diagnostics, imaging, outpatient specialties",
    "notes": "Useful referral route"
  },
  {
    "name": "New Hall Hospital",
    "area": "Wiltshire",
    "town": "Salisbury",
    "type": "Private Hospital - Ramsay",
    "contact": "01722 422333",
    "website": "ramsayhealth.co.uk",
    "specialties": "Surgery, diagnostics, imaging, orthopaedics, outpatients",
    "notes": "Useful for consultant secretaries, referrals and admissions"
  },
  {
    "name": "Sulis Hospital Bath",
    "area": "Wiltshire / Bath area",
    "town": "Bath",
    "type": "Independent Hospital",
    "contact": "01761 422288",
    "website": "sulishospital.com",
    "specialties": "Diagnostics, surgery, imaging, outpatient clinics",
    "notes": "Useful regional private pathway"
  },
  {
    "name": "Great Western Hospital Private Pathways",
    "area": "Wiltshire",
    "town": "Swindon",
    "type": "NHS + Private",
    "contact": "01793 604020",
    "website": "gwh.nhs.uk",
    "specialties": "Consultants, diagnostics, imaging, surgery",
    "notes": "NHS/private consultant route"
  },
  {
    "name": "Salisbury District Hospital Private Pathways",
    "area": "Wiltshire",
    "town": "Salisbury",
    "type": "NHS + Private",
    "contact": "01722 336262",
    "website": "salisbury.nhs.uk",
    "specialties": "Specialists, imaging, diagnostics",
    "notes": "Useful secretary route"
  },
  {
    "name": "The Droitwich Spa Hospital",
    "area": "Worcestershire",
    "town": "Droitwich",
    "type": "Private Hospital",
    "contact": "01905 793333",
    "website": "bmi/circlehealthgroup.co.uk",
    "specialties": "Surgery, diagnostics, imaging, outpatients",
    "notes": "Consultant referral and admissions route"
  },
  {
    "name": "Spire South Bank Hospital",
    "area": "Worcestershire",
    "town": "Worcester",
    "type": "Private Hospital - Spire",
    "contact": "01905 350003",
    "website": "spirehealthcare.com",
    "specialties": "MRI, diagnostics, surgery, outpatient clinics",
    "notes": "Useful imaging and consultant pathway"
  },
  {
    "name": "Worcestershire Royal Hospital Private Pathways",
    "area": "Worcestershire",
    "town": "Worcester",
    "type": "NHS + Private",
    "contact": "01905 763333",
    "website": "worcsacute.nhs.uk",
    "specialties": "Specialists, diagnostics, imaging",
    "notes": "NHS consultant/private route"
  },
  {
    "name": "Alexandra Hospital Private Pathways",
    "area": "Worcestershire",
    "town": "Redditch",
    "type": "NHS + Private",
    "contact": "01527 503030",
    "website": "worcsacute.nhs.uk",
    "specialties": "Outpatients, imaging, diagnostics",
    "notes": "Useful referral pathway"
  },
  {
    "name": "Ysbyty Gwynedd Private Pathways",
    "area": "Anglesey",
    "town": "Bangor (regional access)",
    "type": "NHS + Private Pathways",
    "contact": "01248 384384",
    "website": "bcuhb.nhs.wales",
    "specialties": "Diagnostics, imaging, consultants, outpatient services",
    "notes": "Main North Wales consultant/referral pathway"
  },
  {
    "name": "North Wales private referral routes",
    "area": "Anglesey",
    "town": "Regional",
    "type": "Private Access Route",
    "contact": "",
    "website": "",
    "specialties": "Private imaging and consultant services via North Wales providers",
    "notes": "Useful secretary referral route"
  },
  {
    "name": "Princess of Wales Hospital Private Pathways",
    "area": "Bridgend",
    "town": "Bridgend",
    "type": "NHS + Private Pathways",
    "contact": "01656 752752",
    "website": "ctmuhb.nhs.wales",
    "specialties": "Diagnostics, imaging, outpatient specialties",
    "notes": "NHS consultant/private route"
  },
  {
    "name": "Nuffield / Cardiff private referral links",
    "area": "Bridgend",
    "town": "Regional",
    "type": "Private Referral Route",
    "contact": "",
    "website": "nuffieldhealth.com",
    "specialties": "Private diagnostics and consultant pathways nearby",
    "notes": "Useful regional pathway"
  },
  {
    "name": "Ysbyty Ystrad Fawr Pathways",
    "area": "Caerphilly",
    "town": "Ystrad Mynach",
    "type": "NHS Pathways",
    "contact": "01443 802200",
    "website": "abuhb.nhs.wales",
    "specialties": "Outpatients, diagnostics, imaging",
    "notes": "Useful consultant routing"
  },
  {
    "name": "South Wales private provider links",
    "area": "Caerphilly",
    "town": "Regional",
    "type": "Private Referral Route",
    "contact": "",
    "website": "",
    "specialties": "Private imaging and consultant pathways",
    "notes": "Use nearby Newport/Cardiff private providers"
  },
  {
    "name": "Spire Cardiff Hospital",
    "area": "Cardiff",
    "town": "Cardiff",
    "type": "Private Hospital - Spire",
    "contact": "02920 735515",
    "website": "spirehealthcare.com",
    "specialties": "Diagnostics, imaging, surgery, outpatient clinics",
    "notes": "Consultant secretary/admission pathway"
  },
  {
    "name": "Nuffield Health Cardiff Bay Hospital",
    "area": "Cardiff",
    "town": "Cardiff Bay",
    "type": "Private Hospital - Nuffield",
    "contact": "02920 836700",
    "website": "nuffieldhealth.com",
    "specialties": "Surgery, diagnostics, imaging, outpatients",
    "notes": "Useful private referral route"
  },
  {
    "name": "University Hospital of Wales Private Pathways",
    "area": "Cardiff",
    "town": "Cardiff",
    "type": "NHS + Private",
    "contact": "02920 747747",
    "website": "cavuhb.nhs.wales",
    "specialties": "Specialist medicine, imaging, diagnostics",
    "notes": "NHS consultant/private route"
  },
  {
    "name": "Glangwili Hospital Pathways",
    "area": "Carmarthenshire",
    "town": "Carmarthen",
    "type": "NHS + Private Pathways",
    "contact": "01267 235151",
    "website": "hduhb.nhs.wales",
    "specialties": "Diagnostics, imaging, consultants",
    "notes": "NHS/private consultant route"
  },
  {
    "name": "Bronglais Hospital Pathways",
    "area": "Ceredigion",
    "town": "Aberystwyth",
    "type": "NHS + Private Pathways",
    "contact": "01970 623131",
    "website": "hduhb.nhs.wales",
    "specialties": "Diagnostics, imaging, outpatient specialties",
    "notes": "Consultant routing pathway"
  },
  {
    "name": "Glan Clwyd Hospital Private Pathways",
    "area": "Conwy",
    "town": "Bodelwyddan",
    "type": "NHS + Private",
    "contact": "01745 583910",
    "website": "bcuhb.nhs.wales",
    "specialties": "Specialists, diagnostics, imaging, surgery",
    "notes": "Consultant secretary pathway"
  },
  {
    "name": "North Wales Diagnostic Access",
    "area": "Conwy",
    "town": "Countywide",
    "type": "Diagnostics",
    "contact": "0333 202 0300",
    "website": "inhealthgroup.com",
    "specialties": "MRI, CT, ultrasound options",
    "notes": "Useful imaging route"
  },
  {
    "name": "Glan Clwyd Regional Pathways",
    "area": "Denbighshire",
    "town": "Rhyl area",
    "type": "NHS + Private Pathways",
    "contact": "01745 583910",
    "website": "bcuhb.nhs.wales",
    "specialties": "Consultants, diagnostics, imaging",
    "notes": "Useful NHS/private route"
  },
  {
    "name": "Deeside Community Hospital Pathways",
    "area": "Flintshire",
    "town": "Deeside",
    "type": "NHS Pathways",
    "contact": "03000 850000",
    "website": "bcuhb.nhs.wales",
    "specialties": "Outpatients, diagnostics, community services",
    "notes": "Regional referral pathway"
  },
  {
    "name": "Ysbyty Gwynedd",
    "area": "Gwynedd",
    "town": "Bangor",
    "type": "NHS + Private Pathways",
    "contact": "01248 384384",
    "website": "bcuhb.nhs.wales",
    "specialties": "Radiology, diagnostics, surgery, outpatient specialties",
    "notes": "NHS consultant/private pathway"
  },
  {
    "name": "Spire Yale Regional Access",
    "area": "Gwynedd",
    "town": "North Wales",
    "type": "Private Hospital Access",
    "contact": "01978 291306",
    "website": "spirehealthcare.com",
    "specialties": "Diagnostics, surgery, imaging",
    "notes": "Regional private referral option"
  },
  {
    "name": "Nevill Hall Hospital Pathways",
    "area": "Monmouthshire",
    "town": "Abergavenny",
    "type": "NHS + Private Pathways",
    "contact": "01873 732732",
    "website": "abuhb.nhs.wales",
    "specialties": "Diagnostics, outpatient specialties, imaging",
    "notes": "NHS consultant route"
  },
  {
    "name": "St Joseph's Hospital Regional Access",
    "area": "Monmouthshire",
    "town": "Newport area",
    "type": "Private Hospital Access",
    "contact": "01633 820300",
    "website": "stjosephshospital.co.uk",
    "specialties": "Private surgery, imaging, diagnostics",
    "notes": "Useful private referral route"
  },
  {
    "name": "Neath Port Talbot Hospital Pathways",
    "area": "Neath Port Talbot",
    "town": "Port Talbot",
    "type": "NHS + Private Pathways",
    "contact": "01639 862000",
    "website": "sbuhb.nhs.wales",
    "specialties": "Diagnostics, imaging, outpatient services",
    "notes": "Useful referral route"
  },
  {
    "name": "St Joseph's Hospital",
    "area": "Newport",
    "town": "Newport",
    "type": "Private Hospital",
    "contact": "01633 820300",
    "website": "stjosephshospital.co.uk",
    "specialties": "Diagnostics, imaging, surgery, orthopaedics, outpatients",
    "notes": "Major South Wales private referral route"
  },
  {
    "name": "Royal Gwent Hospital Private Pathways",
    "area": "Newport",
    "town": "Newport",
    "type": "NHS + Private",
    "contact": "01633 234234",
    "website": "abuhb.nhs.wales",
    "specialties": "Specialists, diagnostics, imaging",
    "notes": "NHS consultant route"
  },
  {
    "name": "Withybush Hospital Private Pathways",
    "area": "Pembrokeshire",
    "town": "Haverfordwest",
    "type": "NHS + Private Pathways",
    "contact": "01437 764545",
    "website": "hduhb.nhs.wales",
    "specialties": "Diagnostics, imaging, outpatient specialties",
    "notes": "NHS consultant route"
  },
  {
    "name": "West Wales private referral routes",
    "area": "Pembrokeshire",
    "town": "Regional",
    "type": "Private Pathways",
    "contact": "",
    "website": "",
    "specialties": "Private diagnostics and consultant services",
    "notes": "Use regional private provider access"
  },
  {
    "name": "Powys Teaching Health Board Pathways",
    "area": "Powys",
    "town": "Countywide",
    "type": "NHS + Private Pathways",
    "contact": "01874 711661",
    "website": "pthb.nhs.wales",
    "specialties": "Diagnostics, outpatient pathways",
    "notes": "Often linked to neighbouring private hospitals"
  },
  {
    "name": "HMT Sancta Maria Hospital",
    "area": "Swansea",
    "town": "Swansea",
    "type": "Private Hospital",
    "contact": "01792 479040",
    "website": "hmtsanctamaria.org",
    "specialties": "MRI, CT, diagnostics, surgery, outpatients",
    "notes": "Useful consultant and imaging pathway"
  },
  {
    "name": "Singleton Hospital Private Pathways",
    "area": "Swansea",
    "town": "Swansea",
    "type": "NHS + Private",
    "contact": "01792 205666",
    "website": "sbuhb.nhs.wales",
    "specialties": "Specialists, diagnostics, imaging",
    "notes": "NHS/private route"
  },
  {
    "name": "Morriston Hospital Private Pathways",
    "area": "Swansea",
    "town": "Swansea",
    "type": "NHS + Private",
    "contact": "01792 702222",
    "website": "sbuhb.nhs.wales",
    "specialties": "Specialist surgery, diagnostics, imaging",
    "notes": "Consultant pathway"
  },
  {
    "name": "Aneurin Bevan Regional Pathways",
    "area": "Torfaen",
    "town": "Cwmbran area",
    "type": "NHS + Private Pathways",
    "contact": "01633 493100",
    "website": "abuhb.nhs.wales",
    "specialties": "Specialists, diagnostics, imaging",
    "notes": "Regional consultant pathway"
  },
  {
    "name": "University Hospital Llandough Private Pathways",
    "area": "Vale of Glamorgan",
    "town": "Llandough",
    "type": "NHS + Private",
    "contact": "02920 715171",
    "website": "cavuhb.nhs.wales",
    "specialties": "Specialists, diagnostics, imaging",
    "notes": "Consultant secretary pathway"
  },
  {
    "name": "Spire Cardiff Regional Access",
    "area": "Vale of Glamorgan",
    "town": "Cardiff area",
    "type": "Private Hospital Access",
    "contact": "02920 735515",
    "website": "spirehealthcare.com",
    "specialties": "Imaging, surgery, diagnostics",
    "notes": "Regional private referral route"
  },
  {
    "name": "Spire Yale Hospital",
    "area": "Wrexham",
    "town": "Wrexham",
    "type": "Private Hospital - Spire",
    "contact": "01978 291306",
    "website": "spirehealthcare.com",
    "specialties": "Diagnostics, imaging, surgery, outpatients",
    "notes": "Useful consultant secretary route"
  },
  {
    "name": "Wrexham Maelor Hospital Private Pathways",
    "area": "Wrexham",
    "town": "Wrexham",
    "type": "NHS + Private",
    "contact": "01978 291100",
    "website": "bcuhb.nhs.wales",
    "specialties": "Specialists, imaging, diagnostics",
    "notes": "NHS/private consultant route"
  },
  {
    "name": "Albyn Hospital",
    "area": "Aberdeen City",
    "town": "Aberdeen",
    "type": "Private Hospital - Circle Health",
    "contact": "01224 595993",
    "website": "circlehealthgroup.co.uk",
    "specialties": "Outpatients, imaging, diagnostics, surgery, orthopaedics",
    "notes": "Useful for consultant secretaries, admissions and imaging referrals"
  },
  {
    "name": "Aberdeen Royal Infirmary Private Pathways",
    "area": "Aberdeen City",
    "town": "Aberdeen",
    "type": "NHS + Private Pathways",
    "contact": "0345 456 6000",
    "website": "nhsgrampian.org",
    "specialties": "Specialists, diagnostics, imaging, surgery",
    "notes": "NHS consultant/private referral route"
  },
  {
    "name": "BMI/Circle Aberdeen Diagnostics",
    "area": "Aberdeen City",
    "town": "Aberdeen",
    "type": "Private Diagnostics",
    "contact": "01224 595993",
    "website": "circlehealthgroup.co.uk",
    "specialties": "MRI, CT, X-ray, ultrasound",
    "notes": "Useful radiology pathway"
  },
  {
    "name": "NHS Grampian Regional Private Pathways",
    "area": "Aberdeenshire",
    "town": "Countywide",
    "type": "NHS + Private Pathways",
    "contact": "0345 456 6000",
    "website": "nhsgrampian.org",
    "specialties": "Consultants, diagnostics, outpatient services",
    "notes": "Regional consultant secretary route"
  },
  {
    "name": "Albyn Hospital Regional Access",
    "area": "Aberdeenshire",
    "town": "Aberdeen area",
    "type": "Private Hospital Access",
    "contact": "01224 595993",
    "website": "circlehealthgroup.co.uk",
    "specialties": "Private imaging, surgery, consultant clinics",
    "notes": "Main private referral option for area"
  },
  {
    "name": "Ninewells Hospital Private Pathways",
    "area": "Angus",
    "town": "Dundee regional access",
    "type": "NHS + Private Pathways",
    "contact": "01382 660111",
    "website": "nhstayside.scot.nhs.uk",
    "specialties": "Specialists, diagnostics, imaging",
    "notes": "Regional NHS/private consultant pathway"
  },
  {
    "name": "Tayside private referral routes",
    "area": "Angus",
    "town": "Regional",
    "type": "Private Access Route",
    "contact": "",
    "website": "",
    "specialties": "Private diagnostics and consultant services nearby",
    "notes": "Useful referral pathway"
  },
  {
    "name": "NHS Highland Argyll & Bute Pathways",
    "area": "Argyll and Bute",
    "town": "Countywide",
    "type": "NHS + Private Pathways",
    "contact": "01463 704000",
    "website": "nhshighland.scot.nhs.uk",
    "specialties": "Diagnostics, outpatient services, consultant pathways",
    "notes": "Regional secretary route"
  },
  {
    "name": "Glasgow Private Hospital Referral Routes",
    "area": "Argyll and Bute",
    "town": "Regional",
    "type": "Private Access Route",
    "contact": "",
    "website": "",
    "specialties": "Private imaging, consultants and surgery access",
    "notes": "Often referred to Glasgow private providers"
  },
  {
    "name": "Fernbrae Hospital",
    "area": "Dundee City",
    "town": "Dundee",
    "type": "Private Hospital",
    "contact": "01382 549088",
    "website": "fern brae hospital / spirehealthcare.com",
    "specialties": "Private surgery, diagnostics, outpatient clinics",
    "notes": "Useful consultant secretary route"
  },
  {
    "name": "Ninewells Hospital Private Pathways",
    "area": "Dundee City",
    "town": "Dundee",
    "type": "NHS + Private Pathways",
    "contact": "01382 660111",
    "website": "nhstayside.scot.nhs.uk",
    "specialties": "Specialist medicine, surgery, imaging, diagnostics",
    "notes": "NHS consultant route"
  },
  {
    "name": "University Hospital Crosshouse Private Pathways",
    "area": "East Ayrshire",
    "town": "Kilmarnock",
    "type": "NHS + Private Pathways",
    "contact": "01563 521133",
    "website": "nhsaaa.net",
    "specialties": "Diagnostics, imaging, outpatient specialties",
    "notes": "Consultant/private route"
  },
  {
    "name": "East Lothian Community Hospital Pathways",
    "area": "East Lothian",
    "town": "Haddington",
    "type": "NHS Pathways",
    "contact": "0131 536 8300",
    "website": "nhslothian.scot",
    "specialties": "Diagnostics, outpatient clinics",
    "notes": "Regional private referrals via Edinburgh"
  },
  {
    "name": "Spire Murrayfield Hospital Edinburgh",
    "area": "Edinburgh",
    "town": "Edinburgh",
    "type": "Private Hospital - Spire",
    "contact": "0131 334 0363",
    "website": "spirehealthcare.com",
    "specialties": "MRI, CT, X-ray, diagnostics, surgery, orthopaedics, outpatient clinics",
    "notes": "Useful consultant secretary route, imaging and admissions"
  },
  {
    "name": "The Edinburgh Clinic",
    "area": "Edinburgh",
    "town": "Edinburgh",
    "type": "Private Clinic - Aspen Healthcare",
    "contact": "0131 447 2340",
    "website": "edinburghclinic.com",
    "specialties": "Diagnostics, imaging, ophthalmology, outpatient consultants",
    "notes": "Useful outpatient and scan pathway"
  },
  {
    "name": "Royal Infirmary of Edinburgh Private Pathways",
    "area": "Edinburgh",
    "town": "Edinburgh",
    "type": "NHS + Private Pathways",
    "contact": "0131 536 1000",
    "website": "nhslothian.scot",
    "specialties": "Specialist medicine, surgery, diagnostics, imaging",
    "notes": "NHS consultant/private referral route"
  },
  {
    "name": "Victoria Hospital Kirkcaldy Private Pathways",
    "area": "Fife",
    "town": "Kirkcaldy",
    "type": "NHS + Private Pathways",
    "contact": "01592 643355",
    "website": "nhsfife.org",
    "specialties": "Diagnostics, imaging, outpatient specialties",
    "notes": "Consultant/private pathway route"
  },
  {
    "name": "Spire / Edinburgh Private Referral Links",
    "area": "Fife",
    "town": "Regional",
    "type": "Private Access Route",
    "contact": "",
    "website": "",
    "specialties": "Private imaging and consultant services nearby",
    "notes": "Useful for private referrals"
  },
  {
    "name": "Nuffield Health Glasgow Hospital",
    "area": "Glasgow City",
    "town": "Glasgow",
    "type": "Private Hospital - Nuffield",
    "contact": "0141 334 9441",
    "website": "nuffieldhealth.com",
    "specialties": "Diagnostics, imaging, surgery, orthopaedics, outpatients",
    "notes": "Consultant secretaries, admissions and imaging referrals"
  },
  {
    "name": "Ross Hall Hospital",
    "area": "Glasgow City",
    "town": "Glasgow",
    "type": "Private Hospital - Circle Health",
    "contact": "0141 810 3151",
    "website": "circlehealthgroup.co.uk",
    "specialties": "MRI, CT, diagnostics, cancer care, surgery, outpatient clinics",
    "notes": "Major private referral hospital"
  },
  {
    "name": "Glasgow Royal Infirmary Private Pathways",
    "area": "Glasgow City",
    "town": "Glasgow",
    "type": "NHS + Private Pathways",
    "contact": "0141 211 4000",
    "website": "nhsggc.scot",
    "specialties": "Specialists, diagnostics, imaging",
    "notes": "NHS consultant pathway"
  },
  {
    "name": "Raigmore Hospital Private Pathways",
    "area": "Highland",
    "town": "Inverness",
    "type": "NHS + Private Pathways",
    "contact": "01463 704000",
    "website": "nhshighland.scot.nhs.uk",
    "specialties": "Consultants, diagnostics, imaging, outpatient specialties",
    "notes": "Main Highland consultant referral route"
  },
  {
    "name": "Kingsmills Hospital Private Healthcare",
    "area": "Highland",
    "town": "Inverness",
    "type": "Private Healthcare",
    "contact": "01463 257000",
    "website": "kingsmillshospital.co.uk",
    "specialties": "Private consultants, diagnostics and outpatient services",
    "notes": "Useful private referral pathway"
  },
  {
    "name": "Inverclyde Royal Hospital Private Pathways",
    "area": "Inverclyde",
    "town": "Greenock",
    "type": "NHS + Private Pathways",
    "contact": "01475 633777",
    "website": "nhsggc.scot",
    "specialties": "Diagnostics, imaging, outpatient specialties",
    "notes": "NHS consultant/private route"
  },
  {
    "name": "Glasgow private hospital access routes",
    "area": "Inverclyde",
    "town": "Regional",
    "type": "Private Access Route",
    "contact": "",
    "website": "",
    "specialties": "Ross Hall/Nuffield Glasgow access",
    "notes": "Useful nearby private referral pathway"
  },
  {
    "name": "Royal Infirmary Edinburgh Regional Access",
    "area": "Midlothian",
    "town": "Edinburgh area",
    "type": "NHS + Private Pathways",
    "contact": "0131 536 1000",
    "website": "nhslothian.scot",
    "specialties": "Specialists, diagnostics, imaging",
    "notes": "Main consultant pathway"
  },
  {
    "name": "Western Isles Hospital Pathways",
    "area": "Na h-Eileanan Siar",
    "town": "Stornoway",
    "type": "NHS Pathways",
    "contact": "01851 704704",
    "website": "wi h b.scot.nhs.uk",
    "specialties": "Diagnostics, outpatient services",
    "notes": "Regional specialist referral links"
  },
  {
    "name": "Ayrshire Central Hospital Pathways",
    "area": "North Ayrshire",
    "town": "Irvine",
    "type": "NHS Pathways",
    "contact": "01294 274191",
    "website": "nhsaaa.net",
    "specialties": "Diagnostics, outpatient services",
    "notes": "Regional referral route"
  },
  {
    "name": "University Hospital Monklands Private Pathways",
    "area": "North Lanarkshire",
    "town": "Airdrie",
    "type": "NHS + Private Pathways",
    "contact": "01236 748748",
    "website": "nhslanarkshire.scot.nhs.uk",
    "specialties": "Diagnostics, imaging, specialists",
    "notes": "Consultant secretary pathway"
  },
  {
    "name": "Lanarkshire Private Referral Routes",
    "area": "North Lanarkshire",
    "town": "Regional",
    "type": "Private Access Route",
    "contact": "",
    "website": "",
    "specialties": "Glasgow private hospitals and diagnostics",
    "notes": "Useful private referral option"
  },
  {
    "name": "The Balfour Hospital Pathways",
    "area": "Orkney Islands",
    "town": "Kirkwall",
    "type": "NHS Pathways",
    "contact": "01856 888000",
    "website": "ohb.scot.nhs.uk",
    "specialties": "Diagnostics, outpatient services",
    "notes": "Regional specialist referral links"
  },
  {
    "name": "Perth Royal Infirmary Private Pathways",
    "area": "Perth and Kinross",
    "town": "Perth",
    "type": "NHS + Private Pathways",
    "contact": "01738 623311",
    "website": "nhstayside.scot.nhs.uk",
    "specialties": "Diagnostics, imaging, outpatient specialties",
    "notes": "Consultant pathway"
  },
  {
    "name": "Borders General Hospital Private Pathways",
    "area": "Scottish Borders",
    "town": "Melrose",
    "type": "NHS + Private Pathways",
    "contact": "01896 826000",
    "website": "borders.scot.nhs.uk",
    "specialties": "Diagnostics, imaging, outpatient services",
    "notes": "Consultant secretary route"
  },
  {
    "name": "Gilbert Bain Hospital Pathways",
    "area": "Shetland Islands",
    "town": "Lerwick",
    "type": "NHS Pathways",
    "contact": "01595 743000",
    "website": "nhsshetland.scot",
    "specialties": "Diagnostics, outpatient services",
    "notes": "Regional referral route"
  },
  {
    "name": "University Hospital Ayr Private Pathways",
    "area": "South Ayrshire",
    "town": "Ayr",
    "type": "NHS + Private Pathways",
    "contact": "01292 610555",
    "website": "nhsaaa.net",
    "specialties": "Specialists, imaging, diagnostics",
    "notes": "NHS consultant pathway"
  },
  {
    "name": "University Hospital Hairmyres Private Pathways",
    "area": "South Lanarkshire",
    "town": "East Kilbride",
    "type": "NHS + Private Pathways",
    "contact": "01355 585000",
    "website": "nhslanarkshire.scot.nhs.uk",
    "specialties": "Specialists, diagnostics, imaging",
    "notes": "NHS/private consultant route"
  },
  {
    "name": "University Hospital Wishaw Private Pathways",
    "area": "South Lanarkshire",
    "town": "Wishaw",
    "type": "NHS + Private Pathways",
    "contact": "01698 361100",
    "website": "nhslanarkshire.scot.nhs.uk",
    "specialties": "Outpatients, imaging, diagnostics",
    "notes": "Useful secretary route"
  },
  {
    "name": "Forth Valley Royal Hospital Private Pathways",
    "area": "Stirling",
    "town": "Larbert area",
    "type": "NHS + Private Pathways",
    "contact": "01324 566000",
    "website": "nhsforthvalley.com",
    "specialties": "Specialists, diagnostics, imaging",
    "notes": "NHS consultant route"
  },
  {
    "name": "St John's Hospital Private Pathways",
    "area": "West Lothian",
    "town": "Livingston",
    "type": "NHS + Private Pathways",
    "contact": "01506 523000",
    "website": "nhslothian.scot",
    "specialties": "Diagnostics, imaging, consultants",
    "notes": "NHS/private consultant route"
  }
];
