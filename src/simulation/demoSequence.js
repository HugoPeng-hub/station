export const DEMO_INTERVAL = 4200;
export const eventTime = () => new Date().toLocaleTimeString('en-GB',{hour12:false});
export function eventsForFrame(frame){const time=eventTime();return [[time,frame.input.includes('Dial')?'DIAL':'TOUCH',frame.input.includes('Dial')?frame.input:`${frame.x} ${frame.y}`],[time,'POSITION',(frame.position/100).toFixed(2)],[time,'SPEECH_OUTPUT',frame.context],[time,'HAPTIC_SHORT','120 ms · 68%']];}
