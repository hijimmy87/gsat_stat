var subID = 0;
const display = (subID) => {
  const table = document.getElementById("table");
  table.innerHTML = "";
  if (g112[0][subID] === -1) {
    const tr = document.createElement("tr"),
      th = document.createElement("th");
    table.appendChild(tr);
    tr.appendChild(th);
    th.colSpan = 7;
    th.innerText = subID ? "No Data Found" : "Please Select Some Subjects!";
    th.classList.add("text-center", "fst-italic", "text-muted");
  } else {
    let dec = [g112[0][subID], g111[0][subID]],
      inc = [0, 0],
      last = [0, 0];
    for (let i = 0; i < g112[subID].length; i++) {
      const tr = document.createElement("tr"),
        th = document.createElement("th");
      table.prepend(tr);
      tr.appendChild(th);
      th.innerText = i;
      th.classList.add("text-center");
      let now = [g112[subID][i], g111[subID][i]];
      for (const j of [0, 1]) {
        console;
        inc[j] += now[j];
        dec[j] -= last[j];
        const ntd = document.createElement("td"),
          itd = document.createElement("td"),
          dtd = document.createElement("td");
        ntd.innerText = now[j].toLocaleString();
        itd.innerText = inc[j].toLocaleString();
        dtd.innerText = dec[j].toLocaleString();
        tr.append(ntd, itd, dtd);
      }
      last = now;
    }
  }
};

const subChange = (elem) => {
  subID += (elem.checked * 2 - 1) * Number(elem.value);
  display(subID);
};

display(subID);
