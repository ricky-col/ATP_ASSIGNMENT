export function validateTitle(title){
    if(title.length!=0 && title.length>3){
        return "Valid Title"
    }
    else{
        return "In-Valid Title"
    }
}
export function validatepriority(priority){
    if(priority=="low" || priority=="high" || priority=="medium"){
        return "Priority valid"
    }
    else{
        return "Priority Not valid"
    }
    
}
export function validateDueDate(date){
  const selectedDate = new Date(date);
  const today = new Date();
  today.setHours(0, 0, 0, 0); 
  return selectedDate >= today;
}