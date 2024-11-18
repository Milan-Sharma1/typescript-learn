//continue in narrowing
interface Circle {
  kind: "circle";
  radius: number;
}
interface Square {
  kind: "square";
  side: number;
}
interface Rectangle {
  kind: "rectangle";
  length: number;
  width: number;
}

type Shape = Circle | Square | Rectangle;
function getTrueShape(val: Shape) {
  if (val.kind === "circle") {
    return Math.PI * val.radius ** 2;
  }
  // return val.side * val.side;
}

function getArea(val: Shape) {
  switch (val.kind) {
    case "circle":
      return Math.PI * val.radius ** 2;
    case "square":
      return val.side * val.side;
    case "rectangle":
      return val.length * val.width;
    default:
      const _defaultForShape: never = val;
      return _defaultForShape;
  }
}
