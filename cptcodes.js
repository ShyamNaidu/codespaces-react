const cptcodes = {
		"CT Scan-Orbital Face&Neck-W/o Contrast-": "70480",
		"CT Scan-Orbital Face&Neck-W/ Contrast-": "70481",
		"CT Scan-Orbital Face&Neck-W/ & W/o Contrast-": "70482",
		"CT Scan-Maxillofacial-W/o Contrast-": "70486",
		"CT Scan-Maxillofacial-W/ Contrast-": "70487",
		"CT Scan-Maxillofacial-W/ & W/o Contrast-": "70488",
		"CT Scan-Soft Tissue Neck-W/o Contrast-": "70490",
		"CT Scan-Soft Tissue Neck-W/ Contrast-": "70491",
		"CT Scan-Soft Tissue Neck-W/ & W/o Contrast-": "70492",
		"CT Scan-Upper Extremity-W/o Contrast-": "73200",
		"CT Scan-Upper Extremity-W/ Contrast-": "73201",
		"CT Scan-Upper Extremity-W/ & W/o Contrast-": "73202",
		"CT Scan-Lower Extremity-W/o Contrast-": "73700",
		"CT Scan-Lower Extremity-W/ Contrast-": "73701",
		"CT Scan-Lower Extremity-W/ & W/o Contrast-": "73702",
		"CT Scan-Brain-W/o Contrast-": "70450",
		"CT Scan-Brain-W/ Contrast-": "70460",
		"CT Scan-Brain-W/ & W/o Contrast-": "70470",
		"CT Scan-Cervical Spine-W/o Contrast-": "72125",
		"CT Scan-Cervical Spine-W/ Contrast-": "72126",
		"CT Scan-Cervical Spine-W/ & W/o Contrast-": "72127",
		"CT Scan-Chest-W/o Contrast-": "71250",
		"CT Scan-Chest-W/ Contrast-": "71260",
		"CT Scan-Chest-W/ & W/o Contrast-": "71270",
		"CT Scan-Thoracic Spine-W/o Contrast-": "72128",
		"CT Scan-Thoracic Spine-W/ Contrast-": "72129",
		"CT Scan-Thoracic Spine-W/ & W/o Contrast-": "72130",
		"CT Scan-Abdomen & Pelvis-W/o Contrast-": "74176",
		"CT Scan-Abdomen & Pelvis-W/ Contrast-": "74177",
		"CT Scan-Abdomen & Pelvis-W/ & W/o Contrast-": "74178",
		"CT Scan-Lumbar Spine-W/o Contrast-": "72131",
		"CT Scan-Lumbar Spine-W/ Contrast-": "72132",
		"CT Scan-Lumbar Spine-W/ & W/o Contrast-": "72133",
		"MRI-Orbital Face&Neck-W/o Contrast-": "70540",
		"MRI-Orbital Face&Neck-W/ & W/o Contrast-": "70543",
		"MRI-TMJ-NA-": "70336",
		"MRI-Shoulder, Elbow or Wrist(Upper Extremity, Joint)-W/o Contrast-": "73221",
		"MRI-Shoulder, Elbow or Wrist(Upper Extremity, Joint)-W/ Contrast-": "73222",
		"MRI-Shoulder, Elbow or Wrist(Upper Extremity, Joint)-W/ & W/o Contrast-": "73223",
		"MRI-Humerus, Forearm or Hand(Upper Extremity, Non-Joint)-W/o Contrast-": "73218",
		"MRI-Humerus, Forearm or Hand(Upper Extremity, Non-Joint)-W/ & W/o Contrast-": "73220",
		"MRI-Hip, Knee, or Ankle, (Lower Extremity, Joint)-W/o Contrast-": "73721",
		"MRI-Hip, Knee, or Ankle, (Lower Extremity, Joint)-W/ Contrast-": "73722",
		"MRI-Hip, Knee, or Ankle, (Lower Extremity, Joint)-W/ & W/o Contrast-": "73723",
		"MRI-Thigh, Lower Leg or Foot(Lower Extremity, Non-Joint)-W/o Contrast-": "73718",
		"MRI-Thigh, Lower Leg or Foot(Lower Extremity, Non-Joint)-W/ & W/o Contrast-": "73720",
		"MRI-Brain-W/o Contrast-": "70551",
		"MRI-Brain-W/ & W/o Contrast-": "70553",
		"MRI-Cervical Spine-W/o Contrast-": "72141",
		"MRI-Cervical Spine-W/ & W/o Contrast-": "72156",
		"MRI-Chest(Clavicle)-W/o Contrast-": "71550",
		"MRI-Chest(Clavicle)-W/ & W/o Contrast-": "71552",
		"MRI-Breast-W/ & W/o Contrast-": "77059",
		"MRI-Thoracic Spine-W/o Contrast-": "72146",
		"MRI-Thoracic Spine-W/ & W/o Contrast-": "72157",
		"MRI-Abdomen-W/o Contrast-": "74181",
		"MRI-Abdomen-W/ & W/o Contrast-": "74183",
		"MRI-Lumbar Spine-W/o Contrast-": "72148",
		"MRI-Lumbar Spine-W/ & W/o Contrast-": "72158",
		"MRI-Pelvis-W/o Contrast-": "72195",
		"MRI-Pelvis-W/ & W/o Contrast-": "72197",
		"MRI-Abdomen-W/ Contrast-": "74182",
		"MRI-Brain-W/ Contrast-": "70552",
		"MRI-Breast-W/o Contrast-Bilateral": "77047",
		"MRI-Breast-W/ & W/o Contrast-Unilateral": "77048",
		"MRI-Breast-W/ & W/o Contrast-Bilateral": "77049",
		"MRI-Cervical Spine-W/ Contrast-": "72142",
		"MRI-Thigh, Lower Leg or Foot(Lower Extremity, Non-Joint)-W/ Contrast-": "73719",
		"MRI-Lumbar Spine-W/ Contrast-": "72149",
		"MRI-Orbital Face&Neck-W/ Contrast-": "70542",
		"MRI-Pelvis-W/ Contrast-": "72196",
		"MRI-Thoracic Spine-W/ Contrast-": "72147",
		"MRI-Humerus, Forearm or Hand(Upper Extremity, Non-Joint)-W/ Contrast-": "73219",
		"MRA-MRV(Angiography)-Abdomen-W/ 'or'  W/o Contrast-": "74185",
		"MRA-MRV(Angiography)-Chest(Excluding Myocardium)-W/ 'or'  W/o Contrast-": "71555",
		"MRA-MRV(Angiography)-Head-W/o Contrast-": "70544",
		"MRA-MRV(Angiography)-Head-W/ Contrast-": "70545",
		"MRA-MRV(Angiography)-Head-W/ & W/o Contrast-": "70546",
		"MRA-MRV(Angiography)-Lower Extremity-W/ 'or'  W/o Contrast-": "73725",
		"MRA-MRV(Angiography)-Neck-W/o Contrast-": "70547",
		"MRA-MRV(Angiography)-Neck-W/ Contrast-": "70548",
		"MRA-MRV(Angiography)-Neck-W/ & W/o Contrast-": "70549",
		"MRA-MRV(Angiography)-Pelvis-W/ 'or'  W/o Contrast-": "72198",
		"MRA-MRV(Angiography)-Upper extremity-W/ 'or'  W/o Contrast-": "73225",
		"MR Arthrogram-Hip, Knee, or Ankle, (Lower Extremity)-NA-": "77002, 73722, 23350, Q9967, A9575",
		"MR Arthrogram-Shoulder, Elbow or Wrist(Upper Extremity)-NA-": "77002, 73222, 23350, Q9967, A9575",
		"Non-MR Arthrogram-Ankle-NA-": "73615",
		"Non-MR Arthrogram-Elbow-NA-": "73085",
		"Non-MR Arthrogram-Hip-NA-": "73525",
		"Non-MR Arthrogram-Knee-NA-": "73580",
		"Non-MR Arthrogram-Shoulder-NA-": "73040",
		"Myelograms-Cervical-NA-": "72240",
		"Myelograms-Cervical/Throracic/ Lumbar (Injection)-NA-": "62284",
		"Myelograms-Thoracic-NA-": "72255",
		"Myelograms-Lumbrosacral-NA-": "72265",
		"CT Scan-Abdomen-W/o Contrast-": "74150",
		"CT Scan-Abdomen-W/ Contrast-": "74160",
		"CT Scan-Abdomen-W/ & W/o Contrast-": "74170",
		"CT Scan-Cardiac Score/Calcium Screening-NA-": "75571",
		"CT Scan-Chest-PE Protocol (Note:See CTA)-NA-": "71275",
		"CT Scan-Pelvis-W/ & W/o Contrast-": "72194",
		"CT Scan-Pevis-W/ Contrast-": "72193",
		"CT Scan-Pevis-W/o Contrast-": "72192",
		"CT Scan-3D Reconsturction-NA-": "76376/7",
		"CTA(Angiography)-Abdomen-W/ & W/o Contrast-": "74175",
		"CTA(Angiography)-Abdomen Aorta &Ext Runoff-W/ & W/o Contrast-": "75635",
		"CTA(Angiography)-Head-W/ & W/o Contrast-": "70496",
		"CTA(Angiography)-Neck-W/ & W/o Contrast-": "70498",
		"CTA(Angiography)-Pelvis-W/ & W/o Contrast-": "72191",
		"Special Procedures-Thoracic Vertebroplasty-NA-": "22510",
		"Special Procedures-Lumbar Vertebroplasty-NA-": "22511",
		"Special Procedures-Thoracic Kyphoplasty-NA-": "22512",
		"Special Procedures-Lumbar Kyphoplasty-NA-": "22514",
		"Special Procedures-Cervical ESI w/o imaging 6232I w/imaging-NA-": "62320",
		"Special Procedures-Thoracic ESI w/o imaging 6232I w/imaging-NA-": "62320",
		"Special Procedures-Lumbar ESI w/o imaging 62323 w/imaging-NA-": "62322",
		"Special Procedures-Lumbar Puncture-NA-": "62270",
		"Special Procedures-Cervical/Thoracic Discography-NA-": "62291",
		"Special Procedures-Lumbar Discography-NA-": "62290",
		"Special Procedures-Cervical/Thoracic Nerve Block-NA-": "64479",
		"Special Procedures-Lumbar Nerve Block, Lumbar or Sacral-NA-": "64483",
		"Special Procedures-Cervical/Thoracic Facet Block-NA-": "64490",
		"Special Procedures-Lumbar Facet Block-NA-": "64493",
		"Special Procedures-Trigger Point Injection (one or two Muscles)-NA-": "20552",
		"Special Procedures-Trigger Point Injection (three or more Muscles)-NA-": "20553",
		"Special Procedures-Angioplasty Femoral/Popliteal-NA-": "37224",
		"Special Procedures-Atherectomy Stent-NA-": "37227",
		"Special Procedures-Extremity Venogram Unilateral-NA-": "75820",
		"Special Procedures-Extremity Venogram Bilateral-NA-": "75822",
		"Special Procedures-Vein Ablation (First Vein Treatment)-NA-": "36478",
		"Special Procedures-Vein Ablation (Second Vein Treatment)-NA-": "36479",
		"Ultrasound-Abdominal Complete-NA-": "76700",
		"Ultrasound-Abdominal Limited-NA-": "76705",
		"Ultrasound-Aorta, IVC, Iliac; Duplex. Complete Bilateral-NA-": "93978",
		"Ultrasound-Arterial, Mesenteric, Visceral Duplex-NA-": "93976",
		"Ultrasound-Arterial ABI (Ankle Brachial/Arm Brachial)-NA-": "93922",
		"Ultrasound-Arterial Physiologic Bilateral (Extremity)-NA-": "93923",
		"Ultrasound-Arterial Duplex Doppler Lower Extremity Complete-NA-": "93925",
		"Ultrasound-Arterial Duplex Doppler Lower Extremity Limited-NA-": "93926",
		"Ultrasound-Arterial Duplex Doppler Upper Extremity Complete-NA-": "93930",
		"Ultrasound-Arterial Duplex Doppler Upper Extremity Limited-NA-": "93931",
		"Ultrasound-Aorta, IVC, Iliac; Duplex, Limited or Unilateral-NA-": "93979",
		"Ultrasound-Breast (Unilateral)-NA-": "76641",
		"Ultrasound-Carotids- Doppler Duplex Complete-NA-": "93880",
		"Ultrasound-Carotids- Doppler Duplex Limited-NA-": "93882",
		"Ultrasound-Cardiovascular Stress Test (Murfreesboro Only)-NA-": "93015",
		"Ultrasound-Echocardiogram- 2D-NA-": "93306",
		"Ultrasound-Extremity Non-Vascular Complete-NA-": "76881",
		"Ultrasound-Extremity Non-Vascular Limited-NA-": "76882",
		"Ultrasound-(Kidneys) Retroperitoneal Duplex Complete-NA-": "76770",
		"Ultrasound-(Kidney) Retroperitoneal, Limited-NA-": "76775",
		"Ultrasound-Pelvic Non-Obstetric Complete-NA-": "76856",
		"Ultrasound-Pelvic Non-Obstetric Limited or Follow-up-NA-": "76857",
		"Ultrasound-Pelvic Transvaginal Non-Obstetric-NA-": "76830",
		"Ultrasound-OB Ultrasound (less than 14 weeks)-NA-": "76801",
		"Ultrasound-OB Ultrasound (greater than 14 weeks)-NA-": "76805",
		"Ultrasound-Venous Duplex Doppler- Extremity Complete-NA-": "93970",
		"Ultrasound-Venous Duplex Doppler- Extremity Limited-NA-": "93971",
		"Ultrasound-Scrotum-NA-": "76870",
		"Ultrasound-Soft Tissue Head/Neck/Thyroid-NA-": "76536",
		"Ultrasound-Retroperitoneal Duplex Complete-NA-": "76770",
		"Ultrasound-Retroperitoneal, Limited-NA-": "76775",
		"Ultrasound-Upper Extremity Arteries Complete-NA-": "93930",
		"Ultrasound-Upper Extremity Arteries, Duplex, Limited or Unilatera-NA-": "93931",
		"Flouroscopy-Barium Swallow/Esophogram-NA-": "74220",
		"Flouroscopy-Barium Swallow Modified-NA-": "74230",
		"Flouroscopy-Colon, Barium Enema- with or without KUB-NA-": "74270",
		"Flouroscopy-Colon, Barium Enema With Air-NA-": "74280",
		"Flouroscopy-Fluoroscopy-NA-": "76000",
		"Flouroscopy-IVP- with or without KUB-NA-": "74400",
		"Flouroscopy-OCG- Oral Cholecystography-NA-": "74290",
		"Flouroscopy-Small Bowel-NA-": "74250",
		"Flouroscopy-UGI/Double Contrast- with KUB-NA-": "74247",
		"Flouroscopy-UGI/Small Bowel Follow Through (Double Contrast)-NA-": "74249",
		"Flouroscopy-UGI- Single Contrast- with KUB-NA-": "74241",
		"Flouroscopy-UGI/Small Bowel Follow Through (Single Contrast)-NA-": "74245",
		"Flouroscopy-VCUG (Voiding Cystogram)-NA-": "74455",
		"Women's Services-Bilateral Diagnostic Mammogram-NA-": "77066",
		"Women's Services-Screening Mammogram-NA-": "77067",
		"Women's Services-Unilateral Diagnostic Mammogram-NA-": "77065",
		"Women's Services-Bone Density (DEXA) Scan-NA-": "77080",
		"Nuclear Medicine-Bone Scan Limited Views-NA-": "78300",
		"Nuclear Medicine-Bone Scan Multiple Views-NA-": "78305",
		"Nuclear Medicine-Bone Scan Three Phase-NA-": "78315",
		"Nuclear Medicine-Bone Scan Whole Body-NA-": "78306",
		"Nuclear Medicine-Hepatobilary w/wo contrast, With Ejection Fraction (HIDA)-NA-": "78226",
		"Nuclear Medicine-Kidney Image With Flow & Function, Single W/Pharm-NA-": "78708",
		"Nuclear Medicine-MUGA First Pass Technique (Murfreesboro Only)-NA-": "78468",
		"Nuclear Medicine-Rest MUGA Gated Cardiac (Murfreesboro Only)-NA-": "78472",
		"Nuclear Medicine-Thyroid Imaging With Uptake, Multi-Determ Single or Multiple-NA-": "78012",
		"CT2020- ABDOMEN w/o contrast-W/o Contrast-": "74150",
		"CT2021- ABDOMEN w/ contrast-W/ Contrast-": "74160",
		"CT2022- ABDOMEN w/ & w/o contrast-W/ & W/o Contrast-": "74170",
		"CT2023- ABDOMEN & PELVIS w/o contrast-W/o Contrast-": "74176",
		"CT2024- ABDOMEN & PELVIS w/ contrast-W/ Contrast-": "74177",
		"CT2025- ANGIO ABD & PELVIS contrast w/ & w/o contrast-W/ & W/o Contrast-": "74174",
		"CT2026- ANGIO ABD w/ contrast/noncontrast-W/ CONTRAST/no Noncontrast-": "74175",
		"CT2027- ANGIO HEAD w/ and/or w/o contrast-w/ and / or w/o contrast-": "70496",
		"CT2028- ANGIO LOWER EXT w/ and/or w/o contrast-w/ and or w/o contrast-": "73706",
		"CT2029- ANGIO NECK w/ and/or w/o contrast-w/ and / or w/o contrast-": "70498",
		"CT2030- ANGIO PELVIS w/ and/or w/o contrast-w/ and / or w/o contrast-": "72191",
		"CT2031- ANGIO UPPER EXTREMITY w/ and/or w/o contrast-w/ and or w/o contrast-": "73206",
		"CT2032- ANGIOGRAPHY / CHEST w/ and/or w/o contrast-w/ and / or w/o contrast-": "71275",
		"CT2033- BRAIN w/o contrast-W/o Contrast-": "70450",
		"CT2034- BRAIN w/ contrast-W/ Contrast-": "70460",
		"CT2035- BRAIN w/ & w/o contrast-W/ & W/o Contrast-": "70470",
		"CT2036- CERVICAL SPINE w/ contrast-W/ Contrast-": "72125",
		"CT2037- CERVICAL SPINE w/ contrast-W/ Contrast-": "72126",
		"CT2038- CHEST w/o contrast-W/o Contrast-": "71250",
		"CT2039- CHEST w/ contrast-W/ Contrast-": "71260",
		"CT2040- COLONOGRAPHY DIAGNOSTIC-NA-": "74261",
		"CT2041- COLONOGRAPHY SCREENING-NA-": "74263",
		"CT2042- CLAUDICATION-NA-": "75635",
		"CT2043- FACE w/ contrast-W/ Contrast-": "70487",
		"CT2044- FACE w/ & w/o contrast-W/ & W/o Contrast-": "70488",
		"CT2045-KIDNEY-PELVIS w/ & w/o contrast also add  PANC PELVIS w/ & w/o contrast, LIVER PELVIS w/ & w/o contrast,  UROGRAM w/ & w/o contrast-W/ & W/o Contrast-": "74178",
		"CT2046- LOWER EXTREMITY w/o contrast-W/o Contrast-": "73700",
		"CT2047- LOWER EXTREMITY w/ contrast-W/ Contrast-": "73701",
		"CT2048- LOWER EXTREMITY w/ & w/o contrast-W/ & W/o Contrast-": "73702",
		"CT2049- LUMBAR SPINE w/o contrast-W/o Contrast-": "72131",
		"CT2050- LUMBAR SPINE w/ contrast-W/ Contrast-": "72132",
		"CT2051- LUNG SCREENING w/o contrast-W/o Contrast-": "G0297",
		"CT2052- MAXILLOFACIAL w/o contrast-W/o Contrast-": "70486",
		"CT2053- NECK SOFT TISSUE w/o contrast-W/o Contrast-": "70490",
		"CT2054- NECT SOFT TISSUE w/ contrast-W/ Contrast-": "70491",
		"CT2055- ORBIT / SKULL w/o contrast-W/o Contrast-": "70480",
		"CT2056- ORBIT / SKULL w/ contrast-W/ Contrast-": "70481",
		"CT2057- ORBIT / SKULL w/ & w/o contrast-W/ & W/o Contrast-": "70482",
		"CT2058- THORACIC SPINE w/o contrast-W/o Contrast-": "72128",
		"CT2059- THORACIC SPINE w/ contrast-W/ Contrast-": "72129",
		"CT2060- PELVIS w/o contrast-W/o Contrast-": "72192",
		"CT2061- PELVIS w/ contrast-W/ Contrast-": "72193",
		"CT2062- PELVIS w/ & w/o contrast-W/ & W/o Contrast-": "72194",
		"CT2063- SCANOGRAM-NA-": "77073",
		"CT2064- UPPER EXTREMITY w/o contrast-W/o Contrast-": "73200",
		"CT2065- UPPER EXTREMITY w/ contrast-W/ Contrast-": "73201",
		"CT2066- UPPER EXTREMITY w/ & w/o contrast-W/ & W/o Contrast-": "73202",
		"Flouroscopy-BARIUM ENEMA-NA-": "74270",
		"Flouroscopy- BARIUM ENEMA with AIR CONT-NA-": "74280",
		"Flouroscopy- ESOPHAGUS EXAM-NA-": "74220",
		"Flouroscopy- IVP-NA-": "74400",
		"Flouroscopy-SMALL BOWEL SERIES-NA-": "74250",
		"Flouroscopy-UGI & SB with AIR-NA-": "74249",
		"Flouroscopy-UPPER ESOPHAGRAM-NA-": "74210",
		"Flouroscopy-UPPER GI SERIES-NA-": "74241",
		"Flouroscopy-UPPER GI with SMALL BOWEL-NA-": "74245",
		"Flouroscopy-UPPER GI TRACT with AIR-NA-": "74247",
		"Mammo- 3D DIGITAL SCREENING-NA-": "77063",
		"Mammo- 3D DIGITAL DIAGNOSTIC BILATERAL-NA-": "77063",
		"Mammo- 3D DIGITAL DIAGNOSTIC UNILATERAL-NA-": "77063",
		"Mammo- DIAGNOSTIC BILATERAL-NA-": "77066",
		"Mammo- DIAGNOSTIC UNILATERAL-NA-": "77065",
		"Mammo- DIGITAL SCREENING-NA-": "77067",
		"Mammo-STEREOTACTIC BIOPSY-NA-": "19081",
		"Mammo-STEREOTACTIC BIOPSY additional site-NA-": "19082",
		"MRI-ABD / PEL / LOWER EXTREMITY w/ & w/o contrast with 72198 and 73725-W/ & W/o Contrast-": "74185",
		"MRI-MRA ANGIO LOWER EXTREMITY-NA-": "73725",
		"MRI-MRA ABDOMEN-NA-": "74185",
		"MRI- ABDOMEN w/ contrast-W/ contrast-": "74181",
		"MRI- ABDOMEN w/ contrast-W/ contrast-": "74182",
		"MRI- ABDOMEN w/ & w/o contrast-w/ & w/o contrast-": "74183",
		"MRI- BRAIN w/o contrast-W/o Contrast-": "70551",
		"MRI- BRAIN w/ contrast-w/ contrast-": "70552",
		"MRI- BRAIN w/ & w/o contrast-w/ & w/o contrast-": "70553",
		"MRI- BRAIN SPECTROSCOPY-NA-": "76390",
		"MRI-BREAST BILATERAL without contrast (IMPLANTS)-W/o Contrast-": "77047",
		"MRI-BREAST (Left or Right) w/o contrast-W/o Contrast-": "77046",
		"MRI- BREAST (Left or Right) w/ & w/o contrast-W/ & W/o Contrast-": "77048",
		"MRI- BREAST LOCALIZATION-NA-": "77021",
		"MRI- BREAST w/ & w/o contrast-w/ & w/o contrast-": "77049",
		"MRI- CERV SPINE w/o contrast-W/o Contrast-": "72141",
		"MRI- CERV SPINE w/ contrast-w/ contrast-": "72142",
		"MRI- CERV SPINE w/ & w/o contrast-W/ & W/o Contrast-": "72156",
		"MRI- CHEST w/o contrast-W/o Contrast-": "71550",
		"MRI- CHEST w/ contrast-W/ contrast-": "71551",
		"MRI- CHEST w/ & w/o contrast-w/ & w/o contrast-": "71552",
		"MRI- CHEST-NA-": "71555",
		"MRI-ELASTOGRAPHY-NA-": "76391",
		"MRI- ENTEROGRAPHY w/ & w/o contrast-w/ & w/o contrast-": "74183",
		"MRI-MRA HEAD w/o contrast-W/o Contrast-": "70544",
		"MRI-MRA HEAD w/ contrast-W/ contrast-": "70545",
		"MRI-MRA HEAD w/ & w/o contrast-w/ & w/o contrast-": "70546",
		"MRI- JOINT LOW EXTREMITY w/ & w/o contrast-W/ & W/o Contrast-": "73723",
		"PET- BRAIN IMAG-NA-": "78608",
		"PET- SCAN WITH CT Limited-NA-": "78814",
		"PET- SCAN with CT Skull to mid thigh-NA-": "78815",
		"PET- SCAN with CT full body-NA-": "78816",
		"US-FIBROSCAN-NA-": "91200",
		"US- ABDOMEN COMPLETE-NA-": "76700",
		"US- ABDOMEN LIMITED-NA-": "76705",
		"US- ABDOMEN with Doppler-NA-": "76700",
		"US- ABDOMINAL WALL-NA-": "76705",
		"US- AORTA-NA-": "76775",
		"US- AORTA, AAA SCREENING-NA-": "76706",
		"US- AXILLA-NA-": "76882",
		"US- BREAST BIOPSY-NA-": "19083",
		"US- BREAST BIOPSY - each additional lesion-NA-": "19084",
		"US- BREAST FNA/FINE NEEDLE ASPIRATION including Ultrasound Guidance - First lesion-NA-": "10005",
		"US- BREAST FNA/FINE NEEDLE ASPIRATION - additional lesions-NA-": "10006",
		"US- BREAST LIMITED DIAGNOSTIC EXAM-NA-": "76642",
		"US- BREAST SCREENING OR DIAGNOSTIC-NA-": "76641",
		"US- DOPPLER CAROTID ARTERY-NA-": "93880",
		"US- DOPPLER LOWER EXTREMITY VENOUS - BILATERAL-NA-": "93970",
		"US- DOPPLER LOWER EXTREMITY VENOUS - UNILATERAL-NA-": "93971",
		"US- DOPPLER UPPER EXTREMITY VENOUS - BILATERAL-NA-": "93970",
		"US- DOPPLER UPPER EXTREMITY VENOUS - UNILATERAL-NA-": "93971",
		"US- DOPPLER, ABDOMINAL/PELVIC-NA-": "93975",
		"US- DUPLEX SCAN LOW EXT ARTERY - r/o pseudoaneurysm-NA-": "93926",
		"US- ELASTOGRAPHY-NA-": "76981",
		"US- EXTREMITY NON VASCULAR-NA-": "76881",
		"US- EXTREMITY NON VASCULAR LIMITED-NA-": "76882",
		"US- INGUINAL CANAL-NA-": "76705",
		"US- OB 1st TRIMESTER TRANSVAGINAL-NA-": "76817",
		"US- OB FIRST TRIMESTER-NA-": "76801",
		"US- OB FIRST TRIMESTER - additional fetus-NA-": "76812",
		"US- PARATHYROID-NA-": "76536",
		"US- PELVIS MALE-NA-": "76856",
		"US- PELVIS - TRANSVAGINAL-NA-": "76830",
		"US- PELVIS - TRANSVAGINAL with Doppler-NA-": "76830",
		"US- PELVIS - NON OB-NA-": "76856",
		"US- PELVIS - NON OB LIMITED-NA-": "76857",
		"US- PELVIS - NON OB with Doppler-NA-": "76856",
		"US- RENAL-NA-": "76770",
		"US- RENAL with Doppler-NA-": "76770",
		"US- Soft Tissue Neck (thyroid, parathyroid, etc.)-NA-": "76536",
		"US- TESTICULAR-NA-": "76870",
		"US- TESTICULAR with Doppler-NA-": "76870",
		"US- THYROID-NA-": "76536",
		"US- THYROID FNA/FINE NEEDLE ASPIRATION including Ultrasound Guidance - First lesion-NA-": "10005",
		"US- THYROID FNA/FINE NEEDLE ASPIRATION -additional lesions-NA-": "10006",
		"US- TRANSPLANTED KIDNEY-NA-": "76776",
		"Nuclear Medicine-MYOCARDIAL PERFUSION Imaging/Exercise with 93015-NA-": "78452",
		"Nuclear Medicine-MYOCARDIAL PERFUSION Imaging/Pharmacologic with 93015-NA-": "78452",
		"Nuclear Medicine- BONE SCAN WHOLE BODY-NA-": "78306",
		"Nuclear Medicine-BONE SCAN 3 PHASE-NA-": "78315",
		"Nuclear Medicine- Brain Spect (DaTscan)-NA-": "78607",
		"Nuclear Medicine- EXAM THYROID (UPTAKE only)-NA-": "78012",
		"Nuclear Medicine-NUCLEAR EXAM THYROID (with UPTAKE) (single or muliple quantitative measurements)-NA-": "78014",
		"Nuclear Medicine-NUCLEAR EXAM PARATHYROID SCAN-NA-": "78070",
		"Nuclear Medicine-NUCLEAR EXAM PARATHYROID SCAN with SPECT-NA-": "78071",
		"Nuclear Medicine- GALLIUM SCAN-NA-": "78800",
		"Nuclear Medicine- HEPATOBILIARY SCAN-NA-": "78226",
		"Nuclear Medicine- HEPATOBILIARY SCAN with PHARM-NA-": "78227",
		"Nuclear Medicine- LIVER SCAN SPECT (HEMANGIOMA)-NA-": "78206",
		"Nuclear Medicine- LIVER / SPLEEN SCAN static-NA-": "78215",
		"Nuclear Medicine- MECKELS SCAN-NA-": "78290",
		"Nuclear Medicine- MUGA SCAN CARDIA IMAGING-NA-": "78472",
		"Nuclear Medicine- OCTREO SCAN-NA-": "78804",
		"Nuclear Medicine- RENAL SCAN with MAG 3-NA-": "78707",
		"Nuclear Medicine- RENAL SCAN with LASIX or CAPTOPRIL-NA-": "78708",
		"X-Ray- ABDOMEN KUB 1 VIEW-NA-": "74018",
		"X-Ray- ABDOMEN 2 VIEWS-NA-": "74019",
		"X-Ray- ACOMIOCLAVICULAR JOINTS-NA-": "73050",
		"X-Ray- ANKLE R / L / BILATERAL 2 VIEWS-NA-": "73600",
		"X-Ray-ANKLE L / R / BILATERAL 3 VIEWS-NA-": "73610",
		"X-Ray- BONE AGE-NA-": "77072",
		"X-Ray- BONE EVALUATION INFANT-NA-": "77076",
		"X-Ray- BONE LENGTH STUDY-NA-": "77073",
		"X-Ray- BONE SURVEY ADULT COMPLETE-NA-": "77075",
		"X-Ray- CERVICAL SPINE < 4 VIEWS-NA-": "72040",
		"X-Ray- CERVICAL SPINE 4 or 5 VIEWS-NA-": "72050",
		"X-Ray- CHEST 1 VIEW-NA-": "71045",
		"X-Ray- CHEST 2 VIEWS-NA-": "71046",
		"X-Ray- CHEST with APICAL LORDO-NA-": "71047",
		"X-Ray- CHEST with OBLIQUE PROJEC-NA-": "71048",
		"X-Ray- CLAVICLE 2 VIEWS-NA-": "73000",
		"X-Ray- COCCYX / SACRUM 2 VIEWS-NA-": "72220",
		"X-Ray-DEXA (hips, pelvis, spine) with FRAX (all patients 40-90)-NA-": "77085",
		"X-Ray-DEXA / BONE DENSITY STUDY (hips, pelvis, spine) (patients <40 or >90)-NA-": "77080",
		"X-Ray-ELBOW L / R-NA-": "73070",
		"X-Ray- EYE for FOREIGN BOD-NA-": "70030",
		"X-Ray- EXAM of ABDOMEN KUB with OBLIQUE-NA-": "74021",
		"X-Ray- EXAM of KNEE L / R / BILATERAL ANIKA 4 VIEWS-NA-": "73564",
		"X-Ray- EXAM of MANDIBLE 4 VIEWS-NA-": "70110",
		"X-Ray- FACIAL BONES 3 VIEWS-NA-": "70150",
		"X-Ray- FEMUR L / R / BILATERAL 2 VIEWS-NA-": "73552",
		"X-Ray- FINGERS L / R / BILATERAL MIN 2 VIEWS-NA-": "73140",
		"X-Ray- FOREARM L / R TWO VIEWS-NA-": "73090",
		"X-Ray- FOOT L / R 2 VIEWS-NA-": "73620",
		"X-Ray- FOOT L / R / BILATERAL 3 VIEWS COMPLETE-NA-": "73630",
		"X-Ray- HAND L / R 2 VIEWS-NA-": "73120",
		"X-Ray- HAND L / R / BILATERAL MIN 3 VIEWS-NA-": "73130",
		"X-Ray- HEEL / CALCANEUS L / R / BILATERAL 2 VIEWS-NA-": "73650",
		"X-Ray- HIP UNILATERAL with PELVIS 1 VIEW-NA-": "73501",
		"X-Ray- HIP L / R with or without PELVIS MIN 2-3 VIEWS-NA-": "73502",
		"X-Ray- HIP L / R with or without PELVIS MIN 4 VIEWS-NA-": "73503",
		"X-Ray- Hips Bilateral with Pelvis 2 views-NA-": "73521",
		"X-Ray- Hips Bilateral with Pelvis 3 - 4 views-NA-": "73522",
		"X-Ray- Hips Bilateral with Pelvis min 5 views-NA-": "73523",
		"X-Ray- Humerus L/R 2 views-NA-": "73060",
		"X-Ray- IVP-NA-": "74400",
		"X-Ray- Kneel L/R Bilateral 2 views-NA-": "73560",
		"X-Ray- Kneel L/R Bilateral 3 views-NA-": "73562",
		"X-Ray- Lumbar Spine < 4 views-NA-": "72100",
		"X-Ray- Lumbar Spine  4 views-NA-": "72110",
		"X-Ray- Lumbar Spine  6 views-NA-": "72114",
		"X-Ray- Mastoids-NA-": "70130",
		"X-Ray- Nasal Bones 3 views+-NA-": "70160",
		"X-Ray- Neck Soft Tissue-NA-": "70360",
		"X-Ray- Orbits-NA-": "70200",
		"X-Ray- Pelvis 1 or 2 views-NA-": "72170",
		"X-Ray- Ribs L/R/Bilateral 3 views-NA-": "71100",
		"X-Ray- Ribs L/R/Bilateral Incl Chest 4 views-NA-": "71101",
		"X-Ray- Ribs (Bilateral)-NA-": "71110",
		"X-Ray- Sacroiliac Joints L/R 3 views-NA-": "72200",
		"X-Ray- Sacroiliac Joints Bilateral 3 views-NA-": "72202",
		"X-Ray- Sinuses <3 views-NA-": "70210",
		"X-Ray- Sinuses 3 or More views-NA-": "70220",
		"X-Ray- Skull 4 views-NA-": "70260",
		"X-Ray- Spine Cerv Incl Obli Flex and Ext 6 Views-NA-": "72052",
		"X-Ray- Spine Entire Survey / Scoliosis Study-NA-": "72082",
		"X-Ray-Sternum 2 views-NA-": "71120",
		"X-Ray-Sterno Clavi joint 3 views-NA-": "71130",
		"X-Ray-Thoracic Spine 2 Views-NA-": "72070",
		"X-Ray-Scapula, Complete-NA-": "73010",
		"X-Ray-Shoulder L/R/Bilateral 3 views-NA-": "73030",
		"X-Ray-Single Film to R/O FB-NA-": "76010",
		"X-Ray-Smith and Nephew / Visionaire (Lowe ext)-NA-": "77077",
		"X-Ray-Tibia/Fibula L/R/Bilateral-NA-": "73590",
		"X-Ray-TMJ-NA-": "70330",
		"X-Ray-Toe(s) L/R 2 views-NA-": "73660",
		"X-Ray-Wrist R/L 2 views-NA-": "73100",
		"X-Ray-Wrist R/L Min 3 views-NA-": "73110"

}

