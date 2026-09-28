let inputText=document.getElementById("inputText");
let addButton=document.getElementById("addButton");
let listTask=document.getElementById("listTask");
let arr=JSON.parse(localStorage.getItem("task"))||[];


for(let i=0;i<arr.length;i++)
{
listTask.innerHTML+="<p>"+arr[i]+"<button onclick='deleteTask(this)'>Delete</button>"+"</p>";
inputText.value="";

}

addButton.onclick=function(){
let task=inputText.value;
arr.push(task);
localStorage.setItem("task",JSON.stringify(arr));
listTask.innerHTML+="<p>"+task+"<button onclick='deleteTask(this)'>Delete</button>"+"</p>";
inputText.value="";
}

function deleteTask(index){
  arr.splice(index, 1); 
localStorage.setItem("task", JSON.stringify(arr)); 
index.parentElement.remove();
}



///function deleteTask(element){
   /// let items = document.getElementsByTagName("p");

  ///  for(let i = 0; i < items.length; i++){
       // if(items[i] == element.parentElement){
           // arr.splice(i,1);
           // localStorage.setItem("task", JSON.stringify(arr));
          //  break;
       // }
  //  }

  //  element.parentElement.remove();
//}

