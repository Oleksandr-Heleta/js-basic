/*
 1. Создать объект Point, содержащий два свойства: "x" и "y" — координаты точки, и метод GetQuadrant, вычисляющий, в каком квадранте в декартовой системе координат находится данная точка. Протестируйте данный объект, изменяя значения его координат, и повторно вызавая метод GetQuadrant.
*/
  
var point = {
    x: 0,
    y: 0,
    quadrant: 'center',
    getQuadrant: function (x, y) {
        if (x === 0 && y == 0) { console.log('Point in the center'); return point.quadrant = 'center'; }
        else if (x > 0 && y > 0) { console.log('Point in I quadrant'); return point.quadrant = 'I quadrant'; }
        else if (x < 0 && y > 0) { console.log('Point in II quadrant'); return point.quadrant = 'II quadrant'; }
        else if (x < 0 && y < 0) { console.log('Point in III quadrant'); return point.quadrant = 'III quadrant'; }
        else  {console.log('Point in the IV quadrant'); return point.quadrant = 'IV quadrant'; }
    }
}

