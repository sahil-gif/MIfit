
var introdution,patientDetail,selectDisease,diseaseDetail,viewReport,bloodPressure,diabeties,covid19,viewReportNegative,diabetiesViewReportNegative,covid19VeiwReportNegative,tip,bpTips,dTips,cTips;
var patientName, patientAge, patientSex, patientSubmit, patientPrev;
var data;
var diseaseSelection,questionSelectDisease,diseaseSubmit,diseasePrev;
var  bloodPressureSubmit,bloodPressurePrev,bloodPressureQuestion1,bloodPressureQuestion2,bloodPressureQuestion3,bloodPressureQuestion4,bloodPressureQuestion5,bloodPressureQuestion6,bloodPressureQuestion7,bloodPressureYesNo1,bloodPressureYesNo2,bloodPressureYesNo3,bloodPressureYesNo4,bloodPressureYesNo5,bloodPressureYesNo6,bloodPressureYesNo7,bloodPressureVeiwReport;
var diabetiesSubmit,diabetiesPrev,diabetiesQuestion1,diabetiesQuestion2,diabetiesQuestion3,diabetiesQuestion4,diabetiesQuestion5,diabetiesQuestion6,diabetiesQuestion7,diabetiesYesNo1,diabetiesYesNo2,diabetiesYesNo3,diabetiesYesNo4,diabetiesYesNo5,diabetiesYesNo6,diabetiesYesNo7;
var covid19Question1,covid19Question2,covid19Question3,covid19Question4,covid19Question5,covid19Question6,covid19Question7,covid19Submit,covid19Prev,covid19YesNo1,covid19YesNo2,covid19YesNo3,covid19YesNo4,covid19YesNo5,covid19YesNo6,covid19YesNo7;
var viewReportSafe,viewReportNext,viewReportPrevious,viewReportTip;
var viewReportNegativeNext,viewReportNegativePrevious,viewReportNegativeNotSafe;
var viewReportDiabetiesNegativeNext,viewReportDiabetiesNegativePrevious,viewReportDiabetiesNegativeNotSafe,diabetiesVeiwReport;
var viewReportCovid19NegativeNext,viewReportCovid19NegativePrevious,viewReportCovid19NegativeNotSafe,covid19VeiwReport;
var score = 0;
var scoreDiabeties = 0 ;
var scoreCovid19 = 0 ;
var BPvalueYesNo1,BPvalueYesNo2,BPvalueYesNo3,BPvalueYesNo4,BPvalueYesNo5,BPvalueYesNo6,BPvalueYesNo7;
var sugarvalueYesNo1,sugarvalueYesNo2,sugarvalueYesNo3,sugarvalueYesNo4,sugarvalueYesNo5,sugarvalueYesNo6,sugarvalueYesNo7;
var covid19valueYesNo1,covid19valueYesNo2,covid19valueYesNo3,covid19valueYesNo4,covid19valueYesNo5,covid19valueYesNo6,covid19valueYesNo7;
var valuecovid19;
var valueDiabeties;
var value;
var tipsEarn,tipsEFullForm,tipsAFullForm,tipsRFullForm,tipsNFullForm,tipsExercise,tipsExercise2,tipsAttitude,tipsRest,tipsNutrition,tipsprev;
var bptipAdvice,bptip2Advice,bptip3Advice,bptip1Advice,bptip,bptip1,bptip2,bptip3,bptipPrev;
var dtipAdvice,dtip2Advice,dtip3Advice,dtip1Advice,dtip,dtip1,dtip2,dtip3,dtipPrev;
var background1,background2,background3,background4,background5,background6,background7,background8,background9,background10;

