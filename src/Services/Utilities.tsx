const formatdate=(dateString:string)=>{
    const date = new Date(dateString);
    const options = { year: 'numeric' as const, month: 'short' as const};
    return date.toLocaleString('en-US', options);
}

const timeago=(time:string)=>{
    const now = new Date();
    const postDate=new Date(time);
    const diff = now.getTime()-postDate.getTime();

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);

    if(seconds < 60){
        return `${seconds} seconds ago`;
    }
    else if(minutes < 60){
        return `${minutes} minutes ago`;
    }
    else if(hours < 24){
        return `${hours} hours ago`;
    }
    else if(days < 30){
        return `${days} days ago`;
    }
    else{
        return `${months} months ago`;
    }
 
}
const getBase64=(file:any) =>{
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });
}
const formatInterviewTime = (dateStr: any) => {
    const date = new Date(dateStr);
  
    const year = date.getUTCFullYear();
    const month = date.toLocaleString('en-US', { month: 'long', timeZone: 'UTC' });
    const day = date.getUTCDate();
  
    const hours = String(date.getUTCHours()).padStart(2, '0');
    const minutes = String(date.getUTCMinutes()).padStart(2, '0');
  
    return `${month} ${day}, ${year} at ${hours}:${minutes}`;
  };
  
  
const openBase64pdf=(base64String:string)=>{
    const byteCharacters=atob(base64String);
    const byteNumbers=new Array(byteCharacters.length);
    for(let i=0;i<byteCharacters.length;i++){
        byteNumbers[i]=byteCharacters.charCodeAt(i);
    }
    const byteArray=new Uint8Array(byteNumbers);
    const blob=new Blob([byteArray], {type:'application/pdf'});
    const url=URL.createObjectURL(blob);
    window.open(url, '_blank');
}


export {formatdate, timeago,getBase64, formatInterviewTime,openBase64pdf};


