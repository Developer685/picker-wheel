
export const WheelElement = ({ numberOfElements }) => {

  const createCircularSector = (radius, startAngle, endAngle) => {
    const radians = (angle) => (Math.PI / 180) * angle;
    const x1 = radius * Math.cos(radians(startAngle));
    const y1 = radius * Math.sin(radians(startAngle));
    const x2 = radius * Math.cos(radians(endAngle));
    const y2 = radius * Math.sin(radians(endAngle));
    return `M 0 0 L ${x1} ${y1} A ${radius} ${radius} 0 ${endAngle - startAngle > 180 ? 1 : 0} 1 ${x2} ${y2} Z`;
  };

  const createWheel = () => {

    for (let i = 0; i < numberOfElements; i++) {
      return (
        <svg width="200" height="200" viewBox="-100 -100 200 200">
          {
            Array.from({ length: numberOfElements }).map((_, i) => {
              const startAngle = (360 / numberOfElements) * i;
              const endAngle = startAngle + (360 / numberOfElements);
              const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
              return (
                <path key={i} d={createCircularSector(100, startAngle, endAngle)} fill={randomColor} />
              );
            })}
        </svg>
      );
    };
  };

  return (
    createWheel(numberOfElements)
  );
}