function preload (){
    background1 = loadImage("background1.png");
    background2 = loadImage("background2.png");
    background3 = loadImage("background3.png");
    background4 = loadImage("bp.png");
    background5 = loadImage("diabeties.png");
    background6 = loadImage("covid19.png");
    background7 = loadImage("covid.png");
    background8 = loadImage("bp1.png");
    background9 = loadImage("diabeties2.png");
    background10 = loadImage("back.png");
    
}
function setup(){
    
canvas = createCanvas(windowWidth-10,windowHeight+50);
initializeCTips();
initializeDTips();
initializeBPTips();
initializeTips();
initializeVeiwReportCovid19Negative();
initializeVeiwReportDiabetiesNegative();
initializeVeiwReportNegative();
initializeVeiwReport();
intializeCovid19();
initializeDiabeties();
initializePatientDetail();
initializeBloodPressure();
initializeDisease();
initializeIntroduction();

bloodPressure = new BloodPressure();
bloodPressure.hide();
diabeties = new Diabeties();
diabeties.hide();
covid19 = new Covid19();
covid19.hide();

selectDisease = new SelectDisease();
selectDisease.hide();

patientDetail = new PatientDetail();
patientDetail.hide();

introdution = new Introduction(patientDetail);
introdution.display();
//selectDisease.display();


viewReport = new ViewReport();   
viewReport.hide();

viewReportNegative = new ViewReportNegative;
viewReportNegative.hide();

diabetiesViewReportNegative = new DiabetiesViewReportNegative;
diabetiesViewReportNegative.hide();

covid19VeiwReportNegative = new Covid19ViewReportNegative;
covid19VeiwReportNegative.hide();

tip = new Tip ;
tip.hide();

bpTips = new BPTips ;
bpTips.hide();

dTips = new DTips ;
dTips.hide();

cTips = new CTips;
cTips.hide();
}

function initializeIntroduction() {
    start = createButton('Start');      
    start.position(windowWidth/2-50,windowHeight/2+190);
  
    start.style('background-color', '#0ed18d');
}

