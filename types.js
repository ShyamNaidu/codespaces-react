const types = {
    "CT_ScanAbdomen": "3",
    "CT_ScanAbdomen & Pelvis": "3",
    "CT_ScanBrain": "3",
    "CT_ScanCervical Spine": "3",
    "CT_ScanChest": "3",
    "CT_ScanLower Extremity": "3",
    "CT_ScanLumbar Spine": "3",
    "CT_ScanMaxillofacial": "3",
    "CT_ScanOrbital Face, Neck & Skull": "3",
    "CT_ScanSoft Tissue Neck": "3",
    "CT_ScanThoracic Spine": "3",
    "CT_ScanUpper Extremity": "3",
    "MR_AngiographyHead and Neck": "3",
    "MR_AngiographyNeck": "3",
    "MRIAbdomen": "3",
    "MRIBrain": "3",
    "MRICervical Spine": "3",
    "MRIChest": "3",
    "MRIHip, Knee, or Ankle, (Lower Extremity, Joint)": "3",
    "MRIHumerus, Forearm or Hand(Upper Extremity, Non-Joint)": "3",
    "MRILumbar Spine": "3",
    "MRIOrbital Face&Neck": "3",
    "MRIPelvis": "3",
    "MRIShoulder, Elbow or Wrist(Upper Extremity, Joint)": "3",
    "MRIThigh, Lower Leg or Foot(Lower Extremity, Non-Joint)": "3",
    "MRIThoracic Spine": "3",
    "CT_ScanPevis": "7",
    "MRIBreast": "4",
    "CT_AngiographyAbdomen": "8",
    "CT_AngiographyAbdomen Aorta & Lower Extremities": "8",
    "CT_AngiographyCHEST - Non-coronary": "5",
    "CT_AngiographyHead": "5",
    "CT_AngiographyNeck": "5",
    "CT_AngiographyPelvis": "2",
    "CT_Scan3D Reconsturction": "1",
    "CT_ScanAbdomen & Pelvis (Angiogram)": "2",
    "CT_ScanCardiac Score/Calcium Screening": "1",
    "CT_ScanColonography Diagnostic": "1",
    "CT_ScanColonography Screening": "1",
    "CT_ScanLower Extremity (Angiogram)": "5",
    "CT_ScanLuing Screening": "9",
    "CT_ScanPelvis": "2",
    "CT_ScanUpper Extremity (Angiogram)": "5",
    "EMG_NCV<4 Muscles Tested": "1",
    "EMG_NCV5 or more muscles tested (Complete)": "1",
    "EMG_NCVNon-Extrimity": "1",
    "FlouroscopyBarium Enema - COLON": "8",
    "FlouroscopyBarium Enema with AIR CONT": "1",
    "FlouroscopyBarium Swallow / Esophagus Exam": "6",
    "FlouroscopyBarium Swallow / Esophagus Exam (Double Contrast)": "1",
    "FlouroscopyIntravenous Urography, or Pyelography W/ or W/o KUB": "1",
    "FlouroscopyOCG- Oral Cholecystography": "1",
    "FlouroscopySmall Bowel": "1",
    "FlouroscopyUGI / Small Bowel Follow Through (Double Contrast)": "1",
    "FlouroscopyUGI / Small Bowel Follow Through W/ Air": "1",
    "FlouroscopyUGI- Single Contrast W/ KUB": "1",
    "FlouroscopyUGI/Small Bowel Follow Through (Single Contrast)": "1",
    "FlouroscopyUpper Esophagram": "1",
    "FlouroscopyUpper Gastro Intestinal(GI) Tract W/ Air": "1",
    "FlouroscopyUpper Gastro Intestinal(GI) Tract W/ KUB": "1",
    "FlouroscopyVCUG (Voiding Cystogram)": "1",
    "Mammo3D DIGITAL SCREENING": "1",
    "MammoMammogram (Diagnostic)": "1",
    "MammoScreening Mammogram (Digital)": "1",
    "MammoStereotactic Biopsy": "1",
    "MammoStereotactic Biopsy additional site": "1",
    "MR_AngiographyAbdomen": "8",
    "MR_AngiographyChest or Thorax": "8",
    "MR_AngiographyLower Extremity": "8",
    "MR_AngiographyPelvis": "8",
    "MR_AngiographyUpper extremity": "8",
    "MR_ArthrogramHip, Knee, or Ankle, (Lower Extremity)": "1",
    "MR_ArthrogramShoulder, Elbow or Wrist(Upper Extremity)": "1",
    "MRIBrain Spectroscopy": "1",
    "MRIBREAST (Left or Right) w/o contrast": "9",
    "MRIBreast Localization": "1",
    "MRITMJ": "1",
    "MyelogramsCervical": "1",
    "MyelogramsCervical/Throracic/ Lumbar (Injection)": "1",
    "MyelogramsLumbrosacral": "1",
    "MyelogramsThoracic": "1",
    "NonMR_ArthrogramAnkle": "1",
    "NonMR_ArthrogramElbow": "1",
    "NonMR_ArthrogramHip": "1",
    "NonMR_ArthrogramKnee": "1",
    "NonMR_ArthrogramShoulder": "1",
    "Nuclear_MedicineBone Scan Limited Views": "1",
    "Nuclear_MedicineBone Scan Multiple Views": "1",
    "Nuclear_MedicineBone Scan Three Phase": "1",
    "Nuclear_MedicineBone Scan Whole Body": "1",
    "Nuclear_MedicineBrain Spect (DaTscan)": "1",
    "Nuclear_MedicineGallium Scan": "1",
    "Nuclear_MedicineHepatobilary With Ejection Fraction (HIDA)": "8",
    "Nuclear_MedicineHepatobiliary Scan with Pharm": "1",
    "Nuclear_MedicineKidney Image With Flow & Function, Single W/Pharm": "1",
    "Nuclear_MedicineLiver Scan Spect (Hemangioma)": "1",
    "Nuclear_MedicineLiver/Spleen Scan Static": "1",
    "Nuclear_MedicineMeckels Scan": "1",
    "Nuclear_MedicineMUGA First Pass Technique (Murfreesboro Only)": "1",
    "Nuclear_MedicineMYOCARDIAL PERFUSION Imaging/Pharmacologic with 93015": "1",
    "Nuclear_MedicineNuclear Exam Parathyroid Scan": "1",
    "Nuclear_MedicineNuclear Exam Parathyroid Scan with Spect": "1",
    "Nuclear_MedicineNUCLEAR EXAM THYROID (with UPTAKE) (single or muliple quantitative measurements)": "1",
    "Nuclear_MedicineOctreo Scan": "1",
    "Nuclear_MedicineRenal Scan w. Mag 3": "1",
    "Nuclear_MedicineRest MUGA Gated Cardiac (Murfreesboro Only)": "1",
    "Nuclear_MedicineThyroid Imaging With Uptake, Multi-Determ Single or Multiple": "1",
    "PETBrain Imag": "1",
    "PETScan with CT full body": "1",
    "PETScan with CT Limited": "1",
    "PETScan with CT Skull to mid thigh": "1",
    "Special_ProceduresAngioplasty Femoral/Popliteal": "1",
    "Special_ProceduresAtherectomy Stent": "1",
    "Special_ProceduresCervical or Thoracic ESI w/ imaging": "1",
    "Special_ProceduresCervical or Thoracic ESI w/o imaging": "1",
    "Special_ProceduresCervical/Thoracic Discography": "1",
    "Special_ProceduresCervical/Thoracic Facet Block": "1",
    "Special_ProceduresCervical/Thoracic Nerve Block": "1",
    "Special_ProceduresExtremity Venogram Bilateral": "1",
    "Special_ProceduresExtremity Venogram Unilateral": "1",
    "Special_ProceduresLumbar Discography": "1",
    "Special_ProceduresLumbar ESI w/ imaging": "1",
    "Special_ProceduresLumbar ESI w/o imaging": "1",
    "Special_ProceduresLumbar Facet Block": "1",
    "Special_ProceduresLumbar Kyphoplasty": "1",
    "Special_ProceduresLumbar Nerve Block, Lumbar or Sacral": "1",
    "Special_ProceduresLumbar Puncture w/ Imaging": "1",
    "Special_ProceduresLumbar Vertebroplasty": "1",
    "Special_ProceduresThoracic Kyphoplasty": "1",
    "Special_ProceduresThoracic Vertebroplasty": "1",
    "Special_ProceduresTrigger Point Injection (one or two Muscles)": "1",
    "Special_ProceduresTrigger Point Injection (three or more Muscles)": "1",
    "Special_ProceduresVein Ablation (First Vein Treatment)": "1",
    "Special_ProceduresVein Ablation (Second Vein Treatment)": "1",
    "UltrasoundAbdominal Complete": "1",
    "UltrasoundAbdominal Limited": "1",
    "UltrasoundAorta, AAA Screening": "1",
    "UltrasoundAorta, IVC, Iliac; Duplex, Limited or Unilateral": "1",
    "UltrasoundAorta, IVC, Iliac; Duplex. Complete Bilateral": "1",
    "UltrasoundArterial ABI (Ankle Brachial/Arm Brachial)": "1",
    "UltrasoundArterial Duplex Doppler Lower Extremity Complete": "1",
    "UltrasoundArterial Duplex Doppler Lower Extremity Limited": "1",
    "UltrasoundArterial Duplex Doppler Upper Extremity Complete": "1",
    "UltrasoundArterial Duplex Doppler Upper Extremity Limited": "1",
    "UltrasoundArterial Physiologic Bilateral (Extremity)": "1",
    "UltrasoundArterial, Mesenteric, Visceral Duplex": "1",
    "UltrasoundBreast (Unilateral)": "1",
    "UltrasoundBreast Biopsy": "1",
    "UltrasoundBreast Biopsy - each additional lesion": "1",
    "UltrasoundBREAST FNA/FINE NEEDLE ASPIRATION - additional lesions": "1",
    "UltrasoundBREAST FNA/FINE NEEDLE ASPIRATION including Ultrasound Guidance - First lesion": "1",
    "UltrasoundBreast Limited Diagnostics Exam": "1",
    "UltrasoundCardiovascular Stress Test (Murfreesboro Only)": "1",
    "UltrasoundCarotids- Doppler Duplex Complete": "1",
    "UltrasoundCarotids- Doppler Duplex Limited": "1",
    "UltrasoundDoppler Lower Extremity Venous": "1",
    "UltrasoundDoppler, Abdominal/Pelvic": "1",
    "UltrasoundEchocardiogram- 2D": "1",
    "UltrasoundElastography": "1",
    "UltrasoundExtremity Non-Vascular Complete": "1",
    "UltrasoundExtremity Non-Vascular Limited": "1",
    "UltrasoundFibroscan": "1",
    "UltrasoundOB - 1st Trimester Transvaginal": "1",
    "UltrasoundOB 1st Trimester (additional fetus)": "1",
    "UltrasoundOB first Trimester": "1",
    "UltrasoundOB Ultrasound (greater than 14 weeks)": "1",
    "UltrasoundPelvic Non-Obstetric Complete": "1",
    "UltrasoundPelvic Non-Obstetric Limited or Follow-up": "1",
    "UltrasoundPelvic Transvaginal Non-Obstetric": "1",
    "UltrasoundRetroperitoneal Duplex Complete": "1",
    "UltrasoundRetroperitoneal, Limited": "1",
    "UltrasoundScrotum / Tetiscular": "1",
    "UltrasoundSoft Tissue Head": "1",
    "UltrasoundSoft Tissue Neck": "1",
    "UltrasoundSoft Tissue Thyroid/Parathyroid": "1",
    "UltrasoundTransplanted Kidney": "1",
    "UltrasoundVenous Duplex Doppler- Extremity Complete": "1",
    "XRayAbadomen(1 View)": "1",
    "XRayAbadomen(2 Views)": "1",
    "XRayAcomioclavicular Joints": "1",
    "XRayAngkle left & right (2 VIEWS)": "1",
    "XRayAngkle left & right (3 VIEWS)": "1",
    "XRayBone Density (DEXA) Scan": "1",
    "XRayBone Evaluation Infant": "1",
    "XRayBone Length Study": "1",
    "XRayBone Survey Adult Complete": "1",
    "XRayBoneage": "1",
    "XRayCervical Spine (<4 Views)": "1",
    "XRayCervical Spine (4 or 5 Views)": "1",
    "XRayChest (1 View)": "1",
    "XRayChest (2 Views)": "1",
    "XRayChest with Apical Lordo": "1",
    "XRayChest with Oblique Projec": "1",
    "XRayClavicle (2 Views)": "1",
    "XRayCoccyx / Sacrum (2 Views)": "1",
    "XRayDEXA (hips, pelvis, spine) with FRAX (all patients 40-90)": "1",
    "XRayElbow left /right": "1",
    "XRayExam of Abdomen KUB with Oblique": "1",
    "XRayExam of Knee left or Right - ANIKA (4 Views)": "1",
    "XRayExam OF Mandible (4 views)": "1",
    "XRayFacial Bones (3 Views)": "1",
    "XRayFemur left /right (2 Views)": "1",
    "XRayFingers left /right (2 Views)": "1",
    "XRayFoot left /right (2 Views)": "1",
    "XRayFoot left /right (3 Views - Complete)": "1",
    "XRayForearm left /right (2 Views)": "1",
    "XRayHand left /right (2 Views)": "1",
    "XRayHand left /right (3 Views)": "1",
    "XRayHeel/Calcaneus left /right (2 Views)": "1",
    "XRayHip left /right W/ or W/o Pelvis(2-3 Views)": "1",
    "XRayHip left /right W/ or W/o Pelvis(4 Views)": "1",
    "XRayHip With Pelvis (1 View)": "1",
    "XRayHips with Pelvis (2 views)": "1",
    "XRayHips with Pelvis (3 - 4 views)": "1",
    "XRayHips with Pelvis (5 or more views)": "1",
    "XRayHumerus left /right (2 views)": "1",
    "XRayKnee left /right Bilateral (2 views)": "1",
    "XRayKnee left /right Bilateral (3 views)": "1",
    "XRayLumbar Spine (<4 views)": "1",
    "XRayLumbar Spine (4 views)": "1",
    "XRayLumbar Spine (6 views)": "1",
    "XRayMastoids": "1",
    "XRayNasal Bones (3 or more views)": "1",
    "XRayNeck Soft Tissue": "1",
    "XRayOrbital Xray": "1",
    "XRayOrbital Xray (Minimum 4 Views)": "1",
    "XRayPelvis (1-2 views)": "1",
    "XRayRibs": "1",
    "XRayRibs left /right (3 views)": "1",
    "XRayRibs left /right Incl Chest (4 views)": "1",
    "XRaySacroiliac Joints left /right (3 views)": "1",
    "XRayScapula, Complete": "1",
    "XRayShoulder L/R/Bilateral (3 views)": "1",
    "XRaySingle Film to R/O FB": "1",
    "XRaySinuses (<3 views)": "1",
    "XRaySinuses (3 or more views)": "1",
    "XRaySkull (4 views)": "1",
    "XRaySmith and Nephew / Visionaire (Lower ext)": "1",
    "XRaySpine Cerv Incl Obli Flex and Ext (6 Views)": "1",
    "XRaySpine Entire Survey / Scoliosis Study": "1",
    "XRaySterno Clavi joint (3 views)": "1",
    "XRaySternum (2 views)": "1",
    "XRayThoracic Spine (2 Views)": "1",
    "XRayTibia/Fibula left /right": "1",
    "XRayTMJ": "1",
    "XRayToe(s) left /right (2 views)": "1",
    "XRayWrist left /right (2 views)": "1",
    "XRayWrist left /right Min (3 views)": "1"

}
