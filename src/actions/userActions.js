export function fetchUser() {
 return {
      type: "FETCH_USER_FULLFILED",
      payload: {
        name:"Nikos",
        age: "34"
      }
    }
}


export function setUserName(name) {
 return {
      type: "SET_USER_NAME",
      payload: name
    }
}