function initializePatientDetail() {
    patientName = createInput('Name');
    patientName.position(windowWidth/2-60, windowHeight/2-150);
    
    patientAge = createInput('Age');
    patientAge.position(windowWidth/2-60, windowHeight/2-120);
    
    patientSex = createRadio();
    patientSex.position(windowWidth/2-60, windowHeight/2-90);
    patientSex.option('Male');
    patientSex.option('Female');

    patientSubmit = createButton('Submit');
    patientPrev = createButton('Previous');        

    patientSubmit.position(windowWidth/2-80, windowHeight/2);
    patientPrev.position(windowWidth/2-10, windowHeight/2);

   
}
function initializeDisease(){
    diseaseSelection = createRadio();
    diseaseSelection.position(windowWidth/2-200, windowHeight/2-50);
    diseaseSelection.option('Blood Pressure');
    diseaseSelection.option('Diabeties');
    diseaseSelection.option('covid-19');

    questionSelectDisease = createElement('h2','Select disease');
    questionSelectDisease.position(windowWidth/2-160, windowHeight/2-150);

    diseaseSubmit = createButton('Next');
    diseasePrev = createButton('Previous');

    diseaseSubmit.position(windowWidth/2-60, windowHeight/2);
    diseasePrev.position(windowWidth/2-10, windowHeight/2);
}
function initializeBloodPressure(){
    bloodPressureSubmit = createButton('Submit');
    bloodPressurePrev = createButton('Previous');
   
    bloodPressureSubmit.position(windowWidth/2-100, windowHeight/2+320);
    bloodPressurePrev.position(windowWidth/2-20, windowHeight/2+320);
    

    bloodPressureQuestion1 = createElement('h4','Are you Experiencing Severe headache ?');
    bloodPressureQuestion1.position(windowWidth/2-250, windowHeight/2-300);
    bloodPressureQuestion2 = createElement('h4','Are you Experiencing NoseBleed ?');
    bloodPressureQuestion2.position(windowWidth/2-250, windowHeight/2-220);
    bloodPressureQuestion3 = createElement('h4','Are you Experiencing Fatigue or confusion ?');
    bloodPressureQuestion3.position(windowWidth/2-250, windowHeight/2-140);
    bloodPressureQuestion4 = createElement('h4','Are you Experiencing Vision problems ?');
    bloodPressureQuestion4.position(windowWidth/2-250, windowHeight/2-60);
    bloodPressureQuestion5 = createElement('h4','Are you experiencing Chest pain  ?');
    bloodPressureQuestion5.position(windowWidth/2-250, windowHeight/2+20);
    bloodPressureQuestion6 = createElement('h4','Are you Experiencing Irregular heartbeat ?');
    bloodPressureQuestion6.position(windowWidth/2-250, windowHeight/2+100);
    bloodPressureQuestion7 = createElement('h4','Are you Experiencing Blood in the urine ?');
    bloodPressureQuestion7.position(windowWidth/2-250, windowHeight/2+180);

    bloodPressureYesNo1 = createRadio();
    bloodPressureYesNo1.position(windowWidth/2-190, windowHeight/2-240);
    bloodPressureYesNo1.option('Yes');
    bloodPressureYesNo1.option('No');   

    bloodPressureYesNo2 = createRadio();
    bloodPressureYesNo2.position(windowWidth/2-190, windowHeight/2-160);
    bloodPressureYesNo2.option('Yes');
    bloodPressureYesNo2.option('No');

    bloodPressureYesNo3 = createRadio();
    bloodPressureYesNo3.position(windowWidth/2-190, windowHeight/2-80);
    bloodPressureYesNo3.option('Yes');
    bloodPressureYesNo3.option('No');

    bloodPressureYesNo4 = createRadio();
    bloodPressureYesNo4.position(windowWidth/2-190, windowHeight/2);
    bloodPressureYesNo4.option('Yes');
    bloodPressureYesNo4.option('No');

    bloodPressureYesNo5 = createRadio();
    bloodPressureYesNo5.position(windowWidth/2-190, windowHeight/2+80);
    bloodPressureYesNo5.option('Yes');
    bloodPressureYesNo5.option('No');

    bloodPressureYesNo6 = createRadio();
    bloodPressureYesNo6.position(windowWidth/2-190, windowHeight/2+160);
    bloodPressureYesNo6.option('Yes');
    bloodPressureYesNo6.option('No');

    bloodPressureYesNo7 = createRadio();
    bloodPressureYesNo7.position(windowWidth/2-190, windowHeight/2+240);
    bloodPressureYesNo7.option('Yes');
    bloodPressureYesNo7.option('No');
}
function initializeDiabeties(){
    diabetiesSubmit = createButton('Submit');
    diabetiesPrev = createButton('Previous');
    diabetiesSubmit.position(windowWidth/2-100, windowHeight/2+320);
    diabetiesPrev.position(windowWidth/2-20, windowHeight/2+320);

    diabetiesQuestion1 = createElement('h4','Are you Urinating often. ?');
    diabetiesQuestion1.position(windowWidth/2-250, windowHeight/2-300);
    diabetiesQuestion2 = createElement('h4','Are you Feeling very thirsty ?');
    diabetiesQuestion2.position(windowWidth/2-250, windowHeight/2-220);
    diabetiesQuestion3 = createElement('h4','Are you Feeling very hungry—even though you are eating ?');
    diabetiesQuestion3.position(windowWidth/2-250, windowHeight/2-140);
    diabetiesQuestion4 = createElement('h4','Are you Feeling Extreme fatigue ?');
    diabetiesQuestion4.position(windowWidth/2-250, windowHeight/2-60);
    diabetiesQuestion5 = createElement('h4','Are you Experiencing Blurry vision ?');
    diabetiesQuestion5.position(windowWidth/2-250, windowHeight/2+20);
    diabetiesQuestion6 = createElement('h4','Are you Experiencing Cuts/bruises that are slow to heal ?');
    diabetiesQuestion6.position(windowWidth/2-250, windowHeight/2+100);
    diabetiesQuestion7 = createElement('h4','Are you Experiencing Weight loss—even though you are eating more ?');
    diabetiesQuestion7.position(windowWidth/2-250, windowHeight/2+180);

    diabetiesYesNo1 = createRadio();
    diabetiesYesNo1.position(windowWidth/2-190, windowHeight/2-240);
    diabetiesYesNo1.option('Yes');
    diabetiesYesNo1.option('No');   

    diabetiesYesNo2 = createRadio();
    diabetiesYesNo2.position(windowWidth/2-190, windowHeight/2-160);
    diabetiesYesNo2.option('Yes');
    diabetiesYesNo2.option('No');

    diabetiesYesNo3 = createRadio();
    diabetiesYesNo3.position(windowWidth/2-190, windowHeight/2-80);
    diabetiesYesNo3.option('Yes');
    diabetiesYesNo3.option('No');

    diabetiesYesNo4 = createRadio();
    diabetiesYesNo4.position(windowWidth/2-190, windowHeight/2);
    diabetiesYesNo4.option('Yes');
    diabetiesYesNo4.option('No');

    diabetiesYesNo5 = createRadio();
    diabetiesYesNo5.position(windowWidth/2-190, windowHeight/2+80);
    diabetiesYesNo5.option('Yes');
    diabetiesYesNo5.option('No');

    diabetiesYesNo6 = createRadio();
    diabetiesYesNo6.position(windowWidth/2-190, windowHeight/2+160);
    diabetiesYesNo6.option('Yes');
    diabetiesYesNo6.option('No');

    diabetiesYesNo7 = createRadio();
    diabetiesYesNo7.position(windowWidth/2-190, windowHeight/2+240);
    diabetiesYesNo7.option('Yes');
    diabetiesYesNo7.option('No');

}
function intializeCovid19(){
    covid19Submit = createButton('Submit');
    covid19Prev = createButton('Previous');
    covid19Submit.position(windowWidth/2-100, windowHeight/2+320);
    covid19Prev.position(windowWidth/2-20, windowHeight/2+320);

    covid19Question1 = createElement('h4','Are you experiencing fever,dry cough,tiredness ?');
    covid19Question1.position(windowWidth/2-250, windowHeight/2-300);
    covid19Question2 = createElement('h4','Are you experiencing difficulty breathing  ?');
    covid19Question2.position(windowWidth/2-250, windowHeight/2-220);
    covid19Question3 = createElement('h4','Are you experiencing chest pain or pressure ?');
    covid19Question3.position(windowWidth/2-250, windowHeight/2-140);
    covid19Question4 = createElement('h4','Are you experiencing loss of speech or movement ?');
    covid19Question4.position(windowWidth/2-250, windowHeight/2-60);
    covid19Question5 = createElement('h4','Are you experiencing aches and pains ?');
    covid19Question5.position(windowWidth/2-250, windowHeight/2+20);
    covid19Question6 = createElement('h4','Are you experiencing diarrhoea and conjunctivitis ?');
    covid19Question6.position(windowWidth/2-250, windowHeight/2+100);
    covid19Question7 = createElement('h4','Are you experiencing headache and  loss of taste or smell ?');
    covid19Question7.position(windowWidth/2-250, windowHeight/2+180);

    covid19YesNo1 = createRadio();
    covid19YesNo1.position(windowWidth/2-190, windowHeight/2-240);
    covid19YesNo1.option('Yes');
    covid19YesNo1.option('No');   

    covid19YesNo2 = createRadio();
    covid19YesNo2.position(windowWidth/2-190, windowHeight/2-160);
    covid19YesNo2.option('Yes');
    covid19YesNo2.option('No');

    covid19YesNo3 = createRadio();
    covid19YesNo3.position(windowWidth/2-190, windowHeight/2-80);
    covid19YesNo3.option('Yes');
    covid19YesNo3.option('No');

    covid19YesNo4 = createRadio();
    covid19YesNo4.position(windowWidth/2-190, windowHeight/2);
    covid19YesNo4.option('Yes');
    covid19YesNo4.option('No');

    covid19YesNo5 = createRadio();
    covid19YesNo5.position(windowWidth/2-190, windowHeight/2+80);
    covid19YesNo5.option('Yes');
    covid19YesNo5.option('No');

    covid19YesNo6 = createRadio();
    covid19YesNo6.position(windowWidth/2-190, windowHeight/2+160);
    covid19YesNo6.option('Yes');
    covid19YesNo6.option('No');

    covid19YesNo7 = createRadio();
    covid19YesNo7.position(windowWidth/2-190, windowHeight/2+240);
    covid19YesNo7.option('Yes');
    covid19YesNo7.option('No');
}
function initializeVeiwReport(){
    viewReportSafe = createElement('h2','You are Absolutely fit.');
    viewReportSafe.position(windowWidth/2-190, windowHeight/2-80);

   viewReportNext = createButton('Next');
    viewReportPrevious = createButton('Previous');
    viewReportTip = createButton('Tips');

    viewReportNext.position(windowWidth/2-100, windowHeight/2+320);
    viewReportPrevious.position(windowWidth/2-20, windowHeight/2+320);
    viewReportTip.position(windowWidth/2-60, windowHeight/2+180);
}
function initializeVeiwReportNegative(){
    viewReportNegativeNotSafe = createElement('h2','We are Sorry, You May be Suffering with high Blood Pressure.');
    viewReportNegativeNotSafe.position(windowWidth/2-190, windowHeight/2-200);

    viewReportNegativeNext = createButton('Tips');
    viewReportNegativePrevious = createButton('Previous');

    viewReportNegativeNext.position(windowWidth/2-100, windowHeight/2+320);
    viewReportNegativePrevious.position(windowWidth/2-20, windowHeight/2+320);

    bloodPressureVeiwReport =createButton('Veiw Report');
    bloodPressureVeiwReport.position(windowWidth/2-60, windowHeight/2+180);
}
function initializeVeiwReportDiabetiesNegative(){
    viewReportDiabetiesNegativeNotSafe = createElement('h2','We are Sorry, You May be Suffering with  Diabeties.');
    viewReportDiabetiesNegativeNotSafe.position(windowWidth/2-190, windowHeight/2-200);

    viewReportDiabetiesNegativeNext = createButton('Tips');
    viewReportDiabetiesNegativePrevious = createButton('Previous');

    viewReportDiabetiesNegativeNext.position(windowWidth/2-100, windowHeight/2+320);
    viewReportDiabetiesNegativePrevious.position(windowWidth/2-20, windowHeight/2+320);

    diabetiesVeiwReport =createButton('Veiw Report');
    diabetiesVeiwReport.position(windowWidth/2-60, windowHeight/2+180);
}
function initializeVeiwReportCovid19Negative(){
    viewReportCovid19NegativeNotSafe = createElement('h2','We are Sorry, You May be Suffering with  Covid-19.');
    viewReportCovid19NegativeNotSafe.position(windowWidth/2-190, windowHeight/2-200);

    viewReportCovid19NegativeNext = createButton('Tips');
    viewReportCovid19NegativePrevious = createButton('Previous');

    viewReportCovid19NegativeNext.position(windowWidth/2-100, windowHeight/2+320);
    viewReportCovid19NegativePrevious.position(windowWidth/2-20, windowHeight/2+320);

    Covid19VeiwReport =createButton('Veiw Report');
    Covid19VeiwReport.position(windowWidth/2-60, windowHeight/2+180);
}
function initializeTips(){
    tipsEarn = createElement('h2','EARN');
    tipsEFullForm = createElement('h3','E - Exercise');
    tipsAFullForm = createElement('h3','A - Attitude');
    tipsRFullForm = createElement('h3','R - Rest');
    tipsNFullForm = createElement('h3','N - Nutrition');
    tipsExercise = createElement('h4','EXERCISE - Help you control your weight. ...    ')
    tipsExercise2 = createElement('h4','Reduce your risk of heart diseases. ...');
    tipsAttitude = createElement('h5','ATTITUDE-An active, curious mind,Increased productivity at work.');
    tipsRest = createElement('h4','REST-Better productivity and concentration. ...')
    tipsNutrition = createElement('h5','NUTRITION-Reduce the risk of some diseases,diabetes,stroke,some cancers.')
    tipsprev = createButton('Previous');
    tipsEarn.position(windowWidth/2-100, windowHeight/2-300);
    tipsEFullForm.position(windowWidth/2-190, windowHeight/2-250);
    tipsAFullForm.position(windowWidth/2-190, windowHeight/2-200);
    tipsRFullForm.position(windowWidth/2-190, windowHeight/2-150);
    tipsNFullForm.position(windowWidth/2-190, windowHeight/2-100);
    tipsExercise.position(windowWidth/2-190, windowHeight/2-50);
    tipsExercise2.position(windowWidth/2-220, windowHeight/2);
    tipsAttitude.position(windowWidth/2-220, windowHeight/2+50);
    tipsRest.position(windowWidth/2-220, windowHeight/2+90);
    tipsNutrition.position(windowWidth/2-220, windowHeight/2+140);
    tipsprev.position(windowWidth/2-20, windowHeight/2+320);


}
function initializeBPTips(){
    bptipAdvice = createElement('h3','Here are few Advice for Blood Pressure Recovery :-');
    bptipAdvice.position(windowWidth/2-250, windowHeight/2-300);
    bptip1 = createElement('h2','SELF CARE');
    bptip1.position(windowWidth/2-190, windowHeight/2-200);
    bptip1Advice = createElement('h4','Physical exercise, Stress management, Quitting smoking, Home blood pressure monitors and Low sodium diet ');
    bptip1Advice.position(windowWidth/2-190, windowHeight/2-100);
    bptip2 = createElement('h2','MEDICATIONS');
    bptip2.position(windowWidth/2-190, windowHeight/2);
    bptip2Advice = createElement('h4','ACE inhibitor, Diuretic, Beta blocker, Antihypertensive drug, Calcium channel blocker and Vasodilator    ');
    bptip2Advice.position(windowWidth/2-190, windowHeight/2+100);
    bptip3 = createElement('h2','SUPPLIEMENTS');
    bptip3.position(windowWidth/2-190, windowHeight/2+150);
    bptip3Advice = createElement('h5','Nutrilite Salmon Omega 3,Nutrilite CH Balance,Nutrilite Garlic,Nutrilite Co-EnzymeQ10');
    bptip3Advice.position(windowWidth/2-220, windowHeight/2+250);
    bptipPrev = createButton('Previous');
    bptipPrev.position(windowWidth/2-20, windowHeight/2+320);
}
function initializeDTips(){
    dtipAdvice = createElement('h3','Here are few Advice for Diabeties Recovery :-');
    dtipAdvice.position(windowWidth/2-250, windowHeight/2-300);
    dtip1 = createElement('h2','SELF CARE');
    dtip1.position(windowWidth/2-190, windowHeight/2-200);
   dtip1Advice = createElement('h4','Physical exercise, Stress management, Quitting smoking,Avoid Sweets,Meditation ');
    dtip1Advice.position(windowWidth/2-190, windowHeight/2-100);
    dtip2 = createElement('h2','MEDICATIONS');
    dtip2.position(windowWidth/2-190, windowHeight/2);
    dtip2Advice = createElement('h4','Consult with the Doctor.');
    dtip2Advice.position(windowWidth/2-190, windowHeight/2+100);
    dtip3 = createElement('h2','SUPPLIEMENTS');
    dtip3.position(windowWidth/2-190, windowHeight/2+150);
   dtip3Advice = createElement('h5','Nutrilite Madhunashni,Nutrilite All plant protein,Nutrilite Ashwagandha,Nutrilite Daily');
    dtip3Advice.position(windowWidth/2-220, windowHeight/2+250);
    dtipPrev = createButton('Previous');
    dtipPrev.position(windowWidth/2-20, windowHeight/2+320);
}
function initializeCTips(){
    ctipAdvice = createElement('h3','Here are few Advice for Covid-19 Recovery :-');
    ctipAdvice.position(windowWidth/2-250, windowHeight/2-300);
    ctip1 = createElement('h2','SELF CARE');
    ctip1.position(windowWidth/2-190, windowHeight/2-200);
   ctip1Advice = createElement('h5','Clean Environment ,Personal Cleaniness, Maintain Social Distancing,Use Mask,Face Sheilds and Gloves,Hand Sanitization ');
    ctip1Advice.position(windowWidth/2-190, windowHeight/2-100);
    ctip2 = createElement('h2','MEDICATIONS');
    ctip2.position(windowWidth/2-190, windowHeight/2);
    ctip2Advice = createElement('h4','Consult with the Doctor.');
    ctip2Advice.position(windowWidth/2-190, windowHeight/2+100);
    ctip3 = createElement('h2','SUPPLIEMENTS');
    ctip3.position(windowWidth/2-190, windowHeight/2+150);
   ctip3Advice = createElement('h5','Nutrilite Echnecea Citrus Concentrate,Nutrilite APP,Nutrilite Tulsi,Nutrilite Daily,Nutrilite Natural C,Nutrilite Vasakha Mulethi & Surasa');
    ctip3Advice.position(windowWidth/2-220, windowHeight/2+250);
    ctipPrev = createButton('Previous');
    ctipPrev.position(windowWidth/2-20, windowHeight/2+320);
}