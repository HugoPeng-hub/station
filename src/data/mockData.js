export const frames = [
 {position:42,section:'3.2',context:'Data Analysis',x:.68,y:.31,paragraph:'04',speech:'Section 3.2, Data Analysis.',pattern:'BOUNDARY',action:'NAVIGATE',input:'Rotary Dial +1'},
 {position:47,section:'3.3',context:'Experimental Results',x:.73,y:.42,paragraph:'05',speech:'Image. Experimental Results.',pattern:'OBJECT FOCUS',action:'EXPLORE',input:'Touch Surface',},
 {position:38,section:'3.1',context:'Research Method',x:.31,y:.44,paragraph:'03',speech:'Section 3.1, Research Method.',pattern:'BOUNDARY',action:'NAVIGATE',input:'Rotary Dial −1'},
];
export const landmarks = ['INTRO','BACKGROUND','METHOD','DATA ANALYSIS','RESULTS','CONCLUSION'];
export const initialEvents = [
 ['21:42:01','DEVICE_CONNECTED','Controller 01 · USB'],
 ['21:42:03','DIAL +1','Semantic navigation'],
 ['21:42:03','SEMANTIC_LEVEL','SECTION'],
 ['21:42:03','POSITION','0.42'],
 ['21:42:04','SPEECH_OUTPUT','Section 3.2'],
 ['21:42:04','HAPTIC_SHORT','120 ms · 68%'],
];
