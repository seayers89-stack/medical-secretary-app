// Veyn: CCSD private medical billing codes, sourced from the official CCSD fee schedule ("billing fee sheet with all codes.xlsx").
const BILLING_CODES = [
  {
    "code": "17160",
    "description": "Intensive Care - consultant daily care, when no operative anaesthesia performed",
    "chapter": "Investigations, simple procedures and consultation codes",
    "section": "Intensive Care Codes"
  },
  {
    "code": "17170",
    "description": "Professional attendance on (initiation of care of) patient requiring intensive care in an emergency up to 2 hours",
    "chapter": "Investigations, simple procedures and consultation codes",
    "section": "Intensive Care Codes"
  },
  {
    "code": "17180",
    "description": "Professional attendance on (initiation of care of) patient requiring intensive care in an emergency 2-3 hours",
    "chapter": "Investigations, simple procedures and consultation codes",
    "section": "Intensive Care Codes"
  },
  {
    "code": "17190",
    "description": "Professional attendance on (initiation of care of) patient requiring intensive care in an emergency over 3 hours",
    "chapter": "Investigations, simple procedures and consultation codes",
    "section": "Intensive Care Codes"
  },
  {
    "code": "20110",
    "description": "ECG (including reporting)",
    "chapter": "Investigations, simple procedures and consultation codes",
    "section": "Investigation Codes"
  },
  {
    "code": "20130",
    "description": "Exercise ECG (including base line 12 lead ECG and reporting)",
    "chapter": "Investigations, simple procedures and consultation codes",
    "section": "Investigation Codes"
  },
  {
    "code": "20132",
    "description": "Exercise or dobutamine stress echocardiography (including ECG and reporting)",
    "chapter": "Investigations, simple procedures and consultation codes",
    "section": "Investigation Codes"
  },
  {
    "code": "20140",
    "description": "24 hour ECG Holter (including reporting)",
    "chapter": "Investigations, simple procedures and consultation codes",
    "section": "Investigation Codes"
  },
  {
    "code": "20141",
    "description": "Continuous ambulatory ECG for up to 72 hours (including reporting)",
    "chapter": "Investigations, simple procedures and consultation codes",
    "section": "Investigation Codes"
  },
  {
    "code": "20142",
    "description": "Insertion of implantable ECG loop recorder",
    "chapter": "Investigations, simple procedures and consultation codes",
    "section": "Investigation Codes"
  },
  {
    "code": "20143",
    "description": "Removal of implantable ECG loop recorder",
    "chapter": "Investigations, simple procedures and consultation codes",
    "section": "Investigation Codes"
  },
  {
    "code": "20144",
    "description": "Continuous ambulatory ECG for over 72 hours and up to 7 days (including reporting)",
    "chapter": "Investigations, simple procedures and consultation codes",
    "section": "Investigation Codes"
  },
  {
    "code": "20150",
    "description": "Patch testing (inclusive of application, reading and reporting)",
    "chapter": "Investigations, simple procedures and consultation codes",
    "section": "Investigation Codes"
  },
  {
    "code": "20160",
    "description": "Phototesting",
    "chapter": "Investigations, simple procedures and consultation codes",
    "section": "Investigation Codes"
  },
  {
    "code": "20170",
    "description": "Blind challenge test for food allergy under medical supervision",
    "chapter": "Investigations, simple procedures and consultation codes",
    "section": "Investigation Codes"
  },
  {
    "code": "20210",
    "description": "Pure tone audiogram (air conduction) - including masking",
    "chapter": "Investigations, simple procedures and consultation codes",
    "section": "Investigation Codes"
  },
  {
    "code": "20220",
    "description": "Pure tone audiogram (air and bone conduction) - including masking",
    "chapter": "Investigations, simple procedures and consultation codes",
    "section": "Investigation Codes"
  },
  {
    "code": "20230",
    "description": "Impedance audiogram",
    "chapter": "Investigations, simple procedures and consultation codes",
    "section": "Investigation Codes"
  },
  {
    "code": "20240",
    "description": "Impedance audiogram as part of other procedure",
    "chapter": "Investigations, simple procedures and consultation codes",
    "section": "Investigation Codes"
  },
  {
    "code": "20300",
    "description": "Initial out-patient consultation - face to face",
    "chapter": "Investigations, simple procedures and consultation codes",
    "section": "Consultation Codes"
  },
  {
    "code": "20310",
    "description": "Follow-up out-patient consultation - face to face",
    "chapter": "Investigations, simple procedures and consultation codes",
    "section": "Consultation Codes"
  },
  {
    "code": "20320",
    "description": "Inpatient care",
    "chapter": "Investigations, simple procedures and consultation codes",
    "section": "Consultation Codes"
  },
  {
    "code": "20330",
    "description": "Inpatient consultation by 2nd specialist or for emergency",
    "chapter": "Investigations, simple procedures and consultation codes",
    "section": "Consultation Codes"
  },
  {
    "code": "20355",
    "description": "Initial out-patient consultation - remote",
    "chapter": "Investigations, simple procedures and consultation codes",
    "section": "Consultation Codes"
  },
  {
    "code": "20365",
    "description": "Follow-up out-patient consultation – remote",
    "chapter": "Investigations, simple procedures and consultation codes",
    "section": "Consultation Codes"
  },
  {
    "code": "20390",
    "description": "Initial neuropsychological assessment",
    "chapter": "Investigations, simple procedures and consultation codes",
    "section": "Consultation Codes"
  },
  {
    "code": "20395",
    "description": "Follow-up neuropsychological assessment",
    "chapter": "Investigations, simple procedures and consultation codes",
    "section": "Consultation Codes"
  },
  {
    "code": "22000",
    "description": "Routine electroencephalography (EEG) in adult or child aged over 5 (including reporting)",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Neurophysiological Procedures"
  },
  {
    "code": "22002",
    "description": "Routine electroencephalography (EEG) in child under 5 (including reporting)",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Neurophysiological Procedures"
  },
  {
    "code": "22003",
    "description": "Sleep Electroencephalography (EEG)",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Neurophysiological Procedures"
  },
  {
    "code": "22004",
    "description": "24 hour ambulatory electroencephalography (EEG) (including reporting)",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Neurophysiological Procedures"
  },
  {
    "code": "22005",
    "description": "24 hour video telemetry electroencephalography (EEG)  (including reporting)",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Neurophysiological Procedures"
  },
  {
    "code": "22011",
    "description": "Recording and reporting on evoked potential study",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Neurophysiological Procedures"
  },
  {
    "code": "22021",
    "description": "Anorectal physiology performed by consultant (including reporting)",
    "chapter": "Investigations, simple procedures and consultation codes",
    "section": "Investigation Codes"
  },
  {
    "code": "22022",
    "description": "Recording and reporting on electromyography and nerve conduction studies (EMG); CTS (Bilateral upper limb only) or peripheral neuropathy",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Neurophysiological Procedures"
  },
  {
    "code": "22023",
    "description": "Recording and reporting on electromyography and nerve conduction studies (EMG); Mononeuropathy (e.g. ulnar), Cx/Lumbar radiculopathy, Myopathy",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Neurophysiological Procedures"
  },
  {
    "code": "22024",
    "description": "Recording and reporting on electromyography and nerve conduction studies (EMG); Mononeuritis Multiplex, MND - AHC, Multiple Muscle Monitoring (e.g. Torticollis), Myasthenia Gravis (-SFEMG)",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Neurophysiological Procedures"
  },
  {
    "code": "22025",
    "description": "Recording and reporting on electromyography and nerve conduction studies (EMG); Myasthenia Gravis (+SFEMG)",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Neurophysiological Procedures"
  },
  {
    "code": "22028",
    "description": "Inpatient sleep study (polysomnography) including reporting",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Neurophysiological Procedures"
  },
  {
    "code": "22029",
    "description": "Home sleep study including reporting",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Neurophysiological Procedures"
  },
  {
    "code": "25000",
    "description": "Incision and drainage (not elsewhere covered)",
    "chapter": "Investigations, simple procedures and consultation codes",
    "section": "Simple Procedures"
  },
  {
    "code": "25010",
    "description": "Paravertebral block up to two levels (without X-ray control)",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Paraspinal Injections"
  },
  {
    "code": "25011",
    "description": "Paravertebral block up to two levels (under X-ray control)",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Paraspinal Injections"
  },
  {
    "code": "25012",
    "description": "Sacral root block (under x-ray control)",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Paraspinal Injections"
  },
  {
    "code": "25020",
    "description": "Intravenous regional sympathetic block (guanethidine block) - 1 Injection",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Sympathetic Nerves"
  },
  {
    "code": "25022",
    "description": "Stellate ganglion block (local anaesthetic) +/- image guidance",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Sympathetic Nerves"
  },
  {
    "code": "25030",
    "description": "Stellate ganglion block (neurolytic) +/- image guidance",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Sympathetic Nerves"
  },
  {
    "code": "25100",
    "description": "Coeliac plexus block, splanchnic nerve block, hypogastric block - diagnostic +/- image guidance",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Sympathetic Nerves"
  },
  {
    "code": "25110",
    "description": "Coeliac plexus block, splanchnic nerve block, hypogastric block - therapeutic +/- image guidance",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Sympathetic Nerves"
  },
  {
    "code": "25140",
    "description": "Intrathecal neurolysis",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Paraspinal Injections"
  },
  {
    "code": "25150",
    "description": "Trigeminal ganglion injection (local anaesthetic under x-ray control)",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Other Nerve Blocks"
  },
  {
    "code": "25160",
    "description": "Trigeminal ganglion radio frequency lesion (under x-ray control)",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Other Procedures"
  },
  {
    "code": "64300",
    "description": "Echocardiography  (including reporting) as sole procedure",
    "chapter": "Investigations, simple procedures and consultation codes",
    "section": "Investigation Codes"
  },
  {
    "code": "64301",
    "description": "Echocardiography including bubble contrast (including reporting) as sole procedure",
    "chapter": "Investigations, simple procedures and consultation codes",
    "section": "Investigation Codes"
  },
  {
    "code": "64302",
    "description": "Transoesophageal echocardiography (including reporting) (as sole procedure)",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Other"
  },
  {
    "code": "A0110",
    "description": "Hemispherotomy",
    "chapter": "Brain, Cranium and Other Intracranial Organs",
    "section": "Brain"
  },
  {
    "code": "A0180",
    "description": "Excision of abscess of brain",
    "chapter": "Brain, Cranium and Other Intracranial Organs",
    "section": "Brain"
  },
  {
    "code": "A0200",
    "description": "Excision of lesion of tissue of brain",
    "chapter": "Brain, Cranium and Other Intracranial Organs",
    "section": "Brain"
  },
  {
    "code": "A0260",
    "description": "Excision of arteriovenous malformation from vessels of brain",
    "chapter": "Brain, Cranium and Other Intracranial Organs",
    "section": "Vessels"
  },
  {
    "code": "A0280",
    "description": "Awake craniotomy with ablation of lesion of brain +/- cortical mapping/stereotaxy",
    "chapter": "Brain, Cranium and Other Intracranial Organs",
    "section": "Brain"
  },
  {
    "code": "A0310",
    "description": "Stereotactic biopsy of lesion or tissue of brain",
    "chapter": "Brain, Cranium and Other Intracranial Organs",
    "section": "Brain"
  },
  {
    "code": "A0321",
    "description": "MRI-guided focused ultrasound (MRgFUS) thalamotomy for essential tremor",
    "chapter": "Brain, Cranium and Other Intracranial Organs",
    "section": "Brain"
  },
  {
    "code": "A0400",
    "description": "Biopsy of lesion of tissue of brain (including via a burr hole or stealth guided)",
    "chapter": "Brain, Cranium and Other Intracranial Organs",
    "section": "Brain"
  },
  {
    "code": "A0900",
    "description": "Implantation of neurostimulator to brain",
    "chapter": "Brain, Cranium and Other Intracranial Organs",
    "section": "Brain"
  },
  {
    "code": "A0901",
    "description": "Removal of neurostimulator from brain",
    "chapter": "Brain, Cranium and Other Intracranial Organs",
    "section": "Brain"
  },
  {
    "code": "A0920",
    "description": "Replacement of neurostimulator to brain",
    "chapter": "Brain, Cranium and Other Intracranial Organs",
    "section": "Brain"
  },
  {
    "code": "A0980",
    "description": "Deep brain stimulation",
    "chapter": "Brain, Cranium and Other Intracranial Organs",
    "section": "Brain"
  },
  {
    "code": "A1060",
    "description": "Fiducial placement",
    "chapter": "Brain, Cranium and Other Intracranial Organs",
    "section": "Brain"
  },
  {
    "code": "A1130",
    "description": "Insertion of intracranial pressure (ICP) monitoring device",
    "chapter": "Brain, Cranium and Other Intracranial Organs",
    "section": "Cranium"
  },
  {
    "code": "A1220",
    "description": "Creation of ventriculovascular anastomosis",
    "chapter": "Brain, Cranium and Other Intracranial Organs",
    "section": "Brain"
  },
  {
    "code": "A1240",
    "description": "Creation of ventriculoperitoneal shunt",
    "chapter": "Brain, Cranium and Other Intracranial Organs",
    "section": "Brain"
  },
  {
    "code": "A1250",
    "description": "Creation of subcutaneous cerebrospinal fluid reservoir",
    "chapter": "Brain, Cranium and Other Intracranial Organs",
    "section": "Brain"
  },
  {
    "code": "A1300",
    "description": "Maintenance of cerebroventricular shunt",
    "chapter": "Brain, Cranium and Other Intracranial Organs",
    "section": "Brain"
  },
  {
    "code": "A1301",
    "description": "Revision or replacement of cerebroventricular shunt",
    "chapter": "Brain, Cranium and Other Intracranial Organs",
    "section": "Brain"
  },
  {
    "code": "A1430",
    "description": "Removal of cerebroventricular shunt",
    "chapter": "Brain, Cranium and Other Intracranial Organs",
    "section": "Brain"
  },
  {
    "code": "A1440",
    "description": "Irrigation of cerebroventricular shunt",
    "chapter": "Brain, Cranium and Other Intracranial Organs",
    "section": "Brain"
  },
  {
    "code": "A1700",
    "description": "Therapeutic endoscopic operations on ventricle of brain (including examination and biopsy of lesion)",
    "chapter": "Brain, Cranium and Other Intracranial Organs",
    "section": "Brain"
  },
  {
    "code": "A2080",
    "description": "Ventricular puncture (as sole procedure)",
    "chapter": "Brain, Cranium and Other Intracranial Organs",
    "section": "Brain"
  },
  {
    "code": "A2210",
    "description": "Drainage of subarachnoid space of brain",
    "chapter": "Brain, Cranium and Other Intracranial Organs",
    "section": "Meninges"
  },
  {
    "code": "A2220",
    "description": "Puncture of cistern of brain",
    "chapter": "Brain, Cranium and Other Intracranial Organs",
    "section": "Brain"
  },
  {
    "code": "A2223",
    "description": "Cerebral angiogram",
    "chapter": "Brain, Cranium and Other Intracranial Organs",
    "section": "Brain"
  },
  {
    "code": "A2500",
    "description": "Intracranial transection of cranial nerve",
    "chapter": "Brain, Cranium and Other Intracranial Organs",
    "section": "Nerves"
  },
  {
    "code": "A2600",
    "description": "Other intracranial destruction of cranial nerve",
    "chapter": "Brain, Cranium and Other Intracranial Organs",
    "section": "Nerves"
  },
  {
    "code": "A2720",
    "description": "Proximal gastric vagotomy",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Stomach"
  },
  {
    "code": "A2730",
    "description": "Highly selective vagotomy",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Stomach"
  },
  {
    "code": "A2780",
    "description": "Vagotomy and pyloroplasty",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Stomach"
  },
  {
    "code": "A2781",
    "description": "Laparoscopic vagotomy/seromyotomy",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Oesophagus"
  },
  {
    "code": "A2900",
    "description": "Excision of lesion of cranial nerve (intracranial)",
    "chapter": "Brain, Cranium and Other Intracranial Organs",
    "section": "Nerves"
  },
  {
    "code": "A2952",
    "description": "Excision of acoustic neuroma (vestibular schwannoma) - tumours less than 2.5cm (performed by single surgeon)",
    "chapter": "Brain, Cranium and Other Intracranial Organs",
    "section": "Nerves"
  },
  {
    "code": "A2953",
    "description": "Excision of acoustic neuroma (vestibular schwannoma) - tumours more than 2.5cm or compressing brain stem (performed by single surgeon)",
    "chapter": "Brain, Cranium and Other Intracranial Organs",
    "section": "Nerves"
  },
  {
    "code": "A2954",
    "description": "Excision of acoustic neuroma (vestibular schwannoma) - tumours managed by combined oto-neurosurgical team irrespective of tumour size",
    "chapter": "Brain, Cranium and Other Intracranial Organs",
    "section": "Nerves"
  },
  {
    "code": "A3000",
    "description": "Repair of cranial nerve (intracranial)",
    "chapter": "Brain, Cranium and Other Intracranial Organs",
    "section": "Nerves"
  },
  {
    "code": "A3200",
    "description": "Decompression of cranial nerve (craniotomy)",
    "chapter": "Brain, Cranium and Other Intracranial Organs",
    "section": "Nerves"
  },
  {
    "code": "A3300",
    "description": "Implantation of neurostimulator to cranial nerve",
    "chapter": "Brain, Cranium and Other Intracranial Organs",
    "section": "Nerves"
  },
  {
    "code": "A3320",
    "description": "Replacement of neurostimulator to cranial nerve",
    "chapter": "Brain, Cranium and Other Intracranial Organs",
    "section": "Nerves"
  },
  {
    "code": "A3330",
    "description": "Removal of neurostimulator from cranial nerve",
    "chapter": "Brain, Cranium and Other Intracranial Organs",
    "section": "Nerves"
  },
  {
    "code": "A3380",
    "description": "Repetitive transcranial magnetic stimulation for depression",
    "chapter": "Brain, Cranium and Other Intracranial Organs",
    "section": "Brain"
  },
  {
    "code": "A3680",
    "description": "Excision of cerebellopontine angle tumour",
    "chapter": "Brain, Cranium and Other Intracranial Organs",
    "section": "Nerves"
  },
  {
    "code": "A3810",
    "description": "Excision of lesion of meninges of brain",
    "chapter": "Brain, Cranium and Other Intracranial Organs",
    "section": "Meninges"
  },
  {
    "code": "A3830",
    "description": "Operation for arachnoidal cyst",
    "chapter": "Brain, Cranium and Other Intracranial Organs",
    "section": "Meninges"
  },
  {
    "code": "A3900",
    "description": "Repair of dura",
    "chapter": "Brain, Cranium and Other Intracranial Organs",
    "section": "Meninges"
  },
  {
    "code": "A4010",
    "description": "Evacuation of extradural haematoma",
    "chapter": "Brain, Cranium and Other Intracranial Organs",
    "section": "Meninges"
  },
  {
    "code": "A4080",
    "description": "Craniotomy - post-operative haemorrhage",
    "chapter": "Brain, Cranium and Other Intracranial Organs",
    "section": "Vessels"
  },
  {
    "code": "A4110",
    "description": "Evacuation of subdural haematoma or abscess",
    "chapter": "Brain, Cranium and Other Intracranial Organs",
    "section": "Meninges"
  },
  {
    "code": "A4180",
    "description": "Subdural haemorrhage - tap",
    "chapter": "Brain, Cranium and Other Intracranial Organs",
    "section": "Meninges"
  },
  {
    "code": "A4280",
    "description": "Intracranial infection: burrhole",
    "chapter": "Brain, Cranium and Other Intracranial Organs",
    "section": "Cranium"
  },
  {
    "code": "A4400",
    "description": "Partial excision of spinal cord",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Cord"
  },
  {
    "code": "A4730",
    "description": "Percutaneous cordotomy of spinal cord",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Cord"
  },
  {
    "code": "A4820",
    "description": "Replacement of neurostimulator to spinal cord",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Cord"
  },
  {
    "code": "A4831",
    "description": "Trial of neurostimulator to spinal cord (as sole procedure) not at time of permanent implant",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Cord"
  },
  {
    "code": "A4832",
    "description": "Implantation of neurostimulator to spinal cord",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Cord"
  },
  {
    "code": "A4833",
    "description": "Implantation of neurostimulator to multifidus",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Cord"
  },
  {
    "code": "A4834",
    "description": "Removal of neurostimulator to multifidus",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Cord"
  },
  {
    "code": "A4841",
    "description": "Removal of neurostimulator from spinal cord (as sole procedure)",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Cord"
  },
  {
    "code": "A4842",
    "description": "Removal of neurostimulator from peripheral nerve (as a sole procedure)",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Cord"
  },
  {
    "code": "A4850",
    "description": "Implantation/removal of intrathecal drug delivery system",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Cord"
  },
  {
    "code": "A4860",
    "description": "Implantation/removal of epidural delivery system",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Cord"
  },
  {
    "code": "A4900",
    "description": "Repair of spinal myelomeningocele",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Cord"
  },
  {
    "code": "A5110",
    "description": "Excision of intradural lesion",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Cord"
  },
  {
    "code": "A5200",
    "description": "Epidural injection (cervical)",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Paraspinal Injections"
  },
  {
    "code": "A5210",
    "description": "Epidural injection (lumbar)",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Paraspinal Injections"
  },
  {
    "code": "A5211",
    "description": "Epidural injection (caudal)",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Paraspinal Injections"
  },
  {
    "code": "A5220",
    "description": "Epidural injection (thoracic)",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Paraspinal Injections"
  },
  {
    "code": "A5230",
    "description": "Epidurogram +/- epidural injection",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Paraspinal Injections"
  },
  {
    "code": "A5240",
    "description": "Epiduroplasty (Racz catheter or equivalent)",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Paraspinal Injections"
  },
  {
    "code": "A5300",
    "description": "Drainage of spinal canal (including insertion of shunt)",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Cord"
  },
  {
    "code": "A5410",
    "description": "Epidural blood patch",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Column (Including Intervertebral Disc)"
  },
  {
    "code": "A5420",
    "description": "Injection of therapeutic substance into CSF – as sole procedure",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Paraspinal Injections"
  },
  {
    "code": "A5430",
    "description": "Image-guided transforaminal injection of fibrin sealant",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Other Procedures"
  },
  {
    "code": "A5440",
    "description": "CT-guided epidural blood patch (single level)",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Other Procedures"
  },
  {
    "code": "A5441",
    "description": "CT-guided epidural blood patch (two level)",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Other Procedures"
  },
  {
    "code": "A5480",
    "description": "Intrathecal chemotherapy",
    "chapter": "Chemotherapy",
    "section": "Chemotherapy"
  },
  {
    "code": "A5530",
    "description": "Lumbar puncture (including spinal manometry)",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Cord"
  },
  {
    "code": "A5540",
    "description": "Spinal Angiogram",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Other Procedures"
  },
  {
    "code": "A5580",
    "description": "CSF infusion studies",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Cord"
  },
  {
    "code": "A5743",
    "description": "Medial branch block injection(s) +/- image guidance (including bilateral) CERVICAL",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Paraspinal Injections"
  },
  {
    "code": "A5744",
    "description": "Medial branch block injection(s) +/- image guidance (including bilateral) THORACIC",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Paraspinal Injections"
  },
  {
    "code": "A5745",
    "description": "Medial branch block injection(s) +/- image guidance (including bilateral) LUMBAR",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Paraspinal Injections"
  },
  {
    "code": "A5753",
    "description": "Nerve Root Block  +/- Image Guidance (Bilateral) CERVICAL",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Paraspinal Injections"
  },
  {
    "code": "A5754",
    "description": "Nerve Root Block +/- Image Guidance (Bilateral) THORACIC",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Paraspinal Injections"
  },
  {
    "code": "A5755",
    "description": "Nerve Root Block  +/- Image Guidance (Bilateral)  LUMBAR",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Paraspinal Injections"
  },
  {
    "code": "A5756",
    "description": "Nerve Root Block +/- Image Guidance (Bilateral) CAUDAL",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Paraspinal Injections"
  },
  {
    "code": "A5763",
    "description": "Neurolytic Root Block (Radiofrequency denervation, Thermocoagulation, Cryotherapy or Phenol, including Rhizolysis)  +/- Image Guidance (including Bilateral) CERVICAL",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Paraspinal Injections"
  },
  {
    "code": "A5764",
    "description": "Neurolytic Root Block (Radiofrequency denervation, Thermocoagulation, Cryotherapy or Phenol, including Rhizolysis) +/- Image Guidance (including Bilateral) THORACIC",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Paraspinal Injections"
  },
  {
    "code": "A5765",
    "description": "Neurolytic Root Block (Radiofrequency denervation, Thermocoagulation, Cryotherapy or Phenol, including Rhizolysis) +/- Image Guidance (including Bilateral) LUMBAR",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Paraspinal Injections"
  },
  {
    "code": "A5766",
    "description": "Neurolytic Root Block (Radiofrequency denervation, Thermocoagulation, Cryotherapy or Phenol, including Rhizolysis) +/- Image Guidance (including Bilateral) CAUDAL",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Paraspinal Injections"
  },
  {
    "code": "A5773",
    "description": "Facet joint injection(s) +/- Image Guidance (including Bilateral) CERVICAL",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Paraspinal Injections"
  },
  {
    "code": "A5774",
    "description": "Facet joint injection(s) +/- Image Guidance (including Bilateral) THORACIC",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Paraspinal Injections"
  },
  {
    "code": "A5775",
    "description": "Facet joint injection(s) +/- Image Guidance (including Bilateral) LUMBAR",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Paraspinal Injections"
  },
  {
    "code": "A5781",
    "description": "Selective Dorsal Rhizotomy (SDR)",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Nerve Roots"
  },
  {
    "code": "A5790",
    "description": "Sacroiliac joint injection under image guidance (and bilateral)",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Paraspinal Injections"
  },
  {
    "code": "A6012",
    "description": "Cryosurgery of minor peripheral nerve (e.g. Mortons Neuroma) +/- ultrasound guidance +/- bursa +/- nerve stimulation",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Peripheral Nerves"
  },
  {
    "code": "A6030",
    "description": "Transection of peripheral nerve for neuroma",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Peripheral Nerves"
  },
  {
    "code": "A6080",
    "description": "Neurectomy (major nerve)",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Peripheral Nerves"
  },
  {
    "code": "A6110",
    "description": "Excision of lesion of peripheral nerve (e.g. neurilemma)",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Peripheral Nerves"
  },
  {
    "code": "A6180",
    "description": "Excision of lesion  of major nerve",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Peripheral Nerves"
  },
  {
    "code": "A6300",
    "description": "Graft to peripheral nerve",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Peripheral Nerves"
  },
  {
    "code": "A6302",
    "description": "Graft to major nerve",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Peripheral Nerves"
  },
  {
    "code": "A6400",
    "description": "Repair of peripheral nerve",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Peripheral Nerves"
  },
  {
    "code": "A6402",
    "description": "Repair of major nerve",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Peripheral Nerves"
  },
  {
    "code": "A6510",
    "description": "Carpal tunnel release (open)",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Peripheral Nerves"
  },
  {
    "code": "A6530",
    "description": "Carpal tunnel release (endoscopic)",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Peripheral Nerves"
  },
  {
    "code": "A6540",
    "description": "Percutaneous carpal tunnel decompression +/- image guidance – unilateral",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Peripheral Nerves"
  },
  {
    "code": "A6570",
    "description": "Carpal tunnel release (endoscopic) - bilateral",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Peripheral Nerves"
  },
  {
    "code": "A6580",
    "description": "Carpal tunnel release (open) bilateral",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Peripheral Nerves"
  },
  {
    "code": "A6600",
    "description": "Release of entrapment of deeply placed peripheral nerve",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Peripheral Nerves"
  },
  {
    "code": "A6700",
    "description": "Release of entrapment of peripheral nerve",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Peripheral Nerves"
  },
  {
    "code": "A6710",
    "description": "Cubital tunnel release (open) (without transposition)",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Peripheral Nerves"
  },
  {
    "code": "A6711",
    "description": "Cubital tunnel release (open) bilateral (without transposition)",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Peripheral Nerves"
  },
  {
    "code": "A6740",
    "description": "Cubital tunnel release (endoscopic) (without transposition)",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Peripheral Nerves"
  },
  {
    "code": "A6750",
    "description": "Cubital tunnel release (endoscopic) bilateral (without transposition)",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Peripheral Nerves"
  },
  {
    "code": "A6810",
    "description": "Neurolysis and transposition of peripheral nerve (excludes carpal tunnel release)",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Peripheral Nerves"
  },
  {
    "code": "A6900",
    "description": "Revision of release of peripheral nerve",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Peripheral Nerves"
  },
  {
    "code": "A7010",
    "description": "Implantation of neurostimulator to peripheral nerve",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Peripheral Nerves"
  },
  {
    "code": "A7011",
    "description": "Trial of neurostimulator to peripheral nerve (as sole procedure) not at time of permanent implant",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Peripheral Nerves"
  },
  {
    "code": "A7012",
    "description": "Implantation of gastroelectrical stimulation (GES) for gastroparesis",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Stomach"
  },
  {
    "code": "A7013",
    "description": "Placement of tined lead neurostimulator not at time of permanent implant",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Peripheral Nerves"
  },
  {
    "code": "A7020",
    "description": "Replacement of neurostimulator to peripheral nerve",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Peripheral Nerves"
  },
  {
    "code": "A7070",
    "description": "Percutaneous electrical nerve stimulation (PENS)",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Other Procedures"
  },
  {
    "code": "A7081",
    "description": "Percutaneous posterior tibial nerve stimulation (PTNS) for overactive bladder (OAB) syndrome or faecal incontinence",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Bladder"
  },
  {
    "code": "A7085",
    "description": "Sacral nerve stimulation for faecal/urinary incontinence or constipation",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Peripheral Nerves"
  },
  {
    "code": "A7300",
    "description": "Radiofrequency (including pulsed denervation), cryoprobe or phenol for permanent lesion of named peripheral nerve +/- image guidance",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Peripheral Nerves"
  },
  {
    "code": "A7301",
    "description": "Radiofrequency denervation of knee (under image guidance)",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Other Nerve Blocks"
  },
  {
    "code": "A7302",
    "description": "Continuous nerve block +/- Image guidance (as sole procedure)",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Other Nerve Blocks"
  },
  {
    "code": "A7310",
    "description": "Biopsy of peripheral nerve",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Peripheral Nerves"
  },
  {
    "code": "A7340",
    "description": "Exploration and grafting of brachial plexus",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Peripheral Nerves"
  },
  {
    "code": "A7352",
    "description": "Local anaesthetic blockade of named major nerve or plexus +/- Image guidance (as sole procedure)",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Other Nerve Blocks"
  },
  {
    "code": "A7500",
    "description": "Lumbar sympathectomy : diagnostic (local anaesthetic under x-ray control)",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Sympathetic Nerves"
  },
  {
    "code": "A7510",
    "description": "Thorascopic cervical sympathectomy",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Sympathetic Nerves"
  },
  {
    "code": "A7520",
    "description": "Thoracic sympathectomy: diagnostic (local anaesthetic under x-ray control)",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Sympathetic Nerves"
  },
  {
    "code": "A7530",
    "description": "Laparoscopic lumbar sympathectomy",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Sympathetic Nerves"
  },
  {
    "code": "A7560",
    "description": "VATS sympathectomy - unilateral",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Video Assisted Thoracic Surgery (VATS)"
  },
  {
    "code": "A7561",
    "description": "VATS sympathectomy - bilateral",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Video Assisted Thoracic Surgery (VATS)"
  },
  {
    "code": "A7600",
    "description": "Lumbar sympathectomy : therapeutic (neurolytic under x-ray control)",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Sympathetic Nerves"
  },
  {
    "code": "A7620",
    "description": "Thoracic sympathectomy : therapeutic (neurolytic under x-ray control)",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Sympathetic Nerves"
  },
  {
    "code": "A7682",
    "description": "Presacral sympathectomy - diagnostic",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Sympathetic Nerves"
  },
  {
    "code": "A7683",
    "description": "Presacral sympathectomy - therapeutic",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Sympathetic Nerves"
  },
  {
    "code": "A8300",
    "description": "Electro-convulsive therapy",
    "chapter": "Brain, Cranium and Other Intracranial Organs",
    "section": "Other"
  },
  {
    "code": "A8460",
    "description": "Static single measurement of muscle compartment pressures (including reporting)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Connective Tissue/Tendon Muscle"
  },
  {
    "code": "A8470",
    "description": "Dynamic laboratory investigation involving measurement of muscle compartment pressures with manometer",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Connective Tissue/Tendon Muscle"
  },
  {
    "code": "A8480",
    "description": "Transtympanic electro-cochleography",
    "chapter": "Ear, Nose and Throat",
    "section": "Inner Ear"
  },
  {
    "code": "AA460",
    "description": "Destruction of branch of trigeminal nerve (neurolytic/RF/cryoprobe)",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Other Nerve Blocks"
  },
  {
    "code": "AA461",
    "description": "Balloon compression of trigeminal ganglion",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Other Procedures"
  },
  {
    "code": "AA489",
    "description": "Transtympanic chemical labyrinthectomy",
    "chapter": "Ear, Nose and Throat",
    "section": "Inner Ear"
  },
  {
    "code": "AA588",
    "description": "Coronary angioplasty standby team",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Other"
  },
  {
    "code": "B0100",
    "description": "Open hypophysectomy (including total)",
    "chapter": "Brain, Cranium and Other Intracranial Organs",
    "section": "Other"
  },
  {
    "code": "B0410",
    "description": "Transsphenoidal hypophysectomy (including total)",
    "chapter": "Brain, Cranium and Other Intracranial Organs",
    "section": "Other"
  },
  {
    "code": "B0610",
    "description": "Excision of pineal gland",
    "chapter": "Brain, Cranium and Other Intracranial Organs",
    "section": "Other"
  },
  {
    "code": "B0812",
    "description": "Total thyroidectomy/near total thyroidectomy +/- microlaryngoscopy/laryngoscopy",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Thyroid and Parathyroid Glands"
  },
  {
    "code": "B0813",
    "description": "Total thyroidectomy (including block dissection of lymph nodes)",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Thyroid and Parathyroid Glands"
  },
  {
    "code": "B0820",
    "description": "Bilateral subtotal thyroidectomy",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Thyroid and Parathyroid Glands"
  },
  {
    "code": "B0830",
    "description": "Unilateral thyroid lobectomy & isthmectomy +/-microlaryngoscopy/laryngoscopy",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Thyroid and Parathyroid Glands"
  },
  {
    "code": "B0850",
    "description": "Isthmectomy of thyroid gland",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Thyroid and Parathyroid Glands"
  },
  {
    "code": "B0860",
    "description": "Partial thyroidectomy (not elsewhere classified)",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Thyroid and Parathyroid Glands"
  },
  {
    "code": "B0900",
    "description": "Operations on aberrant thyroid tissue (including excision/removal of retrosternal goitre)",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Thyroid and Parathyroid Glands"
  },
  {
    "code": "B1012",
    "description": "Excision of thyroglossal cyst/tract",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Thyroid and Parathyroid Glands"
  },
  {
    "code": "B1220",
    "description": "Fine needle aspiration of thyroid gland",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Thyroid and Parathyroid Glands"
  },
  {
    "code": "B1230",
    "description": "Core biopsy of thyroid gland",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Thyroid and Parathyroid Glands"
  },
  {
    "code": "B1250",
    "description": "Thyroid : re-operation",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Thyroid and Parathyroid Glands"
  },
  {
    "code": "B1280",
    "description": "Ultrasound guided radiofrequency ablation of benign thyroid nodule",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Thyroid and Parathyroid Glands"
  },
  {
    "code": "B1281",
    "description": "Percutaneous ultrasound guided microwave ablation for benign thyroid nodules",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Thyroid and Parathyroid Glands"
  },
  {
    "code": "B1450",
    "description": "Parathyroidectomy",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Thyroid and Parathyroid Glands"
  },
  {
    "code": "B1680",
    "description": "Parathyroid : re-operation",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Thyroid and Parathyroid Glands"
  },
  {
    "code": "B1690",
    "description": "Mediastinal parathyroidectomy with sternotomy",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Thyroid and Parathyroid Glands"
  },
  {
    "code": "B1800",
    "description": "Thymectomy for myasthenia gravis/thymoma",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Mediastinum"
  },
  {
    "code": "B1802",
    "description": "Robotic assisted radical thymectomy",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Mediastinum"
  },
  {
    "code": "B1803",
    "description": "Robotic assisted subtotal thymectomy",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Mediastinum"
  },
  {
    "code": "B2222",
    "description": "Adrenalectomy - bilateral (open)",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Other Organs (Mainly Digestive)"
  },
  {
    "code": "B2223",
    "description": "Laparoscopic adrenalectomy - bilateral",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Other Organs (Mainly Digestive)"
  },
  {
    "code": "B2224",
    "description": "Robotic assisted adrenalectomy - bilateral",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Other Organs (Mainly Digestive)"
  },
  {
    "code": "B2232",
    "description": "Adrenalectomy - unilateral (open)",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Other Organs (Mainly Digestive)"
  },
  {
    "code": "B2233",
    "description": "Laparoscopic adrenalectomy - unilateral",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Other Organs (Mainly Digestive)"
  },
  {
    "code": "B2234",
    "description": "Robotic assisted  adrenalectomy - unilateral",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Other Organs (Mainly Digestive)"
  },
  {
    "code": "B2700",
    "description": "Subcutaneous mastectomy with immediate  implant",
    "chapter": "Breast",
    "section": "Reconstruction"
  },
  {
    "code": "B2710",
    "description": "Radical mastectomy (including block dissection)",
    "chapter": "Breast",
    "section": "Mastectomy (excluding Implant/Reconstruction)"
  },
  {
    "code": "B2742",
    "description": "Modified radical mastectomy (including lymph node sampling)",
    "chapter": "Breast",
    "section": "Mastectomy (excluding Implant/Reconstruction)"
  },
  {
    "code": "B2743",
    "description": "Modified radical mastectomy excluding lymph node sampling",
    "chapter": "Breast",
    "section": "Mastectomy (excluding Implant/Reconstruction)"
  },
  {
    "code": "B2744",
    "description": "Modified radical mastectomy (including lymph node clearance)",
    "chapter": "Breast",
    "section": "Mastectomy (excluding Implant/Reconstruction)"
  },
  {
    "code": "B2752",
    "description": "Subcutaneous mastectomy",
    "chapter": "Breast",
    "section": "Mastectomy (excluding Implant/Reconstruction)"
  },
  {
    "code": "B2760",
    "description": "Skin/nipple sparing mastectomy (including axillary node biopsy) - unilateral",
    "chapter": "Breast",
    "section": "Mastectomy (excluding Implant/Reconstruction)"
  },
  {
    "code": "B2761",
    "description": "Skin/nipple sparing mastectomy (including axillary node biopsy) - bilateral",
    "chapter": "Breast",
    "section": "Mastectomy (excluding Implant/Reconstruction)"
  },
  {
    "code": "B2780",
    "description": "Simple mastectomy (including axillary node biopsy) - unilateral",
    "chapter": "Breast",
    "section": "Mastectomy (excluding Implant/Reconstruction)"
  },
  {
    "code": "B2781",
    "description": "Simple mastectomy including axillary node biopsy - bilateral",
    "chapter": "Breast",
    "section": "Mastectomy (excluding Implant/Reconstruction)"
  },
  {
    "code": "B2782",
    "description": "Prophylactic mastectomy - unilateral",
    "chapter": "Breast",
    "section": "Mastectomy (excluding Implant/Reconstruction)"
  },
  {
    "code": "B2783",
    "description": "Prophylactic mastectomy - bilateral",
    "chapter": "Breast",
    "section": "Mastectomy (excluding Implant/Reconstruction)"
  },
  {
    "code": "B2784",
    "description": "Mastectomy for gynaecomastia - unilateral",
    "chapter": "Breast",
    "section": "Mastectomy (excluding Implant/Reconstruction)"
  },
  {
    "code": "B2785",
    "description": "Mastectomy for gynaecomastia - bilateral",
    "chapter": "Breast",
    "section": "Mastectomy (excluding Implant/Reconstruction)"
  },
  {
    "code": "B2800",
    "description": "Excision of breast lump / fibroadenoma",
    "chapter": "Breast",
    "section": "Excision/Biopsy Codes"
  },
  {
    "code": "B2818",
    "description": "Mastectomy and immediate reconstruction of breast using expandable prosthesis and acellular dermal matrix (ADM) - unilateral",
    "chapter": "Breast",
    "section": "Reconstruction"
  },
  {
    "code": "B2819",
    "description": "Mastectomy and immediate reconstruction of breast using expandable prosthesis and acellular dermal matrix (ADM) - bilateral",
    "chapter": "Breast",
    "section": "Reconstruction"
  },
  {
    "code": "B2820",
    "description": "Wide local excision of breast +/- local mobilisation of glandular breast tissue to fill surgical cavity",
    "chapter": "Breast",
    "section": "Excision/Biopsy Codes"
  },
  {
    "code": "B2830",
    "description": "Re-excision of lesion of breast if resection margins are not clear (as sole procedure)",
    "chapter": "Breast",
    "section": "Excision/Biopsy Codes"
  },
  {
    "code": "B2831",
    "description": "Re-excision of lesion of breast if resection Margins are not clear with local mobilisation",
    "chapter": "Breast",
    "section": "Excision/Biopsy Codes"
  },
  {
    "code": "B2880",
    "description": "Excision biopsy of breast lesion after localisation",
    "chapter": "Breast",
    "section": "Excision/Biopsy Codes"
  },
  {
    "code": "B2890",
    "description": "Ultrasound guided interstitial laser ablation of breast lesion",
    "chapter": "Breast",
    "section": "Excision/Biopsy Codes"
  },
  {
    "code": "B2912",
    "description": "Mastectomy and immediate reconstruction of breast using latissimus dorsi",
    "chapter": "Breast",
    "section": "Reconstruction"
  },
  {
    "code": "B2913",
    "description": "Reconstruction of breast using latissimus dorsi including implantation of prosthesis (including delayed reconstruction)",
    "chapter": "Breast",
    "section": "Reconstruction"
  },
  {
    "code": "B2914",
    "description": "Mastectomy followed by immediate Deep Inferior Epigastric Flap (DIEP) reconstruction - bilateral",
    "chapter": "Breast",
    "section": "Reconstruction"
  },
  {
    "code": "B2915",
    "description": "Reconstruction of breast using extended latissimus dorsi flap (including delayed reconstruction)",
    "chapter": "Breast",
    "section": "Reconstruction"
  },
  {
    "code": "B2916",
    "description": "Mastectomy and immediate reconstruction of breast using extended latissimus dorsi flap",
    "chapter": "Breast",
    "section": "Reconstruction"
  },
  {
    "code": "B2917",
    "description": "Reconstruction of breast using fixed prosthesis and acellular dermal matrix (ADM) (including delayed reconstruction) - unilateral",
    "chapter": "Breast",
    "section": "Reconstruction"
  },
  {
    "code": "B2918",
    "description": "Mastectomy and immediate reconstruction of breast using fixed prosthesis and acellular dermal matrix (ADM) - unilateral",
    "chapter": "Breast",
    "section": "Reconstruction"
  },
  {
    "code": "B2919",
    "description": "Mastectomy and immediate reconstruction of breast using fixed prosthesis and acellular dermal matrix (ADM) - bilateral",
    "chapter": "Breast",
    "section": "Reconstruction"
  },
  {
    "code": "B2921",
    "description": "Lumpectomy and immediate partial reconstruction of breast using pedicled perforator flap (eg. Lateral Intercostal Artery Perforator (LICAP) or Thoraco-Dorsal Artery Perforator (TDAP))",
    "chapter": "Breast",
    "section": "Reconstruction"
  },
  {
    "code": "B2922",
    "description": "Partial reconstruction of breast using pedicled perforator flap (eg. Lateral Intercostal Artery Perforator (LICAP) or Thoraco-Dorsal Artery Perforator (TDAP) including delayed reconstruction)",
    "chapter": "Breast",
    "section": "Reconstruction"
  },
  {
    "code": "B2927",
    "description": "Reconstruction of breast using fixed prosthesis and acellular dermal matrix (ADM) (including delayed reconstruction) - bilateral",
    "chapter": "Breast",
    "section": "Reconstruction"
  },
  {
    "code": "B2981",
    "description": "Local mobilisation of glandular breast tissue to fill surgical cavity",
    "chapter": "Breast",
    "section": "Reconstruction"
  },
  {
    "code": "B2984",
    "description": "Reconstruction of breast using pedicled TRAM (including delayed reconstruction)",
    "chapter": "Breast",
    "section": "Reconstruction"
  },
  {
    "code": "B2985",
    "description": "Reconstruction of breast using free TRAM (including delayed reconstruction)",
    "chapter": "Breast",
    "section": "Reconstruction"
  },
  {
    "code": "B2986",
    "description": "Reconstruction of breast using deep inferior epigastric perforator flap (DIEP) (including delayed reconstruction) - unilateral (single flap)",
    "chapter": "Breast",
    "section": "Reconstruction"
  },
  {
    "code": "B2987",
    "description": "Reconstruction of breast using transverse upper gracilis (TUG) flap (including delayed reconstruction and nipple reconstruction)",
    "chapter": "Breast",
    "section": "Reconstruction"
  },
  {
    "code": "B2988",
    "description": "Reconstruction of breast using ALT (anterolateral thigh) flap (including delayed reconstruction)",
    "chapter": "Breast",
    "section": "Reconstruction"
  },
  {
    "code": "B2989",
    "description": "Mastectomy followed by immediate Deep Inferior Epigastric Flap (DIEP) reconstruction",
    "chapter": "Breast",
    "section": "Reconstruction"
  },
  {
    "code": "B2990",
    "description": "Reconstruction of breast using deep inferior epigastric perforator flap (DIEP) with vascularised lymph node transfer (including delayed reconstruction) - unilateral",
    "chapter": "Breast",
    "section": "Reconstruction"
  },
  {
    "code": "B2991",
    "description": "Laparoscopic mobilisation of the greater omentum for reconstruction of breast (including delayed reconstruction)",
    "chapter": "Breast",
    "section": "Reconstruction"
  },
  {
    "code": "B2992",
    "description": "Reconstruction of breast using deep inferior epigastric perforator flap (DIEP) with vascularised lymph node transfer (including delayed reconstruction) - bilateral",
    "chapter": "Breast",
    "section": "Reconstruction"
  },
  {
    "code": "B2993",
    "description": "Reconstruction of breast using stacked deep inferior epigastric perforator flap (DIEP) (including delayed reconstruction) - bilateral (2 flaps per breast)",
    "chapter": "Breast",
    "section": "Reconstruction"
  },
  {
    "code": "B2994",
    "description": "Reconstruction of breast using stacked flap (including delayed reconstruction) not elsewhere classified - unilateral (2 flaps)",
    "chapter": "Breast",
    "section": "Reconstruction"
  },
  {
    "code": "B2995",
    "description": "Reconstruction of breast using stacked flap (including delayed reconstruction) not elsewhere classified - bilateral (2 flaps per breast)",
    "chapter": "Breast",
    "section": "Reconstruction"
  },
  {
    "code": "B2996",
    "description": "Reconstruction of breast using deep inferior epigastric perforator flap (DIEP) (including delayed reconstruction) - bilateral (single flap per breast)",
    "chapter": "Breast",
    "section": "Reconstruction"
  },
  {
    "code": "B2999",
    "description": "Reconstruction of breast using stacked deep inferior epigastric perforator flap (DIEP) (including delayed reconstruction) - unilateral (2 flaps)",
    "chapter": "Breast",
    "section": "Reconstruction"
  },
  {
    "code": "B3012",
    "description": "Mastectomy and immediate reconstruction of breast using expandable prosthesis - unilateral",
    "chapter": "Breast",
    "section": "Reconstruction"
  },
  {
    "code": "B3013",
    "description": "Mastectomy and immediate reconstruction of breast using fixed prosthesis - unilateral",
    "chapter": "Breast",
    "section": "Reconstruction"
  },
  {
    "code": "B3014",
    "description": "Reconstruction of breast using expandable prosthesis (including delayed reconstruction)",
    "chapter": "Breast",
    "section": "Reconstruction"
  },
  {
    "code": "B3015",
    "description": "Reconstruction of breast using fixed prosthesis (including delayed reconstruction)",
    "chapter": "Breast",
    "section": "Reconstruction"
  },
  {
    "code": "B3016",
    "description": "Mastectomy and immediate reconstruction of breast using fat transfer",
    "chapter": "Breast",
    "section": "Reconstruction"
  },
  {
    "code": "B3017",
    "description": "Reconstruction of breast using fat transfer (including delayed reconstruction)",
    "chapter": "Breast",
    "section": "Reconstruction"
  },
  {
    "code": "B3018",
    "description": "Revision reconstruction of breast using fat transfer",
    "chapter": "Breast",
    "section": "Reconstruction"
  },
  {
    "code": "B3020",
    "description": "Fat transfer, (as sole procedure, including extraction and transfer for volume adjustment following mastectomy and reconstruction)",
    "chapter": "Breast",
    "section": "Reconstruction"
  },
  {
    "code": "B3022",
    "description": "Adjustment or revision of flap harvest site following mastectomy and breast reconstruction, including liposuction and excision of scar (as sole procedure)",
    "chapter": "Breast",
    "section": "Reconstruction"
  },
  {
    "code": "B3032",
    "description": "Removal of prosthesis from breast (including capsulectomy)",
    "chapter": "Breast",
    "section": "Reconstruction"
  },
  {
    "code": "B3033",
    "description": "Simple removal of prosthesis from breast",
    "chapter": "Breast",
    "section": "Reconstruction"
  },
  {
    "code": "B3036",
    "description": "Removal and replacement of prosthesis into the breast (including capsulectomy) - unilateral",
    "chapter": "Breast",
    "section": "Reconstruction"
  },
  {
    "code": "B3037",
    "description": "Removal and replacement of prosthesis into the breast (including capsulectomy) - bilateral",
    "chapter": "Breast",
    "section": "Reconstruction"
  },
  {
    "code": "B3038",
    "description": "Removal and reinsertion of existing prosthesis into the breast (including capsulectomy) - unilateral",
    "chapter": "Breast",
    "section": "Reconstruction"
  },
  {
    "code": "B3039",
    "description": "Removal and reinsertion of existing prosthesis into the breast (including capsulectomy) - bilateral",
    "chapter": "Breast",
    "section": "Reconstruction"
  },
  {
    "code": "B3042",
    "description": "Mastectomy and immediate reconstruction of breast using expandable prosthesis - bilateral",
    "chapter": "Breast",
    "section": "Mastectomy (excluding Implant/Reconstruction)"
  },
  {
    "code": "B3043",
    "description": "Mastectomy and immediate reconstruction of breast using fixed prosthesis - bilateral",
    "chapter": "Breast",
    "section": "Mastectomy (excluding Implant/Reconstruction)"
  },
  {
    "code": "B3100",
    "description": "Reduction mammoplasty - unilateral",
    "chapter": "Breast",
    "section": "Other"
  },
  {
    "code": "B3110",
    "description": "Reduction mammoplasty - bilateral (greater than 500g each breast)",
    "chapter": "Breast",
    "section": "Other"
  },
  {
    "code": "B3120",
    "description": "Augmentation mammoplasty - unilateral",
    "chapter": "Breast",
    "section": "Other"
  },
  {
    "code": "B3121",
    "description": "Augmentation mammoplasty - bilateral",
    "chapter": "Breast",
    "section": "Other"
  },
  {
    "code": "B3130",
    "description": "Unilateral mastopexy (following reconstruction)",
    "chapter": "Breast",
    "section": "Other"
  },
  {
    "code": "B3132",
    "description": "Bilateral mastopexy (following reconstruction)",
    "chapter": "Breast",
    "section": "Other"
  },
  {
    "code": "B3140",
    "description": "Therapeutic mammoplasty for breast cancer",
    "chapter": "Breast",
    "section": "Other"
  },
  {
    "code": "B3180",
    "description": "Implantation of prosthesis into breast (as sole procedure)",
    "chapter": "Breast",
    "section": "Reconstruction"
  },
  {
    "code": "B3212",
    "description": "Percutaneous suction core biopsy",
    "chapter": "Breast",
    "section": "Excision/Biopsy Codes"
  },
  {
    "code": "B3220",
    "description": "Core biopsy of lesion of breast",
    "chapter": "Breast",
    "section": "Excision/Biopsy Codes"
  },
  {
    "code": "B3221",
    "description": "Core biopsy of lesion of breast – bilateral",
    "chapter": "Breast",
    "section": "Excision/Biopsy Codes"
  },
  {
    "code": "B3310",
    "description": "Drainage of breast abscess (including haematoma and seroma)",
    "chapter": "Breast",
    "section": "Other"
  },
  {
    "code": "B3440",
    "description": "Microdochotomy",
    "chapter": "Breast",
    "section": "Other"
  },
  {
    "code": "B3580",
    "description": "Nipple areola complex reconstruction +/- liposuction and fat transfer",
    "chapter": "Breast",
    "section": "Reconstruction"
  },
  {
    "code": "B3592",
    "description": "Micropigmentation (tattooing) of nipple areola complex",
    "chapter": "Breast",
    "section": "Other"
  },
  {
    "code": "B3593",
    "description": "Microdochectomy or mammodochectomy (Hadfield's procedure)",
    "chapter": "Breast",
    "section": "Other"
  },
  {
    "code": "B3594",
    "description": "Plastic procedures on nipple",
    "chapter": "Breast",
    "section": "Other"
  },
  {
    "code": "B3595",
    "description": "Excision of mammary fistula",
    "chapter": "Breast",
    "section": "Other"
  },
  {
    "code": "B3700",
    "description": "Removal of port or valve from permanent expandable breast prosthesis +/- image guidance",
    "chapter": "Breast",
    "section": "Reconstruction"
  },
  {
    "code": "B3810",
    "description": "Reconstruction of breast using SGAP (superior gluteal artery perforator) flap (including delayed reconstruction)",
    "chapter": "Breast",
    "section": "Reconstruction"
  },
  {
    "code": "BT210",
    "description": "Oral introduction of liquid radioactive agent for malignant thyroid tumour ablation",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Thyroid and Parathyroid Glands"
  },
  {
    "code": "BT211",
    "description": "Planning for insertion and removal of high dose rate radioactive agent (brachytherapy) into prostate tumour",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Prostate"
  },
  {
    "code": "BT212",
    "description": "Insertion of low dose radioactive agent (brachytherapy) into prostate tumour",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Prostate"
  },
  {
    "code": "BT213",
    "description": "Planning, insertion and removal of high dose rate radioactive treatment (brachytherapy) into prostate tumour",
    "chapter": "Radiotherapy",
    "section": "Radiotherapy"
  },
  {
    "code": "BT214",
    "description": "Planning and insertion of low dose rate radioactive treatment (brachytherapy) into prostate tumour",
    "chapter": "Radiotherapy",
    "section": "Radiotherapy"
  },
  {
    "code": "BT215",
    "description": "Planning for insertion of low dose rate radioactive treatment (brachytherapy) into prostate tumour",
    "chapter": "Radiotherapy",
    "section": "Radiotherapy"
  },
  {
    "code": "BT216",
    "description": "Oral introduction of liquid radioactive agent for benign thyroid disease",
    "chapter": "Radiotherapy",
    "section": "Radiotherapy"
  },
  {
    "code": "BT222",
    "description": "Insertion and removal of high dose radioactive agent (brachytherapy) into prostate tumour",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Prostate"
  },
  {
    "code": "BT251",
    "description": "Planning for insertion and removal of radioactive agent (brachytherapy) into rectal tumour",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Rectum/Anus"
  },
  {
    "code": "BT252",
    "description": "Insertion and removal of radioactive agent (brachytherapy) into rectal tumour",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Rectum/Anus"
  },
  {
    "code": "BT253",
    "description": "Low energy contact X ray brachytherapy (the Papillon technique) for early stage rectal cancer",
    "chapter": "Radiotherapy",
    "section": "Radiotherapy"
  },
  {
    "code": "BT260",
    "description": "Planning for insertion and removal of radioactive agent (brachytherapy)  into carcinoma of the oesophagus, bronchus or stomach",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Oesophagus"
  },
  {
    "code": "BT270",
    "description": "Insertion and removal of radioactive agent (brachytherapy) into carcinoma of the oesophagus, bronchus or stomach",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Oesophagus"
  },
  {
    "code": "BT281",
    "description": "Planning for insertion and removal of a radioactive agent (brachytherapy) into the vagina",
    "chapter": "Female Reproductive Organs",
    "section": "Vagina/Perineum"
  },
  {
    "code": "BT282",
    "description": "Insertion and removal of a radioactive agent (brachytherapy) into the vagina",
    "chapter": "Female Reproductive Organs",
    "section": "Vagina/Perineum"
  },
  {
    "code": "BT341",
    "description": "Planning for insertion and removal of a radioactive agent (brachytherapy) into cervix or other female intra-pelvic tissue",
    "chapter": "Female Reproductive Organs",
    "section": "Cervix Uteri"
  },
  {
    "code": "BT342",
    "description": "Insertion and removal of a radioactive agent (brachytherapy) into cervix or other female intra-pelvic tissue",
    "chapter": "Female Reproductive Organs",
    "section": "Cervix Uteri"
  },
  {
    "code": "C0110",
    "description": "Exenteration of orbit",
    "chapter": "Eye and Orbital Contents",
    "section": "Globe and Orbit"
  },
  {
    "code": "C0120",
    "description": "Enucleation/evisceration of eyeball",
    "chapter": "Eye and Orbital Contents",
    "section": "Globe and Orbit"
  },
  {
    "code": "C0122",
    "description": "Enucleation/evisceration of eyeball (with implant)",
    "chapter": "Eye and Orbital Contents",
    "section": "Globe and Orbit"
  },
  {
    "code": "C0212",
    "description": "Excision of lesion of orbit - anterior approach",
    "chapter": "Eye and Orbital Contents",
    "section": "Globe and Orbit"
  },
  {
    "code": "C0213",
    "description": "Excision of lesion of orbit - lateral orbitomy",
    "chapter": "Eye and Orbital Contents",
    "section": "Globe and Orbit"
  },
  {
    "code": "C0512",
    "description": "Simple reconstruction of socket (not including implant or graft)",
    "chapter": "Eye and Orbital Contents",
    "section": "Globe and Orbit"
  },
  {
    "code": "C0513",
    "description": "Reconstruction of socket with either implant or graft",
    "chapter": "Eye and Orbital Contents",
    "section": "Globe and Orbit"
  },
  {
    "code": "C0514",
    "description": "Reconstruction of socket with implant and graft",
    "chapter": "Eye and Orbital Contents",
    "section": "Globe and Orbit"
  },
  {
    "code": "C0610",
    "description": "Biopsy of lesion of orbit",
    "chapter": "Eye and Orbital Contents",
    "section": "Globe and Orbit"
  },
  {
    "code": "C0620",
    "description": "Drainage of orbit",
    "chapter": "Eye and Orbital Contents",
    "section": "Globe and Orbit"
  },
  {
    "code": "C0630",
    "description": "Decompression of orbit",
    "chapter": "Eye and Orbital Contents",
    "section": "Globe and Orbit"
  },
  {
    "code": "C0640",
    "description": "Removal of foreign body from orbit",
    "chapter": "Eye and Orbital Contents",
    "section": "Globe and Orbit"
  },
  {
    "code": "C0650",
    "description": "Exploration of orbit (as sole procedure)",
    "chapter": "Eye and Orbital Contents",
    "section": "Globe and Orbit"
  },
  {
    "code": "C0880",
    "description": "Retrobulbar irradiation for thyroid eye disease",
    "chapter": "Eye and Orbital Contents",
    "section": "Globe and Orbit"
  },
  {
    "code": "C1010",
    "description": "Excision of lesion of eyebrow",
    "chapter": "Eye and Orbital Contents",
    "section": "Eyebrow and Lid"
  },
  {
    "code": "C1040",
    "description": "Suture of eyebrow (as sole procedure)",
    "chapter": "Eye and Orbital Contents",
    "section": "Eyebrow and Lid"
  },
  {
    "code": "C1110",
    "description": "Excision of lesion of canthus",
    "chapter": "Eye and Orbital Contents",
    "section": "Eyebrow and Lid"
  },
  {
    "code": "C1130",
    "description": "Correction of epicanthus",
    "chapter": "Eye and Orbital Contents",
    "section": "Eyebrow and Lid"
  },
  {
    "code": "C1140",
    "description": "Correction of telecanthus",
    "chapter": "Eye and Orbital Contents",
    "section": "Eyebrow and Lid"
  },
  {
    "code": "C1150",
    "description": "Graft of skin to canthus",
    "chapter": "Eye and Orbital Contents",
    "section": "Eyebrow and Lid"
  },
  {
    "code": "C1160",
    "description": "Canthotomy",
    "chapter": "Eye and Orbital Contents",
    "section": "Eyebrow and Lid"
  },
  {
    "code": "C1210",
    "description": "Excision of lesion of eyelid",
    "chapter": "Eye and Orbital Contents",
    "section": "Eyebrow and Lid"
  },
  {
    "code": "C1230",
    "description": "Curettage/cryotherapy of lesion of eyelid",
    "chapter": "Eye and Orbital Contents",
    "section": "Eyebrow and Lid"
  },
  {
    "code": "C1320",
    "description": "Blepharoplasty - one eyelid",
    "chapter": "Eye and Orbital Contents",
    "section": "Eyebrow and Lid"
  },
  {
    "code": "C1340",
    "description": "Blepharoplasty - two eyelids",
    "chapter": "Eye and Orbital Contents",
    "section": "Eyebrow and Lid"
  },
  {
    "code": "C1341",
    "description": "Blepharoplasty - three or four eyelids",
    "chapter": "Eye and Orbital Contents",
    "section": "Eyebrow and Lid"
  },
  {
    "code": "C1420",
    "description": "Graft of skin to eyelid",
    "chapter": "Eye and Orbital Contents",
    "section": "Eyebrow and Lid"
  },
  {
    "code": "C1512",
    "description": "Correction of lower lid ectropion without graft/flap",
    "chapter": "Eye and Orbital Contents",
    "section": "Eyebrow and Lid"
  },
  {
    "code": "C1513",
    "description": "Correction of lower lid ectropion with graft/flap",
    "chapter": "Eye and Orbital Contents",
    "section": "Eyebrow and Lid"
  },
  {
    "code": "C1522",
    "description": "Correction of entropion - lower lid, including graft/flap",
    "chapter": "Eye and Orbital Contents",
    "section": "Eyebrow and Lid"
  },
  {
    "code": "C1523",
    "description": "Correction of entropion - upper lid, including graft/flap",
    "chapter": "Eye and Orbital Contents",
    "section": "Eyebrow and Lid"
  },
  {
    "code": "C1532",
    "description": "Correction of trichiasis by electrolysis/diathermy/cryotherapy/laser",
    "chapter": "Eye and Orbital Contents",
    "section": "Eyebrow and Lid"
  },
  {
    "code": "C1540",
    "description": "Surgical correction of trichiasis /upper lid entropion, including graft/flap",
    "chapter": "Eye and Orbital Contents",
    "section": "Eyebrow and Lid"
  },
  {
    "code": "C1640",
    "description": "Tarsorrhaphy",
    "chapter": "Eye and Orbital Contents",
    "section": "Eyebrow and Lid"
  },
  {
    "code": "C1700",
    "description": "Total reconstruction of eyelid - unilateral",
    "chapter": "Eye and Orbital Contents",
    "section": "Eyebrow and Lid"
  },
  {
    "code": "C1710",
    "description": "Suture of eyelid (laceration) (as sole procedure)",
    "chapter": "Eye and Orbital Contents",
    "section": "Eyebrow and Lid"
  },
  {
    "code": "C1810",
    "description": "Correction of ptosis of eyelid - simple (including tarsomullerectomy)",
    "chapter": "Eye and Orbital Contents",
    "section": "Eyebrow and Lid"
  },
  {
    "code": "C1812",
    "description": "Correction of ptosis of eyelid - complex",
    "chapter": "Eye and Orbital Contents",
    "section": "Eyebrow and Lid"
  },
  {
    "code": "C1813",
    "description": "Correction of ptosis of eyelid with autologous fascia lata",
    "chapter": "Eye and Orbital Contents",
    "section": "Eyebrow and Lid"
  },
  {
    "code": "C1818",
    "description": "Reverse ptosis repair of eyelid",
    "chapter": "Eye and Orbital Contents",
    "section": "Eyebrow and Lid"
  },
  {
    "code": "C1890",
    "description": "Insertion of weight to upper eyelid",
    "chapter": "Eye and Orbital Contents",
    "section": "Eyebrow and Lid"
  },
  {
    "code": "C2220",
    "description": "Biopsy of lesion of eyelid",
    "chapter": "Eye and Orbital Contents",
    "section": "Eyebrow and Lid"
  },
  {
    "code": "C2510",
    "description": "Canaliculo-dacryocysto-rhinostomy (including intubation)",
    "chapter": "Eye and Orbital Contents",
    "section": "Lacrimal System"
  },
  {
    "code": "C2520",
    "description": "Conjunctivo-dacryocysto-rhinostomy (including intubation)",
    "chapter": "Eye and Orbital Contents",
    "section": "Lacrimal System"
  },
  {
    "code": "C2540",
    "description": "Dacryocystorhinostomy (including insertion and later removal of tube)",
    "chapter": "Eye and Orbital Contents",
    "section": "Lacrimal System"
  },
  {
    "code": "C2542",
    "description": "Dacryocystorhinostomy (endoscopic/laser assisted) (including insertion and later removal of tube)",
    "chapter": "Eye and Orbital Contents",
    "section": "Lacrimal System"
  },
  {
    "code": "C2550",
    "description": "Lacrimal Intubation (as sole procedure)",
    "chapter": "Eye and Orbital Contents",
    "section": "Lacrimal System"
  },
  {
    "code": "C2610",
    "description": "Excision/Biopsy of lacrimal sac",
    "chapter": "Eye and Orbital Contents",
    "section": "Lacrimal System"
  },
  {
    "code": "C2640",
    "description": "Incision of lacrimal sac",
    "chapter": "Eye and Orbital Contents",
    "section": "Lacrimal System"
  },
  {
    "code": "C2650",
    "description": "Probing of nasolacrimal system +/- syringing and/or irrigation",
    "chapter": "Eye and Orbital Contents",
    "section": "Lacrimal System"
  },
  {
    "code": "C2910",
    "description": "Puncto-canaliculoplasty",
    "chapter": "Eye and Orbital Contents",
    "section": "Lacrimal System"
  },
  {
    "code": "C2920",
    "description": "Insertion of canalicular or punctal plugs",
    "chapter": "Eye and Orbital Contents",
    "section": "General"
  },
  {
    "code": "C3112",
    "description": "Surgical correction of squint - unilateral",
    "chapter": "Eye and Orbital Contents",
    "section": "Muscles"
  },
  {
    "code": "C3113",
    "description": "Surgical correction of squint - bilateral",
    "chapter": "Eye and Orbital Contents",
    "section": "Muscles"
  },
  {
    "code": "C3180",
    "description": "Revision of squint surgery",
    "chapter": "Eye and Orbital Contents",
    "section": "Muscles"
  },
  {
    "code": "C3530",
    "description": "Surgical correction of squint with adjustable sutures",
    "chapter": "Eye and Orbital Contents",
    "section": "Muscles"
  },
  {
    "code": "C3780",
    "description": "Injection of botulinum toxin into extraocular or periocular muscles",
    "chapter": "Eye and Orbital Contents",
    "section": "Muscles"
  },
  {
    "code": "C3910",
    "description": "Excision/biopsy of conjunctival lesion",
    "chapter": "Eye and Orbital Contents",
    "section": "Conjunctiva"
  },
  {
    "code": "C3920",
    "description": "Cauterisation (including cryotherapy) to conjunctival lesion",
    "chapter": "Eye and Orbital Contents",
    "section": "Conjunctiva"
  },
  {
    "code": "C3950",
    "description": "Radiotherapy to conjuctival lesion",
    "chapter": "Eye and Orbital Contents",
    "section": "Conjunctiva"
  },
  {
    "code": "C3960",
    "description": "Excision of pterygium",
    "chapter": "Eye and Orbital Contents",
    "section": "Cornea"
  },
  {
    "code": "C4010",
    "description": "Mucosal graft to conjunctiva",
    "chapter": "Eye and Orbital Contents",
    "section": "Conjunctiva"
  },
  {
    "code": "C4020",
    "description": "Removal of symblepharon +/- amniotic membrane transplant",
    "chapter": "Eye and Orbital Contents",
    "section": "Cornea"
  },
  {
    "code": "C4050",
    "description": "Suture of conjunctiva",
    "chapter": "Eye and Orbital Contents",
    "section": "Conjunctiva"
  },
  {
    "code": "C4100",
    "description": "Drainage of conjunctival cyst",
    "chapter": "Eye and Orbital Contents",
    "section": "Conjunctiva"
  },
  {
    "code": "C4340",
    "description": "Subconjunctival injection",
    "chapter": "Eye and Orbital Contents",
    "section": "Conjunctiva"
  },
  {
    "code": "C4350",
    "description": "Exploration of conjunctiva (including removal of foreign body)",
    "chapter": "Eye and Orbital Contents",
    "section": "Conjunctiva"
  },
  {
    "code": "C4420",
    "description": "Laser correction of refractive error following non-refractive ophthalmic surgery (PRK/LASIK/LASEK)",
    "chapter": "Eye and Orbital Contents",
    "section": "Cornea"
  },
  {
    "code": "C4421",
    "description": "Cosmetic laser correction of refractive error (PRK/LASIK/LASEK)",
    "chapter": "Eye and Orbital Contents",
    "section": "Cornea"
  },
  {
    "code": "C4520",
    "description": "Excision of lesion of cornea",
    "chapter": "Eye and Orbital Contents",
    "section": "Cornea"
  },
  {
    "code": "C4620",
    "description": "Lamellar graft (keratoplasty) to cornea",
    "chapter": "Eye and Orbital Contents",
    "section": "Cornea"
  },
  {
    "code": "C4630",
    "description": "Perforating graft (keratoplasty) to cornea",
    "chapter": "Eye and Orbital Contents",
    "section": "Cornea"
  },
  {
    "code": "C4640",
    "description": "Descemets stripping endothelial keratoplasty (DSEK)",
    "chapter": "Eye and Orbital Contents",
    "section": "Cornea"
  },
  {
    "code": "C4650",
    "description": "Revision of corneal graft",
    "chapter": "Eye and Orbital Contents",
    "section": "Cornea"
  },
  {
    "code": "C4690",
    "description": "Implantation of synthetic corneal rings for keratoconus (including INTACS)",
    "chapter": "Eye and Orbital Contents",
    "section": "Cornea"
  },
  {
    "code": "C4710",
    "description": "Repair of corneal wound",
    "chapter": "Eye and Orbital Contents",
    "section": "Cornea"
  },
  {
    "code": "C4730",
    "description": "Removal of corneal suture",
    "chapter": "Eye and Orbital Contents",
    "section": "Cornea"
  },
  {
    "code": "C4810",
    "description": "Removal of superficial corneal foreign body",
    "chapter": "Eye and Orbital Contents",
    "section": "Cornea"
  },
  {
    "code": "C4980",
    "description": "Tension sutures",
    "chapter": "Eye and Orbital Contents",
    "section": "Cornea"
  },
  {
    "code": "C5122",
    "description": "Chelation of cornea/photo therapeutic keratectomy",
    "chapter": "Eye and Orbital Contents",
    "section": "Cornea"
  },
  {
    "code": "C5131",
    "description": "Ultraviolet irradiation of riboflavin for epithelium off cross linking of corneal collagen",
    "chapter": "Eye and Orbital Contents",
    "section": "Cornea"
  },
  {
    "code": "C5132",
    "description": "Ultraviolet irradiation of riboflavin for epithelium on cross linking of corneal collagen",
    "chapter": "Eye and Orbital Contents",
    "section": "Cornea"
  },
  {
    "code": "C5180",
    "description": "Corneal scraping for culture",
    "chapter": "Eye and Orbital Contents",
    "section": "Cornea"
  },
  {
    "code": "C5190",
    "description": "Ex-vivo cultivated limbal stem cell allograft transplant",
    "chapter": "Eye and Orbital Contents",
    "section": "Cornea"
  },
  {
    "code": "C5300",
    "description": "Excision of lesion of sclera",
    "chapter": "Eye and Orbital Contents",
    "section": "Sclera"
  },
  {
    "code": "C5340",
    "description": "Insertion of tantalum marker ring",
    "chapter": "Eye and Orbital Contents",
    "section": "Sclera"
  },
  {
    "code": "C5432",
    "description": "Conventional retinal surgery (may include scleral buckling, injection of gas, drainage and retinopexy)",
    "chapter": "Eye and Orbital Contents",
    "section": "Retina"
  },
  {
    "code": "C5480",
    "description": "Removal of silicone oil",
    "chapter": "Eye and Orbital Contents",
    "section": "Retina"
  },
  {
    "code": "C5720",
    "description": "Repair of scleral laceration",
    "chapter": "Eye and Orbital Contents",
    "section": "Sclera"
  },
  {
    "code": "C5730",
    "description": "Scleral graft",
    "chapter": "Eye and Orbital Contents",
    "section": "Sclera"
  },
  {
    "code": "C5910",
    "description": "Iridocyclectomy",
    "chapter": "Eye and Orbital Contents",
    "section": "Iris and Anterior Chamber"
  },
  {
    "code": "C5920",
    "description": "Surgical iridectomy +/- biopsy",
    "chapter": "Eye and Orbital Contents",
    "section": "Iris and Anterior Chamber"
  },
  {
    "code": "C6010",
    "description": "Surgical trabeculectomy or other penetrating glaucoma procedures (including topical and local anaesthetic)",
    "chapter": "Eye and Orbital Contents",
    "section": "Iris and Anterior Chamber"
  },
  {
    "code": "C6011",
    "description": "Canaloplasty (of Schlemm’s Canal with microcatheter) (including topical and local anaesthetic)",
    "chapter": "Eye and Orbital Contents",
    "section": "Iris and Anterior Chamber"
  },
  {
    "code": "C6012",
    "description": "Canaloplasty (of Schlemm's Canal with microcatheter) combined with phacoemulsification of lens with implant \"Phaco-Canaloplasty\" (including topical or local anaesthetic)",
    "chapter": "Eye and Orbital Contents",
    "section": "Iris and Anterior Chamber"
  },
  {
    "code": "C6051",
    "description": "Aqueous shunt tube surgery for glaucoma (including topical or local anaesthetic) including donor patch - unilateral",
    "chapter": "Eye and Orbital Contents",
    "section": "Iris and Anterior Chamber"
  },
  {
    "code": "C6052",
    "description": "Aqueous shunt tube surgery for glaucoma (including topical or local anaesthetic) including donor patch - bilateral",
    "chapter": "Eye and Orbital Contents",
    "section": "Iris and Anterior Chamber"
  },
  {
    "code": "C6110",
    "description": "Laser trabeculoplasty (including topical or local anaesthetic) - bilateral",
    "chapter": "Eye and Orbital Contents",
    "section": "Iris and Anterior Chamber"
  },
  {
    "code": "C6111",
    "description": "Laser trabeculoplasty (including topical or local anaesthetic) - unilateral",
    "chapter": "Eye and Orbital Contents",
    "section": "Iris and Anterior Chamber"
  },
  {
    "code": "C6120",
    "description": "Trabecular stent bypass microsurgery for open-angle glaucoma (including topical and local anaesthetic)",
    "chapter": "Eye and Orbital Contents",
    "section": "Iris and Anterior Chamber"
  },
  {
    "code": "C6130",
    "description": "Goniotomy (surgical treatment of glaucoma) (including topical and local anaesthetic)",
    "chapter": "Eye and Orbital Contents",
    "section": "Iris and Anterior Chamber"
  },
  {
    "code": "C6150",
    "description": "Revision of previous glaucoma surgery (including topical and local anaesthetic)",
    "chapter": "Eye and Orbital Contents",
    "section": "Iris and Anterior Chamber"
  },
  {
    "code": "C6160",
    "description": "Complex glaucoma surgery (including anti-metabolites/insertion of seton devices) (including topical and local anaesthetic)",
    "chapter": "Eye and Orbital Contents",
    "section": "Iris and Anterior Chamber"
  },
  {
    "code": "C6170",
    "description": "Goniosynechialysis or goniopuncture (with laser or operatively) (including topical and local anaesthetic)",
    "chapter": "Eye and Orbital Contents",
    "section": "Iris and Anterior Chamber"
  },
  {
    "code": "C6180",
    "description": "Bleb needling +/- antimetabolites (including topical or local anaesthetic)",
    "chapter": "Eye and Orbital Contents",
    "section": "Conjunctiva"
  },
  {
    "code": "C6181",
    "description": "Laser suture lysis (including topical or local anaesthetic)",
    "chapter": "Eye and Orbital Contents",
    "section": "Sclera"
  },
  {
    "code": "C6230",
    "description": "Laser Iridotomy - Unilateral",
    "chapter": "Eye and Orbital Contents",
    "section": "Iris and Anterior Chamber"
  },
  {
    "code": "C6231",
    "description": "Laser Iridotomy - Bilateral",
    "chapter": "Eye and Orbital Contents",
    "section": "Iris and Anterior Chamber"
  },
  {
    "code": "C6410",
    "description": "Repair of prolapsed iris",
    "chapter": "Eye and Orbital Contents",
    "section": "Iris and Anterior Chamber"
  },
  {
    "code": "C6420",
    "description": "Excision of lesion of iris",
    "chapter": "Eye and Orbital Contents",
    "section": "Iris and Anterior Chamber"
  },
  {
    "code": "C6450",
    "description": "Removal of foreign body from iris",
    "chapter": "Eye and Orbital Contents",
    "section": "Iris and Anterior Chamber"
  },
  {
    "code": "C6610",
    "description": "Ciliary body ablation",
    "chapter": "Eye and Orbital Contents",
    "section": "Iris and Anterior Chamber"
  },
  {
    "code": "C6710",
    "description": "Cyclodialysis (separation of ciliary body)",
    "chapter": "Eye and Orbital Contents",
    "section": "Iris and Anterior Chamber"
  },
  {
    "code": "C6720",
    "description": "Laser treatment for glaucoma e.g. Cyclodiode",
    "chapter": "Eye and Orbital Contents",
    "section": "Iris and Anterior Chamber"
  },
  {
    "code": "C6910",
    "description": "Reformation of anterior chamber",
    "chapter": "Eye and Orbital Contents",
    "section": "Iris and Anterior Chamber"
  },
  {
    "code": "C6920",
    "description": "Paracentesis of the eye",
    "chapter": "Eye and Orbital Contents",
    "section": "Iris and Anterior Chamber"
  },
  {
    "code": "C6930",
    "description": "Injection into anterior chamber (including topical and local anaesthetic)",
    "chapter": "Eye and Orbital Contents",
    "section": "Iris and Anterior Chamber"
  },
  {
    "code": "C6940",
    "description": "Irrigation/aspiration of anterior chamber",
    "chapter": "Eye and Orbital Contents",
    "section": "Iris and Anterior Chamber"
  },
  {
    "code": "C6980",
    "description": "Removal of foreign body from anterior chamber",
    "chapter": "Eye and Orbital Contents",
    "section": "Iris and Anterior Chamber"
  },
  {
    "code": "C6990",
    "description": "Insertion of valve into anterior chamber of eye",
    "chapter": "Eye and Orbital Contents",
    "section": "Iris and Anterior Chamber"
  },
  {
    "code": "C7100",
    "description": "Extracapsular cataract extraction without implant - bilateral",
    "chapter": "Eye and Orbital Contents",
    "section": "Lens"
  },
  {
    "code": "C7110",
    "description": "Extracapsular cataract extraction without implant - unilateral",
    "chapter": "Eye and Orbital Contents",
    "section": "Lens"
  },
  {
    "code": "C7122",
    "description": "Ultrasound phacoemulsification of cataract, with lens implant - unilateral (including topical or local anaesthetic)",
    "chapter": "Eye and Orbital Contents",
    "section": "Lens"
  },
  {
    "code": "C7123",
    "description": "Phacoemulsification of cataract, without lens implant - unilateral (including topical or local anaesthetic)",
    "chapter": "Eye and Orbital Contents",
    "section": "Lens"
  },
  {
    "code": "C7124",
    "description": "Phacoemulsification of cataracts, without lens implant - bilateral (including topical or local anaesthetic)",
    "chapter": "Eye and Orbital Contents",
    "section": "Lens"
  },
  {
    "code": "C7125",
    "description": "Ultrasound  phacoemulsification of cataracts, with lens implant - bilateral (including topical or local anaesthetic)",
    "chapter": "Eye and Orbital Contents",
    "section": "Lens"
  },
  {
    "code": "C7180",
    "description": "Extracapsular cataract extraction with implant - unilateral",
    "chapter": "Eye and Orbital Contents",
    "section": "Lens"
  },
  {
    "code": "C7190",
    "description": "Extracapsular cataract extraction with implant - bilateral",
    "chapter": "Eye and Orbital Contents",
    "section": "Lens"
  },
  {
    "code": "C7201",
    "description": "Laser-assisted phacoemulsification of cataract with lens implant – unilateral (including topical or local anaesthetic)",
    "chapter": "Eye and Orbital Contents",
    "section": "Lens"
  },
  {
    "code": "C7202",
    "description": "Laser-assisted phacoemulsification of cataract with lens implant - bilateral (including topical or local anaesthetic)",
    "chapter": "Eye and Orbital Contents",
    "section": "Lens"
  },
  {
    "code": "C7210",
    "description": "Paediatric cataract involving lensectomy without lens implant – unilateral",
    "chapter": "Eye and Orbital Contents",
    "section": "Lens"
  },
  {
    "code": "C7211",
    "description": "Paediatric cataract involving lensectomy without lens implant – bilateral",
    "chapter": "Eye and Orbital Contents",
    "section": "Lens"
  },
  {
    "code": "C7212",
    "description": "Paediatric cataract involving lensectomy with lens implant - unilateral",
    "chapter": "Eye and Orbital Contents",
    "section": "Lens"
  },
  {
    "code": "C7213",
    "description": "Paediatric cataract involving lensectomy with lens implant – bilateral",
    "chapter": "Eye and Orbital Contents",
    "section": "Lens"
  },
  {
    "code": "C7214",
    "description": "Paediatric cataract involving lens aspiration and implant – unilateral",
    "chapter": "Eye and Orbital Contents",
    "section": "Lens"
  },
  {
    "code": "C7215",
    "description": "Paediatric cataract involving lens aspiration and implant – bilateral",
    "chapter": "Eye and Orbital Contents",
    "section": "Lens"
  },
  {
    "code": "C7340",
    "description": "YAG (Yttrium Aluminium Garnett) laser photodisruption of posterior capsule of lens (including laser capsulotomy) - unilateral",
    "chapter": "Eye and Orbital Contents",
    "section": "Lens"
  },
  {
    "code": "C7341",
    "description": "YAG (Yttrium Aluminium Garnett) laser photodisruption of posterior capsule of lens (including laser capsulotomy) - bilateral",
    "chapter": "Eye and Orbital Contents",
    "section": "Lens"
  },
  {
    "code": "C7510",
    "description": "Secondary insertion of lens implant",
    "chapter": "Eye and Orbital Contents",
    "section": "Lens"
  },
  {
    "code": "C7520",
    "description": "Lens implant/exchange",
    "chapter": "Eye and Orbital Contents",
    "section": "Lens"
  },
  {
    "code": "C7525",
    "description": "Repositioning of lens implant",
    "chapter": "Eye and Orbital Contents",
    "section": "Lens"
  },
  {
    "code": "C7530",
    "description": "Removal of lens implant",
    "chapter": "Eye and Orbital Contents",
    "section": "Lens"
  },
  {
    "code": "C7550",
    "description": "Implantation of intra ocular miniature lens system (telescopic lens) for visual impairment",
    "chapter": "Eye and Orbital Contents",
    "section": "Lens"
  },
  {
    "code": "C7560",
    "description": "Implantation of artificial iris for congenital or traumatic aniridia",
    "chapter": "Eye and Orbital Contents",
    "section": "Iris and Anterior Chamber"
  },
  {
    "code": "C7910",
    "description": "Anterior vitrectomy",
    "chapter": "Eye and Orbital Contents",
    "section": "Vitreous"
  },
  {
    "code": "C7920",
    "description": "Pars plana vitrectomy with internal tamponade, scleral buckling and retinopexy without dissection or excision of epiretinal membrane/macular surgery",
    "chapter": "Eye and Orbital Contents",
    "section": "Vitreous"
  },
  {
    "code": "C7922",
    "description": "Pars plana vitrectomy/vitreous biopsy",
    "chapter": "Eye and Orbital Contents",
    "section": "Vitreous"
  },
  {
    "code": "C7923",
    "description": "Intravitreal injection of pharmaceutical for neovascular age related macular degeneration",
    "chapter": "Eye and Orbital Contents",
    "section": "Vitreous"
  },
  {
    "code": "C7924",
    "description": "Intravitreal injection of pharmaceutical for central retinal vein occlusion",
    "chapter": "Eye and Orbital Contents",
    "section": "Vitreous"
  },
  {
    "code": "C7940",
    "description": "Intravitreal injection of pharmaceutical agent (not elsewhere classified)",
    "chapter": "Eye and Orbital Contents",
    "section": "Vitreous"
  },
  {
    "code": "C7982",
    "description": "Pars plana vitrectomy with internal tamponade, scleral buckling and retinopexy with dissection or excision of epiretinal membrane/macular surgery",
    "chapter": "Eye and Orbital Contents",
    "section": "Vitreous"
  },
  {
    "code": "C8200",
    "description": "Laser photocoagulation/cryotherapy of lesion of retina",
    "chapter": "Eye and Orbital Contents",
    "section": "Retina"
  },
  {
    "code": "C8240",
    "description": "Photodynamic Therapy to the retina (PDT) - unilateral",
    "chapter": "Eye and Orbital Contents",
    "section": "Retina"
  },
  {
    "code": "C8241",
    "description": "Photodynamic therapy to the retina (PDT) - Bilateral",
    "chapter": "Eye and Orbital Contents",
    "section": "Retina"
  },
  {
    "code": "C8440",
    "description": "Retinal examination under anaesthetic (including retinopexy if necessary)",
    "chapter": "Eye and Orbital Contents",
    "section": "Retina"
  },
  {
    "code": "C8470",
    "description": "Insertion of electronic retinal implant",
    "chapter": "Eye and Orbital Contents",
    "section": "Retina"
  },
  {
    "code": "C8650",
    "description": "Fluorescein angiography of eye (including ocular  photography)",
    "chapter": "Eye and Orbital Contents",
    "section": "General"
  },
  {
    "code": "C8651",
    "description": "Fundus autofluorescence imaging (as sole procedure)",
    "chapter": "Eye and Orbital Contents",
    "section": "Retina"
  },
  {
    "code": "C8652",
    "description": "Fundus or anterior segment ocular photography (as sole procedure)",
    "chapter": "Eye and Orbital Contents",
    "section": "General"
  },
  {
    "code": "C8654",
    "description": "Insertion of radioactive plaque into eye (including later removal)",
    "chapter": "Eye and Orbital Contents",
    "section": "General"
  },
  {
    "code": "C8688",
    "description": "Thermal pulsation treatment for dry eyes caused by blocked meibomian glands",
    "chapter": "Eye and Orbital Contents",
    "section": "General"
  },
  {
    "code": "C8810",
    "description": "Transpupillary thermotherapy for intraocular tumours",
    "chapter": "Eye and Orbital Contents",
    "section": "Retina"
  },
  {
    "code": "CD030",
    "description": "Wireless patch continuous 1 lead ECG recorder for up to 14 days",
    "chapter": "Investigations, simple procedures and consultation codes",
    "section": "Investigation Codes"
  },
  {
    "code": "D0110",
    "description": "Total excision of pinna",
    "chapter": "Ear, Nose and Throat",
    "section": "External Ear"
  },
  {
    "code": "D0132",
    "description": "Excision accessory auricle/preauricular appendage",
    "chapter": "Ear, Nose and Throat",
    "section": "External Ear"
  },
  {
    "code": "D0140",
    "description": "Excision of preauricular sinus",
    "chapter": "Ear, Nose and Throat",
    "section": "External Ear"
  },
  {
    "code": "D0210",
    "description": "Excision of lesion of pinna",
    "chapter": "Ear, Nose and Throat",
    "section": "External Ear"
  },
  {
    "code": "D0280",
    "description": "Removal of multiple bony exostoses external auditory canal",
    "chapter": "Ear, Nose and Throat",
    "section": "External Ear"
  },
  {
    "code": "D0310",
    "description": "Reconstruction of external ear for anotia/microtia using cartilage graft",
    "chapter": "Ear, Nose and Throat",
    "section": "External Ear"
  },
  {
    "code": "D0311",
    "description": "Reconstruction of ear following trauma or excision of tumour",
    "chapter": "Ear, Nose and Throat",
    "section": "External Ear"
  },
  {
    "code": "D0330",
    "description": "Pinnaplasty (including bilateral)",
    "chapter": "Ear, Nose and Throat",
    "section": "External Ear"
  },
  {
    "code": "D0340",
    "description": "Soft tissue meatoplasty of external auditory canal",
    "chapter": "Ear, Nose and Throat",
    "section": "External Ear"
  },
  {
    "code": "D0342",
    "description": "Bony meatoplasty",
    "chapter": "Ear, Nose and Throat",
    "section": "External Ear"
  },
  {
    "code": "D0410",
    "description": "Drainage of haematoma/abscess of pinna",
    "chapter": "Ear, Nose and Throat",
    "section": "External Ear"
  },
  {
    "code": "D0610",
    "description": "Biopsy of lesion of pinna (as sole procedure)",
    "chapter": "Ear, Nose and Throat",
    "section": "External Ear"
  },
  {
    "code": "D0630",
    "description": "Repair of pinna",
    "chapter": "Ear, Nose and Throat",
    "section": "External Ear"
  },
  {
    "code": "D0702",
    "description": "Aural toilet (including microsuction and/or suction of exteriorised mastoid cavity) including bilateral",
    "chapter": "Ear, Nose and Throat",
    "section": "External Ear"
  },
  {
    "code": "D0730",
    "description": "Removal of foreign body from external auditory canal  (and bilateral)",
    "chapter": "Ear, Nose and Throat",
    "section": "External Ear"
  },
  {
    "code": "D0810",
    "description": "Excision of lesion of external auditory canal",
    "chapter": "Ear, Nose and Throat",
    "section": "External Ear"
  },
  {
    "code": "D0812",
    "description": "Removal of solitary osteoma of external auditory canal",
    "chapter": "Ear, Nose and Throat",
    "section": "External Ear"
  },
  {
    "code": "D0820",
    "description": "Reconstruction of external auditory canal",
    "chapter": "Ear, Nose and Throat",
    "section": "External Ear"
  },
  {
    "code": "D1010",
    "description": "Radical mastoidectomy (including meatoplasty)",
    "chapter": "Ear, Nose and Throat",
    "section": "Middle Ear and Mastoid"
  },
  {
    "code": "D1020",
    "description": "Modified radical mastoidectomy (including meatoplasty)",
    "chapter": "Ear, Nose and Throat",
    "section": "Middle Ear and Mastoid"
  },
  {
    "code": "D1040",
    "description": "Simple mastoidectomy",
    "chapter": "Ear, Nose and Throat",
    "section": "Middle Ear and Mastoid"
  },
  {
    "code": "D1060",
    "description": "Revision of mastoidectomy (including meatoplasty)",
    "chapter": "Ear, Nose and Throat",
    "section": "Middle Ear and Mastoid"
  },
  {
    "code": "D1240",
    "description": "Exploration of facial nerve, mastoid segment",
    "chapter": "Ear, Nose and Throat",
    "section": "Middle Ear and Mastoid"
  },
  {
    "code": "D1420",
    "description": "Myringoplasty",
    "chapter": "Ear, Nose and Throat",
    "section": "Middle Ear and Mastoid"
  },
  {
    "code": "D1421",
    "description": "Fat plug myringoplasty",
    "chapter": "Ear, Nose and Throat",
    "section": "Middle Ear and Mastoid"
  },
  {
    "code": "D1440",
    "description": "Combined approach tympanoplasty - intact canal wall tympanoplasty",
    "chapter": "Ear, Nose and Throat",
    "section": "Middle Ear and Mastoid"
  },
  {
    "code": "D1510",
    "description": "Myringotomy and insertion of tube through tympanic membrane (and bilateral)",
    "chapter": "Ear, Nose and Throat",
    "section": "Middle Ear and Mastoid"
  },
  {
    "code": "D1520",
    "description": "Suction clearance of middle ear (as sole procedure)",
    "chapter": "Ear, Nose and Throat",
    "section": "Middle Ear and Mastoid"
  },
  {
    "code": "D1530",
    "description": "Myringotomy (and bilateral)",
    "chapter": "Ear, Nose and Throat",
    "section": "Middle Ear and Mastoid"
  },
  {
    "code": "D1540",
    "description": "Exploration of entire middle ear course of VII",
    "chapter": "Ear, Nose and Throat",
    "section": "Middle Ear and Mastoid"
  },
  {
    "code": "D1610",
    "description": "Ossiculoplasty",
    "chapter": "Ear, Nose and Throat",
    "section": "Middle Ear and Mastoid"
  },
  {
    "code": "D1710",
    "description": "Stapedectomy (as sole procedure)",
    "chapter": "Ear, Nose and Throat",
    "section": "Middle Ear and Mastoid"
  },
  {
    "code": "D1720",
    "description": "Revision stapedectomy (as sole procedure)",
    "chapter": "Ear, Nose and Throat",
    "section": "Middle Ear and Mastoid"
  },
  {
    "code": "D1900",
    "description": "Middle ear tumour excision",
    "chapter": "Ear, Nose and Throat",
    "section": "Middle Ear and Mastoid"
  },
  {
    "code": "D1910",
    "description": "Middle ear polypectomy",
    "chapter": "Ear, Nose and Throat",
    "section": "Middle Ear and Mastoid"
  },
  {
    "code": "D2030",
    "description": "Removal of grommets",
    "chapter": "Ear, Nose and Throat",
    "section": "Middle Ear and Mastoid"
  },
  {
    "code": "D2040",
    "description": "Diagnostic tympanotomy (as sole procedure)",
    "chapter": "Ear, Nose and Throat",
    "section": "Middle Ear and Mastoid"
  },
  {
    "code": "D2050",
    "description": "Tympanic neurectomy",
    "chapter": "Ear, Nose and Throat",
    "section": "Middle Ear and Mastoid"
  },
  {
    "code": "D2070",
    "description": "Transtympanic steroid injection (including topical or local anaesthetic)",
    "chapter": "Ear, Nose and Throat",
    "section": "Middle Ear and Mastoid"
  },
  {
    "code": "D2240",
    "description": "Balloon dilatation of the eustachian tube",
    "chapter": "Ear, Nose and Throat",
    "section": "Middle Ear and Mastoid"
  },
  {
    "code": "D2241",
    "description": "Injection eustachian tuboplasty",
    "chapter": "Ear, Nose and Throat",
    "section": "Middle Ear and Mastoid"
  },
  {
    "code": "D2610",
    "description": "Operation(s) on endolymphatic sac",
    "chapter": "Ear, Nose and Throat",
    "section": "Inner Ear"
  },
  {
    "code": "D2620",
    "description": "Membranous labyrinthectomy",
    "chapter": "Ear, Nose and Throat",
    "section": "Inner Ear"
  },
  {
    "code": "D2630",
    "description": "Osseous labyrinthectomy",
    "chapter": "Ear, Nose and Throat",
    "section": "Inner Ear"
  },
  {
    "code": "D2822",
    "description": "Examination of ear under general anaesthetic (as sole procedure)",
    "chapter": "Ear, Nose and Throat",
    "section": "Middle Ear and Mastoid"
  },
  {
    "code": "E0110",
    "description": "Total excision of nose",
    "chapter": "Ear, Nose and Throat",
    "section": "Nose and Nasal Cavity"
  },
  {
    "code": "E0220",
    "description": "Septorhinoplasty (including attention to turbinates)",
    "chapter": "Ear, Nose and Throat",
    "section": "Nose and Nasal Cavity"
  },
  {
    "code": "E0230",
    "description": "Septorhinoplasty including graft/implant following trauma or excision of tumour (including attention to turbinates)",
    "chapter": "Ear, Nose and Throat",
    "section": "Nose and Nasal Cavity"
  },
  {
    "code": "E0240",
    "description": "Revision/secondary open structure septorhinoplasty +/- graft implant following prior surgery from trauma or excision of tumour (including attention to turbinates)",
    "chapter": "Ear, Nose and Throat",
    "section": "Nose and Nasal Cavity"
  },
  {
    "code": "E0260",
    "description": "Rhinoplasty following trauma or excision of tumour (including attention to turbinates)",
    "chapter": "Ear, Nose and Throat",
    "section": "Nose and Nasal Cavity"
  },
  {
    "code": "E0270",
    "description": "Non-invasive nasal airway remodelling (NINAR)",
    "chapter": "Ear, Nose and Throat",
    "section": "Nose and Nasal Cavity"
  },
  {
    "code": "E0310",
    "description": "Submucous resection of nasal septum",
    "chapter": "Ear, Nose and Throat",
    "section": "Nose and Nasal Cavity"
  },
  {
    "code": "E0330",
    "description": "Biopsy  of septum of nose",
    "chapter": "Ear, Nose and Throat",
    "section": "Nose and Nasal Cavity"
  },
  {
    "code": "E0340",
    "description": "Closure of perforation of septum of nose",
    "chapter": "Ear, Nose and Throat",
    "section": "Nose and Nasal Cavity"
  },
  {
    "code": "E0360",
    "description": "Septoplasty of nose (including attention to turbinates)",
    "chapter": "Ear, Nose and Throat",
    "section": "Nose and Nasal Cavity"
  },
  {
    "code": "E0380",
    "description": "Nasal septum cauterisation (and bilateral)",
    "chapter": "Ear, Nose and Throat",
    "section": "Nose and Nasal Cavity"
  },
  {
    "code": "E0390",
    "description": "Extracorporeal septoplasty",
    "chapter": "Ear, Nose and Throat",
    "section": "Nose and Nasal Cavity"
  },
  {
    "code": "E0412",
    "description": "Reduction turbinates of nose (laser, diathermy, out fracture etc)",
    "chapter": "Ear, Nose and Throat",
    "section": "Nose and Nasal Cavity"
  },
  {
    "code": "E0420",
    "description": "Reduction of turbinates of nose (trim, radical excision)",
    "chapter": "Ear, Nose and Throat",
    "section": "Nose and Nasal Cavity"
  },
  {
    "code": "E0440",
    "description": "Division of adhesions of turbinate of nose (and bilateral)",
    "chapter": "Ear, Nose and Throat",
    "section": "Nose and Nasal Cavity"
  },
  {
    "code": "E0520",
    "description": "Ligation of artery of internal nose (including endoscopic, as sole procedure)",
    "chapter": "Ear, Nose and Throat",
    "section": "Nose and Nasal Cavity"
  },
  {
    "code": "E0610",
    "description": "Packing of cavity of nose (as sole procedure)",
    "chapter": "Ear, Nose and Throat",
    "section": "Nose and Nasal Cavity"
  },
  {
    "code": "E0810",
    "description": "Polypectomy of internal nose (and bilateral, including endoscopic)",
    "chapter": "Ear, Nose and Throat",
    "section": "Nose and Nasal Cavity"
  },
  {
    "code": "E0820",
    "description": "Excision of lesion of internal nose",
    "chapter": "Ear, Nose and Throat",
    "section": "Nose and Nasal Cavity"
  },
  {
    "code": "E0830",
    "description": "Correction of congenital atresia of choana (including endoscopic)",
    "chapter": "Ear, Nose and Throat",
    "section": "Nose and Nasal Cavity"
  },
  {
    "code": "E0850",
    "description": "Removal of foreign body from cavity of nose",
    "chapter": "Ear, Nose and Throat",
    "section": "Nose and Nasal Cavity"
  },
  {
    "code": "E0910",
    "description": "Excision of lesion of external nose",
    "chapter": "Ear, Nose and Throat",
    "section": "Nose and Nasal Cavity"
  },
  {
    "code": "E1220",
    "description": "Caldwell-Luc approach to maxillary sinus",
    "chapter": "Ear, Nose and Throat",
    "section": "Nasal Sinuses"
  },
  {
    "code": "E1240",
    "description": "Vidian neurectomy (including endoscopic)",
    "chapter": "Ear, Nose and Throat",
    "section": "Nasal Sinuses"
  },
  {
    "code": "E1260",
    "description": "Image guided endoscopic frontal, sphenoid and/or ethmoid sinus surgery (FESS) and bilateral",
    "chapter": "Ear, Nose and Throat",
    "section": "Nasal Sinuses"
  },
  {
    "code": "E1310",
    "description": "Antral puncture and washout (and bilateral)",
    "chapter": "Ear, Nose and Throat",
    "section": "Nasal Sinuses"
  },
  {
    "code": "E1330",
    "description": "Intranasal antrostomy including endoscopic and antral washout (including bilateral)",
    "chapter": "Ear, Nose and Throat",
    "section": "Nasal Sinuses"
  },
  {
    "code": "E1350",
    "description": "Closure of oro-antral fistula with local flap",
    "chapter": "Ear, Nose and Throat",
    "section": "Nasal Sinuses"
  },
  {
    "code": "E1352",
    "description": "Closure of oro-antral fistula with distant flap",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Mouth Cavity"
  },
  {
    "code": "E1354",
    "description": "Closure of oro-antral fistula with distant flap and bone graft",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Mouth Cavity"
  },
  {
    "code": "E1360",
    "description": "Endoscopic balloon dilation frontal sinuplasty and bilateral",
    "chapter": "Ear, Nose and Throat",
    "section": "Nasal Sinuses"
  },
  {
    "code": "E1370",
    "description": "Endoscopic balloon dilation maxillary sinuplasty and bilateral",
    "chapter": "Ear, Nose and Throat",
    "section": "Nasal Sinuses"
  },
  {
    "code": "E1380",
    "description": "Endoscopic balloon dilation spheniod sinuplasty and bilateral",
    "chapter": "Ear, Nose and Throat",
    "section": "Nasal Sinuses"
  },
  {
    "code": "E1410",
    "description": "External frontoethmoidectomy and bilateral",
    "chapter": "Ear, Nose and Throat",
    "section": "Nasal Sinuses"
  },
  {
    "code": "E1432",
    "description": "FESS: excision uncinate process and anterior ethmoid bulla, antrostomy/antral puncture, simple polypectomy and attention to turbinates (bilateral)",
    "chapter": "Ear, Nose and Throat",
    "section": "Nasal Sinuses"
  },
  {
    "code": "E1435",
    "description": "Cryotherapy or cryoablation of posterior nasal nerve",
    "chapter": "Ear, Nose and Throat",
    "section": "Nasal Sinuses"
  },
  {
    "code": "E1441",
    "description": "Insertion of biodegradable stent into paranasal sinus (ethmoid)",
    "chapter": "Ear, Nose and Throat",
    "section": "Nasal Sinuses"
  },
  {
    "code": "E1450",
    "description": "Bone flap to frontal sinus (and bilateral)",
    "chapter": "Ear, Nose and Throat",
    "section": "Nasal Sinuses"
  },
  {
    "code": "E1460",
    "description": "Trephining of frontal sinus and bilateral",
    "chapter": "Ear, Nose and Throat",
    "section": "Nasal Sinuses"
  },
  {
    "code": "E1470",
    "description": "Median drainage of frontal sinus (modified Lothrop procedure) and bilateral",
    "chapter": "Ear, Nose and Throat",
    "section": "Nasal Sinuses"
  },
  {
    "code": "E1480",
    "description": "Endoscopic exploration frontal sinus beyond frontoethmoid recess and bilateral",
    "chapter": "Ear, Nose and Throat",
    "section": "Nasal Sinuses"
  },
  {
    "code": "E1490",
    "description": "Insertion of biodegradable stent into paranasal sinus (frontal)",
    "chapter": "Ear, Nose and Throat",
    "section": "Nasal Sinuses"
  },
  {
    "code": "E1500",
    "description": "Operation(s) on sphenoid sinus (including endoscopic) and bilateral",
    "chapter": "Ear, Nose and Throat",
    "section": "Nasal Sinuses"
  },
  {
    "code": "E1742",
    "description": "Lateral rhinotomy into sinuses",
    "chapter": "Ear, Nose and Throat",
    "section": "Nasal Sinuses"
  },
  {
    "code": "E1750",
    "description": "Transnasal repair of leaking CSF (including endoscopic)",
    "chapter": "Ear, Nose and Throat",
    "section": "Nasal Sinuses"
  },
  {
    "code": "E1780",
    "description": "Diagnostic endoscopy of sinus and bilateral (as sole procedure)",
    "chapter": "Ear, Nose and Throat",
    "section": "Nasal Sinuses"
  },
  {
    "code": "E1910",
    "description": "Total pharyngectomy",
    "chapter": "Ear, Nose and Throat",
    "section": "Throat"
  },
  {
    "code": "E1911",
    "description": "Robotic assisted total pharyngectomy",
    "chapter": "Ear, Nose and Throat",
    "section": "Larynx and Trachea"
  },
  {
    "code": "E1920",
    "description": "Partial pharyngectomy",
    "chapter": "Ear, Nose and Throat",
    "section": "Throat"
  },
  {
    "code": "E1921",
    "description": "Robotic assisted partial pharyngectomy",
    "chapter": "Ear, Nose and Throat",
    "section": "Throat"
  },
  {
    "code": "E2010",
    "description": "Adenoidectomy",
    "chapter": "Ear, Nose and Throat",
    "section": "Throat"
  },
  {
    "code": "E2100",
    "description": "Repair of pharynx",
    "chapter": "Ear, Nose and Throat",
    "section": "Throat"
  },
  {
    "code": "E2140",
    "description": "Reconstruction using stomach pull up following pharyngolaryngectomy",
    "chapter": "Ear, Nose and Throat",
    "section": "Larynx and Trachea"
  },
  {
    "code": "E2150",
    "description": "Reconstruction free jejunal graft following pharyngolaryngectomy",
    "chapter": "Ear, Nose and Throat",
    "section": "Larynx and Trachea"
  },
  {
    "code": "E2300",
    "description": "Pharyngeal myotomy",
    "chapter": "Ear, Nose and Throat",
    "section": "Larynx and Trachea"
  },
  {
    "code": "E2320",
    "description": "Open operation(s) on pharyngeal pouch",
    "chapter": "Ear, Nose and Throat",
    "section": "Throat"
  },
  {
    "code": "E2330",
    "description": "Removal of lesion of para-pharyngeal space",
    "chapter": "Ear, Nose and Throat",
    "section": "Throat"
  },
  {
    "code": "E2331",
    "description": "Robotic assisted removal of lesion of para-pharyngeal space",
    "chapter": "Ear, Nose and Throat",
    "section": "Throat"
  },
  {
    "code": "E2400",
    "description": "Therapeutic endoscopic operation on pharynx",
    "chapter": "Ear, Nose and Throat",
    "section": "Throat"
  },
  {
    "code": "E2480",
    "description": "Endoscopic operation(s) on pharyngeal pouch (e.g. Dohlman’s procedure)",
    "chapter": "Ear, Nose and Throat",
    "section": "Throat"
  },
  {
    "code": "E2500",
    "description": "Diagnostic nasolaryngopharyngoscopy +/- biopsy, +/- cautery as sole procedure",
    "chapter": "Ear, Nose and Throat",
    "section": "Throat"
  },
  {
    "code": "E2501",
    "description": "Fibre optic examination of the pharynx +/- biopsy/removal of foreign body",
    "chapter": "Ear, Nose and Throat",
    "section": "Throat"
  },
  {
    "code": "E2810",
    "description": "Peroral endoscopic myotomy (POEM) for achalasia",
    "chapter": "Ear, Nose and Throat",
    "section": "Fibreoptic Endoscopic Procedures (GA or LA)"
  },
  {
    "code": "E2880",
    "description": "Epley manoeuvre",
    "chapter": "Ear, Nose and Throat",
    "section": "Inner Ear"
  },
  {
    "code": "E2910",
    "description": "Total laryngectomy",
    "chapter": "Ear, Nose and Throat",
    "section": "Larynx and Trachea"
  },
  {
    "code": "E2920",
    "description": "Horizontal supra-glottic laryngectomy",
    "chapter": "Ear, Nose and Throat",
    "section": "Larynx and Trachea"
  },
  {
    "code": "E2930",
    "description": "Vertical hemi-laryngectomy",
    "chapter": "Ear, Nose and Throat",
    "section": "Larynx and Trachea"
  },
  {
    "code": "E2931",
    "description": "Transoral robotic assisted vertical supra-glottic hemi-laryngectomy (as sole procedure)",
    "chapter": "Ear, Nose and Throat",
    "section": "Larynx and Trachea"
  },
  {
    "code": "E2932",
    "description": "Transoral robotic assisted horizontal supra-glottic hemi-laryngectomy (as sole procedure)",
    "chapter": "Ear, Nose and Throat",
    "section": "Larynx and Trachea"
  },
  {
    "code": "E2940",
    "description": "Partial laryngectomy",
    "chapter": "Ear, Nose and Throat",
    "section": "Larynx and Trachea"
  },
  {
    "code": "E2942",
    "description": "Robotic assisted total laryngectomy",
    "chapter": "Ear, Nose and Throat",
    "section": "Larynx and Trachea"
  },
  {
    "code": "E2950",
    "description": "Laryngofissure and cordectomy of vocal cord",
    "chapter": "Ear, Nose and Throat",
    "section": "Larynx and Trachea"
  },
  {
    "code": "E2952",
    "description": "Laryngofissure",
    "chapter": "Ear, Nose and Throat",
    "section": "Larynx and Trachea"
  },
  {
    "code": "E2970",
    "description": "Sub total laryngectomy",
    "chapter": "Ear, Nose and Throat",
    "section": "Larynx and Trachea"
  },
  {
    "code": "E3010",
    "description": "Glottoplasty (e.g.vocal pitch change surgery)",
    "chapter": "Ear, Nose and Throat",
    "section": "Larynx and Trachea"
  },
  {
    "code": "E3100",
    "description": "Reconstruction of larynx with graft",
    "chapter": "Ear, Nose and Throat",
    "section": "Larynx and Trachea"
  },
  {
    "code": "E3180",
    "description": "Thyroplasty (Isshiki type 1)",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Thyroid and Parathyroid Glands"
  },
  {
    "code": "E3400",
    "description": "Cordectomy (endoscopic)",
    "chapter": "Ear, Nose and Throat",
    "section": "Larynx and Trachea"
  },
  {
    "code": "E3410",
    "description": "Laser surgery to vocal cord (including microlaryngoscopy)",
    "chapter": "Ear, Nose and Throat",
    "section": "Larynx and Trachea"
  },
  {
    "code": "E3450",
    "description": "Phonomicrosurgery for vocal cord lesions, nodules, polyps, or cysts",
    "chapter": "Ear, Nose and Throat",
    "section": "Larynx and Trachea"
  },
  {
    "code": "E3520",
    "description": "Microlaryngoscopy/laryngoscopy +/- biopsy, excision of lesion, polyp or cyst",
    "chapter": "Ear, Nose and Throat",
    "section": "Larynx and Trachea"
  },
  {
    "code": "E3681",
    "description": "Stroboscopy of larynx",
    "chapter": "Ear, Nose and Throat",
    "section": "Larynx and Trachea"
  },
  {
    "code": "E3810",
    "description": "Injection into larynx",
    "chapter": "Ear, Nose and Throat",
    "section": "Larynx and Trachea"
  },
  {
    "code": "E3900",
    "description": "Partial excision of trachea with reconstruction",
    "chapter": "Ear, Nose and Throat",
    "section": "Larynx and Trachea"
  },
  {
    "code": "E4030",
    "description": "Tracheoplasty",
    "chapter": "Ear, Nose and Throat",
    "section": "Larynx and Trachea"
  },
  {
    "code": "E4032",
    "description": "Tracheoplasty for congenital conditions",
    "chapter": "Ear, Nose and Throat",
    "section": "Larynx and Trachea"
  },
  {
    "code": "E4100",
    "description": "Insertion of voice prosthesis (TOF)",
    "chapter": "Ear, Nose and Throat",
    "section": "Larynx and Trachea"
  },
  {
    "code": "E4210",
    "description": "Tracheostomy",
    "chapter": "Ear, Nose and Throat",
    "section": "Larynx and Trachea"
  },
  {
    "code": "E4230",
    "description": "Mini-tracheostomy (percutaneous)",
    "chapter": "Ear, Nose and Throat",
    "section": "Larynx and Trachea"
  },
  {
    "code": "E4400",
    "description": "Carinal resection +/- pneumonectomy",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Bronchi/Lungs/Pleura"
  },
  {
    "code": "E4401",
    "description": "Robotic assisted carinal resection +/- pneumonectomy",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Bronchi/Lungs/Pleura"
  },
  {
    "code": "E4510",
    "description": "Fibreoptic examination of trachea +/- biopsy/removal of foreign body",
    "chapter": "Ear, Nose and Throat",
    "section": "Fibreoptic Endoscopic Procedures (GA or LA)"
  },
  {
    "code": "E4600",
    "description": "Sleeve resection of bronchus or pulmonary artery with pulmonary resection",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Bronchi/Lungs/Pleura"
  },
  {
    "code": "E4722",
    "description": "Thoracotomy and closure of bronco-pleural fistula",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Chest Wall"
  },
  {
    "code": "E4800",
    "description": "Therapeutic bronchoscopy (including laser, cryotherapy, lavage, snare, dilatation of stricture, insertion of stent)",
    "chapter": "Ear, Nose and Throat",
    "section": "Fibreoptic Endoscopic Procedures (GA or LA)"
  },
  {
    "code": "E4840",
    "description": "Dilatation of tracheal stricture (including insertion of stent)",
    "chapter": "Ear, Nose and Throat",
    "section": "Fibreoptic Endoscopic Procedures (GA or LA)"
  },
  {
    "code": "E4850",
    "description": "Therapeutic bronchoscopy for removal of foreign body",
    "chapter": "Ear, Nose and Throat",
    "section": "Fibreoptic Endoscopic Procedures (GA or LA)"
  },
  {
    "code": "E4990",
    "description": "Panendoscopy +/- incisional biopsy",
    "chapter": "Ear, Nose and Throat",
    "section": "Fibreoptic Endoscopic Procedures (GA or LA)"
  },
  {
    "code": "E4991",
    "description": "Therapeutic Panendoscopy +/- excision biopsy, excision or destruction of lesions",
    "chapter": "Ear, Nose and Throat",
    "section": "Fibreoptic Endoscopic Procedures (GA or LA)"
  },
  {
    "code": "E5100",
    "description": "Endobronchial ultrasound (as sole procedure)",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Bronchi/Lungs/Pleura"
  },
  {
    "code": "E5180",
    "description": "Diagnostic bronchoscopy +/- biopsy",
    "chapter": "Ear, Nose and Throat",
    "section": "Fibreoptic Endoscopic Procedures (GA or LA)"
  },
  {
    "code": "E5410",
    "description": "Pneumonectomy",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Bronchi/Lungs/Pleura"
  },
  {
    "code": "E5411",
    "description": "Robotic assisted pneumonectomy",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Bronchi/Lungs/Pleura"
  },
  {
    "code": "E5430",
    "description": "Pulmonary lobectomy (including segmental resection)",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Bronchi/Lungs/Pleura"
  },
  {
    "code": "E5432",
    "description": "VATS lobectomy",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Video Assisted Thoracic Surgery (VATS)"
  },
  {
    "code": "E5433",
    "description": "Robotic assisted pulmonary lobectomy (without segmental resection)",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Bronchi/Lungs/Pleura"
  },
  {
    "code": "E5434",
    "description": "Robotic assisted pulmonary segmental resection",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Bronchi/Lungs/Pleura"
  },
  {
    "code": "E5435",
    "description": "Robotic assisted navigation bronchoscopy +/- biopsy",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Fibreoptic Endoscopic Procedures (GA or LA)"
  },
  {
    "code": "E5442",
    "description": "Video-assisted thoracoscopic surgery (VATS) assisted wedge resection of lung",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Video Assisted Thoracic Surgery (VATS)"
  },
  {
    "code": "E5452",
    "description": "Robotic assisted wedge resection of lung",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Bronchi/Lungs/Pleura"
  },
  {
    "code": "E5480",
    "description": "Lung resection with resection of chest wall",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Bronchi/Lungs/Pleura"
  },
  {
    "code": "E5520",
    "description": "Open excision of lesion of lung",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Bronchi/Lungs/Pleura"
  },
  {
    "code": "E5521",
    "description": "Robotic assisted excision of lesion of lung",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Bronchi/Lungs/Pleura"
  },
  {
    "code": "E5532",
    "description": "Thoracotomy and lung biopsy (as sole procedure)",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Bronchi/Lungs/Pleura"
  },
  {
    "code": "E5533",
    "description": "Percutaneous radiofrequency ablation of malignant neoplasm of lung",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Bronchi/Lungs/Pleura"
  },
  {
    "code": "E5540",
    "description": "Laser resection of lung metastases",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Bronchi/Lungs/Pleura"
  },
  {
    "code": "E5590",
    "description": "Video-assisted thoracoscopic surgery (VATS) assisted bullectomy - unilateral +/- pleurodesis",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Video Assisted Thoracic Surgery (VATS)"
  },
  {
    "code": "E5591",
    "description": "Video-assisted thoracoscopic surgery (VATS) assisted  bullectomy - bilateral +/- pleurodesis",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Video Assisted Thoracic Surgery (VATS)"
  },
  {
    "code": "E5592",
    "description": "VATS lung volume reduction - unilateral",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Video Assisted Thoracic Surgery (VATS)"
  },
  {
    "code": "E5593",
    "description": "VATS lung volume reduction - bilateral",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Video Assisted Thoracic Surgery (VATS)"
  },
  {
    "code": "E5594",
    "description": "VATS debridement  of empyema",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Video Assisted Thoracic Surgery (VATS)"
  },
  {
    "code": "E5692",
    "description": "Robotic assisted lung volume reduction – unilateral",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Bronchi/Lungs/Pleura"
  },
  {
    "code": "E5693",
    "description": "Robotic assisted lung volume reduction – bilateral",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Bronchi/Lungs/Pleura"
  },
  {
    "code": "E5700",
    "description": "Thoracotomy lung volume reduction - bilateral",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Bronchi/Lungs/Pleura"
  },
  {
    "code": "E5702",
    "description": "Thoracotomy lung volume reduction - unilateral",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Bronchi/Lungs/Pleura"
  },
  {
    "code": "E5703",
    "description": "Thoracotomy bullectomy - bilateral +/- pleurodesis",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Bronchi/Lungs/Pleura"
  },
  {
    "code": "E5704",
    "description": "Thoracotomy bullectomy - unilateral +/- pleurodesis in presence of emphysema",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Bronchi/Lungs/Pleura"
  },
  {
    "code": "E5705",
    "description": "Thoracotomy pleurectomy/pleurodesis +/- ligation of bullae for pneumothorax",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Bronchi/Lungs/Pleura"
  },
  {
    "code": "E5707",
    "description": "Robotic assisted thoracotomy bullectomy - bilateral +/- pleurodesis",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Bronchi/Lungs/Pleura"
  },
  {
    "code": "E5708",
    "description": "Robotic assisted thoracotomy bullectomy - unilateral +/- pleurodesis",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Bronchi/Lungs/Pleura"
  },
  {
    "code": "E5910",
    "description": "Needle biopsy of lung",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Bronchi/Lungs/Pleura"
  },
  {
    "code": "E5932",
    "description": "VATS lung biopsy",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Video Assisted Thoracic Surgery (VATS)"
  },
  {
    "code": "E6100",
    "description": "Open resection of invasive mediastinal tumour",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Bronchi/Lungs/Pleura"
  },
  {
    "code": "E6110",
    "description": "Open excision of mediastinal tumour including congenital cysts/posterior chest wall lesions",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Mediastinum"
  },
  {
    "code": "E6111",
    "description": "Robotic assisted excision of mediastinal lesion (includes tumour, congenital cysts and posterior chest wall lesions) +/- mediastinal nodes",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Mediastinum"
  },
  {
    "code": "E6112",
    "description": "Removal of mediastinal and hilar lymph nodes",
    "chapter": "Vascular System",
    "section": "Lymphatic System"
  },
  {
    "code": "E6200",
    "description": "VATS excision lesion of mediastinum (including thymectomy)",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Video Assisted Thoracic Surgery (VATS)"
  },
  {
    "code": "E6300",
    "description": "Diagnostic mediastinoscopy",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Mediastinum"
  },
  {
    "code": "E6310",
    "description": "Endobronchial ultrasound-guided transbronchial needle aspiration (EBUS-TBNA) for mediastinal masses",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Mediastinum"
  },
  {
    "code": "E6710",
    "description": "Bronchial thermoplasty (including bronchoscopy) for severe asthma",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Bronchi/Lungs/Pleura"
  },
  {
    "code": "F0110",
    "description": "Excision of vermilion border of lip and advance of mucosa of lip",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Lips"
  },
  {
    "code": "F0200",
    "description": "Excision of lesion of lip",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Lips"
  },
  {
    "code": "F0312",
    "description": "Primary closure of cleft lip - unilateral",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Lips"
  },
  {
    "code": "F0313",
    "description": "Primary closure of cleft lip - bilateral",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Lips"
  },
  {
    "code": "F0314",
    "description": "Primary closure of cleft lip - unilateral (including anterior palate)",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Lips"
  },
  {
    "code": "F0315",
    "description": "Primary closure of cleft lip - bilateral (including anterior palate)",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Lips"
  },
  {
    "code": "F0320",
    "description": "Revision of Primary closure of cleft lip",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Lips"
  },
  {
    "code": "F0420",
    "description": "Reconstruction of lip using skin flap",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Lips"
  },
  {
    "code": "F0530",
    "description": "Suture of lip (as sole procedure)",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Lips"
  },
  {
    "code": "F0810",
    "description": "Transplantation of tooth",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Teeth"
  },
  {
    "code": "F0830",
    "description": "Replantation of natural tooth / teeth following trauma",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Teeth"
  },
  {
    "code": "F0910",
    "description": "Surgical removal of impacted/buried tooth/teeth",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Teeth"
  },
  {
    "code": "F0911",
    "description": "Coronectomy",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Teeth"
  },
  {
    "code": "F0950",
    "description": "Surgical removal of complicated buried roots",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Teeth"
  },
  {
    "code": "F1090",
    "description": "Extraction of a tooth under general anaesthetic",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Teeth"
  },
  {
    "code": "F1140",
    "description": "Vestibuloplasty",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Mouth Cavity"
  },
  {
    "code": "F1151",
    "description": "Dental implant stage I - surgical placement of implants",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Face and Jaws"
  },
  {
    "code": "F1152",
    "description": "Dental implant stage II – surgical exposure of buried implants",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Face and Jaws"
  },
  {
    "code": "F1153",
    "description": "Dental implant stage III - placing of the prosthesis",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Face and Jaws"
  },
  {
    "code": "F1210",
    "description": "Apicectomy",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Teeth"
  },
  {
    "code": "F1450",
    "description": "Exposure of buried tooth",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Teeth"
  },
  {
    "code": "F1810",
    "description": "Enucleation of cyst of jaw",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Teeth"
  },
  {
    "code": "F2210",
    "description": "Total glossectomy",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Tongue"
  },
  {
    "code": "F2220",
    "description": "Partial glossectomy for malignancy",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Tongue"
  },
  {
    "code": "F2222",
    "description": "Robotic assisted total glossectomy",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Tongue"
  },
  {
    "code": "F2310",
    "description": "Excision/destruction of lesion of tongue",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Tongue"
  },
  {
    "code": "F2620",
    "description": "Frenotomy /frenectomy of tongue under general anaesthetic (as sole procedure)",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Tongue"
  },
  {
    "code": "F2621",
    "description": "Frenotomy /frenectomy of tongue +/- local or topical anaesthetic (as sole procedure)",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Tongue"
  },
  {
    "code": "F2640",
    "description": "Freeing of adhesions of tongue",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Tongue"
  },
  {
    "code": "F2650",
    "description": "Suture of tongue (as sole procedure)",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Tongue"
  },
  {
    "code": "F2660",
    "description": "Tongue flap - first stage and second stage",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Tongue"
  },
  {
    "code": "F2810",
    "description": "Excision/destruction of lesion of palate",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Palate"
  },
  {
    "code": "F2910",
    "description": "Primary repair of cleft palate",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Palate"
  },
  {
    "code": "F2920",
    "description": "Revision of repair of cleft palate",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Palate"
  },
  {
    "code": "F2930",
    "description": "Pillar procedure for prevention of snoring",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Palate"
  },
  {
    "code": "F3070",
    "description": "Suture of palate",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Palate"
  },
  {
    "code": "F3240",
    "description": "Operations on uvula",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Palate"
  },
  {
    "code": "F3400",
    "description": "Tonsillectomy - child (and bilateral)",
    "chapter": "Ear, Nose and Throat",
    "section": "Throat"
  },
  {
    "code": "F3430",
    "description": "Laser assisted serial tonsillectomy - first stage",
    "chapter": "Ear, Nose and Throat",
    "section": "Throat"
  },
  {
    "code": "F3431",
    "description": "Laser assisted serial tonsillectomy - subsequent stages",
    "chapter": "Ear, Nose and Throat",
    "section": "Throat"
  },
  {
    "code": "F3440",
    "description": "Tonsillectomy  - adult (and bilateral)",
    "chapter": "Ear, Nose and Throat",
    "section": "Throat"
  },
  {
    "code": "F3441",
    "description": "Robotic assisted tonsillectomy (and bilateral)",
    "chapter": "Ear, Nose and Throat",
    "section": "Throat"
  },
  {
    "code": "F3442",
    "description": "Robotic assisted adenotonsillectomy (and bilateral)",
    "chapter": "Ear, Nose and Throat",
    "section": "Throat"
  },
  {
    "code": "F3480",
    "description": "Adenotonsillectomy (and bilateral)",
    "chapter": "Ear, Nose and Throat",
    "section": "Throat"
  },
  {
    "code": "F3490",
    "description": "Intracapsular tonsillectomy",
    "chapter": "Ear, Nose and Throat",
    "section": "Throat"
  },
  {
    "code": "F3620",
    "description": "Drainage of peritonsillar abscess (\"quinsy\")",
    "chapter": "Ear, Nose and Throat",
    "section": "Throat"
  },
  {
    "code": "F3650",
    "description": "Arrest of hemorrhage following tonsillectomy/adenoidectomy",
    "chapter": "Ear, Nose and Throat",
    "section": "Throat"
  },
  {
    "code": "F3810",
    "description": "Excision/destruction of lesion of mouth",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Mouth Cavity"
  },
  {
    "code": "F4040",
    "description": "Suture of mouth (as sole procedure)",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Mouth Cavity"
  },
  {
    "code": "F4050",
    "description": "Graft of skin or mucosa to mouth",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Mouth Cavity"
  },
  {
    "code": "F4210",
    "description": "Biopsy of lesion of mouth",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Mouth Cavity"
  },
  {
    "code": "F4230",
    "description": "Removal of excess mucosa from mouth",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Mouth Cavity"
  },
  {
    "code": "F4280",
    "description": "Low-level laser therapy for inflammation/pain relief for oral mucositis",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Mouth Cavity"
  },
  {
    "code": "F4300",
    "description": "Transoral laser microsurgery, including pharyngotomy, partial laryngectomy, partial glossectomy and/ or tracheostomy (as sole procedure)",
    "chapter": "Ear, Nose and Throat",
    "section": "Larynx and Trachea"
  },
  {
    "code": "F4301",
    "description": "Transoral robotic assisted surgery, including pharyngotomy, partial laryngectomy, partial glossectomy and/ or tracheostomy  (as sole procedure)",
    "chapter": "Ear, Nose and Throat",
    "section": "Throat"
  },
  {
    "code": "F4306",
    "description": "Transoral robotic assisted horizontal supra-glottic laryngectomy (as sole procedure)",
    "chapter": "Ear, Nose and Throat",
    "section": "Larynx and Trachea"
  },
  {
    "code": "F4307",
    "description": "Transoral robotic assisted vertical supra-glottic laryngectomy (as sole procedure).",
    "chapter": "Ear, Nose and Throat",
    "section": "Larynx and Trachea"
  },
  {
    "code": "F4308",
    "description": "Transoral robotic assisted mucosectomy for microscopic lesion (as sole procedure)",
    "chapter": "Ear, Nose and Throat",
    "section": "Larynx and Trachea"
  },
  {
    "code": "F4400",
    "description": "Excision of parotid gland (other than F4410 / F4430)",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Salivary Glands"
  },
  {
    "code": "F4410",
    "description": "Total excision of parotid gland and preservation of facial nerve",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Salivary Glands"
  },
  {
    "code": "F4430",
    "description": "Partial excision of parotid gland and preservation of facial nerve",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Salivary Glands"
  },
  {
    "code": "F4440",
    "description": "Excision of submandibular gland",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Salivary Glands"
  },
  {
    "code": "F4450",
    "description": "Excision of sublingual gland",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Salivary Glands"
  },
  {
    "code": "F4500",
    "description": "Extracapsular dissection of parotid tumour",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Salivary Glands"
  },
  {
    "code": "F4600",
    "description": "Incision or drainage of abscess or haematoma of salivary glands (i.e. including submandibular, parotid and sublingual glands)",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Salivary Glands"
  },
  {
    "code": "F4640",
    "description": "Fine needle aspiration of parotid gland",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Salivary Glands"
  },
  {
    "code": "F4810",
    "description": "Open biopsy of lesion of salivary gland",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Salivary Glands"
  },
  {
    "code": "F4830",
    "description": "Therapeutic sialendoscopy (including washout)",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Salivary Glands"
  },
  {
    "code": "F4831",
    "description": "Therapeutic sialendoscopy (including stone retrieval +/- dilation)",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Salivary Glands"
  },
  {
    "code": "F4832",
    "description": "Intra corporeal salivary gland lithotripsy",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Salivary Glands"
  },
  {
    "code": "F5010",
    "description": "Transposition of parotid duct  (including bilateral)",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Salivary Glands"
  },
  {
    "code": "F5020",
    "description": "Transposition of submandibular duct (including bilateral)",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Salivary Glands"
  },
  {
    "code": "F5110",
    "description": "Open extraction of calculus from parotid duct",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Salivary Glands"
  },
  {
    "code": "F5120",
    "description": "Open extraction of calculus from submandibular duct",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Salivary Glands"
  },
  {
    "code": "F5121",
    "description": "Combined open and endoscopic removal of submandibular gland stone",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Salivary Glands"
  },
  {
    "code": "F5510",
    "description": "Dilation of parotid duct",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Salivary Glands"
  },
  {
    "code": "F5610",
    "description": "Manipulative removal of calculus from parotid duct",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Salivary Glands"
  },
  {
    "code": "F5611",
    "description": "Combined open and endoscopic removal of parotid gland stone",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Salivary Glands"
  },
  {
    "code": "G0100",
    "description": "Oesophagectomy/Oesophagogastrectomy with anastomosis in chest",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Oesophagus"
  },
  {
    "code": "G0101",
    "description": "Radical Oesophagectomy/Oesophagogastrectomy including dissection of mediastinal lymph nodes",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Oesophagus"
  },
  {
    "code": "G0102",
    "description": "Robotic assisted radical Oesophagectomy / Oesophagogastrectomy including dissection of mediastinal lymph nodes",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Oesophagus"
  },
  {
    "code": "G0103",
    "description": "Robotic assisted Oesophagectomy/Oesophagogastrectomy with anastomosis in chest",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Oesophagus"
  },
  {
    "code": "G0220",
    "description": "Total oesophagectomy and interposition of intestine",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Oesophagus"
  },
  {
    "code": "G0260",
    "description": "Endoscopically assisted oesophagectomy",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Oesophagus"
  },
  {
    "code": "G0300",
    "description": "Sub total oesophagectomy with anastomosis in neck",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Oesophagus"
  },
  {
    "code": "G0301",
    "description": "Robotic assisted sub-total oesophagectomy with anastomosis in neck",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Oesophagus"
  },
  {
    "code": "G0400",
    "description": "Open excision of lesion of oesophagus",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Oesophagus"
  },
  {
    "code": "G0500",
    "description": "Bypass of oesophagus",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Oesophagus"
  },
  {
    "code": "G0640",
    "description": "Closure of bypass of oesophagus",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Oesophagus"
  },
  {
    "code": "G0730",
    "description": "Repair of congenital oesophageal atresia (+/- fistula)",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Oesophagus"
  },
  {
    "code": "G0740",
    "description": "Repair of ruptured oesophagus",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Oesophagus"
  },
  {
    "code": "G0920",
    "description": "Oesophagocardiomyotomy (Heller's operation)",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Oesophagus"
  },
  {
    "code": "G0921",
    "description": "Robotic assisted oesophagocardiomyotomy (Heller's)",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Oesophagus"
  },
  {
    "code": "G0922",
    "description": "VATS oesophageal/oesophogastric myotomy",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Video Assisted Thoracic Surgery (VATS)"
  },
  {
    "code": "G0980",
    "description": "Thorascopic oesophagogastric myotomy",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Oesophagus"
  },
  {
    "code": "G1400",
    "description": "VATS excision lesion of oesophagus",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Video Assisted Thoracic Surgery (VATS)"
  },
  {
    "code": "G1421",
    "description": "Endoscopic ablation of high-grade dysplasia in Barrett's oesophagus",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Oesophagus"
  },
  {
    "code": "G1422",
    "description": "Endoscopic circumferential ablation of dysplasia in Barrett’s oesophagus",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Oesophagus"
  },
  {
    "code": "G1460",
    "description": "Endoscopic mucosal resection of high-grade dysplasia in Barrett's oesophagus",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Oesophagus"
  },
  {
    "code": "G1470",
    "description": "Fibreoptic endoscopic photodynamic therapy (PDT) of lesion of oesophagus",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Oesophagus"
  },
  {
    "code": "G1900",
    "description": "Rigid oesophagoscopy (including biopsy, laser or diathermy destruction of lesions)",
    "chapter": "Endoscopic GIT Procedures",
    "section": "Endoscopic GIT Procedures"
  },
  {
    "code": "G2110",
    "description": "Oesophageal physiology studies (including pH measurement)",
    "chapter": "Endoscopic GIT Procedures",
    "section": "Endoscopic GIT Procedures"
  },
  {
    "code": "G2120",
    "description": "High resolution oesophageal manometry",
    "chapter": "Endoscopic GIT Procedures",
    "section": "Endoscopic GIT Procedures"
  },
  {
    "code": "G2140",
    "description": "Oesophageal manometry",
    "chapter": "Endoscopic GIT Procedures",
    "section": "Endoscopic GIT Procedures"
  },
  {
    "code": "G2180",
    "description": "Ambulatory 24h pH and impedance monitoring",
    "chapter": "Endoscopic GIT Procedures",
    "section": "Endoscopic GIT Procedures"
  },
  {
    "code": "G2312",
    "description": "Transthoracic repair of paraoesophageal hiatus hernia",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Oesophagus"
  },
  {
    "code": "G2320",
    "description": "Transthoracic repair of diaphragmatic hernia (acquired)",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Oesophagus"
  },
  {
    "code": "G2321",
    "description": "Robotic assisted transthoracic repair of diaphragmatic hernia (acquired)",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Oesophagus"
  },
  {
    "code": "G2330",
    "description": "Transabdominal repair of hiatus hernia",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Oesophagus"
  },
  {
    "code": "G2331",
    "description": "Laparoscopic repair of hiatus hernia with anti-reflux procedure (e.g. fundoplication)",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Video Assisted Thoracic Surgery (VATS)"
  },
  {
    "code": "G2332",
    "description": "Laparoscopic Insertion of magnetic band for gastro-oesophageal reflux disease (LINX)",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Oesophagus"
  },
  {
    "code": "G2333",
    "description": "Robotic assisted repair of hiatus hernia with anti-reflux procedure (e.g. fundoplication)",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Oesophagus"
  },
  {
    "code": "G2334",
    "description": "Laparoscopic insertion of an inactive implant for gastro-oesophageal reflux disease",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Oesophagus"
  },
  {
    "code": "G2335",
    "description": "Robotic assisted insertion of an inactive implant for gastro-oesophageal reflux disease",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Oesophagus"
  },
  {
    "code": "G2340",
    "description": "Transabdominal repair of diaphragmatic hernia (excluding hiatus hernia)",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Oesophagus"
  },
  {
    "code": "G2400",
    "description": "Transthoracic fundoplication and gastroplasty",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Oesophagus"
  },
  {
    "code": "G2402",
    "description": "Transthoracic fundoplication",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Oesophagus"
  },
  {
    "code": "G2430",
    "description": "Transabdominal anti-reflux operations",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Oesophagus"
  },
  {
    "code": "G2590",
    "description": "Revision of anti-reflux operations",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Oesophagus"
  },
  {
    "code": "G2591",
    "description": "Revision of anti-reflux operations with laparoscopic insertion of magnetic band (as sole procedure)",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Oesophagus"
  },
  {
    "code": "G2592",
    "description": "Laparoscopic revision repair of hiatus hernia with anti-reflux procedure",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Oesophagus"
  },
  {
    "code": "G2593",
    "description": "Robotic assisted revision repair of hiatus hernia with anti-reflux procedure",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Oesophagus"
  },
  {
    "code": "G2594",
    "description": "Robotic assisted revision of anti-reflux operation",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Oesophagus"
  },
  {
    "code": "G2710",
    "description": "Total gastrectomy and excision of surrounding tissue",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Stomach"
  },
  {
    "code": "G2711",
    "description": "Robotic assisted total gastrectomy and excision of surrounding tissue",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Stomach"
  },
  {
    "code": "G2800",
    "description": "Partial gastrectomy",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Stomach"
  },
  {
    "code": "G2810",
    "description": "Partial gastrectomy and excision of surrounding tissue",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Stomach"
  },
  {
    "code": "G2811",
    "description": "Robotic assisted partial gastrectomy and excision of surrounding tissue",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Oesophagus"
  },
  {
    "code": "G3060",
    "description": "Swallowable gastric balloon capsule for weight loss",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Stomach"
  },
  {
    "code": "G3070",
    "description": "Sleeve gastrectomy (including laparoscopic)",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Stomach"
  },
  {
    "code": "G3071",
    "description": "Robotic assisted sleeve gastrectomy",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Stomach"
  },
  {
    "code": "G3080",
    "description": "Laparoscopic gastric banding",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Stomach"
  },
  {
    "code": "G3090",
    "description": "Gastric bypass e.g. Roux-en-Y for morbid obesity (including laparoscopic)",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Stomach"
  },
  {
    "code": "G3095",
    "description": "Robotic assisted gastric bypass eg. Roux en Y for morbid obesity",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Stomach"
  },
  {
    "code": "G3100",
    "description": "Laparoscopic biliary gastric bypass",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Stomach"
  },
  {
    "code": "G3210",
    "description": "Gastro-jejunostomy",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Stomach"
  },
  {
    "code": "G3220",
    "description": "Revision of gastro-jejunostomy",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Stomach"
  },
  {
    "code": "G3400",
    "description": "Gastrostomy",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Stomach"
  },
  {
    "code": "G3440",
    "description": "Closure of Gastrostomy",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Stomach"
  },
  {
    "code": "G3490",
    "description": "Endoscopic removal of percutaneous endoscopic gastrostomy (PEG) tube",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Stomach"
  },
  {
    "code": "G3520",
    "description": "Closure of perforated ulcer of stomach",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Stomach"
  },
  {
    "code": "G3580",
    "description": "Laparoscopic closure of peptic ulcer",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Stomach"
  },
  {
    "code": "G3610",
    "description": "Gastropexy (for reflux)",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Stomach"
  },
  {
    "code": "G3800",
    "description": "Open operations on stomach not elsewhere classified",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Stomach"
  },
  {
    "code": "G3870",
    "description": "Laparoscopic removal of gastric band",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Major Vessels"
  },
  {
    "code": "G4010",
    "description": "Pyloromyotomy",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Stomach"
  },
  {
    "code": "G4020",
    "description": "Surgery for correction of congenital intestinal atresias",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Jejunum/Ileum"
  },
  {
    "code": "G4030",
    "description": "Pyloroplasty",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Stomach"
  },
  {
    "code": "G4370",
    "description": "Therapeutic oesophago-gastro-duodenoscopy (OGD) with elective banding of oesophageal varices",
    "chapter": "Endoscopic GIT Procedures",
    "section": "Endoscopic GIT Procedures"
  },
  {
    "code": "G4371",
    "description": "Therapeutic oesophago-gastro-duodenoscopy (OGD) with therapy for acutely bleeding ulcer or varices",
    "chapter": "Endoscopic GIT Procedures",
    "section": "Endoscopic GIT Procedures"
  },
  {
    "code": "G4410",
    "description": "Therapeutic oesophago-gastro-duodenoscopy (OGD) with insertion of prosthesis",
    "chapter": "Endoscopic GIT Procedures",
    "section": "Endoscopic GIT Procedures"
  },
  {
    "code": "G4430",
    "description": "Therapeutic oesophago-gastro-duodenoscopy (OGD) with dilatation",
    "chapter": "Endoscopic GIT Procedures",
    "section": "Endoscopic GIT Procedures"
  },
  {
    "code": "G4440",
    "description": "Therapeutic oesophago-gastro-duodenoscopy (OGD) with insertion percutaneous endoscopic gastrostomy/percutaneous endoscopic jejunostomy",
    "chapter": "Endoscopic GIT Procedures",
    "section": "Endoscopic GIT Procedures"
  },
  {
    "code": "G4442",
    "description": "Gastroscopic balloon insertion",
    "chapter": "Endoscopic GIT Procedures",
    "section": "Endoscopic GIT Procedures"
  },
  {
    "code": "G4443",
    "description": "Gastroscopic balloon removal",
    "chapter": "Endoscopic GIT Procedures",
    "section": "Endoscopic GIT Procedures"
  },
  {
    "code": "G4460",
    "description": "Endoscopic radiofrequency ablation for gastro-oesophageal reflux disease",
    "chapter": "Endoscopic GIT Procedures",
    "section": "Endoscopic GIT Procedures"
  },
  {
    "code": "G4480",
    "description": "Therapeutic enteroscopy",
    "chapter": "Endoscopic GIT Procedures",
    "section": "Endoscopic GIT Procedures"
  },
  {
    "code": "G4520",
    "description": "Diagnostic enteroscopy",
    "chapter": "Endoscopic GIT Procedures",
    "section": "Endoscopic GIT Procedures"
  },
  {
    "code": "G4530",
    "description": "Catheterless oesophageal pH monitoring (e.g. Bravo)",
    "chapter": "Endoscopic GIT Procedures",
    "section": "Endoscopic GIT Procedures"
  },
  {
    "code": "G4610",
    "description": "Transoral incisionless fundoplication (TIF)",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Oesophagus"
  },
  {
    "code": "G4680",
    "description": "Endoscopic mucosal resection (upper gastrointestinal tract)",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Stomach"
  },
  {
    "code": "G4690",
    "description": "Endoscopic submucosal dissection of gastric lesions",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Stomach"
  },
  {
    "code": "G5000",
    "description": "Open excision of lesion of duodenum",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Duodenum"
  },
  {
    "code": "G5010",
    "description": "Open excision of congenital lesion of duodenum including mal-rotation",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Duodenum"
  },
  {
    "code": "G5020",
    "description": "Robotic assisted switch of duodenum with vertical gastrectomy and biliary pancreatic diversion",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Duodenum"
  },
  {
    "code": "G5050",
    "description": "Endoscopic submucosal dissection of duodenal lesions",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Duodenum"
  },
  {
    "code": "G5100",
    "description": "Bypass of duodenum",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Duodenum"
  },
  {
    "code": "G5320",
    "description": "Closure of perforated ulcer of duodenum",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Duodenum"
  },
  {
    "code": "G5810",
    "description": "Excision of jejunum",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Jejunum/Ileum"
  },
  {
    "code": "G6000",
    "description": "Open formation of jejunostomy",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Jejunum/Ileum"
  },
  {
    "code": "G6080",
    "description": "Laparoscopic small bowel resection +/- stoma",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Jejunum/Ileum"
  },
  {
    "code": "G6082",
    "description": "Open resection of small intestine tumour",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Jejunum/Ileum"
  },
  {
    "code": "G6083",
    "description": "Robotic assisted small bowel resection +/- stoma",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Jejunum/Ileum"
  },
  {
    "code": "G6100",
    "description": "Bypass of jejunum",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Jejunum/Ileum"
  },
  {
    "code": "G6500",
    "description": "Diagnostic oesophago-gastro-duodenoscopy (OGD) includes forceps biopsy, biopsy urease test and dye spray",
    "chapter": "Endoscopic GIT Procedures",
    "section": "Endoscopic GIT Procedures"
  },
  {
    "code": "G6501",
    "description": "Cytosponge for detecting abnormal cells in the oesophagus",
    "chapter": "Investigations, simple procedures and consultation codes",
    "section": "Investigation Codes"
  },
  {
    "code": "G6710",
    "description": "Intubation of jejunum for decompression of intestine (without laparotomy)",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Jejunum/Ileum"
  },
  {
    "code": "G7100",
    "description": "Bypass of ileum",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Jejunum/Ileum"
  },
  {
    "code": "G7250",
    "description": "Ileoanal anastomosis and creation of pouch",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Jejunum/Ileum"
  },
  {
    "code": "G7402",
    "description": "Open formation of ileostomy",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Jejunum/Ileum"
  },
  {
    "code": "G7403",
    "description": "Laparoscopic ileostomy",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Jejunum/Ileum"
  },
  {
    "code": "G7512",
    "description": "Revision of ileostomy - local",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Jejunum/Ileum"
  },
  {
    "code": "G7513",
    "description": "Revision of ileostomy - laparotomy",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Jejunum/Ileum"
  },
  {
    "code": "G7530",
    "description": "Closure of ileostomy (as sole procedure)",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Jejunum/Ileum"
  },
  {
    "code": "G7900",
    "description": "Ileoscopy via stoma with therapy",
    "chapter": "Endoscopic GIT Procedures",
    "section": "Endoscopic GIT Procedures"
  },
  {
    "code": "G8080",
    "description": "Small bowel capsule endoscopy (including interpretation and evaluation)",
    "chapter": "Endoscopic GIT Procedures",
    "section": "Endoscopic GIT Procedures"
  },
  {
    "code": "G8081",
    "description": "Upper GI capsule endoscopy (including interpretation and evaluation)",
    "chapter": "Endoscopic GIT Procedures",
    "section": "Endoscopic GIT Procedures"
  },
  {
    "code": "G8082",
    "description": "Diagnostic oesophago-gastro-duodenoscopy (OGD) and immediate colonoscopy includes forceps biopsies, biopsy test and dye spray (as sole procedure)",
    "chapter": "Endoscopic GIT Procedures",
    "section": "Endoscopic GIT Procedures"
  },
  {
    "code": "G8083",
    "description": "Therapeutic oesophago-gastro-duodenoscopy (OGD) and immediate colonoscopy includes forceps biopsies, biopsy test and dye spray (as sole procedure)",
    "chapter": "Endoscopic GIT Procedures",
    "section": "Endoscopic GIT Procedures"
  },
  {
    "code": "G8084",
    "description": "Diagnostic oesophago-gastro-duodenoscopy (OGD) and immediate flexible sigmoidoscopy includes forceps biopsies, biopsy test and dye spray (as sole procedure)",
    "chapter": "Endoscopic GIT Procedures",
    "section": "Endoscopic GIT Procedures"
  },
  {
    "code": "G8085",
    "description": "Therapeutic oesophago-gastro-duodenoscopy (OGD) and immediate flexible sigmoidoscopy includes forceps biopsies, biopsy test and dye spray (as sole procedure)",
    "chapter": "Endoscopic GIT Procedures",
    "section": "Endoscopic GIT Procedures"
  },
  {
    "code": "G8086",
    "description": "Colon capsule endoscopy (including interpretation and evaluation)",
    "chapter": "Endoscopic GIT Procedures",
    "section": "Endoscopic GIT Procedures"
  },
  {
    "code": "G8087",
    "description": "Capsule endoscopy of gastrointestinal tract (including interpretation and evaluation) not elsewhere specified",
    "chapter": "Endoscopic GIT Procedures",
    "section": "Endoscopic GIT Procedures"
  },
  {
    "code": "G8090",
    "description": "Small bowel physiology studies (including manometry)",
    "chapter": "Endoscopic GIT Procedures",
    "section": "Endoscopic GIT Procedures"
  },
  {
    "code": "H0210",
    "description": "Appendicectomy",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Large Intestine"
  },
  {
    "code": "H0211",
    "description": "Robotic assisted appendicectomy",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Large Intestine"
  },
  {
    "code": "H0280",
    "description": "Laparoscopic appendicectomy",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Large Intestine"
  },
  {
    "code": "H0310",
    "description": "Drainage of abscess of appendix or drainage of intra-abdominal abscess",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Large Intestine"
  },
  {
    "code": "H0410",
    "description": "Panproctocolectomy and ileostomy",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Rectum/Anus"
  },
  {
    "code": "H0480",
    "description": "Abdominal revision of restorative proctocolectomy",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Rectum/Anus"
  },
  {
    "code": "H0481",
    "description": "Robotic assisted restorative proctocolectomy with ileoanal anastomosis and creation of pouch",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Rectum/Anus"
  },
  {
    "code": "H0482",
    "description": "Laparoscopic restorative proctocolectomy with ileoanal anastomosis and creation of pouch",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Rectum/Anus"
  },
  {
    "code": "H0483",
    "description": "Robotic assisted panproctocolectomy +/- stoma",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Rectum/Anus"
  },
  {
    "code": "H0484",
    "description": "Laparoscopic panproctocolectomy +/- stoma",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Rectum/Anus"
  },
  {
    "code": "H0510",
    "description": "Total excision of colon and ileorectal anastomosis",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Large Intestine"
  },
  {
    "code": "H0610",
    "description": "Extended excision of right hemicolon",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Large Intestine"
  },
  {
    "code": "H0700",
    "description": "Right hemicolectomy",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Large Intestine"
  },
  {
    "code": "H0750",
    "description": "Laparoscopic right hemicolectomy +/- stoma",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Large Intestine"
  },
  {
    "code": "H0760",
    "description": "Robotic assisted right hemicolectomy +/- stoma",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Large Intestine"
  },
  {
    "code": "H0761",
    "description": "Robotic assisted complete mesocolic excision (CME)",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Large Intestine"
  },
  {
    "code": "H0762",
    "description": "Complete Mesocolic Excision (CME)",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Large Intestine"
  },
  {
    "code": "H0800",
    "description": "Excision of transverse colon",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Large Intestine"
  },
  {
    "code": "H0900",
    "description": "Excision of left hemicolon",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Large Intestine"
  },
  {
    "code": "H1000",
    "description": "Excision of sigmoid colon",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Large Intestine"
  },
  {
    "code": "H1001",
    "description": "Robotic assisted excision of sigmoid colon",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Large Intestine"
  },
  {
    "code": "H1200",
    "description": "Excision of lesion of colon (transabdominal)",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Large Intestine"
  },
  {
    "code": "H1300",
    "description": "Bypass of colon",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Large Intestine"
  },
  {
    "code": "H1542",
    "description": "Closure of colostomy",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Large Intestine"
  },
  {
    "code": "H1550",
    "description": "Abdominal operation for Hirschsprung's disease (e.g. Duhamel, Söave and Surcuson operations)",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Rectum/Anus"
  },
  {
    "code": "H1581",
    "description": "Laparoscopic colostomy and stoma formation (including revision)",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Large Intestine"
  },
  {
    "code": "H1590",
    "description": "Open formation of colostomy (including revision)",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Large Intestine"
  },
  {
    "code": "H1700",
    "description": "Intra abdominal manipulation of colon for intussusception (as sole procedure)",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Large Intestine"
  },
  {
    "code": "H1880",
    "description": "Laparoscopically assisted left colon resection",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Large Intestine"
  },
  {
    "code": "H1882",
    "description": "Robotic assisted left hemicolectomy +/- stoma",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Rectum/Anus"
  },
  {
    "code": "H1883",
    "description": "Laparoscopic left hemicolectomy +/- stoma",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Rectum/Anus"
  },
  {
    "code": "H2001",
    "description": "Double Balloon Enteroscopy",
    "chapter": "Endoscopic GIT Procedures",
    "section": "Endoscopic GIT Procedures"
  },
  {
    "code": "H2002",
    "description": "Diagnostic colonoscopy, includes forceps biopsy of colon and ileum",
    "chapter": "Endoscopic GIT Procedures",
    "section": "Endoscopic GIT Procedures"
  },
  {
    "code": "H2003",
    "description": "Therapeutic colonoscopy with snare loop biopsy or excision of lesion",
    "chapter": "Endoscopic GIT Procedures",
    "section": "Endoscopic GIT Procedures"
  },
  {
    "code": "H2180",
    "description": "Fibreoptic colonoscopy and recanalisation of tumour",
    "chapter": "Endoscopic GIT Procedures",
    "section": "Endoscopic GIT Procedures"
  },
  {
    "code": "H2220",
    "description": "Endoscopic ultrasound for tumour staging, including diagnostic endoscopy",
    "chapter": "Endoscopic GIT Procedures",
    "section": "Endoscopic GIT Procedures"
  },
  {
    "code": "H2280",
    "description": "CT colonography (virtual colonoscopy)",
    "chapter": "Endoscopic GIT Procedures",
    "section": "Endoscopic GIT Procedures"
  },
  {
    "code": "H2350",
    "description": "Endoscopic mucosal resection (EMR) of colorectal polyp",
    "chapter": "Endoscopic GIT Procedures",
    "section": "Endoscopic GIT Procedures"
  },
  {
    "code": "H2380",
    "description": "Endoscopic submucosal dissection (ESD) of colorectal polyp",
    "chapter": "Endoscopic GIT Procedures",
    "section": "Endoscopic GIT Procedures"
  },
  {
    "code": "H2502",
    "description": "Diagnostic flexible sigmoidoscopy (including forceps biopsy and proctoscopy)",
    "chapter": "Endoscopic GIT Procedures",
    "section": "Endoscopic GIT Procedures"
  },
  {
    "code": "H2503",
    "description": "Therapeutic sigmoidoscopy with snare loop biopsy or excision of lesion",
    "chapter": "Endoscopic GIT Procedures",
    "section": "Endoscopic GIT Procedures"
  },
  {
    "code": "H2510",
    "description": "Rigid sigmoidoscopy (including proctoscopy and biopsy)",
    "chapter": "Endoscopic GIT Procedures",
    "section": "Endoscopic GIT Procedures"
  },
  {
    "code": "H3310",
    "description": "Abdominoperineal pull through resection with colo-anal anastomosis +/- colonic pouch and  associated stoma",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Rectum/Anus"
  },
  {
    "code": "H3320",
    "description": "Abdominoperineal resection of rectum and anus",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Rectum/Anus"
  },
  {
    "code": "H3322",
    "description": "Laparoscopic abdominoperineal resection +/- stoma",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Rectum/Anus"
  },
  {
    "code": "H3324",
    "description": "Robotic assisted abdominoperineal resection +/- stoma",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Rectum/Anus"
  },
  {
    "code": "H3332",
    "description": "Anterior resection - high (i.e. colorectal anastomosis above the peritoneal reflection)",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Rectum/Anus"
  },
  {
    "code": "H3334",
    "description": "Anterior resection - low (i.e. colorectal anastomosis at or below the peritoneal reflection)",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Rectum/Anus"
  },
  {
    "code": "H3335",
    "description": "Endoscopic vacuum therapy for colorectal anastomotic leakage",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Rectum/Anus"
  },
  {
    "code": "H3362",
    "description": "Hartmann's procedure",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Rectum/Anus"
  },
  {
    "code": "H3363",
    "description": "Colectomy and colostomy and preservation of rectum",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Rectum/Anus"
  },
  {
    "code": "H3364",
    "description": "Laparoscopic anterior resection - high (i.e. colorectal anastomosis above the peritoneal reflection)",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Rectum/Anus"
  },
  {
    "code": "H3365",
    "description": "Laparoscopic anterior resection - low (i.e. colorectal anastomosis at or below the peritoneal reflection)",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Rectum/Anus"
  },
  {
    "code": "H3366",
    "description": "Laparoscopic Hartmann’s procedure",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Rectum/Anus"
  },
  {
    "code": "H3369",
    "description": "Robotic assisted Hartmann’s procedure",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Rectum/Anus"
  },
  {
    "code": "H3370",
    "description": "Robotic assisted high anterior resection of rectum +/- stoma",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Rectum/Anus"
  },
  {
    "code": "H3371",
    "description": "Laparoscopic colectomy +/- stoma",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Rectum/Anus"
  },
  {
    "code": "H3372",
    "description": "Robotic assisted colectomy +/- stoma",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Rectum/Anus"
  },
  {
    "code": "H3373",
    "description": "Robotic assisted low anterior resection of rectum +/- stoma",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Rectum/Anus"
  },
  {
    "code": "H3380",
    "description": "Partial excision of rectum and sigmoid colon for prolapse",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Rectum/Anus"
  },
  {
    "code": "H3382",
    "description": "Proctectomy",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Rectum/Anus"
  },
  {
    "code": "H3383",
    "description": "Robotic assisted total mesorectal excision (TME)",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Rectum/Anus"
  },
  {
    "code": "H3384",
    "description": "Open Total Mesorectal Excision (TME)",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Rectum/Anus"
  },
  {
    "code": "H3385",
    "description": "Laparoscopic total mesorectal excision (TME)",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Rectum/Anus"
  },
  {
    "code": "H3386",
    "description": "Transanal Total Mesorectal Excision (TME)",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Rectum/Anus"
  },
  {
    "code": "H3387",
    "description": "Robotic assisted proctectomy +/- stoma",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Rectum/Anus"
  },
  {
    "code": "H3388",
    "description": "Laparoscopic proctectomy +/- stoma",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Rectum/Anus"
  },
  {
    "code": "H3390",
    "description": "Reversal of Hartmann's procedure",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Rectum/Anus"
  },
  {
    "code": "H3391",
    "description": "Robotic assisted reversal of Hartmann's procedure",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Rectum/Anus"
  },
  {
    "code": "H3392",
    "description": "Laparoscopic reversal of Hartmann's procedure",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Rectum/Anus"
  },
  {
    "code": "H3400",
    "description": "Open excision of lesion of rectum and colon",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Rectum/Anus"
  },
  {
    "code": "H3501",
    "description": "Open rectopexy requiring mesh",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Rectum/Anus"
  },
  {
    "code": "H3502",
    "description": "Open rectopexy not requiring a mesh",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Rectum/Anus"
  },
  {
    "code": "H3580",
    "description": "Laparoscopic ventral rectopexy not requiring mesh",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Rectum/Anus"
  },
  {
    "code": "H3582",
    "description": "Laparoscopic ventral rectopexy requiring mesh",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Rectum/Anus"
  },
  {
    "code": "H3583",
    "description": "Robotic assisted ventral rectopexy not requiring mesh",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Rectum/Anus"
  },
  {
    "code": "H3584",
    "description": "Robotic assisted ventral rectopexy requiring mesh",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Abdominal Wall"
  },
  {
    "code": "H3590",
    "description": "Stapled transanal rectal resection (STARR) for obstructed defaecation syndrome",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Rectum/Anus"
  },
  {
    "code": "H4000",
    "description": "Transanal resection for local rectal growth",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Rectum/Anus"
  },
  {
    "code": "H4050",
    "description": "Endoscopic radiofrequency therapy of the anal sphincter for faecal incontinence",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Rectum/Anus"
  },
  {
    "code": "H4080",
    "description": "Injection of bulking agents for faecal incontinence",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Rectum/Anus"
  },
  {
    "code": "H4122",
    "description": "Transanal endoscopic microsurgery",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Rectum/Anus"
  },
  {
    "code": "H4130",
    "description": "Perianal excision of lesion of rectum (including sigmoidoscopy)",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Rectum/Anus"
  },
  {
    "code": "H4180",
    "description": "Full or partial thickness rectal biopsy",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Rectum/Anus"
  },
  {
    "code": "H4190",
    "description": "Therapeutic High Resolution Anoscopy (HRA) in symptomatic patients (+/- biopsy or ablation of lesion of anus)",
    "chapter": "Endoscopic GIT Procedures",
    "section": "Endoscopic GIT Procedures"
  },
  {
    "code": "H4200",
    "description": "Perineal repair of prolapse of rectum",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Rectum/Anus"
  },
  {
    "code": "H4420",
    "description": "Faecal disimpaction",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Rectum/Anus"
  },
  {
    "code": "H4430",
    "description": "Examination of rectum under anaesthetic (as sole procedure)",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Rectum/Anus"
  },
  {
    "code": "H4480",
    "description": "Dilation of stricture of rectum",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Rectum/Anus"
  },
  {
    "code": "H4680",
    "description": "Repair of faecal fistula",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Rectum/Anus"
  },
  {
    "code": "H4685",
    "description": "Insertion of biodegradable perirectal spacer under image guidance",
    "chapter": "Radiotherapy",
    "section": "Radiotherapy"
  },
  {
    "code": "H4800",
    "description": "Excision of lesion of anus",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Rectum/Anus"
  },
  {
    "code": "H4900",
    "description": "Destruction of lesion of anus",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Rectum/Anus"
  },
  {
    "code": "H5020",
    "description": "Repair of anal sphincter (including sigmoidoscopy)",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Rectum/Anus"
  },
  {
    "code": "H5042",
    "description": "Primary repair of high/intermediate congenital ano-rectal anomaly",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Rectum/Anus"
  },
  {
    "code": "H5043",
    "description": "Primary repair of low congenital ano-rectal anomaly",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Rectum/Anus"
  },
  {
    "code": "H5080",
    "description": "Repair of anal trauma",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Rectum/Anus"
  },
  {
    "code": "H5100",
    "description": "Haemorrhoidectomy (including sigmoidoscopy)",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Rectum/Anus"
  },
  {
    "code": "H5101",
    "description": "Laser haemorrhoidectomy (including sigmoidoscopy)",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Rectum/Anus"
  },
  {
    "code": "H5120",
    "description": "Radiofrequency ablation of haemorrhoids",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Rectum/Anus"
  },
  {
    "code": "H5230",
    "description": "Injection of sclerosing substance into haemorrhoids",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Rectum/Anus"
  },
  {
    "code": "H5240",
    "description": "Banding of haemorrhoids",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Rectum/Anus"
  },
  {
    "code": "H5250",
    "description": "Circular stapling haemorrhoidectomy",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Rectum/Anus"
  },
  {
    "code": "H5260",
    "description": "Low voltage treatment of internal haemorrhoids",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Rectum/Anus"
  },
  {
    "code": "H5400",
    "description": "Anorectal stretch",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Rectum/Anus"
  },
  {
    "code": "H5510",
    "description": "Laying open of low anal fistula (fistulotomy) (including sigmoidoscopy)",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Rectum/Anus"
  },
  {
    "code": "H5520",
    "description": "Laying open of high anal fistula (fistulotomy) (including sigmoidoscopy)",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Rectum/Anus"
  },
  {
    "code": "H5530",
    "description": "Closure of anal fistula using a suturable bioprosthetic or synthetic plugs +/- image guidance",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Rectum/Anus"
  },
  {
    "code": "H5540",
    "description": "Seton placement for treatment of anal fistula",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Rectum/Anus"
  },
  {
    "code": "H5541",
    "description": "Adjustment or removal of Seton under general anaesthetic",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Rectum/Anus"
  },
  {
    "code": "H5559",
    "description": "Modified ligation of the intersphincteric fistula tract (LIFT) for the treatment of anal fistula with mesh/plug or video assistance.",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Rectum/Anus"
  },
  {
    "code": "H5560",
    "description": "Ligation of the intersphincteric fistula tract (LIFT) for the treatment of anal fistula without mesh/plug or video assistance.",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Rectum/Anus"
  },
  {
    "code": "H5561",
    "description": "Endoscopic ablation for an anal fistula with flap",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Rectum/Anus"
  },
  {
    "code": "H5562",
    "description": "Collagen paste for closing an anal fistula",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Rectum/Anus"
  },
  {
    "code": "H5580",
    "description": "Endoscopic ablation for an anal fistula without flap",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Rectum/Anus"
  },
  {
    "code": "H5620",
    "description": "Lateral sphincterotomy of anus",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Rectum/Anus"
  },
  {
    "code": "H5640",
    "description": "Excision of anal fissure",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Rectum/Anus"
  },
  {
    "code": "H5680",
    "description": "Excision of pressure sore excluding repair",
    "chapter": "Skin and Subcutaneous Tissue",
    "section": "Lesions of Skin"
  },
  {
    "code": "H5800",
    "description": "Drainage through perineal region (including ischio-rectal abscess) (including sigmoidoscopy)",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Rectum/Anus"
  },
  {
    "code": "H5940",
    "description": "Excision of pilonidal sinus and suture/skin graft",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Rectum/Anus"
  },
  {
    "code": "H5941",
    "description": "Excision of pilonidal sinus with flap reconstruction",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Rectum/Anus"
  },
  {
    "code": "H6020",
    "description": "Laying open of pilonidal sinus",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Rectum/Anus"
  },
  {
    "code": "H6050",
    "description": "Endoscopic ablation for a pilonidal sinus",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Rectum/Anus"
  },
  {
    "code": "H6260",
    "description": "Proctoscopy (+/- biopsy)",
    "chapter": "Endoscopic GIT Procedures",
    "section": "Endoscopic GIT Procedures"
  },
  {
    "code": "H6261",
    "description": "Video-assisted proctoscopy",
    "chapter": "Endoscopic GIT Procedures",
    "section": "Endoscopic GIT Procedures"
  },
  {
    "code": "H6280",
    "description": "Faecal microbiota transplant for the treatment of recurrent clostridium difficile infection",
    "chapter": "Endoscopic GIT Procedures",
    "section": "Endoscopic GIT Procedures"
  },
  {
    "code": "H6840",
    "description": "Flexible pouchoscopy +/- biopsy and/or removal of polyp(s)",
    "chapter": "Endoscopic GIT Procedures",
    "section": "Endoscopic GIT Procedures"
  },
  {
    "code": "J0200",
    "description": "Partial hepatectomy (left hepatectomy or resection of up to three segments) +/- cholecystectomy",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Other Organs (Mainly Digestive)"
  },
  {
    "code": "J0210",
    "description": "Hemihepatectomy (resection of four or more segments) +/- cholecystectomy",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Other Organs (Mainly Digestive)"
  },
  {
    "code": "J0221",
    "description": "Robotic assisted hemi-hepatectomy (resection of four or more segments) +/- cholecystectomy",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Other Organs (Mainly Digestive)"
  },
  {
    "code": "J0222",
    "description": "Laparoscopic hemi-hepatectomy (resection of four or more segments) +/- cholecystectomy",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Other Organs (Mainly Digestive)"
  },
  {
    "code": "J0230",
    "description": "Robotic assisted hemi-hepatectomy (hepatectomy or resection of up to three segments) +/- cholecystectomy",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Other Organs (Mainly Digestive)"
  },
  {
    "code": "J0231",
    "description": "Laparoscopic hemi-hepatectomy (hepatectomy or resection of up to three segments) +/- cholecystectomy",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Other Organs (Mainly Digestive)"
  },
  {
    "code": "J0310",
    "description": "Resection of liver tumour(s)",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Other Organs (Mainly Digestive)"
  },
  {
    "code": "J0311",
    "description": "Robotic assisted excision of liver tumour(s)",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Other Organs (Mainly Digestive)"
  },
  {
    "code": "J0312",
    "description": "Microwave ablation for primary or metastatic cancer of the liver",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Other Organs (Mainly Digestive)"
  },
  {
    "code": "J0313",
    "description": "Laparoscopic assisted excision of liver tumour(s)",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Other Organs (Mainly Digestive)"
  },
  {
    "code": "J0320",
    "description": "2 stage associating liver partition and portal vein ligation for staged hepatectomy (ALPPS) procedure – first stage",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Other Organs (Mainly Digestive)"
  },
  {
    "code": "J0330",
    "description": "2 stage associating liver partition and portal vein ligation for staged hepatectomy (ALPPS) procedure – second stage",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Other Organs (Mainly Digestive)"
  },
  {
    "code": "J0400",
    "description": "Repair of liver (including therapeutic laparoscopic operations on liver)",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Other Organs (Mainly Digestive)"
  },
  {
    "code": "J0401",
    "description": "Robotic assisted repair of liver (including therapeutic laparoscopic operations on liver).",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Other Organs (Mainly Digestive)"
  },
  {
    "code": "J0402",
    "description": "Laparoscopic repair of liver (including therapeutic operations on liver)",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Other Organs (Mainly Digestive)"
  },
  {
    "code": "J0510",
    "description": "Open drainage of liver",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Other Organs (Mainly Digestive)"
  },
  {
    "code": "J0740",
    "description": "Open hepatectomy and ablation",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Other Organs (Mainly Digestive)"
  },
  {
    "code": "J0780",
    "description": "Radiofrequency thermocoagulation of liver with scalpel liver resection",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Other Organs (Mainly Digestive)"
  },
  {
    "code": "J0781",
    "description": "Chemosaturation therapy for primary or metastatic cancer of the liver",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Other Organs (Mainly Digestive)"
  },
  {
    "code": "J0900",
    "description": "Diagnostic laparoscopy (including any biopsy)",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Other Organs (Mainly Digestive)"
  },
  {
    "code": "J1041",
    "description": "Hepatic venous wedge pressure (HVWP)",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Other Organs (Mainly Digestive)"
  },
  {
    "code": "J1140",
    "description": "TIPS Stent tipsogram",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Other Organs (Mainly Digestive)"
  },
  {
    "code": "J1300",
    "description": "Percutaneous biopsy of lesion of liver",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Other Organs (Mainly Digestive)"
  },
  {
    "code": "J1400",
    "description": "Open puncture of liver",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Other Organs (Mainly Digestive)"
  },
  {
    "code": "J1800",
    "description": "Cholecystectomy (including mini-cholecystectomy)",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Other Organs (Mainly Digestive)"
  },
  {
    "code": "J1820",
    "description": "Cholecystectomy with exploration of common bile duct",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Other Organs (Mainly Digestive)"
  },
  {
    "code": "J1821",
    "description": "Robotic assisted choleycystectomy with exploration of common bile duct",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Other Organs (Mainly Digestive)"
  },
  {
    "code": "J1822",
    "description": "Laparoscopic cholecystectomy with exploration of common bile duct",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Other Organs (Mainly Digestive)"
  },
  {
    "code": "J1830",
    "description": "Laparoscopic cholecystectomy",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Other Organs (Mainly Digestive)"
  },
  {
    "code": "J1831",
    "description": "Robotic assisted cholecystectomy",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Other Organs (Mainly Digestive)"
  },
  {
    "code": "J1880",
    "description": "Laparoscopic cholecystectomy with peri-operative cholangiogram",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Other Organs (Mainly Digestive)"
  },
  {
    "code": "J1881",
    "description": "Robotic assisted cholecystectomy with peri-operative cholangiogram",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Other Organs (Mainly Digestive)"
  },
  {
    "code": "J1882",
    "description": "Cholecystectomy with peri-operative cholangiogram",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Other Organs (Mainly Digestive)"
  },
  {
    "code": "J1900",
    "description": "Anastomosis of gall bladder (to another viscus)",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Other Organs (Mainly Digestive)"
  },
  {
    "code": "J2720",
    "description": "Partial excision of bile duct and anastomosis of bile duct to duodenum/jejunum",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Other Organs (Mainly Digestive)"
  },
  {
    "code": "J2721",
    "description": "Robotic assisted partial excision of bile duct and anastomosis of bile duct to duodenum/jejunum",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Other Organs (Mainly Digestive)"
  },
  {
    "code": "J2800",
    "description": "Excision of lesion of bile duct",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Other Organs (Mainly Digestive)"
  },
  {
    "code": "J2900",
    "description": "Anastomosis of hepatic duct",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Other Organs (Mainly Digestive)"
  },
  {
    "code": "J3000",
    "description": "Anastomosis of common bile duct",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Other Organs (Mainly Digestive)"
  },
  {
    "code": "J3100",
    "description": "Open introduction of prosthesis into bile duct",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Other Organs (Mainly Digestive)"
  },
  {
    "code": "J3200",
    "description": "Repair of bile duct",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Other Organs (Mainly Digestive)"
  },
  {
    "code": "J3300",
    "description": "Incision of bile duct (including exploration for calculus removal)",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Other Organs (Mainly Digestive)"
  },
  {
    "code": "J3500",
    "description": "Sphincterotomy of bile duct and pancreatic duct using duodenal approach",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Other Organs (Mainly Digestive)"
  },
  {
    "code": "J3700",
    "description": "Endoscopic ultrasound-guided gallbladder drainage for acute cholecystitis",
    "chapter": "Endoscopic GIT Procedures",
    "section": "Endoscopic GIT Procedures"
  },
  {
    "code": "J3800",
    "description": "Therapeutic ERCP without insertion of stents",
    "chapter": "Endoscopic GIT Procedures",
    "section": "Endoscopic GIT Procedures"
  },
  {
    "code": "J3801",
    "description": "Therapeutic ERCP using ultra-slim direct visualisation system (includes forceps biopsy)",
    "chapter": "Endoscopic GIT Procedures",
    "section": "Endoscopic GIT Procedures"
  },
  {
    "code": "J3900",
    "description": "Therapeutic ERCP with insertion of biliary or pancreatic stent(s), sphincterotomy or stone extraction",
    "chapter": "Endoscopic GIT Procedures",
    "section": "Endoscopic GIT Procedures"
  },
  {
    "code": "J4300",
    "description": "Diagnostic ERCP ( includes forceps biopsy)",
    "chapter": "Endoscopic GIT Procedures",
    "section": "Endoscopic GIT Procedures"
  },
  {
    "code": "J4301",
    "description": "Diagnostic ERCP using ultra-slim direct visualisation system (includes forceps biopsy)",
    "chapter": "Endoscopic GIT Procedures",
    "section": "Endoscopic GIT Procedures"
  },
  {
    "code": "J5000",
    "description": "Percutaneous examination of bile duct",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Other Organs (Mainly Digestive)"
  },
  {
    "code": "J5500",
    "description": "Total pancreatectomy and excision of surrounding tissue",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Other Organs (Mainly Digestive)"
  },
  {
    "code": "J5520",
    "description": "Total pancreatectomy",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Other Organs (Mainly Digestive)"
  },
  {
    "code": "J5610",
    "description": "Pancreatoduodenectomy and excision of surrounding tissue (Whipple's procedure)",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Other Organs (Mainly Digestive)"
  },
  {
    "code": "J5611",
    "description": "Laparoscopic pancreatoduodenectomy and excision of surrounding tissue (Whipple's procedure)",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Other Organs (Mainly Digestive)"
  },
  {
    "code": "J5612",
    "description": "Robotic assisted pancreatoduodenectomy and excision of surrounding tissue (Whipple's procedure)",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Other Organs (Mainly Digestive)"
  },
  {
    "code": "J5700",
    "description": "Distal pancreatectomy",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Other Organs (Mainly Digestive)"
  },
  {
    "code": "J5712",
    "description": "Robotic assisted distal pancreatectomy",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Other Organs (Mainly Digestive)"
  },
  {
    "code": "J5750",
    "description": "Laparoscopic distal pancreatectomy",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Other Organs (Mainly Digestive)"
  },
  {
    "code": "J5800",
    "description": "Excision of lesion of pancreas",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Other Organs (Mainly Digestive)"
  },
  {
    "code": "J5810",
    "description": "Irreversible electroporation of pancreatic tumors",
    "chapter": "Interventional Radiology",
    "section": "Other"
  },
  {
    "code": "J5900",
    "description": "Anastomosis of pancreatic duct (to another viscus)",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Other Organs (Mainly Digestive)"
  },
  {
    "code": "J6100",
    "description": "Open drainage of lesion of pancreas",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Other Organs (Mainly Digestive)"
  },
  {
    "code": "J6180",
    "description": "Drainage of pancreatic abscess",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Other Organs (Mainly Digestive)"
  },
  {
    "code": "J6200",
    "description": "Incision of pancreas",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Other Organs (Mainly Digestive)"
  },
  {
    "code": "J6300",
    "description": "Open examination of pancreas",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Other Organs (Mainly Digestive)"
  },
  {
    "code": "J6600",
    "description": "Therapeutic percutaneous operations on pancreas",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Other Organs (Mainly Digestive)"
  },
  {
    "code": "J6730",
    "description": "Endoscopic upper gastrointestinal ultrasound, e.g. for pancreatico-biliary diagnosis/transmucosal biopsy",
    "chapter": "Endoscopic GIT Procedures",
    "section": "Endoscopic GIT Procedures"
  },
  {
    "code": "J6900",
    "description": "Open splenectomy",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Other Organs (Mainly Digestive)"
  },
  {
    "code": "J6980",
    "description": "Laparoscopic splenectomy",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Other Organs (Mainly Digestive)"
  },
  {
    "code": "J6981",
    "description": "Robotic assisted splenectomy",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Other Organs (Mainly Digestive)"
  },
  {
    "code": "J9901",
    "description": "Cytoreductive surgery (Sugarbaker technique) for Pseudomyxoma Peritonei with intraperitoneal chemotherapy",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Peritoneum"
  },
  {
    "code": "J9902",
    "description": "Cytoreductive surgery for Colorectal Peritoneal Carcinomatosis (2-3 distinct procedures) with intraperitoneal chemotherapy",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Peritoneum"
  },
  {
    "code": "J9903",
    "description": "Cytoreductive surgery for Colorectal Peritoneal Carcinomatosis (4-6 distinct procedures) with intraperitoneal chemotherapy",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Peritoneum"
  },
  {
    "code": "J9904",
    "description": "Cytoreductive surgery for Colorectal Peritoneal Carcinomatosis (7-8 distinct procedures) with intraperitoneal chemotherapy",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Peritoneum"
  },
  {
    "code": "J9905",
    "description": "Repeat Cytoreductive surgery for Pseudomyxoma Peritonei or Colorectal Peritoneal Carcinomatosis with intraperitoneal chemotherapy",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Peritoneum"
  },
  {
    "code": "J9906",
    "description": "Heated intraperitoneal chemotherapy for Colorectal Peritoneal Carcinomatosis",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Peritoneum"
  },
  {
    "code": "J9907",
    "description": "Cytoreductive surgery for Ovarian Malignancies excluding intraperitoneal chemotherapy",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Peritoneum"
  },
  {
    "code": "J9908",
    "description": "Cytoreductive surgery for stage III epithelial ovarian malignancies including Heated Intraperitoneal Chemotherapy (HIPEC)",
    "chapter": "Female Reproductive Organs",
    "section": "Uterus/Adnexa"
  },
  {
    "code": "J9909",
    "description": "Cytoreductive surgery for metastatic Gastrointestinal Stromal Tumours (GIST) excluding intraperitoneal chemotherapy",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Peritoneum"
  },
  {
    "code": "K0400",
    "description": "Correction of tetralogy of Fallot",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiac Surgery"
  },
  {
    "code": "K0500",
    "description": "Atrial inversion for transposition of great vessels",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiac Surgery"
  },
  {
    "code": "K0530",
    "description": "Double switch procedure (arterial and atrial)",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiac Surgery"
  },
  {
    "code": "K0700",
    "description": "Correction of total anomalous pulmonary venous connection",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiac Surgery"
  },
  {
    "code": "K0900",
    "description": "Repair of complete atrioventricular septal defect",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiac Surgery"
  },
  {
    "code": "K0930",
    "description": "Closure of partial atrioventricular septal defect",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiac Surgery"
  },
  {
    "code": "K0960",
    "description": "Minimally invasive endoscopic repair of atrial septal defects (ASD) via mini-thoracotomy",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiac Surgery"
  },
  {
    "code": "K0970",
    "description": "Percutaneous covered stent correction of sinus venosus atrial septal defect",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiac Surgery"
  },
  {
    "code": "K0980",
    "description": "Septal myectomy",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiac Surgery"
  },
  {
    "code": "K1000",
    "description": "Closure of defect of interatrial septum (secundum Atrial septal Defect or Patent Foramen Ovale)",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiac Surgery"
  },
  {
    "code": "K1100",
    "description": "Closure of defect of interventricular septum",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiac Surgery"
  },
  {
    "code": "K1180",
    "description": "Endovascular closure of perimembranous ventricular septal defect",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiology"
  },
  {
    "code": "K1200",
    "description": "Norwood stage 1 procedure",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiac Surgery"
  },
  {
    "code": "K1600",
    "description": "Therapeutic transluminal operations on atrial septum of heart",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiac Surgery"
  },
  {
    "code": "K1680",
    "description": "Transluminal closure of atrial septal defect/patent foramen ovale",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiac Surgery"
  },
  {
    "code": "K1690",
    "description": "Non-surgical reduction of myocardial septum (e.g. alcohol septal ablation)",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiology"
  },
  {
    "code": "K1800",
    "description": "Placement of valve to cardiac conduit",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiac Surgery"
  },
  {
    "code": "K1850",
    "description": "Revision placement of valve to cardiac conduit",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiac Surgery"
  },
  {
    "code": "K2280",
    "description": "Percutaneous occlusion of left atrial appendage",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiology"
  },
  {
    "code": "K2281",
    "description": "Closure of left atrial appendage (other than percutaneous) in association with other cardiac surgery",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiac Surgery"
  },
  {
    "code": "K2310",
    "description": "Excision of cardiac tumour",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiac Surgery"
  },
  {
    "code": "K2340",
    "description": "Direct (laser) percutaneous myocardial revascularisation",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiology"
  },
  {
    "code": "K2540",
    "description": "Replacement of mitral valve with sub-valve preservation (including biopsies)",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiac Surgery"
  },
  {
    "code": "K2542",
    "description": "Revision replacement of mitral valve",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiac Surgery"
  },
  {
    "code": "K2543",
    "description": "Minimally invasive replacement of mitral valve",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiac Surgery"
  },
  {
    "code": "K2560",
    "description": "Robotic assisted replacement or repair of mitral valve",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiac Surgery"
  },
  {
    "code": "K2580",
    "description": "Repair of mitral valve",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiac Surgery"
  },
  {
    "code": "K2581",
    "description": "Minimally invasive mitral valve repair",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiac Surgery"
  },
  {
    "code": "K2590",
    "description": "Percutaneous mitral valve leaflet repair",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiology"
  },
  {
    "code": "K2591",
    "description": "Percutaneous tricuspid valve edge to edge repair",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Great Vessels"
  },
  {
    "code": "K2600",
    "description": "Replacement or repair of aortic valve",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiac Surgery"
  },
  {
    "code": "K2601",
    "description": "Sutureless aortic valve replacement for aortic stenosis",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiac Surgery"
  },
  {
    "code": "K2602",
    "description": "Minimally invasive replacement of aortic valve",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiac Surgery"
  },
  {
    "code": "K2610",
    "description": "Ross procedure",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiac Surgery"
  },
  {
    "code": "K2612",
    "description": "Replacement of aortic valve with homograft or stentless porcine",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiac Surgery"
  },
  {
    "code": "K2613",
    "description": "Revision of aortic valve replacement",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiac Surgery"
  },
  {
    "code": "K2700",
    "description": "Replacement of tricuspid valve (including valvuloplasty)",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiac Surgery"
  },
  {
    "code": "K2780",
    "description": "Repair of tricuspid valve, e.g. for Ebstein's disease",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiac Surgery"
  },
  {
    "code": "K2800",
    "description": "Replacement of pulmonary valve (including valvuloplasty/valvotomy)",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiac Surgery"
  },
  {
    "code": "K2810",
    "description": "Percutaneous replacement/implantation of pulmonary valve",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiology"
  },
  {
    "code": "K3100",
    "description": "Open valvotomy",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiac Surgery"
  },
  {
    "code": "K3210",
    "description": "Closed mitral valvotomy",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiac Surgery"
  },
  {
    "code": "K3300",
    "description": "Surgical aortic root repair using Personalised External Aortic Root Support (PEARS)",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiac Surgery"
  },
  {
    "code": "K3500",
    "description": "Therapeutic transluminal operation(s) on valve of heart",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiac Surgery"
  },
  {
    "code": "K3501",
    "description": "Percutaneous paravalvular leak closure",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiology"
  },
  {
    "code": "K3580",
    "description": "Trans catheter aortic valve implantation (TAVI) without percutaneous insertion of a cerebral protection device",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiology"
  },
  {
    "code": "K3581",
    "description": "Trans catheter aortic valve implantation (TAVI) with percutaneous insertion of a cerebral protection device",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiac Surgery"
  },
  {
    "code": "K4100",
    "description": "Bypass for coronary artery(ies) including harvesting of grafts and endarterectomy",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiac Surgery"
  },
  {
    "code": "K4180",
    "description": "Robotic assisted bypass for coronary artery(ies) including harvesting of grafts and endarterectomy (CABG)",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiac Surgery"
  },
  {
    "code": "K4410",
    "description": "Revision bypass for coronary artery(ies) (including harvesting of grafts)",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiac Surgery"
  },
  {
    "code": "K4600",
    "description": "Off-pump coronary artery bypass (OPCAB) (including harvesting of grafts)",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiac Surgery"
  },
  {
    "code": "K4610",
    "description": "Minimally invasive direct coronary artery bypass (MIDCAB) including harvesting of graft",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiac Surgery"
  },
  {
    "code": "K4880",
    "description": "Correction of anomalous coronary arteries",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiac Surgery"
  },
  {
    "code": "K4900",
    "description": "Percutaneous transluminal angioplasty of coronary artery(ies) (including laser)",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiology"
  },
  {
    "code": "K4902",
    "description": "Percutaneous transluminal angioplasty of coronary artery(ies) with intravascular ultrasound (including laser)",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiology"
  },
  {
    "code": "K4910",
    "description": "Percutaneous transluminal angioplasty with stent insertion",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiology"
  },
  {
    "code": "K4912",
    "description": "Percutaneous transluminal angioplasty with stent insertion and intravascular ultrasound",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiology"
  },
  {
    "code": "K4920",
    "description": "Percutaneous transluminal angioplasty of coronary artery(ies) for chronic total occlusions (CTO), +/- insertion of stent",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiology"
  },
  {
    "code": "K4930",
    "description": "Coronary sinus reducer implant",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiology"
  },
  {
    "code": "K5020",
    "description": "Coronary angiography proceeding to angioplasty on the same day, +/- insertion of stent",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiology"
  },
  {
    "code": "K5040",
    "description": "Rotablation of coronary vessel(s) percutaneous transluminal rotational atherectomy (PCRS) +/- insertion of stent",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiology"
  },
  {
    "code": "K5050",
    "description": "Coronary angioplasty following angiography with intravascular ultrasound on the same day, +/- insertion of stent",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiology"
  },
  {
    "code": "K5110",
    "description": "Angioscopy",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiology"
  },
  {
    "code": "K5120",
    "description": "Intravascular ultrasound of coronary arteries (as sole procedure)",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiology"
  },
  {
    "code": "K5121",
    "description": "Intravascular ultrasound with peripheral angioplasty +/- stent",
    "chapter": "Interventional Radiology",
    "section": "Angioplasty"
  },
  {
    "code": "K5280",
    "description": "Map guided surgery for ventricular arrhythmias (including mapping)",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiology"
  },
  {
    "code": "K5283",
    "description": "Complex Cox lesion set maze operation",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiac Surgery"
  },
  {
    "code": "K5330",
    "description": "Repair of post infarction ventricular septal defect",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiac Surgery"
  },
  {
    "code": "K5380",
    "description": "Repair of ventricular aneurysm",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiac Surgery"
  },
  {
    "code": "K5530",
    "description": "Ventriculoplasty (including ventriculectomy) (Batista operation)",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiac Surgery"
  },
  {
    "code": "K5710",
    "description": "Ablation of atrio-ventricular junction (including mapping)",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiology"
  },
  {
    "code": "K5720",
    "description": "Ablation of AV nodal re-entry tachycardia (including mapping)",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiology"
  },
  {
    "code": "K5730",
    "description": "Ablation of right atrial arrhythmia (including mapping)",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiology"
  },
  {
    "code": "K5735",
    "description": "Convergent procedure and catheter ablation for persistent atrial fibrillation",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiac Surgery"
  },
  {
    "code": "K5740",
    "description": "Ablation of ventricular arrhythmia (including mapping)",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiology"
  },
  {
    "code": "K5750",
    "description": "Internal cardioversion",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiology"
  },
  {
    "code": "K5760",
    "description": "Ablation of left atrial fibrillation by isolation of the pulmonary veins left/right (RFA/CRYO/Laser) (including mapping)",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiology"
  },
  {
    "code": "K5761",
    "description": "Pulsed Field Ablation (PFA) of paroxysmal atrial fibrillation (including mapping)",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiology"
  },
  {
    "code": "K5765",
    "description": "Robotic assisted ablation of atrial fibrillation by isolation of the pulmonary veins (including mapping)",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiology"
  },
  {
    "code": "K5770",
    "description": "Ablation of arrhythmia in complex congenital heart disease (including mapping)",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiology"
  },
  {
    "code": "K5780",
    "description": "Ablation of accessory pathway or selected modification of AV node (including mapping)",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiology"
  },
  {
    "code": "K5790",
    "description": "Ablation of left atrial tachycardia (including mapping)",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiology"
  },
  {
    "code": "K5810",
    "description": "Diagnostic intracardiac electrophysiological study including characterisation of intracardiac conduction and any testing of anti-arrhythmic drug efficacy by programmed stimulation",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiology"
  },
  {
    "code": "K5830",
    "description": "Endomyocardial biopsy",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiology"
  },
  {
    "code": "K6000",
    "description": "Cardiac pacemaker system introduced through vein (single chamber)",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiology"
  },
  {
    "code": "K6010",
    "description": "Cardiac pacemaker system introduced through vein (dual chamber)",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiology"
  },
  {
    "code": "K6011",
    "description": "Implantation of left bundle branch pacing device – dual chamber/single chamber",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiology"
  },
  {
    "code": "K6015",
    "description": "Implantation of biventricular pacemaker",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiology"
  },
  {
    "code": "K6020",
    "description": "Resiting of Pacemaker or implantable cardioverter defibrillator (ICD)",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiology"
  },
  {
    "code": "K6030",
    "description": "Replacement of generator for intravenous cardiac pacemaker system (without lead change)",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiology"
  },
  {
    "code": "K6040",
    "description": "Removal of pacing system with bypass (excluding leadless)",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiology"
  },
  {
    "code": "K6050",
    "description": "Replacement  implantable cardioverter defibrillator (ICD), without lead change",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiology"
  },
  {
    "code": "K6060",
    "description": "Lead replacement for Pacemaker or implantable cardioverter defibrillator (ICD)",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiology"
  },
  {
    "code": "K6070",
    "description": "Implant of temporary pacing electrode (as sole procedure)",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiology"
  },
  {
    "code": "K6080",
    "description": "Removal of pacing system without bypass (including leads)",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiology"
  },
  {
    "code": "K6082",
    "description": "Removal of pacing system (generator only)",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiology"
  },
  {
    "code": "K6100",
    "description": "Insertion of single chamber implantable cardioverter defibrillator (ICD)",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiology"
  },
  {
    "code": "K6105",
    "description": "Insertion of dual chamber implantable cardioverter defibrillator (ICD)",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiology"
  },
  {
    "code": "K6111",
    "description": "Insertion of combined biventricular pacemaker and cardioverter defibrillator (CRT-D)",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiology"
  },
  {
    "code": "K6115",
    "description": "Insertion of an implantable cardioverter defibrillator with subcutaneous leads (subcutaneous ICD)",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiology"
  },
  {
    "code": "K6116",
    "description": "Insertion of Extravascular Implantable Cardioverter Defibrillator (EV-ICD)",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiology"
  },
  {
    "code": "K6120",
    "description": "Insertion of leadless (wireless) pacemaker",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiology"
  },
  {
    "code": "K6121",
    "description": "Percutaneous removal of leadless (wireless) pacemaker",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiology"
  },
  {
    "code": "K6180",
    "description": "Short-term circulatory support with left ventricular assist device",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiac Surgery"
  },
  {
    "code": "K6181",
    "description": "Short-term circulatory support with right ventricular assist device",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiac Surgery"
  },
  {
    "code": "K6511",
    "description": "Adult cardiac catheterisation - femoral access (including coronary arteriography/ catheterisation of right/left side of heart/contrast radiology)",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiology"
  },
  {
    "code": "K6513",
    "description": "Adult cardiac catheterisation - radial access (including coronary arteriography/ catheterisation of right/left side of heart/contrast radiology)",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiology"
  },
  {
    "code": "K6514",
    "description": "Adult cardiac catheterisation - brachial access (including coronary arteriography/ catheterisation of right/left side of heart/contrast radiology)",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiology"
  },
  {
    "code": "K6520",
    "description": "Paediatric cardiac catheterisation",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiology"
  },
  {
    "code": "K6581",
    "description": "Coronary angioplasty following angiography with fractional flow study on the same day, +/- insertion of stent",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiology"
  },
  {
    "code": "K6582",
    "description": "Adult cardiac catheterisation - radial access (incl coronary arteriography/catheterisation of rt/left side heart/contrast radiology) with pressure wire (incl fractional flow reserve measurement)",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiology"
  },
  {
    "code": "K6584",
    "description": "Adult cardiac catheterisation - femoral access (incl coronary arteriography/ catheterisation of rt/left side heart/ contrast radiology) with pressure wire (incl fractional flow reserve measurement)",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiology"
  },
  {
    "code": "K6586",
    "description": "Adult cardiac catheterisation - brachial access (incl coronary arteriography/catheterisation of rt/left side heart / contrast radiology) with pressure wire (incl fractional flow reserve measurement)",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiology"
  },
  {
    "code": "K6590",
    "description": "Coronary angiography including intravascular ultrasound",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiology"
  },
  {
    "code": "K6700",
    "description": "Pericardiectomy",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiac Surgery"
  },
  {
    "code": "K6810",
    "description": "Decompression of cardiac tamponade or re-exploration for bleeding",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiac Surgery"
  },
  {
    "code": "K6820",
    "description": "Pericardiocentesis",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiology"
  },
  {
    "code": "K7510",
    "description": "Coronary intravascular lithotripsy +/- angioplasty +/- insertion of stent",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiology"
  },
  {
    "code": "L0110",
    "description": "Correction of truncus arteriosus",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiac Surgery"
  },
  {
    "code": "L0200",
    "description": "Closed ligation of patent ductus arteriosus",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Great Vessels"
  },
  {
    "code": "L0230",
    "description": "VATS closure of patent ductus arteriosus",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Great Vessels"
  },
  {
    "code": "L0310",
    "description": "Percutaneous transluminal prosthetic occlusion of patent ductus arteriosus",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Great Vessels"
  },
  {
    "code": "L0610",
    "description": "Formation of atrio-pulmonary connection (or any modification of Fontan type procedure)",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiac Surgery"
  },
  {
    "code": "L0620",
    "description": "Creation of communication between pulmonary artery and aorta",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Great Vessels"
  },
  {
    "code": "L0710",
    "description": "Creation of shunt from subclavian artery to pulmonary artery",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Great Vessels"
  },
  {
    "code": "L0900",
    "description": "Formation of cavo-pulmonary shunt (Glenn)",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Great Vessels"
  },
  {
    "code": "L1080",
    "description": "Open operations/repair of pulmonary artery",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Great Vessels"
  },
  {
    "code": "L1240",
    "description": "Pulmonary embolectomy",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Great Vessels"
  },
  {
    "code": "L1300",
    "description": "Transluminal operations on pulmonary artery",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Great Vessels"
  },
  {
    "code": "L1400",
    "description": "Pulmonary endarterectomy",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Great Vessels"
  },
  {
    "code": "L1401",
    "description": "Extracorporeal membrane oxygenation (ECMO)",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiac Surgery"
  },
  {
    "code": "L1620",
    "description": "Axillo-unifemoral bypass",
    "chapter": "Vascular System",
    "section": "Abdominal Vessels"
  },
  {
    "code": "L1680",
    "description": "Axillo-bifemoral bypass",
    "chapter": "Vascular System",
    "section": "Abdominal Vessels"
  },
  {
    "code": "L1810",
    "description": "Repair of leaking aneurysm of ascending aorta",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Great Vessels"
  },
  {
    "code": "L1880",
    "description": "Repair of leaking aneurysm of arch of aorta",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Great Vessels"
  },
  {
    "code": "L1890",
    "description": "Repair of leaking aneurysm of thoracic aorta",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Great Vessels"
  },
  {
    "code": "L1892",
    "description": "Immediate repair of aortic dissection (i.e. within two weeks of happening)",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Great Vessels"
  },
  {
    "code": "L1910",
    "description": "Elective repair of aneurysm of  ascending aorta",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Great Vessels"
  },
  {
    "code": "L1940",
    "description": "Open infrarenal abdominal aortic aneurysm tube graft",
    "chapter": "Vascular System",
    "section": "Abdominal Vessels"
  },
  {
    "code": "L1960",
    "description": "Open infrarenal abdominal aortic aneurysm bifurcation graft",
    "chapter": "Vascular System",
    "section": "Abdominal Vessels"
  },
  {
    "code": "L1980",
    "description": "Elective repair of aneurysm of arch of aorta",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Great Vessels"
  },
  {
    "code": "L1990",
    "description": "Elective repair of aneurysm of thoracic aorta",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Great Vessels"
  },
  {
    "code": "L1992",
    "description": "Delayed repair of aortic dissection (i.e. more than two weeks after happening)",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Great Vessels"
  },
  {
    "code": "L1993",
    "description": "Replacement of ascending aorta and arch +/- aortic root with frozen elephant trunk procedure",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Great Vessels"
  },
  {
    "code": "L1994",
    "description": "Revision replacement of ascending aorta and arch +/- aortic root with frozen elephant trunk procedure",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Great Vessels"
  },
  {
    "code": "L2190",
    "description": "Replacement of graft of thoraco-abdominal aneurysms",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Great Vessels"
  },
  {
    "code": "L2200",
    "description": "Revision of prosthesis of abdominal aorta",
    "chapter": "Vascular System",
    "section": "Abdominal Vessels"
  },
  {
    "code": "L2290",
    "description": "Excision of infected aortic graft with bypass",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Great Vessels"
  },
  {
    "code": "L2302",
    "description": "Coarctation repair",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Great Vessels"
  },
  {
    "code": "L2303",
    "description": "Coarctation repair involving prosthetic graft",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Great Vessels"
  },
  {
    "code": "L2350",
    "description": "Revision operation on ascending aorta and proximal descending aorta",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Great Vessels"
  },
  {
    "code": "L2360",
    "description": "Repair of interrupted aortic arch",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiac Surgery"
  },
  {
    "code": "L2361",
    "description": "Thoracotomy and division of aberrant subclavian artery and re-implantation with interposition graft",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiac Surgery"
  },
  {
    "code": "L2382",
    "description": "Aortic root replacement with valve conduit or homograft and/or remodelling",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiac Surgery"
  },
  {
    "code": "L2560",
    "description": "Percutaneous or open placement of intra-aortic balloon (including subsequent removal)",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Heart - Cardiac Surgery"
  },
  {
    "code": "L2600",
    "description": "Percutaneous transluminal balloon operations on aorta",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Great Vessels"
  },
  {
    "code": "L2710",
    "description": "Endovascular aneurysm repair (EVAR) of infrarenal aorta",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Great Vessels"
  },
  {
    "code": "L2720",
    "description": "Endovascular aneurysm repair (EVAR) of suprarenal aorta, with insertion of fenestrated graft (up to two orifices)",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Great Vessels"
  },
  {
    "code": "L2730",
    "description": "Endovascular insertion of stent graft for thoracic TEVAR",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Great Vessels"
  },
  {
    "code": "L2760",
    "description": "Endovascular insertion of stent graft for aorto- Monoiliac EVAR monoiliac aneurysm with ileo/fem-fem crossover bypass graft",
    "chapter": "Vascular System",
    "section": "Abdominal Vessels"
  },
  {
    "code": "L2780",
    "description": "Endovascular aneurysm repair (EVAR) of suprarenal aorta, with insertion of fenestrated graft (three to four orifices)",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Great Vessels"
  },
  {
    "code": "L2930",
    "description": "Bypass of carotid artery from the arch",
    "chapter": "Vascular System",
    "section": "Head and Neck"
  },
  {
    "code": "L2950",
    "description": "Carotid endarterectomy",
    "chapter": "Vascular System",
    "section": "Head and Neck"
  },
  {
    "code": "L3320",
    "description": "Clipping of cerebral artery aneurysm",
    "chapter": "Brain, Cranium and Other Intracranial Organs",
    "section": "Vessels"
  },
  {
    "code": "L3330",
    "description": "Endovascular insertion of an intrasaccular wire-mesh blood-flow disruption device for intracranial aneurysms",
    "chapter": "Brain, Cranium and Other Intracranial Organs",
    "section": "Vessels"
  },
  {
    "code": "L3380",
    "description": "Reinforcement of aneurysm of cerebral artery",
    "chapter": "Brain, Cranium and Other Intracranial Organs",
    "section": "Vessels"
  },
  {
    "code": "L3400",
    "description": "Open operations on cerebral artery",
    "chapter": "Brain, Cranium and Other Intracranial Organs",
    "section": "Vessels"
  },
  {
    "code": "L3710",
    "description": "Bypass of subclavian artery from the arch",
    "chapter": "Vascular System",
    "section": "Head and Neck"
  },
  {
    "code": "L3711",
    "description": "Bypass of subclavian artery - extra-thoracic",
    "chapter": "Vascular System",
    "section": "Head and Neck"
  },
  {
    "code": "L3730",
    "description": "Endarterectomy and patch repair of subclavian artery",
    "chapter": "Vascular System",
    "section": "Head and Neck"
  },
  {
    "code": "L4140",
    "description": "Endarterectomy of renal artery",
    "chapter": "Vascular System",
    "section": "Renal"
  },
  {
    "code": "L4190",
    "description": "Reconstruction of renal artery(ies)",
    "chapter": "Vascular System",
    "section": "Renal"
  },
  {
    "code": "L4300",
    "description": "Transluminal operations on renal artery",
    "chapter": "Vascular System",
    "section": "Renal"
  },
  {
    "code": "L4530",
    "description": "Endarterectomy and patch repair of visceral branch of abdominal aorta",
    "chapter": "Vascular System",
    "section": "Abdominal Vessels"
  },
  {
    "code": "L4600",
    "description": "Other open operations on other visceral branch of abdominal aorta",
    "chapter": "Vascular System",
    "section": "Abdominal Vessels"
  },
  {
    "code": "L5100",
    "description": "Aorto-iliac, aorto-femoral, ilio-femoral bypass",
    "chapter": "Vascular System",
    "section": "Ileo-femoral Vessels"
  },
  {
    "code": "L5180",
    "description": "Aorto-bifemoral bypass",
    "chapter": "Vascular System",
    "section": "Ileo-femoral Vessels"
  },
  {
    "code": "L5210",
    "description": "Endarterectomy and patch repair of iliac artery",
    "chapter": "Vascular System",
    "section": "Ileo-femoral Vessels"
  },
  {
    "code": "L5300",
    "description": "Open operations on iliac artery",
    "chapter": "Vascular System",
    "section": "Ileo-femoral Vessels"
  },
  {
    "code": "L5400",
    "description": "Transluminal operations on iliac artery",
    "chapter": "Vascular System",
    "section": "Ileo-femoral Vessels"
  },
  {
    "code": "L5910",
    "description": "Femoro-femoral bypass",
    "chapter": "Vascular System",
    "section": "Ileo-femoral Vessels"
  },
  {
    "code": "L5922",
    "description": "Femoro-popliteal bypass using prosthesis",
    "chapter": "Vascular System",
    "section": "Ileo-femoral Vessels"
  },
  {
    "code": "L5923",
    "description": "Femoro-popliteal bypass using vein",
    "chapter": "Vascular System",
    "section": "Ileo-femoral Vessels"
  },
  {
    "code": "L5924",
    "description": "Femoro-popliteal bypass using vein cuff/patch",
    "chapter": "Vascular System",
    "section": "Ileo-femoral Vessels"
  },
  {
    "code": "L5950",
    "description": "Femoro-distal calf bypass using prosthesis ± vein cuff/patch",
    "chapter": "Vascular System",
    "section": "Ileo-femoral Vessels"
  },
  {
    "code": "L5960",
    "description": "Femoro-distal calf bypass using vein",
    "chapter": "Vascular System",
    "section": "Ileo-femoral Vessels"
  },
  {
    "code": "L6000",
    "description": "Endarterectomy of femoral artery",
    "chapter": "Vascular System",
    "section": "Ileo-femoral Vessels"
  },
  {
    "code": "L6230",
    "description": "Reconstruction/bypass for popliteal aneurysm",
    "chapter": "Vascular System",
    "section": "Ileo-femoral Vessels"
  },
  {
    "code": "L6300",
    "description": "Transluminal procedures on femoral artery",
    "chapter": "Vascular System",
    "section": "Ileo-femoral Vessels"
  },
  {
    "code": "L6530",
    "description": "Revision of femoral bypass graft",
    "chapter": "Vascular System",
    "section": "Ileo-femoral Vessels"
  },
  {
    "code": "L6710",
    "description": "Biopsy of artery (including temporal) (as sole procedure)",
    "chapter": "Vascular System",
    "section": "Non-specific"
  },
  {
    "code": "L6800",
    "description": "Repair of limb artery",
    "chapter": "Vascular System",
    "section": "Non-specific"
  },
  {
    "code": "L6840",
    "description": "Repair of limb artery using vein graft",
    "chapter": "Vascular System",
    "section": "Non-specific"
  },
  {
    "code": "L7010",
    "description": "Open embolectomy of artery",
    "chapter": "Vascular System",
    "section": "Non-specific"
  },
  {
    "code": "L7032",
    "description": "Haemorrhoidal artery ligation operation (including image-guided) +/- recto anal prolapse repair",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Rectum/Anus"
  },
  {
    "code": "L7040",
    "description": "Open cannulation of intra abdominal artery for infusion chemotherapy",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Major Vessels"
  },
  {
    "code": "L7042",
    "description": "Arterial switch procedure for transposition of great vessels",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Great Vessels"
  },
  {
    "code": "L7110",
    "description": "Percutaneous transluminal angioplasty of artery, +/- insertion of stent",
    "chapter": "Vascular System",
    "section": "Non-specific"
  },
  {
    "code": "L7211",
    "description": "Abdominal (mesenteric) angiogram",
    "chapter": "Vascular System",
    "section": "Abdominal Vessels"
  },
  {
    "code": "L7212",
    "description": "Limb angiogram (as sole procedure)",
    "chapter": "Vascular System",
    "section": "Non-specific"
  },
  {
    "code": "L7213",
    "description": "Pelvic angiogram",
    "chapter": "Vascular System",
    "section": "Non-specific"
  },
  {
    "code": "L7260",
    "description": "Intravascular ultrasound of non-coronary arteries and veins (as sole procedure, not otherwise specified)",
    "chapter": "Vascular System",
    "section": "Non-specific"
  },
  {
    "code": "L7410",
    "description": "Creation of arteriovenous shunt (synthetic graft)",
    "chapter": "Vascular System",
    "section": "Non-specific"
  },
  {
    "code": "L7420",
    "description": "Creation of arteriovenous fistula (including subsequent closure)",
    "chapter": "Vascular System",
    "section": "Non-specific"
  },
  {
    "code": "L7422",
    "description": "Creation of arteriovenous fistula for dialysis",
    "chapter": "Vascular System",
    "section": "Non-specific"
  },
  {
    "code": "L7423",
    "description": "Ligation of arteriovenous fistula for dialysis",
    "chapter": "Vascular System",
    "section": "Non-specific"
  },
  {
    "code": "L7430",
    "description": "Removal of arteriovenous shunt (synthetic graft)",
    "chapter": "Vascular System",
    "section": "Non-specific"
  },
  {
    "code": "L7510",
    "description": "Excision of arteriovenous malformation of major vessel excluding brain",
    "chapter": "Vascular System",
    "section": "Non-specific"
  },
  {
    "code": "L7511",
    "description": "Excision of arteriovenous malformation from peripheral vessels",
    "chapter": "Vascular System",
    "section": "Non-specific"
  },
  {
    "code": "L7512",
    "description": "Intravascular lithotripsy for peripheral arteries",
    "chapter": "Vascular System",
    "section": "Non-specific"
  },
  {
    "code": "L7520",
    "description": "Repair of acquired arteriovenous fistula",
    "chapter": "Vascular System",
    "section": "Non-specific"
  },
  {
    "code": "L7580",
    "description": "Repair of arteriovenous fistula",
    "chapter": "Vascular System",
    "section": "Non-specific"
  },
  {
    "code": "L7710",
    "description": "Creation of portocaval shunt",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Major Vessels"
  },
  {
    "code": "L7712",
    "description": "Inferior vena cavogram",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Major Vessels"
  },
  {
    "code": "L7920",
    "description": "Plication of vena cava",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Major Vessels"
  },
  {
    "code": "L7980",
    "description": "Repair of wound of major artery or vein of abdomen (including aorta and vena cava)",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Major Vessels"
  },
  {
    "code": "L8110",
    "description": "Creation of peritoneo-venous shunt (Levine/Denver)",
    "chapter": "Vascular System",
    "section": "Non-specific"
  },
  {
    "code": "L8510",
    "description": "Ligation/stripping of long or short saphenous vein (including local excision/multiple phlebectomy)",
    "chapter": "Vascular System",
    "section": "Varicose Veins"
  },
  {
    "code": "L8512",
    "description": "Endovenous laser treatment (EVLT) of single venous trunk +/- phlebectomies - unilateral",
    "chapter": "Vascular System",
    "section": "Varicose Veins"
  },
  {
    "code": "L8513",
    "description": "Endovenous laser treatment (EVLT) of single venous truck +/- phlebectomies - bilateral",
    "chapter": "Vascular System",
    "section": "Varicose Veins"
  },
  {
    "code": "L8514",
    "description": "Endovenous laser treatment (EVLT) of more than one venous trunk +/- phlebectomies - unilateral",
    "chapter": "Vascular System",
    "section": "Varicose Veins"
  },
  {
    "code": "L8515",
    "description": "Endovenous laser treatment (EVLT) of more than one venous trunk +/- phlebectomies - bilateral",
    "chapter": "Vascular System",
    "section": "Varicose Veins"
  },
  {
    "code": "L8520",
    "description": "Ligation/stripping of long or short saphenous vein (including local excision/multiple phlebectomy) - bilateral",
    "chapter": "Vascular System",
    "section": "Varicose Veins"
  },
  {
    "code": "L8530",
    "description": "Operations for recurrent varicose veins with re-exploration of groin and / or popliteal fossa - unilateral",
    "chapter": "Vascular System",
    "section": "Varicose Veins"
  },
  {
    "code": "L8532",
    "description": "Operations for recurrent varicose veins without re-exploration of groin or popliteal fossa - unilateral",
    "chapter": "Vascular System",
    "section": "Varicose Veins"
  },
  {
    "code": "L8540",
    "description": "Radiofrequency ablation of more than one venous trunk +/- phlebectomies - unilateral",
    "chapter": "Vascular System",
    "section": "Varicose Veins"
  },
  {
    "code": "L8541",
    "description": "Radiofrequency ablation of more than one venous trunk +/- phlebectomies - bilateral",
    "chapter": "Vascular System",
    "section": "Varicose Veins"
  },
  {
    "code": "L8542",
    "description": "Radiofrequency ablation of single venous trunk +/- phlebectomies - unilateral",
    "chapter": "Vascular System",
    "section": "Varicose Veins"
  },
  {
    "code": "L8543",
    "description": "Radiofrequency ablation of single venous trunk +/- phlebectomies - bilateral",
    "chapter": "Vascular System",
    "section": "Varicose Veins"
  },
  {
    "code": "L8550",
    "description": "Bioadhesive closure of varicose veins using cyanoacrylate - unilateral",
    "chapter": "Vascular System",
    "section": "Varicose Veins"
  },
  {
    "code": "L8551",
    "description": "Bioadhesive closure of varicose veins using cyanoacrylate - bilateral",
    "chapter": "Vascular System",
    "section": "Varicose Veins"
  },
  {
    "code": "L8580",
    "description": "Operations for recurrent varicose veins with re-exploration of groin and /or popliteal fossa  - bilateral",
    "chapter": "Vascular System",
    "section": "Varicose Veins"
  },
  {
    "code": "L8582",
    "description": "Operations for recurrent varicose veins without re-exploration of groin or popliteal fossa - bilateral",
    "chapter": "Vascular System",
    "section": "Varicose Veins"
  },
  {
    "code": "L8600",
    "description": "Unilateral varicose vein injection sclerotherapy",
    "chapter": "Vascular System",
    "section": "Varicose Veins"
  },
  {
    "code": "L8620",
    "description": "Ultrasound-guided foam sclerotherapy for varicose vein(s) - unilateral",
    "chapter": "Vascular System",
    "section": "Varicose Veins"
  },
  {
    "code": "L8621",
    "description": "Ultrasound-guided foam sclerotherapy of varicose veins - bilateral",
    "chapter": "Vascular System",
    "section": "Varicose Veins"
  },
  {
    "code": "L8650",
    "description": "Trans-luminal occlusion of perforators (TRLOP) - unilateral",
    "chapter": "Vascular System",
    "section": "Varicose Veins"
  },
  {
    "code": "L8651",
    "description": "Trans-luminal occlusion of perforators (TRLOP) - bilateral",
    "chapter": "Vascular System",
    "section": "Varicose Veins"
  },
  {
    "code": "L8680",
    "description": "Bilateral varicose vein injection sclerotherapy",
    "chapter": "Vascular System",
    "section": "Varicose Veins"
  },
  {
    "code": "L8690",
    "description": "Sclerotherapy for thread veins",
    "chapter": "Vascular System",
    "section": "Varicose Veins"
  },
  {
    "code": "L8700",
    "description": "Ligation/stripping of long and short saphenous veins (including local excision/multiple phlebectomy)",
    "chapter": "Vascular System",
    "section": "Varicose Veins"
  },
  {
    "code": "L8750",
    "description": "Local excision (multiple phlebectomy) of varicose vein(s) of leg - unilateral",
    "chapter": "Vascular System",
    "section": "Varicose Veins"
  },
  {
    "code": "L8751",
    "description": "Local excision (multiple phlebectomy) of varicose vein(s) of leg - bilateral",
    "chapter": "Vascular System",
    "section": "Varicose Veins"
  },
  {
    "code": "L8770",
    "description": "Subfascial endoscopic perforator surgery (SEPS) - unilateral",
    "chapter": "Vascular System",
    "section": "Varicose Veins"
  },
  {
    "code": "L8771",
    "description": "Subfascial endoscopic perforator surgery (SEPS) - bilateral",
    "chapter": "Vascular System",
    "section": "Varicose Veins"
  },
  {
    "code": "L8780",
    "description": "Ligation/stripping of long and short saphenous veins (including local excision/multiple phlebectomy) - bilateral",
    "chapter": "Vascular System",
    "section": "Varicose Veins"
  },
  {
    "code": "L8880",
    "description": "Endovenous mechanochemical ablation for varicose veins - unilateral",
    "chapter": "Vascular System",
    "section": "Varicose Veins"
  },
  {
    "code": "L8881",
    "description": "Endovenous mechanochemical ablation for varicose veins - bilateral",
    "chapter": "Vascular System",
    "section": "Varicose Veins"
  },
  {
    "code": "L9000",
    "description": "Open removal of thrombus from vein",
    "chapter": "Vascular System",
    "section": "Non-specific"
  },
  {
    "code": "L9110",
    "description": "Insertion of tunnelled central venous catheter (Hickman line)",
    "chapter": "Vascular System",
    "section": "Non-specific"
  },
  {
    "code": "L9112",
    "description": "Surgical insertion of central venous dialysis line",
    "chapter": "Vascular System",
    "section": "Non-specific"
  },
  {
    "code": "L9113",
    "description": "Percutaneous insertion of central venous dialysis line",
    "chapter": "Vascular System",
    "section": "Non-specific"
  },
  {
    "code": "L9114",
    "description": "Removal of central venous dialysis line",
    "chapter": "Vascular System",
    "section": "Non-specific"
  },
  {
    "code": "L9115",
    "description": "Implantation of port device (PowerPort)",
    "chapter": "Vascular System",
    "section": "Non-specific"
  },
  {
    "code": "L9132",
    "description": "Removal of tunnelled central venous catheter (Hickman line)",
    "chapter": "Vascular System",
    "section": "Non-specific"
  },
  {
    "code": "L9180",
    "description": "Insertion of implantable central venous port (portacath) e.g Port-a-Cath under image guidance",
    "chapter": "Vascular System",
    "section": "Non-specific"
  },
  {
    "code": "L9181",
    "description": "Removal of Portacath/Port-a-Cath/Vasoport Unit",
    "chapter": "Vascular System",
    "section": "Non-specific"
  },
  {
    "code": "L9350",
    "description": "Basilic vein transposition",
    "chapter": "Vascular System",
    "section": "Non-specific"
  },
  {
    "code": "L9510",
    "description": "Venography (and bilateral)",
    "chapter": "Vascular System",
    "section": "Varicose Veins"
  },
  {
    "code": "L9580",
    "description": "Varicography for recurrent varicose veins",
    "chapter": "Vascular System",
    "section": "Varicose Veins"
  },
  {
    "code": "L9730",
    "description": "Isolated limb perfusion",
    "chapter": "Vascular System",
    "section": "Non-specific"
  },
  {
    "code": "L9760",
    "description": "Enhanced external counter pulsation",
    "chapter": "Vascular System",
    "section": "Non-specific"
  },
  {
    "code": "L9820",
    "description": "Lymphatico-venous anastomosis (LVA)",
    "chapter": "Vascular System",
    "section": "Non-specific"
  },
  {
    "code": "L9980",
    "description": "Sclerotherapy of lymphatic or peripheral venous malformation",
    "chapter": "Vascular System",
    "section": "Non-specific"
  },
  {
    "code": "M0210",
    "description": "Nephrectomy and excision of perirenal tissue",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Kidney/Renal Pelvic"
  },
  {
    "code": "M0220",
    "description": "Nephro-ureterectomy -  unilateral",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Kidney/Renal Pelvic"
  },
  {
    "code": "M0221",
    "description": "Nephro-ureterectomy - bilateral",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Kidney/Renal Pelvic"
  },
  {
    "code": "M0250",
    "description": "Nephrectomy - unilateral",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Kidney/Renal Pelvic"
  },
  {
    "code": "M0251",
    "description": "Nephrectomy - bilateral",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Kidney/Renal Pelvic"
  },
  {
    "code": "M0280",
    "description": "Laparoscopic nephrectomy – unilateral",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Kidney/Renal Pelvic"
  },
  {
    "code": "M0282",
    "description": "Laparoscopic nephroureterectomy - unilateral",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Kidney/Renal Pelvic"
  },
  {
    "code": "M0283",
    "description": "Robotic assisted nephrectomy - unilateral",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Kidney/Renal Pelvic"
  },
  {
    "code": "M0284",
    "description": "Robotic assisted nephroureterectomy  - unilateral",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Kidney/Renal Pelvic"
  },
  {
    "code": "M0285",
    "description": "Robotic assisted nephrectomy - bilateral",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Kidney/Renal Pelvic"
  },
  {
    "code": "M0286",
    "description": "Robotic assisted nephroureterectomy - bilateral",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Kidney/Renal Pelvic"
  },
  {
    "code": "M0287",
    "description": "Robotic assisted partial nephrectomy - bilateral",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Kidney/Renal Pelvic"
  },
  {
    "code": "M0288",
    "description": "Laparoscopic partial nephrectomy - bilateral",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Kidney/Renal Pelvic"
  },
  {
    "code": "M0300",
    "description": "Open partial nephrectomy",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Kidney/Renal Pelvic"
  },
  {
    "code": "M0302",
    "description": "Laparoscopic partial nephrectomy - unilateral",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Kidney/Renal Pelvic"
  },
  {
    "code": "M0303",
    "description": "Robotic assisted partial nephrectomy - unilateral",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Kidney/Renal Pelvic"
  },
  {
    "code": "M0312",
    "description": "Laparoscopic renal cryotherapy or cryoablation (including endoscopic catheter insertion and retrograde pyelography)",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Kidney/Renal Pelvic"
  },
  {
    "code": "M0380",
    "description": "Laparoscopic upper or lower pole heminephrectomy",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Kidney/Renal Pelvic"
  },
  {
    "code": "M0412",
    "description": "De-roofing and aspiration of renal para pelvic cyst",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Kidney/Renal Pelvic"
  },
  {
    "code": "M0510",
    "description": "Open pyeloplasty",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Kidney/Renal Pelvic"
  },
  {
    "code": "M0550",
    "description": "Repair of kidney wound",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Kidney/Renal Pelvic"
  },
  {
    "code": "M0610",
    "description": "Open removal of calculi from kidney",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Kidney/Renal Pelvic"
  },
  {
    "code": "M0680",
    "description": "Drainage of pyonephrosis",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Kidney/Renal Pelvic"
  },
  {
    "code": "M0800",
    "description": "Other open operations on kidney",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Kidney/Renal Pelvic"
  },
  {
    "code": "M0814",
    "description": "Open biopsy of native kidney",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Kidney/Renal Pelvic"
  },
  {
    "code": "M0820",
    "description": "Renal artery denervation",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Kidney/Renal Pelvic"
  },
  {
    "code": "M0880",
    "description": "Open drainage of periphrenic abscess",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Kidney/Renal Pelvic"
  },
  {
    "code": "M0910",
    "description": "Endoscopic fragmentation of calculi of kidney (including cystoscopy and insertion/removal of stent)",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Kidney/Renal Pelvic"
  },
  {
    "code": "M0940",
    "description": "Percutaneous nephrolithotomy (including cystoscopy and retrograde catheterisation)",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Kidney/Renal Pelvic"
  },
  {
    "code": "M0942",
    "description": "Robotic assisted nephrolithotomy (including cystoscopy and retrograde catheterisation)",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Ureter"
  },
  {
    "code": "M1000",
    "description": "Therapeutic endoscopic operations on kidney (include cystoscopy and retrograde catheterization)",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Kidney/Renal Pelvic"
  },
  {
    "code": "M1080",
    "description": "Laparoscopic pyeloplasty - unilateral",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Kidney/Renal Pelvic"
  },
  {
    "code": "M1090",
    "description": "Robotic assisted pyeloplasty - unilateral",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Kidney/Renal Pelvic"
  },
  {
    "code": "M1091",
    "description": "Robotic assisted pyeloplasty - bilateral",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Kidney/Renal Pelvic"
  },
  {
    "code": "M1110",
    "description": "Diagnostic endoscopic examination of kidney (including biopsy)",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Kidney/Renal Pelvic"
  },
  {
    "code": "M1120",
    "description": "Diagnostic ureterorenoscopy (+/- cystoscopy)",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Kidney/Renal Pelvic"
  },
  {
    "code": "M1130",
    "description": "Therapeutic ureterorenoscopy (+/- cystoscopy and insertion/removal of stent)",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Kidney/Renal Pelvic"
  },
  {
    "code": "M1310",
    "description": "Percutaneous fine needle biopsy of lesion of kidney",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Kidney/Renal Pelvic"
  },
  {
    "code": "M1350",
    "description": "Antegrade pyelogram (including bilateral)",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Kidney/Renal Pelvic"
  },
  {
    "code": "M1360",
    "description": "Percutaneous insertion of nephrostomy tube",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Kidney/Renal Pelvic"
  },
  {
    "code": "M1380",
    "description": "Percutaneous tru-cut needle biopsy of lesion of kidney",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Kidney/Renal Pelvic"
  },
  {
    "code": "M1400",
    "description": "Extracorporeal fragmentation of calculus of kidney (lithotripsy) - single treatment",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Kidney/Renal Pelvic"
  },
  {
    "code": "M1820",
    "description": "Excision of segment of ureter",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Ureter"
  },
  {
    "code": "M1910",
    "description": "Construction of ileal conduit (including ureteric implantation)",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Ureter"
  },
  {
    "code": "M2012",
    "description": "Replantation of ureter into bowel (including bilateral)",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Ureter"
  },
  {
    "code": "M2030",
    "description": "Bilateral replantation of ureter into bladder",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Ureter"
  },
  {
    "code": "M2080",
    "description": "Unilateral replantation of ureter into bladder (including cystoscopy)",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Ureter"
  },
  {
    "code": "M2090",
    "description": "Robotic assisted replantation of ureter into bladder (including cystoscopy) - unilateral",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Ureter"
  },
  {
    "code": "M2091",
    "description": "Robotic assisted replantation of ureter into bladder (including cystoscopy) - bilateral",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Ureter"
  },
  {
    "code": "M2100",
    "description": "Other connection of ureter",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Ureter"
  },
  {
    "code": "M2130",
    "description": "Ileal or colonic replacement of ureter",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Ureter"
  },
  {
    "code": "M2200",
    "description": "Ureterostomy - closure",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Ureter"
  },
  {
    "code": "M2202",
    "description": "Ureterostomy - formation",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Ureter"
  },
  {
    "code": "M2210",
    "description": "Open correction vesico-ureteric reflux - unilateral",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Ureter"
  },
  {
    "code": "M2280",
    "description": "Open correction vesico-ureteric reflux - bilateral",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Ureter"
  },
  {
    "code": "M2310",
    "description": "Open ureterolithotomy (including cystoscopy)",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Ureter"
  },
  {
    "code": "M2510",
    "description": "Excision of ureterocele (+/- ureteric reimplantation) - unilateral",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Ureter"
  },
  {
    "code": "M2511",
    "description": "Excision of ureterocele (+/- ureteric reimplantation) - bilateral",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Ureter"
  },
  {
    "code": "M2530",
    "description": "Ureterolysis - unilateral",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Ureter"
  },
  {
    "code": "M2580",
    "description": "Ureterolysis - bilateral",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Ureter"
  },
  {
    "code": "M2581",
    "description": "Robotic assisted ureterolysis - unilateral",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Kidney/Renal Pelvic"
  },
  {
    "code": "M2582",
    "description": "Robotic assisted ureterolysis - bilateral",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Kidney/Renal Pelvic"
  },
  {
    "code": "M2600",
    "description": "Therapeutic nephroscopic operations on ureter (including cystoscopy)",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Ureter"
  },
  {
    "code": "M2680",
    "description": "Endoscopic removal and insertion of prosthesis into ureter (including cystoscopy)",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Ureter"
  },
  {
    "code": "M2730",
    "description": "Ureteroscopic extraction of calculus of ureter (including cystoscopy and insertion/removal of stent)",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Ureter"
  },
  {
    "code": "M2890",
    "description": "Push manipulation of stone prior to lithotripsy (as sole procedure)",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Kidney/Renal Pelvic"
  },
  {
    "code": "M2920",
    "description": "Endoscopic insertion/removal of prosthesis into ureter (including bilateral and cystoscopy, +/- pyleography)",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Ureter"
  },
  {
    "code": "M2930",
    "description": "Removal of prosthesis from ureter (including cystoscopy)",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Ureter"
  },
  {
    "code": "M2981",
    "description": "Endoscopic vesico-ureteric anti-reflux procedure (and bilateral) (including cystoscopy)",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Bladder"
  },
  {
    "code": "M3000",
    "description": "Endoscopic examination of ureter (+/- cystoscopy and insertion/removal of stent) +/- retrograde pyelography",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Ureter"
  },
  {
    "code": "M3010",
    "description": "Endoscopic retrograde pyelography (including bilateral and cystoscopy)",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Ureter"
  },
  {
    "code": "M3110",
    "description": "Extracorporeal shockwave lithotripsy of calculus of ureter",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Ureter"
  },
  {
    "code": "M3111",
    "description": "Holmium Laser Lithotripsy for calculi of ureter (including cystoscopy and insertion/removal of stent)",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Ureter"
  },
  {
    "code": "M3202",
    "description": "Operations on ureteric orifice (including endoscopic)",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Ureter"
  },
  {
    "code": "M3400",
    "description": "Open total cystectomy (with construction of intestinal conduit or bladder)",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Bladder"
  },
  {
    "code": "M3410",
    "description": "Robotic assisted cystectomy without prostatectomy (with construction of intestinal conduit or bladder)",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Bladder"
  },
  {
    "code": "M3411",
    "description": "Robotic assisted cystoprostatectomy (with construction of intestinal conduit or bladder)",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Bladder"
  },
  {
    "code": "M3412",
    "description": "Laparoscopic cystoprostatectomy (with construction of intestinal conduit or bladder)",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Bladder"
  },
  {
    "code": "M3420",
    "description": "Laparoscopic cystectomy (with construction of intestinal conduit or bladder) (including cystoscopy)",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Bladder"
  },
  {
    "code": "M3500",
    "description": "Partial cystectomy (including cystoscopy)",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Bladder"
  },
  {
    "code": "M3501",
    "description": "Robotic assisted partial cystectomy with cystoscopy",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Bladder"
  },
  {
    "code": "M3510",
    "description": "Diverticulectomy of bladder",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Bladder"
  },
  {
    "code": "M3511",
    "description": "Robotic assisted diverticulectomy of bladder",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Bladder"
  },
  {
    "code": "M3600",
    "description": "Enlargement of bladder (including cystoscopy)",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Bladder"
  },
  {
    "code": "M3602",
    "description": "Enterocystoplasty (including cystoscopy)",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Bladder"
  },
  {
    "code": "M3603",
    "description": "Robotic assisted enterocystoplasty with cystoscopy",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Bladder"
  },
  {
    "code": "M3640",
    "description": "Repair of bladder exstrophy",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Bladder"
  },
  {
    "code": "M3700",
    "description": "Repair of bladder (including cystoscopy)",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Bladder"
  },
  {
    "code": "M3710",
    "description": "Cystourethroplasty (including cystoscopy)",
    "chapter": "Female Reproductive Organs",
    "section": "Vagina/Perineum"
  },
  {
    "code": "M3720",
    "description": "Repair of vesicocolic fistula",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Bladder"
  },
  {
    "code": "M3780",
    "description": "Repair of cutaneous vesical fistula",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Bladder"
  },
  {
    "code": "M3820",
    "description": "Cystostomy and insertion of suprapubic tube into bladder (including cystoscopy)",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Bladder"
  },
  {
    "code": "M3880",
    "description": "Stab cystostomy",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Bladder"
  },
  {
    "code": "M3900",
    "description": "Open removal of calculus from bladder (including cystoscopy)",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Bladder"
  },
  {
    "code": "M4110",
    "description": "Open excision of lesion from bladder (including cystoscopy)",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Bladder"
  },
  {
    "code": "M4210",
    "description": "Endoscopic resection of lesion of bladder (including cystoscopy)",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Bladder"
  },
  {
    "code": "M4230",
    "description": "Endoscopic destruction of lesion of bladder (including cystoscopy)",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Bladder"
  },
  {
    "code": "M4310",
    "description": "Endoscopic transection of bladder (including cystoscopy)",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Bladder"
  },
  {
    "code": "M4320",
    "description": "Endoscopic hydrostatic distension of bladder (including cystoscopy)",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Bladder"
  },
  {
    "code": "M4400",
    "description": "Urethral sphincterotomy (including cystoscopy)",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Bladder"
  },
  {
    "code": "M4410",
    "description": "Litholapaxy (including cystoscopy)",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Bladder"
  },
  {
    "code": "M4420",
    "description": "Endoscopic extraction of calculus of bladder (including cystoscopy)",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Bladder"
  },
  {
    "code": "M4430",
    "description": "Endoscopic removal of foreign body from bladder (including cystoscopy)",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Bladder"
  },
  {
    "code": "M4480",
    "description": "Resection of bladder neck (including cystoscopy)",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Bladder"
  },
  {
    "code": "M4510",
    "description": "Diagnostic endoscopic examination of bladder (flexible cystoscopy) +/- any biopsy",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Bladder"
  },
  {
    "code": "M4512",
    "description": "Examination of bladder using hexaminolevulinate blue-light fluorescence cystoscopy +/- resection of lesions",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Bladder"
  },
  {
    "code": "M4514",
    "description": "Endoscopic examination of bladder (rigid cystoscopy) including any biopsy",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Bladder"
  },
  {
    "code": "M4712",
    "description": "Bladder instillation of pharmacologic agent (including cystoscopy)",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Bladder"
  },
  {
    "code": "M4713",
    "description": "Bladder instillation as sole procedure",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Bladder"
  },
  {
    "code": "M4714",
    "description": "Therapeutic injection into bladder wall (including cystoscopy)",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Bladder"
  },
  {
    "code": "M4715",
    "description": "Electromotive Drug Administration (EMDA) of pharmacologic agent into the bladder (via EMDA catheter, without cystoscopy)",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Bladder"
  },
  {
    "code": "M4740",
    "description": "Ambulatory urodynamic studies",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Bladder"
  },
  {
    "code": "M4780",
    "description": "Invasive urodynamic assessment including cystoscopy and pressure/flow measurements",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Bladder"
  },
  {
    "code": "M4820",
    "description": "Insertion of Urethral Catheterisation Device (UCD) using guidewire into bladder for difficult or failed catheterisation",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Urethra"
  },
  {
    "code": "M4910",
    "description": "Closure of cystostomy",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Bladder"
  },
  {
    "code": "M4940",
    "description": "Transurethral non-ablative radiofrequency of bladder",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Bladder"
  },
  {
    "code": "M5100",
    "description": "Combined abdominal and vaginal operations to support outlet of female bladder (including sling procedures) (including cystoscopy)",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Bladder"
  },
  {
    "code": "M5180",
    "description": "Revision  combined abdominal and vaginal operations to support outlet of female bladder (including sling procedures and cystoscopy)",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Bladder"
  },
  {
    "code": "M5220",
    "description": "Retropubic suspension of neck of bladder (including colposuspension)  (including cystoscopy)",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Bladder"
  },
  {
    "code": "M5222",
    "description": "Laparoscopic colposuspension",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Bladder"
  },
  {
    "code": "M5223",
    "description": "Robotic assisted colposuspension",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Bladder"
  },
  {
    "code": "M5250",
    "description": "Needle suspension of bladder neck (including cystoscopy)",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Bladder"
  },
  {
    "code": "M5280",
    "description": "Revision retropubic suspension of neck of bladder (including colposuspension and cystoscopy)",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Bladder"
  },
  {
    "code": "M5300",
    "description": "Vaginal operations to support outlets of female bladder (including cystoscopy)",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Bladder"
  },
  {
    "code": "M5520",
    "description": "Implantation of artificial urinary sphincter at bladder neck and/or removal (including cystoscopy)",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Bladder"
  },
  {
    "code": "M5580",
    "description": "Excision of urethral caruncle",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Urethra"
  },
  {
    "code": "M5582",
    "description": "Diathermy of urethral caruncle",
    "chapter": "Female Reproductive Organs",
    "section": "Vagina/Perineum"
  },
  {
    "code": "M5600",
    "description": "Therapeutic endoscopic operations on outlet of female bladder (including cystoscopy)",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Urethra"
  },
  {
    "code": "M5630",
    "description": "Therapeutic injection into bladder neck for treatment of stress incontinence (peri-urethral bulking agents), including cystoscopy",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Bladder"
  },
  {
    "code": "M5820",
    "description": "Dilatation of outlet of female bladder (including cystoscopy)",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Bladder"
  },
  {
    "code": "M6100",
    "description": "Open excision of prostatic adenoma",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Prostate"
  },
  {
    "code": "M6140",
    "description": "Radical perineal prostatectomy, reconstruction of bladder neck (including bilateral pelvic lymphadenectomy) (including cystoscopy)",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Prostate"
  },
  {
    "code": "M6141",
    "description": "Robotic assisted radical perineal prostatectomy, reconstruction of bladder neck, including bilateral pelvic lymphadenectomy (including cystoscopy)",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Prostate"
  },
  {
    "code": "M6180",
    "description": "Radical prostatectomy, reconstruction of bladder neck (including bilateral pelvic lymphadenectomy) (including cystoscopy)",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Prostate"
  },
  {
    "code": "M6182",
    "description": "Laparoscopic radical prostatectomy, reconstruction of bladder neck including bilateral pelvic lymphadenectomy (including cystoscopy)",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Prostate"
  },
  {
    "code": "M6192",
    "description": "Robotic assisted  radical prostatectomy, reconstruction of bladder neck including bilateral pelvic lymphadenectomy (including cystoscopy)",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Prostate"
  },
  {
    "code": "M6193",
    "description": "Robot assisted radical prostatectomy using bilat nerve-sparing technique, reconstruction of bladder neck inc bilat pelvic lymphadenectomy (inc cystoscopy) +/- intraoperative frozen section evaluation",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Prostate"
  },
  {
    "code": "M6194",
    "description": "Robotic assisted radical prostatectomy through rectovesical pouch, using bilat nerve and ligament sparing technique, reconstruction of bladder neck, inc bilat pelvic lymphadenectomy (inc cystoscopy)",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Prostate"
  },
  {
    "code": "M6480",
    "description": "Operation to support outlet of male bladder (including sling procedures) (including cystoscopy)",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Bladder"
  },
  {
    "code": "M6530",
    "description": "Endoscopic resection of prostate (TUR) (including cystoscopy)",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Prostate"
  },
  {
    "code": "M6532",
    "description": "Holmium laser resection of prostate (HoLRP) (including Cystoscopy)",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Prostate"
  },
  {
    "code": "M6533",
    "description": "Holmium laser enucleation of prostatic adenoma (HoLEP)",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Prostate"
  },
  {
    "code": "M6580",
    "description": "Endoscopic biopsy of prostate (including cystoscopy)",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Prostate"
  },
  {
    "code": "M6582",
    "description": "Transperineal template-guided biopsies of the prostate under image guidance",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Prostate"
  },
  {
    "code": "M6583",
    "description": "Transperineal MRI – US fusion targeted prostate biopsy",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Prostate"
  },
  {
    "code": "M6584",
    "description": "Transrectal MRI – US fusion targeted prostate biopsy",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Prostate"
  },
  {
    "code": "M6620",
    "description": "Endoscopic incision of outlet of male bladder (including cystoscopy)",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Bladder"
  },
  {
    "code": "M6710",
    "description": "Focal cryotherapy/cryoablation of prostate",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Prostate"
  },
  {
    "code": "M6711",
    "description": "Total gland cryotherapy/cryoablation/ of prostate",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Prostate"
  },
  {
    "code": "M6720",
    "description": "Transurethral microwave therapy of the prostate",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Prostate"
  },
  {
    "code": "M6730",
    "description": "Drainage of prostatic abscess",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Prostate"
  },
  {
    "code": "M6750",
    "description": "Transurethral needle ablation (TUNA) of the prostate",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Prostate"
  },
  {
    "code": "M6760",
    "description": "Photoselective vaporisation of prostate (GreenLight / Niagara laser PVP) (including Cystoscopy)",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Prostate"
  },
  {
    "code": "M6762",
    "description": "Photoselective vaporisation of prostate (KTP laser PVP) (including Cystoscopy)",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Prostate"
  },
  {
    "code": "M6771",
    "description": "Focal High Intensity Focused Ultrasound of Prostate (including Cystoscopy)",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Prostate"
  },
  {
    "code": "M6772",
    "description": "Total gland High Intensity Focused Ultrasound of Prostate (including Cystoscopy)",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Prostate"
  },
  {
    "code": "M6780",
    "description": "Prostatic hyperthermia (up to six courses)",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Prostate"
  },
  {
    "code": "M6880",
    "description": "Insertion of prostatic urethral lift implants (including cystoscopy)",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Prostate"
  },
  {
    "code": "M7020",
    "description": "Transrectal sextant needle biopsy of prostate with ultrasound guidance",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Prostate"
  },
  {
    "code": "M7030",
    "description": "Limited/single core transrectal needle biopsy of prostate +/- ultrasound guidance",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Prostate"
  },
  {
    "code": "M7070",
    "description": "Transurethral water vapour ablation for lower urinary tract symptoms caused by benign prostatic hyperplasia",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Prostate"
  },
  {
    "code": "M7071",
    "description": "Transurethral water jet ablation for lower urinary tract symptoms caused by benign prostatic hyperplasia",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Prostate"
  },
  {
    "code": "M7072",
    "description": "Transperineal micro invasive laser ablation for lower urinary tract symptoms caused by benign prostatic hyperplasia",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Prostate"
  },
  {
    "code": "M7080",
    "description": "Insertion of urethral stent for relief of prostatic obstruction (including cystoscopy)",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Prostate"
  },
  {
    "code": "M7081",
    "description": "Endoscopic insertion of temporary, ischemic-incising device into prostate",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Prostate"
  },
  {
    "code": "M7082",
    "description": "Endoscopic removal of temporary, ischemic-incising device from prostate",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Prostate"
  },
  {
    "code": "M7180",
    "description": "Irreversible electroporation of prostate cancer",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Prostate"
  },
  {
    "code": "M7200",
    "description": "Urethrectomy",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Urethra"
  },
  {
    "code": "M7280",
    "description": "Urethral valve resection",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Urethra"
  },
  {
    "code": "M7312",
    "description": "Repair of penile/perineal hypospadias",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Urethra"
  },
  {
    "code": "M7313",
    "description": "Repair of penile shaft hypospadias",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Urethra"
  },
  {
    "code": "M7314",
    "description": "Repair of distal hypospadias",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Urethra"
  },
  {
    "code": "M7315",
    "description": "Secondary adjustment of penile skin following hypospadias repair",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Urethra"
  },
  {
    "code": "M7316",
    "description": "Complex secondary repair of hypospadias",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Urethra"
  },
  {
    "code": "M7320",
    "description": "Repair of epispadias",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Urethra"
  },
  {
    "code": "M7330",
    "description": "Closure of fistula of urethra (including cystoscopy)",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Urethra"
  },
  {
    "code": "M7332",
    "description": "Closure of fistula of urethra after hypospadias",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Urethra"
  },
  {
    "code": "M7340",
    "description": "Repair of urethrorectal fistula",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Urethra"
  },
  {
    "code": "M7360",
    "description": "Simple urethroplasty, eg Primary repair, anterior urethra (including cystoscopy)",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Urethra"
  },
  {
    "code": "M7361",
    "description": "Complex urethroplasty, eg revision surgery of the anterior urethra, posterior urethra, +/- grafting (including cystoscopy)",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Urethra"
  },
  {
    "code": "M7380",
    "description": "Repair of rupture of urethra (including cystoscopy)",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Urethra"
  },
  {
    "code": "M7500",
    "description": "Excision of diverticulum of urethra (including cystoscopy)",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Urethra"
  },
  {
    "code": "M7590",
    "description": "Insertion of suburethral tape sling (e.g. TOT or TVT) +/- administration of local anaesthetic by operating surgeon (including cystoscopy)",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Bladder"
  },
  {
    "code": "M7620",
    "description": "Removal of foreign body from urethra",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Urethra"
  },
  {
    "code": "M7700",
    "description": "Diagnostic endoscopic examination of urethra (as sole procedure) (including cystoscopy)",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Urethra"
  },
  {
    "code": "M7920",
    "description": "Dilatation of urethra (including cystoscopy)",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Urethra"
  },
  {
    "code": "M7930",
    "description": "Endoscopic dilation of urethra using drug coated balloon (+/- fluoroscopy)",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Urethra"
  },
  {
    "code": "M7940",
    "description": "Internal urethrotomy (including cystoscopy +/- dilatation)",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Urethra"
  },
  {
    "code": "M8120",
    "description": "Meatoplasty",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Genitalia"
  },
  {
    "code": "M8130",
    "description": "External meatotomy of urethral orifice",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Genitalia"
  },
  {
    "code": "N0500",
    "description": "Bilateral excision of testes",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Genitalia"
  },
  {
    "code": "N0630",
    "description": "Laparoscopic orchidectomy",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Genitalia"
  },
  {
    "code": "N0680",
    "description": "Orchidectomy and excision of spermatic cord (+/- insertion of prosthesis)",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Genitalia"
  },
  {
    "code": "N0700",
    "description": "Excision of lesion of testes",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Genitalia"
  },
  {
    "code": "N0820",
    "description": "Orchiopexy - bilateral",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Genitalia"
  },
  {
    "code": "N0920",
    "description": "Orchiopexy",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Genitalia"
  },
  {
    "code": "N1000",
    "description": "Prosthesis of testis (insertion or removal)",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Genitalia"
  },
  {
    "code": "N1100",
    "description": "Correction of hydrocele(s) – unilateral",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Genitalia"
  },
  {
    "code": "N1101",
    "description": "Correction of hydrocele(s) – bilateral",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Genitalia"
  },
  {
    "code": "N1320",
    "description": "Fixation of testis",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Genitalia"
  },
  {
    "code": "N1340",
    "description": "Biopsy of testis",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Genitalia"
  },
  {
    "code": "N1350",
    "description": "Exploration of testis (including biopsy)",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Genitalia"
  },
  {
    "code": "N1352",
    "description": "Laparoscopy for impalpable testis",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Genitalia"
  },
  {
    "code": "N1380",
    "description": "Bilateral fixation of testis",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Genitalia"
  },
  {
    "code": "N1510",
    "description": "Bilateral epididymectomy",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Genitalia"
  },
  {
    "code": "N1520",
    "description": "Unilateral epididymectomy",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Genitalia"
  },
  {
    "code": "N1580",
    "description": "Excision of epididymal cyst",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Genitalia"
  },
  {
    "code": "N1710",
    "description": "Vasectomy (bilateral ligation of Vas Deferens)",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Genitalia"
  },
  {
    "code": "N1750",
    "description": "Vasectomy reversal (vasovasostomy) bilateral",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Genitalia"
  },
  {
    "code": "N1900",
    "description": "Operation(s) on varicocele",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Genitalia"
  },
  {
    "code": "N1910",
    "description": "Laparoscopic varicocelectomy",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Genitalia"
  },
  {
    "code": "N1920",
    "description": "Microsurgical varicocelectomy",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Genitalia"
  },
  {
    "code": "N2200",
    "description": "Operation(s) on seminal vesicle",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Genitalia"
  },
  {
    "code": "N2201",
    "description": "Robotic assisted operation(s) on the seminal vesicles",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Genitalia"
  },
  {
    "code": "N2610",
    "description": "Total amputation of penis",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Genitalia"
  },
  {
    "code": "N2620",
    "description": "Partial amputation of penis",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Genitalia"
  },
  {
    "code": "N2710",
    "description": "Excision of lesion of penis",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Genitalia"
  },
  {
    "code": "N2740",
    "description": "Extracorporeal shockwave therapy for Peyronie's disease",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Genitalia"
  },
  {
    "code": "N2780",
    "description": "Operation for Peyronie's disease (e.g. Nesbitt’s)",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Genitalia"
  },
  {
    "code": "N2781",
    "description": "Lue's procedure for Peyronie's s disease",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Genitalia"
  },
  {
    "code": "N2782",
    "description": "Intralesional injection of pharmacologic agent into penis for Peyronie’s disease (including post injection manipulation)",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Genitalia"
  },
  {
    "code": "N2783",
    "description": "Correction of Chordee",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Genitalia"
  },
  {
    "code": "N2820",
    "description": "Reconstruction of penis",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Genitalia"
  },
  {
    "code": "N2840",
    "description": "Repair of avulsion on penis",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Genitalia"
  },
  {
    "code": "N2842",
    "description": "Frenuloplasty of penis",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Genitalia"
  },
  {
    "code": "N2880",
    "description": "Repair of injury on penis",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Genitalia"
  },
  {
    "code": "N2910",
    "description": "Insertion of inflatable penile implant (as a sole procedure)",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Genitalia"
  },
  {
    "code": "N3000",
    "description": "Dorsal slit of the prepuce",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Genitalia"
  },
  {
    "code": "N3010",
    "description": "Preputioplasty",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Genitalia"
  },
  {
    "code": "N3020",
    "description": "Division of preputial adhesions",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Genitalia"
  },
  {
    "code": "N3030",
    "description": "Circumcision",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Genitalia"
  },
  {
    "code": "N3031",
    "description": "Circumcision with Plastibell",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Genitalia"
  },
  {
    "code": "N3032",
    "description": "Revision of circumcision",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Bladder"
  },
  {
    "code": "N3210",
    "description": "Biopsy of lesion of penis",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Genitalia"
  },
  {
    "code": "N3240",
    "description": "Intracavernosal injection",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Genitalia"
  },
  {
    "code": "P0310",
    "description": "Excision of Bartholin gland",
    "chapter": "Female Reproductive Organs",
    "section": "Vulva/Labia"
  },
  {
    "code": "P0320",
    "description": "Marsupialisation of Bartholin cyst",
    "chapter": "Female Reproductive Organs",
    "section": "Vulva/Labia"
  },
  {
    "code": "P0510",
    "description": "Simple vulvectomy",
    "chapter": "Female Reproductive Organs",
    "section": "Vulva/Labia"
  },
  {
    "code": "P0550",
    "description": "Excision of excess labial tissue",
    "chapter": "Female Reproductive Organs",
    "section": "Vulva/Labia"
  },
  {
    "code": "P0580",
    "description": "Radical vulvectomy (including block dissection of inguinal gland)",
    "chapter": "Female Reproductive Organs",
    "section": "Vulva/Labia"
  },
  {
    "code": "P0600",
    "description": "Excision of lesion of vulva",
    "chapter": "Female Reproductive Organs",
    "section": "Vulva/Labia"
  },
  {
    "code": "P0610",
    "description": "Laser destruction of lesion of Vulva",
    "chapter": "Female Reproductive Organs",
    "section": "Vulva/Labia"
  },
  {
    "code": "P0910",
    "description": "Biopsy of lesion of vulva",
    "chapter": "Female Reproductive Organs",
    "section": "Vulva/Labia"
  },
  {
    "code": "P1300",
    "description": "Operations on female perineum",
    "chapter": "Female Reproductive Organs",
    "section": "Vagina/Perineum"
  },
  {
    "code": "P1400",
    "description": "Incision of introitus of vagina",
    "chapter": "Female Reproductive Organs",
    "section": "Vagina/Perineum"
  },
  {
    "code": "P1800",
    "description": "Other obliteration of vagina",
    "chapter": "Female Reproductive Organs",
    "section": "Vagina/Perineum"
  },
  {
    "code": "P1920",
    "description": "Excision of septum of vagina",
    "chapter": "Female Reproductive Organs",
    "section": "Vagina/Perineum"
  },
  {
    "code": "P2000",
    "description": "Excision of lesion of vagina (eg. warts and cysts)",
    "chapter": "Female Reproductive Organs",
    "section": "Vagina/Perineum"
  },
  {
    "code": "P2100",
    "description": "Reconstruction of vagina",
    "chapter": "Female Reproductive Organs",
    "section": "Vagina/Perineum"
  },
  {
    "code": "P2110",
    "description": "Partial removal of vaginal mesh/tape with reconstruction of vagina and/or urethra, including cystoscopy and/or proctoscopy",
    "chapter": "Female Reproductive Organs",
    "section": "Vagina/Perineum"
  },
  {
    "code": "P2120",
    "description": "Total removal of vaginal mesh/tape with reconstruction of vagina and/or urethra, including cystoscopy and/or proctoscopy",
    "chapter": "Female Reproductive Organs",
    "section": "Vagina/Perineum"
  },
  {
    "code": "P2210",
    "description": "Anterior +/- posterior colporrhaphy and amputation of cervix uteri (including Primary repair of enterocele)",
    "chapter": "Female Reproductive Organs",
    "section": "Vagina/Perineum"
  },
  {
    "code": "P2230",
    "description": "Posterior colporrhaphy",
    "chapter": "Female Reproductive Organs",
    "section": "Vagina/Perineum"
  },
  {
    "code": "P2310",
    "description": "Anterior +/- posterior colporrhaphy (including Primary repair of enterocele) (including cystoscopy)",
    "chapter": "Female Reproductive Organs",
    "section": "Vagina/Perineum"
  },
  {
    "code": "P2340",
    "description": "Repair of enterocele (+/- posterior colporrhaphy)",
    "chapter": "Female Reproductive Organs",
    "section": "Vagina/Perineum"
  },
  {
    "code": "P2380",
    "description": "Anterior (+/- posterior) colporrhaphy with vaginal hysterectomy (including Primary repair of enterocele and cystoscopy)",
    "chapter": "Female Reproductive Organs",
    "section": "Vagina/Perineum"
  },
  {
    "code": "P2390",
    "description": "Anterior (+/- posterior) colporrhaphy with vaginal hysterectomy with laparoscopic assistance (including Primary repair of enterocele and cystoscopy)",
    "chapter": "Female Reproductive Organs",
    "section": "Vagina/Perineum"
  },
  {
    "code": "P2430",
    "description": "Robotic assisted sacrocolpopexy +/- ureterolysis, using mesh",
    "chapter": "Female Reproductive Organs",
    "section": "Vagina/Perineum"
  },
  {
    "code": "P2431",
    "description": "Robotic assisted sacrocolpopexy +/- ureterolysis, using tissue graft",
    "chapter": "Female Reproductive Organs",
    "section": "Vagina/Perineum"
  },
  {
    "code": "P2432",
    "description": "Sacrocolpopexy (including laparoscopic) +/- ureterolysis, using mesh",
    "chapter": "Female Reproductive Organs",
    "section": "Vagina/Perineum"
  },
  {
    "code": "P2433",
    "description": "Sacrocolpopexy (including laparoscopic) +/- ureterolysis, using tissue graft",
    "chapter": "Female Reproductive Organs",
    "section": "Vagina/Perineum"
  },
  {
    "code": "P2450",
    "description": "Sacrospinous fixation",
    "chapter": "Female Reproductive Organs",
    "section": "Vagina/Perineum"
  },
  {
    "code": "P2453",
    "description": "Infracoccygeal sacropexy using mesh to repair vaginal vault prolapse +/- ureterolysis",
    "chapter": "Female Reproductive Organs",
    "section": "Suspension"
  },
  {
    "code": "P2454",
    "description": "Infracoccygeal sacropexy without mesh to repair vaginal vault prolapse +/- ureterolysis",
    "chapter": "Female Reproductive Organs",
    "section": "Vagina/Perineum"
  },
  {
    "code": "P2510",
    "description": "Repair of vesicovaginal fistula (including cystoscopy)",
    "chapter": "Female Reproductive Organs",
    "section": "Vagina/Perineum"
  },
  {
    "code": "P2520",
    "description": "Repair of urethrovaginal fistula (including cystoscopy)",
    "chapter": "Female Reproductive Organs",
    "section": "Vagina/Perineum"
  },
  {
    "code": "P2530",
    "description": "Repair of rectovaginal fistula",
    "chapter": "Female Reproductive Organs",
    "section": "Vagina/Perineum"
  },
  {
    "code": "P2610",
    "description": "Insertion of a vaginal support pessary",
    "chapter": "Female Reproductive Organs",
    "section": "Vagina/Perineum"
  },
  {
    "code": "P2730",
    "description": "Colposcopy (+/- biopsy, polypectomy or vulvoscopy)",
    "chapter": "Female Reproductive Organs",
    "section": "Cervix Uteri"
  },
  {
    "code": "P2930",
    "description": "Biopsy of lesion of vagina",
    "chapter": "Female Reproductive Organs",
    "section": "Vagina/Perineum"
  },
  {
    "code": "P2932",
    "description": "Examination of vagina under anaesthetic (as sole procedure)",
    "chapter": "Female Reproductive Organs",
    "section": "Vagina/Perineum"
  },
  {
    "code": "P3190",
    "description": "Laparoscopic excision of recto-vaginal endometriosis including rectal shave, +/-ureterolysis",
    "chapter": "Female Reproductive Organs",
    "section": "Vagina/Perineum"
  },
  {
    "code": "P3191",
    "description": "Laparoscopic excision of recto-vaginal endometriosis including disc resection of rectum, +/-ureterolysis",
    "chapter": "Female Reproductive Organs",
    "section": "Vagina/Perineum"
  },
  {
    "code": "P3192",
    "description": "Laparoscopic excision of recto-vaginal endometriosis including bowel resection (including formation of stoma) +/- hysterectomy, +/-ureterolysis",
    "chapter": "Female Reproductive Organs",
    "section": "Vagina/Perineum"
  },
  {
    "code": "P3195",
    "description": "Robotic assisted excision of recto-vaginal endometriosis including rectal shave, +/-ureterolysis",
    "chapter": "Female Reproductive Organs",
    "section": "Uterus/Adnexa"
  },
  {
    "code": "P3196",
    "description": "Robotic assisted excision of recto-vaginal endometriosis including disc resection of rectum, +/-ureterolysis",
    "chapter": "Female Reproductive Organs",
    "section": "Uterus/Adnexa"
  },
  {
    "code": "P3197",
    "description": "Robotic assisted excision of recto-vaginal endometriosis including bowel resection (including formation of stoma) +/- hysterectomy, +/-ureterolysis",
    "chapter": "Female Reproductive Organs",
    "section": "Uterus/Adnexa"
  },
  {
    "code": "Q0100",
    "description": "Amputation of cervix uteri",
    "chapter": "Female Reproductive Organs",
    "section": "Cervix Uteri"
  },
  {
    "code": "Q0220",
    "description": "Laser destruction of lesion of cervix uteri (+/- colposcopy or polypectomy)",
    "chapter": "Female Reproductive Organs",
    "section": "Cervix Uteri"
  },
  {
    "code": "Q0230",
    "description": "Cauterisation of lesion of cervix uteri (+/- loop diathermy, colposcopy or polypectomy)",
    "chapter": "Female Reproductive Organs",
    "section": "Cervix Uteri"
  },
  {
    "code": "Q0330",
    "description": "Cone biopsy of cervix uteri and/or (+/- laser, colposcopy or polypectomy)",
    "chapter": "Female Reproductive Organs",
    "section": "Cervix Uteri"
  },
  {
    "code": "Q0340",
    "description": "Punch biopsy of cervix uteri",
    "chapter": "Female Reproductive Organs",
    "section": "Cervix Uteri"
  },
  {
    "code": "Q0710",
    "description": "Radical hysterectomy and lymphadenectomy (Wertheim's) +/- ureterolysis",
    "chapter": "Female Reproductive Organs",
    "section": "Uterus/Adnexa"
  },
  {
    "code": "Q0711",
    "description": "Robotic assisted radical hysterectomy and lymphadenectomy (Wertheim's) +/- ureterolysis",
    "chapter": "Female Reproductive Organs",
    "section": "Uterus/Adnexa"
  },
  {
    "code": "Q0712",
    "description": "Radical trachelectomy including laparoscopic and removal of lymph nodes +/- ureterolysis",
    "chapter": "Female Reproductive Organs",
    "section": "Uterus/Adnexa"
  },
  {
    "code": "Q0740",
    "description": "Total abdominal hysterectomy, +/- oophorectomy, +/- ureterolysis",
    "chapter": "Female Reproductive Organs",
    "section": "Uterus/Adnexa"
  },
  {
    "code": "Q0750",
    "description": "Subtotal abdominal hysterectomy, +/- oophorectomy, +/- ureterolysis",
    "chapter": "Female Reproductive Organs",
    "section": "Uterus/Adnexa"
  },
  {
    "code": "Q0751",
    "description": "Laparoscopic subtotal hysterectomy, +/- oophorectomy, +/- ureterolysis",
    "chapter": "Female Reproductive Organs",
    "section": "Uterus/Adnexa"
  },
  {
    "code": "Q0752",
    "description": "Robotic assisted subtotal hysterectomy, +/- oophorectomy, +/- ureterolysis",
    "chapter": "Female Reproductive Organs",
    "section": "Uterus/Adnexa"
  },
  {
    "code": "Q0790",
    "description": "Laparoscopic total hysterectomy, +/- oophorectomy, +/- ureterolysis",
    "chapter": "Female Reproductive Organs",
    "section": "Uterus/Adnexa"
  },
  {
    "code": "Q0791",
    "description": "Robotic assisted total hysterectomy (+/- oophorectomy)",
    "chapter": "Female Reproductive Organs",
    "section": "Uterus/Adnexa"
  },
  {
    "code": "Q0792",
    "description": "Prophylactic hysterectomy  (+/- oophorectomy)",
    "chapter": "Female Reproductive Organs",
    "section": "Uterus/Adnexa"
  },
  {
    "code": "Q0800",
    "description": "Vaginal hysterectomy without laparoscopic assistance",
    "chapter": "Female Reproductive Organs",
    "section": "Uterus/Adnexa"
  },
  {
    "code": "Q0810",
    "description": "Vaginal transluminal endoscopic hysterectomy +/- salpingo-oophorectomy +/- ureterolysis",
    "chapter": "Female Reproductive Organs",
    "section": "Uterus/Adnexa"
  },
  {
    "code": "Q0820",
    "description": "Vaginal transluminal endoscopic myomectomy +/- ureterolysis",
    "chapter": "Female Reproductive Organs",
    "section": "Uterus/Adnexa"
  },
  {
    "code": "Q0830",
    "description": "Vaginal hysterectomy with laparoscopic assistance +/- ureterolysis",
    "chapter": "Female Reproductive Organs",
    "section": "Uterus/Adnexa"
  },
  {
    "code": "Q0880",
    "description": "Hysterectomy with excision / biopsy and/or removal of omentum and uterine adnexa for ovarian tumour +/- ureterolysis",
    "chapter": "Female Reproductive Organs",
    "section": "Uterus/Adnexa"
  },
  {
    "code": "Q0890",
    "description": "Vaginal hysterectomy including salpingo-oophorectomy (including laparoscopically assisted) +/- ureterolysis",
    "chapter": "Female Reproductive Organs",
    "section": "Uterus/Adnexa"
  },
  {
    "code": "Q0920",
    "description": "Myomectomy (including laparoscopically) +/- ureterolysis",
    "chapter": "Female Reproductive Organs",
    "section": "Uterus/Adnexa"
  },
  {
    "code": "Q0930",
    "description": "Robotic assisted myomectomy",
    "chapter": "Female Reproductive Organs",
    "section": "Uterus/Adnexa"
  },
  {
    "code": "Q0950",
    "description": "Plastic reconstruction of uterus",
    "chapter": "Female Reproductive Organs",
    "section": "Uterus/Adnexa"
  },
  {
    "code": "Q1010",
    "description": "Dilation of cervix uteri and curettage of retained products of conception following miscarriage",
    "chapter": "Female Reproductive Organs",
    "section": "Cervix Uteri"
  },
  {
    "code": "Q1030",
    "description": "Dilatation of cervix uteri and curettage of uterus (including polypectomy and diathermy of cervix)",
    "chapter": "Female Reproductive Organs",
    "section": "Cervix Uteri"
  },
  {
    "code": "Q1111",
    "description": "Manual vacuum aspiration of retained products of conception",
    "chapter": "Female Reproductive Organs",
    "section": "Uterus/Adnexa"
  },
  {
    "code": "Q1131",
    "description": "Hysteroscopic removal of retained products of conception",
    "chapter": "Female Reproductive Organs",
    "section": "Uterus/Adnexa"
  },
  {
    "code": "Q1280",
    "description": "Introduction of a Mirena coil",
    "chapter": "Female Reproductive Organs",
    "section": "Uterus/Adnexa"
  },
  {
    "code": "Q1281",
    "description": "Removal and/or replacement of an embedded / migrated Mirena coil (as sole procedure)",
    "chapter": "Female Reproductive Organs",
    "section": "Uterus/Adnexa"
  },
  {
    "code": "Q1700",
    "description": "Therapeutic hysteroscopic operations on uterus (including endometrial ablation excluding microwave or radiofrequency ablation) +/- Mirena coil insertion",
    "chapter": "Female Reproductive Organs",
    "section": "Uterus/Adnexa"
  },
  {
    "code": "Q1701",
    "description": "Laparoscopic excision of endometriosis, +/-ureterolysis",
    "chapter": "Female Reproductive Organs",
    "section": "Uterus/Adnexa"
  },
  {
    "code": "Q1702",
    "description": "Microwave endometrial ablation (including hysteroscopy)",
    "chapter": "Female Reproductive Organs",
    "section": "Uterus/Adnexa"
  },
  {
    "code": "Q1703",
    "description": "Impedance controlled bipolar radiofrequency ablation for menorrhagia (including hysteroscopy)",
    "chapter": "Female Reproductive Organs",
    "section": "Uterus/Adnexa"
  },
  {
    "code": "Q1704",
    "description": "Robotic assisted excision of endometriosis, +/-ureterolysis",
    "chapter": "Female Reproductive Organs",
    "section": "Uterus/Adnexa"
  },
  {
    "code": "Q1705",
    "description": "Robotic assisted therapeutic hysteroscopic operations on uterus (including endometrial ablation excluding microwave or radiofrequency ablation)",
    "chapter": "Female Reproductive Organs",
    "section": "Uterus/Adnexa"
  },
  {
    "code": "Q1710",
    "description": "Hysteroscopic morcellation of uterine leiomyomas (fibroids)",
    "chapter": "Female Reproductive Organs",
    "section": "Uterus/Adnexa"
  },
  {
    "code": "Q1711",
    "description": "Laparoscopic morcellation of uterine leiomyomas (fibroids)",
    "chapter": "Female Reproductive Organs",
    "section": "Uterus/Adnexa"
  },
  {
    "code": "Q1720",
    "description": "Transcervical radiofrequency ablation of uterine fibroids under image guidance",
    "chapter": "Female Reproductive Organs",
    "section": "Uterus/Adnexa"
  },
  {
    "code": "Q1800",
    "description": "Hysteroscopy (including biopsy, dilatation, +/- cauterisation, curettage and resection of polyp(s) +/- Mirena coil insertion)",
    "chapter": "Female Reproductive Organs",
    "section": "Uterus/Adnexa"
  },
  {
    "code": "Q1802",
    "description": "Hysteroscopy with resection of fibroids (excluding morcellation) +/- insertion of Mirena coil",
    "chapter": "Female Reproductive Organs",
    "section": "Uterus/Adnexa"
  },
  {
    "code": "Q1900",
    "description": "Repair of uterine niche",
    "chapter": "Female Reproductive Organs",
    "section": "Uterus/Adnexa"
  },
  {
    "code": "Q1901",
    "description": "Robotic assisted repair of uterine niche",
    "chapter": "Female Reproductive Organs",
    "section": "Uterus/Adnexa"
  },
  {
    "code": "Q2020",
    "description": "Endometrial biopsy or aspiration",
    "chapter": "Female Reproductive Organs",
    "section": "Uterus/Adnexa"
  },
  {
    "code": "Q2080",
    "description": "Ventro-suspension of uterus (including laparoscopic)",
    "chapter": "Female Reproductive Organs",
    "section": "Suspension"
  },
  {
    "code": "Q2081",
    "description": "Myolysis of uterine fibroids",
    "chapter": "Female Reproductive Organs",
    "section": "Uterus/Adnexa"
  },
  {
    "code": "Q2230",
    "description": "Laparoscopic oophorectomy and salpingectomy, +/- biopsy eg. omentum, peritoneum, lymph node (as sole procedure) – bilateral",
    "chapter": "Female Reproductive Organs",
    "section": "Uterus/Adnexa"
  },
  {
    "code": "Q2231",
    "description": "Laparoscopic oophorectomy and salpingectomy, +/- biopsy eg. omentum, peritoneum, lymph node (as sole procedure) – unilateral",
    "chapter": "Female Reproductive Organs",
    "section": "Uterus/Adnexa"
  },
  {
    "code": "Q2232",
    "description": "Open oophorectomy and salpingectomy, +/- biopsy eg. omentum, peritoneum, lymph node (as sole procedure) – unilateral",
    "chapter": "Female Reproductive Organs",
    "section": "Uterus/Adnexa"
  },
  {
    "code": "Q2233",
    "description": "Open oophorectomy and salpingectomy, +/- biopsy eg. omentum, peritoneum, lymph node (as sole procedure) – bilateral",
    "chapter": "Female Reproductive Organs",
    "section": "Uterus/Adnexa"
  },
  {
    "code": "Q2234",
    "description": "Prophylactic oophorectomy (including bilateral)",
    "chapter": "Female Reproductive Organs",
    "section": "Uterus/Adnexa"
  },
  {
    "code": "Q2235",
    "description": "Robotic assisted oophorectomy and salpingectomy, +/- biopsy eg. omentum, peritoneum, lymph node (as sole procedure) – bilateral",
    "chapter": "Female Reproductive Organs",
    "section": "Uterus/Adnexa"
  },
  {
    "code": "Q2236",
    "description": "Robotic assisted oophorectomy and salpingectomy, +/- biopsy eg. omentum, peritoneum, lymph node (as sole procedure) – unilateral",
    "chapter": "Female Reproductive Organs",
    "section": "Uterus/Adnexa"
  },
  {
    "code": "Q2330",
    "description": "Salpingectomy (including bilateral) (as sole procedure)",
    "chapter": "Female Reproductive Organs",
    "section": "Uterus/Adnexa"
  },
  {
    "code": "Q3110",
    "description": "Removal of products of conception from fallopian tube (ectopic pregnancy) (including laparoscopically)",
    "chapter": "Female Reproductive Organs",
    "section": "Uterus/Adnexa"
  },
  {
    "code": "Q3800",
    "description": "Laparoscopy and therapeutic procedures (including laser, diathermy and destruction e.g. endometriosis, adhesiolysis, tubal and ovarian surgery, +/-ureterolysis)",
    "chapter": "Female Reproductive Organs",
    "section": "Uterus/Adnexa"
  },
  {
    "code": "Q3900",
    "description": "Laparoscopy (including e.g. puncture of ovarian cysts, +/- biopsy, minor endometriosis, +/-ureterolysis)",
    "chapter": "Female Reproductive Organs",
    "section": "Uterus/Adnexa"
  },
  {
    "code": "Q3980",
    "description": "Hysterosalpingo contrast echo sonography",
    "chapter": "Female Reproductive Organs",
    "section": "Uterus/Adnexa"
  },
  {
    "code": "Q4130",
    "description": "Hydrotubation of fallopian tubes",
    "chapter": "Female Reproductive Organs",
    "section": "Uterus/Adnexa"
  },
  {
    "code": "Q4400",
    "description": "Ovarian cystectomy +/- omental biopsy (as sole procedure and including bilateral)",
    "chapter": "Female Reproductive Organs",
    "section": "Uterus/Adnexa"
  },
  {
    "code": "Q4401",
    "description": "Robotic assisted ovarian cystectomy +/- omental biopsy (as sole procedure and including bilateral)",
    "chapter": "Female Reproductive Organs",
    "section": "Uterus/Adnexa"
  },
  {
    "code": "Q5180",
    "description": "Laparoscopic ovarian drilling",
    "chapter": "Female Reproductive Organs",
    "section": "Uterus/Adnexa"
  },
  {
    "code": "Q5450",
    "description": "Laparoscopic hysteropexy (including sacrohysteropexy) using mesh +/- ureterolysis",
    "chapter": "Female Reproductive Organs",
    "section": "Suspension"
  },
  {
    "code": "Q5451",
    "description": "Robotic assisted laparoscopic hysteropexy (including sacrohysteropexy) using mesh +/- ureterolysis",
    "chapter": "Female Reproductive Organs",
    "section": "Suspension"
  },
  {
    "code": "Q5460",
    "description": "Infracoccygeal sacropexy using mesh to repair uterine prolapse +/- ureterolysis",
    "chapter": "Female Reproductive Organs",
    "section": "Suspension"
  },
  {
    "code": "R1590",
    "description": "Induction of labour for stillbirth",
    "chapter": "Pregnancy and Confinement",
    "section": "Pregnancy and Confinement"
  },
  {
    "code": "R1820",
    "description": "Caesarean delivery",
    "chapter": "Pregnancy and Confinement",
    "section": "Pregnancy and Confinement"
  },
  {
    "code": "R2510",
    "description": "Caesarean hysterectomy",
    "chapter": "Pregnancy and Confinement",
    "section": "Pregnancy and Confinement"
  },
  {
    "code": "R2810",
    "description": "Curettage of delivered uterus",
    "chapter": "Pregnancy and Confinement",
    "section": "Pregnancy and Confinement"
  },
  {
    "code": "S0120",
    "description": "Facelift following disease or trauma",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Face and Jaws"
  },
  {
    "code": "S0140",
    "description": "Browlift (following nerve damage)",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Face and Jaws"
  },
  {
    "code": "S0410",
    "description": "Wide excision of sweat glands -  including bilateral axillae",
    "chapter": "Skin and Subcutaneous Tissue",
    "section": "Lesions of Skin"
  },
  {
    "code": "S0450",
    "description": "Thermolysis treatment for Hyperhidrosis (miraDry)",
    "chapter": "Investigations, simple procedures and consultation codes",
    "section": "Simple Procedures"
  },
  {
    "code": "S0520",
    "description": "Microscopically controlled excision of lesion of skin or subcutaneous tissue (Mohs micrographic surgery) with immediate reconstruction",
    "chapter": "Skin and Subcutaneous Tissue",
    "section": "Lesions of Skin"
  },
  {
    "code": "S0521",
    "description": "Microscopically controlled excision of lesion of skin or subcutaneous tissue (Mohs micrographic surgery) without reconstruction",
    "chapter": "Skin and Subcutaneous Tissue",
    "section": "Lesions of Skin"
  },
  {
    "code": "S0601",
    "description": "Microwave ablation therapy for warts and verrucae",
    "chapter": "Skin and Subcutaneous Tissue",
    "section": "Lesions of Skin"
  },
  {
    "code": "S0602",
    "description": "Primary excision of malignant lesion - head and neck",
    "chapter": "Skin and Subcutaneous Tissue",
    "section": "Lesions of Skin"
  },
  {
    "code": "S0603",
    "description": "Primary excision of malignant lesion - trunk and limbs",
    "chapter": "Skin and Subcutaneous Tissue",
    "section": "Lesions of Skin"
  },
  {
    "code": "S0604",
    "description": "Secondary excision of malignant lesion - head and neck",
    "chapter": "Skin and Subcutaneous Tissue",
    "section": "Lesions of Skin"
  },
  {
    "code": "S0605",
    "description": "Secondary excision of malignant lesion - trunk and limbs",
    "chapter": "Skin and Subcutaneous Tissue",
    "section": "Lesions of Skin"
  },
  {
    "code": "S0606",
    "description": "Photodynamic therapy (PDT) to malignant lesion of skin, with artificial light source, up to three",
    "chapter": "Skin and Subcutaneous Tissue",
    "section": "Lesions of Skin"
  },
  {
    "code": "S0607",
    "description": "Photodynamic therapy (PDT) to malignant lesion of skin, with artificial light source, four or more",
    "chapter": "Skin and Subcutaneous Tissue",
    "section": "Lesions of Skin"
  },
  {
    "code": "S0608",
    "description": "Sentinel lymph node biopsy for melanoma",
    "chapter": "Skin and Subcutaneous Tissue",
    "section": "Lesions of Skin"
  },
  {
    "code": "S0609",
    "description": "Photodynamic therapy (PDT) with daylight, to malignant lesion of skin - up to three",
    "chapter": "Skin and Subcutaneous Tissue",
    "section": "Lesions of Skin"
  },
  {
    "code": "S0610",
    "description": "Photodynamic therapy (PDT) with daylight, to malignant lesion of skin - four or more",
    "chapter": "Skin and Subcutaneous Tissue",
    "section": "Lesions of Skin"
  },
  {
    "code": "S0611",
    "description": "Topical rhenium-188 therapy",
    "chapter": "Skin and Subcutaneous Tissue",
    "section": "Lesions of Skin"
  },
  {
    "code": "S0632",
    "description": "Excision of lesion of skin or subcutaneous tissue - up to three, head and neck (excluding lipoma)",
    "chapter": "Skin and Subcutaneous Tissue",
    "section": "Lesions of Skin"
  },
  {
    "code": "S0633",
    "description": "Excision of lesion of skin or subcutaneous tissue - up to three, trunk and limbs (excluding lipoma)",
    "chapter": "Skin and Subcutaneous Tissue",
    "section": "Lesions of Skin"
  },
  {
    "code": "S0642",
    "description": "Excision of lesion of skin or subcutaneous tissue - four or more, head and neck (excluding lipoma)",
    "chapter": "Skin and Subcutaneous Tissue",
    "section": "Lesions of Skin"
  },
  {
    "code": "S0643",
    "description": "Excision of lesion of skin or subcutaneous tissue - four or more, trunk and limbs (excluding lipoma)",
    "chapter": "Skin and Subcutaneous Tissue",
    "section": "Lesions of Skin"
  },
  {
    "code": "S0651",
    "description": "Removal of benign lesion on trunk or limbs less than 10 cm in diameter or on scalp less than 5cm in diameter (excluding lipoma)",
    "chapter": "Skin and Subcutaneous Tissue",
    "section": "Lesions of Skin"
  },
  {
    "code": "S0652",
    "description": "Removal of benign lesion on trunk or limbs greater than 10 cm in diameter or on scalp greater than 5 cm in diameter (excluding lipoma)",
    "chapter": "Skin and Subcutaneous Tissue",
    "section": "Lesions of Skin"
  },
  {
    "code": "S0653",
    "description": "Removal of benign lesion in muscle or deeper tissue (excluding lipoma)",
    "chapter": "Skin and Subcutaneous Tissue",
    "section": "Lesions of Skin"
  },
  {
    "code": "S0654",
    "description": "Removal of benign lesion on head and neck (excluding scalp) which is closed by Primary closure or advancement flap (excluding lipoma)",
    "chapter": "Skin and Subcutaneous Tissue",
    "section": "Lesions of Skin"
  },
  {
    "code": "S0655",
    "description": "Removal of benign lesion on head and neck requiring flap closure (excluding advancement flap) (excluding lipoma)",
    "chapter": "Skin and Subcutaneous Tissue",
    "section": "Lesions of Skin"
  },
  {
    "code": "S0656",
    "description": "Removal of small lipoma less than 10cm",
    "chapter": "Skin and Subcutaneous Tissue",
    "section": "Lesions of Skin"
  },
  {
    "code": "S0657",
    "description": "Removal of large lipoma greater than 10cm",
    "chapter": "Skin and Subcutaneous Tissue",
    "section": "Lesions of Skin"
  },
  {
    "code": "S0820",
    "description": "Curettage/cryotherapy of lesions of skin (including cauterisation) - four or more",
    "chapter": "Skin and Subcutaneous Tissue",
    "section": "Lesions of Skin"
  },
  {
    "code": "S0922",
    "description": "Laser destruction of lesion(s) of skin - up to 25cm2 in area",
    "chapter": "Skin and Subcutaneous Tissue",
    "section": "Lesions of Skin"
  },
  {
    "code": "S0923",
    "description": "Laser destruction of lesion(s) of skin - over 25cm2 in area",
    "chapter": "Skin and Subcutaneous Tissue",
    "section": "Lesions of Skin"
  },
  {
    "code": "S0924",
    "description": "Pulsed dye laser treatment to blood vessels of skin",
    "chapter": "Skin and Subcutaneous Tissue",
    "section": "Lesions of Skin"
  },
  {
    "code": "S0940",
    "description": "Photodynamic therapy (PDT), with artificial light source, to non malignant lesions of skin",
    "chapter": "Skin and Subcutaneous Tissue",
    "section": "Lesions of Skin"
  },
  {
    "code": "S0941",
    "description": "Photodynamic therapy (PDT) with daylight, to non malignant lesions of skin",
    "chapter": "Skin and Subcutaneous Tissue",
    "section": "Lesions of Skin"
  },
  {
    "code": "S0980",
    "description": "Phototherapy (UVB/PUVA/PUVB) per session – whole body",
    "chapter": "Skin and Subcutaneous Tissue",
    "section": "Lesions of Skin"
  },
  {
    "code": "S0982",
    "description": "Phototherapy (UVB/PUVA/PUVB) per session – localised",
    "chapter": "Skin and Subcutaneous Tissue",
    "section": "Lesions of Skin"
  },
  {
    "code": "S1110",
    "description": "Curettage/cryotherapy of lesion of skin (including cauterisation) - up to three",
    "chapter": "Skin and Subcutaneous Tissue",
    "section": "Lesions of Skin"
  },
  {
    "code": "S1420",
    "description": "Shave biopsy of lesion of skin",
    "chapter": "Skin and Subcutaneous Tissue",
    "section": "Lesions of Skin"
  },
  {
    "code": "S1500",
    "description": "Biopsy of skin or subcutaneous tissue",
    "chapter": "Skin and Subcutaneous Tissue",
    "section": "Lesions of Skin"
  },
  {
    "code": "S1510",
    "description": "Needle/tru-cut biopsy of muscle (as sole procedure)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Connective Tissue/Tendon Muscle"
  },
  {
    "code": "S1700",
    "description": "Distant flap - delay/division/inset",
    "chapter": "Skin and Subcutaneous Tissue",
    "section": "Flaps and Free Skin Grafts"
  },
  {
    "code": "S1740",
    "description": "Large myocutaneous (muscular/cutaneous) flap (9cm2 or more) including closure of secondary defect",
    "chapter": "Skin and Subcutaneous Tissue",
    "section": "Flaps and Free Skin Grafts"
  },
  {
    "code": "S1750",
    "description": "Large muscle flap (9cm2 or more) (including skin graft and closure of secondary defect)",
    "chapter": "Skin and Subcutaneous Tissue",
    "section": "Flaps and Free Skin Grafts"
  },
  {
    "code": "S1900",
    "description": "Distant pedicle flap - elevation including transfer (including closure/grafting to secondary defect)",
    "chapter": "Skin and Subcutaneous Tissue",
    "section": "Flaps and Free Skin Grafts"
  },
  {
    "code": "S1910",
    "description": "Lengthening temporalis myoplasty",
    "chapter": "Skin and Subcutaneous Tissue",
    "section": "Flaps and Free Skin Grafts"
  },
  {
    "code": "S2000",
    "description": "Large island skin flap (9cm2 or more) (e.g. radial forearm) (including closure of secondary defect)",
    "chapter": "Skin and Subcutaneous Tissue",
    "section": "Flaps and Free Skin Grafts"
  },
  {
    "code": "S2002",
    "description": "Small island flap (less than 9cm2)",
    "chapter": "Skin and Subcutaneous Tissue",
    "section": "Flaps and Free Skin Grafts"
  },
  {
    "code": "S2220",
    "description": "Neurovascular island flap",
    "chapter": "Skin and Subcutaneous Tissue",
    "section": "Flaps and Free Skin Grafts"
  },
  {
    "code": "S2500",
    "description": "Local flap - less than 9cm2",
    "chapter": "Skin and Subcutaneous Tissue",
    "section": "Flaps and Free Skin Grafts"
  },
  {
    "code": "S2502",
    "description": "Local flap - 9cm2 or more (excluding graft/flap to secondary defect)",
    "chapter": "Skin and Subcutaneous Tissue",
    "section": "Flaps and Free Skin Grafts"
  },
  {
    "code": "S2503",
    "description": "Local flap - 9cm2 or more (including graft/flap to secondary defect)",
    "chapter": "Skin and Subcutaneous Tissue",
    "section": "Flaps and Free Skin Grafts"
  },
  {
    "code": "S3100",
    "description": "Re-exploration of free flap",
    "chapter": "Skin and Subcutaneous Tissue",
    "section": "Flaps and Free Skin Grafts"
  },
  {
    "code": "S3102",
    "description": "Thinning of skin graft flap",
    "chapter": "Skin and Subcutaneous Tissue",
    "section": "Flaps and Free Skin Grafts"
  },
  {
    "code": "S3500",
    "description": "Split autograft of skin, trunk and limbs - up to 25cm2",
    "chapter": "Skin and Subcutaneous Tissue",
    "section": "Flaps and Free Skin Grafts"
  },
  {
    "code": "S3530",
    "description": "Split autograft of skin, trunk and limbs - over 25cm2 and up to 5% of body surface area",
    "chapter": "Skin and Subcutaneous Tissue",
    "section": "Flaps and Free Skin Grafts"
  },
  {
    "code": "S3532",
    "description": "Split autograft of skin, trunk and limbs - each additional 5% of body surface area",
    "chapter": "Skin and Subcutaneous Tissue",
    "section": "Flaps and Free Skin Grafts"
  },
  {
    "code": "S3622",
    "description": "Full thickness graft, trunk and limbs - up to 9cm2 in area",
    "chapter": "Skin and Subcutaneous Tissue",
    "section": "Flaps and Free Skin Grafts"
  },
  {
    "code": "S3623",
    "description": "Full thickness graft, trunk and limbs - each additional 25cm2 in area",
    "chapter": "Skin and Subcutaneous Tissue",
    "section": "Flaps and Free Skin Grafts"
  },
  {
    "code": "S3624",
    "description": "Full thickness graft, head, neck, hands and genitalia - up to 9cm2 in area",
    "chapter": "Skin and Subcutaneous Tissue",
    "section": "Flaps and Free Skin Grafts"
  },
  {
    "code": "S3625",
    "description": "Full thickness graft, head, neck, hands and genitalia - each additional 16cm2 in area",
    "chapter": "Skin and Subcutaneous Tissue",
    "section": "Flaps and Free Skin Grafts"
  },
  {
    "code": "S4182",
    "description": "Debridement and Primary suture of wound with involvement of deeper tissue - head and neck",
    "chapter": "Skin and Subcutaneous Tissue",
    "section": "Repair"
  },
  {
    "code": "S4183",
    "description": "Debridement and Primary suture of wound with involvement of deeper tissue - trunk and limbs",
    "chapter": "Skin and Subcutaneous Tissue",
    "section": "Repair"
  },
  {
    "code": "S4212",
    "description": "Debridement and Primary suture of wound without involvement of deeper tissue (skin and subcutaneous fat only) - head and neck",
    "chapter": "Skin and Subcutaneous Tissue",
    "section": "Repair"
  },
  {
    "code": "S4213",
    "description": "Debridement and Primary suture of wound without involvement of deeper tissue (skin and subcutaneous fat only) - trunk and limbs",
    "chapter": "Skin and Subcutaneous Tissue",
    "section": "Repair"
  },
  {
    "code": "S4230",
    "description": "Secondary suture of skin",
    "chapter": "Skin and Subcutaneous Tissue",
    "section": "Repair"
  },
  {
    "code": "S4480",
    "description": "Removal of foreign body in deeper tissue",
    "chapter": "Skin and Subcutaneous Tissue",
    "section": "Lesions of Skin"
  },
  {
    "code": "S4720",
    "description": "Drainage of lesion of skin (including abscess)",
    "chapter": "Skin and Subcutaneous Tissue",
    "section": "Lesions of Skin"
  },
  {
    "code": "S4740",
    "description": "Drainage of large subcutaneous abscess/haematoma",
    "chapter": "Skin and Subcutaneous Tissue",
    "section": "Lesions of Skin"
  },
  {
    "code": "S4760",
    "description": "Fine needle aspiration cytology",
    "chapter": "Breast",
    "section": "Other"
  },
  {
    "code": "S4780",
    "description": "Aspiration of subcutaneous haematoma",
    "chapter": "Investigations, simple procedures and consultation codes",
    "section": "Simple Procedures"
  },
  {
    "code": "S4812",
    "description": "Insertion of skin expander into tissue (not related to breast reconstruction)",
    "chapter": "Skin and Subcutaneous Tissue",
    "section": "Repair"
  },
  {
    "code": "S4910",
    "description": "Volume adjustment to skin expander in subcutaneous tissue",
    "chapter": "Skin and Subcutaneous Tissue",
    "section": "Repair"
  },
  {
    "code": "S4911",
    "description": "Positional surgical adjustment to skin expander in subcutaneous tissue",
    "chapter": "Skin and Subcutaneous Tissue",
    "section": "Repair"
  },
  {
    "code": "S4930",
    "description": "Removal of skin expander (not related to breast reconstruction)",
    "chapter": "Skin and Subcutaneous Tissue",
    "section": "Repair"
  },
  {
    "code": "S4950",
    "description": "Fat transfer, including extraction and volume adjustment, of scar defect following trauma (excluding breast)",
    "chapter": "Skin and Subcutaneous Tissue",
    "section": "Repair"
  },
  {
    "code": "S5010",
    "description": "Tumescent liposuction for lipoedema",
    "chapter": "Skin and Subcutaneous Tissue",
    "section": "Repair"
  },
  {
    "code": "S5211",
    "description": "Injections of botulinum toxin for hyperhidrosis",
    "chapter": "Skin and Subcutaneous Tissue",
    "section": "Repair"
  },
  {
    "code": "S5220",
    "description": "Intradermal injection into scalp (for alopecia)",
    "chapter": "Skin and Subcutaneous Tissue",
    "section": "Repair"
  },
  {
    "code": "S5300",
    "description": "Introduction of substance into skin (including hormone pellet)",
    "chapter": "Investigations, simple procedures and consultation codes",
    "section": "Simple Procedures"
  },
  {
    "code": "S5320",
    "description": "Intralesional injections for treating unresectable, metastatic melanoma +/- image guidance using an Advanced Therapy Medicinal Product",
    "chapter": "Investigations, simple procedures and consultation codes",
    "section": "Simple Procedures"
  },
  {
    "code": "S5322",
    "description": "Injection of therapeutic substance into keloid scar",
    "chapter": "Investigations, simple procedures and consultation codes",
    "section": "Simple Procedures"
  },
  {
    "code": "S5520",
    "description": "Burn excision (wound/scar) head, neck, hands, feet & genitalia, up to 9cm2",
    "chapter": "Skin and Subcutaneous Tissue",
    "section": "Burns, Scars and Contractures"
  },
  {
    "code": "S5522",
    "description": "Burn excision (wound/scar) head, neck, hands, feet & genitalia, 9cm2 - 25cm2",
    "chapter": "Skin and Subcutaneous Tissue",
    "section": "Burns, Scars and Contractures"
  },
  {
    "code": "S5523",
    "description": "Burn excision (wound/scar) head, neck, hands, feet & genitalia, greater than 25cm2",
    "chapter": "Skin and Subcutaneous Tissue",
    "section": "Burns, Scars and Contractures"
  },
  {
    "code": "S5524",
    "description": "Burn excision (wound/scar) trunk & limbs (not more than 2% of body area)",
    "chapter": "Skin and Subcutaneous Tissue",
    "section": "Burns, Scars and Contractures"
  },
  {
    "code": "S5525",
    "description": "Burn excision (wound/scar) trunk & limbs (between 2% and 10% of body area)",
    "chapter": "Skin and Subcutaneous Tissue",
    "section": "Burns, Scars and Contractures"
  },
  {
    "code": "S5526",
    "description": "Burn excision (wound/scar) trunk & limbs (between 10% and 25% of body area)",
    "chapter": "Skin and Subcutaneous Tissue",
    "section": "Burns, Scars and Contractures"
  },
  {
    "code": "S5532",
    "description": "Dressing of burn of skin or subcutaneous tissue - less than 2%",
    "chapter": "Skin and Subcutaneous Tissue",
    "section": "Burns, Scars and Contractures"
  },
  {
    "code": "S5533",
    "description": "Dressing of burn of skin or subcutaneous tissue -  2%-10%",
    "chapter": "Skin and Subcutaneous Tissue",
    "section": "Burns, Scars and Contractures"
  },
  {
    "code": "S5534",
    "description": "Dressing of burn of skin or subcutaneous tissue - 10%-25%",
    "chapter": "Skin and Subcutaneous Tissue",
    "section": "Burns, Scars and Contractures"
  },
  {
    "code": "S5535",
    "description": "Dressing of burn of skin or subcutaneous tissue - greater than 25%",
    "chapter": "Skin and Subcutaneous Tissue",
    "section": "Burns, Scars and Contractures"
  },
  {
    "code": "S5560",
    "description": "Release of burn scar contracture, head, neck, hands, feet and genitalia",
    "chapter": "Skin and Subcutaneous Tissue",
    "section": "Burns, Scars and Contractures"
  },
  {
    "code": "S5562",
    "description": "Release of burn scar contracture, trunk and limbs",
    "chapter": "Skin and Subcutaneous Tissue",
    "section": "Burns, Scars and Contractures"
  },
  {
    "code": "S5710",
    "description": "Debridement of wound (and surgical toilet)  - up to 25cm2 in area",
    "chapter": "Skin and Subcutaneous Tissue",
    "section": "Repair"
  },
  {
    "code": "S5712",
    "description": "Debridement of wound (and surgical toilet) - over 25cm2 in area",
    "chapter": "Skin and Subcutaneous Tissue",
    "section": "Repair"
  },
  {
    "code": "S5730",
    "description": "Surgical toilet and debridement of deep wound (including traumatic or post-operative aetiology)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Fractures"
  },
  {
    "code": "S5770",
    "description": "Dressing of skin using vacuum assisted closure device (vac pump)",
    "chapter": "Skin and Subcutaneous Tissue",
    "section": "Burns, Scars and Contractures"
  },
  {
    "code": "S6022",
    "description": "Skin resurfacing (laser/dermabrasion) - up to 25cm2 in area",
    "chapter": "Skin and Subcutaneous Tissue",
    "section": "Lesions of Skin"
  },
  {
    "code": "S6023",
    "description": "Skin resurfacing (laser/dermabrasion) - over 25cm2 in area",
    "chapter": "Skin and Subcutaneous Tissue",
    "section": "Lesions of Skin"
  },
  {
    "code": "S6040",
    "description": "Scar revision up to 5cm – head & neck",
    "chapter": "Skin and Subcutaneous Tissue",
    "section": "Burns, Scars and Contractures"
  },
  {
    "code": "S6041",
    "description": "Scar revision up to 5cm – trunk & limbs",
    "chapter": "Skin and Subcutaneous Tissue",
    "section": "Burns, Scars and Contractures"
  },
  {
    "code": "S6042",
    "description": "Scar revision over 5cm – head & neck",
    "chapter": "Skin and Subcutaneous Tissue",
    "section": "Burns, Scars and Contractures"
  },
  {
    "code": "S6043",
    "description": "Scar revision over 5cm – trunk & limbs",
    "chapter": "Skin and Subcutaneous Tissue",
    "section": "Burns, Scars and Contractures"
  },
  {
    "code": "S6060",
    "description": "Laser hair removal, from free flap reconstruction as result of tumour or pilonidal sinus",
    "chapter": "Skin and Subcutaneous Tissue",
    "section": "Flaps and Free Skin Grafts"
  },
  {
    "code": "S6400",
    "description": "Excision of nail bed (Zadik's) (including anaesthetic)",
    "chapter": "Skin and Subcutaneous Tissue",
    "section": "Lesions of Skin"
  },
  {
    "code": "S7010",
    "description": "Wedge excision or avulsion of nail (including chemical ablation of nail bed)",
    "chapter": "Skin and Subcutaneous Tissue",
    "section": "Lesions of Skin"
  },
  {
    "code": "T0110",
    "description": "Thoracoplasty",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Chest Wall"
  },
  {
    "code": "T0132",
    "description": "Excision of chest wall tumour - with chest wall reconstruction",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Chest Wall"
  },
  {
    "code": "T0133",
    "description": "Excision of chest wall tumour - without chest wall reconstruction",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Chest Wall"
  },
  {
    "code": "T0212",
    "description": "Secondary correction of scoliosis-related chest wall deformity (posterior costoplasty) (as sole procedure)",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Chest Wall"
  },
  {
    "code": "T0213",
    "description": "Removal of pectus bar (including bilateral)",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Chest Wall"
  },
  {
    "code": "T0214",
    "description": "Minimally invasive pectus bar placement for pectus excavatum (including bilateral)",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Chest Wall"
  },
  {
    "code": "T0215",
    "description": "Open surgical correction of pectus deformity of chest wall (or other congenital defect thereof)",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Chest Wall"
  },
  {
    "code": "T0320",
    "description": "Exploratory thoracotomy",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Chest Wall"
  },
  {
    "code": "T0710",
    "description": "Decortication of pleura or lung",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Bronchi/Lungs/Pleura"
  },
  {
    "code": "T0711",
    "description": "Robotic assisted decortication of pleura of lung",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Bronchi/Lungs/Pleura"
  },
  {
    "code": "T0810",
    "description": "Resection of rib and open drainage of pleural cavity",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Chest Wall"
  },
  {
    "code": "T0910",
    "description": "Open pleural biopsy as sole procedure",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Bronchi/Lungs/Pleura"
  },
  {
    "code": "T1030",
    "description": "Video-assisted thoracoscopic surgery (VATS) assisted pleurodesis / pleurectomy",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Video Assisted Thoracic Surgery (VATS)"
  },
  {
    "code": "T1031",
    "description": "Robotic assisted pleurodesis/pleurectomy",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Video Assisted Thoracic Surgery (VATS)"
  },
  {
    "code": "T1032",
    "description": "Thoracoscopy and drainage and chemical pleurodesis",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Video Assisted Thoracic Surgery (VATS)"
  },
  {
    "code": "T1100",
    "description": "Diagnostic thoracoscopy (+/- biopsy)",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Video Assisted Thoracic Surgery (VATS)"
  },
  {
    "code": "T1220",
    "description": "Drainage of pleural cavity",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Bronchi/Lungs/Pleura"
  },
  {
    "code": "T1240",
    "description": "Insertion of tube drain into pleural cavity",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Bronchi/Lungs/Pleura"
  },
  {
    "code": "T1300",
    "description": "Introduction of substance into pleural cavity with chest drain",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Bronchi/Lungs/Pleura"
  },
  {
    "code": "T1410",
    "description": "Needle biopsy of pleura",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Bronchi/Lungs/Pleura"
  },
  {
    "code": "T1480",
    "description": "Insertion of pleuro-peritoneal shunt",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Bronchi/Lungs/Pleura"
  },
  {
    "code": "T1500",
    "description": "Repair of rupture of diaphragm",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Chest Wall"
  },
  {
    "code": "T1501",
    "description": "Robotic assisted repair of rupture of diaphragm",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Chest Wall"
  },
  {
    "code": "T1620",
    "description": "Plication of paralysed diaphragm",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Chest Wall"
  },
  {
    "code": "T1640",
    "description": "Repair of congenital diaphragmatic hernia",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Chest Wall"
  },
  {
    "code": "T1641",
    "description": "Robotic assisted repair of congenital diaphragmatic hernia",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Abdominal Wall"
  },
  {
    "code": "T1900",
    "description": "Simple excision of inguinal hernial sac (herniotomy) - unilateral",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Abdominal Wall"
  },
  {
    "code": "T1910",
    "description": "Simple excision of inguinal hernial sac (herniotomy) - bilateral",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Abdominal Wall"
  },
  {
    "code": "T2000",
    "description": "Primary repair of inguinal hernia",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Abdominal Wall"
  },
  {
    "code": "T2003",
    "description": "Repair of inguinal hernia requiring removal of previously inserted mesh",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Abdominal Wall"
  },
  {
    "code": "T2005",
    "description": "Robotic assisted repair of inguinal hernia requiring mesh - unilateral",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Abdominal Wall"
  },
  {
    "code": "T2006",
    "description": "Robotic assisted repair of inguinal hernia requiring mesh - bilateral",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Abdominal Wall"
  },
  {
    "code": "T2008",
    "description": "Laparoscopic repair of inguinal hernia not requiring mesh – unilateral",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Abdominal Wall"
  },
  {
    "code": "T2009",
    "description": "Robotic assisted repair of inguinal hernia not requiring mesh - unilateral",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Abdominal Wall"
  },
  {
    "code": "T2010",
    "description": "Primary repair of inguinal hernia - bilateral",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Abdominal Wall"
  },
  {
    "code": "T2011",
    "description": "Robotic assisted repair of recurrent inguinal hernia requiring mesh - unilateral",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Abdominal Wall"
  },
  {
    "code": "T2013",
    "description": "Robotic assisted repair of recurrent inguinal hernia not requiring mesh - unilateral",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Abdominal Wall"
  },
  {
    "code": "T2014",
    "description": "Laparoscopic repair of recurrent inguinal hernia not requiring mesh – unilateral",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Abdominal Wall"
  },
  {
    "code": "T2017",
    "description": "Laparoscopic repair of inguinal hernia not requiring mesh – bilateral",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Abdominal Wall"
  },
  {
    "code": "T2018",
    "description": "Robotic assisted repair of inguinal hernia not requiring mesh - bilateral",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Abdominal Wall"
  },
  {
    "code": "T2019",
    "description": "Robotic assisted repair of recurrent inguinal hernia not requiring mesh - bilateral",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Abdominal Wall"
  },
  {
    "code": "T2020",
    "description": "Laparoscopic repair of recurrent inguinal hernia not requiring mesh – bilateral",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Abdominal Wall"
  },
  {
    "code": "T2021",
    "description": "Laparoscopic repair of inguinal hernia requiring mesh - unilateral",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Abdominal Wall"
  },
  {
    "code": "T2022",
    "description": "Laparoscopic repair of recurrent inguinal hernia requiring mesh - unilateral",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Abdominal Wall"
  },
  {
    "code": "T2023",
    "description": "Laparoscopic repair of inguinal hernia requiring mesh - bilateral",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Abdominal Wall"
  },
  {
    "code": "T2024",
    "description": "Laparoscopic repair of recurrent inguinal hernia requiring mesh - bilateral",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Abdominal Wall"
  },
  {
    "code": "T2080",
    "description": "Primary repair of strangulated inguinal hernia",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Abdominal Wall"
  },
  {
    "code": "T2100",
    "description": "Repair of recurrent inguinal hernia",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Abdominal Wall"
  },
  {
    "code": "T2110",
    "description": "Repair of recurrent inguinal hernia - bilateral",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Abdominal Wall"
  },
  {
    "code": "T2113",
    "description": "Robotic assisted repair of recurrent inguinal hernia requiring mesh - bilateral",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Abdominal Wall"
  },
  {
    "code": "T2200",
    "description": "Primary repair of femoral hernia",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Abdominal Wall"
  },
  {
    "code": "T2203",
    "description": "Repair of femoral hernia requiring removal of previously inserted mesh",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Abdominal Wall"
  },
  {
    "code": "T2208",
    "description": "Laparoscopic repair of femoral hernia requiring mesh - unilateral",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Abdominal Wall"
  },
  {
    "code": "T2209",
    "description": "Robotic assisted repair of femoral hernia requiring mesh - unilateral",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Abdominal Wall"
  },
  {
    "code": "T2210",
    "description": "Robotic assisted repair of femoral hernia not requiring mesh - unilateral",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Abdominal Wall"
  },
  {
    "code": "T2211",
    "description": "Robotic assisted repair of recurrent femoral hernia requiring mesh - unilateral",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Abdominal Wall"
  },
  {
    "code": "T2212",
    "description": "Robotic assisted repair of recurrent femoral hernia not requiring mesh - unilateral",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Abdominal Wall"
  },
  {
    "code": "T2213",
    "description": "Laparoscopic repair of femoral hernia not requiring mesh - unilateral",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Abdominal Wall"
  },
  {
    "code": "T2214",
    "description": "Laparoscopic repair of recurrent femoral hernia requiring mesh - unilateral",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Abdominal Wall"
  },
  {
    "code": "T2215",
    "description": "Laparoscopic repair of recurrent femoral hernia not requiring mesh - unilateral",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Abdominal Wall"
  },
  {
    "code": "T2220",
    "description": "Laparoscopic repair of femoral hernia requiring mesh - bilateral",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Abdominal Wall"
  },
  {
    "code": "T2221",
    "description": "Robotic assisted repair of femoral hernia requiring mesh - bilateral",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Abdominal Wall"
  },
  {
    "code": "T2222",
    "description": "Robotic assisted repair of femoral hernia not requiring mesh - bilateral",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Abdominal Wall"
  },
  {
    "code": "T2223",
    "description": "Robotic assisted repair of recurrent femoral hernia requiring mesh - bilateral",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Abdominal Wall"
  },
  {
    "code": "T2224",
    "description": "Robotic assisted repair of recurrent femoral hernia not requiring mesh - bilateral",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Abdominal Wall"
  },
  {
    "code": "T2225",
    "description": "Laparoscopic repair of femoral hernia not requiring mesh - bilateral",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Abdominal Wall"
  },
  {
    "code": "T2226",
    "description": "Laparoscopic repair of recurrent femoral hernia requiring mesh - bilateral",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Abdominal Wall"
  },
  {
    "code": "T2227",
    "description": "Laparoscopic repair of recurrent femoral hernia not requiring mesh - bilateral",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Abdominal Wall"
  },
  {
    "code": "T2280",
    "description": "Primary repair of strangulated femoral hernia",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Abdominal Wall"
  },
  {
    "code": "T2300",
    "description": "Repair of recurrent femoral hernia",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Abdominal Wall"
  },
  {
    "code": "T2400",
    "description": "Repair of umbilical/paraumbilical hernia (irrespective of age)",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Abdominal Wall"
  },
  {
    "code": "T2403",
    "description": "Repair of umbilica/paraumbilical hernia requiring removal of previously inserted mesh",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Abdominal Wall"
  },
  {
    "code": "T2408",
    "description": "Laparoscopic repair of umbilical/paraumbilical hernia requiring mesh",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Abdominal Wall"
  },
  {
    "code": "T2409",
    "description": "Robotic assisted repair of umbilical/paraumbilical hernia requiring mesh",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Abdominal Wall"
  },
  {
    "code": "T2410",
    "description": "Robotic assisted repair of umbilical/paraumbilical hernia not requiring mesh",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Abdominal Wall"
  },
  {
    "code": "T2411",
    "description": "Robotic assisted repair of recurrent umbilical/paraumbilical hernia requiring mesh",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Abdominal Wall"
  },
  {
    "code": "T2412",
    "description": "Robotic assisted repair of recurrent umbilical/paraumbilical hernia not requiring mesh",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Abdominal Wall"
  },
  {
    "code": "T2413",
    "description": "Laparoscopic repair of umbilical/paraumbilical hernia not requiring mesh",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Abdominal Wall"
  },
  {
    "code": "T2414",
    "description": "Laparoscopic repair of recurrent umbilical/paraumbilical hernia requiring mesh",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Abdominal Wall"
  },
  {
    "code": "T2415",
    "description": "Laparoscopic repair of recurrent umbilical/paraumbilical hernia not requiring mesh",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Abdominal Wall"
  },
  {
    "code": "T2500",
    "description": "Open repair of incisional hernia not requiring mesh",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Abdominal Wall"
  },
  {
    "code": "T2501",
    "description": "Open repair of incisional hernia requiring mesh",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Abdominal Wall"
  },
  {
    "code": "T2503",
    "description": "Laparoscopic repair of incisional hernia not requiring mesh",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Abdominal Wall"
  },
  {
    "code": "T2510",
    "description": "Laparoscopic repair of parastomal hernia requiring mesh",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Abdominal Wall"
  },
  {
    "code": "T2511",
    "description": "Robotic assisted repair of parastomal hernia requiring mesh",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Abdominal Wall"
  },
  {
    "code": "T2512",
    "description": "Robotic assisted repair of parastomal hernia not requiring mesh",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Abdominal Wall"
  },
  {
    "code": "T2513",
    "description": "Laparoscopic repair of parastomal hernia not requiring mesh",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Abdominal Wall"
  },
  {
    "code": "T2600",
    "description": "Repair of recurrent incisional hernia not requiring mesh",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Abdominal Wall"
  },
  {
    "code": "T2620",
    "description": "Repair of recurrent incisional hernia requiring mesh",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Abdominal Wall"
  },
  {
    "code": "T2640",
    "description": "Repair of recurrent incisional hernia requiring removal of previously inserted mesh",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Abdominal Wall"
  },
  {
    "code": "T2720",
    "description": "Laparoscopic repair of incisional hernia requiring mesh",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Abdominal Wall"
  },
  {
    "code": "T2723",
    "description": "Robotic assisted repair of incisional hernia requiring mesh",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Abdominal Wall"
  },
  {
    "code": "T2724",
    "description": "Robotic assisted repair of incisional hernia not requiring mesh",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Abdominal Wall"
  },
  {
    "code": "T2725",
    "description": "Robotic assisted repair of recurrent incisional hernia requiring mesh",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Abdominal Wall"
  },
  {
    "code": "T2726",
    "description": "Robotic assisted repair of recurrent incisional hernia not requiring mesh",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Abdominal Wall"
  },
  {
    "code": "T2730",
    "description": "Repair of dorsal hernia (including lumbar hernia)",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Abdominal Wall"
  },
  {
    "code": "T2740",
    "description": "Repair of perineal hernia (including scrotal that are not inguinal)",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Abdominal Wall"
  },
  {
    "code": "T2750",
    "description": "Repair of sciatic hernia",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Abdominal Wall"
  },
  {
    "code": "T2761",
    "description": "Laparoscopic repair of Spigelian hernia with mesh",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Abdominal Wall"
  },
  {
    "code": "T2762",
    "description": "Open repair of Spigelian hernia with mesh",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Abdominal Wall"
  },
  {
    "code": "T2763",
    "description": "Laparoscopic repair of Spigelian hernia without mesh",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Abdominal Wall"
  },
  {
    "code": "T2764",
    "description": "Open repair of Spigelian hernia without mesh",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Abdominal Wall"
  },
  {
    "code": "T2780",
    "description": "Open Component Separation Technique (CST) repair for complex abdominal hernia with mesh",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Abdominal Wall"
  },
  {
    "code": "T2781",
    "description": "Repair of epigastric hernia",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Abdominal Wall"
  },
  {
    "code": "T2782",
    "description": "Minimally invasive component separation technique (CST) requiring mesh",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Abdominal Wall"
  },
  {
    "code": "T2783",
    "description": "Open Component Separation Technique (CST) repair for complex abdominal hernia without mesh",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Abdominal Wall"
  },
  {
    "code": "T2784",
    "description": "Minimally invasive component separation technique (CST) not requiring mesh",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Abdominal Wall"
  },
  {
    "code": "T2787",
    "description": "Robotic assisted component separation technique not requiring mesh",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Abdominal Wall"
  },
  {
    "code": "T2788",
    "description": "Robotic assisted component separation technique requiring mesh",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Abdominal Wall"
  },
  {
    "code": "T2830",
    "description": "Resuture of previous incision in abdominal wall (burst abdomen)",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Abdominal Wall"
  },
  {
    "code": "T3010",
    "description": "Laparotomy for post operative haemorrhage",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Peritoneum"
  },
  {
    "code": "T3011",
    "description": "Exploratory Laparotomy (as sole procedure)",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Peritoneum"
  },
  {
    "code": "T3080",
    "description": "Laparotomy and repair of multiple visceral trauma",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Peritoneum"
  },
  {
    "code": "T3410",
    "description": "Open drainage of subphrenic abscess",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Peritoneum"
  },
  {
    "code": "T3600",
    "description": "Wedge excision or removal of omentum (as sole procedure)",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Peritoneum"
  },
  {
    "code": "T3610",
    "description": "Omental biopsy +/- an ascitic drain under image guidance",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Peritoneum"
  },
  {
    "code": "T3910",
    "description": "Excision of retroperitoneal tumour, +/-ureterolysis",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Peritoneum"
  },
  {
    "code": "T3920",
    "description": "Multivisceral resection of retroperitoneal sarcoma",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Peritoneum"
  },
  {
    "code": "T3930",
    "description": "Surgical drainage of retroperitoneal abscess",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Peritoneum"
  },
  {
    "code": "T3980",
    "description": "Excision of presacral tumour",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Peritoneum"
  },
  {
    "code": "T3990",
    "description": "Excision of retroperitoneal neuro-endocrine lesion",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Peritoneum"
  },
  {
    "code": "T4130",
    "description": "Freeing of adhesions of peritoneum",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Peritoneum"
  },
  {
    "code": "T4300",
    "description": "Laparoscopic adhesiolysis (including biopsy)",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Peritoneum"
  },
  {
    "code": "T4302",
    "description": "Open  adhesiolysis (including biopsy)",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Peritoneum"
  },
  {
    "code": "T4303",
    "description": "Robotic assisted adhesiolysis (including biopsy)",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Rectum/Anus"
  },
  {
    "code": "T4610",
    "description": "Paracentesis abdominis for ascites",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Peritoneum"
  },
  {
    "code": "T4680",
    "description": "Suprapubic drainage of  pelvic abscess",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Peritoneum"
  },
  {
    "code": "T5202",
    "description": "Dupuytrens fasciectomy palm only",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Hand"
  },
  {
    "code": "T5203",
    "description": "Dupuytrens fasciectomy single digit with proximal interphalangeal joint",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Hand"
  },
  {
    "code": "T5210",
    "description": "Dupuytren's fasciectomy multiple digits with proximal interphalangeal joints",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Hand"
  },
  {
    "code": "T5222",
    "description": "Dupuytrens dermofasciectomy and graft, or for recurrent disease - single digit",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Hand"
  },
  {
    "code": "T5223",
    "description": "Dupuytrens dermofasciectomy and graft, or for recurrent disease - multiple digits",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Hand"
  },
  {
    "code": "T5230",
    "description": "Excision plantar fibroma",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Foot"
  },
  {
    "code": "T5250",
    "description": "Endoscopic plantar fascia release",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Connective Tissue/Tendon Muscle"
  },
  {
    "code": "T5410",
    "description": "Dupuytren's subcutaneous fasciotomy",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Hand"
  },
  {
    "code": "T5540",
    "description": "Fasciotomy of limb",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Fractures"
  },
  {
    "code": "T5780",
    "description": "Extracorporeal shockwave therapy for plantar fasciitis",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Foot"
  },
  {
    "code": "T5781",
    "description": "Percutaneous ultrasound-guided radiofrequency ablation for recalcitrant plantar fasciitis",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Connective Tissue/Tendon Muscle"
  },
  {
    "code": "T5782",
    "description": "Open radiofrequency ablation for recalcitrant plantar fasciitis",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Connective Tissue/Tendon Muscle"
  },
  {
    "code": "T5900",
    "description": "Excision of ganglion",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Connective Tissue/Tendon Muscle"
  },
  {
    "code": "T6000",
    "description": "Repeat excision of ganglion",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Connective Tissue/Tendon Muscle"
  },
  {
    "code": "T6213",
    "description": "Soft tissue operations in the region of the greater trochanter (trochanteric bursitis, snapping hip)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Hip, Leg and Pelvis"
  },
  {
    "code": "T6220",
    "description": "Excision of bursa",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Connective Tissue/Tendon Muscle"
  },
  {
    "code": "T6290",
    "description": "Extracorporeal shockwave therapy for refractory greater trochanteric pain syndrome",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Hip, Leg and Pelvis"
  },
  {
    "code": "T6402",
    "description": "Tendon transfer of hand - single",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Hand"
  },
  {
    "code": "T6410",
    "description": "Tendon transfer of hand - multiple (e.g. for radial nerve injury)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Hand"
  },
  {
    "code": "T6450",
    "description": "Tenodesis of biceps tendon (as sole procedure)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Shoulder"
  },
  {
    "code": "T6460",
    "description": "Tendon transfer of toe - unilateral",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Foot"
  },
  {
    "code": "T6461",
    "description": "Tendon transfer of toe - bilateral",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Foot"
  },
  {
    "code": "T6462",
    "description": "Excision or partial excision of interphalangeal joint of lesser toe with tendon transfer",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Foot"
  },
  {
    "code": "T6520",
    "description": "Tendon sheath injection of therapeutic substance, including Viscosupplement +/- image guidance",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Other Procedures"
  },
  {
    "code": "T6521",
    "description": "Tendon sheath injection of therapeutic substance, without viscosupplement +/- image guidance",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Other Procedures"
  },
  {
    "code": "T6570",
    "description": "Extracorporeal shockwave therapy for carpal tunnel syndrome",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Nerves"
  },
  {
    "code": "T6580",
    "description": "Tendon graft, or tendon transfer (as sole procedure, not otherwise specified)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Connective Tissue/Tendon Muscle"
  },
  {
    "code": "T6710",
    "description": "Primary repair of extensor of hand",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Hand"
  },
  {
    "code": "T6720",
    "description": "Percutaneous lengthening of Achilles tendon",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Foot"
  },
  {
    "code": "T6722",
    "description": "Primary open lengthening of Achilles tendon",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Foot"
  },
  {
    "code": "T6723",
    "description": "Revision of lengthening of Achilles tendon",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Foot"
  },
  {
    "code": "T6750",
    "description": "Primary repair of flexor of hand (excluding Zone II)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Hand"
  },
  {
    "code": "T6752",
    "description": "Primary repair of flexor of hand in Zone II",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Hand"
  },
  {
    "code": "T6762",
    "description": "Repair of tendon of foot - flexor",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Foot"
  },
  {
    "code": "T6763",
    "description": "Repair of tendon of foot - extensor",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Foot"
  },
  {
    "code": "T6770",
    "description": "Peroneal sling/groove reconstruction and replacement of dislocated peroneal tendons",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Foot"
  },
  {
    "code": "T6780",
    "description": "Primary repair of Achilles tendon",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Foot"
  },
  {
    "code": "T6782",
    "description": "Repair of distal biceps tendon",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Elbow"
  },
  {
    "code": "T6800",
    "description": "Delayed or secondary repair of tendon (including graft, transfer and/or prosthesis) (not otherwise specified)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Connective Tissue/Tendon Muscle"
  },
  {
    "code": "T6810",
    "description": "Delayed or secondary repair of Achilles tendon without tendon or fascial graft",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Foot"
  },
  {
    "code": "T6820",
    "description": "Secondary repair or reconstruction of extensor of hand/forearm",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Hand"
  },
  {
    "code": "T6822",
    "description": "Delayed or secondary repair of Achilles tendon with tendon or fascial graft",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Foot"
  },
  {
    "code": "T6830",
    "description": "Secondary repair or first stage reconstruction of flexor of hand",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Hand"
  },
  {
    "code": "T6832",
    "description": "Second stage reconstruction of flexor of hand",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Hand"
  },
  {
    "code": "T6910",
    "description": "Tenolysis of extensor (not otherwise specified)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Connective Tissue/Tendon Muscle"
  },
  {
    "code": "T6914",
    "description": "Tenolysis of extensor tendon of hand",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Hand"
  },
  {
    "code": "T6980",
    "description": "Tenolysis, of flexor tendon (not otherwise specified)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Connective Tissue/Tendon Muscle"
  },
  {
    "code": "T6982",
    "description": "Tenolysis of flexor tendon of hand",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Hand"
  },
  {
    "code": "T7010",
    "description": "Percutaneous tenotomy",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Connective Tissue/Tendon Muscle"
  },
  {
    "code": "T7050",
    "description": "Lengthening of tendon(s), or open tenotomy",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Connective Tissue/Tendon Muscle"
  },
  {
    "code": "T7110",
    "description": "Tenosynovectomy",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Connective Tissue/Tendon Muscle"
  },
  {
    "code": "T7231",
    "description": "Open release of constriction of sheath of tendon (e.g. trigger finger)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Connective Tissue/Tendon Muscle"
  },
  {
    "code": "T7232",
    "description": "Percutaneous release of constriction of sheath of tendon (e.g. trigger finger) +/- image guidance",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Connective Tissue/Tendon Muscle"
  },
  {
    "code": "T7250",
    "description": "Extracorporeal shockwave therapy for Achilles tendonitis",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Foot"
  },
  {
    "code": "T7290",
    "description": "Trigger point injection/Enthesis -  1 injection",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Other Procedures"
  },
  {
    "code": "T7292",
    "description": "Trigger point injection/Enthesis - more than 1 injection",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Other Procedures"
  },
  {
    "code": "T7440",
    "description": "Injection into cord for Dupuytren’s Contracture (including post injection finger extension)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Hand"
  },
  {
    "code": "T7460",
    "description": "Autologous blood injection using gold particles for tissue regeneration",
    "chapter": "Interventional Radiology",
    "section": "Other"
  },
  {
    "code": "T7480",
    "description": "Extracorporeal shockwave therapy of calcific tendonitis of the shoulder",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Shoulder"
  },
  {
    "code": "T7481",
    "description": "Autologous blood injection for tendinopathy with/without dry needing and ultrasound guidance",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Connective Tissue/Tendon Muscle"
  },
  {
    "code": "T7482",
    "description": "Platelet Rich Plasma injection for tendinopathy with/without dry needling and ultrasound guidance",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Connective Tissue/Tendon Muscle"
  },
  {
    "code": "T7483",
    "description": "Ultrasound guided barbotage of calcific deposits of joint (as sole procedure)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Connective Tissue/Tendon Muscle"
  },
  {
    "code": "T7490",
    "description": "Extracorporeal shockwave therapy to proximal hamstring",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Connective Tissue/Tendon Muscle"
  },
  {
    "code": "T7491",
    "description": "Extracorporeal shockwave therapy not elsewhere specified",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Knee"
  },
  {
    "code": "T7602",
    "description": "Microvascular free tissue transfer (when added to other codes) (including closure of secondary defect)",
    "chapter": "Skin and Subcutaneous Tissue",
    "section": "Flaps and Free Skin Grafts"
  },
  {
    "code": "T7603",
    "description": "Microvascular free tissue transfer (as sole procedure including closure of secondary defect)",
    "chapter": "Skin and Subcutaneous Tissue",
    "section": "Flaps and Free Skin Grafts"
  },
  {
    "code": "T7604",
    "description": "Vein/artery graft as part of microvascular free tissue transfer",
    "chapter": "Skin and Subcutaneous Tissue",
    "section": "Flaps and Free Skin Grafts"
  },
  {
    "code": "T7620",
    "description": "Free functioning muscle transfer (as sole procedure) (including closure of secondary defect)",
    "chapter": "Skin and Subcutaneous Tissue",
    "section": "Flaps and Free Skin Grafts"
  },
  {
    "code": "T7910",
    "description": "Open sub acromial decompression and rotator cuff repair +/- excision of distal clavicle",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Shoulder"
  },
  {
    "code": "T7915",
    "description": "Arthroscopic rotator cuff repair greater than 2cm",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Shoulder"
  },
  {
    "code": "T7916",
    "description": "Arthroscopic rotator cuff repair greater than 2cm with tenodesis of biceps tendon",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Shoulder"
  },
  {
    "code": "T7917",
    "description": "Core decompression of shoulder",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Shoulder"
  },
  {
    "code": "T7918",
    "description": "Arthroscopic rotator cuff repair using a biodegradable collagen based scaffold",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Shoulder"
  },
  {
    "code": "T7930",
    "description": "Repair of abductor mechanism of hip",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Hip, Leg and Pelvis"
  },
  {
    "code": "T7941",
    "description": "Arthroscopic rotator cuff repair using acellular dermal matrix (ADM) - first stage",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Shoulder"
  },
  {
    "code": "T7942",
    "description": "Arthroscopic rotator cuff repair using acellular dermal matrix (ADM) - second stage",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Shoulder"
  },
  {
    "code": "T7972",
    "description": "Exploration and repair of groin disruption (including repair of muscle, fascia and tendons) (Gilmore's groin repair)",
    "chapter": "Abdomen (ExcL. Urinary & Reproductive Organs)",
    "section": "Abdominal Wall"
  },
  {
    "code": "T7981",
    "description": "Extensive (greater than 2cm tear) repair of large muscle (including arthroscopic) (excluding rotator cuff)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Shoulder"
  },
  {
    "code": "T7982",
    "description": "Arthroscopic subacromial decompression and rotator cuff repair (including arthroscopic procedures in glenohumeral joint)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Shoulder"
  },
  {
    "code": "T7990",
    "description": "Revision of open or arthroscopic rotator cuff repair +/- decompression",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Shoulder"
  },
  {
    "code": "T8002",
    "description": "Minor release of muscle for pain or contracture (involving small joint)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Connective Tissue/Tendon Muscle"
  },
  {
    "code": "T8003",
    "description": "Major release of muscle for pain or contracture (e.g. Quadriceps) (involving large joint)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Connective Tissue/Tendon Muscle"
  },
  {
    "code": "T8050",
    "description": "Surgical release of humeral epicondylitis (lateral or medial) (e.g. “Tennis Elbow”)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Elbow"
  },
  {
    "code": "T8052",
    "description": "Extracorporeal shockwave therapy of lateral epicondylitis",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Shoulder"
  },
  {
    "code": "T8100",
    "description": "Open biopsy of muscle or soft tissue lesion",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Connective Tissue/Tendon Muscle"
  },
  {
    "code": "T8510",
    "description": "Radical dissection of cervical lymph nodes",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Neck"
  },
  {
    "code": "T8511",
    "description": "Robotic assisted radical dissection of cervical lymph nodes",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Neck"
  },
  {
    "code": "T8512",
    "description": "Robotic assisted selective dissection of cervical lymph nodes, Levels 1 to 4",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Neck"
  },
  {
    "code": "T8513",
    "description": "Robotic assisted selective dissection of cervical lymph nodes, Levels 1 to 5 (+/- 6)",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Neck"
  },
  {
    "code": "T8520",
    "description": "Block dissection of axillary lymph nodes (axillary clearance) levels 1 to 3",
    "chapter": "Vascular System",
    "section": "Lymphatic System"
  },
  {
    "code": "T8540",
    "description": "Open block dissection of para-aortic lymph nodes",
    "chapter": "Vascular System",
    "section": "Lymphatic System"
  },
  {
    "code": "T8541",
    "description": "Robotic assisted block dissection of para-aortic lymph nodes",
    "chapter": "Vascular System",
    "section": "Lymphatic System"
  },
  {
    "code": "T8542",
    "description": "Laparoscopic block dissection of para-aortic lymph nodes",
    "chapter": "Vascular System",
    "section": "Lymphatic System"
  },
  {
    "code": "T8543",
    "description": "Robotic assisted selective dissection of para-aortic lymph nodes",
    "chapter": "Vascular System",
    "section": "Lymphatic System"
  },
  {
    "code": "T8550",
    "description": "Block dissection of inguinal lymph nodes",
    "chapter": "Vascular System",
    "section": "Lymphatic System"
  },
  {
    "code": "T8551",
    "description": "Robotic assisted radical dissection of inguinal lymph nodes",
    "chapter": "Vascular System",
    "section": "Lymphatic System"
  },
  {
    "code": "T8552",
    "description": "Robotic assisted selective dissection of inguinal lymph nodes",
    "chapter": "Vascular System",
    "section": "Lymphatic System"
  },
  {
    "code": "T8560",
    "description": "Robotic assisted pelvic lymphadenectomy (as sole procedure)",
    "chapter": "Vascular System",
    "section": "Lymphatic System"
  },
  {
    "code": "T8562",
    "description": "Laparoscopic pelvic lymphadenectomy (as sole procedure)",
    "chapter": "Vascular System",
    "section": "Lymphatic System"
  },
  {
    "code": "T8563",
    "description": "Robotic assisted block dissection of pelvic lymph nodes",
    "chapter": "Vascular System",
    "section": "Lymphatic System"
  },
  {
    "code": "T8580",
    "description": "Block dissection of pelvic lymph nodes (as sole procedure)",
    "chapter": "Vascular System",
    "section": "Lymphatic System"
  },
  {
    "code": "T8592",
    "description": "Laparoscopic retroperitoneal lymph node dissection",
    "chapter": "Vascular System",
    "section": "Lymphatic System"
  },
  {
    "code": "T8593",
    "description": "Robotic assisted retroperitoneal lymph node dissection",
    "chapter": "Vascular System",
    "section": "Lymphatic System"
  },
  {
    "code": "T8594",
    "description": "Laparoscopic para-aortic lymph node dissection",
    "chapter": "Vascular System",
    "section": "Lymphatic System"
  },
  {
    "code": "T8610",
    "description": "Biopsy/sampling of cervical lymph nodes",
    "chapter": "Vascular System",
    "section": "Lymphatic System"
  },
  {
    "code": "T8620",
    "description": "Sampling of axillary lymph nodes",
    "chapter": "Vascular System",
    "section": "Lymphatic System"
  },
  {
    "code": "T8621",
    "description": "Robotic assisted radical dissection of axillary lymph nodes",
    "chapter": "Vascular System",
    "section": "Lymphatic System"
  },
  {
    "code": "T8622",
    "description": "Robotic assisted selective dissection of axillary lymph nodes",
    "chapter": "Vascular System",
    "section": "Lymphatic System"
  },
  {
    "code": "T8640",
    "description": "Sampling of internal mammary lymph nodes",
    "chapter": "Vascular System",
    "section": "Lymphatic System"
  },
  {
    "code": "T8700",
    "description": "Excision biopsy of lymph node for diagnosis (cervical, inguinal, axillary)",
    "chapter": "Vascular System",
    "section": "Lymphatic System"
  },
  {
    "code": "T8722",
    "description": "Selective dissection of cervical lymph nodes, Levels 1 to 4",
    "chapter": "Vascular System",
    "section": "Lymphatic System"
  },
  {
    "code": "T8723",
    "description": "Selective dissection of cervical lymph nodes, Levels 1 to 5 (+/-6)",
    "chapter": "Vascular System",
    "section": "Lymphatic System"
  },
  {
    "code": "T8780",
    "description": "Sentinel node biopsy (except where otherwise listed)",
    "chapter": "Vascular System",
    "section": "Lymphatic System"
  },
  {
    "code": "T8810",
    "description": "Free microvascular lymph-node transfer",
    "chapter": "Vascular System",
    "section": "Lymphatic System"
  },
  {
    "code": "T8820",
    "description": "Liposuction for lymphoedema extremity",
    "chapter": "Vascular System",
    "section": "Lymphatic System"
  },
  {
    "code": "T8910",
    "description": "Vascularised lymph node transfer as sole procedure",
    "chapter": "Vascular System",
    "section": "Lymphatic System"
  },
  {
    "code": "T8911",
    "description": "Vascularised lymph node transfer as sole procedure - bilateral",
    "chapter": "Vascular System",
    "section": "Lymphatic System"
  },
  {
    "code": "T8950",
    "description": "Repair of peri-lymph fistula",
    "chapter": "Ear, Nose and Throat",
    "section": "Middle Ear and Mastoid"
  },
  {
    "code": "T9000",
    "description": "Sentinel node mapping and sampling with blue dye or radioactive probe for breast cancer",
    "chapter": "Breast",
    "section": "Excision/Biopsy Codes"
  },
  {
    "code": "T9020",
    "description": "Sentinel node mapping and sampling with blue dye and radioactive probe for breast cancer",
    "chapter": "Breast",
    "section": "Excision/Biopsy Codes"
  },
  {
    "code": "T9021",
    "description": "Injection of magnetic lymphatic tracer and subsequent sentinel node mapping +/- sampling  for breast cancer",
    "chapter": "Breast",
    "section": "Excision/Biopsy Codes"
  },
  {
    "code": "T9030",
    "description": "Intraoperative sentinel node mapping, using One Step Nucleic Acid Amplification (OSNA), for breast cancer",
    "chapter": "Breast",
    "section": "Excision/Biopsy Codes"
  },
  {
    "code": "T9400",
    "description": "Operations on branchial cyst",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Neck"
  },
  {
    "code": "T9420",
    "description": "Operations on branchial fistula",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Neck"
  },
  {
    "code": "T9610",
    "description": "Excision of cystic hygroma",
    "chapter": "Vascular System",
    "section": "Lymphatic System"
  },
  {
    "code": "U0010",
    "description": "Harvesting for autologous bone marrow transplant",
    "chapter": "Haematology",
    "section": "Haematology"
  },
  {
    "code": "U0020",
    "description": "Harvesting for matched related bone marrow transplant",
    "chapter": "Haematology",
    "section": "Haematology"
  },
  {
    "code": "U0030",
    "description": "Harvesting for matched unrelated bone marrow transplant",
    "chapter": "Haematology",
    "section": "Haematology"
  },
  {
    "code": "U0040",
    "description": "Autologous bone marrow transplant",
    "chapter": "Haematology",
    "section": "Haematology"
  },
  {
    "code": "U0050",
    "description": "Allogeneic bone marrow transplant",
    "chapter": "Haematology",
    "section": "Haematology"
  },
  {
    "code": "U0060",
    "description": "Matched unrelated bone marrow transplant",
    "chapter": "Haematology",
    "section": "Haematology"
  },
  {
    "code": "U0080",
    "description": "Harvesting for autologous peripheral blood stem cell transplant",
    "chapter": "Haematology",
    "section": "Haematology"
  },
  {
    "code": "U0090",
    "description": "Harvesting for matched related peripheral blood stem cell transplant",
    "chapter": "Haematology",
    "section": "Haematology"
  },
  {
    "code": "U0095",
    "description": "Harvesting for matched unrelated peripheral blood stem cell transplant",
    "chapter": "Haematology",
    "section": "Haematology"
  },
  {
    "code": "U0100",
    "description": "Autologous peripheral blood stem cell transplant",
    "chapter": "Haematology",
    "section": "Haematology"
  },
  {
    "code": "U0110",
    "description": "Allogeneic peripheral blood stem cell transplant",
    "chapter": "Haematology",
    "section": "Haematology"
  },
  {
    "code": "U0120",
    "description": "Matched unrelated peripheral blood stem cell transplant",
    "chapter": "Haematology",
    "section": "Haematology"
  },
  {
    "code": "U0140",
    "description": "Second peripheral blood stem cell mini transplant for relapse after bone marrow transplant",
    "chapter": "Haematology",
    "section": "Haematology"
  },
  {
    "code": "U0150",
    "description": "Non-myeloablative stem cell transplant (mini transplant)",
    "chapter": "Haematology",
    "section": "Haematology"
  },
  {
    "code": "U0170",
    "description": "Umbilical cord blood stem cell transplantation (UCBT)",
    "chapter": "Haematology",
    "section": "Haematology"
  },
  {
    "code": "U1290",
    "description": "Video urodynamic studies",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Ureter"
  },
  {
    "code": "V0110",
    "description": "Reconstructive cranioplasty",
    "chapter": "Brain, Cranium and Other Intracranial Organs",
    "section": "Cranium"
  },
  {
    "code": "V0130",
    "description": "Surgery for craniostenosis (single suture)",
    "chapter": "Brain, Cranium and Other Intracranial Organs",
    "section": "Cranium"
  },
  {
    "code": "V0180",
    "description": "Surgery for craniostenosis (more than one suture)",
    "chapter": "Brain, Cranium and Other Intracranial Organs",
    "section": "Cranium"
  },
  {
    "code": "V0310",
    "description": "Exploratory open craniotomy",
    "chapter": "Brain, Cranium and Other Intracranial Organs",
    "section": "Cranium"
  },
  {
    "code": "V0330",
    "description": "Exploratory burrhole of cranium",
    "chapter": "Brain, Cranium and Other Intracranial Organs",
    "section": "Cranium"
  },
  {
    "code": "V0382",
    "description": "Total petrosectomy (for tumour)",
    "chapter": "Brain, Cranium and Other Intracranial Organs",
    "section": "Cranium"
  },
  {
    "code": "V0383",
    "description": "Lateral petrosectomy (for tumour)",
    "chapter": "Brain, Cranium and Other Intracranial Organs",
    "section": "Cranium"
  },
  {
    "code": "V0390",
    "description": "Foramen magnum decompression",
    "chapter": "Brain, Cranium and Other Intracranial Organs",
    "section": "Cranium"
  },
  {
    "code": "V0510",
    "description": "Excision of lesion of cranium",
    "chapter": "Brain, Cranium and Other Intracranial Organs",
    "section": "Cranium"
  },
  {
    "code": "V0530",
    "description": "Elevation of depressed fracture of cranium",
    "chapter": "Brain, Cranium and Other Intracranial Organs",
    "section": "Cranium"
  },
  {
    "code": "V0580",
    "description": "Repair of compound fracture of cranium",
    "chapter": "Brain, Cranium and Other Intracranial Organs",
    "section": "Cranium"
  },
  {
    "code": "V0700",
    "description": "Cranio-facial resection",
    "chapter": "Ear, Nose and Throat",
    "section": "Nasal Sinuses"
  },
  {
    "code": "V0721",
    "description": "Eminectomy of temporomandibular joint - unilateral",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Face and Jaws"
  },
  {
    "code": "V0722",
    "description": "Eminectomy of temporomandibular joint - bilateral",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Face and Jaws"
  },
  {
    "code": "V0820",
    "description": "Open reduction and fixation of fractured jaw",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Face and Jaws"
  },
  {
    "code": "V0830",
    "description": "Closed reduction and fixation of fractured jaw",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Face and Jaws"
  },
  {
    "code": "V0910",
    "description": "Open reduction and fixation of nasal ethmoidal fracture",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Face and Jaws"
  },
  {
    "code": "V0930",
    "description": "Closed reduction of fracture of zygomatic complex of bones",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Face and Jaws"
  },
  {
    "code": "V0980",
    "description": "Open reduction of fracture of zygomatic complex of bones",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Face and Jaws"
  },
  {
    "code": "V1040",
    "description": "Osteotomy of maxilla (and bilateral)",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Face and Jaws"
  },
  {
    "code": "V1072",
    "description": "Partial maxillectomy for benign tumour",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Face and Jaws"
  },
  {
    "code": "V1073",
    "description": "Hemi-maxillectomy for benign tumour",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Face and Jaws"
  },
  {
    "code": "V1082",
    "description": "Partial maxillectomy for malignancy",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Face and Jaws"
  },
  {
    "code": "V1083",
    "description": "Hemi-maxillectomy for malignancy",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Face and Jaws"
  },
  {
    "code": "V1150",
    "description": "Removal of internal fixation and/or intermaxillary fixation from jaw",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Face and Jaws"
  },
  {
    "code": "V1330",
    "description": "Biopsy of lesion of facial bone",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Face and Jaws"
  },
  {
    "code": "V1400",
    "description": "Excision of mandible",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Face and Jaws"
  },
  {
    "code": "V1422",
    "description": "Extensive segmental excision of mandible",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Face and Jaws"
  },
  {
    "code": "V1423",
    "description": "Extensive excision of mandible with disarticulation",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Face and Jaws"
  },
  {
    "code": "V1440",
    "description": "Excision of lesion of jaw",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Face and Jaws"
  },
  {
    "code": "V1622",
    "description": "Backward/forward sliding mandibular osteotomy",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Face and Jaws"
  },
  {
    "code": "V1730",
    "description": "Extra-oral fixation of mandible",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Face and Jaws"
  },
  {
    "code": "V1910",
    "description": "Reconstruction of jaw (non-vascularised reconstruction)",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Face and Jaws"
  },
  {
    "code": "V1930",
    "description": "Alveolar bone graft - unilateral",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Face and Jaws"
  },
  {
    "code": "V1931",
    "description": "Alveolar bone graft - bilateral",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Face and Jaws"
  },
  {
    "code": "V2020",
    "description": "Prosthetic replacement of temporomandibular joint",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Face and Jaws"
  },
  {
    "code": "V2030",
    "description": "Arthroplasty of temporomandibular bone joint - unilateral",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Face and Jaws"
  },
  {
    "code": "V2031",
    "description": "Arthroplasty of temporomandibular joint - bilateral",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Face and Jaws"
  },
  {
    "code": "V2110",
    "description": "Temporomandibular meniscectomy",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Face and Jaws"
  },
  {
    "code": "V2120",
    "description": "Reduction of dislocation of temporomandibular joint",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Face and Jaws"
  },
  {
    "code": "V2151",
    "description": "Arthrocentesis of temporomandibular joint - unilateral",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Face and Jaws"
  },
  {
    "code": "V2152",
    "description": "Arthrocentesis of temporomandibular joint - bilateral",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Face and Jaws"
  },
  {
    "code": "V2161",
    "description": "Therapeutic arthroscopic operation of temporomandibular joint +/- lysis and/or lavage – unilateral",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Face and Jaws"
  },
  {
    "code": "V2162",
    "description": "Therapeutic arthroscopic operation of temporomandibular joint +/- lysis and/or lavage – bilateral",
    "chapter": "Face, Mouth, Salivary & Thyroid",
    "section": "Face and Jaws"
  },
  {
    "code": "V2200",
    "description": "Posterior decompression +/- foraminotomy - cervical region (1 or 2 levels)",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Column (Including Intervertebral Disc)"
  },
  {
    "code": "V2201",
    "description": "Posterior decompression +/- foraminotomy - cervical region (3 or more levels)",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Column (Including Intervertebral Disc)"
  },
  {
    "code": "V2282",
    "description": "Prosthetic intervertebral disc replacement – cervical region (1 or 2 levels) +/- spinal cord monitoring",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Column (Including Intervertebral Disc)"
  },
  {
    "code": "V2283",
    "description": "Prosthetic intervertebral disc replacement - cervical region (3 or more levels) +/- spinal cord monitoring",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Column (Including Intervertebral Disc)"
  },
  {
    "code": "V2300",
    "description": "Revisional posterior decompression +/- foraminotomy (cervical region)",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Column (Including Intervertebral Disc)"
  },
  {
    "code": "V2400",
    "description": "Posterior decompression with fusion (thoracic region) including spinal cord monitoring",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Column (Including Intervertebral Disc)"
  },
  {
    "code": "V2402",
    "description": "Posterior decompression (thoracic region) including spinal cord monitoring",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Column (Including Intervertebral Disc)"
  },
  {
    "code": "V2430",
    "description": "Revisional posterior decompression with fusion (thoracic region) including spinal cord monitoring",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Column (Including Intervertebral Disc)"
  },
  {
    "code": "V2500",
    "description": "Primary posterior fusion +/- decompression +/- discectomy - lumbar region (1 or 2 levels) including spinal cord monitoring",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Column (Including Intervertebral Disc)"
  },
  {
    "code": "V2501",
    "description": "Primary posterior fusion +/- decompression +/- discectomy - lumbar region (3 or more levels) including spinal cord monitoring",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Column (Including Intervertebral Disc)"
  },
  {
    "code": "V2510",
    "description": "Endoscopic discectomy and/or decompression (transforaminal)  -  lumbar region",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Column (Including Intervertebral Disc)"
  },
  {
    "code": "V2540",
    "description": "Posterior excision of disc prolapse (including microdiscectomy +/- decompression) - lumbar region (1 or 2 levels)",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Column (Including Intervertebral Disc)"
  },
  {
    "code": "V2541",
    "description": "Posterior excision of disc prolapse (including microdiscectomy +/- decompression) - lumbar region (3 or more levels)",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Column (Including Intervertebral Disc)"
  },
  {
    "code": "V2542",
    "description": "Posterior excision of disc prolapse with undercutting facetectomy +/- decompression - lumbar region (1 or 2 levels)",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Column (Including Intervertebral Disc)"
  },
  {
    "code": "V2543",
    "description": "Revision of posterior excision of disc prolapse with undercutting facetectomy +/- decompression (lumbar region)",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Column (Including Intervertebral Disc)"
  },
  {
    "code": "V2544",
    "description": "Revision of posterior excision of disc prolapse (lumbar region)",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Column (Including Intervertebral Disc)"
  },
  {
    "code": "V2546",
    "description": "Posterior excision of disc prolapse with undercutting facetectomy +/- decompression - lumbar region (3 or more levels)",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Column (Including Intervertebral Disc)"
  },
  {
    "code": "V2560",
    "description": "Decompression for central spinal stenosis (1 or 2 levels)",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Column (Including Intervertebral Disc)"
  },
  {
    "code": "V2562",
    "description": "Decompression for central spinal stenosis (3 or more levels)",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Column (Including Intervertebral Disc)"
  },
  {
    "code": "V2570",
    "description": "Percutaneous vertebroplasty - 1 level",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Column (Including Intervertebral Disc)"
  },
  {
    "code": "V2571",
    "description": "Percutaneous vertebroplasty - 4 or more levels",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Column (Including Intervertebral Disc)"
  },
  {
    "code": "V2572",
    "description": "Percutaneous Vertebroplasty - 2 - 3 Levels",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Column (Including Intervertebral Disc)"
  },
  {
    "code": "V2652",
    "description": "Revision posterior fusion +/- instrumentation (lumbar region) including spinal cord monitoring",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Column (Including Intervertebral Disc)"
  },
  {
    "code": "V2660",
    "description": "Revision of decompression for central spinal stenosis",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Column (Including Intervertebral Disc)"
  },
  {
    "code": "V2680",
    "description": "Revision anterior discectomy, decompression and anterior fusion +/- instrumentation (lumbar region) including spinal cord monitoring",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Column (Including Intervertebral Disc)"
  },
  {
    "code": "V2900",
    "description": "Anterior discectomy - cervical region (1 or 2 levels)",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Column (Including Intervertebral Disc)"
  },
  {
    "code": "V2901",
    "description": "Anterior discectomy - cervical region (3 or more levels)",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Column (Including Intervertebral Disc)"
  },
  {
    "code": "V2902",
    "description": "Revisional anterior discectomy (cervical region)",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Column (Including Intervertebral Disc)"
  },
  {
    "code": "V2950",
    "description": "Anterior discectomy, decompression and fusion (including bone grafting) - cervical region (1 or 2 levels)",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Column (Including Intervertebral Disc)"
  },
  {
    "code": "V2951",
    "description": "Anterior discectomy, decompression and fusion (including bone grafting) - cervical region (3 or more levels)",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Column (Including Intervertebral Disc)"
  },
  {
    "code": "V2980",
    "description": "Combined anterior and posterior fusion of cervical spine",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Column (Including Intervertebral Disc)"
  },
  {
    "code": "V2990",
    "description": "Open door laminoplasty of the cervical region (Hirobyashi)",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Column (Including Intervertebral Disc)"
  },
  {
    "code": "V3100",
    "description": "Combined anterior discectomy and posterior fusion (thoracic region) including spinal cord monitoring",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Column (Including Intervertebral Disc)"
  },
  {
    "code": "V3102",
    "description": "Revisional combined anterior discectomy and posterior fusion (thoracic region) including spinal cord monitoring",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Column (Including Intervertebral Disc)"
  },
  {
    "code": "V3120",
    "description": "Transthoracic/ anterolateral excision of intervertebral disc +/- fusion including spinal cord monitoring",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Column (Including Intervertebral Disc)"
  },
  {
    "code": "V3122",
    "description": "Revisional transthoracic/ anterolateral excision of intervertebral disc +/- fusion including spinal cord monitoring",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Column (Including Intervertebral Disc)"
  },
  {
    "code": "V3140",
    "description": "VATS percutaneous discectomy +/- fusion (thoracic region) including spinal cord monitoring",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Column (Including Intervertebral Disc)"
  },
  {
    "code": "V3181",
    "description": "Prosthetic intervertebral disc replacement in the thoracic spine including spinal cord monitoring",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Column (Including Intervertebral Disc)"
  },
  {
    "code": "V3300",
    "description": "Percutaneous intradiscal laser ablation (lumbar region)",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Column (Including Intervertebral Disc)"
  },
  {
    "code": "V3340",
    "description": "Primary anterior discectomy, decompression and anterior fusion +/- instrumentation - lumbar region (1 or 2 levels) including spinal cord monitoring",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Column (Including Intervertebral Disc)"
  },
  {
    "code": "V3341",
    "description": "Primary anterior discectomy, decompression and anterior fusion +/- instrumentation - lumbar region (3 or more levels)",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Column (Including Intervertebral Disc)"
  },
  {
    "code": "V3345",
    "description": "Mobilisation of the lumbar/thoracic vessels to provide spinal surgical access (by vascular surgeon) as sole procedure",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Column (Including Intervertebral Disc)"
  },
  {
    "code": "V3350",
    "description": "Combined anterior approach discectomy, decompression and fusion and posterior fusion (lumbar region) including spinal cord monitoring",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Column (Including Intervertebral Disc)"
  },
  {
    "code": "V3362",
    "description": "Primary posterior fusion with instrumentation +/- decompression +/- discectomy (including Graf stabilisation and all fusion approaches) (lumbar region) including spinal cord monitoring",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Column (Including Intervertebral Disc)"
  },
  {
    "code": "V3380",
    "description": "Prosthetic intervertebral disc replacement – lumbar region (1 or 2 levels)",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Column (Including Intervertebral Disc)"
  },
  {
    "code": "V3381",
    "description": "Prosthetic intervertebral disc replacement – lumbar region (3 or more levels)",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Column (Including Intervertebral Disc)"
  },
  {
    "code": "V3472",
    "description": "Revision of minimally invasive intradiscal surgery (lumbar region)",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Column (Including Intervertebral Disc)"
  },
  {
    "code": "V3720",
    "description": "Posterior fusion +/- instrumentation - cervical region (1 or 2 levels) including spinal cord monitoring",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Column (Including Intervertebral Disc)"
  },
  {
    "code": "V3721",
    "description": "Posterior fusion +/- instrumentation - cervical region (3 or more levels) including spinal cord monitoring",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Column (Including Intervertebral Disc)"
  },
  {
    "code": "V3730",
    "description": "Transoral surgery (including posterior fixation)",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Column (Including Intervertebral Disc)"
  },
  {
    "code": "V3801",
    "description": "Two stage 360° anterior/posterior lumbar spinal fusion using patient specific implants – 1st stage including spinal cord monitoring",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Column (Including Intervertebral Disc)"
  },
  {
    "code": "V3802",
    "description": "Two stage 360° anterior/posterior lumbar spinal fusion using patient specific implants – 2nd stage including spinal cord monitoring",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Column (Including Intervertebral Disc)"
  },
  {
    "code": "V4000",
    "description": "Combined anterior and posterior correction and instrumentation of idiopathic juvenile scoliosis, +/-fusion (including spinal monitoring)",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Column (Including Intervertebral Disc)"
  },
  {
    "code": "V4010",
    "description": "Posterior correction of idiopathic juvenile kyphosis with instrumentation, +/- fusion (including spinal cord monitoring)",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Column (Including Intervertebral Disc)"
  },
  {
    "code": "V4020",
    "description": "Spinal stabilisation (without fusion) by implantation of a posterior arthroplasty system",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Column (Including Intervertebral Disc)"
  },
  {
    "code": "V4070",
    "description": "Stabilisation of pars defect + /- instrumentation +/- bone graft +/- spinal monitoring",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Column (Including Intervertebral Disc)"
  },
  {
    "code": "V4080",
    "description": "Anterolateral access with instrumentation +/- decompression +/- discectomy (including graf stabilisation and all fusion approaches) - lumbar region (1 or 2 levels)  including spinal cord monitoring",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Column (Including Intervertebral Disc)"
  },
  {
    "code": "V4081",
    "description": "Anterolateral access with instrumentation +/- decompression +/- discectomy (including graf stabilisation and all fusion approaches) - lumbar region (3 or more levels) including spinal cord monitoring",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Column (Including Intervertebral Disc)"
  },
  {
    "code": "V4100",
    "description": "Posterior correction of idiopathic juvenile scoliosis with instrumentation, +/- fusion (including spinal cord monitoring)",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Column (Including Intervertebral Disc)"
  },
  {
    "code": "V4110",
    "description": "Correction of idiopathic juvenile scoliosis with insertion of spinal magnetic growth rods, +/-fusion (including spinal cord monitoring)",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Column (Including Intervertebral Disc)"
  },
  {
    "code": "V4120",
    "description": "Anterior correction of idiopathic juvenile scoliosis with instrumentation, +/-fusion (including spinal cord monitoring) (Excluding vertebral body tethering VBT)",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Column (Including Intervertebral Disc)"
  },
  {
    "code": "V4121",
    "description": "Anterior correction of idiopathic scoliosis using vertebral body tethering (VBT) (including spinal cord monitoring)",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Column (Including Intervertebral Disc)"
  },
  {
    "code": "V4122",
    "description": "Anterior correction of idiopathic juvenile kyphosis with instrumentation, +/-fusion (including spinal cord monitoring)",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Column (Including Intervertebral Disc)"
  },
  {
    "code": "V4125",
    "description": "Removal of spinal magnetic growth rods and definitive instrumented spinal fusion (including spinal cord monitoring)",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Column (Including Intervertebral Disc)"
  },
  {
    "code": "V4140",
    "description": "Removal of posterior spinal implant",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Column (Including Intervertebral Disc)"
  },
  {
    "code": "V4142",
    "description": "Removal of posterior scoliosis instrumentation (as sole procedure)",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Column (Including Intervertebral Disc)"
  },
  {
    "code": "V4150",
    "description": "Anterior correction of degenerative adult kyphosis with instrumentation, +/- fusion (including spinal cord monitoring)",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Column (Including Intervertebral Disc)"
  },
  {
    "code": "V4160",
    "description": "Posterior correction of degenerative adult kyphosis with instrumentation, +/- fusion (including spinal cord monitoring)",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Column (Including Intervertebral Disc)"
  },
  {
    "code": "V4170",
    "description": "Distraction of traditional spinal growing rods for idiopathic juvenile scoliosis including spinal cord monitoring and imaging",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Column (Including Intervertebral Disc)"
  },
  {
    "code": "V4180",
    "description": "Distraction of spinal magnetic growth rods for idiopathic juvenile scoliosis",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Column (Including Intervertebral Disc)"
  },
  {
    "code": "V4280",
    "description": "Correction of adult degenerative or adult idiopathic scoliosis including decompression +/- fusion (including spinal cord monitoring)",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Column (Including Intervertebral Disc)"
  },
  {
    "code": "V4282",
    "description": "Revision correction of adult degenerative or adult idiopathic scoliosis including decompression +/- fusion (including spinal cord monitoring)",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Column (Including Intervertebral Disc)"
  },
  {
    "code": "V4300",
    "description": "Anterior vertebrectomy with decompression and implant",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Column (Including Intervertebral Disc)"
  },
  {
    "code": "V4302",
    "description": "Combined anterior vertebrectomy with posterior fusion and instrumentation",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Column (Including Intervertebral Disc)"
  },
  {
    "code": "V4310",
    "description": "Vertebral corpectomy,discectomy, decompression and fusion (including bone grafting)",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Column (Including Intervertebral Disc)"
  },
  {
    "code": "V4451",
    "description": "Balloon kyphoplasty - single level",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Column (Including Intervertebral Disc)"
  },
  {
    "code": "V4452",
    "description": "Balloon kyphoplasty - two levels",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Column (Including Intervertebral Disc)"
  },
  {
    "code": "V4453",
    "description": "Balloon kyphoplasty - greater than two levels",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Column (Including Intervertebral Disc)"
  },
  {
    "code": "V4740",
    "description": "Image guided percutaneous spinal biopsy",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Column (Including Intervertebral Disc)"
  },
  {
    "code": "V4742",
    "description": "Spinal endoscopy",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Column (Including Intervertebral Disc)"
  },
  {
    "code": "V4900",
    "description": "Open biopsy of lesion of spine where no other operative procedure on the spine is performed",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Column (Including Intervertebral Disc)"
  },
  {
    "code": "V4980",
    "description": "Excision of intramedullary tumour",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Cord"
  },
  {
    "code": "V5002",
    "description": "Manipulation of spine under GA/IV sedation (as sole procedure)",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Column (Including Intervertebral Disc)"
  },
  {
    "code": "V5003",
    "description": "Manipulation of spine without GA/IV sedation (as sole procedure)",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Column (Including Intervertebral Disc)"
  },
  {
    "code": "V5210",
    "description": "Chemonucleolysis (multiple levels)",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Column (Including Intervertebral Disc)"
  },
  {
    "code": "V5230",
    "description": "Discogram/Diagnostic intervertebral disc injection under X-ray control",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Column (Including Intervertebral Disc)"
  },
  {
    "code": "V5240",
    "description": "Injection of radiopaque gelified ethanol for herniated discs",
    "chapter": "Interventional Radiology",
    "section": "Spine"
  },
  {
    "code": "V5250",
    "description": "Radiofrequency lesioning of intervertebral disc under X-ray control",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Other Procedures"
  },
  {
    "code": "V5260",
    "description": "Myelogram",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Other Procedures"
  },
  {
    "code": "V5270",
    "description": "Digital Subtraction myelogram/myelography (DSM)",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Other Procedures"
  },
  {
    "code": "V5281",
    "description": "Dynamic CT myelogram",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Other Procedures"
  },
  {
    "code": "V5282",
    "description": "Intradiscal Electrothermal Therapy (IDET)",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Other Procedures"
  },
  {
    "code": "V5484",
    "description": "Interspinous dynamic stabilisation procedure",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Other Procedures"
  },
  {
    "code": "V5486",
    "description": "Pedicle based dynamic soft stabilisation procedure (eg Graf Ligament)",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Other Procedures"
  },
  {
    "code": "V5487",
    "description": "Pedicle based dynamic semi-rigid stabilisation procedure (eg AccuFlex)",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Other Procedures"
  },
  {
    "code": "V5488",
    "description": "Total facet replacement procedure",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Column (Including Intervertebral Disc)"
  },
  {
    "code": "V6070",
    "description": "Thoracic outlet decompression surgery (as sole procedure)",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Chest Wall"
  },
  {
    "code": "V6080",
    "description": "Percutaneous disc decompression using coblation",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Other Procedures"
  },
  {
    "code": "W0110",
    "description": "Toe to hand transfer (as sole procedure) (including closure of secondary defect)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Hand"
  },
  {
    "code": "W0120",
    "description": "Pollicisation of finger for thumb reconstruction",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Hand"
  },
  {
    "code": "W0282",
    "description": "Total excision of trapezium",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Hand"
  },
  {
    "code": "W0283",
    "description": "Total excision of trapezium with spacer",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Hand"
  },
  {
    "code": "W0284",
    "description": "Total excision of trapezium and ligament reconstruction",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Hand"
  },
  {
    "code": "W0285",
    "description": "Trapezio-metacarpal joint surface replacement",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Hand"
  },
  {
    "code": "W0300",
    "description": "Multiple procedures on forefoot, distal to and including the tarsometatarsal joint, which involves at least two distinct procedures not intrinsic to each other - unilateral",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Foot"
  },
  {
    "code": "W0310",
    "description": "Multiple procedures on forefoot, distal to and including, the tarsometatarsal joints, which involves at least two distinct procedures, not intrinsic to each other - bilateral",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Foot"
  },
  {
    "code": "W0321",
    "description": "Osteotomies (eg Scarf and Akin) for hallux valgus correction +/- internal fixation +/- soft tissue correction - unilateral",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Foot"
  },
  {
    "code": "W0322",
    "description": "Osteotomies (eg Scarf and Akin) for hallux valgus correction +/- internal fixation +/- soft tissue correction - bilateral",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Foot"
  },
  {
    "code": "W0323",
    "description": "Revision of osteotomy/ies (eg Scarf and Akin) for hallux valgus correction +/- internal fixation +/- soft tissue correction - unilateral",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Foot"
  },
  {
    "code": "W0324",
    "description": "Revision of osteotomy/ies (eg Scarf and Akin) for hallux valgus correction +/- internal fixation +/- soft tissue correction - bilateral",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Foot"
  },
  {
    "code": "W0330",
    "description": "Fusion of first metatarsophalangeal joint - unilateral",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Foot"
  },
  {
    "code": "W0331",
    "description": "Revision of first metatarsophalangeal joint fusion +/- bone grafting +/- internal fixation (as sole procedure)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Foot"
  },
  {
    "code": "W0380",
    "description": "Fusion of first metatarsophalangeal joint - bilateral",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Foot"
  },
  {
    "code": "W0390",
    "description": "Inter articular resurfacing arthroplasty with implant of metatarsophalangeal joint",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Foot"
  },
  {
    "code": "W0420",
    "description": "Triple fusion of joints of hindfoot without autogenous graft",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Foot"
  },
  {
    "code": "W0422",
    "description": "Triple fusion of joints of hindfoot with autogenous graft",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Foot"
  },
  {
    "code": "W0432",
    "description": "Isolated subtalar fusion or midfoot fusion with autogenous graft",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Foot"
  },
  {
    "code": "W0434",
    "description": "Isolated subtalar fusion or midfoot fusion without autogenous graft",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Foot"
  },
  {
    "code": "W0460",
    "description": "Complex procedure to mid foot or hindfoot without autogenous bone graft (osteotomy/fusion +/- tendon transfers)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Foot"
  },
  {
    "code": "W0462",
    "description": "Complex procedure to mid foot or hindfoot with autogenous bone graft (osteotomy/fusion +/- tendon transfers/fixation)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Foot"
  },
  {
    "code": "W0463",
    "description": "Complex procedure to mid foot and hindfoot without autogenous bone graft (osteotomy/fusion +/- tendon transfers/fixation)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Foot"
  },
  {
    "code": "W0464",
    "description": "Complex procedure to mid foot and hindfoot with autogenous bone graft (osteotomy/fusion +/- tendon transfers, fixation)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Foot"
  },
  {
    "code": "W0512",
    "description": "Interpositional silastic arthroplasty of metacarpophalangeal (MCP) or proximal interphalangeal (PIP) joints – single digit",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Hand"
  },
  {
    "code": "W0513",
    "description": "Interpositional silastic arthroplasty of metacarpophalangeal (MCP) and proximal interphalangeal (PIP) joints – multiple digits",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Hand"
  },
  {
    "code": "W0514",
    "description": "Prosthetic surface arthroplasty of interphalangeal/ metacarpo-phalangeal joint - single joint (both cemented and uncemented)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Hand"
  },
  {
    "code": "W0515",
    "description": "Interpositional silastic arthroplasty of metacarpophalangeal (MCP) or proximal interphalangeal (PIP) joints – multiple digits",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Hand"
  },
  {
    "code": "W0516",
    "description": "Interpositional silastic arthroplasty of metacarpophalangeal (MCP) and proximal interphalangeal (PIP) joints – single digit",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Hand"
  },
  {
    "code": "W0610",
    "description": "Total excision of cervical rib",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Shoulder"
  },
  {
    "code": "W0630",
    "description": "Patellectomy",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Knee"
  },
  {
    "code": "W0632",
    "description": "Prosthetic patello-femoral replacement - unilateral (as sole procedure)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Knee"
  },
  {
    "code": "W0633",
    "description": "Prosthetic replacement of patellofemoral joint – bilateral (as sole procedure)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Knee"
  },
  {
    "code": "W0640",
    "description": "Total excision of sesamoid bone",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Bone (non-specific)"
  },
  {
    "code": "W0660",
    "description": "Coccygectomy (multiple levels)",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Column (Including Intervertebral Disc)"
  },
  {
    "code": "W0700",
    "description": "Excision of ectopic bone",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Bone (non-specific)"
  },
  {
    "code": "W0702",
    "description": "Excision of ectopic bone around a total hip replacement",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Hip, Leg and Pelvis"
  },
  {
    "code": "W0850",
    "description": "Partial excision of bone (including exostosis)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Bone (non-specific)"
  },
  {
    "code": "W0860",
    "description": "Metatarsophalangeal cheilectomy - unilateral, as sole procedure",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Foot"
  },
  {
    "code": "W0861",
    "description": "Metatarsophalangeal cheilectomy - bilateral, as sole procedure",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Foot"
  },
  {
    "code": "W0881",
    "description": "Excision of joint of toe with release of contracture and soft tissue correction",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Foot"
  },
  {
    "code": "W0890",
    "description": "Excision distal clavicle (as sole procedure)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Shoulder"
  },
  {
    "code": "W0950",
    "description": "Radical clearance of sarcoma of trunk or limbs, +/- amputation or insertion of prosthesis",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Bone (non-specific)"
  },
  {
    "code": "W0951",
    "description": "Radical clearance of sarcoma of head and neck necessitating flap reconstruction",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Bone (non-specific)"
  },
  {
    "code": "W0960",
    "description": "Excision of benign tumour of bone with bone grafting",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Bone (non-specific)"
  },
  {
    "code": "W0961",
    "description": "Radical clearance of benign bone tumour with reconstruction +/- insertion of prosthesis",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Bone (non-specific)"
  },
  {
    "code": "W1040",
    "description": "Osteotomy of short bone of foot (excluding hallux valgus and including internal fixation)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Foot"
  },
  {
    "code": "W1080",
    "description": "Osteotomy of long bone, +/- fixation (including graft)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Bone (non-specific)"
  },
  {
    "code": "W1320",
    "description": "Osteotomy of proximal femur",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Fractures"
  },
  {
    "code": "W1380",
    "description": "Arthroscopic femoro-acetabular surgery for hip impingement syndrome, including labral repair and osteochondroplasty",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Fractures"
  },
  {
    "code": "W1390",
    "description": "Open femoro-acetabular surgery for hip impingement syndrome",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Fractures"
  },
  {
    "code": "W1590",
    "description": "Correction of retracted/dislocated metatarso-phalangeal joint (including tendon transfer, division/realignment of bone and internal fixation)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Foot"
  },
  {
    "code": "W1640",
    "description": "Simple pelvic osteotomy and fixation, e.g. Salter or Chiari osteotomies",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Hip, Leg and Pelvis"
  },
  {
    "code": "W1641",
    "description": "Osteotomy of short bone of hand (including fixation and bone grafting)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Hand"
  },
  {
    "code": "W1642",
    "description": "Open reduction/internal fixation of posterior rim of acetabulum",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Fractures"
  },
  {
    "code": "W1643",
    "description": "Open reduction/internal fixation of either posterior wall/column of acetabulum or anterior column of acetabulum",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Fractures"
  },
  {
    "code": "W1644",
    "description": "Open reduction/internal fixation of both columns of acetabulum",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Fractures"
  },
  {
    "code": "W1645",
    "description": "Open reduction/internal fixation plus bone graft symphysis pubis",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Fractures"
  },
  {
    "code": "W1646",
    "description": "Open reduction/internal fixation of sacro-iliac joint",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Fractures"
  },
  {
    "code": "W1647",
    "description": "Open reduction/internal fixation of fractures of the greater trochanter, including fixation of non-union of greater trochanter after trochanteric osteotomy",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Fractures"
  },
  {
    "code": "W1648",
    "description": "Osteotomy/transfer of greater trochanter (as sole procedure)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Hip, Leg and Pelvis"
  },
  {
    "code": "W1649",
    "description": "Complex pelvic osteotomies and fixation, e.g. triple osteotomy, peri-acetabular osteotomy",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Hip, Leg and Pelvis"
  },
  {
    "code": "W1660",
    "description": "Tibial osteotomy",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Knee"
  },
  {
    "code": "W1700",
    "description": "Shelf augmentation of acetabulum (Wainwright or Trillat)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Hip, Leg and Pelvis"
  },
  {
    "code": "W1800",
    "description": "Drainage/debridement of bone(s) (including sequestrectomy for osteomyelitis)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Bone (non-specific)"
  },
  {
    "code": "W1870",
    "description": "Drainage of petrous apex for sepsis",
    "chapter": "Ear, Nose and Throat",
    "section": "Middle Ear and Mastoid"
  },
  {
    "code": "W1910",
    "description": "Primary reduction of fracture of neck of femur and internal fixation",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Fractures"
  },
  {
    "code": "W1911",
    "description": "Core decompression of hip",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Hip, Leg and Pelvis"
  },
  {
    "code": "W1912",
    "description": "Pinning of head of femur - open or percutaneous (e.g. slipped femoral epiphysis, undisplaced neck fracture)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Hip, Leg and Pelvis"
  },
  {
    "code": "W1913",
    "description": "Pinning for bilateral slipped upper femoral epiphysis",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Hip, Leg and Pelvis"
  },
  {
    "code": "W1920",
    "description": "Primary open reduction of long bone with fixation",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Fractures"
  },
  {
    "code": "W1940",
    "description": "Primary open reduction of short bone with fixation (including intra-articular)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Fractures"
  },
  {
    "code": "W2100",
    "description": "Primary open reduction of intra-articular fracture of long bone with internal fixation, e.g. proximal humerus or proximal tibia (+/- arthroscopic assistance)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Fractures"
  },
  {
    "code": "W2300",
    "description": "Secondary open reduction of fracture of short bone (including intra-articular fracture for delayed/non-union and including bone graft)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Fractures"
  },
  {
    "code": "W2310",
    "description": "Secondary open reduction of fractured long bone-and intramedullary fixation or internal fixation for non-union/mal union - including intra-articular (including bone graft)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Fractures"
  },
  {
    "code": "W2380",
    "description": "Locked intramedullary nailing of fractured long bone",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Fractures"
  },
  {
    "code": "W2500",
    "description": "Closed reduction of fracture of long bone with external fixation (excluding fixation by cast or percutaneous K-wires)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Fractures"
  },
  {
    "code": "W2502",
    "description": "Closed reduction of fracture of long bone (including cast or percutaneous K-wires)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Fractures"
  },
  {
    "code": "W2580",
    "description": "Closed reduction of fracture of short bone with external fixator",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Fractures"
  },
  {
    "code": "W2582",
    "description": "Closed reduction of fracture of short bone (including cast or percutaneous K-wires)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Fractures"
  },
  {
    "code": "W2620",
    "description": "Manipulation under anaesthesia of fractured nose (as sole procedure)",
    "chapter": "Ear, Nose and Throat",
    "section": "Nasal Sinuses"
  },
  {
    "code": "W2700",
    "description": "Fixation of epiphysis (including epiphysiodesis, correction of angular deformity)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Bone (non-specific)"
  },
  {
    "code": "W2702",
    "description": "Epiphysiolysis (eg Langenskiold procedure)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Bone (non-specific)"
  },
  {
    "code": "W2810",
    "description": "Repair of non-union of clavicle",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Shoulder"
  },
  {
    "code": "W2830",
    "description": "Removal of internal fixation from bone / joint, excluding K-wires +/- image guidance",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Fractures"
  },
  {
    "code": "W2910",
    "description": "Application of skeletal traction to bone",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "External Fixation/Traction"
  },
  {
    "code": "W2912",
    "description": "Application of halo (as sole procedure)",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Spinal Column (Including Intervertebral Disc)"
  },
  {
    "code": "W2930",
    "description": "Removal of skeletal traction from bone",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "External Fixation/Traction"
  },
  {
    "code": "W3010",
    "description": "Application of external fixation to bone",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "External Fixation/Traction"
  },
  {
    "code": "W3020",
    "description": "Adjustments to Ilizarov frame /rings",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Fractures"
  },
  {
    "code": "W3030",
    "description": "Removal of external fixation from bone",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "External Fixation/Traction"
  },
  {
    "code": "W3032",
    "description": "Removal of fixator/frame/pins/wires and change of plaster (as sole procedure)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Fractures"
  },
  {
    "code": "W3040",
    "description": "Application of Ilizarov frame for secondary non-union / mal-union (including osteotomy)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Fractures"
  },
  {
    "code": "W3050",
    "description": "Adjustments to pin sites secondary for non-union / mal-union",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Fractures"
  },
  {
    "code": "W3090",
    "description": "Core decompression of knee",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Knee"
  },
  {
    "code": "W3100",
    "description": "Bone graft (as sole procedure)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Fractures"
  },
  {
    "code": "W3110",
    "description": "Osteochondral grafting as a single stage procedure",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Knee"
  },
  {
    "code": "W3111",
    "description": "Autologous collagen induced chondrogenesis (ACIC) or autologous matrix induced chondrogenesis (AMIC)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Joints, including Replacement/Reconstruction (Not listed elsewhere)"
  },
  {
    "code": "W3122",
    "description": "Harvesting for autologous chondrocyte transplantation into knee (including arthroscopy)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Knee"
  },
  {
    "code": "W3123",
    "description": "Implantation of autologous chondrocytes into knee (including knee surgery, debridement and periosteal flap or membrane cover)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Knee"
  },
  {
    "code": "W3124",
    "description": "Single stage harvest of cartilage and injection of autologous morcellised cartilage and platelet rich plasma into joint",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Joints, including Replacement/Reconstruction (Not listed elsewhere)"
  },
  {
    "code": "W3140",
    "description": "Implantation of autologous chondrocytes into knee using an Advanced Therapy Medicinal Product (including knee surgery, debridement and periosteal flap or membrane cover)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Knee"
  },
  {
    "code": "W3150",
    "description": "Harvesting and injection of autologous bone marrow aspirate concentrate (BMAC) with collagen cell carrier for osteochondral defects of the knee",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Knee"
  },
  {
    "code": "W3180",
    "description": "Free composite (i.e. including bone) vascularised grafts",
    "chapter": "Skin and Subcutaneous Tissue",
    "section": "Flaps and Free Skin Grafts"
  },
  {
    "code": "W3200",
    "description": "Open reduction and internal fixation of cancellous bone graft scaphoid non-union",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Hand"
  },
  {
    "code": "W3202",
    "description": "Open reduction and internal fixation wedge reconstruction bone graft scaphoid non-union",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Hand"
  },
  {
    "code": "W3203",
    "description": "Early open reduction and internal fixation of scaphoid fracture, i.e. within 6 weeks of fracture",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Hand"
  },
  {
    "code": "W3511",
    "description": "Subchondroplasty injection (arthroscopic), under x-ray guidance",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Joints, including Replacement/Reconstruction (Not listed elsewhere)"
  },
  {
    "code": "W3530",
    "description": "Removal of percutaneous wire",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Fractures"
  },
  {
    "code": "W3620",
    "description": "Open bone biopsy as sole procedure",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Bone (non-specific)"
  },
  {
    "code": "W3622",
    "description": "Needle biopsy of bone as sole procedure",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Bone (non-specific)"
  },
  {
    "code": "W3650",
    "description": "Diagnostic aspiration and trephine biopsy of bone marrow, including analysis",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Bone (non-specific)"
  },
  {
    "code": "W3651",
    "description": "Diagnostic aspiration of bone marrow",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Bone (non-specific)"
  },
  {
    "code": "W3652",
    "description": "Trephine biopsy of bone marrow",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Bone (non-specific)"
  },
  {
    "code": "W3712",
    "description": "Primary total hip replacement +/- cement",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Hip, Leg and Pelvis"
  },
  {
    "code": "W3713",
    "description": "Complex primary total hip replacement (including bone grafting or femoral osteotomy)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Hip, Leg and Pelvis"
  },
  {
    "code": "W3714",
    "description": "Total hip replacement, +/- cement, after excision arthroplasty or arthrodesis (including conversion of hemiarthroplasty or revision of other previous hip surgery which involved internal fixation)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Hip, Leg and Pelvis"
  },
  {
    "code": "W3715",
    "description": "Hip resurfacing arthroplasty",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Hip, Leg and Pelvis"
  },
  {
    "code": "W3717",
    "description": "Minimally invasive hip replacement - unilateral",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Hip, Leg and Pelvis"
  },
  {
    "code": "W3718",
    "description": "Minimally invasive hip resurfacing",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Hip, Leg and Pelvis"
  },
  {
    "code": "W3719",
    "description": "Hip resurfacing arthroplasty bilateral",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Hip, Leg and Pelvis"
  },
  {
    "code": "W3720",
    "description": "Robotic assisted total hip replacement - unilateral +/- cement",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Hip, Leg and Pelvis"
  },
  {
    "code": "W3721",
    "description": "Robotic assisted total hip replacement – bilateral +/- cement",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Hip, Leg and Pelvis"
  },
  {
    "code": "W3722",
    "description": "Minimally invasive hip replacement +/- cement - bilateral",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Hip, Leg and Pelvis"
  },
  {
    "code": "W3732",
    "description": "Revision of uncemented or cemented total hip replacement without adjunctive procedures - unilateral",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Hip, Leg and Pelvis"
  },
  {
    "code": "W3733",
    "description": "Revision of total hip replacement (including insertion of reconstruction rings, plates, screws, etc., and/or impaction bone grafting to acetabulum and/or femur) - unilateral",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Hip, Leg and Pelvis"
  },
  {
    "code": "W3740",
    "description": "Second, third or further revision total hip replacement (excluding acetabular liner and head changes)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Hip, Leg and Pelvis"
  },
  {
    "code": "W3741",
    "description": "Proximal femoral replacement",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Hip, Leg and Pelvis"
  },
  {
    "code": "W3742",
    "description": "2 stage revision of total hip replacement for infection - first stage",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Hip, Leg and Pelvis"
  },
  {
    "code": "W3743",
    "description": "2 stage revision of total hip replacement for infection - second stage",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Hip, Leg and Pelvis"
  },
  {
    "code": "W3744",
    "description": "Robotic assisted revision of total hip replacement - unilateral",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Hip, Leg and Pelvis"
  },
  {
    "code": "W3745",
    "description": "Robotic assisted revision of total hip replacement (including insertion of reconstruction rings, plates, screws +/- impaction bone grafting to acetabulum +/- femur) - unilateral",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Hip, Leg and Pelvis"
  },
  {
    "code": "W3751",
    "description": "Customised unilateral hip replacement",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Hip, Leg and Pelvis"
  },
  {
    "code": "W3780",
    "description": "Total prosthetic replacement of the hip, +/- cement, bilateral",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Hip, Leg and Pelvis"
  },
  {
    "code": "W3942",
    "description": "Removal of total hip replacement and creating a pseudarthrosis",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Hip, Leg and Pelvis"
  },
  {
    "code": "W3943",
    "description": "Removal of total hip replacement and complete clearance of cement",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Hip, Leg and Pelvis"
  },
  {
    "code": "W3944",
    "description": "Acetabular liner and head changes",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Hip, Leg and Pelvis"
  },
  {
    "code": "W3945",
    "description": "Open reduction and internal fixation for periprosthetic fracture around hip",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Hip, Leg and Pelvis"
  },
  {
    "code": "W4200",
    "description": "Complex Primary total knee replacement (i.e. including bone graft, augmentation or osteotomy)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Knee"
  },
  {
    "code": "W4210",
    "description": "Total prosthetic replacement of knee joint +/- cement +/- patella resurfacing - unilateral",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Knee"
  },
  {
    "code": "W4212",
    "description": "Minimally invasive knee replacement +/- cement +/- patella resurfacing - unilateral",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Knee"
  },
  {
    "code": "W4214",
    "description": "Customised unicompartmental knee replacement",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Knee"
  },
  {
    "code": "W4216",
    "description": "Customised bicompartmental knee replacement",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Knee"
  },
  {
    "code": "W4218",
    "description": "Customised total prosthetic replacement of knee joint",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Knee"
  },
  {
    "code": "W4230",
    "description": "Revision of total replacement of knee joint",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Knee"
  },
  {
    "code": "W4231",
    "description": "Robotic assisted revision of total knee replacement",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Knee"
  },
  {
    "code": "W4240",
    "description": "2 stage revision of total knee replacement for infection - first stage",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Knee"
  },
  {
    "code": "W4242",
    "description": "2 stage revision of total knee replacement for infection  - second stage",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Knee"
  },
  {
    "code": "W4244",
    "description": "Tibial liner exchange in total knee replacement",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Knee"
  },
  {
    "code": "W4280",
    "description": "Total prosthetic replacement of knee joint +/- cement +/- patella resurfacing - bilateral",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Knee"
  },
  {
    "code": "W4410",
    "description": "Total prosthetic replacement of ankle joint",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Foot"
  },
  {
    "code": "W4420",
    "description": "Complex total replacement of ankle (i.e. including custom prosthesis, wedges, internal fixation of fractures)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Foot"
  },
  {
    "code": "W4430",
    "description": "Revision of total prosthetic replacement of ankle joint",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Foot"
  },
  {
    "code": "W4441",
    "description": "Harvesting for autologous chondrocyte transplantation into ankle",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Foot"
  },
  {
    "code": "W4442",
    "description": "Implantation of autologous chondrocyte into ankle",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Foot"
  },
  {
    "code": "W4542",
    "description": "Open reduction, internal fixation and revision of femoral component for periprosthetic fracture",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Hip, Leg and Pelvis"
  },
  {
    "code": "W4543",
    "description": "Open reduction, internal fixation and complete revision for peri-prosthetic fracture",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Hip, Leg and Pelvis"
  },
  {
    "code": "W4600",
    "description": "Prosthetic replacement of head of femur",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Hip, Leg and Pelvis"
  },
  {
    "code": "W4900",
    "description": "Shoulder hemiarthroplasty (as sole procedure)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Shoulder"
  },
  {
    "code": "W4901",
    "description": "Replacement of proximal humerus",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Joints, including Replacement/Reconstruction (Not listed elsewhere)"
  },
  {
    "code": "W4902",
    "description": "Shoulder hemiarthroplasty with reconstruction for fracture",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Shoulder"
  },
  {
    "code": "W4920",
    "description": "Conversion of hemiarthroplasty to total shoulder replacement",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Shoulder"
  },
  {
    "code": "W4930",
    "description": "Revision shoulder hemiarthroplasty",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Shoulder"
  },
  {
    "code": "W4940",
    "description": "Scapulo-thoracic fusion",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Shoulder"
  },
  {
    "code": "W5000",
    "description": "Primary total shoulder replacement",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Shoulder"
  },
  {
    "code": "W5030",
    "description": "Revision total shoulder replacement",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Shoulder"
  },
  {
    "code": "W5031",
    "description": "2 stage revision of total shoulder replacement for infection - first stage",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Shoulder"
  },
  {
    "code": "W5032",
    "description": "2 stage revision of total shoulder replacement for infection - second stage",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Shoulder"
  },
  {
    "code": "W5040",
    "description": "Replacement of elbow and shoulder (single operation)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Elbow"
  },
  {
    "code": "W5050",
    "description": "Reverse polarity arthroplasty of shoulder",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Shoulder"
  },
  {
    "code": "W5200",
    "description": "Unicompartmental knee replacement - unilateral",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Knee"
  },
  {
    "code": "W5201",
    "description": "Unicompartmental knee replacement - bilateral",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Knee"
  },
  {
    "code": "W5210",
    "description": "Revision of unicompartmental knee replacement",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Knee"
  },
  {
    "code": "W5300",
    "description": "Bicompartmental knee resurfacing",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Knee"
  },
  {
    "code": "W5310",
    "description": "Total prosthetic replacement of wrist joint",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Hand"
  },
  {
    "code": "W5320",
    "description": "Midcarpal hemiarthroplasty for wrist arthritis",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Joints, including Replacement/Reconstruction (Not listed elsewhere)"
  },
  {
    "code": "W5502",
    "description": "Interposition arthroplasty of elbow",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Elbow"
  },
  {
    "code": "W5510",
    "description": "Total prosthetic replacement of elbow",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Elbow"
  },
  {
    "code": "W5512",
    "description": "Prosthetic replacement of radial head",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Elbow"
  },
  {
    "code": "W5520",
    "description": "Revisional prosthetic replacement of elbow",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Elbow"
  },
  {
    "code": "W5540",
    "description": "Debridement of infected total joint replacement",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Joints, including Replacement/Reconstruction (Not listed elsewhere)"
  },
  {
    "code": "W5550",
    "description": "Excision of radial head (as sole procedure)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Elbow"
  },
  {
    "code": "W5560",
    "description": "OK (Outerbridge and Kashiwagi) procedure",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Elbow"
  },
  {
    "code": "W5600",
    "description": "Primary repair of rupture of acromioclavicular or sternoclavicular joint +/- internal fixation",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Shoulder"
  },
  {
    "code": "W5630",
    "description": "Secondary repair of acromioclavicular or sternoclavicular joint +/- internal fixation",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Shoulder"
  },
  {
    "code": "W5700",
    "description": "Excision arthroplasty of first metatarsophalangeal joint with prosthetic implantation or interpositional arthroplasty - unilateral",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Foot"
  },
  {
    "code": "W5701",
    "description": "Excision arthroplasty of first metatarsophalangeal joint with prosthetic implantation or interpositional arthroplasty - bilateral",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Foot"
  },
  {
    "code": "W5710",
    "description": "Excision arthroplasty of first metatarsophalangeal joint (eg Keller, Bonney-Kessel procedures) including cheilectomy - unilateral",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Foot"
  },
  {
    "code": "W5722",
    "description": "Excision reconstruction of small joint",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Joints, including Replacement/Reconstruction (Not listed elsewhere)"
  },
  {
    "code": "W5723",
    "description": "Excision reconstruction of large joint",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Joints, including Replacement/Reconstruction (Not listed elsewhere)"
  },
  {
    "code": "W5780",
    "description": "Excision arthroplasty of first metatarsophalangeal joint (eg Keller, Bonney-Kessel procedures) including cheilectomy - bilateral",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Foot"
  },
  {
    "code": "W5790",
    "description": "Repair to plantar plate",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Foot"
  },
  {
    "code": "W5800",
    "description": "Conversion of a unicompartmental knee replacement to a total replacement of knee joint",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Knee"
  },
  {
    "code": "W5810",
    "description": "Patella resurfacing (as sole procedure)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Knee"
  },
  {
    "code": "W5820",
    "description": "Robotic assisted unicompartmental knee replacement - unilateral",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Knee"
  },
  {
    "code": "W5821",
    "description": "Robotic assisted unicompartmental knee replacement - bilateral",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Knee"
  },
  {
    "code": "W5822",
    "description": "Robotic assisted revision of unicompartmental knee replacement - unilateral",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Knee"
  },
  {
    "code": "W5830",
    "description": "Robotic assisted total knee replacement – unilateral +/- cement, +/- patella",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Knee"
  },
  {
    "code": "W5831",
    "description": "Robotic assisted total knee replacement - bilateral +/- cement, +/- patella",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Knee"
  },
  {
    "code": "W5851",
    "description": "Localised patient specific knee resurfacing arthroplasty - unilateral",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Knee"
  },
  {
    "code": "W5852",
    "description": "Localised patient specific twin knee resurfacing arthroplasty - unilateral",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Knee"
  },
  {
    "code": "W5853",
    "description": "Localised patient specific knee resurfacing arthroplasty - bilateral",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Knee"
  },
  {
    "code": "W5920",
    "description": "Fusion of first metatarsophalangeal joint with bone grafting +/- internal fixation (as sole procedure)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Foot"
  },
  {
    "code": "W5930",
    "description": "Fusion of digit joint(s) of hand +/- graft and +/- internal fixation",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Hand"
  },
  {
    "code": "W5940",
    "description": "Fusion of interphalangeal joint(s) of toe (including internal fixation - unilateral",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Foot"
  },
  {
    "code": "W5980",
    "description": "Fusion of interphalangeal joint(s) of toe (including internal fixation) - bilateral",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Foot"
  },
  {
    "code": "W6012",
    "description": "Primary arthrodesis of joint +/- graft and +/- internal fixation - shoulder",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Shoulder"
  },
  {
    "code": "W6013",
    "description": "Primary arthrodesis of hip joint +/- graft and +/- internal fixation - hip",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Hip, Leg and Pelvis"
  },
  {
    "code": "W6014",
    "description": "Primary arthrodesis of knee joint +/- graft and +/- internal fixation",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Knee"
  },
  {
    "code": "W6015",
    "description": "Open ankle arthrodesis with internal fixation",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Foot"
  },
  {
    "code": "W6016",
    "description": "Open ankle arthrodesis with autogenous graft",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Foot"
  },
  {
    "code": "W6017",
    "description": "Arthroscopic ankle arthrodesis with internal fixation",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Foot"
  },
  {
    "code": "W6018",
    "description": "Revisional ankle arthrodesis (including conversion from total ankle replacement)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Foot"
  },
  {
    "code": "W6019",
    "description": "Ankle syndesmosis reconstruction",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Foot"
  },
  {
    "code": "W6030",
    "description": "Revision or conversion to arthrodesis of shoulder",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Shoulder"
  },
  {
    "code": "W6200",
    "description": "Total fusion of all joints of wrist +/- graft and +/- internal fixation",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Hand"
  },
  {
    "code": "W6202",
    "description": "Partial fusion of wrist",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Hand"
  },
  {
    "code": "W6230",
    "description": "Vascular implantation to carpal bone",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Hand"
  },
  {
    "code": "W6522",
    "description": "Primary open reduction of dislocation of small joint",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Fractures"
  },
  {
    "code": "W6523",
    "description": "Primary open reduction of dislocation of large joint",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Fractures"
  },
  {
    "code": "W6540",
    "description": "Open reduction of dislocated hip prosthesis",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Hip, Leg and Pelvis"
  },
  {
    "code": "W6600",
    "description": "Closed reduction of dislocated hip prosthesis",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Hip, Leg and Pelvis"
  },
  {
    "code": "W6630",
    "description": "Primary closed reduction of fracture or dislocation of joint, with or without fixation incl cast application",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Fractures"
  },
  {
    "code": "W6702",
    "description": "Secondary open reduction of dislocation of small joint",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Fractures"
  },
  {
    "code": "W6703",
    "description": "Secondary open reduction of dislocation of large joint",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Fractures"
  },
  {
    "code": "W6912",
    "description": "Total synovectomy of small joint",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Joints, including Replacement/Reconstruction (Not listed elsewhere)"
  },
  {
    "code": "W6913",
    "description": "Total synovectomy of large joint",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Joints, including Replacement/Reconstruction (Not listed elsewhere)"
  },
  {
    "code": "W6960",
    "description": "Needle biopsy of synovium",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Connective Tissue/Tendon Muscle"
  },
  {
    "code": "W7042",
    "description": "Cannulation or decannulation for ECMO (Extracorporeal membrane oxygenation)",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Great Vessels"
  },
  {
    "code": "W7081",
    "description": "Radiofrequency ablation of bone metastasis +/- bone cement +/- spinal cord monitoring using image guidance",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Bone (non-specific)"
  },
  {
    "code": "W7180",
    "description": "Harvesting and injection of bone marrow aspirate concentrate (BMAC)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Connective Tissue/Tendon Muscle"
  },
  {
    "code": "W7400",
    "description": "Reconstruction of one or two ligaments not elsewhere specified",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Joints, including Replacement/Reconstruction (Not listed elsewhere)"
  },
  {
    "code": "W7410",
    "description": "Multiple ligament reconstruction of knee",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Knee"
  },
  {
    "code": "W7411",
    "description": "Prosthetic open repair of multiple ligaments not elsewhere specified",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Knee"
  },
  {
    "code": "W7420",
    "description": "Autograft anterior cruciate ligament reconstruction without lateral tenodesis +/- meniscectomy",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Knee"
  },
  {
    "code": "W7421",
    "description": "Autograft anterior cruciate ligament reconstruction with lateral tenodesis +/- meniscectomy",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Knee"
  },
  {
    "code": "W7430",
    "description": "Reconstruction of lateral collateral ligament complex",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Foot"
  },
  {
    "code": "W7440",
    "description": "Allograft anterior cruciate ligament reconstruction +/- meniscectomy",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Knee"
  },
  {
    "code": "W7451",
    "description": "2 stage revision anterior cruciate ligament reconstruction - first stage",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Knee"
  },
  {
    "code": "W7452",
    "description": "2 stage revision anterior cruciate ligament reconstruction - second stage",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Knee"
  },
  {
    "code": "W7460",
    "description": "Proximal Hamstring Repair",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Connective Tissue/Tendon Muscle"
  },
  {
    "code": "W7470",
    "description": "Revision of anterior cruciate ligament reconstruction including autograft/allograft",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Knee"
  },
  {
    "code": "W7480",
    "description": "Posterior cruciate ligament reconstruction",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Knee"
  },
  {
    "code": "W7481",
    "description": "Autograft posterior cruciate ligament reconstruction +/- meniscectomy",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Knee"
  },
  {
    "code": "W7482",
    "description": "Scaphoid lunate ligament reconstruction",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Hand"
  },
  {
    "code": "W7483",
    "description": "Triquetrolunate ligament reconstruction",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Hand"
  },
  {
    "code": "W7484",
    "description": "Reconstruction of three or more ligaments not elsewhere specified",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Hand"
  },
  {
    "code": "W7485",
    "description": "Small joint (e.g. interphalangeal/ metacarpo-phalangeal joint) ligament reconstruction",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Hand"
  },
  {
    "code": "W7486",
    "description": "Carpo-metacarpal joint ligament reconstruction",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Hand"
  },
  {
    "code": "W7487",
    "description": "Allograft posterior cruciate ligament reconstruction +/- meniscectomy",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Knee"
  },
  {
    "code": "W7488",
    "description": "Revision posterior cruciate ligament reconstruction including artificial graft/ligament",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Knee"
  },
  {
    "code": "W7489",
    "description": "Revision of posterior cruciate ligament reconstruction including autograft/allograft",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Knee"
  },
  {
    "code": "W7490",
    "description": "Reconstruction of posterior lateral corner of knee",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Knee"
  },
  {
    "code": "W7492",
    "description": "Lateral release",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Knee"
  },
  {
    "code": "W7500",
    "description": "Prosthetic open repair of ligament not elsewhere specified",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Joints, including Replacement/Reconstruction (Not listed elsewhere)"
  },
  {
    "code": "W7530",
    "description": "Repair of lateral collateral ligament complex",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Foot"
  },
  {
    "code": "W7580",
    "description": "Open surgical stabilisation of patella, including soft tissue/tendon transfer or release, +/- application of cast (adult)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Knee"
  },
  {
    "code": "W7582",
    "description": "Open surgical stabilisation of patella, including soft tissue/tendon transfer or release, +/- application of cast (child)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Knee"
  },
  {
    "code": "W7583",
    "description": "Repair of patellar/quadricep tendon",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Knee"
  },
  {
    "code": "W7630",
    "description": "Reconstruction of medial collateral ligament complex",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Knee"
  },
  {
    "code": "W7713",
    "description": "Primary stabilisation of multi-directional instability of shoulder joint +/- tendon repair",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Shoulder"
  },
  {
    "code": "W7715",
    "description": "Coracoid bone block transfer for recurrent instability of shoulder (Bristow-Latarjet procedure)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Shoulder"
  },
  {
    "code": "W7716",
    "description": "Arthroscopic superior capsule reconstruction for irreparable rotator cuff tears +/- decompression (including graft)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Shoulder"
  },
  {
    "code": "W7717",
    "description": "Open superior capsule reconstruction for irreparable rotator cuff tears +/- decompression (including graft)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Shoulder"
  },
  {
    "code": "W7718",
    "description": "Primary arthroscopic shoulder stabilisation procedure (including labral/SLAP/tendon repair)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Shoulder"
  },
  {
    "code": "W7719",
    "description": "Primary open shoulder stabilisation procedure (including labral/SLAP/tendon repair)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Shoulder"
  },
  {
    "code": "W7720",
    "description": "Minimally invasive sacroiliac joint stabilisation surgery for chronic sacroiliac pain under image guidance",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Fractures"
  },
  {
    "code": "W7730",
    "description": "Repair of medial collateral ligament complex",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Knee"
  },
  {
    "code": "W7761",
    "description": "Repair of hip labral tear",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Hip, Leg and Pelvis"
  },
  {
    "code": "W7780",
    "description": "Revision stabilisation of shoulder joint",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Shoulder"
  },
  {
    "code": "W7810",
    "description": "Open arthrolysis of shoulder contracture +/- manipulation/injection",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Shoulder"
  },
  {
    "code": "W7850",
    "description": "Open arthrolysis of elbow",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Elbow"
  },
  {
    "code": "W7860",
    "description": "Arthroscopic arthrolysis of elbow (as sole procedure)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Elbow"
  },
  {
    "code": "W7872",
    "description": "Arthroscopic arthrolysis of shoulder contracture +/- manipulation/injection",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Shoulder"
  },
  {
    "code": "W7880",
    "description": "Release of ankle joint contracture (excluding Achilles tendon lengthening)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Foot"
  },
  {
    "code": "W7881",
    "description": "Release of contracture of interphalangeal joint of finger (excluding trigger finger or Dupuytren's disease)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Joints, including Replacement/Reconstruction (Not listed elsewhere)"
  },
  {
    "code": "W7900",
    "description": "Excision of medial eminence first or fifth metatarsal head with soft tissue repair (bunionectomy)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Foot"
  },
  {
    "code": "W7910",
    "description": "Metatarsal osteotomy (eg Scarf) for hallux valgus, +/- internal fixation +/- soft tissue correction - unilateral",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Foot"
  },
  {
    "code": "W7921",
    "description": "Surgical correction of hallux valgus using minimal access techniques- bilateral",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Foot"
  },
  {
    "code": "W7922",
    "description": "Surgical correction of hallux valgus using minimal access techniques- unilateral",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Foot"
  },
  {
    "code": "W7980",
    "description": "Metatarsal osteotomy (eg Scarf) for hallux valgus, +/- internal fixation +/- soft tissue correction - bilateral",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Foot"
  },
  {
    "code": "W8100",
    "description": "Open excision of calcific deposit (e.g. shoulder, hip)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Connective Tissue/Tendon Muscle"
  },
  {
    "code": "W8110",
    "description": "Arthroscopic excision of calcific deposits from shoulder (as sole procedure)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Shoulder"
  },
  {
    "code": "W8150",
    "description": "Arthrotomy of large joint, including removal of loose body from joint",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Joints, including Replacement/Reconstruction (Not listed elsewhere)"
  },
  {
    "code": "W8170",
    "description": "Biodegradable subacromial spacer insertion for rotator cuff tears",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Shoulder"
  },
  {
    "code": "W8180",
    "description": "Arthrotomy of small joint, including removal of loose body from joint",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Joints, including Replacement/Reconstruction (Not listed elsewhere)"
  },
  {
    "code": "W8193",
    "description": "Arthroscopic subacromial decompression",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Shoulder"
  },
  {
    "code": "W8194",
    "description": "Arthroscopic subacromial decompression and excision of distal clavicle (including arthroscopic procedures in glenohumeral joint)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Shoulder"
  },
  {
    "code": "W8200",
    "description": "Arthroscopic meniscectomy (including debridement) - unilateral",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Knee"
  },
  {
    "code": "W8230",
    "description": "Arthroscopic meniscal repair",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Knee"
  },
  {
    "code": "W8240",
    "description": "Meniscal allograft transplantation",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Knee"
  },
  {
    "code": "W8250",
    "description": "Partial replacement of the meniscus of the knee using a biodegradable scaffold",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Knee"
  },
  {
    "code": "W8280",
    "description": "Arthroscopic meniscectomy (including debridement) - bilateral",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Knee"
  },
  {
    "code": "W8300",
    "description": "Therapeutic arthroscopy operation on articular cartilage (other than W8200) - unilateral (as sole procedure)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Joints, including Replacement/Reconstruction (Not listed elsewhere)"
  },
  {
    "code": "W8370",
    "description": "Autologous scaffold insertion for repairing symptomatic chondral knee defects (including microfracture)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Knee"
  },
  {
    "code": "W8380",
    "description": "Therapeutic arthroscopy operation on articular cartilage (other than W8200) - bilateral (as sole procedure)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Joints, including Replacement/Reconstruction (Not listed elsewhere)"
  },
  {
    "code": "W8400",
    "description": "Repair of knee ligaments (open or arthroscopic)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Knee"
  },
  {
    "code": "W8410",
    "description": "Arthroscopic labral reconstruction of the hip (including allograft and harvesting)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Hip, Leg and Pelvis"
  },
  {
    "code": "W8411",
    "description": "Arthroscopic labral reconstruction of the hip (including autograft and harvesting)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Hip, Leg and Pelvis"
  },
  {
    "code": "W8500",
    "description": "Multiple arthroscopic operations on knee (including meniscectomy, chondroplasty, drilling or microfracture) - unilateral",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Knee"
  },
  {
    "code": "W8520",
    "description": "Arthroscopy of knee (including examination under anaesthetic, washout and biopsy) (as sole procedure)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Knee"
  },
  {
    "code": "W8580",
    "description": "Multiple arthroscopic operations on knee (including meniscectomy, chondroplasty, drilling or microfracture) - bilateral",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Knee"
  },
  {
    "code": "W8600",
    "description": "Therapeutic arthroscopy operation on cavity of joint (not otherwise specified) (as sole procedure)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Joints, including Replacement/Reconstruction (Not listed elsewhere)"
  },
  {
    "code": "W8602",
    "description": "Therapeutic arthroscopy of wrist joint (as sole procedure)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Hand"
  },
  {
    "code": "W8603",
    "description": "Therapeutic arthroscopy of shoulder (as sole procedure)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Shoulder"
  },
  {
    "code": "W8620",
    "description": "Therapeutic arthroscopy examination of hip joint, +/- biopsy",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Hip, Leg and Pelvis"
  },
  {
    "code": "W8645",
    "description": "Multiple arthroscopic operations on ankle (including soft tissue +/- bony +/- joint surface procedures) with ligament reconstruction",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Foot"
  },
  {
    "code": "W8646",
    "description": "Multiple arthroscopic operations on ankle (including soft tissue +/- bony +/- joint surface procedures) without ligament reconstruction",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Foot"
  },
  {
    "code": "W8650",
    "description": "Therapeutic subtalar arthroscopy (including synovectomy to gain vision)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Foot"
  },
  {
    "code": "W8680",
    "description": "Therapeutic arthroscopy operation on cavity of joint - bilateral (not otherwise specified) (as sole procedure)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Joints, including Replacement/Reconstruction (Not listed elsewhere)"
  },
  {
    "code": "W8700",
    "description": "Diagnostic arthroscopic examination of joint, +/- biopsy (not otherwise specified) (as sole procedure)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Joints, including Replacement/Reconstruction (Not listed elsewhere)"
  },
  {
    "code": "W8780",
    "description": "Diagnostic arthroscopic examination of joint, +/- biopsy - bilateral (not otherwise specified) (as sole procedure)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Joints, including Replacement/Reconstruction (Not listed elsewhere)"
  },
  {
    "code": "W8782",
    "description": "Flexible arthroscopy, +/- biopsy (as sole procedure)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Joints, including Replacement/Reconstruction (Not listed elsewhere)"
  },
  {
    "code": "W8800",
    "description": "Diagnostic arthroscopic examination of hip joint (as sole procedure, including washout, +/- biopsy)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Hip, Leg and Pelvis"
  },
  {
    "code": "W8820",
    "description": "Diagnostic arthroscopic examination of shoulder joint, +/- biopsy (as sole procedure)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Shoulder"
  },
  {
    "code": "W8830",
    "description": "Diagnostic arthroscopic examination of wrist joint, +/- biopsy (as sole procedure)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Hand"
  },
  {
    "code": "W8840",
    "description": "Diagnostic arthroscopic examination of ankle (as sole procedure, including anterior synovectomy to gain vision)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Foot"
  },
  {
    "code": "W8850",
    "description": "Diagnostic subtalar arthroscopy (as sole procedure, including synovectomy to gain vision)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Foot"
  },
  {
    "code": "W8880",
    "description": "Arthroscopy of Elbow (as sole procedure)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Elbow"
  },
  {
    "code": "W8890",
    "description": "Diagnostic small-bore needle arthroscopy on cavity of joint (as sole procedure)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Joints, including Replacement/Reconstruction (Not listed elsewhere)"
  },
  {
    "code": "W9017",
    "description": "Yttrium joint injection (with radioactive precautions)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Joints, including Replacement/Reconstruction (Not listed elsewhere)"
  },
  {
    "code": "W9018",
    "description": "Percutaneous biopsy/ arthrography/ aspiration in assessment of total hip replacement",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Hip, Leg and Pelvis"
  },
  {
    "code": "W9020",
    "description": "Dynamic arthrogram of joint",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Joints, including Replacement/Reconstruction (Not listed elsewhere)"
  },
  {
    "code": "W9030",
    "description": "Injection(s) +/- aspiration, into joint, cyst, bursa with image guidance - unilateral",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Joints, including Replacement/Reconstruction (Not listed elsewhere)"
  },
  {
    "code": "W9032",
    "description": "Injection of viscosupplement into joint with image guidance - unilateral",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Joints, including Replacement/Reconstruction (Not listed elsewhere)"
  },
  {
    "code": "W9033",
    "description": "Injections of viscosupplement into joints with image guidance - bilateral",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Joints, including Replacement/Reconstruction (Not listed elsewhere)"
  },
  {
    "code": "W9035",
    "description": "Injection(s) +/- aspiration, into two or more joints, cysts, bursae with image guidance - bilateral",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Joints, including Replacement/Reconstruction (Not listed elsewhere)"
  },
  {
    "code": "W9040",
    "description": "Injection(s) +/- aspiration, into joint, cyst, bursa  - unilateral",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Joints, including Replacement/Reconstruction (Not listed elsewhere)"
  },
  {
    "code": "W9042",
    "description": "Injection of viscosupplement into joint – unilateral",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Joints, including Replacement/Reconstruction (Not listed elsewhere)"
  },
  {
    "code": "W9043",
    "description": "Injections of viscosupplement into joints - bilateral",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Joints, including Replacement/Reconstruction (Not listed elsewhere)"
  },
  {
    "code": "W9045",
    "description": "Injection(s) +/- aspiration, into two or more joints, cysts, bursae - bilateral",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Joints, including Replacement/Reconstruction (Not listed elsewhere)"
  },
  {
    "code": "W9046",
    "description": "Platelet rich plasma injections for knee osteoarthritis",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Joints, including Replacement/Reconstruction (Not listed elsewhere)"
  },
  {
    "code": "W9047",
    "description": "Autologous protein solution injection",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Joints, including Replacement/Reconstruction (Not listed elsewhere)"
  },
  {
    "code": "W9048",
    "description": "Platelet rich plasma injection not elsewhere specified",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Connective Tissue/Tendon Muscle"
  },
  {
    "code": "W9050",
    "description": "Shoulder hydrodistension +/- image guidance",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Joints, including Replacement/Reconstruction (Not listed elsewhere)"
  },
  {
    "code": "W9052",
    "description": "Injection of polyacrylamide hydrogel into joint +/- image guidance - unilateral",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Joints, including Replacement/Reconstruction (Not listed elsewhere)"
  },
  {
    "code": "W9053",
    "description": "Injection of polyacrylamide hydrogel into joints +/- image guidance – bilateral",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Joints, including Replacement/Reconstruction (Not listed elsewhere)"
  },
  {
    "code": "W9111",
    "description": "Manipulation of joint (including intra-articular injection) for 'Frozen Shoulder' (as sole procedure) - bilateral",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Shoulder"
  },
  {
    "code": "W9112",
    "description": "Manipulation of joint (including intra-articular injection) for 'Frozen Shoulder' (as sole procedure)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Shoulder"
  },
  {
    "code": "W9170",
    "description": "Manipulation of foot/ankle joint under local anaesthetic +/- injection (as a sole procedure)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Joints, including Replacement/Reconstruction (Not listed elsewhere)"
  },
  {
    "code": "W9220",
    "description": "Low-level laser therapy for inflammation/pain relief for musculoskeletal conditions",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Connective Tissue/Tendon Muscle"
  },
  {
    "code": "W9240",
    "description": "Examination/ manipulation of joint under general anaesthetic +/- injection +/- arthrogram (as sole procedure)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Joints, including Replacement/Reconstruction (Not listed elsewhere)"
  },
  {
    "code": "W9241",
    "description": "Examination/ manipulation of joint under Local anaesthetic (as sole procedure).",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Joints, including Replacement/Reconstruction (Not listed elsewhere)"
  },
  {
    "code": "W9282",
    "description": "Joint fluid examination (e.g. polarising microscopy) performed by consultant (including aspiration of fluid)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Joints, including Replacement/Reconstruction (Not listed elsewhere)"
  },
  {
    "code": "X0001",
    "description": "Clinical supervision and planning for the delivery of chemotherapy and/or systemic anti-cancer therapy for 0-7 days",
    "chapter": "Chemotherapy",
    "section": "Chemotherapy"
  },
  {
    "code": "X0002",
    "description": "Clinical supervision and planning for the delivery of chemotherapy and/or systemic anti-cancer therapy for 1-14 days",
    "chapter": "Chemotherapy",
    "section": "Chemotherapy"
  },
  {
    "code": "X0003",
    "description": "Clinical supervision and planning for the delivery of chemotherapy and/or systemic anti-cancer therapy for 1-21 days",
    "chapter": "Chemotherapy",
    "section": "Chemotherapy"
  },
  {
    "code": "X0004",
    "description": "Clinical supervision and planning for the delivery of chemotherapy and/or systemic anti-cancer therapy for 1-28 days",
    "chapter": "Chemotherapy",
    "section": "Chemotherapy"
  },
  {
    "code": "X0005",
    "description": "Clinical supervision and planning for the delivery of chemotherapy and/or systemic anti-cancer therapy for 1-56 days",
    "chapter": "Chemotherapy",
    "section": "Chemotherapy"
  },
  {
    "code": "X0007",
    "description": "Clinical supervision of external beam radiotherapy, up to and including 15 fractions or part thereof",
    "chapter": "Radiotherapy",
    "section": "Radiotherapy"
  },
  {
    "code": "X0008",
    "description": "Clinical supervision of external beam radiotherapy, for 16 or up to and including 30 fractions",
    "chapter": "Radiotherapy",
    "section": "Radiotherapy"
  },
  {
    "code": "X0009",
    "description": "Clinical supervision of external beam radiotherapy, for 31 or more fractions",
    "chapter": "Radiotherapy",
    "section": "Radiotherapy"
  },
  {
    "code": "X0010",
    "description": "Clinical supervision of intraoperative radiation therapy (IORT)",
    "chapter": "Radiotherapy",
    "section": "Radiotherapy"
  },
  {
    "code": "X0011",
    "description": "Consultant supervision of the delivery of a single fraction of orthovoltage radiotherapy",
    "chapter": "Radiotherapy",
    "section": "Radiotherapy"
  },
  {
    "code": "X0100",
    "description": "Electrochemotherapy for malignant lesions",
    "chapter": "Chemotherapy",
    "section": "Chemotherapy"
  },
  {
    "code": "X0710",
    "description": "Forequarter amputation",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Amputation"
  },
  {
    "code": "X0720",
    "description": "Disarticulation of shoulder",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Amputation"
  },
  {
    "code": "X0750",
    "description": "Amputation of arm",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Amputation"
  },
  {
    "code": "X0820",
    "description": "Partial amputation of digit",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Amputation"
  },
  {
    "code": "X0822",
    "description": "Amputation of whole ray",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Amputation"
  },
  {
    "code": "X0880",
    "description": "Amputation through mid-carpal/transmetacarpal",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Amputation"
  },
  {
    "code": "X0910",
    "description": "Hindquarter amputation",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Amputation"
  },
  {
    "code": "X0920",
    "description": "Disarticulation of hip",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Amputation"
  },
  {
    "code": "X0930",
    "description": "Amputation of leg above knee",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Amputation"
  },
  {
    "code": "X0940",
    "description": "Amputation of leg through knee",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Amputation"
  },
  {
    "code": "X0950",
    "description": "Amputation of leg below knee",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Amputation"
  },
  {
    "code": "X1110",
    "description": "Amputation of toe",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Amputation"
  },
  {
    "code": "X1410",
    "description": "Total exenteration of pelvis",
    "chapter": "Female Reproductive Organs",
    "section": "Uterus/Adnexa"
  },
  {
    "code": "X1420",
    "description": "Anterior exenteration of pelvis",
    "chapter": "Female Reproductive Organs",
    "section": "Uterus/Adnexa"
  },
  {
    "code": "X1421",
    "description": "Robotic assisted anterior exenteration of pelvis",
    "chapter": "Female Reproductive Organs",
    "section": "Uterus/Adnexa"
  },
  {
    "code": "X1422",
    "description": "Robotic assisted posterior exenteration of pelvis",
    "chapter": "Female Reproductive Organs",
    "section": "Uterus/Adnexa"
  },
  {
    "code": "X1423",
    "description": "Robotic assisted total pelvic exenteration",
    "chapter": "Female Reproductive Organs",
    "section": "Uterus/Adnexa"
  },
  {
    "code": "X1430",
    "description": "Posterior exenteration of pelvis",
    "chapter": "Female Reproductive Organs",
    "section": "Uterus/Adnexa"
  },
  {
    "code": "X2130",
    "description": "Release of joined/fused digit(s)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Foot"
  },
  {
    "code": "X2200",
    "description": "Closed reduction and Frog POP for congenital dislocation of hip (including dynamic arthrogram, traction and soft tissue release)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Hip, Leg and Pelvis"
  },
  {
    "code": "X2260",
    "description": "Open reduction and Frog POP for congenital dislocation of hip (including traction and innominate/femoral ostetotomy)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Hip, Leg and Pelvis"
  },
  {
    "code": "X2262",
    "description": "Complex open reduction for congenital dislocation of hip (i.e. pelvic and femoral or Pemberton osteotomy or revision of open reduction)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Hip, Leg and Pelvis"
  },
  {
    "code": "X2280",
    "description": "Manipulation of hip and casting (as sole procedure)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Hip, Leg and Pelvis"
  },
  {
    "code": "X3060",
    "description": "Sub-tenons anaesthesia administered by anaesthetist (as sole procedure)",
    "chapter": "Investigations, simple procedures and consultation codes",
    "section": "Simple Procedures"
  },
  {
    "code": "X3270",
    "description": "Extracorporeal photopheresis (ECP) - single session",
    "chapter": "Haematology",
    "section": "Haematology"
  },
  {
    "code": "X3530",
    "description": "Sedation or general anaesthesia for CT scan",
    "chapter": "Investigations, simple procedures and consultation codes",
    "section": "Simple Procedures"
  },
  {
    "code": "X3531",
    "description": "Sedation or general anaesthesia for MRI scan",
    "chapter": "Investigations, simple procedures and consultation codes",
    "section": "Simple Procedures"
  },
  {
    "code": "X3570",
    "description": "Therapeutic venesection",
    "chapter": "Investigations, simple procedures and consultation codes",
    "section": "Simple Procedures"
  },
  {
    "code": "X3750",
    "description": "Botulinum toxin injections to muscle",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Other Procedures"
  },
  {
    "code": "X3770",
    "description": "Intramuscular injection(s) with x-ray control (e.g. piriformis block)",
    "chapter": "Investigations, simple procedures and consultation codes",
    "section": "Simple Procedures"
  },
  {
    "code": "X4110",
    "description": "Open insertion of Tenckhoff catheter",
    "chapter": "Vascular System",
    "section": "Non-specific"
  },
  {
    "code": "X4112",
    "description": "Percutaneous insertion of Tenckhoff catheter",
    "chapter": "Vascular System",
    "section": "Non-specific"
  },
  {
    "code": "X4120",
    "description": "Removal of Tenckhoff catheter",
    "chapter": "Vascular System",
    "section": "Non-specific"
  },
  {
    "code": "X4810",
    "description": "Change of cast without general anaesthetic (as sole procedure)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Fractures"
  },
  {
    "code": "X4822",
    "description": "Change of cast under general anaesthetic (as sole procedure)",
    "chapter": "Bones, Joints and Connective Tissue/Tendon Muscle",
    "section": "Fractures"
  },
  {
    "code": "X5020",
    "description": "External cardioversion",
    "chapter": "Thorax and Intra-Thoracic Organs",
    "section": "Other"
  },
  {
    "code": "X6002",
    "description": "Planning and preparation for the delivery of Stereotactic Body Radiotherapy (SBRT) / Stereotactic Ablative Radiotherapy (SABR)",
    "chapter": "Radiotherapy",
    "section": "Radiotherapy"
  },
  {
    "code": "X6004",
    "description": "Forward planning and preparation for the delivery of intensity modulated radiotherapy (IMRT), including adaptive IMRT",
    "chapter": "Radiotherapy",
    "section": "Radiotherapy"
  },
  {
    "code": "X6005",
    "description": "Inverse planning and preparation for the delivery of intensity modulated radiotherapy (IMRT), including adaptive IMRT",
    "chapter": "Radiotherapy",
    "section": "Radiotherapy"
  },
  {
    "code": "X6006",
    "description": "Planning and preparation for the delivery of static total body irradiation (TBI)",
    "chapter": "Radiotherapy",
    "section": "Radiotherapy"
  },
  {
    "code": "X6007",
    "description": "Planning and preparation for the delivery of rotational total body irradiation (TBI)",
    "chapter": "Radiotherapy",
    "section": "Radiotherapy"
  },
  {
    "code": "X6009",
    "description": "Planning and preparation for the delivery of Selective Internal Radiotherapy (SIRT)",
    "chapter": "Radiotherapy",
    "section": "Radiotherapy"
  },
  {
    "code": "X6010",
    "description": "Planning and preparation for the delivery of 3D conformal radiotherapy (3DCRT)",
    "chapter": "Radiotherapy",
    "section": "Radiotherapy"
  },
  {
    "code": "X6011",
    "description": "Planning and preparation for the delivery of superficial radiotherapy with imaging, dosimetry and calculation using orthovoltage",
    "chapter": "Radiotherapy",
    "section": "Radiotherapy"
  },
  {
    "code": "X6012",
    "description": "Planning and preparation for the delivery of magnetic resonance image (MRI) radiotherapy",
    "chapter": "Radiotherapy",
    "section": "Radiotherapy"
  },
  {
    "code": "X6013",
    "description": "Planning and preparation for the delivery of Proton Beam Therapy (PBT) for ocular tumours",
    "chapter": "Radiotherapy",
    "section": "Radiotherapy"
  },
  {
    "code": "X6014",
    "description": "Planning and preparation for the delivery of low dose brachytherapy (not otherwise specified)",
    "chapter": "Radiotherapy",
    "section": "Radiotherapy"
  },
  {
    "code": "X6015",
    "description": "Planning and preparation for the delivery of high dose brachytherapy (not otherwise specified)",
    "chapter": "Radiotherapy",
    "section": "Radiotherapy"
  },
  {
    "code": "X6016",
    "description": "Planning for electrons, single field or 2-dimensional radiotherapy on a megavoltage machine, including all imaging and dosimetry",
    "chapter": "Radiotherapy",
    "section": "Radiotherapy"
  },
  {
    "code": "X6017",
    "description": "Planning and preparation for the delivery of Proton Beam Therapy (PBT) for non-ocular paediatric tumours",
    "chapter": "Radiotherapy",
    "section": "Radiotherapy"
  },
  {
    "code": "X6018",
    "description": "Planning and preparation for the delivery of Proton Beam Therapy (PBT) for non-ocular adult tumours",
    "chapter": "Radiotherapy",
    "section": "Radiotherapy"
  },
  {
    "code": "X6019",
    "description": "Planning and preparation for the delivery of MR Linac adaptive planned radiotherapy",
    "chapter": "Radiotherapy",
    "section": "Radiotherapy"
  },
  {
    "code": "X6020",
    "description": "Planning and preparation of the delivery of Total body surface skin radiotherapy (TSEBT)",
    "chapter": "Radiotherapy",
    "section": "Radiotherapy"
  },
  {
    "code": "X6021",
    "description": "Planning & preparation for Intracranial Stereotactic Radiotherapy (SRT)",
    "chapter": "Radiotherapy",
    "section": "Radiotherapy"
  },
  {
    "code": "X6575",
    "description": "Planning, preparation and the delivery of peptide receptor radionuclide therapy for neuroendocrine tumours.",
    "chapter": "Radiotherapy",
    "section": "Radiotherapy"
  },
  {
    "code": "X6576",
    "description": "Lutetium 177 PSMA radionuclide therapy for metastatic prostate cancer",
    "chapter": "Radiotherapy",
    "section": "Radiotherapy"
  },
  {
    "code": "X6581",
    "description": "Clinical supervision of the delivery of a single fraction of radiotherapy",
    "chapter": "Radiotherapy",
    "section": "Radiotherapy"
  },
  {
    "code": "X6999",
    "description": "Planning and delivery of a single course of radiotherapy for keloid scar",
    "chapter": "Radiotherapy",
    "section": "Radiotherapy"
  },
  {
    "code": "X7000",
    "description": "Planning and delivery of a single course of radiotherapy for early Dupuytren's",
    "chapter": "Radiotherapy",
    "section": "Radiotherapy"
  },
  {
    "code": "X7001",
    "description": "Planning and delivery of intraoperative radiation therapy (IORT)",
    "chapter": "Radiotherapy",
    "section": "Radiotherapy"
  },
  {
    "code": "XR100",
    "description": "Fluoroscopically guided biopsy(ies)",
    "chapter": "Interventional Radiology",
    "section": "Biopsy"
  },
  {
    "code": "XR110",
    "description": "Ultrasound guided biopsy(ies)",
    "chapter": "Interventional Radiology",
    "section": "Biopsy"
  },
  {
    "code": "XR120",
    "description": "CT/MRI guided biopsy(ies)",
    "chapter": "Interventional Radiology",
    "section": "Biopsy"
  },
  {
    "code": "XR121",
    "description": "Unilateral image guided vacuum assisted excision of breast lesion (with biopsy)",
    "chapter": "Interventional Radiology",
    "section": "Biopsy"
  },
  {
    "code": "XR122",
    "description": "Bilateral image guided vacuum assisted excision of breast lesion (with biopsy)",
    "chapter": "Interventional Radiology",
    "section": "Biopsy"
  },
  {
    "code": "XR130",
    "description": "Transjugular/Transfemoral/plugged liver biopsy(ies)",
    "chapter": "Interventional Radiology",
    "section": "Biopsy"
  },
  {
    "code": "XR140",
    "description": "Unilateral stereotactic core biopsy breast",
    "chapter": "Interventional Radiology",
    "section": "Biopsy"
  },
  {
    "code": "XR142",
    "description": "Bilateral stereotactic core biopsy breasts",
    "chapter": "Interventional Radiology",
    "section": "Biopsy"
  },
  {
    "code": "XR160",
    "description": "Percutaneous image guided fine needle aspiration(s) (FNA) - unilateral",
    "chapter": "Interventional Radiology",
    "section": "Biopsy"
  },
  {
    "code": "XR161",
    "description": "Percutaneous image guided fine needle aspiration(s) (FNA) – bilateral",
    "chapter": "Interventional Radiology",
    "section": "Biopsy"
  },
  {
    "code": "XR170",
    "description": "Fluoroscopically guided drainage of fluid collection",
    "chapter": "Interventional Radiology",
    "section": "Drainage"
  },
  {
    "code": "XR180",
    "description": "Ultrasound guided drainage of fluid collection",
    "chapter": "Interventional Radiology",
    "section": "Drainage"
  },
  {
    "code": "XR181",
    "description": "Ultrasound guided insertion of tunneled abdominal or pleural drain",
    "chapter": "Interventional Radiology",
    "section": "Drainage"
  },
  {
    "code": "XR190",
    "description": "CT/MRI guided drainage of fluid collection",
    "chapter": "Interventional Radiology",
    "section": "Drainage"
  },
  {
    "code": "XR220",
    "description": "Seminal vesicle injection",
    "chapter": "Urinary System and Male Reproductive Organs",
    "section": "Genitalia"
  },
  {
    "code": "XR252",
    "description": "Venoplasty",
    "chapter": "Interventional Radiology",
    "section": "Angioplasty"
  },
  {
    "code": "XR254",
    "description": "Angioplasty of other arteries (e.g. sub-clavian, tibial, femoro-popliteal) including peripheral angiogram +/- insertion of stent",
    "chapter": "Interventional Radiology",
    "section": "Angioplasty"
  },
  {
    "code": "XR260",
    "description": "Angioplasty with insertion of metallic stent",
    "chapter": "Interventional Radiology",
    "section": "Angioplasty"
  },
  {
    "code": "XR270",
    "description": "Angioplasty with insertion of metallic stent - graft",
    "chapter": "Interventional Radiology",
    "section": "Angioplasty"
  },
  {
    "code": "XR280",
    "description": "Insertion of aortic metallic stent - graft",
    "chapter": "Interventional Radiology",
    "section": "Angioplasty"
  },
  {
    "code": "XR287",
    "description": "Catheter cerebral venography and manometry",
    "chapter": "Vascular System",
    "section": "Head and Neck"
  },
  {
    "code": "XR290",
    "description": "Cerebral angioplasty +/- insertion of metallic stent",
    "chapter": "Interventional Radiology",
    "section": "Angioplasty"
  },
  {
    "code": "XR302",
    "description": "Endovascular management of brain arteriovenous malformation (including 2 separate interventions)",
    "chapter": "Interventional Radiology",
    "section": "Embolisation"
  },
  {
    "code": "XR303",
    "description": "Additional management of brain arteriovenous malformation (per additional intervention)",
    "chapter": "Interventional Radiology",
    "section": "Embolisation"
  },
  {
    "code": "XR306",
    "description": "Endovascular treatment of cerebral aneurysm",
    "chapter": "Interventional Radiology",
    "section": "Embolisation"
  },
  {
    "code": "XR315",
    "description": "Endoluminal stone extraction from salivary duct under imaging control",
    "chapter": "Interventional Radiology",
    "section": "Head and Neck"
  },
  {
    "code": "XR320",
    "description": "Dilatation/stenting of nasolacrimal duct under imaging control",
    "chapter": "Interventional Radiology",
    "section": "Head and Neck"
  },
  {
    "code": "XR330",
    "description": "Gastric intubation under imaging control (as sole procedure)",
    "chapter": "Interventional Radiology",
    "section": "Gastrointestinal"
  },
  {
    "code": "XR352",
    "description": "Embolisation of artery / vein",
    "chapter": "Interventional Radiology",
    "section": "Embolisation"
  },
  {
    "code": "XR360",
    "description": "Embolisation of vascular mass (including uterine embolisation",
    "chapter": "Interventional Radiology",
    "section": "Embolisation"
  },
  {
    "code": "XR361",
    "description": "Prostate artery embolisation",
    "chapter": "Interventional Radiology",
    "section": "Embolisation"
  },
  {
    "code": "XR362",
    "description": "Embolisation of pelvic vein varices",
    "chapter": "Interventional Radiology",
    "section": "Embolisation"
  },
  {
    "code": "XR363",
    "description": "Portal vein embolisation (as sole procedure)",
    "chapter": "Interventional Radiology",
    "section": "Embolisation"
  },
  {
    "code": "XR365",
    "description": "Magnetic resonance image-guided focused ultrasound for ablation of uterine fibroids",
    "chapter": "Female Reproductive Organs",
    "section": "Uterus/Adnexa"
  },
  {
    "code": "XR370",
    "description": "Embolisation of bronchial artery",
    "chapter": "Interventional Radiology",
    "section": "Embolisation"
  },
  {
    "code": "XR380",
    "description": "Embolisation of aneurysm",
    "chapter": "Interventional Radiology",
    "section": "Embolisation"
  },
  {
    "code": "XR390",
    "description": "Embolisation of arteriovenous malformation of brain or major organ",
    "chapter": "Interventional Radiology",
    "section": "Embolisation"
  },
  {
    "code": "XR391",
    "description": "Embolisation of arteriovenous malformation (AVM) e.g. of foot, minor organ",
    "chapter": "Interventional Radiology",
    "section": "Embolisation"
  },
  {
    "code": "XR410",
    "description": "Thrombolysis or aspiration of thrombus under imaging control",
    "chapter": "Interventional Radiology",
    "section": "Thrombolysis"
  },
  {
    "code": "XR430",
    "description": "Renal angioplasty, +/- insertion of stent",
    "chapter": "Interventional Radiology",
    "section": "Angioplasty"
  },
  {
    "code": "XR442",
    "description": "Embolization of varicocele of gonadal vein",
    "chapter": "Interventional Radiology",
    "section": "Embolisation"
  },
  {
    "code": "XR450",
    "description": "Dilatation of stricture under imaging control",
    "chapter": "Interventional Radiology",
    "section": "Dilatation"
  },
  {
    "code": "XR500",
    "description": "Chemonucleolysis",
    "chapter": "Interventional Radiology",
    "section": "Spine"
  },
  {
    "code": "XR510",
    "description": "Fluoroscopically guided discectomy (including laser)",
    "chapter": "Interventional Radiology",
    "section": "Spine"
  },
  {
    "code": "XR516",
    "description": "Angioplasty of iliac artery, +/- insertion of stent",
    "chapter": "Interventional Radiology",
    "section": "Angioplasty"
  },
  {
    "code": "XR520",
    "description": "CT guided discectomy (including laser)",
    "chapter": "Interventional Radiology",
    "section": "Spine"
  },
  {
    "code": "XR521",
    "description": "Image guided basivertebral nerve ablation",
    "chapter": "Interventional Radiology",
    "section": "Spine"
  },
  {
    "code": "XR530",
    "description": "Fluoroscopically guided percutaneous vertebroplasty",
    "chapter": "Interventional Radiology",
    "section": "Spine"
  },
  {
    "code": "XR531",
    "description": "Coblation Vertebroplasty",
    "chapter": "Interventional Radiology",
    "section": "Spine"
  },
  {
    "code": "XR540",
    "description": "CT guided percutaneous vertebroplasty",
    "chapter": "Interventional Radiology",
    "section": "Spine"
  },
  {
    "code": "XR550",
    "description": "Transarterial chemoembolization (TACE), +/- drug eluting bead (DEB)",
    "chapter": "Interventional Radiology",
    "section": "Liver"
  },
  {
    "code": "XR565",
    "description": "Percutaneous dilatation of biliary stricture under imaging control",
    "chapter": "Interventional Radiology",
    "section": "Dilatation"
  },
  {
    "code": "XR570",
    "description": "Percutaneous insertion of plastic biliary endoprosthesis",
    "chapter": "Interventional Radiology",
    "section": "Liver"
  },
  {
    "code": "XR575",
    "description": "Percutaneous insertion of metallic biliary endoprosthesis",
    "chapter": "Interventional Radiology",
    "section": "Liver"
  },
  {
    "code": "XR576",
    "description": "Biliary drainage with occluded stent in place",
    "chapter": "Interventional Radiology",
    "section": "Liver"
  },
  {
    "code": "XR580",
    "description": "Percutaneous cholecystotomy",
    "chapter": "Interventional Radiology",
    "section": "Liver"
  },
  {
    "code": "XR585",
    "description": "Percutaneous gastrostomy (as sole procedure)",
    "chapter": "Interventional Radiology",
    "section": "Gastrointestinal"
  },
  {
    "code": "XR590",
    "description": "Percutaneous gastrojejunostomy (as sole procedure)",
    "chapter": "Interventional Radiology",
    "section": "Gastrointestinal"
  },
  {
    "code": "XR595",
    "description": "Insertion of tracheal/bronchial metallic stent",
    "chapter": "Interventional Radiology",
    "section": "Thorax"
  },
  {
    "code": "XR600",
    "description": "Insertion of oesophageal metallic stent under imaging control",
    "chapter": "Interventional Radiology",
    "section": "Thorax"
  },
  {
    "code": "XR610",
    "description": "Transjugular intrahepatic portosystemic shunt",
    "chapter": "Interventional Radiology",
    "section": "Liver"
  },
  {
    "code": "XR620",
    "description": "Renal/adrenal vein sampling",
    "chapter": "Interventional Radiology",
    "section": "Urinary"
  },
  {
    "code": "XR630",
    "description": "Percutaneous nephrostomy",
    "chapter": "Interventional Radiology",
    "section": "Urinary"
  },
  {
    "code": "XR640",
    "description": "Percutaneous creation of track to kidney for nephrolithotomy +/- insertion of stent",
    "chapter": "Interventional Radiology",
    "section": "Urinary"
  },
  {
    "code": "XR650",
    "description": "Percutaneous pyelolysis",
    "chapter": "Interventional Radiology",
    "section": "Urinary"
  },
  {
    "code": "XR660",
    "description": "Insertion of stent into ureter - unilateral",
    "chapter": "Interventional Radiology",
    "section": "Urinary"
  },
  {
    "code": "XR661",
    "description": "Insertion of stent into ureter - bilateral",
    "chapter": "Interventional Radiology",
    "section": "Urinary"
  },
  {
    "code": "XR670",
    "description": "Radiofrequency kidney ablation",
    "chapter": "Interventional Radiology",
    "section": "Urinary"
  },
  {
    "code": "XR910",
    "description": "Insertion of central venous catheter - non tunnelled (X-ray guided)",
    "chapter": "Interventional Radiology",
    "section": "Other"
  },
  {
    "code": "XR915",
    "description": "Insertion of central venous catheter - tunnelled (X-ray guided)",
    "chapter": "Vascular System",
    "section": "Non-specific"
  },
  {
    "code": "XR916",
    "description": "Surgical removal of cuffed central venous catheter - tunnelled (X-ray guided)",
    "chapter": "Vascular System",
    "section": "Non-specific"
  },
  {
    "code": "XR917",
    "description": "Peripherally inserted central venous catheters (PICCs) under X-ray guidance",
    "chapter": "Interventional Radiology",
    "section": "Other"
  },
  {
    "code": "XR918",
    "description": "Peripherally inserted central venous catheters (PICCs) (without X-ray guidance)",
    "chapter": "Interventional Radiology",
    "section": "Other"
  },
  {
    "code": "XR920",
    "description": "Cyst ablation under imaging control",
    "chapter": "Interventional Radiology",
    "section": "Other"
  },
  {
    "code": "XR930",
    "description": "Bilateral inferior petrosal sinus sampling",
    "chapter": "Interventional Radiology",
    "section": "Other"
  },
  {
    "code": "XR935",
    "description": "Insertion/Removal of vena cava filter",
    "chapter": "Interventional Radiology",
    "section": "Other"
  },
  {
    "code": "XR936",
    "description": "Insertion of guidewire and/or marker into breast lesion under imaging control",
    "chapter": "Interventional Radiology",
    "section": "Other"
  },
  {
    "code": "XR937",
    "description": "Insertion of magnetic marker for non-palpable breast lesions under imaging control",
    "chapter": "Interventional Radiology",
    "section": "Other"
  },
  {
    "code": "XR938",
    "description": "Insertion of reflective marker for non-palpable breast lesions under imaging control",
    "chapter": "Interventional Radiology",
    "section": "Biopsy"
  },
  {
    "code": "XR939",
    "description": "Insertion of radio-frequency identification tag for non-palpable breast lesions under imaging control",
    "chapter": "Interventional Radiology",
    "section": "Other"
  },
  {
    "code": "XR940",
    "description": "Retrieval of foreign body under X-ray guidance",
    "chapter": "Interventional Radiology",
    "section": "Other"
  },
  {
    "code": "XR950",
    "description": "Occlusion of fistula under imaging control",
    "chapter": "Interventional Radiology",
    "section": "Other"
  },
  {
    "code": "XR951",
    "description": "Ultrasound-guided compression repair of aneurysm (included pseudoaneurysm)",
    "chapter": "Interventional Radiology",
    "section": "Embolisation"
  },
  {
    "code": "XR960",
    "description": "Percutaneous thermal coagulation of mass",
    "chapter": "Interventional Radiology",
    "section": "Other"
  },
  {
    "code": "XR962",
    "description": "Percutaneous chemical ablation of tumour - Ultrasound guided",
    "chapter": "Interventional Radiology",
    "section": "Other"
  },
  {
    "code": "XR963",
    "description": "Percutaneous chemical ablation of tumour - CT guided",
    "chapter": "Interventional Radiology",
    "section": "Other"
  },
  {
    "code": "XR964",
    "description": "Ablation of liver lesion(s) (radiofrequency)",
    "chapter": "Interventional Radiology",
    "section": "Liver"
  },
  {
    "code": "XR967",
    "description": "CT guided thermocoagulation of osteoid osteoma",
    "chapter": "Interventional Radiology",
    "section": "Other"
  },
  {
    "code": "XR968",
    "description": "Colonic stent insertion",
    "chapter": "Interventional Radiology",
    "section": "Other"
  },
  {
    "code": "Y0910",
    "description": "Sclerosant injections - Prolotherapy (e.g. ligaments of back)",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Other Procedures"
  },
  {
    "code": "Y3300",
    "description": "Acupuncture - simple (less than 6 needles)",
    "chapter": "Investigations, simple procedures and consultation codes",
    "section": "Simple Procedures"
  },
  {
    "code": "Y3310",
    "description": "Acupuncture - complex (6 needles or more and/or stimulator)",
    "chapter": "Investigations, simple procedures and consultation codes",
    "section": "Simple Procedures"
  },
  {
    "code": "Y3320",
    "description": "Dry needling",
    "chapter": "Investigations, simple procedures and consultation codes",
    "section": "Simple Procedures"
  },
  {
    "code": "Y3800",
    "description": "Insertion of indwelling axillary catheter",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Other Procedures"
  },
  {
    "code": "Y3810",
    "description": "Insertion of indwelling pleural catheter",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Other Procedures"
  },
  {
    "code": "Y3811",
    "description": "Removal of indwelling pleural catheter performed by consultant",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Other Procedures"
  },
  {
    "code": "Y3820",
    "description": "Insertion of indwelling psoas catheter",
    "chapter": "Spine, Spinal Cord and Peripheral Nerves",
    "section": "Other Procedures"
  }
];
