var resume = {
  firstName: "Sky",
  lastName: "Winston",
  experience: [
    {
      company: "Galvanize",
      startDate: "7/20/2015",
      endDate: "1/20/2016",
      references: [
        {andreas: "303-123-4567"},
        {andrew: "720-123-4567"},
        {emily: "970-123-4567"}
        ],
      companyAddress: {
        galvanize: 
         {
          address: "5th Floor, 1035 Pearl Street",
          city: "Boulder",
          state: "CO",
          zip: "80302"
         } 
      }
    },
    {
      company: "Apple",
      startDate: "09/07/2007",
      endDate: "07/15/2015",
      references: [
        {
          nick: "303-123-4567"
        },
        {
          andrew: "720-123-4567"
        },
        {
          bk: "970-123-4567"
        }
      ],
      companyAddress: {
        apple: 
         {
          address: "29th St Mall",
          city: "Boulder",
          state: "CO",
          zip: "80302"
         } 
      }
    },
  ],
};

function myName(){
  return resume["firstName"] + " " + resume["lastName"] + "\n\n";
}

function workExp(){
  return "Experience:\n\n" +
  resume["experience"][0]["company"] + "\n" +
  resume["experience"][0]["companyAddress"]["galvanize"]["address"] + "\n" +
  resume["experience"][0]["companyAddress"]["galvanize"]["city"] + "," +
  resume["experience"][0]["companyAddress"]["galvanize"]["state"] + " " +
  resume["experience"][0]["companyAddress"]["galvanize"]["zip"] + "\n" +
  resume["experience"][0]["startDate"]+" — "+ resume["experience"][0]["endDate"] + "\n" +
  "References:\n" +
  "Andreas: " + resume["experience"][0]["references"][0]["andreas"] + "\n" +
  "Andrew: " + resume["experience"][0]["references"][1]["andrew"] + "\n" +
  "Emily: " + resume["experience"][0]["references"][2]["emily"] + "\n" + "\n" +
  resume["experience"][1]["company"] + "\n" +
  resume["experience"][1]["companyAddress"]["apple"]["address"] + "\n" +
  resume["experience"][1]["companyAddress"]["apple"]["city"] + "," +
  resume["experience"][1]["companyAddress"]["apple"]["state"] + " " +
  resume["experience"][1]["companyAddress"]["apple"]["zip"] + "\n" +
  resume["experience"][1]["startDate"]+" — "+ resume["experience"][1]["endDate"] + "\n" +
  "References:\n" +
  "Nick: " + resume["experience"][1]["references"][0]["nick"] + "\n" +
  "Andrew: " + resume["experience"][1]["references"][1]["andrew"] + "\n" +
  "Bryan: " + resume["experience"][1]["references"][2]["bk"] + "\n" + "\n";
}

function printResume() { 
  console.log(myName() + workExp());
};

printResume(); // works!