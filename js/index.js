const uri = '';
const id = '';
const sheet = 'studio';
const endpoint = `${uri}?id=${id}&sheet=${sheet}`;

const renderJson = (json) => {
  const studios = json.records;
  studios.forEach(studio => {
   const studioDiv = document.createElement('div');
   const studioTitle = document.createElement("span");
   studioTitle.className = 'studio-title';
   studioTitle.textContent = studio['name-ja'];
   const studioTitleEn = document.createElement("span");
   studioTitleEn.className = 'studio-title-en';
   studioTitleEn.textContent = studio['name-en'];
   studioDiv.appendChild(studioTitle);
   studioDiv.appendChild(studioTitleEn);
   document.getElementById('studios').appendChild(studioDiv);
 });
  document.getElementById('result').textContent = JSON.stringify(json, null, 2);
}

const getData = async () => {
  try{
    const response =  await fetch(endpoint);
    if(response.ok){
			let jsonResponse = await response.json();
			jsonResponse.records.pop();
			renderJson(jsonResponse);
    }
  }
  catch(error){
    console.log(error);
  }
}

getData();