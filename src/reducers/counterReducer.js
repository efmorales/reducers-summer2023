export default function counterReducer (state, action) {

 switch (action.type) {
    case "RESET":
        return 0;
    case "Add":
        return state + action.value;
    case "Subtract":
        return state - action.value;
    case "Multiply":
        return state * action.value;
    case "Divide":
        return state / action.value;
    case "Power":
        return state ** action.value;
    case "Remainder":
        return state % action.value;
    case "Square Root":
        return Math.sqrt(state);
    default:
        alert ("not a type");
 }
}