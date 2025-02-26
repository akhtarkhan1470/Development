var fruit_Name = prompt("Enter the fruit name: ");
switch(fruit_Name) {
    case "Banana":
        document.write("Banana is available at $2.00/kg");
        break;
        case "Apple":
          document.write("Apple is available at $3.00/kg");
            break;
            case "peach":
                document.write("Its not available");
                break;
                default:
                    document.write("sorry ,its wrong input");
}