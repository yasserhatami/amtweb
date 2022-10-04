
   export default function () { return { headers: {
        Authorization: `Bearer ${localStorage.getItem("x-access-token")}`,
        "x-access-token": localStorage.getItem("x-access-token"),
    }
    }
   }
