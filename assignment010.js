fetch("https://6434f30f83a30bc9ad545d2d.mockapi.io/mockdata").then((data)=>{
    return data.json();  //data is converted to object format.
})
.then((objectData)=>{
    // console.log(objectData);
    let tbleData=" ";
    // map to go through each object.
    objectData.map((value)=>{
        tbleData+=`<tr>
            <td>${value.id}</td>
            <td>${value.createdAt}</td>
            <td>${value.name}</td>
            <td><img src='${value.avatar}'/></td>
        </tr>`;
    })
    document.getElementById("tblbdy").innerHTML=tbleData
})
// Catch statement.
.catch((err)=>{
    console.log(err);
})