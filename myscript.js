const elmTitle = document.getElementById("title");
const elmStartTime = document.getElementById("startTime");
const elmEndTime = document.getElementById("endTime");
const elmAdd = document.getElementById("add");

let dataTime = new Date();
dataTime = new Date(dataTime.getTime() - dataTime.getTimezoneOffset() * 60000);
dataTime = dataTime.toISOString();
dataTime = dataTime.substring(0, 16);

elmStartTime.value = dataTime;
elmEndTime.value = dataTime;

elmAdd.onclick = () => {
  const title = encodeURI(elmTitle.value);
  const startTime = elmStartTime.value;
  const endTime = elmEndTime.value;

  let url = "xxxxxxx";

  url += "?title=" + title + "&startTime=" + startTime + "&endTime=" + endTime;
  console.log(url);

  fetch(url, {
    method: "GET",
    mode: "cors"
  })
}